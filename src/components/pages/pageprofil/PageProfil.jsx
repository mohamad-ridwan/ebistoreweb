import Axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageProfil.scss'

const PageProfil =()=>{

    const [dataAlamat, setDataAlamat] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3004/alamat')
        .then(result=>{
            const resAPI = result.data
            
            setDataAlamat(resAPI)
        })
        .catch(err=>{
            console.log('error:', err)
        })
    }, [])

    return(
        <>
        <div className="wrapp-profil">
            <NavbarPageCard
                linkPage={'/'}
                titlePageNav={'Profil Kamu'}
            />

            <div className="box-profil">

            </div>

            {/* box alamat */}
            <div className="box-alamat">
                <p className="title-alamat">
                    Alamat Kamu :
                </p>

                {dataAlamat && dataAlamat.length > 0
                ? dataAlamat.map(e=>{
                    return(
                        <p className="txt-alamat"
                            key={e.id}
                            >
                            {e.jalan}, {e.desa},
                            <br/>
                            {e.kecamatan}, {e.kota},
                            <br/>
                            {e.provinsi}, {e.kodePos}
                        </p>
                    )
                }): (
                    <>
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
                </>
                )}
            </div>
            {/* end box alamat */}
        </div>
        </>
    )
}

export default PageProfil