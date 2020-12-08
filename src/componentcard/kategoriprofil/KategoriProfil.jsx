import React from 'react'
import { Link } from 'react-router-dom'
import './KategoriProfil.scss'

const KategoriProfil = ({
    pageKtg,
    linkKategori,
    icon,
    title,
    deskripsi,
    alamat,
    kota,
    kodePos,
    namaPenerima
}) => {
    return (
        <>
            <Link to={pageKtg} className={linkKategori}>
                <p className="title-kategori-profil">
                    <i className={icon}></i> {title}
                </p>
                <p className="deskripsi-kategori-profil">
                    {deskripsi}
                    {alamat}
                    {kota}
                    {kodePos}
                    {namaPenerima}
                </p>
                {/* <i className="fas fa-angle-right next"></i> */}
            </Link>
        </>
    )
}

export default KategoriProfil