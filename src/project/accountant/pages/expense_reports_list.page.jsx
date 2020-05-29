import React, {useEffect} from "react";
import Header from "../blocks/header.block";
import Footer from "../blocks/footer.block";
import ExpenseReportsList from "../containers/expense_reports_list.block_container";

const Page = ({getExpenseReportsForApproval, user}) => {
    useEffect(() => {
        getExpenseReportsForApproval(user.accessToken);
    }, []);

    return (
        <>
            <Header/>
            <ExpenseReportsList />
            <Footer/>
        </>
    );
}

export default Page;