import React from 'react'
import { Link } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageAlamat.scss'

const PageAlamat = ()=>{
    return(
        <>
        <div className="wrapper-alamat">
            <NavbarPageCard
                linkPage={'/'}
                titlePageNav={'Form Alamat'}
            />

            <form action="" className="form-alamat">
            <label htmlFor="" className="labelGroup">
                Desa / Kelurahan
            </label>
            <input type="text" className="inputGroup"
                placeholder='Masukkan Nama Desa atau Kelurahan'/>
            <label htmlFor="" className="labelGroup">
                Kecamatan
            </label>
            <input type="text" className="inputGroup"
                placeholder='Masukkan Nama Kecamatan'/>
            <label htmlFor="" className="labelGroup">
                Kota / Kabupaten
            </label>
            <input type="text" className="inputGroup"
                placeholder='Masukkan Nama Kota / Kabupaten'/>
            <label htmlFor="" className="labelGroup">
                Provinsi
            </label>
            <input type="text" className="inputGroup"
                placeholder='Masukkan Nama Provinsi'/>
            <label htmlFor="" className="labelGroup">
                Kode Pos
            </label>
            <input type="text" className="inputGroup"
                placeholder='Masukkan Kode Pos'/>

               <BtnCard
                link={'/'}
                heightBtn={'50px'}
                widthBtn={'auto'}
                btnName={'Save Alamat'}
                marginBtn={'10px 0'}
               />
            </form>
        </div>
        </>
    )
}

export default PageAlamat