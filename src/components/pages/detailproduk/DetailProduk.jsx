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
        postKeranjang: {
            id: '',
            label: '',
            name: '',
            price: ''
        },
        errorServer: false,
        kondisi: false,
        popUp: false,
        popUp2: false,
        postCart: this.context,
        getCart: this.context,
        dataCart: this.context,
        id: this.props.match.params.id,
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
        const path = ['allproduct', 'limaribu', 'sepuluhribu', 'limabelasribu']
        path.forEach((e, i) => {
            if (API.APIFirebaseDetailProduct(path[e, i], this.state.id)) {
                API.APIFirebaseDetailProduct(path[e, i], this.state.id)
                    .then((res) => {
                        this.setState({
                            data: res
                        })
                    })
            }
        })

        API.APIFirebaseGetKeranjang()
            .then((res) => {
                this.setState({ dataKeranjang: res })
            })
    }

    pushToCart = (id) => {
        const alertConfirm = window.confirm('Tambahkan Ke Keranjang?')
        if (alertConfirm) {
            const dataKeranjang = this.state.dataKeranjang
            const check = dataKeranjang.every(e => {
                return e.id !== id
            })
            if (check) {
                this.setState({ kondisi: true })
                const data = this.state.data
                const getCart = this.state.getCart[3]
                const postCart = this.state.postCart[2]
                if (postCart(this.state.id, data)) {
                    getCart()
                    postCart(this.state.id, data)
                        .then((res) => {
                            if (res) {
                                setTimeout(() => {
                                    this.setState({ kondisi: false })
                                    this.setState({ popUp: true })
                                    API.APIFirebaseGetKeranjang()
                                        .then((res) => {
                                            this.setState({ dataKeranjang: res })
                                        })
                                }, 1000)
                                setInterval(() => {
                                    this.setState({ popUp: false })
                                }, 3000)
                            }

                            return res
                        }, () => {
                            setTimeout(() => {
                                this.setState({ kondisi: false })
                                this.setState({ errorServer: true })
                            }, 1000)
                            setInterval(() => {
                                this.setState({ errorServer: false })
                            }, 4000)
                        })
                }
            } else {
                this.setState({ popUp2: true })
                this.setState({ kondisi: false })
            }
            setTimeout(() => {
                this.setState({ popUp2: false })
            }, 3000)
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
                                price={`Rp${this.state.data.price}`}
                                stock={`Stock (${this.state.data.stock})`}
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

                            <PopUp
                                transformPopUp={this.state.errorServer ? 'translateY(0px)' : 'translateY(100px)'}
                                txtPopUp={'Terjadi Kesalahan Server, Mohon coba lagi nanti!'}
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