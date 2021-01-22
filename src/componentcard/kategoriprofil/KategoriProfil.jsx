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
    namaPenerima,
    onClick,
    nomerHp
}) => {
    return (
        <>
            <Link to={pageKtg} className={linkKategori}
                onClick={onClick}
            >
                <p className="title-kategori-profil">
                    <i className={icon}></i> {title}
                </p>
                <div className="box-deskripsi-ktg">
                    <p className="deskripsi-kategori-profil">
                        {deskripsi}
                        {alamat}
                        {kota}
                        {kodePos}
                        {namaPenerima}
                        {nomerHp}
                    </p>
                    <span class="material-icons next">
                        navigate_next
                    </span>
                </div>
            </Link>
        </>
    )
}

export default KategoriProfil