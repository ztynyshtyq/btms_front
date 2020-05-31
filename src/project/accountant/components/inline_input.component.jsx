import React from "react";
import PropTypes from 'prop-types';
import SelectPicker from 'react-select';
import DatePicker, {registerLocale} from "react-datepicker";
import NumberFormat from 'react-number-format';
import gb from 'date-fns/locale/en-GB';

const InlineInput = ({report, parameter, updateInput, label, icon, isActive, classes, data}) => {
    const parameterToFieldTypeDictionary = {
        destinationName: "selectPicker",
        reportingDateBegin: "datePicker",
        reportingDateEnd: "datePicker",
        chargeCodeName: "text",
        expenseReportCashPaid: "number",
        expenseReportBalance: "number",
        expenseReportTotalAccrued: "number",
    };

    const updatedFields = (fields) => {
        if (Object.keys(fields).includes("expenseReportCashPaid"))
            fields.expenseReportBalance = fields.expenseReportCashPaid - report.expenseReportTotalAccrued;

        return fields;
    }

    const selectInput = (param) => {
        switch (parameterToFieldTypeDictionary[param]) {
            case "text":
                return <input value={data} disabled={!isActive}
                              onChange={e => updateInput(report.id, {[param]: e.target.value})}/>

            case "number":
                return <NumberFormat value={data} disabled={!isActive} thousandSeparator={" "}
                                     onValueChange={e => updateInput(report.id, updatedFields({[param]: parseInt(e.value)}))}
                                     className={data < 0 ? "negative" : ""}
                                     suffix={data < 0 ? ")" : ""}
                                     prefix={data < 0 ? "(" : ""}
                />


            case "datePicker":
                registerLocale('en-GB', gb)

                return <DatePicker
                    className="date_picker" selected={new Date(data * 1000)}
                    dateFormat="MMMM d, yyyy"
                    showPopperArrow={false}
                    popperPlacement="right-start"
                    popperModifiers={{
                        offset: {
                            enabled: true,
                            offset: '0, 10px'
                        },
                    }}
                    onChange={date => updateInput(report.id, {[param]: +date / 1000})}
                    locale="en-GB"/>

            case "selectPicker":
                return <SelectPicker isSearchable={true} className="select_picker" options={[
                    //todo: transfer this to report and cache it
                    {
                        id: "Астана",
                        value: "Астана",
                        label: "Астана",
                        "country_id": 1
                    },
                    {
                        id: "Томск",
                        value: "Томск",
                        label: "Томск",
                        "country_id": 1
                    },
                    {
                        id: "Москва",
                        value: "Москва",
                        label: "Москва",
                        "country_id": 2
                    },
                    {
                        id: "Омск",
                        value: "Омск",
                        label: "Омск",
                        "country_id": 2
                    },
                    {
                        id: "Новгород",
                        value: "Новгород",
                        label: "Новгород",
                        "country_id": 2
                    },
                    {
                        id: "Актобе",
                        value: "Актобе",
                        label: "Актобе",
                        "country_id": 3
                    },
                    {
                        id: "Алматы",
                        value: "Алматы",
                        label: "Алматы",
                        "country_id": 4
                    }
                ]} components={{
                    DropdownIndicator: () => null,
                    IndicatorsContainer: () => null
                }} placeholder={<div>Chose city</div>}
                   onChange={e => updateInput(report.id, {[param]: e.value})}
                   value={{value: data, label: data, id: data}}/>

            default:
                return <input type="text" disabled={!isActive} value={data}
                              onChange={e => updateInput(report.id, {[param]: e.target.value})}/>
        }
    }

    return (
        <div className={classes + " inline_input"}>
            <div className="d-inline-block component_icon"><i className={icon}/></div>
            <div className="d-inline-block component_label"><p>{label}</p></div>
            <div className="d-inline-block component_input">
                {selectInput(parameter)}
            </div>
        </div>
    );
}

InlineInput.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    data: PropTypes.any.isRequired,
    classes: PropTypes.string.isRequired
};

export default InlineInput;