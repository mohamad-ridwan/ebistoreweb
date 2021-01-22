import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Helmet from '../../../componentcard/helmet/Helmet'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import Verifikasi from '../../../componentcard/verifikasi/Verifikasi'
import { GetUserLogin } from '../../../config/context/GetUserLogin'
import './VerifikasiNomer.scss'
import firebase from '../../../config/firebase'
import { VerifikasiContext } from '../../../config/context/verifikasi/Verifikasi'
import API from '../../../service'

const VerifikasiNomer = () => {

    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [verifikasi, setVerifikasi] = useContext(VerifikasiContext)
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState({
        phoneUser: '+62'
    })

    const history = useHistory()

    const backToLogin = () => {
        history.push('/login')
    }

    const handleChange = (e) => {
        const value = e.target.value
        if (value.length <= 5) {
            const getDisable = document.querySelector('.btn-alamat')
            getDisable.classList.add('disable')
        } if (value.length >= 3) {
            const getDisable = document.querySelector('.btn-alamat')
            getDisable.classList.remove('disable')
            setPhoneNumber({ phoneUser: value })
            if (value.length <= 3) {
                getDisable.classList.add('disable')
            }
        }

    }

    const data = {
        phoneUser: phoneNumber
    }

    const handleSubmit = async (e) => {
        if (phoneNumber.phoneUser.length <= 3) {
            const getDisable = document.querySelector('.btn-alamat')
            getDisable.classList.add('disable')
        } else if (phoneNumber.phoneUser.length >= 3) {
            e.preventDefault()
            setLoading(true)
            API.APIRealtimePostNomer(data)
                .then((res) => {
                    setTimeout(() => {
                        if (res) {
                            history.push('/')
                            setLoading(false)
                        }
                    }, 2000)
                })
        }
    }

    useEffect(() => {
        handleSubmit()
        // verifikasi()
    }, [])

    return (
        <>
            <Helmet
                titleHelmet={`Registrasi Nomer Hp | ${getUser.email} | Ebi Store`}
                contentHelmet={`halaman Registrasi nomer hp | ${getUser.email} | Ebi Store`}
            />

            <NavbarPageCard
                backPage={backToLogin}
                position={'absolute'}
                titlePageNav={'Registrasi Nomor Hp'}
            />
            <Verifikasi
                ketNama={'Tambahkan Nomor Hp Untuk Melanjutkan'}
                displayWrapp={`${display ? 'none' : 'flex'}`}
                displayPopUp={'none'}
                icon={'fas fa-mobile'}
                placeholder={'Masukkan Nomor Hp Kamu'}
                btnName={'Lanjut'}
                onChange={handleChange}
                classCaptcha={'recaptcha-container'}
                value={phoneNumber.phoneUser}
                loading={loading}
                onSubmit={handleSubmit}
                type={'text'}
            />

            {/* <Verifikasi
                // ketNama={'Nama bisa di rubah di profil'}
                displayWrapp={`${display ? 'flex' : 'none'}`}
                displayBtn={'flex'}
                displayPopUp={'none'}
                icon={'fas fa-mobile'}
                placeholder={'Masukkan Kode Verifikasi'}
                btnName={'Lanjut'}
                onChange={changeCodeVerifikasi}
                classCaptcha={'recaptcha'}
                ketNama={'Periksa kode verifikasi dari ponselmu'}
                // ketNama={getElement}
                // value={phoneNumber}
                // loading={loading}
                onSubmit={btnVerifikasi}
                type={'text'}
            /> */}


        </>
    )
}

export default VerifikasiNomer