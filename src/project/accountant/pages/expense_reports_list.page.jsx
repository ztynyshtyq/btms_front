import React, {useEffect} from "react";
import Header from "../blocks/header.block";
import Footer from "../blocks/footer.block";
import ExpenseReportsList from "../containers/expense_reports_list.block_container";
import Filter from "../blocks/expense_reports_filter.block";
import * as params from "../constants/params";
import Loader from "../containers/loader.block_container";

const Page = ({setFilter, getExpenseReportsForApproval, user}) => {
    useEffect(() => {
        getExpenseReportsForApproval(user.accessToken);
        setFilter({
            mainFilter: params.PARAM_FILTER_FOR_USER_APPROVAL,
            subFilter: {
                status: ["wait", "accepted"]
            }
        });
    }, []);

    return (
        <>
            <Header/>
            <main>
                <div className="statusbar"/>
                <div className="container content">
                    <div className="row">
                        <div className="col-md-3 left_part">
                            <Filter />
                        </div>
                        <div className="col-md-9">
                            <ExpenseReportsList />
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
            <Loader />
        </>
    );
}

export default Page;