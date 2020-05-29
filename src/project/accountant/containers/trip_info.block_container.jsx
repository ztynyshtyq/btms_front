import {connect} from "react-redux";
import TripInfo from "../blocks/trip_info.block";

const mapStateToProps = (state, props) => ({
    report: props.report
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TripInfo);