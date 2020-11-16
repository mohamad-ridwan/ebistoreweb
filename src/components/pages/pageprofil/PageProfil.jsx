import React from 'react'
import { Link } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageProfil.scss'

const PageProfil =()=>{
    return(
        <>
        <div className="wrapp-profil">
            <NavbarPageCard
                linkPage={'/'}
                titlePageNav={'Profil Kamu'}
            />

            <div className="box-profil">

            </div>

            {/* box input alamat */}
            <div className="box-input-alamat">
                <p className="deskripsi">
                    Kamu belum mengisi alamat kamu,
                    <br/>
                    Silahkan isi alamat kamu untuk mempermudah belanja kamu
                </p>

                <BtnCard
                    link='/pagealamat'
                    heightBtn={'30px'}
                    widthBtn={'100px'}
                    marginBtn={'20px 0 0 0'}
                    btnName={'Isi Alamat'}
                    paddName={'5px'}
                />
            </div>
            {/* end box input alamat */}
        </div>
        </>
    )
}

export default PageProfil