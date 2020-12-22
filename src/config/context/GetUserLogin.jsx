import React, { createContext, useEffect, useState } from 'react'
import firebase from 'firebase/app';
import newProfil from '../../img/newprofil.png'
import { Link, matchPath, useHistory, useRouteMatch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

export const GetUserLogin = React.createContext()

const GetUserLoginProvider = ({ children }) => {

    // Get user login
    const [getUser, setGetUser] = useState({
        uid: '',
        email: '',
        name: '',
        photo: '',
        hi: '',
        numberPhone: '',
        imageUpload: []
    })
    // END get user login

    // console.log('hs', histori)
    const history = useHistory()

    // const getUserWithLocalStorage = () => {
    //     const storage = JSON.parse(localStorage.getItem('userData'))
    // }

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userId = user.uid
                const emailUser = user.email
                const nameUser = user.displayName
                const photoUser = user.photoURL
                const sayHi = 'Hi !'
                const numberPhone = user.phoneNumber
                const numberPhoneDefault = 'Kamu belum memiliki nomer hp yang tercantum'

                setGetUser({
                    uid: userId,
                    email: emailUser,
                    hi: sayHi,
                    name: nameUser || emailUser,
                    photo: photoUser || newProfil,
                    numberPhone: numberPhone || numberPhoneDefault
                })
            } else {
                history.push('/login')
                const photoDefault = newProfil
                const nameDefault = 'User'
                const emailDefault = 'Kamu belum memiliki Email yang tercantum'
                const numberPhoneDefault = 'Kamu belum memiliki nomer hp yang tercantum'
                setGetUser({
                    photo: photoDefault,
                    name: nameDefault,
                    email: emailDefault,
                    numberPhone: numberPhoneDefault
                })
            }
        })
    }

    useEffect(() => {
        // getUserWithLocalStorage();
        getUserLogin();
    }, [])

    return (
        <GetUserLogin.Provider value={[getUser, setGetUser]}>
            {children}
        </GetUserLogin.Provider>
    )
}

export default (GetUserLoginProvider)