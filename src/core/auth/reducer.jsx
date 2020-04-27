import * as constants from "./constants";

const initialState = {
    username: "mtsoy",
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
            return {
                ...state,
                ...action
            }

        default:
            return state;
    }
};

export default reducer;