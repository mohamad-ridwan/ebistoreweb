import React from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './Transaksi.scss'
import Axios from 'axios'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DetailCard from '../../../componentcard/detailcard/DetailCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import API from '../../../service'
import Spinner from '../../../componentcard/spinner/Spinner'

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
        produk: [
            {
                _id: '',
                label: '',
                name: '',
                price: '',
                image: ''
            }
        ],
        totalBeli: 1,
        totalPrice: 1,
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
    produkAPI = () => {
        let id = this.props.match.params.id
        API.APIDetailProduk(id)
            .then(result => {
                let post = result.data
                this.setState({
                    produk: [
                        {
                            _id: post._id,
                            label: post.label,
                            name: post.name,
                            price: post.price,
                            image: post.image
                        }
                    ]
                })
            })
    }
    // end data produk

    // Alamat
    alamatAPI = () => {
        Axios.get('http://localhost:6235/v5/dataalamat/getalamat')
            .then(result => {
                const respon = result.data
                this.setState({
                    alamat: {
                        _id: respon._id,
                        alamat: respon.alamat,
                        kota: respon.kota,
                        kodePos: respon.kodePos,
                        namaPenerima: respon.namaPenerima
                    }
                })
            })
            .catch(err => {
                console.log('failed', err)
            })
    }
    // END Alamat

    componentDidMount() {
        this.alamatAPI();
        this.produkAPI();
        this.getAPIForLoading();
    }

    render() {
        return (
            <>
                {this.state.getDataForLoading.length > 0 ? (
                    <>
                        {this.state.produk.map(e => {
                            return (
                                <Helmet
                                    titleHelmet={`Transaksi | ${e.name} | Ebi Store`}
                                    contentHelmet={`halaman transaksi | ${e.name} | Ebi Store`}
                                />
                            )
                        })}

                        <div className="wrapp-transaksi">
                            <NavbarPageCard
                                backPage={this.handleBackToPageDetailProduk}
                                titlePageNav={'Transaksi'}
                            />
                            {/* detail produk pesanan */}

                            {this.state.produk.map(e => {
                                return (
                                    <DetailCard
                                        data={e}
                                        totalPrice={e.price}
                                        displayStock={"none"}
                                        img={`http://localhost:6235/${e.image}`}
                                        displayCart={"none"}
                                        displayBtn={"none"}
                                        minus={this.handleMinus}
                                        plus={this.handlePlus}
                                        valueInput={this.state.totalBeli}
                                        alamat={this.state.alamat.alamat}
                                        kota={this.state.alamat.kota}
                                        kodePos={this.state.alamat.kodePos}
                                        namaPenerima={this.state.alamat.namaPenerima}
                                    />
                                )
                            })}
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