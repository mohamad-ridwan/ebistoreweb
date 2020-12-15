import React from 'react'
import { NavLink, useHistory, withRouter } from 'react-router-dom'
import './Menu.scss'

const Menu = ({ linkPage, nameMenu, clickToPage, link }) => {

    // const history = useHistory()

    // const goToPage = () => {
    //     history.push(`${link}`)
    // }

    return (
        <>
            <NavLink
                to={link} className="btn-kategori" activeClassName={'active-menu'}>
                {nameMenu}
            </NavLink>
        </>
    )
}

export default withRouter(Menu)