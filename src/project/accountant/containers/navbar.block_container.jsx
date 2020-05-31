import {connect} from "react-redux";
import NavBar from "../blocks/navbar.block";

const mapStateToProps = (state, props) => ({
    isNextable: props.allReportsIds.length - 1 !== props.allReportsIds.indexOf(props.reportId),
    isPrevable: 0 !== props.allReportsIds.indexOf(props.reportId),
    nextId: props.allReportsIds[props.allReportsIds.indexOf(props.reportId) + 1],
    prevId: props.allReportsIds[props.allReportsIds.indexOf(props.reportId) - 1],
    reportId: props.reportId
});


const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);