import * as actions from "../constants/actions";

const initialState = {
    fromUserRequests: [],
    forUserApproval: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.SET_FROM_USER_EXPENSE_REPORTS:
            return {
                ...state,
                fromUserRequests: action.expenseReportsFromUser
            }
        case actions.SET_FOR_USER_EXPENSE_REPORTS:
            return {
                ...state,
                forUserApproval: action.expenseReportsForUser
            }
        default:
            return state;
    }
};

export default reducer;