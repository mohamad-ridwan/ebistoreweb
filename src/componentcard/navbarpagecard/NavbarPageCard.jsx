import React from 'react'

import '../navbarpagecard/NavbarPageCard.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const NavbarPageCard = ({ linkPage, titlePageNav }) => {

    // const [hide, setHide] = useState(false)

    // useEffect(()=>{
    //     let prevScroll = window.pageYOffset
    //     window.onscroll = ()=>{
    //         let currentScroll = window.pageYOffset

    //         prevScroll > currentScroll ? setHide(!true) : setHide (!false)

    //         prevScroll = currentScroll
    //     }
    // }, [])

    return (
        <>
            {/* Navbar */}
            <div className="navbar-pageCard">
                {/* Row nav */}
                <div className="row-nav-pageCard">
                    {/* Btn Back Page Nav */}
                    <Link to={linkPage} className="btn-back-nav-pageCard">
                        <span class="material-icons">
                        west
                        </span>
                    </Link>
                    {/* END Btn Back Page Nav */}

                    {/* Title page nav */}
                    <a href="#" className="title-page-nav-pageCard">
                        {titlePageNav}
                    </a>
                    {/* END Title page nav */}
                </div>
                {/* END Row nav */}
            </div>
            {/* END Navbar */}
        </>
    )
}

export default NavbarPageCard