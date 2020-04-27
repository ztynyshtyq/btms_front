// TODO: please, document that all methods started with "api" will be sended to server (api)
import * as urls from "../constants/urls";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import setExpenseReportsFromUser from "../actions/set_expense_reports_from_user.action";


export const apiGetExpenseReportsFromUser = (accessToken) => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch(urls.API_GET_FROM_USER, {
        method: "get",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": accessToken
        }
    }).then(response => response.json()/*dispatch(events.eventAuthFailed())*/)
        .then(json => {
            dispatch(events.eventAuthSuccess());
            dispatch(setExpenseReportsFromUser(json.expense_reports));
        }, error => dispatch(events.eventAuthFailed()));
}