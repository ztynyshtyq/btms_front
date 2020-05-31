import {connect} from "react-redux";
import Overlay from "../blocks/overlay.block";
import * as pages from "../../page_settings/constants";
import * as urls from "../constants/urls";
import * as params from "../constants/params";
import setPageSettings from "../../page_settings/actions";

const mapStateToProps = (state, props) => ({
    imageUrl: state.pageSettings[pages.PAGE_ACCOUNTANT_SINGLE_REPORT].previewImageUrl,
    imageUrls: props.report ? props.report.attachments.map(attachment => urls.API_GET_FILES + attachment.fullPath) : []
});


const mapDispatchToProps = (dispatch, props) => ({
    closeImage: () => dispatch(setPageSettings(pages.PAGE_ACCOUNTANT_SINGLE_REPORT, {previewImageUrl: null})),
    prevImage: (imageUrls) => {
        const currentImageUrlIndex = imageUrls.indexOf(props.pageSettings.previewImageUrl);
        return dispatch(setPageSettings(pages.PAGE_ACCOUNTANT_SINGLE_REPORT,
            {previewImageUrl: imageUrls[(currentImageUrlIndex === 0 ? imageUrls.length - 1 : currentImageUrlIndex - 1)]}))
    },
    nextImage: (imageUrls, currentImageUrl) => {
        const currentImageUrlIndex = imageUrls.indexOf(currentImageUrl);
        return dispatch(setPageSettings(pages.PAGE_ACCOUNTANT_SINGLE_REPORT,
            {previewImageUrl: imageUrls[(currentImageUrlIndex === imageUrls.length - 1 ? 0 : currentImageUrlIndex + 1)]}))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);