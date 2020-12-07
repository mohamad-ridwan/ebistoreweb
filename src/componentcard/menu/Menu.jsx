import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

const Menu = ({ linkPage, nameMenu }) => {
    return (
        <>
            <NavLink
                to={linkPage} className="btn-kategori" activeClassName={'active-menu'}>
                {nameMenu}
            </NavLink>
        </>
    )
}

export default Menu