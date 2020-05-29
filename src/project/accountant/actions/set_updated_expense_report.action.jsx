import * as constants from "../constants/actions";

const setUpdatedExpenseReportFields = (expenseReportTypeFilter, expenseReportId, updatedExpenseReportFields) => ({
    type: constants.SET_UPDATED_EXPENSE_REPORT,
    updatedExpenseReportFields,
    expenseReportType: expenseReportTypeFilter,
    expenseReportId
});

export default setUpdatedExpenseReportFields;