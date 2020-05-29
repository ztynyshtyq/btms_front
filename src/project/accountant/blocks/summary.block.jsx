import React from "react";
import InlineInput from "../containers/inline_input.comp_container";

const Summary = ({report}) => (
    <div className="summary_block">
        <div className="block_header">
            <p>Summary</p>
        </div>
        <div className="block_content">
            <InlineInput classes="cash_paid_component" icon="icon-credit-card" parameter="expenseReportCashPaid"
                         label="Cash paid" data={report ? report.expenseReportCashPaid : ""} isActive={true} />

            <InlineInput classes="recoverable_component" icon="icon-wallet" parameter="expenseReportBalance"
                         label="Recoverable" data={report ? report.expenseReportBalance : ""} isActive={false} />

            <InlineInput classes="total_accrued_component" icon="icon-sigma" parameter="expenseReportTotalAccrued"
                         label="Total accrued" data={report ? report.expenseReportTotalAccrued : ""} isActive={false} />
        </div>
    </div>
);

export default Summary;