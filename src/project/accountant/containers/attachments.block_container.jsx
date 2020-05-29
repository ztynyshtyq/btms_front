import {connect} from "react-redux";
import Attachments from "../blocks/attachments.block";
import setPageSettings from "../../page_settings/actions";
import * as pages from "../../page_settings/constants";

const mapStateToProps = (state, props) => ({
    report: props.report
});

const mapDispatchToProps = (dispatch, props) => ({
    previewImage: (imageUrl) => dispatch(setPageSettings(pages.PAGE_ACCOUNTANT_SINGLE_REPORT, {previewImageUrl: imageUrl}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Attachments);