import React from 'react'
import { Link } from 'react-router-dom'
import './BtnCard.scss'

const BtnCard = ({
    link,
    btnName,
    heightBtn,
    widthBtn,
    marginBtn,
    paddName
})=>{
    return(
        <>
        <Link to={link} className="btn-alamat" style={{
            height: `${heightBtn}`,
            width : `${widthBtn}`,
            margin: `${marginBtn}`,
        }}>
           <p className="paragraph" style={{
               padding: `${paddName}`
           }}>
                {btnName}
           </p>
        </Link>
        </>
    )
}

export default BtnCard