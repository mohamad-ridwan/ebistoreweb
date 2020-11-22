import React from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './Transaksi.scss'
import img from '../../../img/satu.jpeg'
import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import Alamat from '../../../componentcard/alamat/Alamat'
import indo from '../../../img/indomaret.svg'

const Transaksi = ()=>{

    let [alamat, setAlamat] = useState([])

    const getAlamat = ()=>{
        Axios.get('http://localhost:62542/v5/dataalamat/getalamat')
        .then(result =>{
            const resAlamat = result.data

            setAlamat(resAlamat.dataAlamat)
        })
        .catch(err=>{
            console.log('failed', err)
        })
    }

    useEffect(()=>{
        getAlamat()
    })

    return(
        <>
        <NavbarPageCard
            linkPage={'/detailproduk'}
            titlePageNav={'Transaksi'}
        />
        <div className="wrapp-transaksi">
            {/* detail produk pesanan */}
            <div className="container-detailProduk">
                <img src={img} alt="" className="img-produk"/>

                <div className="detail-nameProduk">
                    <p className="label-produk margGroup">
                        Beli 2 Gratis 2
                    </p>
                    <p className="name-produk margGroup">
                        Makaroni Jagung Bakar
                    </p>
                    <p className="price-produk margGroup">
                        Rp. 5.000
                    </p>

                    {/* box total beli */}
                    <div className="box-total-beli">
                        <p className="total-dibeli">
                            Total yang di beli :
                        </p>

                        <div className="input-total">
                            <button className="btn-mines btnGroup">
                                <i className="fas fa-minus" id="btnGroup"></i>
                            </button>
                            <input type="number" className="input-angka" placeholder="1"/>
                            <button className="btn-plus btnGroup">
                                <i className="fas fa-plus" id="btnGroup"></i>
                            </button>
                        </div>
                    </div>
                    {/* end box total beli */}
                </div>
            </div>
            {/* end detail produk pesanan */}

            {/* deskripsi alamat */}
            <div className="deskripsi-alamat">
                <p className="title-alamat">
                    Alamat
                </p>
                {alamat && alamat.length > 0
                ? alamat.map(e=>{
                    return(
                        <>
                            <Alamat
                                data={e}
                            />
                        </>
                    )
                }) : (
                    <div className="oke"></div>
                )}
                
            </div>
            {/* end deskripsi alamat */}

            {/* pembayaran */}
            <div className="pembayaran">
                <p className="title-pembayaran">
                    Pembayaran
                </p>

                <div className="card-pembayaran">
                    <div className="container-logo-pembayaran">
                        <img src={indo} alt="" className="logo-pembayaran"/>
                        <p className="name-logo">
                         - Indomaret
                        </p>
                    </div>
                    <p className="kurir-pengiriman">
                        • Kurir - JNE
                        <br/>
                        Durasi Pengiriman
                        <br/>
                        1 - 3 Hari
                    </p>
                    <button className="pilih-kurir">
                        Pilih Kurir
                        <i className="fas fa-angle-down"></i>
                    </button>
                </div>
            </div>
            {/* end pembayaran */}
        </div>
        </>
    )
}

export default Transaksi