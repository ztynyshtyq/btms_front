import React from "react";
import headerLogo from "../../../img/brand/logo_white.svg"

const app = () => (
    <header id="ucHeader" role="banner">
        <div>
            <img src={headerLogo} alt=""/>
            <p>BTMS application</p>
        </div>
    </header>
);

export default app;