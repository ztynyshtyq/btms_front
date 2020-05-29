import {connect} from "react-redux";
import ExpenseReportSingle from "../pages/expense_report_single.page";
import getExpenseReportsForApproval from "../requests/get_for_user_approval.request";
import setFilter from "../actions/set_filter.action";

const mapStateToProps = (state, props) => {
    console.log(state);
    return ({
        user: state.userData,
        report: state.expenseReports.forUserApproval
            .find(report => report.id === state.expenseReports.currentFilter.subFilter.reportId),
        allReportsIds: state.expenseReports.forUserApproval.map(report => report.id)
    });
}

const mapDispatchToProps = (dispatch, props) => ({
    getExpenseReportsForApproval: (accessToken) => dispatch(getExpenseReportsForApproval(accessToken)),
    setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseReportSingle);