import {connect} from "react-redux";
import ExpenseReportsList from "../blocks/expense_reports_list.block";

const mapStateToProps = (state, props) => {
    console.log(state.expenseReports.currentFilter.subFilter);
    return ({
        expenseReports: state.expenseReports.forUserApproval
            .filter(item => state.expenseReports.currentFilter.subFilter.status.includes(item.status))
    });
}

const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseReportsList);