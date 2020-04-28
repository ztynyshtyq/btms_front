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
            const newERRequests = state.fromUserRequests.map((item) => {
                if (item.id === action.expenseReportFromUserRequests.id)
                    return action.expenseReportFromUserRequests
                return item;
            });

            return {
                ...state,
                fromUserRequests: newERRequests
            }

        case actions.SET_ACCOUNTING_INFORMATION_CHANGE:
            return {
                ...state,

            }

        case actions.SET_FILTER:
            return {
                ...state,
                currentFilter: action.filter,
            }
        default:
            return state;
    }
};

export default reducer;