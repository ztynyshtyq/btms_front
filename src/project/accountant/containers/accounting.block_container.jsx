import {connect} from "react-redux";
import Accounting from "../blocks/accounting.block";
import setUpdatedStatementGroup from "../actions/set_updated_statement_group.action";
import setUpdatedStatement from "../actions/set_updated_statement.action";

const mapStateToProps = (state, props) => ({
    report: props.report,
    isAllCollapsed: props.report
        ? props.report.expenseReportAmounts
            .every(statement => !statement.isExpanded)
        : {},
    isAllChecked: props.report
        ? props.report.expenseReportAmounts
            .every(statementGroup => statementGroup.children
                .every(statement => statement.isChecked))
        : {}
});


const mapDispatchToProps = (dispatch, props) => ({
    expandAll: () => props.report.expenseReportAmounts
        .forEach(statement => dispatch(setUpdatedStatementGroup(statement.label, {isExpanded: true}))),
    collapseAll: () => props.report.expenseReportAmounts
        .forEach(statement => dispatch(setUpdatedStatementGroup(statement.label, {isExpanded: false}))),
    checkAll: () => props.report.expenseReportAmounts
        .forEach(statementGroup => statementGroup.children
            .forEach(statement => dispatch(setUpdatedStatement(statement.id, statement.code, {isChecked: true})))),
    uncheckAll: () => props.report.expenseReportAmounts
        .forEach(statementGroup => statementGroup.children
            .forEach(statement => dispatch(setUpdatedStatement(statement.id, statement.code, {isChecked: false})))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounting);