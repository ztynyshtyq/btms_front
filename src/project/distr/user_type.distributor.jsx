import React from "react";
import {useLocation} from "react-router-dom";
import {useStore} from "react-redux";
import ListForAccountant from "../accountant/containers/expense_reports_list.page_container";
import SingleReportForAccountant from "../accountant/containers/expense_report_single.page_container";
import * as routes from "../expense_reports/constants/routes";

const UserDistributor = () => {
    // TODO when back will add this parameter, please check it
    const userType = useStore().getState()["userData"]["user_type"];

    const url = useLocation().pathname;

    console.log();

    // TODO make normal distr file
    switch(userType){
        case "accountant":
            return <ListForAccountant />;

        default:
            // url: /report/to_approve/42
            if(RegExp("^" + routes.ROUTE_TO_SINGLE_APPROVE_REPORT.split("/").join("\\/") + "\/[0-9]*$").test(url))
                return <SingleReportForAccountant />;
            else
                return <ListForAccountant />;
            //return <Accountant />
    }
};

export default UserDistributor;