import React from 'react'

import '../pagefavorit/PageFavorit.scss'
import imgCircInfo from '../../../img/heart.svg'
import { Link } from 'react-router-dom'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'

const PageFavorit = () => {
    return (
        <>
            {/* Wrapper */}
            <div className="wrapper-pageFavorit">
                {/* Navbar */}
                <NavbarPageCard linkPage="/" titlePageNav="Favorit" />
                {/* END Navbar */}

                {/* Container Body PageFavorit */}
                <div className="cont-body-pageFavorit">
                    {/* Circle Info */}
                    <div className="circ-info-pageFavorit">
                        {/* TXT Circle Info */}
                        <p className="txt1-circ-inf-pageFavorit">
                            Tidak ada makaroni yang kamu favoritkan!
                        </p>
                        {/* END TXT Circle Info */}

                        {/* Img Circle Info */}
                        <img src={imgCircInfo} alt="" className="img-circ-info-pageFavorit" />
                        {/* END Img Circle Info */}
                    </div>
                    {/* END Circle Info */}
                </div>
                {/* END Container Body PageFavorit */}
            </div>
            {/* END Wrapper */}
        </>
    )
}

export default PageFavorit