import React from "react";
import PropTypes from "prop-types";
import * as $ from "jquery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const inputChanges = (e, handlerChange, expenseReport) => {
    const newExpenseReport = Object.assign({}, expenseReport, {[$(e.target).data('btmsfield')]: $(e.target).val()})

    handlerChange(newExpenseReport);
};

const datePickerBeginChanges = (e, handlerChange, id) => {
    handlerChange({
        id: id,
        "reportingDateBegin": +(new Date(e))
    });
};

const datePickerEndChanges = (e, handlerChange, id) => {
    handlerChange({
        id: id,
        "reportingDateBegin": +(new Date(e))
    });
};

const CustomDateInput = ({value, onClick}) => (
    <div>
        <span className="ucDatePicker" onClick={onClick}><i className="icon-calendar2"/></span>
        <input type="text" className="awdawd" value={value}/>
    </div>
);


const app = (expenseReport) => (
    <div className="BTMS_item">
        <div className="btmsHeader">
            <h3>BTMS #{expenseReport.id} charged on {expenseReport.chargeCodeName}</h3>
        </div>
        <div className="btmsContent">
            <div className="BTMS_general">
                <h4>Trip information</h4>
                <div className="BTMS_general_item period">
                    <div className="BTMS_item_left">
                        <label htmlFor=""><i className="icon-calendar2"/> &nbsp; Period from</label>
                    </div>
                    <div className="BTMS_item_right">
                        <div className="reportingDateBegin">
                            <DatePicker selected={new Date(expenseReport.reportingDateBegin*1000)}
                                        onChange={date => {
                                            expenseReport.setSingleExpenseReportFromUserRequests({
                                                id: expenseReport,
                                                "reportingDateBegin": +(new Date(date))
                                            });
                                        }}
                                        dateFormat="d MMM yyyy"
                                        customInput={<CustomDateInput/>}
                            />
                        </div>
                        <div className="reportingDateEnd">
                            <DatePicker selected={new Date(expenseReport.reportingDateEnd)}
                                        onChange={date => {
                                            expenseReport.setSingleExpenseReportFromUserRequests({
                                                id: expenseReport,
                                                "reportingDateEnd": +(new Date(date))
                                            });
                                        }}
                                        dateFormat="d MMM yyyy"
                                        customInput={<CustomDateInput/>}
                            />
                        </div>
                    </div>
                </div>

                <div className="BTMS_general_item destination">
                    <div className="BTMS_item_left">
                        <label htmlFor=""><i className="icon-airplane3"/> &nbsp; Destination:</label>
                    </div>
                    <div className="BTMS_item_right">
                        <div className="city">
                            <input type="text" placeholder="city" value={expenseReport.city}
                                   data-btmsfield="city"
                                   onChange={e => inputChanges(e, expenseReport.setSingleExpenseReportFromUserRequests, expenseReport)}/>
                        </div>
                    </div>
                </div>

                <div className="BTMS_general_item comments">
                    <div className="BTMS_item_left">
                        <label htmlFor=""><i className="icon-pencil7"/> &nbsp; Comments:</label>
                    </div>
                    <div className="BTMS_item_right">
                        <textarea type="text" placeholder="comments" value={expenseReport.comments} data-btmsfield="Comments"
                                  onChange={e => inputChanges(e, expenseReport.setSingleExpenseReportFromUserRequests, expenseReport)}/>
                    </div>
                </div>

            </div>
            <div className="BTMS_accounting">
                <h4>Accounting information</h4>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th className="statement">Statement</th>
                            <th className="amount"/>
                            <th className="comment" width="150px"/>
                            <th className="file" width="20px"><i className="icon-file-plus"/></th>
                        </tr>
                        </thead>
                        <tbody>
                        {expenseReport.expenseReportAmounts.map((accountItem) => (
                            <tr>
                                <td className="statement">{accountItem.code}</td>
                                <td className="amount">
                                    <input type="text" className="amount" value={accountItem.amount}/>
                                </td>
                                <td className="comment">
                                    <input value={accountItem.description} placeholder="comments"/>
                                </td>
                                <td><i className="icon-attachment"/></td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td className="statement">Total accrued, including:</td>
                            <td className="amount">60 000</td>
                        </tr>
                        <tr>
                            <td className="statement">Cash paid</td>
                            <td className="amount">60 000</td>
                        </tr>
                        </tfoot>
                    </table>
                    <div className="BTMS_item_controlButtons">
                        <button className="BTMS_item_controlButtons_confirm" onClick={e => {
                            expenseReport.setSingleExpenseReportFromUserRequests({...expenseReport});
                        }}>Send to Confirmation
                        </button>
                    </div>
                </div>
            </div>
            <div className="btmsProgressBar">
                <h4>Approval information</h4>
                <div className="routeBar">
                    <span className="marker"/>
                    <div>
                        <p className="employeeName">Ainur Nurgazyeva</p>
                        <p className="daysOutstanding">2 days</p>
                    </div>
                </div>
                <div className="routeBar">
                    <span className="marker"/>
                    <div>
                        <p className="employeeName">Yelena Krasilnikova</p>
                        <p className="daysOutstanding">1 day</p>
                    </div>
                </div>
                <div className="routeBar">
                    <span className="marker"/>
                    <div>
                        <p className="employeeName">Performance manager</p>
                        <p className="daysOutstanding">5 days</p>
                    </div>
                </div>
                <div className="routeBar">
                    <span className="marker"/>
                    <div>
                        <p className="employeeName">Director</p>
                        <p className="daysOutstanding">Pending</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


app.propTypes = {
    id: PropTypes.number.isRequired,
    reportingDateBegin: PropTypes.number.isRequired,
    reportingDateEnd: PropTypes.number.isRequired,
    comments: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    status: PropTypes.string.isRequired,
    chargeCodeName: PropTypes.string.isRequired,
    //handlerChange: PropTypes.func.isRequired
};


export default app;