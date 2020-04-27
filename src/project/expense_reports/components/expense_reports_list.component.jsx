import React, {useEffect} from "react";
import ExpenseReportTile from "../containers/expense_report_tile.container";

const Component = ({apiGetExpenseReportsFromUserRequests, apiGetExpenseReportsForUserApproval, user, expenseReportsFromUserRequests}) => {
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
                        <button>Requests to me</button>
                    </li>
                    <li>
                        <button>My requests</button>
                    </li>
                </ul>
                <div className="BTMSList">
                    {
                        expenseReportsFromUserRequests.map((item, index) => (
                            <ExpenseReportTile key={index} expenseReportId={index} />
                        ))}
                </div>
            </div>
        );
    else
        return (<p>is loading</p>);


}

export default Component;