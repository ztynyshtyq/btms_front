import React from "react";
import {NavLink} from "react-router-dom";

const Navbars = ({reportId, isNextable, isPrevable, prevId, nextId}) => {
    return (
        <div className="container">
            <div className="navbar_block">
                <div className="row">
                    <div className="col-md-3">
                        <div className="buttons_part">
                            <div className="d-inline-block">
                                <NavLink to={"/dashboard"}>
                                    <button className="back"><i className="icon-menu7"/> Back to list</button>
                                </NavLink>
                            </div>
                            <div className="d-inline-block">
                                <NavLink to={"/report/to_approve/" + prevId}>
                                    <button className="previous" disabled={!isPrevable}>
                                        <i className="icon-arrow-left7"/> Previous
                                    </button>
                                </NavLink>
                            </div>
                            <div className="d-inline-block">
                                <NavLink to={"/report/to_approve/" + nextId}>
                                    <button className="next" disabled={!isNextable}>
                                        <i className="icon-arrow-right7"/> Next
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="report_id_part">
                            <p>id: {reportId}</p>
                        </div>
                        <div className="hotkeys_part">
                            <p>Hotkeys: </p>
                            <p>expand/collapse all: CTRL + D control all: CTRL + G</p>
                            <p>check/uncheck all: CTRL + Q</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbars;