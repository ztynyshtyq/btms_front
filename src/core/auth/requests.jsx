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
            dispatch(actions.setUser(_processRequest(json)));
            dispatch(events.eventAuthSuccess());
        }, error => dispatch(events.eventAuthFailed()));
}

const _processRequest = (data) => ({
    firstName: data.user.first_name,
    secondName: data.user.second_name,
    accessToken: data.user.access_token,
    firebaseToken: data.user.firebase_token,
    phoneNumber: data.user.phone_number,
    birthDate: data.user.birth_date,
    marsId: data.user.mars_id,
    organizationId: data.user.organization_id,
});
