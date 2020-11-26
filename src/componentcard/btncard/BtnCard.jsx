import React from 'react'
import { Link } from 'react-router-dom'
import './BtnCard.scss'

const BtnCard = ({
    link,
    btnName,
    heightBtn,
    widthBtn,
    marginBtn,
    paddName,
    positionBtn,
    topBtn,
    leftBtn,
    rightBtn,
    bottomBtn,
    fontWeight
})=>{
    return(
        <>
        <Link to={link} className="btn-alamat" style={{
            height: `${heightBtn}`,
            width : `${widthBtn}`,
            margin: `${marginBtn}`,
            position: `${positionBtn}`,
            top: `${topBtn}`,
            left: `${leftBtn}`,
            right: `${rightBtn}`,
            bottom: `${bottomBtn}`
        }}>
           <p className="paragraph" style={{
               fontWeight: `${fontWeight}`,
               padding: `${paddName}`
           }}>
                {btnName}
           </p>
        </Link>
        </>
    )
}

export default BtnCard