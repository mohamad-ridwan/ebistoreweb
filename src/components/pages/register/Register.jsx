import React from 'react'
import { Component } from 'react'
import FormLogin from '../../../componentcard/formlogin/FormLogin'
import './Register.scss'
import firebase from '../../../config/firebase';
import {connect} from 'react-redux'
import { registerUserAPI } from '../../../config/redux/action'

class Register extends Component{

    state = {
        email : '',
        password: '',
    }

    handleChangeText = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleRegister = ()=>{
        const {email, password} = this.state
        this.props.registerAPI({email, password});
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <>
            {/* Form Register */}
            <FormLogin
                title={"Register"}
                goLogin={"flex"}
                displayUser={"none"}
                btnLogin={"none"}
                email={"email"}
                password={"password"}
                onChangeEmail={this.handleChangeText}
                onChangePassword={this.handleChangeText}
                handleRegister={this.handleRegister}
                onSubmit={this.handleRegister}
                loading={this.props.isLoading}
                valueEmail={this.state.email}
                valuePassword={this.state.password}
            />
            {/* END Form Register */}
            </>
        )
    }
}

const reduxState = (state)=> ({
    isLoading : state.isLoading
})

const reduxDispatch = (dispatch)=> ({
    registerAPI : (data)=> dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register)