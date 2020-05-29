import React from "react";

const ControlButtons = ({sendReject, sendApprove}) => {
    return(
        <div className="control_buttons_block">
            <div className="block_content">
                <div className="d-inline-block">
                    <button className="reject" onClick={e => sendReject()}>Reject</button>
                </div>
                <div className="d-inline-block">
                    <button className="accept" onClick={e => sendApprove()}>Accept</button>
                </div>
            </div>
        </div>
    )
};

export default ControlButtons;