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

const NomerProfil = () => {

    const [getDataHp, setGetDataHp, handleUpdate, update, setUpdate] = useContext(GetNumberPhone)
    const [getChangeTxt, setGetChangeTxt] = useContext(ChangeNumberPhone)

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

    return (
        <>
            <Helmet
                titleHelmet={'Nomer Telepon | Ebi Store'}
                contentHelmet={'halaman rubah nomer telepon profile | Ebi Store'}
            />
            <NavbarPageCard
                linkPage={'/profil'}
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
    )
}

export default NomerProfil