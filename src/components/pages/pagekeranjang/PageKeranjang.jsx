import React from 'react'
import '../pagekeranjang/PageKeranjang.scss'
import imgCircInfo from '../../../img/picnic.svg'
import { Link, useHistory, withRouter } from 'react-router-dom'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import KeranjangCard from '../../../componentcard/keranjangcard/KeranjangCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import img from '../../../img/enambelas.jpg'
import { Component } from 'react'
import API from '../../../service'
import Spinner from '../../../componentcard/spinner/Spinner'
import firebase from 'firebase/app';
import PopUp from '../../../componentcard/popup/PopUp'
import { PustToCartContext } from '../../../config/context/PushToCart'

class PageKeranjang extends Component {

    static contextType = PustToCartContext

    state = {
        data: [],
        dataLoading: [],
        isLoading: false,
        popUp: false
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

    goToTransaksi = (id) => {
        this.props.history.push(`/detail-produk/${id}`)
    }

    deleteProduct = (i, id, name) => {
        i.stopPropagation()
        const windowConfirm = window.confirm(`Delete ${name}?`)
        if (windowConfirm) {
            this.setState({ isLoading: true })
            const getCart = this.context[3]
            API.APIFirebaseDeleteKeranjang(id)
                .then((res) => {
                    getCart()
                    setTimeout(() => {
                        this.setState({ isLoading: false })
                        this.setState({ popUp: true })
                        API.APIFirebaseGetKeranjang()
                            .then((res) => {
                                this.setState({
                                    data: res
                                })
                            })
                    }, 1000)
                    setInterval(() => {
                        this.setState({ popUp: false })
                    }, 3000)
                })
        }
        i.preventDefault()
    }

    getDataKeranjang = () => {
        API.APIFirebaseGetKeranjang()
            .then((res) => {
                this.setState({
                    data: res
                })
            })
        API.APIFirebaseAllProduct('allproduct')
            .then((res) => {
                this.setState({
                    dataLoading: res
                })
            })
    }

    componentDidMount() {
        this.getUserLogin()
        this.getDataKeranjang();
    }

    render() {
        return (
            <>
                {this.state.dataLoading.length > 0 ? (
                    <>
                        <Helmet
                            titleHelmet={'Keranjang | Ebi Store'}
                            contentHelmet={'halaman keranjang | Ebi Store'}
                        />
                        {/* Navbar */}
                        <NavbarPageCard linkPage="/" titlePageNav="Keranjang" />
                        {/* END Navbar */}
                        {this.state.data && this.state.data.length > 0 ? (
                            <p className="total-keranjang">
                                Total Keranjang {this.state.data.length}
                            </p>
                        ) : (
                                <p className="total-keranjang" style={{
                                    display: 'none'
                                }}>

                                </p>
                            )}

                        <div className="wrapper-pageKeranjang">
                            {this.state.data && this.state.data.length > 0 ?
                                this.state.data.map(e => {
                                    return (
                                        <KeranjangCard
                                            key={e.id}
                                            img={img}
                                            name={e.data.data.name}
                                            price={`Rp ${e.data.data.price}`}
                                            to={() => this.goToTransaksi(e.id)}
                                            deleteProduct={(i) => this.deleteProduct(i, e.id, e.data.data.name)}
                                            loading={this.state.isLoading}
                                        />
                                    )
                                }) : (
                                    <>
                                        {/* Container Body */}
                                        <div className="cont-body-pageKeranjang">

                                            {/* Circle Info */}
                                            <div className="circ-info-pageKeranjang">
                                                {/* TXT Circle Info */}
                                                <p className="txt1-circ-inf-pageKeranjang">
                                                    Tidak ada makaroni yang kamu masukkan ke dalam keranjang
                                                </p>
                                                {/* END TXT Circle Info */}

                                                {/* Img Circle Info */}
                                                <img src={imgCircInfo} alt="" className="img-circ-info-pageKeranjang" />
                                                {/* END Img Circle Info */}
                                            </div>
                                            {/* END Circle Info */}
                                        </div>
                                        {/* END Container Body */}
                                    </>
                                )}
                        </div>

                        <PopUp
                            transformPopUp={this.state.popUp ? 'translateY(0px)' : 'translateY(100px)'}
                            txtPopUp={'1 Makaroni telah dihapus!'} />
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
export default withRouter(PageKeranjang)