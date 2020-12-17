import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import firebase from 'firebase/app';
import './Email.scss'
import { useHistory } from 'react-router-dom'

const Email = () => {

    const [userLogin, setUserLogin] = useState({
        name: '',
        email: ''
    })

    const history = useHistory()

    const toProfil = (user) => {
        history.push(`/profil/${user}`)
    }

    const warning = `Perhatian !
    Hapus Akun tidak dapat lagi untuk login di Ebi Store.
    tapi Anda masih dapat mendaftarkan dengan akun yang sama`

    const handleDeleteUser = () => {
        const confirmAlert = window.confirm(warning)
        if (confirmAlert === true) {
            var user = firebase.auth().currentUser;

            user.delete().then(function () {
                // User deleted.
            })
                .then(result => {
                    alert('Akun Berhasil Terhapus!')
                    history.push('/login')
                })
                .catch(function (error) {
                    alert('Terjadi Kesalahan (error: code 404)')
                    console.log(error)
                });
        }

    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const nameUser = user.displayName
                const emailUser = user.email

                // Change data Email User yg login
                setUserLogin({
                    email: emailUser,
                    name: nameUser
                })
            } else {
                // No user is signed in.
            }
        });
    }, [])

    return (
        <>
            <Helmet
                titleHelmet={`Email | ${userLogin.name || userLogin.email} | Ebi Store`}
                contentHelmet={`halaman email | ${userLogin.name || userLogin.name} | Ebi Store`}
            />
            <NavbarPageCard
                backPage={() => toProfil(userLogin.name || userLogin.email)}
                position={'absolute'}
                titlePageNav={'Email'}
                transparant={"transparant"}
                color={"#fff"}
            />

            <div className="wrapp-page-email">
                <p className="title-email">
                    {userLogin.email}
                </p>

                {/* Btn Change Account */}
                <BtnCard
                    heightBtn={'45px'}
                    widthBtn={'100%'}
                    btnName={'Ganti Akun'}
                    marginBtn={'20px 0px 0px 0px'}
                    bdrRadius={"100px"}
                    bgColor={"#fff"}
                    colorP={"#ffa835"}
                    fontWeight={"bold"}
                    bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                // goTo={handleSubmit}
                />
                {/* END Btn Change Account */}

                {/* Btn Delete Account */}
                <BtnCard
                    heightBtn={'45px'}
                    widthBtn={'100%'}
                    btnName={'Hapus Akun Dan Keluar'}
                    marginBtn={'20px 0px 20px 0px'}
                    bdrRadius={"100px"}
                    bgColor={"#DB2F35"}
                    colorP={"#fff"}
                    fontWeight={"bold"}
                    bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                    goTo={handleDeleteUser}
                />
                {/* END Btn Delete Account */}
            </div>
        </>
    )
}

export default Email