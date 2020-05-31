import {connect} from "react-redux";
import ExpenseReportSingle from "../pages/expense_report_single.page";
import getExpenseReportsForApproval from "../requests/get_for_user_approval.request";
import setFilter from "../actions/set_filter.action";
import setUpdatedStatementGroup from "../actions/set_updated_statement_group.action";
import setUpdatedStatement from "../actions/set_updated_statement.action";
import * as pages from "../../page_settings/constants";

const mapStateToProps = (state, props) => {
    console.log(state);
    return ({
        user: state.userData,
        report: state.expenseReports.forUserApproval
            .find(report => report.id === state.expenseReports.currentFilter.subFilter.reportId),
        allReportsIds: state.expenseReports.forUserApproval
            .filter(item => state.expenseReports.currentFilter.subFilter.status.includes(item.status))
            .map(report => report.id),
        pageSettings: state.pageSettings[pages.PAGE_ACCOUNTANT_SINGLE_REPORT]
    });
}

const mapDispatchToProps = (dispatch, props) => ({
    getExpenseReportsForApproval: (accessToken) => dispatch(getExpenseReportsForApproval(accessToken)),
    setFilter: (filter) => dispatch(setFilter(filter)),

    // Hotkeys
    hotKeyExpandAll: (report) => report.expenseReportAmounts
        .forEach(statement => dispatch(setUpdatedStatementGroup(statement.label, {isExpanded: true}))),
    hotKeyCollapseAll: (report) => report.expenseReportAmounts
        .forEach(statement => dispatch(setUpdatedStatementGroup(statement.label, {isExpanded: false}))),
    checkAll: (report) => report.expenseReportAmounts
        .forEach(statementGroup => statementGroup.children
            .forEach(statement => dispatch(setUpdatedStatement(statement.id, statement.code, {isChecked: true})))),
    uncheckAll: (report) => report.expenseReportAmounts
        .forEach(statementGroup => statementGroup.children
            .forEach(statement => dispatch(setUpdatedStatement(statement.id, statement.code, {isChecked: false})))),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseReportSingle);