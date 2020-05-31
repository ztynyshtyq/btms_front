import React from "react";
import PropTypes from 'prop-types';
import NumberFormat from "react-number-format";


const AccountingStatement = ({isChecked, checkStatement, uncheckStatement, comment, label, totalAmount}) => (
    <div className="expense_statement_component">
        <div className="d-inline-block component_icon">
        </div>
        <div className="d-inline-block component_label">
            <p>{label}</p>
        </div>
        <div className="d-inline-block component_input">
            <NumberFormat thousandSeparator={" "} disabled value={totalAmount} suffix={" "}
                          className={totalAmount < 0 ? "negative" : ""}/>
        </div>
        <div className="d-inline-block component_comment">
            <p>{comment}</p>
        </div>
        {/* <div className="d-inline-block component_attachment_icon">
            <p><i className="icon-attachment" /></p>
        </div>*/}
        <div className="d-inline-block component_check">
            <button onClick={isChecked
                    ? e => uncheckStatement()
                    : e => checkStatement()
                }>
                {isChecked
                    ? <i className="icon-checkbox-checked" />
                    : <i className="icon-checkbox-unchecked" />
                }
            </button>
        </div>
    </div>
);

AccountingStatement.propTypes = {
    label: PropTypes.string.isRequired,
    totalAmount: PropTypes.string.isRequired,
    comment: PropTypes.string,
};

export default AccountingStatement;