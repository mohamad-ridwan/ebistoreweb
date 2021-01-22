import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import Helmet from '../../../componentcard/helmet/Helmet'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import Verifikasi from '../../../componentcard/verifikasi/Verifikasi'
import { GetUserLogin } from '../../../config/context/GetUserLogin'
import { VerifikasiContext } from '../../../config/context/verifikasi/Verifikasi'

const KodeVerifikasi = () => {

    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [verifikasi, setVerifikasi] = useContext(VerifikasiContext)

    const history = useHistory()

    const backToLogin = () => {
        history.push('/verifikasi-nomor')
    }

    const handleChange = (e) => {
        const value = e.target.value
        setVerifikasi(value)
    }

    const btnVerifikasi = (e) => {
        e.preventDefault()
        return verifikasi && history.push('/verifikasi-nomor');
    }

    return (
        <>
            <Helmet
                titleHelmet={`Verifikasi Nomer Hp | ${getUser.email} | Ebi Store`}
                contentHelmet={`halaman verifikasi nomer hp | ${getUser.email} | Ebi Store`}
            />

            <NavbarPageCard
                backPage={backToLogin}
                position={'absolute'}
                titlePageNav={'Verifikasi Nomor Hp'}
            />

            <Verifikasi
                // ketNama={'Nama bisa di rubah di profil'}
                displayPopUp={'none'}
                icon={'fas fa-mobile'}
                placeholder={'Masukkan Kode Verifikasi'}
                btnName={'Lanjut'}
                onChange={handleChange}
                classCaptcha={'recaptcha'}
                ketNama={'Periksa kode verifikasi dari ponselmu'}
                // ketNama={getElement}
                // value={phoneNumber}
                // loading={loading}
                onSubmit={btnVerifikasi}
                type={'text'}
            />
        </>
    )
}

export default KodeVerifikasi