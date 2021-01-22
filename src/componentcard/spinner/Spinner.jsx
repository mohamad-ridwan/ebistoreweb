import React from 'react'
import './Spinner.scss'

const Spinner = ({ titleLoad, bgColorLoading, displaySpinner }) => {
    return (
        <>
            <div className="wrapper-spinner"
                style={{
                    display: `${displaySpinner}`,
                    backgroundColor: `${bgColorLoading}`,
                }}
            >
                <div className="circle-loader">

                </div>

                <p className="title-loader">
                    {titleLoad}
                </p>
            </div>
        </>
    )
}

export default Spinner