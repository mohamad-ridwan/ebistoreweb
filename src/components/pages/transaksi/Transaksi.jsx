import React from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './Transaksi.scss'
import img from '../../../img/satu.jpeg'
import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import Alamat from '../../../componentcard/alamat/Alamat'
import indo from '../../../img/indomaret.svg'
import { Link } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import { Component } from 'react'
import {withRouter} from 'react-router-dom'
import BoxWhite from '../../../componentcard/boxwhite/BoxWhite'

class Transaksi extends Component {

    state = {
        alamat : [],
        // Jika ingin melakukan mapping data
        // maka di perlukan array custom untuk menSupport mapping
        produk : {
            _id: '',
            label : '',
            name: '',
            price: '',
        },
        totalBeli : 1
    }

    handlePlus = ()=>{
        // update value state total beli ke value yg di tambahkan
        this.setState({
            // call propertynya
            totalBeli : this.state.totalBeli + 1
        })
    }

    handleMinus = ()=>{
        // update value state total beli ke value yg di kurangkan
        // handle btn minus ketika value kebih kecil dari 0
        if(this.state.totalBeli > 1){
            // Jalankan value lebih besar dr 0
            this.setState({
                totalBeli : this.state.totalBeli - 1
            })
        }
    }

    // Data Produk
    produkAPI = ()=>{
        let id = this.props.match.params.id
        Axios.get(`http://localhost:62542/v2/makaroni/getlimaribu/${id}`)
        .then(result=>{
            let post = result.data
            this.setState({
                produk : {
                    _id : post.data._id,
                    label: post.data.label,
                    name: post.data.name,
                    price: post.data.price
                }
            })
        })
        .catch(err=>{
            console.log('failed in get produk', err)
        })
    }
    // end data produk

    // Alamat
    alamatAPI = ()=>{
        Axios.get('http://localhost:62542/v5/dataalamat/getalamat')
        .then(result=>{
            this.setState({
                alamat: result.data.dataAlamat
            })
        })
        .catch(err=>{
            console.log('failed', err)
        })
    }
    // END Alamat

    // hitung total
    hitungTotal = ()=>{
        const hargaMakaroni = parseInt(2000)
        const hargaKurir = parseInt(5000)

        const total = hargaKurir + hargaMakaroni
        console.log('hasil :', total.toString());
    }
    // end hitung total

    componentDidMount(){
        this.alamatAPI();
        this.produkAPI();
        this.hitungTotal.toString()
    }
    
    render(){
    return(
        <>
        <NavbarPageCard
            linkPage={'/detailproduk'}
            titlePageNav={'Transaksi'}
        />
        <div className="wrapp-transaksi">
            {/* detail produk pesanan */}

            <BoxWhite
                img={img}
                label={this.state.produk.label}
                name={this.state.produk.name}
                price={this.state.produk.price}
                display={"flex"}
                titleTotalBeli={"Total yang di beli"}
                heightImg={"110px"}
                widthImg={"110px"}
                margBox={"0px 10px 0 10px"}
                marginName={"10px 0 0 0"}
                paddBox={"10px 10px 40px 10px"}
                displayBeli={"none"}
                positionBox={"relative"}
                displayBtnDelete={"none"}
                handleMinus={this.handleMinus}
                handlePlus={this.handlePlus}
                inputAngka={this.state.totalBeli}
            />
            {/* end detail produk pesanan */}

            {/* deskripsi alamat */}
            <div className="deskripsi-alamat">
                <p className="title-alamat">
                </p>

                {this.state.alamat && this.state.alamat.length > 0
                ? this.state.alamat.map(e=>{
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
                        • Indomaret
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

            {/* bayar */}
            <div className="bayar">
                <div className="column-btn-bayar">
                    <p className="total-harga">
                        Total Bayar
                        <br/>
                        {this.hitungTotal}
                    </p>

                    <BtnCard
                        heightBtn={"35px"}
                        widthBtn={"80px"}
                        btnName={"Bayar"}
                        fontWeight={"bold"}
                    />
                </div>
                
                <p className="deskripsi-total-harga">
                    {this.state.produk.name} = Rp {this.state.produk.price}
                    <br/>
                    Kurir = Rp 2.000
                    <br/>
                    Total = Rp 7.000
                </p>
            </div>
            {/* end bayar */}
        </div>
        </>
    )
}
}
export default withRouter(Transaksi)