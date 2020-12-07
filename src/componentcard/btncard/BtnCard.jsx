import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../spinner/Spinner'
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
    fontWeight,
    bdrRadius,
    bgColor,
    display,
    goTo,
    loading,
    colorP,
    bxShadow
}) => {

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <Link to={link} className="btn-alamat" style={{
                display: `${display}`,
                height: `${heightBtn}`,
                width: `${widthBtn}`,
                margin: `${marginBtn}`,
                position: `${positionBtn}`,
                top: `${topBtn}`,
                left: `${leftBtn}`,
                right: `${rightBtn}`,
                bottom: `${bottomBtn}`,
                borderRadius: `${bdrRadius}`,
                backgroundColor: `${bgColor}`,
                boxShadow: `${bxShadow}`
            }}
                onClick={goTo}
            >
                <p className="paragraph" style={{
                    color: `${colorP}`,
                    fontWeight: `${fontWeight}`,
                    padding: `${paddName}`,
                }}>
                    {btnName}
                </p>
            </Link>
        </>
    )
}

export default BtnCard