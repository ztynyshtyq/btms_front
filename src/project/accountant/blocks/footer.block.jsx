import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="navbar_block">
                            <div className="d-inline-block">
                                <button className="back"><i className="icon-play"/> Back to list</button>
                            </div>
                            <div className="d-inline-block">
                                <button className="previous"><i className="icon-play"/> Previous</button>
                            </div>
                            <div className="d-inline-block">
                                <button className="next"><i className="icon-play"/> Next</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="hotkeys_block">
                            <p>Hotkeys:
                                expand/collapse all: CTRL + D
                                control all: CTRL + G</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>© 2020 JSC KPMG, a company incorporated under the Laws of the Russian Federation, a member
                            firm of the KPMG network of independent member firms affiliated with KPMG International
                            Cooperative (“KPMG International”), a Swiss entity. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;