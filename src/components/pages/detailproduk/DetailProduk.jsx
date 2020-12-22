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

class DetailProduk extends Component {

    state = {
        data: {},
        id: '',
        postKeranjang: {
            id: '',
            label: '',
            name: '',
            price: ''
        },
        getDataForLoading: []
    }

    getAPIForLoading = () => {
        API.APISerba5rb()
            .then((result) => {
                this.setState({
                    getDataForLoading: result.data
                })
            })
    }

    // addCart = (_id) => {
    //     const { post, cart } = this.context;
    //     const data = post.filter(data => {
    //         return data._id === _id
    //     })
    //     this.setState({
    //         cart: [...cart, ...data]
    //     })
    //     console.log('hasil data baru:', data)
    // }

    handleKeranjang = (id) => {
        this.props.history.push(id)
        console.log(this.props)
    }

    // to transaksion
    handleTransaksi = (id) => {
        this.props.history.push(`/detail-produk/transaksi/${id}`)
    }
    // end to transaksion

    getDetailProduct = () => {
        const id = this.props.match.params.id
        const APISemuaHarga = () => {
            API.APIFirebaseDetailProduct(id)
                .then((res) => {
                    this.setState({
                        data: res
                    })
                    console.log(res.id)
                    console.log(this.state.data)
                })
                .catch(err => {
                    console.log('document semua harga not found', err)
                })
        }
        const APILimaRibu = () => {
            API.APIFirebaseDPLimaRibu(id)
                .then((res) => {
                    this.setState({
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
                        data: res
                    })
                })
        }
        const APILimaBelasRibu = () => {
            API.APIFirebaseDPLimaBelasRibu(id)
                .then((res) => {
                    this.setState({
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
        this.getDetailProduct();
        this.getAPIForLoading();
    }

    render() {

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
                            />

                            <DetailCard
                                name={this.state.data.name}
                                price={this.state.data.price}
                                stock={this.state.data.stock}
                                deskripsi={this.state.data.deskripsi}
                                img={img}
                                buy={() => this.handleTransaksi(this.state.data.id)}
                                // toPageShopp={() => this.addCart(e._id)}
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