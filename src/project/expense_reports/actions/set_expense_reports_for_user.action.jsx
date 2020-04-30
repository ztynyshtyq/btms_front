import * as constants from "../constants/actions";

const setExpenseReportsForUser = (expenseReportsForUser) => {
    return {
    type: constants.SET_FOR_USER_EXPENSE_REPORTS,
    expenseReportsForUser
}};

export default setExpenseReportsForUser;