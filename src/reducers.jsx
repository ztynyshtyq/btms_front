import { combineReducers } from 'redux';
import authReducer from "./core/auth/reducer";
import expenseReports from "./project/accountant/expense_reports.reducer";
import pageSettings from "./project/page_settings/reducer";

export default combineReducers({
    userData: authReducer,
    expenseReports: expenseReports,
    pageSettings: pageSettings
});
