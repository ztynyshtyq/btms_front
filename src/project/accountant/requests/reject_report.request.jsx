// TODO: please, document that all methods started with "api" will be sended to server (api)
import * as urls from "../constants/urls";
import * as events from "../../../core/auth/events";
import * as core_events from "../../../core/events";
import history from "../../../core/services/history";


const apiRejectReport = (accessToken, reportId) => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch(urls.API_REJECT, {
        method: "put",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": accessToken
        },
        body: "report_id=" + reportId + "&comment=qwerty",
    }).then(response => {
        dispatch(core_events.eventRequestProcessed());
        return response.json();
    }/*dispatch(events.eventAuthFailed())*/)
        .then(json => {
            history.push(`/dashboard`);
            //dispatch(setExpenseReportsForUser(_processRequest(json)));
        }, error => dispatch(events.eventAuthFailed()));
}

const _processRequest = (data) => {

}

export default apiRejectReport;