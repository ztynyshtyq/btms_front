import * as constants from "./constants";
import * as gConsts from "../constants";
import {saveState, loadState} from "../services/local_storage";


const initialState = {
    username: "accountant",
    password: "Pass1!",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION_SET_USER:
            return {
                ...state,
                ...action
            }

        case constants.EVENT_AUTH_SUCCESS:
            saveState({userData: state})
            return {
                ...state,
                ...action
            }

            //TODO transfer in different default reducer
        case gConsts.EVENT_REQUEST_INITIATED:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case gConsts.EVENT_REQUEST_PROCESSED:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
};

export default reducer;