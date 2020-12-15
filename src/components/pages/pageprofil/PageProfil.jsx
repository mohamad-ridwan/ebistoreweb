import Axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Alamat from '../../../componentcard/alamat/Alamat'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageProfil.scss'
import newProfil from '../../../img/newprofil.png'
import KategoriProfil from '../../../componentcard/kategoriprofil/KategoriProfil'
import firebase from 'firebase/app';
import Spinner from '../../../componentcard/spinner/Spinner'
import { useContext } from 'react'
import { GetUserLogin } from '../../../config/context/GetUserLogin.jsx'
import { ChangeNumberPhone } from '../../../config/context/ChangeNumberPhone'
import { GetNumberPhone } from '../../../config/context/GetNumberPhone'
import Helmet from '../../../componentcard/helmet/Helmet'

const PageProfil = () => {

    const [getChangeTxt, setGetChangeTxt] = useContext(ChangeNumberPhone)
    const [getDataHp, setGetDataHp, handleUpdate] = useContext(GetNumberPhone)
    const [alamat, setAlamat] = useState([])
    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [view, setView] = useState(false)

    const getAlamat = () => {
        Axios.get('http://localhost:6235/v5/dataalamat/getalamat')
            .then(result => {
                const response = result.data

                setAlamat(response.dataAlamat)
            })
            .catch(err => {
                console.log('error', err)
            })
    }

    const handleRemove = (data) => {
        Axios.delete(`http://localhost:62542/v5/dataalamat/postalamat/${data}`)
            .then(result => {
                const res = result.data
                setAlamat(res)

                getAlamat()
                alert('Data Berhasil Di Delete!')
            })
            .catch(err => {
                console.log('error', err)
            })
    }


    const history = useHistory()

    const handleLogOut = () => {
        const alert = window.confirm('Log Out?')
        if (alert === true) {
            firebase.auth().signOut().then(function () {
                // alert('Berhasil Log Out')
                history.push('/login')
            })
                .catch(function (error) {
                    console.log(error)
                    // alert('gagal Log Out' + ' ' + 'Error: 404', error)
                });
        }
    }

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const emailUser = user.email
                const nameDefault = 'User'
                const nameUser = user.displayName
                const photoUser = user.photoURL
                const sayHi = 'Hi !'

                setGetUser({
                    email: emailUser,
                    hi: sayHi,
                    name: nameUser || emailUser,
                    photo: photoUser || newProfil,
                })

            } else {
                history.push('/login')
                const photoDefault = newProfil
                const nameDefault = 'User'
                const emailDefault = 'Kamu belum memiliki Email yang tercantum'
                setGetUser({
                    photo: photoDefault,
                    name: nameDefault,
                    email: emailDefault,
                })
            }
        })
    }

    useEffect(() => {
        getUserLogin()
        getAlamat();
    }, [])

    return (
        <>
            <Helmet
                titleHelmet={'Profil | Ebi Store'}
                contentHelmet={'halaman profil | Ebi Strore'}
            />
            <div className="wrapp-profil">
                <NavbarPageCard
                    linkPage={'/'}
                    position={'absolute'}
                    titlePageNav={'Profil Kamu'}
                    transparant={"transparant"}
                    color={"#fff"}
                />
                {/* Img Modals */}
                <div className="box-img-modal"
                    style={{
                        display: view ? 'flex' : 'none'
                    }}
                    onClick={() => {
                        setView(!view)
                    }}
                >
                    <div className="box-circle-img">
                        <i className="fas fa-camera"
                            onClick={() => {
                                alert('oke')
                            }}
                        ></i>
                        <img src={getUser.photo} alt="" className="img-modal" />
                    </div>
                </div>
                {/* END Img Modals */}
                <div className="box-white-profile">
                    {/* Box orange */}
                    <div className="box-orange">
                        <p className="name-profil">
                            {getUser.hi}
                            <br />
                            {getUser.name}
                        </p>

                        <img src={getUser.photo} alt="" className="img-profil"
                            onClick={() => {
                                setView(!view)
                            }}
                        />
                    </div>
                    {/* end box orange */}

                    <div className="box-kategori">
                        <KategoriProfil
                            pageKtg={'/profil/nama-profil'}
                            linkKategori={'link-kategori'}
                            icon={'fas fa-user-tie'}
                            title={'Nama'}
                            deskripsi={getUser.name}
                        />

                        <KategoriProfil
                            pageKtg={'/profil/email'}
                            linkKategori={'link-kategori'}
                            icon={'fas fa-envelope'}
                            title={'Email'}
                            deskripsi={getUser.email}
                        />

                        {/* {getDataHp && (
                            <KategoriProfil
                                // onClick={() => handleUpdate(e.phoneUser)}
                                // key={e._id}
                                pageKtg={'/nomerprofil'}
                                linkKategori={'link-kategori'}
                                icon={'fas fa-mobile'}
                                title={'No Hp.'}
                                deskripsi={getDataHp.data.phoneUser || 'Kamu belum memiliki nomer hp yang tercantum'}
                            />
                        )} */}

                        {getDataHp && getDataHp.length > 0
                            ? getDataHp.map(e => {
                                return (
                                    <KategoriProfil
                                        onClick={() => handleUpdate(e._id)}
                                        key={e._id}
                                        pageKtg={'/profil/nomer-profil'}
                                        linkKategori={'link-kategori'}
                                        icon={'fas fa-mobile'}
                                        title={'No Hp.'}
                                        deskripsi={e.phoneUser || 'Kamu belum memiliki nomer hp yang tercantum'}
                                    />
                                )
                            }) : (
                                <KategoriProfil
                                    onClick={() => handleUpdate()}
                                    pageKtg={'/profil/nomer-profil'}
                                    linkKategori={'link-kategori'}
                                    icon={'fas fa-mobile'}
                                    title={'No Hp.'}
                                    deskripsi={'Kamu belum memiliki nomer hp yang tercantum'}
                                />
                            )}

                        {alamat && alamat.length > 0
                            ? alamat.map(e => {
                                return (
                                    <>
                                        <KategoriProfil
                                            pageKtg={'/profil/alamat'}
                                            linkKategori={'link-kategori'}
                                            icon={'fas fa-home'}
                                            title={'Alamat'}
                                            alamat={e.alamat}
                                            kota={e.kota}
                                            kodePos={e.kodePos}
                                            namaPenerima={e.namaPenerima}
                                        />
                                    </>
                                )
                            }) : (
                                <KategoriProfil
                                    pageKtg={'/profil/alamat'}
                                    linkKategori={'link-kategori'}
                                    icon={'fas fa-home'}
                                    title={'Alamat'}
                                    deskripsi={"Kamu belum memiliki alamat yang tercantum"}
                                />
                            )}

                    </div>
                </div>

                <BtnCard
                    heightBtn={'45px'}
                    widthBtn={'auto'}
                    btnName={'Log Out'}
                    marginBtn={'10px 20px 20px 20px'}
                    bdrRadius={"100px"}
                    bgColor={"#ffa835"}
                    colorP={"#fff6eb"}
                    fontWeight={"bold"}
                    bxShadow={"0px 5px 15px -5px #ffa835"}
                    goTo={handleLogOut}
                />


            </div>
        </>
    )
}

export default PageProfil