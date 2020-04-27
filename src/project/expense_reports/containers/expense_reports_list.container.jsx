import {connect} from "react-redux"
import component from "../components/expense_reports_list.component"
import {apiGetExpenseReportsFromUser} from "../requests/get_from_user_requests.request";
import {apiGetExpenseReportsForUserApproval} from "../requests/get_for_user_approval.request";

const mapStateToProps = state => ({
    user: state.userData,
    expenseReportsFromUserRequests: state.expenseReports.fromUserRequests
});

const mapDispatchToProps = dispatch => ({
    apiGetExpenseReportsFromUserRequests: (accessToken) => dispatch(apiGetExpenseReportsFromUser(accessToken)),
    apiGetExpenseReportsForUserApproval: (accessToken) => dispatch(apiGetExpenseReportsForUserApproval(accessToken)),
});


export default connect(mapStateToProps, mapDispatchToProps)(component);