import {connect} from "react-redux";
import component from "../components/expense_report_for_user_approval_tile.component";
import {apiSendOnApprove} from "../requests/send_approve.request";
import {apiSendOnReject} from "../requests/send_reject.request";
import setSingleExpenseReportForUserRequests from "../actions/set_expense_reports_for_user.action";

const mapStateToProps = (state, ownProps) => {
    return ({
        ...state.expenseReports.forUserApproval[ownProps.expenseReportId],
        accessToken: state.userData.accessToken
    });
}

//TODO accept, reject
const mapDispatchToProps = (dispatch) => ({
    sendApprove: (accessToken, body) => {  console.log(body); return dispatch(apiSendOnApprove(accessToken, body))},
    sendReject: (accessToken, body) => {  console.log(body);  dispatch(apiSendOnReject(accessToken,body))},
    setSingleExpenseReportForUserRequests: (expenseReport) => dispatch(setSingleExpenseReportForUserRequests(expenseReport)),
    //setAccountingInformationChange: (newInputData) => dispatch(setAccountingInformationChange(newInputData))
    /*handlerChange: (btmsData) => dispatch(changeBtms(btmsData))*/
});

export default connect(mapStateToProps, mapDispatchToProps)(component);