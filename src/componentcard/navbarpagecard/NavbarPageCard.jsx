import React from 'react'

import '../navbarpagecard/NavbarPageCard.scss'
import { Link } from 'react-router-dom'

const NavbarPageCard = ({ linkPage, titlePageNav }) => {
    return (
        <>
            {/* Navbar */}
            <div className="navbar-pageCard">
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