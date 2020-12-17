import React from 'react'
import { Component } from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom'
import './Login.scss'
import bgLogin from '../../../img/bgmakaroni2.jpg'
import google from '../../../img/google (1).png'
import FormLogin from '../../../componentcard/formlogin/FormLogin'
import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionUserName, handleGoogle, loginGoogle } from '../../../config/redux/action'
import { loginUserAPI } from '../../../config/redux/action'
import firebase from 'firebase/app';
import Spinner from '../../../componentcard/spinner/Spinner'
import Helmet from '../../../componentcard/helmet/Helmet'

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = this.state
        const res = await this.props.loginAPI({ email, password })
            .catch(err => err)
        if (res) {
            console.log('success:', res)
            this.setState({
                email: '',
                password: ''
            })
            this.props.history.push('/')
        } else {
            alert('email atau password tidak terdaftar!!')
        }
    }

    handleGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        })
            .then(() => {
                this.props.history.push('/')
            })
            .catch(function (error) {
                console.log(error)
                alert('Terjadi Kesalahan' + ' ' + '(Error: 404)', error)
            });
    }

    render() {
        return (
            <>
                <Helmet
                    titleHelmet={'Login | Ebi Store'}
                    contentHelmet={'halaman login | Ebi Store'}
                />
                <FormLogin
                    title={"Login"}
                    displayUser={"none"}
                    goLogin={"none"}
                    btnRegister={"flex"}
                    email={"email"}
                    password={"password"}
                    linkRegister={'/register'}
                    onChangeEmail={this.handleChangeText}
                    onChangePassword={this.handleChangeText}
                    onSubmit={this.handleLogin}
                    handleLogin={this.handleLogin}
                    loadingLogin={this.props.isLoading}
                    clickGoogle={this.handleGoogle}
                // linkHome={'/beranda'}
                />
            </>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(withRouter(Login))