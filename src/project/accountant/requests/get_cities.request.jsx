// TODO: please, document that all methods started with "api" will be sended to server (api)
import * as urls from "../constants/urls";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import setExpenseReportsForUser from "../actions/set_expense_reports_for_user.action";
import setPageSettings from "../../page_settings/actions";


const apiGetExpenseReportsForUserApproval = accessToken => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch(urls.API_GET_CITIES, {
        method: "get",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": accessToken
        }
    }).then(response => response.json()/*dispatch(events.eventAuthFailed())*/)
        .then(json => {
            dispatch(setPageSettings(_processRequest(json)));
        }, error => dispatch(events.eventAuthFailed()));
}

const _processRequest = (data) => {
    console.log(data);
    return (
        data.expense_reports.map((btmsItem) => (
            {
                id: btmsItem.id,
                createData: btmsItem.create_data,
                reportingDateBegin: btmsItem.reporting_date_begin,
                reportingDateEnd: btmsItem.reporting_date_end,
                expenseReportBalance: btmsItem.expense_report_balance >= 0
                    ? btmsItem.expense_report_balance
                    : -btmsItem.expense_report_overspending,
                expenseReportCashPaid: btmsItem.expense_total_amount,
                expenseReportTotalAccrued: btmsItem.expense_report_amounts
                    .map(item => item.amount)
                    .reduce((prev, next) => prev + next),
                accountantApproveId: btmsItem.accountant_approve_id,
                accountantApproveName: btmsItem.accountant_approve_name,
                accountantApproveDate: btmsItem.accountant_approve_date     / 1000,
                chargeCodeId: btmsItem.charge_code_id,
                chargeCodeName: btmsItem.charge_code_name,
                managerApproveName: btmsItem.manager_approve_name,
                managerApproveId: btmsItem.manager_approve_id,
                managerApproveDate: btmsItem.manager_approve_date / 1000,
                expenseReportAmounts: [...new Set(btmsItem.expense_report_amounts.map(item => item.code))]
                    .map(code => ({
                        label: code,
                        total: btmsItem.expense_report_amounts
                            .filter(item => code === item.code)
                            .map(item => item.amount)
                            .reduce((prev, next) => prev + next),
                        comment: btmsItem.expense_report_amounts
                            .filter(item => code === item.code).length === 1 ? btmsItem.expense_report_amounts
                            .find(item => code === item.code).description : "",
                        children: btmsItem.expense_report_amounts
                            .filter(item => code === item.code)
                    })),
                attachments: btmsItem.attached_files,
                destinationName: btmsItem.destination_name,
            })
        )
    );
}

export default apiGetExpenseReportsForUserApproval;