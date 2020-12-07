import React from 'react'
import './Spinner.scss'

const Spinner = () => {
    return (
        <>
            <div className="wrapper-spinner">
                <div className="circle-loader">

                </div>

                <p className="title-loader">
                    Mohon Tunggu Sebentar
                </p>
            </div>
        </>
    )
}

export default Spinner