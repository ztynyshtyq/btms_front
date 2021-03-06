import {connect} from "react-redux";
import component from "../components/expense_report_from_user_requests_tile.component";
import {apiSendOnConfirmation} from "../requests/send_on_confirmation.request";
import setSingleExpenseReportFromUserRequests from "../actions/set_single_expense_report_for_user.action";

const mapStateToProps = (state, ownProps) => {
    return ({
        ...state.expenseReports.fromUserRequests[ownProps.expenseReportId],
        accessToken: state.userData.accessToken
    });
}

const mapDispatchToProps = (dispatch) => ({
    apiSendOnConfirmation: (accessToken, body) => dispatch(apiSendOnConfirmation(accessToken, body)),
    setSingleExpenseReportFromUserRequests: (expenseReport) => dispatch(setSingleExpenseReportFromUserRequests(expenseReport)),
    //setAccountingInformationChange: (newInputData) => dispatch(setAccountingInformationChange(newInputData))
    /*handlerChange: (btmsData) => dispatch(changeBtms(btmsData))*/
});

export default connect(mapStateToProps, mapDispatchToProps)(component);