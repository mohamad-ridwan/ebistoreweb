import React from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './Transaksi.scss'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DetailCard from '../../../componentcard/detailcard/DetailCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import API from '../../../service'
import Spinner from '../../../componentcard/spinner/Spinner'
import img from '../../../img/enambelas.jpg'

class Transaksi extends Component {

    state = {
        alamat: {
            _id: '',
            alamat: '',
            kota: '',
            kodePos: '',
            namaPenerima: ''
        },
        // Jika ingin melakukan mapping data
        // maka di perlukan array custom untuk menSupport mapping
        produk: {},
        totalBeli: 1,
        totalPrice: 1,
        getDataForLoading: []
    }

    getAPIForLoading = () => {
        API.APIFirebaseSerbaLimaRibu()
            .then((res) => {
                this.setState({
                    getDataForLoading: res
                })
            })
    }

    handlePlus = () => {
        // update value state total beli ke value yg di tambahkan
        this.setState({
            // call propertynya
            totalBeli: this.state.totalBeli + 1,
            price: this.state.price * 2
        })
    }

    handleMinus = () => {
        // update value state total beli ke value yg di kurangkan
        // handle btn minus ketika value kebih kecil dari 0
        if (this.state.totalBeli > 1) {
            // Jalankan value lebih besar dr 0
            this.setState({
                totalBeli: this.state.totalBeli - 1,
                price: this.state.price * 2
            })
        }
    }

    handleBackToPageDetailProduk = () => {
        const id = this.props.match.params.id
        this.props.history.push(`/detail-produk/${id}`)
    }

    // Data Produk
    setAllAPI = () => {
        let id = this.props.match.params.id
        API.APIFirebaseDetailProduct(id)
            .then((res) => {
                this.setState({
                    produk: res
                })
            })
    }
    // end data produk

    componentDidMount() {
        this.setAllAPI();
        this.getAPIForLoading();
    }

    render() {

        const { produk } = this.state

        return (
            <>
                {this.state.getDataForLoading.length > 0 ? (
                    <>
                        <Helmet
                            titleHelmet={`Transaksi | ${produk.name} | Ebi Store`}
                            contentHelmet={`halaman transaksi | ${produk.name} | Ebi Store`}
                        />

                        <div className="wrapp-transaksi">
                            <NavbarPageCard
                                backPage={this.handleBackToPageDetailProduk}
                                titlePageNav={'Transaksi'}
                            />

                            <DetailCard
                                name={produk.name}
                                price={produk.price}
                                deskripsi={produk.deskripsi}
                                totalPrice={produk.price}
                                displayStock={"none"}
                                img={img}
                                displayCart={"none"}
                                displayBtn={"none"}
                                minus={this.handleMinus}
                                plus={this.handlePlus}
                                valueInput={this.state.totalBeli}
                            // alamat={alamatUser.alamat || 'oke'}
                            // kota={alamatUser.kota || 'oke'}
                            // kodePos={alamatUser.kodePos || 'oke'}
                            // namaPenerima={alamatUser.namaPenerima || 'oke'}
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
export default withRouter(Transaksi)