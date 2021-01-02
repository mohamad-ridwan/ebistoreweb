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
import { WhatsappShareButton } from 'react-share'
import firebase from 'firebase/app';
import PopUp from '../../../componentcard/popup/PopUp'
import { PustToCartContext } from '../../../config/context/PushToCart'

class DetailProduk extends Component {

    static contextType = PustToCartContext

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
        kondisi: false,
        popUp: false,
        popUp2: false
    }

    getUserLogin = () => {
        const histori = this.props.history
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

            } else {
                histori.push('/login')
            }
        })
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

    getPushToCartContext = {
        postCart: this.context,
        getCart: this.context,
        dataCart: this.context
    }

    pushToCart = (id) => {
        API.APIFirebaseGetKeranjang()
            .then((res) => {
                this.setState({ dataKeranjang: res })
            })
        const alertConfirm = window.confirm('Tambahkan Ke Keranjang?')
        if (alertConfirm) {
            const dataKeranjang = this.state.dataKeranjang
            const check = dataKeranjang.every(e => {
                return e.id !== id
            })
            if (check) {
                this.setState({ kondisi: true })
                const data = this.state.data
                const id = this.props.match.params.id
                const getCart = this.getPushToCartContext.getCart[3]
                const postCart = this.getPushToCartContext.postCart[2]
                if (postCart(id, data)) {
                    getCart()
                    setTimeout(() => {
                        this.setState({ kondisi: false })
                        this.setState({ popUp: true })
                    }, 1000)
                    setInterval(() => {
                        this.setState({ popUp: false })
                    }, 3000)
                }
            } else {
                this.setState({ popUp2: true })
                this.setState({ kondisi: false })
            }
            setTimeout(() => {
                this.setState({ popUp2: false })
            }, 2000)
        }
    }

    handleTransaksi = (id) => {
        this.props.history.push(`/detail-produk/transaksi/${id}`)
    }

    componentDidMount() {
        this.getUserLogin()
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

                            <PopUp
                                transformPopUp={this.state.popUp ? 'translateY(0px)' : 'translateY(100px)'}
                                txtPopUp={'Makaroni berhasil di tambahkan ke keranjang!'} />

                            <PopUp
                                transformPopUp={this.state.popUp2 ? 'translateY(0px)' : 'translateY(100px)'}
                                txtPopUp={'Makaroni Sudah di tambahkan ke keranjang!'}
                                bgColorPopUp={'#db1514'}
                            />

                            {/* <div className="navBottom-detailP">
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

                            </div> */}
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