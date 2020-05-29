import React from "react";
import AccountingGroup from "../containers/accounting_group.comp_container";

const Accounting = ({isAllChecked, isAllCollapsed, checkAll, uncheckAll, expandAll, collapseAll, report}) => (
    <div className="accounting_block">
        <div className="block_header">
            <p>Accounting information</p>
        </div>
        <div className="block_controlbar">
            <div className="d-inline-block text-left">
                <button onClick={isAllCollapsed ? e => expandAll() : e => collapseAll()}>
                    {isAllCollapsed ? "expand" : "collapse"}
                </button>
            </div>
            <div className="d-inline-block text-right">
                <button onClick={isAllChecked ? e => uncheckAll() : e => checkAll()}>
                    {isAllChecked ? "uncheck control" : "check control"}
                </button>
            </div>
        </div>
        <div className="block_content">
            <ul className="accounting_list">
                {report ? report.expenseReportAmounts.map((statementGroup, key) => (
                    <AccountingGroup statementGroup={statementGroup} key={key} reportId={report.id} />
                )) : []}
            </ul>
        </div>
    </div>
);

export default Accounting;