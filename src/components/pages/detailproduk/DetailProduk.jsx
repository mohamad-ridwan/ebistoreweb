import React, { useContext, useEffect } from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './DetailProduk.scss'
import { Link, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter } from 'react-router-dom'
import { Component } from 'react'
import DetailCard from '../../../componentcard/detailcard/DetailCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import API from '../../../service'
import Spinner from '../../../componentcard/spinner/Spinner'
import img from '../../../img/enambelas.jpg'
import { cloudFirestore } from '../../../config/firebase'
import { PushToCartContext } from '../../../config/context/PushToCart'
import { resolve } from 'styled-jsx/css'

class DetailProduk extends Component {

    static contextType = PushToCartContext

    state = {
        data: {},
        dataKeranjang: [],
        id: '',
        postKeranjang: {
            id: '',
            label: '',
            name: '',
            price: ''
        },
        kondisi: false
    }

    // to transaksion
    handleTransaksi = (id) => {
        this.props.history.push(`/detail-produk/transaksi/${id}`)
    }
    // end to transaksion

    getDataKeranjang = () => {
        const promise = new Promise((resolve, reject) => {
            cloudFirestore.collection('keranjang/')
                .get()
                .then((querySnapshot) => {
                    const data = []
                    resolve(data)
                    this.setState({ dataKeranjang: data })
                    querySnapshot.forEach((doc) => {
                        if (doc.exists) {
                            Object.keys(doc.data()).map(key => {
                                data.push({
                                    id: doc.id,
                                    data: doc.data()
                                })
                            })
                        }
                    })
                })
        })
        return promise
    }

    pushToCart = (id) => {
        const alertConfirm = window.confirm('Tambahkan Ke Keranjang?')
        if (alertConfirm) {
            const dataKeranjang = this.state.dataKeranjang
            const check = dataKeranjang.every(e => {
                return e.id !== id
            })
            if (check) {
                const data = this.state.data
                const id = this.props.match.params.id
                API.APIFirebasePushKeranjang(data, id)
                    .then((res) => {
                        alert('Berhasil di tambahkan ke keranjang')
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                alert('Makaroni Sudah di tambahkan ke keranjang')
            }
        }
    }

    getDetailProduct = () => {
        const id = this.props.match.params.id
        const APISemuaHarga = () => {
            API.APIFirebaseDetailProduct(id)
                .then((res) => {
                    this.setState({
                        id: id,
                        data: res
                    })
                })
                .catch(err => {
                    console.log('document semua harga not found', err)
                })

        }
        const APILimaRibu = () => {
            API.APIFirebaseDPLimaRibu(id)
                .then((res) => {
                    this.setState({
                        id: id,
                        data: res
                    })
                })
                .catch(err => {
                    console.log('document lima ribu not found', err)
                })
        }
        const APISepuluhRibu = () => {
            API.APIFirebaseDPSepuluhRibu(id)
                .then((res) => {
                    this.setState({
                        id: id,
                        data: res
                    })
                })
        }
        const APILimaBelasRibu = () => {
            API.APIFirebaseDPLimaBelasRibu(id)
                .then((res) => {
                    this.setState({
                        id: id,
                        data: res
                    })
                })
        }

        const AllAPI = {
            APISemuaHarga,
            APILimaRibu,
            APISepuluhRibu,
            APILimaBelasRibu
        }

        if (AllAPI.APISemuaHarga) {
            AllAPI.APISemuaHarga()
        }
        if (AllAPI.APILimaRibu) {
            AllAPI.APILimaRibu()
        }
        if (AllAPI.APISepuluhRibu) {
            AllAPI.APISepuluhRibu()
        }
        if (AllAPI.APILimaBelasRibu) {
            AllAPI.APILimaBelasRibu()
        }
    }

    componentDidMount() {
        this.getDataKeranjang();
        this.getDetailProduct();
    }

    render() {
        const { cart, addToCart } = this.context

        return (
            <>
                {this.state.data && this.state.data.name ? (
                    <>
                        <Helmet
                            titleHelmet={`Detail Produk | ${this.state.data.name} | Ebi Store`}
                            contentHelmet={`halaman detail produk | ${this.state.data.name} | Ebi Store`}
                        />

                        <div className="wrapp-detail-produk">
                            <NavbarPageCard
                                linkPage={'/'}
                                titlePageNav={'Detail Produk'}
                                displayIcon={'flex'}
                                heightNav={'55px'}
                            />

                            <DetailCard
                                name={this.state.data.name}
                                price={this.state.data.price}
                                stock={this.state.data.stock}
                                deskripsi={this.state.data.deskripsi}
                                img={img}
                                buy={() => this.handleTransaksi(this.state.id)}
                                toPageShopp={() => this.pushToCart(this.state.id)}
                                displayBoxAlamat={"none"}
                                valueInput={this.state.order}
                                displayInputTotalOrder={'none'}
                            />
                        </div>
                    </>
                ) : (
                        <Spinner
                            bgColorLoading={'#ffa835'}
                        />
                    )}
            </>
        )
    }
}

export default withRouter(DetailProduk)