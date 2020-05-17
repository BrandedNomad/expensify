import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {addExpense} from '../actions/expenses'

console.log(moment().format('MMM Do, YYYY'))
export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onNoteChange = this.onNoteChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.state ={
            description:props.expense ? props.expense.description:'',
            amount:props.expense? (props.expense.amount).toString():'',
            note:props.expense ? props.expense.note:'',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calenderFocused:false,
            error:''
        }
    }


    onDescriptionChange(e){
        const description = e.target.value
        this.setState(()=>{
            return {
                description:description
            }
        })
    }

    onNoteChange(e){
        const note = e.target.value
        this.setState(()=>{
            return {
                note:note
            }
        })

    }

    handleSubmit(e){
        e.preventDefault()

        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return {
                    error:'Please provide description and amount'
                }
            })
        }else{
            this.setState(()=>{
                return {
                    error: ''
                }
            })
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            })


        }


    }

    onAmountChange(e){
        const amount = e.target.value;
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {
                    amount:amount
                }
            })
        }

    }

    onDateChange(createdAt){
        if(createdAt){
            this.setState(()=>{
                return {
                    createdAt: createdAt
                }
            })
        }


    }

    onFocusChange({focused}){
        this.setState(()=>{
            return {
                calenderFocused:focused
            }
        })

    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus={true}
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day)=>{
                            return false
                        }}
                        id="date-picker"
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}