import React from "react";
import InlineInput from "../containers/inline_input.comp_container";

const TripInfo = ({report}) => (
    <div className="trip_information_block">
        <div className="block_header">
            <p>Trip information</p>
        </div>
        <div className="block_content">
            <InlineInput classes="destination_component" icon="icon-airplane3" parameter="destinationName"
                         label="Destination" data={report ? report.destinationName : ""} isActive={true} />

            <InlineInput classes="departure_date_component" icon="icon-calendar2" parameter="reportingDateBegin"
                         label="Departure date" data={report ? report.reportingDateBegin.toString() : ""} isActive={true} />

            <InlineInput classes="arrival_date_component" icon="icon-calendar2" parameter="reportingDateEnd"
                         label="Arrival date" data={report ? report.reportingDateEnd.toString() : ""} isActive={true} />

            <InlineInput classes="engagement_code_component" icon="icon-hash" parameter="chargeCodeName"
                         label="Engagement code" data={report ? report.chargeCodeName : ""} isActive={true} />

            <InlineInput classes="engagement_code_component" icon="icon-hash" parameter="orderNumber"
                         label="Order number" data={report ? report.orderNumber : ""} isActive={false} />
        </div>
    </div>
);

export default TripInfo;