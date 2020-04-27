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
        case actions.SET_SINGLE_EXPENSE_REPORT_FROM_USER_REQUESTS:
            const newERRequests = state.fromUserRequests.map((item) => {
                if(item.id === action.expenseReportFromUserRequests.id)
                    return action.expenseReportFromUserRequests
                return item;
            });

            console.log(newERRequests);

            return {
                ...state,
                fromUserRequests: newERRequests
            }
        default:
            return state;
    }
};

export default reducer;