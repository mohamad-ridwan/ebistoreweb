import React from 'react'
import './PopUp.scss'

const PopUp = ({ txtPopUp, displayPopUp, transformPopUp, bgColorPopUp }) => {
    return (
        <>
            <div className="wrapp-popUp"
                style={{
                    display: `${displayPopUp}`,
                    transform: `${transformPopUp}`
                }}
            >
                <div className="box-txt-popUp"
                    style={{
                        backgroundColor: `${bgColorPopUp}`
                    }}
                >
                    <p className="txt-popUp">
                        {txtPopUp}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PopUp