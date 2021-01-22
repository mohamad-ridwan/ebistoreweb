import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import PopUp from '../../../componentcard/popup/PopUp'
import Verifikasi from '../../../componentcard/verifikasi/Verifikasi'
import { GetUserLogin } from '../../../config/context/GetUserLogin'
import API from '../../../service'
import './RegistrasiNama.scss'

const RegistrasiNama = () => {

    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [loading, setLoading] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [changeNama, setChangeNama] = useState({
        username: ``
    })

    const handleChangeName = (e) => {
        const newChangeName = e.target.value
        setChangeNama({
            username: newChangeName
        })
    }

    const history = useHistory()

    const handleSubmit = (e) => {
        const windowConfirm = window.confirm('Simpan Untuk Melanjutkan?')
        if (windowConfirm) {
            if (changeNama.username.length > 4) {
                setLoading(true)
                const username = changeNama.username
                const data = {
                    username: username
                }
                if (API.APIRealtimePostNama(data)) {
                    setTimeout(() => {
                        setLoading(false)
                        API.APIRealtimeNomerProfile()
                            .then((res) => {
                                if (!res) {
                                    history.push('/verifikasi-nomor')
                                } else if (res) {
                                    history.push('/')
                                }
                            })
                    }, 2000)
                }
            } else {
                setPopUp(true)
                setTimeout(() => {
                    setPopUp(false)
                }, 3000)
            }
        }
        e.preventDefault()
    }

    const backToLogin = () => {
        history.push('/login')
    }

    return (
        <>
            <Helmet
                titleHelmet={`Registrasi Nama | ${getUser.email} | Ebi Store`}
                contentHelmet={`halaman registrasi nama | ${getUser.email} | Ebi Store`}
            />

            <NavbarPageCard
                backPage={backToLogin}
                position={'absolute'}
                titlePageNav={'Registrasi Nama'}
            />
            <Verifikasi
                ketNama={'Nama bisa di rubah di profil'}
                onChange={handleChangeName}
                onSubmit={handleSubmit}
                loading={loading}
                icon={'fas fa-user-tie'}
                placeholder={'Masukkan Nama Untuk Akun Kamu'}
                btnName={'Simpan Untuk Lanjut'}
                displayPopUp={popUp ? 'flex' : 'none'}
                type="text"
            />
        </>
    )
}

export default RegistrasiNama