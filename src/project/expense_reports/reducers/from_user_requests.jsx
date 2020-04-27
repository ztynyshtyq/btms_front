import * as actions from "../constants/actions";

const reducer = (state = [], action) => {
    switch(action.type){
        case actions.SET_FROM_USER_EXPENSE_REPORTS:
            return {
                ...state,

            }
        default:
            return state;
    }
};

export default reducer;