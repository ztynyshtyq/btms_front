import * as urls from "../constants/urls";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import setExpenseReportsForUser from "../actions/set_expense_reports_for_user.action";


export const apiSendOnConfirmation = (accessToken, body) => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch(urls.API_SEND_ON_CONFIRMATION, {
        method: "get",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": accessToken
        },
        body: "pass=" + body,
    }).then(response => response.json()/*dispatch(events.eventAuthFailed())*/)
        .then(json => {console.log("ok, sent on confirmation")}, error => dispatch(events.eventAuthFailed()));
}