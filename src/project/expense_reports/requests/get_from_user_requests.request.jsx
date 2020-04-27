// TODO: please, document that all methods started with "api" will be sended to server (api)
import * as urls from "../constants/urls";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import setExpenseReportsFromUser from "../actions/set_expense_reports_from_user.action";


export const apiGetExpenseReportsFromUser = accessToken => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch(urls.API_GET_FROM_USER_REQUESTS, {
        method: "get",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": accessToken
        }
    }).then(response => response.json()/*dispatch(events.eventAuthFailed())*/)
        .then(json => {
            dispatch(setExpenseReportsFromUser(_processRequest(json)));
        }, error => dispatch(events.eventAuthFailed()));
}

const _processRequest = (data) => {
    return data.expense_reports.map((btmsItem) => {
        return Object.assign({}, btmsItem, {
            createData: btmsItem.create_data / 1000,
            reportingDateBegin: btmsItem.reporting_date_begin,
            reportingDateEnd: btmsItem.reporting_date_end,
            expenseReportBalance: btmsItem.expense_report_balance,
            expenseReportOverspending: btmsItem.expense_report_overspending,
            expenseTotalAmount: btmsItem.expense_total_amount,
            accountantApproveId: btmsItem.accountant_approve_id,
            accountantApproveName: btmsItem.accountant_approve_name,
            accountantApproveDate: btmsItem.accountant_approve_date / 1000,
            chargeCodeId: btmsItem.charge_code_id,
            chargeCodeName: btmsItem.charge_code_name,
            managerApproveName: btmsItem.manager_approve_name,
            managerApproveId: btmsItem.manager_approve_id,
            managerApproveDate: btmsItem.manager_approve_date / 1000,
            expenseReportAmounts: btmsItem.expense_report_amounts,
            destinationName: btmsItem.destination_name,
        });
    });
}