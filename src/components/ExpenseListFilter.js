import React from 'react';
import {connect} from 'react-redux';
import {sortByAmount,sortByDate,setTextFilter,setStartDate,setEndDate} from '../actions/filters';

import 'react-dates/initialize'
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.onDatesChange = this.onDatesChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)

        this.state = {
            calendarFocused:null,

        }
    }

    onDatesChange({startDate,endDate}){
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))

    }

    onFocusChange(calendarFocused){
        this.setState(()=>{
            return {
                calendarFocused
            };

        })
    }

    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            placeholder="Search Expenses"
                            className="text-input"
                            value={this.props.filters.text}
                            onChange={(e)=>{
                                console.log(e.target.value)
                                this.props.dispatch(setTextFilter(e.target.value))
                            }}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={(e)=>{
                                const selectedValue = e.target.value
                                if(selectedValue === 'date'){
                                    this.props.dispatch(sortByDate());
                                }else{
                                    this.props.dispatch(sortByAmount())
                                }
                            }}>
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={()=>{
                                return false
                            }}
                        />
                    </div>
                </div>



            </div>
        )
    }

};

const mapStateToProps = (state) =>{
    return {
        filters:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)