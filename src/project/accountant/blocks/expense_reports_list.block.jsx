import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ExpenseReportsList = ({expenseReports}) => (
    <div className="expense_reports_list_block">
        <div className="container">
            <div className="block_header">
                <p>List of expense reports</p>
            </div>
            <div className="block_content">
                <ul>
                    {expenseReports.map((report) => (
                        <li><Link to={"/report/to_approve/" + report.id}>{report.id}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

ExpenseReportsList.propTypes = {
    expenseReports: PropTypes.array.isRequired
};

export default ExpenseReportsList;