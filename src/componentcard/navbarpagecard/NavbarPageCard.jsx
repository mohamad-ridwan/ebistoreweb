import React from 'react'

import '../navbarpagecard/NavbarPageCard.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const NavbarPageCard = ({ linkPage, titlePageNav }) => {

    const [hide, setHide] = useState(false)

    useEffect(()=>{
        let prevScroll = window.pageYOffset
        window.onscroll = ()=>{
            let currentScroll = window.pageYOffset

            prevScroll > currentScroll ? setHide(!true) : setHide (!false)

            prevScroll = currentScroll
        }
    }, [])

    return (
        <>
            {/* Navbar */}
            <div className="navbar-pageCard" style={{
                transform: hide ? 'translateY(-200px)' : 'translateY(0)',
                transition: '.5s all cubic-bezier(0.64,-0.24, 0.43, 1.24)',
            }}>
                {/* Row nav */}
                <div className="row-nav-pageCard">
                    {/* Btn Back Page Nav */}
                    <Link to={linkPage} className="btn-back-nav-pageCard">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    {/* END Btn Back Page Nav */}

                    {/* Title page nav */}
                    <p className="title-page-nav-pageCard">
                        {titlePageNav}
                    </p>
                    {/* END Title page nav */}
                </div>
                {/* END Row nav */}
            </div>
            {/* END Navbar */}
        </>
    )
}

export default NavbarPageCard