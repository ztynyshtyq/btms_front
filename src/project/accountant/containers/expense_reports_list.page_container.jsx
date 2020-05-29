import {connect} from "react-redux";
import ExpenseReportsList from "../pages/expense_reports_list.page";
import getExpenseReportsForApproval from "../requests/get_for_user_approval.request";
import setPageSettings from "../../page_settings/actions";
import * as pages from "../../page_settings/constants";

const mapStateToProps = (state, props) => {
    console.log(state);
    return ({
        user: state.userData
    });
}

const mapDispatchToProps = (dispatch, props) => ({
    getExpenseReportsForApproval: (accessToken) => dispatch(getExpenseReportsForApproval(accessToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseReportsList);