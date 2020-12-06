import React from 'react'
import { Component } from 'react'
import FormLogin from '../../../componentcard/formlogin/FormLogin'
import './Register.scss'
import firebase from '../../../config/firebase';
import { connect } from 'react-redux'
import { registerUserAPI } from '../../../config/redux/action'
import { withRouter } from 'react-router-dom';

class Register extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegister = () => {
        const { email, password } = this.state
        const res = this.props.registerAPI({ email, password });
        if (res) {
            this.setState({
                email: '',
                password: ''
            })
            alert('berhasil register!')
            this.props.history.push('/login')
        } else {
            this.props.history.push('/register')
        }
    }



    handleGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        })
            .then(() => [
                this.props.history.push('/')
            ])
            .catch(function (error) {
                console.log(error)
                this.props.history.push('/login')
            });
    }

    render() {
        return (
            <>
                {/* Form Register */}
                <FormLogin
                    title={"Register"}
                    goLogin={"flex"}
                    displayUser={"none"}
                    btnLogin={"none"}
                    displayName={"name"}
                    email={"email"}
                    password={"password"}
                    onChangeEmail={this.handleChangeText}
                    onChangePassword={this.handleChangeText}
                    handleRegister={this.handleRegister}
                    onSubmit={this.handleRegister}
                    loading={this.props.isLoading}
                    valueEmail={this.state.email}
                    valuePassword={this.state.password}
                    clickGoogle={this.handleGoogle}
                />
                {/* END Form Register */}
            </>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(withRouter(Register))