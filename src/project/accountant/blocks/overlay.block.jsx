import React from "react";

const overlay = ({imageUrl, closeImage}) => (
    <div className={"overlay_component" + (imageUrl ? "" : " none")}>
        <button className="close" onClick={e => closeImage()}><i className="icon-cross2" /></button>
        <img src={imageUrl} alt=""/>
    </div>
);

export default overlay;