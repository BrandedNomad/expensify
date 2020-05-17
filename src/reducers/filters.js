import moment from 'moment';

//Filter reducer
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}
const filtersReducer = (state = filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            };
        case 'SORT_BY_START_DATE':
            return {
                ...state,
                startDate:action.date
            };
        case 'SORT_BY_END_DATE':
            return {
                ...state,
                endDate:action.date
            };
        default:
            return state;
    }
}

export default filtersReducer;