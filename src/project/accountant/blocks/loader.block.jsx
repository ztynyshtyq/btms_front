import React from "react";

const Loader = ({isLoading}) => (
    <div className={"loading_block " + (isLoading ? "" : "d-none")}>
        <p><i className="icon-spinner2 spinner" /> &nbsp; LOADING</p>
    </div>
);

export default Loader;