import * as constants from "../constants/actions";

const setSingleExpenseReportForUserApproval = (expenseReportsForUserApproval) => ({
    type: constants.SET_SINGLE_EXPENSE_REPORT_FOR_USER_APPROVAL,
    expenseReportsForUserApproval
});

export default setSingleExpenseReportForUserApproval;