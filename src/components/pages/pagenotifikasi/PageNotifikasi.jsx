import React, { useEffect, useState } from 'react'

import '../pagenotifikasi/PageNotifikasi.scss'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import imgInfo from '../../../img/sleeping.svg'
import Axios from 'axios'

const PageNotifikasi = () => {

    return (
        <>
            {/* Wrapper */}
            <div className="wrapper-pageNotifikasi">
                {/* Navbar */}
                <NavbarPageCard linkPage="/" titlePageNav="Notifikasi" />
                {/* END Navbar */}

                {/* Container Body Page */}
                <div className="cont-body-pageNotifikasi">
                    {/* Circle Info */}
                    <div className="circ-info-pageNotifikasi">
                        {/* Text Z Animation */}
                        <p className="txt1-pageNotifikasi" id="txtA">z</p>
                        <p className="txt2-pageNotifikasi" id="txtA">z</p>
                        <p className="txt3-pageNotifikasi" id="txtA">z</p>
                        {/* END Text Z Animation */}

                        {/* Img */}
                        <img src={imgInfo} alt="" className="imgInfo-pageNotifikasi" />
                        {/* END Img */}
                    </div>
                    {/* END Circle Info */}

                    {/* Container Text Info */}
                    <div className="cont-txt-info-pageNotifikasi">
                        <p className="txtInfo-pageNotifikasi">
                            Cari belanjaan gih, supaya notifikasimu rame
                        </p>
                    </div>
                    {/* END Container Text Info */}
                </div>
                {/* END Container Body Page */}
            </div>
            {/* END Wrapper */}

        </>
    )
}

export default PageNotifikasi