import React, { useState, useEffect } from 'react'

import '../navbar/Navbar.scss'
import logMacaroni from '../../img/macaroni.svg'
import avatarNew from '../../img/avatarnew.jpg'
import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase/app';

const Navbar = () => {

    // Create Sticky Scroll Bar
    // let [hide, setHide] = useState(false)
    // END Create Sticky Scroll Bar

    // useEffect(() => {
    //     let prevScroll = window.pageYOffset
    //     window.onscroll = () => {
    //         let currentScroll = window.pageYOffset

    //         prevScroll > currentScroll ? setHide(false) : setHide(true)

    //         prevScroll = currentScroll
    //     }
    // }, [])

    const histori = useHistory()

    const pushNotifikasi = () => {
        histori.push({
            pathname: '/pagenotifikasi'
        })
    }

    const pushProfil = () => {
        histori.push({
            pathname: '/pageprofil'
        })
    }

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 130) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    // For Get user login
    const [getUser, setGetUser] = useState({
        name: '',
        photo: ''
    })

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const nameUser = user.displayName
                const photoUser = user.photoURL

                setGetUser({
                    name: nameUser,
                    photo: photoUser
                })
            } else {
                // No user is signed in.
            }
        });
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
                            <Link to='/pageprofil' className="circ-img-profile-navbar">
                                <img src={getUser.photo} className="img-profile-navbar" alt="" />
                            </Link>
                            {/* END Link Img Profile */}

                            {/* Name Account User */}
                            <p className="name-act-user-navbar">
                                {getUser.name}
                            </p>
                            {/* END Name Account User */}
                        </div>
                        {/* END Name Brand */}
                    </div>
                </div>
                {/* END Row1 */}

                {/* Row2 */}
                <div className="row2-navbar">
                    <Link to='/pagekeranjang' className="box-icon iconCart">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <Link className="box-icon"
                        onClick={pushNotifikasi}
                    >
                        <i class="far fa-bell"></i>
                    </Link>
                </div>
                {/* END Row2 */}
            </div>
        </>
    )
}

export default Navbar