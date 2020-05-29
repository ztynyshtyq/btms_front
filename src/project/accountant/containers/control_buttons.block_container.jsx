import {connect} from "react-redux";
import ControlButtons from "../blocks/control_buttons.block";
import apiRejectReport from "../requests/reject_report.request";
import apiApproveReport from "../requests/approve_report.request";

const mapStateToProps = (state, props) => {
    console.log(props.report);
    return ({

    });
}


const mapDispatchToProps = (dispatch, props) => ({
    sendReject: () => {dispatch(apiRejectReport(props.userAccessToken, props.report.id))},
    sendApprove: () => {dispatch(apiApproveReport(props.userAccessToken, props.report.id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlButtons);