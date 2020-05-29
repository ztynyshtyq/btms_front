import {connect} from "react-redux";
import ExpenseReportsList from "../blocks/expense_reports_list.block";

const mapStateToProps = (state, props) => ({
    expenseReports: state.expenseReports.forUserApproval
});

const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseReportsList);