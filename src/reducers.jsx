import { combineReducers } from 'redux';
import authReducer from "./core/auth/reducer";
import expenseReports from "./project/expense_reports/reducers/index.reducer";


export default combineReducers({
    userData: authReducer,
    expenseReports: expenseReports,
});