import React from 'react';
import PropTypes from 'prop-types';
import AccountingStatement from '../containers/accounting_statement.comp_container';
import NumberFormat from "react-number-format";

const AccountingGroup = ({uncheckStatements, checkStatements, checkedStatus, collapseStatement, expandStatement, statementGroup}) => (
    <li>
        <ul className={statementGroup.isExpanded ? "not_empty" : ""}>
            <div className="expense_statement_component">
                <div className="d-inline-block component_icon">
                    {statementGroup.children.length > 1
                        ? <i className={statementGroup.isExpanded ? "icon-arrow-down5" : "icon-arrow-right5"}
                            onClick={e => statementGroup.isExpanded
                                ? collapseStatement()
                                : expandStatement()} />
                        : ""}
                </div>
                <div className="d-inline-block component_label">
                    <p>{statementGroup.label}</p>
                </div>
                <div className="d-inline-block component_input">
                    <NumberFormat thousandSeparator={" "} disabled value={statementGroup.total}
                                  className={statementGroup.total < 0 ? "negative" : ""}/>
                </div>
                <div className="d-inline-block component_comment">
                    <p>{statementGroup.comment}</p>
                </div>
                <div className="d-inline-block component_check">
                    <button onClick={checkedStatus === "all"
                        ? e => uncheckStatements()
                        : e => checkStatements()
                    }>
                        {checkedStatus === "all"
                            ? <i className="icon-checkbox-checked" />
                            : checkedStatus === "none"
                                ? <i className="icon-checkbox-unchecked" />
                                : <i className="icon-checkbox-partial" />}
                    </button>
                </div>
            </div>
            {statementGroup.children.length > 1 && statementGroup.isExpanded
                ? statementGroup.children.map((statement, key) => (
                    <li key={key} >
                        <AccountingStatement label={statement.code} totalAmount={statement.amount + " "}
                         isChecked={statement.isChecked} comment={statement.description} statementId={statement.id}/>
                    </li>))
                : ""}
        </ul>
    </li>
);

AccountingGroup.propTypes = {

};

export default AccountingGroup;