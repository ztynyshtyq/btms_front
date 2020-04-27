import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {Router, Route} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from "./reducers";
import history from "./core/services/history";

import LoginPage from "./project/auth/pages/login.page";
import Dashboard from "./project/expense_reports/pages/expense_reports.page";
import {loadState, saveState} from "./local_storage";

const local_state = loadState();

const store = createStore(reducers, local_state, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/login" component={LoginPage}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Router>
    </Provider>
    , document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
