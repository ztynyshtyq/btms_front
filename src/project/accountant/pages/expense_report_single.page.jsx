import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import Header from "../blocks/header.block";
import Footer from "../blocks/footer.block";
import TripInfo from "../containers/trip_info.block_container";
import Summary from "../containers/summary.block_container";
import ControlButtons from "../containers/control_buttons.block_container";
import NavBar from "../containers/navbar.block_container";
import Overlay from "../containers/overlay.block_container";
import Loader from "../containers/loader.block_container";
import Accounting from "../containers/accounting.block_container";
import Attachments from "../containers/attachments.block_container";
import * as params from "../constants/params";
import {HotKeys} from "react-hotkeys";

const Page = ({pageSettings, uncheckAll, checkAll, hotKeyExpandAll, hotKeyCollapseAll, allReportsIds, report, setFilter, getExpenseReportsForApproval, user}) => {
    const reportId = parseInt(useParams().reportId);

    useEffect(() => {
        getExpenseReportsForApproval(user.accessToken);
        setFilter({
            mainFilter: params.PARAM_FILTER_FOR_USER_APPROVAL,
            subFilter: {
                reportId: reportId,
                status: ["wait", "accepted"]
            }
        });
    }, [reportId]);

    return (
        <HotKeys
            keyMap={{
                EXPAND_ALL: "ctrl+b",
                COLLAPSE_ALL: "ctrl+m",
                CHECK_ALL: "ctrl+q",
                UNCHECK_ALL: "ctrl+y",
            }}
            handlers={{
                EXPAND_ALL: e => hotKeyExpandAll(report),
                COLLAPSE_ALL: e => hotKeyCollapseAll(report),
                CHECK_ALL: e => checkAll(report),
                UNCHECK_ALL: e => uncheckAll(report)
            }}>
            <Header/>
            <main>
                <div className="container statusbar">
                    {report
                        ? <div className={report.status + " status_badge"}>
                            <p>{{
                                "wait": "on approval",
                                "accepted": "accepted"
                            }[report.status]}</p>
                        </div>
                        : ""}
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
                <NavBar reportId={reportId} allReportsIds={allReportsIds} />
            </main>
            <Footer />
            <Loader />
            <Overlay report={report} pageSettings={pageSettings}/>
        </HotKeys>
    );
}

export default Page;