import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonCard.scss'

const ButtonCard = ({
    page,
    height, 
    width, 
    background, 
    jsContent, 
    algItems, 
    bxShdw, 
    brRadius,
    ftSize,
    color,
    fWeight,
    txtBtn}) => {
    return (
        <>
            <Link to={page} className="button-card" style={{
                display: 'flex',
                height: `${height}`,
                width: `${width}`,
                background: `${background}`,
                justifyContent: `${jsContent}`,
                alignItems: `${algItems}`,
                boxShadow: `${bxShdw}`,
                borderRadius: `${brRadius}`,
                textDecoration: 'none',
                // For Font
                fontSize: `${ftSize}`,
                color: `${color}`,
                fontWeight: `${fWeight}`
            }}>{txtBtn}</Link>
        </>
    )
}

export default ButtonCard