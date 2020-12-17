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

const NomerProfil = () => {

    const [getDataHp, setGetDataHp, handleUpdate, update, setUpdate] = useContext(GetNumberPhone)
    const [getChangeTxt, setGetChangeTxt] = useContext(ChangeNumberPhone)
    const [getUser, setGetUser] = useContext(GetUserLogin)

    const [getDataForLoading, setGetDataForLoading] = useState([])

    const getDataAPI = () => {
        API.APISerba5rb()
            .then((res) => {
                setGetDataForLoading(res.data)
            })
    }

    const handleChangeNumberPhone = (event) => {
        const newGetUser = { ...getChangeTxt.data }
        newGetUser[event.target.name] = event.target.value
        setGetChangeTxt({
            data: newGetUser
        })
    }

    const putDataPhoneUser = () => {
        const id = setGetDataHp._id
        Axios.put(`http://localhost:6235/v11/nomerhpuser/putnomer/${id}`,
            getChangeTxt.data
        )
            .then(res => {
                console.log('perubahan berhasil tersimpan!', res)
            })
            .catch(err => {
                alert('update failed')
                console.log('update failed', err)
            })
    }

    const histori = useHistory()

    const toProfil = (user) => {
        histori.push(`/profil/${user}`)
    }

    const handleSubmit = (event) => {
        if (setUpdate) {
            window.confirm('Simpan Perubahan?')
            putDataPhoneUser()
        } else {
            event.preventDefault()
            Axios.post('http://localhost:6235/v11/nomerhpuser/nomer',
                getChangeTxt.data
            )
                .then(res => {
                    console.log(res)
                    alert('nomer berhasil tersimpan di profil!')
                    histori.push('/pageprofil')
                })
                .catch(err => {
                    console.log(err)
                    alert('Terjadi Kesalahan (error code : 404)')
                })
        }
    }

    useEffect(() => {
        getDataAPI()
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
    }, [])

    return (
        <>
            {getDataForLoading && getDataForLoading.length > 0 ? (
                <>
                    <Helmet
                        titleHelmet={`Nomer Telepon | ${getUser.name || getUser.name} | Ebi Store`}
                        contentHelmet={`halaman rubah nomer telepon profile | ${getUser.name || getUser.email} | Ebi Store`}
                    />
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
                                {getChangeTxt.data.phoneUser}
                            </label>

                            <form onSubmit={handleSubmit}>
                                <input onSubmit={handleSubmit} type="number" className="input-nama" autoFocus name="phoneUser" value={getChangeTxt.data.phoneUser}
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