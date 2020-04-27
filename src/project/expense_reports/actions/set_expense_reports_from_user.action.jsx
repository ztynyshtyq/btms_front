import * as constants from "../constants/actions";

const setExpenseReportsFromUser = (expenseReportsFromUser) => {
    return {
    type: constants.SET_FROM_USER_EXPENSE_REPORTS,
    expenseReportsFromUser
}};

export default setExpenseReportsFromUser;