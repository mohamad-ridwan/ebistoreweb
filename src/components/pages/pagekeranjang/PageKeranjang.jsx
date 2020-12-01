import React from 'react'

import '../pagekeranjang/PageKeranjang.scss'
import imgCircInfo from '../../../img/picnic.svg'
import { Link } from 'react-router-dom'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import KeranjangCard from '../../../componentcard/keranjangcard/KeranjangCard'

const PageKeranjang = () => {
    return (
        <>
            {/* Navbar */}
            <NavbarPageCard linkPage="/" titlePageNav="Keranjang" />
            {/* END Navbar */}
            <div className="wrapper-pageKeranjang">
            
                <KeranjangCard/>
                <KeranjangCard/>
                <KeranjangCard/>

                {/* Container Body */}
                {/* <div className="cont-body-pageKeranjang"> */}
                    {/* Icon Exclamation */}
                    {/* <i className="fas fa-exclamation" id="icon-exc-pageKeranjang"></i> */}
                    {/* END Icon Exclamation */}

                    {/* Icon Circle1 */}
                    {/* <i className="fas fa-circle" id="icon-circ1-pageKeranjang"></i> */}
                    {/* END Icon Circle1 */}
                    {/* Icon Circle2 */}
                    {/* <i className="fas fa-circle" id="icon-circ2-pageKeranjang"></i> */}
                    {/* END Icon Circle2 */}
                    {/* Icon Circle3 */}
                    {/* <i className="fas fa-circle" id="icon-circ3-pageKeranjang"></i> */}
                    {/* END Icon Circle3 */}

                    {/* Circle Info */}
                    {/* <div className="circ-info-pageKeranjang"> */}
                        {/* TXT Circle Info */}
                        {/* <p className="txt1-circ-inf-pageKeranjang">
                            Tidak ada makaroni yang kamu masukkan ke dalam keranjang
                        </p> */}
                        {/* END TXT Circle Info */}

                        {/* Img Circle Info */}
                        {/* <img src={imgCircInfo} alt="" className="img-circ-info-pageKeranjang" /> */}
                        {/* END Img Circle Info */}
                    {/* </div> */}
                    {/* END Circle Info */}
                {/* </div> */}
                {/* END Container Body */}
            </div>
        </>
    )
}

export default PageKeranjang