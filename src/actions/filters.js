//SET_TEXT_FILTER
export const setTextFilter = (text = '')=>{
    return {
        type:'SET_TEXT_FILTER',
        text:text
    }
}
//SORT_BY_DATE
export const sortByDate = () =>{
    return {
        type:'SORT_BY_DATE'
    }
}
//SORT_BY_AMOUNT
export const sortByAmount = () =>{
    return {
        type:'SORT_BY_AMOUNT'
    }
}
//SET_START_DATE
export const setStartDate = (date=undefined) =>{
    return {
        type:'SORT_BY_START_DATE',
        date:date
    }
}
//SET_END_DATE
export const setEndDate = (date = undefined) =>{
    return {
        type:'SORT_BY_END_DATE',
        date:date
    }
}
