import React, { useEffect, useState } from 'react'
import './NomerProfil.scss'
import firebase from 'firebase/app';
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard';
import BtnCard from '../../../componentcard/btncard/BtnCard';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ChangeNumberPhone } from '../../../config/context/ChangeNumberPhone';
import Axios from 'axios';
import { GetNumberPhone } from '../../../config/context/GetNumberPhone';
import Helmet from '../../../componentcard/helmet/Helmet';
import { GetUserLogin } from '../../../config/context/GetUserLogin';
import API from '../../../service';
import Spinner from '../../../componentcard/spinner/Spinner';
import { PostNomerUserContext } from '../../../config/context/nomerhp/PostNomerUser';
import { GetNamaUserContext } from '../../../config/context/namauser/GetNamaUser';

const NomerProfil = () => {

    const [dataNama] = useContext(GetNamaUserContext)
    const [postNomer] = useContext(PostNomerUserContext)
    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [getDataForLoading, setGetDataForLoading] = useState([])
    const [nomerUser, setNomerUser] = useState({
        phoneUser: ''
    })

    const handleChangeNumberPhone = (e) => {
        const newNomerUser = { ...nomerUser }
        newNomerUser[e.target.name] = e.target.value
        setNomerUser(newNomerUser)
    }

    const handleSubmit = () => {
        const windowConfirm = window.confirm('Simpan nomer kamu?')
        if (windowConfirm) {
            const storage = JSON.parse(localStorage.getItem('userData'))
            const phoneUser = nomerUser
            const data = {
                phoneUser: phoneUser,
                date: new Date().getTime(),
                uid: storage.uid
            }
            postNomer(data)
            alert('Berhasil tersimpan')
        }
    }

    const getDataAPI = () => {
        API.APIFirebaseMenuAllProduct()
            .then((res) => {
                setGetDataForLoading(res)
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
                    {dataNama.data && dataNama.data.length > 0 ?
                        dataNama.data.map(e => {
                            return (
                                <Helmet
                                    key={e.id}
                                    titleHelmet={`Nomer Telepon | ${e.data.username} | Ebi Store`}
                                    contentHelmet={`halaman rubah nomer telepon profile | ${e.data.username} | Ebi Store`}
                                />
                            )
                        }) : (
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
                                <input onSubmit={handleSubmit} type="number" className="input-nama" autoFocus name="phoneUser"
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