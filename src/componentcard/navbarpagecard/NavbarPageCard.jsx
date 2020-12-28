import React from 'react'

import '../navbarpagecard/NavbarPageCard.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import API from '../../service'

const NavbarPageCard = ({ linkPage, titlePageNav, transparant, color, position, backPage, displayIcon, heightNav }) => {

    const [dataKeranjang, setDataKeranjang] = useState([])

    const getDataKeranjang = () => {
        API.APIFirebaseGetKeranjang()
            .then((res) => {
                setDataKeranjang(res)
            })
    }

    useEffect(() => {
        getDataKeranjang();
    }, [])

    return (
        <>
            {/* Navbar */}
            <div className="navbar-pageCard" style={{
                height: `${heightNav}`,
                position: `${position}`,
                backgroundColor: `${transparant}`
            }}>
                {/* Row nav */}
                <div className="row-nav-pageCard">
                    {/* Btn Back Page Nav */}
                    <Link to={linkPage} className="btn-back-nav-pageCard">
                        <span class="material-icons" style={{
                            color: `${color}`
                        }}
                            onClick={backPage}
                        >
                            west
                        </span>
                    </Link>
                    {/* END Btn Back Page Nav */}

                    {/* Title page nav */}
                    <a href="#" className="title-page-nav-pageCard" style={{
                        color: `${color}`
                    }}>
                        {titlePageNav}
                    </a>
                    {/* END Title page nav */}

                    <div className="container-box-icon-nav"
                        style={{
                            display: `${displayIcon}`
                        }}
                    >
                        <div className="wrapp-box-icon">
                            <Link to='/keranjang' className="box-icon iconCart">
                                {dataKeranjang && dataKeranjang.length > 0 ? (
                                    <p className="angka-notif">
                                        {dataKeranjang.length}
                                    </p>
                                ) : (
                                        <p className="angka-notif"
                                            style={{
                                                display: 'none'
                                            }}
                                        >

                                        </p>
                                    )}
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* END Row nav */}
            </div>
            {/* END Navbar */}
        </>
    )
}

export default NavbarPageCard