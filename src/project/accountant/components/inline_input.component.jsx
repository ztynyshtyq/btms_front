import React from "react";
import PropTypes from 'prop-types';
import SelectPicker from 'react-select';
import DatePicker, {registerLocale} from "react-datepicker";
import gb from 'date-fns/locale/en-GB';

const InlineInput = ({reportId, parameter, updateInput, label, icon, isActive, classes, data}) =>{
    const parameterToFieldTypeDictionary = {
        destinationName: "selectPicker",
        reportingDateBegin: "datePicker",
        reportingDateEnd: "datePicker",
        chargeCodeName: "text",
    };

    const selectInput = (param) => {
        switch(parameterToFieldTypeDictionary[param]){
            case "text":
                return <input type="text" disabled={!isActive} value={data}
                       onChange={e => updateInput(reportId, {[param]: e.target.value})}/>

            case "datePicker":
                registerLocale('en-GB', gb)

                return <DatePicker
                    className="date_picker" selected={new Date(data*1000)}
                    dateFormat="MMMM d, yyyy"
                    showPopperArrow={false}
                    popperPlacement="right-start"
                    popperModifiers={{
                        offset: {
                            enabled: true,
                            offset: '0, 10px'
                        },
                    }}
                    onChange={date => updateInput(reportId, {[param]: +date/1000})}
                    locale="en-GB"/>

            case "selectPicker":
                return <SelectPicker isSearchable={true} className="select_picker" options={[
                    { value: 'AL', label: 'Alabama' },
                    { value: 'AK', label: 'Alaska' },
                ]} components={{
                    DropdownIndicator:() => null,
                    IndicatorsContainer:() => null
                }} placeholder={<div>Chose city</div>}
                    onChange={e => updateInput(reportId, {[param]: e.value})}
                    defaultValue={data}/>

            default:
                return <input type="text" disabled={!isActive} value={data}
                              onChange={e => updateInput(reportId, {[param]: e.target.value})}/>
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