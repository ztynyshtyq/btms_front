import {connect} from "react-redux";
import Summary from "../blocks/summary.block";

const mapStateToProps = (state, props) => ({
    report: props.report
});


const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);