import React from 'react'

import './JudulCard.scss'

const JudulCard = ({ txtJudul, body }) => {
    return (
        <>
            <div className="wrapper-judulCard">
                <p className="txt-judul-judulCard">
                    {txtJudul}
                </p>
            </div>
        </>
    )
}

export default JudulCard