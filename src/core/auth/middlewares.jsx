import * as constants from "./constants";
import history from "../services/history";

export const authMiddleware = ({getState}) => next => action => {
    console.log(history.location);
    if (getState().userData.accessToken === undefined && history.location.pathname !== "/login") {
        return history.push('/login');
    }
    return next(action);
};