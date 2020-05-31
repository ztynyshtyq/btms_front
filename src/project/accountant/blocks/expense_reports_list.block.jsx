import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import moment from "moment";

const ExpenseReportsList = ({expenseReports}) => (
    <div className="expense_reports_list_block">
        <div className="block_header">
            <p>List of expense reports</p>
        </div>
        <div className="block_content">
            <ul>
                <li>
                    <div className="expense_report_list_header">
                        <div className="component_dates"><p>Date range</p></div>
                        <div className="component_employee"><p>Employee</p></div>
                        <div className="component_destination"><p>Destination</p></div>
                        <div className="component_engagement"><p>Engagement code</p></div>
                        <div className="component_total"><p>Total accrued</p></div>
                        <div className="component_order_number"><p>Order number</p></div>
                        <div className="component_status"><p>Status</p></div>
                    </div>
                </li>
                {expenseReports.map((report, key) => (
                    <li className="expense_report_tile_component" key={key}>
                        <div className="component_dates">
                            <Link to={"/report/to_approve/" + report.id}>
                                {new moment.unix(report.createData).format("MMM, D YYYY")}
                            </Link>
                        </div>
                        <div className="component_employee">
                            <Link to={"/report/to_approve/" + report.id}>{report.username}</Link>
                        </div>
                        <div className="component_destination">
                            <Link to={"/report/to_approve/" + report.id}>{report.destinationName}</Link>
                        </div>
                        <div className="component_engagement">
                            <Link to={"/report/to_approve/" + report.id}>{report.chargeCodeName}</Link>
                        </div>
                        <div className="component_total">
                            <Link to={"/report/to_approve/" + report.id}>{report.expenseReportTotalAccrued}</Link>
                        </div>
                        <div className="component_order_number">
                            <Link to={"/report/to_approve/" + report.id}>{report.orderNumber}</Link></div>
                        <div className={report.status + " component_status"}>
                            <Link to={"/report/to_approve/" + report.id}>{{
                                "wait": "on approval",
                                "accepted": "accepted"
                            }[report.status]}</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

ExpenseReportsList.propTypes = {
    expenseReports: PropTypes.array.isRequired
};

export default ExpenseReportsList;