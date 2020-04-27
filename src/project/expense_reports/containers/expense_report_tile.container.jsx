import {connect} from "react-redux";
import component from "../components/expense_report_tile.component";

const mapStateToProps = (state, ownProps) => {
    return ({
        ...state.expenseReports.fromUserRequests[ownProps.expenseReportId]
    });
}

const mapDispatchToProps = (dispatch) => ({
    /*updateBtms: (btmsId) => dispatch(updateBtms(btmsId)),
    handlerChange: (btmsData) => dispatch(changeBtms(btmsData))*/
});

export default connect(mapStateToProps, mapDispatchToProps)(component);