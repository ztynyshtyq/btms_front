import * as constants from "../constants/actions";

const setSingleExpenseReportFromUserRequests = (expenseReportFromUserRequests) => ({
    type: constants.SET_SINGLE_EXPENSE_REPORT_FOR_USER_APPROVAL,
    expenseReportFromUserRequests
});

export default setSingleExpenseReportFromUserRequests;