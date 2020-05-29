import * as constants from "./constants";

const initialState = {
    [constants.PAGE_ACCOUNTANT_REPORTS_LIST]: {},
    [constants.PAGE_ACCOUNTANT_SINGLE_REPORT]: {
        previewImageUrl: null
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION_SET_PAGE_SETTINGS:
            return {
                ...state,
                [action.page]: {...action.pageSettings}
            };

        default:
            return state;
    }
};

export default reducer;