import React, { useState, useEffect, useContext } from 'react'

import '../navbar/Navbar.scss'
import logMacaroni from '../../img/macaroni.svg'
import avatarNew from '../../img/newprofil.png'
import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase/app';
import { GetNamaUserContext } from '../../config/context/namauser/GetNamaUser'
import API from '../../service'

const Navbar = () => {

    const [dataNama] = useContext(GetNamaUserContext)
    const [dataKeranjang, setDataKeranjang] = useState([])
    const [navbar, setNavbar] = useState(false);
    const [getUser, setGetUser] = useState({
        name: '',
        photo: '',
        email: ''
    })

    const getDataKeranjang = () => {
        API.APIFirebaseGetKeranjang()
            .then((res) => {
                setDataKeranjang(res)
            })
    }

    const histori = useHistory()

    const pushNotifikasi = () => {
        histori.push({
            pathname: '/notifikasi'
        })
    }

    const pushProfil = (user) => {
        histori.push({
            pathname: `/profil/${user}`
        })
    }

    const changeBackground = () => {
        if (window.scrollY >= 130) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const emailUser = user.email
                const nameUser = user.displayName
                const photoUser = user.photoURL
                const nameDefault = 'User'

                setGetUser({
                    email: emailUser,
                    name: nameUser || emailUser,
                    photo: photoUser || avatarNew
                })
            } else {
                // Data user default
                const nameDefault = 'Profil Saya'
                const photoDefault = avatarNew

                // Change data untuk data default
                setGetUser({
                    name: nameDefault,
                    photo: photoDefault
                })
            }
        });
    }

    useEffect(() => {
        getDataKeranjang();
        getUserLogin();
    }, [])
    // END For get user login

    return (
        <>
            <div className={navbar ? 'navbar active color' : 'navbar'} style={{
                // transform: hide ? 'translateY(-200px)' : 'translateY(0)',
                // transition: '.5s all cubic-bezier(0.64,-0.24, 0.43, 1.24)',
            }}>
                {/* Row1 */}
                <div className="row1-navbar">
                    <div className="link-brand-navbar">
                        {/* Name Brand */}
                        <div className="nm-brand-navbar">
                            {/* Link Img Profile */}
                            <Link className="circ-img-profile-navbar"
                                onClick={() => pushProfil(getUser.name || getUser.email)}
                            >
                                <img src={getUser.photo} className="img-profile-navbar" alt="" />
                            </Link>
                            {/* END Link Img Profile */}

                            {dataNama.data && dataNama.data.length > 0 ? dataNama.data.map(e => {
                                return (
                                    <p className="name-act-user-navbar">
                                        {e.data}
                                    </p>
                                )
                            }) : (
                                    <p className="name-act-user-navbar">
                                        {getUser.name}
                                    </p>
                                )}
                        </div>
                        {/* END Name Brand */}
                    </div>
                </div>
                {/* END Row1 */}

                {/* Row2 */}
                <div className="row2-navbar">
                    <div className="wrapp-box-icon-nav">
                        <Link to='/keranjang/1' className="box-icon iconCart">
                            {dataKeranjang && dataKeranjang.length > 0 ? (
                                <p className="angka-notif-nav">
                                    {dataKeranjang.length}
                                </p>
                            ) : (
                                    <p className="angka-notif-nav"
                                        style={{
                                            display: 'none'
                                        }}
                                    >
                                    </p>
                                )}

                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div>

                    <div className="wrapp-box-icon-nav">
                        <Link className="box-icon"
                            onClick={pushNotifikasi}
                        >
                            {dataKeranjang && dataKeranjang.length > 0 ? (
                                <p className="angka-notif-nav">
                                    {dataKeranjang.length}
                                </p>
                            ) : (
                                    <p className="angka-notif-nav"
                                        style={{
                                            display: 'none'
                                        }}
                                    >
                                    </p>
                                )}
                            <i class="far fa-bell"></i>
                        </Link>
                    </div>
                </div>
                {/* END Row2 */}
            </div>
        </>
    )
}

export default Navbar