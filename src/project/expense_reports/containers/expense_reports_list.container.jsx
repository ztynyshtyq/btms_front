import {connect} from "react-redux"
import component from "../components/expense_reports_list.component"
import {apiGetExpenseReportsFromUser} from "../requests/get_from_user_requests.request";

const mapStateToProps = state => {
    console.log(state);
    return ({
        user: state.userData,
        expenseReportsFromUserRequests: state.expenseReports.fromUserRequests
    });
}

const mapDispatchToProps = dispatch => ({
    apiGetExpenseReportsFromUser: (accessToken) => dispatch(apiGetExpenseReportsFromUser(accessToken))
});


export default connect(mapStateToProps, mapDispatchToProps)(component);