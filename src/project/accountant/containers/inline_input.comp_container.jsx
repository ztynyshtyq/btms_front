import {connect} from "react-redux";
import InlineInput from "../components/inline_input.component";
import * as params from "../constants/params";
import setUpdatedExpenseReportFields from "../actions/set_updated_expense_report.action";
import * as constants from "../../page_settings/constants";

const mapStateToProps = (state, props) => ({
    icon: props.icon,
    classes: props.classes,
    label: props.label,
    isActive: props.isActive,
    data: props.data,
    reportId: state.pageSettings[constants.PAGE_ACCOUNTANT_SINGLE_REPORT].currentReportId
});

const mapDispatchToProps = (dispatch, props) => ({
    updateInput: (id, fields) => dispatch(setUpdatedExpenseReportFields(params.PARAM_FILTER_FOR_USER_APPROVAL, id, fields))
});

export default connect(mapStateToProps, mapDispatchToProps)(InlineInput);