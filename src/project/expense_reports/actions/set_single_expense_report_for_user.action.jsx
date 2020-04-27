import * as constants from "../constants/actions";

const setSingleExpenseReportFromUserRequests = (expenseReportFromUserRequests) => ({
    type: constants.SET_SINGLE_EXPENSE_REPORT_FROM_USER_REQUESTS,
    expenseReportFromUserRequests
});

export default setSingleExpenseReportFromUserRequests;