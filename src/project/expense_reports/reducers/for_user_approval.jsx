import {combineReducers} from "redux";
import forUserApproval from "./for_user_approval";
import fromUserRequests from "./from_user_requests";

// TODO: from user -> from user requests; for user -> for user approval
export default combineReducers({
    forUserApproval,
    fromUserRequests,
});
