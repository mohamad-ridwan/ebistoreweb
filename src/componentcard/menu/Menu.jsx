import React from 'react'
import { NavLink, useHistory, withRouter } from 'react-router-dom'
import './Menu.scss'

const Menu = ({ linkPage, nameMenu, toPage, link }) => {

    return (
        <>
            <NavLink
                onClick={toPage}
                to={link} className="btn-kategori-menu" activeClassName={'active-menu'}>
                {nameMenu}
            </NavLink>
        </>
    )
}

export default withRouter(Menu)