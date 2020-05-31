import React, {useEffect} from "react";
import {HotKeys} from "react-hotkeys";

const Overlay = ({imageUrl, closeImage, nextImage, prevImage, imageUrls}) => {
    let _container;
    const currentImage = imageUrl;

    useEffect(() => {
        _container.focus();
    });

    return (
        <HotKeys
            keyMap={{
                CLOSE: "escape",
                NEXT_IMAGE: "right",
                PREV_IMAGE: "left"
            }}
            allowChanges
            handlers={{
                CLOSE: e => closeImage(),
                NEXT_IMAGE: e => nextImage(imageUrls, currentImage),
                PREV_IMAGE: e => prevImage(imageUrls),
                //PREV_IMAGE: e => checkAll(report)
            }}>
            <div tabIndex={1} ref={c => (_container = c)} className={"overlay_component" + (imageUrl ? "" : " none")}>
                <button className="close" onClick={e => closeImage()}><i className="icon-cross2" /></button>
                <img src={imageUrl} alt=""/>
            </div>
        </HotKeys>
    );
}

export default Overlay;