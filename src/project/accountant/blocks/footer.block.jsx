import React from "react";
import {NavLink} from "react-router-dom";

const Footer = ({isNextable, isPrevable, prevId, nextId}) => {
    return(
        <footer>
            <div className="container">
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