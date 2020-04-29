import * as urls from "../constants/urls";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import setSingleExpenseReportFromUserRequests from "../actions/set_single_expense_report_for_user.action";
import {toast} from 'react-toastify';

export const apiSendOnConfirmation = (accessToken, expenseReport) => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch(urls.API_APPROVE, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": accessToken
        },
        body: "report_id=" + expenseReport.id,
    }).then(response => response.json()/*dispatch(events.eventAuthFailed())*/)
        .then(json => {
            dispatch(setSingleExpenseReportFromUserRequests({...expenseReport, status: "approved by manager"}))
            toast("You have approved this report", {
                autoClose: 5000,
                className: "uc_toast"
            });
        }, error => dispatch(events.eventAuthFailed()));
}