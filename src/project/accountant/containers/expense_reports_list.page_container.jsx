import {connect} from "react-redux";
import ExpenseReportsList from "../pages/expense_reports_list.page";
import getExpenseReportsForApproval from "../requests/get_for_user_approval.request";
import setFilter from "../actions/set_filter.action";

const mapStateToProps = (state, props) => {
    console.log(state);
    return ({
        user: state.userData
    });
}

const mapDispatchToProps = (dispatch, props) => ({
    getExpenseReportsForApproval: (accessToken) => dispatch(getExpenseReportsForApproval(accessToken)),
    setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseReportsList);