import React from 'react'
import { Component } from 'react'
import FormLogin from '../../../componentcard/formlogin/FormLogin'
import './Register.scss'
import firebase from '../../../config/firebase';
import { connect } from 'react-redux'
import { registerUserAPI } from '../../../config/redux/action'
import { withRouter } from 'react-router-dom';
import Helmet from '../../../componentcard/helmet/Helmet';

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

    handleRegister = (e) => {
        e.preventDefault()
        const alertConfirm = window.confirm('Daftarkan Akun di Ebi Store?')
        if (alertConfirm === true) {
            const { email, password } = this.state
            this.props.registerAPI({ email, password });
            this.setState({
                email: '',
                password: ''
            })
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
            const id = result.user
            const storage = localStorage.setItem('userData', JSON.stringify(id))
            return storage
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
                    titleHelmet={'Sign UP | Ebi Store'}
                    contentHelmet={'halaman Sign UP | Ebi Store'}
                />
                {/* Form Register */}
                <FormLogin
                    title={"Sign UP"}
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