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
    margin,
    padding,
    ftSize,
    color,
    fWeight,
    txtBtn,
    positionBtn
}) => {
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
                margin: `${margin}`,
                padding: `${padding}`,
                // For Font
                fontSize: `${ftSize}`,
                color: `${color}`,
                fontWeight: `${fWeight}`,
                textDecoration: 'none',
                position: `${positionBtn}`
            }}>{txtBtn}</Link>
        </>
    )
}

export default ButtonCard