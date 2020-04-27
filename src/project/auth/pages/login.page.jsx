import React from "react";
import AuthContainer from "../../../core/auth/container";

const page = ({username, password, setCredentials, apiAuthAttempt}) => {
    return (<div className="page-content">
        <div className="content-wrapper">
            <div className="content d-flex justify-content-center align-items-center">

                <div className="card mb-0">
                    <div className="card-body">
                        <div className="text-left">
                            <img src="~/img/brand/logo_blue.gif" alt="Alternate Text"/>
                        </div>
                        <div className="text-center mb-3 mt-3">
                            <h5 className="mb-0">Login to your account</h5>
                            <span className="d-block text-muted">Enter your credentials below</span>
                        </div>

                        <div className="form-group form-group-feedback form-group-feedback-left">
                            <input type="text" className="form-control" value={username}
                                   onChange={(e) => setCredentials({username: e.target.value, password: password})}
                                   placeholder="Username"/>
                            <div className="form-control-feedback">
                                <i className="icon-user text-muted"/>
                            </div>
                        </div>

                        <div className="form-group form-group-feedback form-group-feedback-left">
                            <input type="password" className="form-control" value={password}
                                   onChange={(e) => setCredentials({username: username, password: e.target.value})}
                                   placeholder="Password"/>
                            <div className="form-control-feedback">
                                <i className="icon-lock2 text-muted"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"
                                    onClick={(e) => apiAuthAttempt(username, password)}>Sign in <i
                                className="icon-circle-right2 ml-2"/></button>
                        </div>

                        <div className="text-center">
                            <a href="login_password_recover.html">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center d-lg-none w-100">
                <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse"
                        data-target="#navbar-footer">
                    <i className="icon-unfold mr-2"/>
                    Footer
                </button>
            </div>
        </div>
    </div>);
}


export default AuthContainer(page);