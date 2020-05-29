import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import Header from "../blocks/header.block";
import TripInfo from "../containers/trip_info.block_container";
import Summary from "../containers/summary.block_container";
import ControlButtons from "../containers/control_buttons.block_container";
import Footer from "../containers/footer.block_container";
import Overlay from "../containers/overlay.block_container";
import Accounting from "../containers/accounting.block_container";
import Attachments from "../containers/attachments.block_container";
import * as params from "../constants/params";

const Page = ({allReportsIds, report, setFilter, getExpenseReportsForApproval, user}) => {
    const reportId = parseInt(useParams().reportId);

    useEffect(() => {
        getExpenseReportsForApproval(user.accessToken);
        setFilter({
            mainFilter: params.PARAM_FILTER_FOR_USER_APPROVAL,
            subFilter: {
                reportId: reportId
            }
        })
    }, [reportId]);

    return (
        <>
            <Header/>
            <main>
                <div className="container statusbar">
                    <div className="status"></div>
                </div>
                <div className="container content">
                    <div className="row">
                        <div className="col-md-3 left_part">
                            <TripInfo report={report}/>
                            <Summary report={report}/>
                            <ControlButtons report={report} userAccessToken={user.accessToken}/>
                        </div>
                        <div className="col-md-5 mid_part">
                            <Accounting report={report}/>
                        </div>
                        <div className="col-md-4 right_part">
                            <Attachments report={report}/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer reportId={reportId} allReportsIds={allReportsIds}/>
            <Overlay/>
        </>
    );
}

export default Page;