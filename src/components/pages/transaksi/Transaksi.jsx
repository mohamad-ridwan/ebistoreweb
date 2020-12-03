import React from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './Transaksi.scss'
import img from '../../../img/enambelas.jpg'
import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import Alamat from '../../../componentcard/alamat/Alamat'
import indo from '../../../img/indomaret.svg'
import { Link } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BoxWhite from '../../../componentcard/boxwhite/BoxWhite'
import DetailCard from '../../../componentcard/detailcard/DetailCard'

class Transaksi extends Component {

    state = {
        alamat: [],
        // Jika ingin melakukan mapping data
        // maka di perlukan array custom untuk menSupport mapping
        produk: {
            _id: '',
            label: '',
            name: '',
            price: '',
            image: ''
        },
        totalBeli: 1
    }

    handlePlus = () => {
        // update value state total beli ke value yg di tambahkan
        this.setState({
            // call propertynya
            totalBeli: this.state.totalBeli + 1
        })
    }

    handleMinus = () => {
        // update value state total beli ke value yg di kurangkan
        // handle btn minus ketika value kebih kecil dari 0
        if (this.state.totalBeli > 1) {
            // Jalankan value lebih besar dr 0
            this.setState({
                totalBeli: this.state.totalBeli - 1
            })
        }
    }

    // Data Produk
    produkAPI = () => {
        let id = this.props.match.params.id
        Axios.get(`http://localhost:62542/v8/makaroni/getall/${id}`)
            .then(result => {
                let post = result.data
                console.log(result.data)
                this.setState({
                    produk: {
                        _id: post.data._id,
                        label: post.data.label,
                        name: post.data.name,
                        price: post.data.price,
                        image: post.data.image
                    }
                })
            })
            .catch(err => {
                console.log('failed in get produk', err)
            })
    }
    // end data produk

    // Alamat
    alamatAPI = () => {
        Axios.get('http://localhost:62542/v5/dataalamat/getalamat')
            .then(result => {
                this.setState({
                    alamat: result.data.dataAlamat
                })
            })
            .catch(err => {
                console.log('failed', err)
            })
    }
    // END Alamat

    // hitung total
    hitungTotal = () => {
        const hargaMakaroni = parseInt(2000)
        const hargaKurir = parseInt(5000)

        const total = hargaKurir + hargaMakaroni
        console.log('hasil :', total.toString());
    }
    // end hitung total

    componentDidMount() {
        this.alamatAPI();
        this.produkAPI();
        this.hitungTotal.toString()
    }

    render() {
        return (
            <>
                <div className="wrapp-transaksi">
                    <NavbarPageCard
                        linkPage={'/detailproduk'}
                        titlePageNav={'Transaksi'}
                    />
                    {/* detail produk pesanan */}

                    <DetailCard
                        name={"Makaroni Original"}
                        price={"5.000"}
                        displayStock={"none"}
                        deskripsi={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores id eveniet commodi, quas aspernatur facere necessitatibus dolor soluta provident."}
                        img={img}
                        displayCart={"none"}
                        displayBtn={"none"}
                        minus={this.handleMinus}
                        plus={this.handlePlus}
                        valueInput={this.state.totalBeli}
                    />
                </div>
            </>
        )
    }
}
export default withRouter(Transaksi)