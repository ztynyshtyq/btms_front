import React from "react";
import * as url from "../constants/urls";

const Attachments = ({report, previewImage}) => {
    return (
        <div className="attachments_block">
            <div className="block_header">
                <p>Attachments</p>
            </div>
            <div className="block_content">
                <div className="row">
                    {report ? report.attachments.map((item, key) => (
                        <div className="col-md-6" key={key}>
                            <span className="image_wrapper" onClick={e => previewImage(url.API_GET_FILES + item.fullPath)}>
                                <img src={url.API_GET_FILES + item.fullPath} alt="clickable"/>
                            </span>
                        </div>
                    )) : ""}
                </div>
            </div>
        </div>
    )
};

export default Attachments;