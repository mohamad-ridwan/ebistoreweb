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
import { WhatsappShareButton } from 'react-share'
import BtnCard from '../../../componentcard/btncard/BtnCard'

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

    pushToCart = (id) => {
        const alertConfirm = window.confirm('Tambahkan Ke Keranjang?')
        if (alertConfirm) {
            const dataKeranjang = this.state.dataKeranjang
            const check = dataKeranjang.every(e => {
                return e.id !== id
            })
            this.setState({ kondisi: true })
            if (check) {
                this.setState({ kondisi: true })
                const data = this.state.data
                const id = this.props.match.params.id
                setTimeout(() => {
                    API.APIFirebasePushKeranjang(data, id)
                        .then((res) => {
                            alert('Berhasil di tambahkan ke keranjang')
                            window.location.reload()
                            this.setState({ kondisi: false })
                        })
                        .catch((err) => {
                            console.log(err)
                            this.setState({ kondisi: false })
                        })
                }, 2000)
            } else {
                alert('Makaroni Sudah di tambahkan ke keranjang')
                this.setState({ kondisi: false })
            }
        }
    }

    getDetailProduct = () => {
        const id = this.props.match.params.id

        if (API.APIFirebaseDetailProduct(id)) {
            API.APIFirebaseDetailProduct(id)
                .then((res) => {
                    this.setState({
                        id: id,
                        data: res
                    })
                })
        }
        if (API.APIFirebaseDPLimaRibu(id)) {
            API.APIFirebaseDPLimaRibu(id)
                .then((res) => {
                    this.setState({
                        id: id,
                        data: res
                    })
                })
        }
        if (API.APIFirebaseDPSepuluhRibu(id)) {
            API.APIFirebaseDPSepuluhRibu(id)
                .then((res) => {
                    this.setState({
                        id: id,
                        data: res
                    })
                })
        }
        if (API.APIFirebaseDPLimaBelasRibu(id)) {
            API.APIFirebaseDPLimaBelasRibu(id)
                .then((res) => {
                    this.setState({
                        id: id,
                        data: res
                    })
                })
        }

        API.APIFirebaseGetKeranjang()
            .then((res) => {
                this.setState({ dataKeranjang: res })
            })
    }

    componentDidMount() {
        this.getDetailProduct();
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
                                loading={this.state.kondisi}
                            />

                            <div className="navBottom-detailP">
                                <p className="title-tanya">
                                    Tanya Ke Penjual
                                </p>

                                <WhatsappShareButton
                                    url={`https://api.whatsapp.com/send?phone=6289611683455`}
                                    title={`
                                    ${this.state.data.name}
                                    ${this.state.data.price}
                                    ${this.state.data.stock}
                                    ${this.state.data.deskripsi}
                                    ${img}
                                    `}
                                >
                                    <i className="fab fa-whatsapp"></i>
                                </WhatsappShareButton>

                            </div>
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