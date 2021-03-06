import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {Router, Route, Redirect} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from "./reducers";
import history from "./core/services/history";

import LoginPage from "./project/auth/pages/login.page";
import Dashboard from "./project/expense_reports/pages/expense_reports.page";
import ERForUser from "./project/expense_reports/pages/expense_reports_for_user.page";
import {loadState, saveState} from "./core/services/local_storage";
import {authMiddleware} from "./core/auth/middlewares";
import * as routes from "./project/expense_reports/constants/routes"
import userDistributor from "./project/distr/user_type.distributor";

const local_state = loadState();

const store = createStore(reducers, local_state, applyMiddleware(thunkMiddleware, authMiddleware));


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={routes.ROUTE_TO_LOGIN_PAGE} component={LoginPage}/>
            <Route path={routes.ROUTE_TO_DASHBOARD} component={userDistributor}/>
            <Route path={routes.ROUTE_TO_SINGLE_APPROVE_REPORT + "/:reportId"} component={userDistributor}/>
        </Router>
    </Provider>
    , document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
