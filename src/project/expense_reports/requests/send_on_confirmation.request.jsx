import * as urls from "../constants/urls";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import setExpenseReportsForUser from "../actions/set_expense_reports_for_user.action";
import convertSeconds from "../../../core/js_functions/time_converter";
import setSingleExpenseReportFromUserRequests from "../actions/set_single_expense_report_for_user.action";
import {toast} from 'react-toastify';

export const apiSendOnConfirmation = (accessToken, body) => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch(urls.API_SEND_ON_CONFIRMATION, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": accessToken
        },
        body: "data=" + JSON.stringify(_processRequest(body)),
    }).then(response => response.json()/*dispatch(events.eventAuthFailed())*/)
        .then(json => {
            dispatch(setSingleExpenseReportFromUserRequests({...body, status: "Wait"}))
            toast("Your expense report was sent on confirmation", {
                autoClose: 5000,
                className: "uc_toast"
            });
        }, error => dispatch(events.eventAuthFailed()));
}

const _processRequest = (data) => {
    return Object.assign({}, {
        id: data.id,
        username: data.username,
        comments: data.comments,
        status: data.status,
        create_data: data.createData,
        reporting_date_begin: data.reportingDateBegin,
        reporting_date_end: data.reportingDateEnd,
        expense_report_balance: data.expenseReportBalance,
        expense_report_overspending: data.expenseReportOverspending,
        expense_total_amount: data.expenseTotalAmount,
        accountant_approve_id: data.accountantApproveId,
        accountant_approve_name: data.accountantApproveName,
        accountant_approve_date: data.accountantApproveDate,
        charge_code_id: data.chargeCodeId,
        charge_code_name: data.chargeCodeName,
        manager_approve_name: data.managerApproveName,
        manager_approve_id: data.managerApproveId,
        manager_approve_date: data.managerApproveDate,
        expense_report_amounts: data.expenseReportAmounts,
        destination_name: data.destinationName,
        expense_report_routes: data.expense_report_routes,
    });
}
