import Axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Alamat from '../../../componentcard/alamat/Alamat'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageProfil.scss'
import avatar from '../../../img/newprofil.png'
import KategoriProfil from '../../../componentcard/kategoriprofil/KategoriProfil'
import firebase from 'firebase/app';
import Spinner from '../../../componentcard/spinner/Spinner'

const PageProfil = () => {

    const [alamat, setAlamat] = useState([])
    const [getUser, setGetUser] = useState({
        sayHi: '',
        name: '',
        email: '',
        photo: '',
        numberPhone: ''
    })

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

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const sayHi = 'Hi !'
                const nameUser = user.displayName
                const emailUser = user.email
                const photoUser = user.photoURL
                const numberUser = user.phoneNumber
                const nameUserDefault = 'User'

                // Change Data User yg masuk
                setGetUser({
                    sayHi: sayHi,
                    name: nameUser || nameUserDefault,
                    email: emailUser,
                    photo: photoUser || avatar,
                    numberPhone: numberUser
                })
            } else {
                // Data Default Jika User tidak login
                const nameDefault = 'User'
                const emailDefault = 'Kamu belum memiliki Email yang tercantum'
                const photoDefault = avatar
                const numberPhoneDefault = 'Kamu belum memiliki nomer hp yang tercantum'

                // Change Data Untuk data default
                setGetUser({
                    name: nameDefault,
                    email: emailDefault,
                    photo: photoDefault,
                    numberPhone: numberPhoneDefault
                })
            }
        });
    }

    const history = useHistory()

    const handleLogOut = () => {
        setTimeout(() => {
            firebase.auth().signOut().then(function () {
                alert('Berhasil Log Out')
                history.push('/login')
            })
                .catch(function (error) {
                    console.log(error)
                    alert('gagal Log Out' + ' ' + 'Error: 404')
                });
        }, 1000)
    }

    useEffect(() => {
        getAlamat();
        getUserLogin();
    }, [])

    return (
        <>

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
                <div className="box-white">
                    {/* Box orange */}
                    <div className="box-orange">
                        <p className="name-profil">
                            {getUser.sayHi}
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
                        {alamat && alamat.length > 0
                            ? alamat.map(e => {
                                return (
                                    <>
                                        <KategoriProfil
                                            pageKtg={'/pagealamat'}
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
                                    pageKtg={'/pagealamat'}
                                    linkKategori={'link-kategori'}
                                    icon={'fas fa-home'}
                                    title={'Alamat'}
                                    deskripsi={"Kamu belum memiliki alamat yang tercantum"}
                                />
                            )}

                        <KategoriProfil
                            pageKtg={'/namaprofil'}
                            linkKategori={'link-kategori'}
                            icon={'fas fa-user-tie'}
                            title={'Nama'}
                            deskripsi={getUser.name}
                        />
                        <KategoriProfil
                            linkKategori={'link-kategori'}
                            icon={'fas fa-envelope'}
                            title={'Email'}
                            deskripsi={getUser.email}
                        />
                        <KategoriProfil
                            pageKtg={'/nomerprofil'}
                            linkKategori={'link-kategori'}
                            icon={'fas fa-mobile'}
                            title={'No Hp.'}
                            deskripsi={getUser.numberPhone}
                        />
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