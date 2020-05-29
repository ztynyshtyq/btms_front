import React from "react";
import {NavLink} from "react-router-dom";

const Footer = ({isNextable, isPrevable, prevId, nextId}) => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="navbar_block">
                            <div className="d-inline-block">
                                <NavLink to={"/dashboard"}>
                                    <button className="back" ><i className="icon-menu7"/> Back to list</button>
                                </NavLink>
                            </div>
                            <div className="d-inline-block">
                                <NavLink to={"/report/to_approve/" + prevId}>
                                    <button className="previous" disabled={!isPrevable}><i className="icon-arrow-left7"/> Previous</button>
                                </NavLink>
                            </div>
                            <div className="d-inline-block">
                                <NavLink to={"/report/to_approve/" + nextId}>
                                    <button className="next" disabled={!isNextable}><i className="icon-arrow-right7"/> Next</button>
                                </NavLink>
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