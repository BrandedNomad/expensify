import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

const LoginPage = ({startLogin})=>{

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>Take control of your expenses.</p>
                <button className="box-layout__button" onClick ={startLogin}>Login with Google</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {startLogin: ()=>{
        return dispatch(startLogin())
    }}
}

export default connect(undefined,mapDispatchToProps)(LoginPage)