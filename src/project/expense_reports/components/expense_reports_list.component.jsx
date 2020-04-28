import React, {useEffect} from "react";
import * as constants from "../constants/params";
import ExpenseReportTile from "../containers/expense_report_tile.container";

const Component = ({currentFilter, apiGetExpenseReportsFromUserRequests, apiGetExpenseReportsForUserApproval, user, expenseReportsForUserApproval, expenseReportsFromUserRequests, setFilter}) => {
    // TODO: write middleware in order to change names to correct
    useEffect(() => {
        apiGetExpenseReportsFromUserRequests(user.accessToken);
        apiGetExpenseReportsForUserApproval(user.accessToken);
    }, []);

    if (expenseReportsFromUserRequests !== undefined)
        return (
            <div className="ucBTMSList">
                <h4>BTMS Requests</h4>
                <ul>
                    <li>
                        <button onClick={(e) => setFilter({
                            mainFilter: constants.PARAM_FILTER_FOR_USER_APPROVAL,
                            subFilter: ""
                        })}>
                            For my approval
                        </button>
                    </li>
                    <li>
                        <button onClick={(e) => setFilter({
                            mainFilter: constants.PARAM_FILTER_FROM_USER_REQUESTS,
                            subFilter: ""
                        })}>
                            My requests
                        </button>
                    </li>
                </ul>
                <div className="BTMSList">
                    {
                        _filterExpenseReports().map((item, index) => (
                            <ExpenseReportTile key={index} expenseReportId={index}/>
                        ))}
                </div>
            </div>
        );
    else
        return (<p>is loading</p>);

    function _filterExpenseReports() {
        if(currentFilter.mainFilter === constants.PARAM_FILTER_FROM_USER_REQUESTS)
            return expenseReportsFromUserRequests;

        if(currentFilter.mainFilter === constants.PARAM_FILTER_FOR_USER_APPROVAL)
            return expenseReportsForUserApproval;

        return expenseReportsFromUserRequests;
    }
}

export default Component;