import React from 'react'

import '../navbottom/NavBottom.scss'
import { Link } from 'react-router-dom'
import homeStore from '../../img/homestore.svg'
import NavbottomCard from '../../componentcard/navbottomcard/NavbottomCard'

const NavBottom = () => {
    return (
        <>
            <div className="navBottom">
                {/* Row */}
                <NavbottomCard linkPage="/" iconLinkNavBtm="fas fa-store" txtLinkNavBtm="Beranda" />
                {/* END Row */}

                {/* Row */}
                <NavbottomCard linkPage="/pagekeranjang" iconLinkNavBtm="fas fa-shopping-cart" txtLinkNavBtm="Keranjang" />
                {/* END Row */}

                {/* Row */}
                <NavbottomCard linkPage="/pagefavorit" iconLinkNavBtm="fas fa-heart" txtLinkNavBtm="Favorit" />
                {/* END Row */}

                {/* Row */}
                <NavbottomCard linkPage="/pagenotifikasi" iconLinkNavBtm="fas fa-bell" txtLinkNavBtm="Notifikasi" />
                {/* END Row */}

                {/* Row */}
                <NavbottomCard linkPage="/pagepesan" iconLinkNavBtm="fas fa-comment-dots" txtLinkNavBtm="Pesan" />
                {/* END Row */}
            </div>
        </>
    )
}

export default NavBottom