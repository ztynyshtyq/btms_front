import * as constants from "./constants";
import history from "../services/history";

// TODO: document that all methods started with "event" will be change state general states (api)
export const eventAuthSuccess = () => {
    history.push(`/dashboard`);
    return ({
        type: constants.EVENT_AUTH_SUCCESS,
        success: true,
        isFetching: false
    });
}

export const eventAuthFailed = () => ({
    type: "failed",
    success: false,
    isFetching: false
});