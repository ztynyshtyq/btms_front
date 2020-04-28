import React from "react";
import Header from "../containers/header.container";
import BTMSList from "../containers/expense_reports_list.container"
import Footer from "../components/footer.component"

const Page = () => {
    return(
        <>
            <Header/>
            {/*<ToolPanel/>*/}
            <div className="ucContainer">
                <BTMSList />
            </div>
            <Footer/>
        </>
    )
};

export default Page;