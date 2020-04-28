import React, {useEffect} from "react";
import ExpenseReportTile from "../containers/expense_report_tile.container";
import {NavLink} from "react-router-dom";

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
                        <button>
                            <NavLink to={{
                                pathname:"/er_for_user"
                            }}>
                                Requests to me
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button>
                            <NavLink to={{
                                pathname: "/er_from_user"
                            }}>
                                My requests
                            </NavLink>
                        </button>
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