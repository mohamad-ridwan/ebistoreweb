import React, { createContext, useEffect, useState } from 'react'
import firebase from 'firebase/app';
import newProfil from '../../img/newprofil.png'
import API from '../../service';

export const GetUserLogin = React.createContext()

const GetUserLoginProvider = ({ children }) => {

    const [getUser, setGetUser] = useState({
        uid: '',
        email: '',
        name: '',
        photo: '',
        hi: '',
        numberPhone: '',
        imageUpload: []
    })

    const [updateAlamat, setUpdateAlamat] = useState({
        alamat: '',
        kodePos: '',
        kota: '',
        namaPenerima: '',
        nomerHp: ''
    })

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
                const photoDefault = newProfil

                setGetUser({
                    uid: userId,
                    email: emailUser,
                    hi: sayHi,
                    name: nameUser || emailUser,
                    photo: photoUser || photoDefault,
                    numberPhone: numberPhone || numberPhoneDefault
                })
            } else {
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
        getUserLogin();

    }, [])

    return (
        <GetUserLogin.Provider value={[getUser, setGetUser, updateAlamat, setUpdateAlamat]}>
            {children}
        </GetUserLogin.Provider>
    )
}

export default (GetUserLoginProvider)