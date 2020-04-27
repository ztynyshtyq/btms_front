// TODO: please, document that all methods started with "api" will be sended to server (api)
import * as constants from "./constants";
import * as events from "./events";
import * as core_events from "../events";
import * as actions from "./actions";


export const apiAuthRequest = (login, pass) => dispatch => {
    dispatch(core_events.eventInitRequest());
    return fetch(constants.API_AUTH_ATTEMPT, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "username=" + login + "&password=" + pass
    }).then(response => response.json()/*dispatch(events.eventAuthFailed())*/)
        .then(json => {
            dispatch(actions.setUser(json.user));
            dispatch(events.eventAuthSuccess());
        }, error => dispatch(events.eventAuthFailed()));
}