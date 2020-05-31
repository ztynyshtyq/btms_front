import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ExpenseReportsList = () => (
    <div className="expense_reports_list_block">
        <div className="block_header">
            <p>Filters of expense reports</p>
        </div>
        <div className="block_content">

        </div>
    </div>
);

ExpenseReportsList.propTypes = {
    //expenseReports: PropTypes.array.isRequired
};

export default ExpenseReportsList;