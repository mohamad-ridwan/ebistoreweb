import React from 'react'

import '../navbottomcard/NavbottomCard.scss'
import { NavLink } from 'react-router-dom'

const NavbottomCard = ({ linkPage, homeStore, classImgHome, iconLinkNavBtm, txtLinkNavBtm }) => {
    return (
        <>
            {/* Row */}
            <div className="row-navBottom noGroup">
                <NavLink to={linkPage} className="navMenu" id="btnGroup" as="div" activeClassName="navMenuActive">
                    <img src={homeStore} className={classImgHome} alt="" />
                    <i className={iconLinkNavBtm} id="iconGroup"></i>
                    <p className="txt-shop-navBottom" id="txtGroup">
                        {txtLinkNavBtm}
                    </p>
                </NavLink>
            </div>
            {/* END Row */}
        </>
    )
}

export default NavbottomCard