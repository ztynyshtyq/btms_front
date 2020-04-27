import defaultComponent from "./loginPage.component";
import {connect} from "react-redux";
import {setUser} from "./actions";
import {apiAuthRequest} from "./requests";

const mapStateToProps = (state, ownProps) => ({
    username: state.userData.username,
    password: state.userData.password,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCredentials: (data) => dispatch(setUser(data)),
    apiAuthAttempt: (login, pass) => dispatch(apiAuthRequest(login, pass))
});



export default (component = defaultComponent) => connect(mapStateToProps, mapDispatchToProps)(component)