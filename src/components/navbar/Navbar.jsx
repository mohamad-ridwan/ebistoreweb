import React, { useState, useEffect } from 'react'

import '../navbar/Navbar.scss'
import logMacaroni from '../../img/macaroni.svg'
import avatarNew from '../../img/avatarnew.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // Create Sticky Scroll Bar
    let [hide, setHide] = useState(false)
    // END Create Sticky Scroll Bar

    useEffect(() => {
        let prevScroll = window.pageYOffset
        window.onscroll = () => {
            let currentScroll = window.pageYOffset

            prevScroll > currentScroll ? setHide(false) : setHide(true)

            prevScroll = currentScroll
        }
    }, [])

    return (
        <>
            <div className="navbar" style={{
                transform: hide ? 'translateY(-200px)' : 'translateY(0)',
                transition: '.5s all cubic-bezier(0.64,-0.24, 0.43, 1.24)',
            }}>
                {/* Row1 */}
                <div className="row1-navbar">
                    <a href="#" className="link-brand-navbar">
                        {/* Image Brand */}
                        <img src={logMacaroni} className="img-brand-navbar" alt="" />
                        {/* END Image Brand */}

                        {/* Name Brand */}
                        <div className="nm-brand-navbar">
                            {/* Txt1 */}
                            <p className="txt1-brand-navbar">
                                EBI
                            </p>
                            {/* END Txt1 */}

                            {/* Txt2 */}
                            <p className="txt2-brand-navbar">
                                store
                            </p>
                            {/* END Txt2 */}
                        </div>
                        {/* END Name Brand */}
                    </a>
                </div>
                {/* END Row1 */}

                {/* Row2 */}
                <div className="row2-navbar">
                    {/* Link Img Profile */}
                    <Link to='/' className="circ-img-profile-navbar">
                        <img src={avatarNew} className="img-profile-navbar" alt="" />
                    </Link>
                    {/* END Link Img Profile */}

                    {/* Name Account User */}
                    <p className="name-act-user-navbar">
                        Mohamad
                    </p>
                    {/* END Name Account User */}
                </div>
                {/* END Row2 */}
            </div>
        </>
    )
}

export default Navbar