import React from 'react'
import { Link } from 'react-router-dom'

import './JudulCard.scss'

const JudulCard = ({ txtJudul, body, page, lihatSemua, totProduk }) => {
    return (
        <>
            <div className="wrapper-judulCard">
                <p className="txt-judul-judulCard">
                    {txtJudul}
                </p>

                <p className="title-tot-produk">
                    {totProduk}
                </p>

                <Link to={page} className="txt-lihat-semua">
                    Lihat Semua
                </Link>
            </div>
        </>
    )
}

export default JudulCard