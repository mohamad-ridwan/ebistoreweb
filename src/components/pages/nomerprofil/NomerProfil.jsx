import React, { useEffect, useState } from 'react'
import './NomerProfil.scss'
import firebase from 'firebase/app';
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard';
import BtnCard from '../../../componentcard/btncard/BtnCard';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import Helmet from '../../../componentcard/helmet/Helmet';
import { GetUserLogin } from '../../../config/context/GetUserLogin';
import API from '../../../service';
import Spinner from '../../../componentcard/spinner/Spinner';
import { UpdateStateContext } from '../../../config/context/updatestate/UpdateState';

const NomerProfil = () => {

    const [dataNama, setDataNama] = useState({})
    const [update] = useContext(UpdateStateContext)
    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [getDataForLoading, setGetDataForLoading] = useState([])
    const [nomerUser, setNomerUser] = useState({
        phoneUser: `${update}`
    })

    const handleChangeNumberPhone = (e) => {
        const newNomerUser = { ...nomerUser }
        newNomerUser[e.target.name] = e.target.value
        setNomerUser(newNomerUser)
    }

    const handleSubmit = (e) => {
        const windowConfirm = window.confirm('Simpan nomer kamu?')
        if (windowConfirm) {
            const storage = JSON.parse(localStorage.getItem('userData'))
            const phoneUser = nomerUser
            const data = {
                phoneUser: phoneUser,
                date: new Date().getTime(),
                uid: storage.uid
            }
            API.APIRealtimePostNomer(data)
            alert('Berhasil tersimpan')
        }
        e.preventDefault()
    }

    const getDataAPI = () => {
        API.APIFirebaseMenuAllProduct()
            .then((res) => {
                setGetDataForLoading(res)
            })
        API.APIRealtimeNamaProfile()
            .then((res) => {
                setDataNama(res)
            })
    }

    const histori = useHistory()

    const toProfil = (user) => {
        histori.push(`/profil/${user}`)
    }

    const getUserFromLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const nameUser = user.displayName
                const emailUser = user.email

                setGetUser({
                    name: nameUser,
                    email: emailUser
                })
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getDataAPI()
        getUserFromLogin()
    }, [])

    return (
        <>
            {getDataForLoading && getDataForLoading.length > 0 ? (
                <>
                    {dataNama && dataNama ?
                        (
                            <Helmet
                                titleHelmet={`Nomer Telepon | ${dataNama.username} | Ebi Store`}
                                contentHelmet={`halaman rubah nomer telepon profile | ${dataNama.username} | Ebi Store`}
                            />
                        ) : (
                            <Helmet
                                titleHelmet={`Nomer Telepon | ${getUser.name || getUser.name} | Ebi Store`}
                                contentHelmet={`halaman rubah nomer telepon profile | ${getUser.name || getUser.email} | Ebi Store`}
                            />
                        )}

                    <NavbarPageCard
                        backPage={() => toProfil(getUser.name || getUser.email)}
                        position={'absolute'}
                        titlePageNav={'Nomer Telepon'}
                        transparant={"transparant"}
                        color={"#fff"}
                    />
                    <div className="wrapper-namaProfil">
                        <div className="box-input-nama">
                            <label htmlFor="label" className="name">
                                {nomerUser.phoneUser}
                            </label>

                            <form onSubmit={handleSubmit}>
                                <input onSubmit={handleSubmit} type="number" className="input-nama" autoFocus name="phoneUser" value={nomerUser.phoneUser}
                                    onChange={handleChangeNumberPhone}
                                />
                            </form>

                            <BtnCard
                                heightBtn={'45px'}
                                widthBtn={'100%'}
                                btnName={'Simpan Nomer Telpon'}
                                marginBtn={'20px 0px 20px 0px'}
                                bdrRadius={"100px"}
                                bgColor={"#fff"}
                                colorP={"#ffa835"}
                                fontWeight={"bold"}
                                bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                                goTo={handleSubmit}
                            />
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

export default NomerProfil