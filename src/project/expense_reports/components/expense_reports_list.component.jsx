import React, {useEffect} from "react";
import * as constants from "../constants/params";
import ExpenseReportFromUserRequestsTile from "../containers/expense_report_from_user_requests_tile.container";
import ExpenseReportForUserApproval from "../containers/expense_report_for_user_approval_tile.container";

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
                        _filterExpenseReports()}
                </div>
            </div>
        );
    else
        return (<p>is loading</p>);

    function _filterExpenseReports() {
        if (currentFilter.mainFilter === constants.PARAM_FILTER_FOR_USER_APPROVAL)
            return expenseReportsForUserApproval.filter((item) => item.status.toLowerCase() === "wait").map((item, index) => (
                <ExpenseReportForUserApproval key={index} expenseReportId={item.id}/>
            ));

        if (currentFilter.mainFilter === constants.PARAM_FILTER_FROM_USER_REQUESTS)
            return expenseReportsFromUserRequests.map((item, index) => (
                <ExpenseReportFromUserRequestsTile key={index} expenseReportId={index}/>
            ));

        return expenseReportsFromUserRequests;
    }
}

export default Component;