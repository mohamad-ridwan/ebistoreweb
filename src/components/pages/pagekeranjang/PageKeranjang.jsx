import React from 'react'
import '../pagekeranjang/PageKeranjang.scss'
import imgCircInfo from '../../../img/picnic.svg'
import { Link, useHistory, withRouter } from 'react-router-dom'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import KeranjangCard from '../../../componentcard/keranjangcard/KeranjangCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import BoxWhite from '../../../componentcard/boxwhite/BoxWhite'
import img from '../../../img/enambelas.jpg'
import { Component } from 'react'
import { PushToCartContext } from '../../../config/context/PushToCart'
import API from '../../../service'
import Spinner from '../../../componentcard/spinner/Spinner'

class PageKeranjang extends Component {

    static contextType = PushToCartContext;

    state = {
        data: [],
        dataLoading: []
    }

    goToTransaksi = (id) => {
        this.props.history.push(`/detail-produk/${id}`)
    }

    getDataKeranjang = () => {
        API.APIFirebaseGetKeranjang()
            .then((res) => {
                this.setState({
                    data: res
                })
            })
        API.APIFirebaseSerbaLimaRibu()
            .then((res) => {
                this.setState({
                    dataLoading: res
                })
            })
    }

    componentDidMount() {
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