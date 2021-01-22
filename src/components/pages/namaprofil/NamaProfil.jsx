import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './NamaProfil.scss'
import firebase from 'firebase/app';
import Helmet from '../../../componentcard/helmet/Helmet'
import { useHistory } from 'react-router'
import { GetUserLogin } from '../../../config/context/GetUserLogin'
import { UpdateStateContext } from '../../../config/context/updatestate/UpdateState'
import API from '../../../service'
import PopUp from '../../../componentcard/popup/PopUp'
import Spinner from '../../../componentcard/spinner/Spinner'

const NamaProfil = () => {

    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [update] = useContext(UpdateStateContext)
    const [dataNama, setDataNama] = useState({})
    const [loading, setLoading] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [changeNama, setChangeNama] = useState({
        username: `${update}`
    })

    const history = useHistory()

    const getUserFromLogin = () => {
        const fb = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const nameUser = user.displayName
                const emailUser = user.email

                if (user) {
                    API.APIRealtimeNamaProfile()
                        .then((res) => {
                            if (!res) {
                                history.push('/registrasi-nama')
                            }
                        })
                } else if (user) {
                    API.APIRealtimeNomerProfile()
                        .then((res) => {
                            if (!res) {
                                history.push('/verifikasi-nomor')
                            }
                        })
                }

                // Change Data User yg masuk
                setGetUser({
                    data: {
                        name: nameUser,
                        email: emailUser,
                    }
                })
            } else {
                // Data Default Jika User tidak login
                const nameDefault = 'Profil Saya'
                const emailDefault = 'Kamu belum memiliki Email yang tercantum'

                // Change Data Untuk data default
                setGetUser({
                    data: {
                        name: nameDefault,
                        email: emailDefault,
                    }
                })
            }
        });
        return fb
    }

    const handleChangeName = (e) => {
        const newChangeName = e.target.value
        setChangeNama({
            username: newChangeName
        })
    }

    const setAllAPI = () => {
        API.APIRealtimeNamaProfile()
            .then((res) => {
                setDataNama(res)
                setChangeNama(res)
            })
    }

    const handleSubmit = (e) => {
        const windowConfirm = window.confirm('Simpan nama kamu?')
        if (windowConfirm) {
            setLoading(true)
            const username = changeNama.username
            const data = {
                username: username
            }
            if (API.APIRealtimePostNama(data)) {
                setTimeout(() => {
                    setLoading(false)
                    setPopUp(true)
                }, 2000)
                setInterval(() => {
                    setPopUp(false)
                }, 3000)
            }
        }
        e.preventDefault()
    }

    const toProfil = (user) => {
        history.push(`/profil/${user}`)
    }

    useEffect(() => {
        getUserFromLogin()
        setAllAPI()
    }, [])

    return (
        <>
            {dataNama && dataNama.username ? (
                <>
                    {dataNama && dataNama.username ?
                        (
                            <>
                                <Helmet
                                    titleHelmet={`Nama Profil | ${dataNama.username} | Ebi Store`}
                                    contentHelmet={`halaman rubah nama profil | ${dataNama.username} | Ebi Store`}
                                />

                                <NavbarPageCard
                                    backPage={() => toProfil(dataNama.username)}
                                    position={'absolute'}
                                    titlePageNav={'Rubah Nama'}
                                    transparant={"transparant"}
                                    color={"#fff"}
                                />
                            </>
                        ) : (
                            <>

                                <Helmet
                                    titleHelmet={`Nama Profil | ${getUser.name || getUser.email} | Ebi Store`}
                                    contentHelmet={`halaman rubah nama profil | ${getUser.name || getUser.email} | Ebi Store`}
                                />
                                <NavbarPageCard
                                    backPage={() => toProfil(getUser.name || getUser.email)}
                                    position={'absolute'}
                                    titlePageNav={'Rubah Nama'}
                                    transparant={"transparant"}
                                    color={"#fff"}
                                />
                            </>
                        )}

                    <div className="wrapper-namaProfil">
                        <div className="box-input-nama">
                            <label htmlFor="label" className="name">
                                {changeNama.username}
                            </label>
                            <form onSubmit={handleSubmit}>
                                <input type="text" className="input-nama" autoFocus name="username" value={changeNama.username}
                                    onChange={handleChangeName}
                                />
                            </form>

                            <BtnCard
                                heightBtn={'45px'}
                                widthBtn={'100%'}
                                btnName={'Simpan Nama'}
                                marginBtn={'20px 0px 20px 0px'}
                                bdrRadius={"100px"}
                                bgColor={"#fff"}
                                colorP={"#ffa835"}
                                fontWeight={"bold"}
                                bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                                goTo={handleSubmit}
                                loading={loading}
                            />

                            <PopUp
                                transformPopUp={popUp ? 'translateY(0px)' : 'translateY(100px)'}
                                txtPopUp={'Nama telah di simpan!'} />
                        </div>
                    </div>
                </>
            ) : (
                    <Spinner
                        bgColorLoading={'#ffa835'}
                    />
                )}

        </>
    )
}

export default NamaProfil