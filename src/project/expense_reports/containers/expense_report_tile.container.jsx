import {connect} from "react-redux";
import component from "../components/expense_report_tile.component";
/*
import updateBtms from "../actions/updateBtms";
import changeBtms from "../actions/changeBtms";
*/

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
    /*updateBtms: (btmsId) => dispatch(updateBtms(btmsId)),
    handlerChange: (btmsData) => dispatch(changeBtms(btmsData))*/
});

export default connect(mapStateToProps, mapDispatchToProps)(component);