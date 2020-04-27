import React, {useEffect} from "react";
import ExpenseReportTile from "../containers/expense_report_tile.container";

class Component extends React.Component {
    // TODO: write middleware in order to change names to correct
    componentWillMount() {
        this.props.apiGetExpenseReportsFromUser(this.props.user.access_token).then(console.log("priletelo"));
    }

    render() {
        if (this.props.expenseReportsFromUserRequests !== undefined)
            return (
                <div className="ucBTMSList">
                    <h4>BTMS Requests</h4>
                    <ul>
                        <li>
                            <button>Requests to me</button>
                        </li>
                        <li>
                            <button>My requests</button>
                        </li>
                    </ul>
                    <div className="BTMSList">
                        {
                            this.props.expenseReportsFromUserRequests.map((item, index) => (
                                <ExpenseReportTile key={index} {...item} />
                            ))}
                    </div>
                </div>
            );
        else
            return (<p>is loading</p>);
    }


}

export default Component;

