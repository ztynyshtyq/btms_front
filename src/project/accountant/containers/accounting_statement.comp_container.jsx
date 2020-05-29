import {connect} from "react-redux";
import AccountingStatement from "../components/accounting_statement.component";
import setUpdatedStatement from "../actions/set_updated_statement.action";
import * as constants from "../../page_settings/constants";

const mapStateToProps = (state, props) => ({
    label: props.label,
    totalAmount: props.totalAmount,
    comment: props.comment,
    isChecked: props.isChecked
});

const mapDispatchToProps = (dispatch, props) => ({
    checkStatement: () => dispatch(setUpdatedStatement(props.statementId, props.label, {isChecked: true})),
    uncheckStatement: () => dispatch(setUpdatedStatement(props.statementId, props.label, {isChecked: false}))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountingStatement);