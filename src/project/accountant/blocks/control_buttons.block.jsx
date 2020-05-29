import React from "react";

const ControlButtons = () => {
    return(
        <div className="control_buttons_block">
            <div className="block_content">
                <div className="d-inline-block">
                    <button className="reject">Reject</button>
                </div>
                <div className="d-inline-block">
                    <button className="accept">Accept</button>
                </div>
            </div>
        </div>
    )
};

export default ControlButtons;