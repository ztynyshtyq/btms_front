import {connect} from "react-redux";
import Footer from "../blocks/footer.block";
import setFilter from "../actions/set_filter.action";
import * as params from "../constants/params";

const mapStateToProps = (state, props) => ({
    isNextable: props.allReportsIds.length - 1 !== props.allReportsIds.indexOf(props.reportId),
    isPrevable: 0 !== props.allReportsIds.indexOf(props.reportId),
    nextId: props.allReportsIds[props.allReportsIds.indexOf(props.reportId) + 1],
    prevId: props.allReportsIds[props.allReportsIds.indexOf(props.reportId) - 1]
});


const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);