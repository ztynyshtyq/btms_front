import {connect} from "react-redux";
import AccountingGroup from "../components/accounting_group.component";
import * as params from "../constants/params";
import * as pages from "../../page_settings/constants";
import setUpdatedStatementGroup from "../actions/set_updated_statement_group.action";
import setUpdatedStatement from "../actions/set_updated_statement.action";

const mapStateToProps = (state, props) => ({
    isExpanded: state.expenseReports.forUserApproval
        .find(report => report.id === state.expenseReports.currentFilter.subFilter.reportId)
        .expenseReportAmounts
        .find(statementGroup => statementGroup.label === props.statementGroup.label).isExpanded,
    statementGroup: props.statementGroup,
    checkedStatus: props.statementGroup.children
        .every(statement => statement.isChecked)
        ? "all"
        : props.statementGroup.children
            .every(statement => !statement.isChecked)
            ? "none"
            : "some"
});

const mapDispatchToProps = (dispatch, props) => ({
    collapseStatement: () => dispatch(setUpdatedStatementGroup(
        props.statementGroup.label, {isExpanded: false})),
    expandStatement: () => dispatch(setUpdatedStatementGroup(
        props.statementGroup.label, {isExpanded: true})),
    checkStatements: () => props.statementGroup.children.forEach(
        statement => dispatch(setUpdatedStatement(statement.id, statement.code, {isChecked: true}))
    ),
    uncheckStatements: () => props.statementGroup.children.forEach(
        statement => dispatch(setUpdatedStatement(statement.id, statement.code, {isChecked: false}))
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountingGroup);