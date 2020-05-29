import {connect} from "react-redux";
import Overlay from "../blocks/overlay.block";
import * as pages from "../../page_settings/constants";
import setPageSettings from "../../page_settings/actions";

const mapStateToProps = (state, props) => ({
    imageUrl: state.pageSettings[pages.PAGE_ACCOUNTANT_SINGLE_REPORT].previewImageUrl
});


const mapDispatchToProps = (dispatch, props) => ({
    closeImage: () => dispatch(setPageSettings(pages.PAGE_ACCOUNTANT_SINGLE_REPORT, {previewImageUrl: null}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);