import Axios from 'axios'
import { action, createStore } from 'easy-peasy'
import React, { useContext, useEffect, useState } from 'react'
import { Component } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import FormAlamat from '../../../componentcard/formalamat/FormAlamat'
import Helmet from '../../../componentcard/helmet/Helmet'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import Spinner from '../../../componentcard/spinner/Spinner'
import API from '../../../service'
import firebase from 'firebase/app';
import './PageAlamat.scss'
import { GetUserLogin } from '../../../config/context/GetUserLogin'
import { DbFirebaseContext } from '../../../config/context/DbFirebase'

const PageAlamat = () => {

    const [dataUser, setDataUser, addDataFirebase] = useContext(DbFirebaseContext)
    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [alamat, setAlamat] = useState([])
    const [dataAlamat, setDataAlamat] = useState({
        alamat: '',
        kota: '',
        kodePos: '',
        namaPenerima: ''
    })

    const handleChange = (e) => {
        const newDataAlamat = { ...dataAlamat }
        newDataAlamat[e.target.name] = e.target.value
        setDataAlamat(newDataAlamat)
    }

    const handleSubmit = () => {
        const { alamat, kota, kodePos, namaPenerima } = dataAlamat
        const data = {
            alamat: alamat,
            kota: kota,
            kodePos: kodePos,
            namaPenerima: namaPenerima,
            date: new Date().getTime(),
            userId: dataUser.uid
        }
        addDataFirebase(data)
        console.log('hasil:', data)
    }

    const history = useHistory()

    const toProfil = (user) => {
        history.push(`/profil/${user}`)
    }

    const getAPIForLoading = () => {
        API.APISerba5rb()
            .then((result) => {
                setAlamat(result.data)
            })
    }

    const getFirebase = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const nameUser = user.displayName
                const emailUser = user.email

                // setGetUser({
                //     name: nameUser,
                //     email: emailUser
                // })
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getAPIForLoading();
        getFirebase();
    }, [])

    return (
        <>
            {alamat && alamat.length > 0 ? (
                <>
                    <Helmet
                        titleHelmet={`Alamat | ${getUser.name || getUser.email} | Ebi Store`}
                        contentHelmet={`halaman form alamat | ${getUser.name || getUser.email} | Ebi Store`}
                    />
                    <NavbarPageCard
                        backPage={() => toProfil(getUser.name || getUser.email)}
                        position={'absolute'}
                        titlePageNav={'Form Alamat'}
                        transparant={"transparant"}
                        color={"#fff"}
                    />
                    <div className="wrapper-alamat">
                        <div className="box-orange">
                            <FormAlamat
                                title={"Alamat"}
                                valueName={"alamat"}
                                placeholder={"Masukkan Nama Jalan Rumah / Blok / No / RT/RW"}
                                fungsiAutoFocus={'autoFocus'}
                                handle={handleChange}
                            />
                            <FormAlamat
                                title={"Kota atau Kecamatan"}
                                valueName={"kota"}
                                placeholder={"Masukkan Kota / Kecamatan"}
                                handle={handleChange}
                            />
                            <FormAlamat
                                title={"Kode Pos"}
                                valueName={"kodePos"}
                                placeholder={"Masukkan Kode Pos"}
                                handle={handleChange}
                            />
                            <FormAlamat
                                title={"Nama Penerima"}
                                valueName={"namaPenerima"}
                                placeholder={"Masukkan Nama Penerima"}
                                handle={handleChange}
                                submit={handleSubmit}
                            />

                            <Link style={{
                                textDecoration: 'none',
                                overflow: 'hidden'
                            }}
                                onClick={handleSubmit}
                            >
                                <BtnCard
                                    // display={props.displayBtnTransaksis}
                                    heightBtn={'40px'}
                                    widthBtn={'auto'}
                                    btnName={'Simpan Alamat'}
                                    marginBtn={'10px'}
                                    bdrRadius={"100px"}
                                    bgColor={"#ffa835"}
                                    colorP={"#fff"}
                                    fontWeight={"bold"}
                                    bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                                // link={"/pageprofil"}
                                // goTo={() => props.buy(props.data._id)}
                                />
                            </Link>
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


export default withRouter(PageAlamat)