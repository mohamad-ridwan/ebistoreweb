import React, { useRef } from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './Transaksi.scss'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DetailCard from '../../../componentcard/detailcard/DetailCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import API from '../../../service'
import Spinner from '../../../componentcard/spinner/Spinner'
import img from '../../../img/enambelas.jpg'
import firebase from 'firebase/app';
import jne from '../../../img/jne.jpg'
import jnt from '../../../img/jnt.png'
import sicepat from '../../../img/sicepat.png'

class Transaksi extends Component {

    state = {
        // Jika ingin melakukan mapping data
        // maka di perlukan array custom untuk menSupport mapping
        dataAlamat: {},
        produk: {},
        newPrice: {},
        totalBeli: 1,
        show: false,
        displayAlamat: false,
        displayKurir: false,
        getDataForLoading: [],
        newDataJasa: {
            img: `${jne}`,
            name: 'JNE Express',
            durasiPengiriman: 'Durasi Pengiriman : 1-2 Hari',
            ongkir: '5.000'
        },
        dataJasaPengiriman: [
            {
                id: 1,
                img: `${jne}`,
                name: 'JNE Express',
                durasiPengiriman: 'Durasi Pengiriman : 1-2 Hari',
                ongkir: '5.000'
            },
            {
                id: 2,
                img: `${jnt}`,
                name: 'J&T Express',
                durasiPengiriman: 'Durasi Pengiriman : 1 Hari',
                ongkir: '7.000'
            },
            {
                id: 3,
                img: `${sicepat}`,
                name: 'Sicepat',
                durasiPengiriman: 'Durasi Pengiriman : 3 Hari',
                ongkir: '2.000'
            }
        ]
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

    getAPIForLoading = () => {
        API.APIFirebaseSerbaLimaRibu()
            .then((res) => {
                this.setState({
                    getDataForLoading: res
                })
            })
    }

    setAllAPI = () => {
        let id = this.props.match.params.id
        if (API.APIFirebaseDetailProduct('allproduct', id)) {
            API.APIFirebaseDetailProduct('allproduct', id)
                .then((res) => {
                    this.setState({
                        produk: res
                    })
                    const priceJasaP = this.state.newDataJasa.ongkir.split('.').join('')
                    const changePriceJasaPToInt = parseInt(priceJasaP)
                    const price = res.price.split('.').join('')
                    const toInteger = (parseInt(price) * this.state.totalBeli) + changePriceJasaPToInt
                    const jumlahKan = toInteger.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    this.setState({ newPrice: jumlahKan })
                })
        }
        if (API.APIFirebaseDetailProduct('limaribu', id)) {
            API.APIFirebaseDetailProduct('limaribu', id)
                .then((res) => {
                    this.setState({
                        produk: res
                    })
                    const priceJasaP = this.state.newDataJasa.ongkir.split('.').join('')
                    const changePriceJasaPToInt = parseInt(priceJasaP)
                    const price = res.price.split('.').join('')
                    const toInteger = (parseInt(price) * this.state.totalBeli) + changePriceJasaPToInt
                    const jumlahKan = toInteger.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    this.setState({ newPrice: jumlahKan })
                })
        }
        if (API.APIFirebaseDetailProduct('sepuluhribu', id)) {
            API.APIFirebaseDetailProduct('sepuluhribu', id)
                .then((res) => {
                    this.setState({
                        produk: res
                    })
                    const priceJasaP = this.state.newDataJasa.ongkir.split('.').join('')
                    const changePriceJasaPToInt = parseInt(priceJasaP)
                    const price = res.price.split('.').join('')
                    const toInteger = (parseInt(price) * this.state.totalBeli) + changePriceJasaPToInt
                    const jumlahKan = toInteger.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    this.setState({ newPrice: jumlahKan })
                })
        }
        if (API.APIFirebaseDetailProduct('limabelasribu', id)) {
            API.APIFirebaseDetailProduct('limabelasribu', id)
                .then((res) => {
                    this.setState({
                        produk: res
                    })
                    const priceJasaP = this.state.newDataJasa.ongkir.split('.').join('')
                    const changePriceJasaPToInt = parseInt(priceJasaP)
                    const price = res.price.split('.').join('')
                    const toInteger = (parseInt(price) * this.state.totalBeli) + changePriceJasaPToInt
                    const jumlahKan = toInteger.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    this.setState({ newPrice: jumlahKan })
                })
        }

        API.APIRealtimeAlamatProfile()
            .then((res) => {
                this.setState({ dataAlamat: res })
            })

    }

    showJasa = () => {
        this.setState({
            displayKurir: true
        })
    }

    handleClick = () => {
        this.setState({
            displayKurir: false
        })
    }

    handleClickDataJasaP = (e) => {
        this.setAllAPI()
        this.setState({
            newDataJasa: {
                img: e.img,
                name: e.name,
                durasiPengiriman: e.durasiPengiriman,
                ongkir: e.ongkir
            }
        })
        this.setState({
            displayKurir: false
        })
    }

    handleChangeTotalShop = (e) => {
        const getStock = this.state.produk.stock
        const getValue = e.target.value
        if (getValue > 1 && getValue < (getStock + 1)) {
            this.setState({
                totalBeli: e.target.value
            }, this.setAllAPI())
        } else if (getValue >= 1 && getValue < getStock) {
            this.setState({
                totalBeli: e.target.value
            }, this.setAllAPI())
        }
    }

    handlePlus = () => {
        const getStock = this.state.produk.stock
        if (this.state.totalBeli < getStock) {
            this.setState({
                totalBeli: this.state.totalBeli + 1,
            }, this.setAllAPI())
        }
    }

    handleMinus = () => {
        if (this.state.totalBeli > 1) {
            this.setState({
                totalBeli: this.state.totalBeli - 1,
            }, this.setAllAPI())
        }
    }

    handleBackToPageDetailProduk = () => {
        const id = this.props.match.params.id
        this.props.history.push(`/detail-produk/${id}`)
    }

    handlePageAlamat = () => {
        const id = this.props.match.params.id
        this.props.history.push(`/profil/${id}/alamat`)
    }

    nextTransaksi = (e) => {
        API.APIRealtimeAlamatProfile()
            .then((res) => {
                this.setState({ dataAlamat: res })
            })
        if (this.state.dataAlamat) {
            this.props.history.push(`/`)
        } else if (!this.state.dataAlamat) {
            window.addEventListener('click', () => {
                window.scrollTo(0, 320)
            })
            setTimeout(() => {
                this.setState({ show: true })
            }, 500)
            setInterval(() => {
                this.setState({ show: false })
            }, 4000)
        }
    }

    // check = () => {
    //     window.addEventListener('scroll', () => {
    //         const bodyHeight = document.body.scrollTop || document.documentElement.scrollTop
    //         const hasil = Math.floor(bodyHeight) = 320
    //         return hasil
    //     })
    // }

    componentDidMount() {
        // this.check()
        this.getUserLogin()
        this.setAllAPI();
        this.getAPIForLoading();
    }

    render() {

        const { produk, newDataJasa, newPrice, dataAlamat } = this.state

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
                                price={`Rp${produk.price}`}
                                deskripsi={produk.deskripsi}
                                stock={`Stock (${produk.stock})`}
                                totalPrice={`Rp${newPrice}`}
                                img={img}
                                displayCart={"none"}
                                displayBtn={"none"}
                                displayPopUpIsiAlamat={this.state.show ? 'flex' : 'none'}
                                nextTransaksi={this.nextTransaksi}
                                goAlamat={this.handlePageAlamat}
                                displayGoAlamat={this.state.dataAlamat && this.state.dataAlamat ? 'none' : 'flex'}
                                displayContAlamat={this.state.dataAlamat && this.state.dataAlamat ? 'flex' : 'none'}
                                showJasa={() => this.showJasa()}
                                nameKurir={newDataJasa.name}
                                imgLogoKurir={newDataJasa.img}
                                durasiPengiriman={newDataJasa.durasiPengiriman}
                                ongkir={newDataJasa.ongkir}
                                minus={this.handleMinus}
                                plus={this.handlePlus}
                                valueInput={this.state.totalBeli}
                                changeTotalShop={this.handleChangeTotalShop}
                                alamat={dataAlamat && dataAlamat ? dataAlamat.alamat : ''}
                                kota={dataAlamat && dataAlamat ? dataAlamat.kota : ''}
                                kodePos={dataAlamat && dataAlamat ? dataAlamat.kodePos : ''}
                                namaPenerima={dataAlamat && dataAlamat ? dataAlamat.namaPenerima : ''}
                            />

                            <div className="popUp-jasaPembayaran"
                                style={{
                                    display: `${this.state.displayKurir ? 'flex' : 'none'}`
                                }}
                            >
                                <span class="material-icons"
                                    onClick={() => this.handleClick()}
                                >
                                    west
                                </span>
                                <div className="box-white-popUp">
                                    {this.state.dataJasaPengiriman.map(e => {
                                        return (
                                            <div className="jasa-jne jasaGroup"
                                                onClick={() => this.handleClickDataJasaP(e)}
                                            >
                                                <img src={e.img} alt="" className="logo-jne logoJasaGroup" />
                                                <div className="box-txt-jasa">
                                                    <p className="ket-pengiriman">
                                                        • Kurir - {e.name}
                                                    </p>
                                                    <p className="ket-pengiriman">
                                                        {e.durasiPengiriman}
                                                    </p>
                                                    <p className="txt-ongkir">
                                                        Ongkir Rp{e.ongkir}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
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
export default withRouter(Transaksi)