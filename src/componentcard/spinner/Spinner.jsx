import React from 'react'
import './Spinner.scss'

const Spinner = ({ titleLoad, bgColorLoading }) => {
    return (
        <>
            <div className="wrapper-spinner"
                style={{
                    backgroundColor: `${bgColorLoading}`
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