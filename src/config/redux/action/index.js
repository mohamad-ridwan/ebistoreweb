import Axios from 'axios';
import firebase from '../../firebase';

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: 'CHANGE_USER', value: 'apriyadi' })
    }, 2000)
}

export const registerUserAPI = (data) => (dispatch) => {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    return (
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log('success: ', res)
                dispatch({ type: 'CHANGE_LOADING', value: false })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({ type: 'CHANGE_LOADING', value: false })
            })
    )
}

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                const dataUser = {
                    email: res.user.email,
                    uid: res.user.uid,
                    phoneNumber: res.user.phoneNumber
                }
                dispatch({ type: 'CHANGE_LOADING', value: false })
                dispatch({ type: 'CHANGE_ISLOGIN', value: true })
                dispatch({ type: 'CHANGE_USER', value: dataUser })
                resolve(true)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({ type: 'CHANGE_LOADING', value: false })
                dispatch({ type: 'CHANGE_ISLOGIN', value: false })
                reject(false)
            })
    })
}

export const getAllDataApi = () => {
    Axios.get('http://localhost:6235/v8/makaroni/getall/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}