import {connect} from "react-redux";
import Loader from "../blocks/loader.block";

const mapStateToProps = (state, props) => ({
    isLoading: state.userData.isFetching
});


const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);