import * as actions from "../constants/actions";
import * as constants from "../constants/params";

const initialState = {
    fromUserRequests: [],
    forUserApproval: [],
    currentFilter: {
        mainFilter : constants.PARAM_FILTER_FROM_USER_REQUESTS,
        subFilter: ""
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
            const newERRequestsFromUser = state.fromUserRequests.map((item) => {
                if (item.id === action.expenseReportFromUserRequests.id)
                    return action.expenseReportFromUserRequests
                return item;
            });

            console.log(state);

            return {
                ...state,
                fromUserRequests: newERRequestsFromUser
            }

        case actions.SET_SINGLE_EXPENSE_REPORT_FOR_USER_APPROVAL:
            const newERRequestsForUser = state.forUserApproval.map((item) => {
                if (item.id === action.expenseReportsForUserApproval.id)
                    return action.expenseReportsForUserApproval
                return item;
            });

            console.log(state);


            return {
                ...state,
                forUserApproval: newERRequestsForUser
            }

        case actions.SET_FILTER:
            console.log(state);

            return {
                ...state,
                currentFilter: action.filter,
            }
        default:
            return state;
    }
};

export default reducer;