import * as actions from "./constants/actions";
import * as constants from "./constants/params";

const initialState = {
    [constants.PARAM_FILTER_FROM_USER_REQUESTS]: [],
    [constants.PARAM_FILTER_FOR_USER_APPROVAL]: [],
    currentFilter: {
        mainFilter: constants.PARAM_FILTER_FROM_USER_REQUESTS,
        subFilter: ""
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_FOR_USER_EXPENSE_REPORTS:
            return {
                ...state,
                forUserApproval: action.expenseReportsForUser
            }


        case actions.SET_UPDATED_EXPENSE_REPORT:
            return {
                ...state,

                [state.currentFilter.mainFilter]: state[state.currentFilter.mainFilter]
                    .map(oldReport => (oldReport.id === state.currentFilter.subFilter.reportId)
                        ? {
                            ...oldReport,
                            ...action.updatedExpenseReportFields
                        }
                        : oldReport),

            }

        case actions.SET_UPDATED_STATEMENT:
            return {
                ...state,
                [state.currentFilter.mainFilter]: state[state.currentFilter.mainFilter]
                    .map(report => (report.id === state.currentFilter.subFilter.reportId)
                        ? {
                            ...report,
                            expenseReportAmounts: report.expenseReportAmounts
                                .map(statementGroup => (statementGroup.label === action.statementCode)
                                    ? {
                                        ...statementGroup,
                                        children: statementGroup.children
                                            .map(statement => statement.id === action.statementId
                                                ? {
                                                    ...statement,
                                                    ...action.updatedStatementFields
                                                }
                                                : statement
                                            )
                                    }
                                    : statementGroup)
                        }
                        : report),
            }

        case actions.SET_UPDATED_STATEMENT_GROUP:
            return {
                ...state,
                [state.currentFilter.mainFilter]: state[state.currentFilter.mainFilter]
                    .map(report => (report.id === state.currentFilter.subFilter.reportId)
                        ? {
                            ...report,
                            expenseReportAmounts: report.expenseReportAmounts
                                .map(statementGroup => (statementGroup.label === action.statementGroupCode)
                                    ? {
                                        ...statementGroup,
                                        ...action.statementGroupFields
                                    }
                                    : statementGroup)
                        }
                        : report),
            }


        case actions.SET_SINGLE_EXPENSE_REPORT_FOR_USER_APPROVAL:
            const newERRequestsForUser = state.forUserApproval
                .map(item => (item.id === action.expenseReportsForUserApproval.id)
                    ? action.expenseReportsForUserApproval
                    : item
                );

            return {
                ...state,
                forUserApproval: newERRequestsForUser
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