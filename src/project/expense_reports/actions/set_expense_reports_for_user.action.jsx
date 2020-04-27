import * as constants from "../constants/actions";

const setExpenseReportsForUser = (expenseReportsForUser) => ({
    type: constants.SET_FOR_USER_EXPENSE_REPORTS,
    expenseReportsForUser
});

export default setExpenseReportsForUser;