import React, { useContext, useEffect } from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './DetailProduk.scss'
import { Link, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter } from 'react-router-dom'
import { Component } from 'react'
import DetailCard from '../../../componentcard/detailcard/DetailCard'
import Helmet from '../../../componentcard/helmet/Helmet'
import API from '../../../service'

class DetailProduk extends Component {

    state = {
        post: [
            {
                _id: '',
                name: '',
                price: '',
                stock: '',
                deskripsi: '',
                image: '',
            }
        ],
        postKeranjang: {
            id: '',
            label: '',
            name: '',
            price: ''
        },
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

    // carousel react-slick
    // settings = {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 200
    // }

    // to transaksion
    handleTransaksi = (id) => {
        this.props.history.push(`/detail-produk/transaksi/${id}`)
    }
    // end to transaksion

    componentDidMount() {
        // dapatkan id dari id yang masuk
        const id = this.props.match.params.id
        API.APIDetailProduk(id)
            .then(result => {
                let respon = result.data
                // Agar bisa mendapatkan data yg masuk
                // Ganti data yg masuk dengan data yg baru
                this.setState({
                    post: [
                        {
                            _id: respon._id,
                            name: respon.name,
                            price: respon.price,
                            stock: respon.stock,
                            deskripsi: respon.deskripsi,
                            image: respon.image
                        }
                    ]
                })
            })
    }

    render() {

        return (
            <>
                {this.state.post.map((e) => {
                    return (
                        <Helmet
                            titleHelmet={`Detail Produk | ${e.name} | Ebi Store`}
                            contentHelmet={`halaman detail produk | ${e.name} | Ebi Store`}
                        />
                    )
                })}

                <div className="wrapp-detail-produk">
                    <NavbarPageCard
                        linkPage={'/'}
                        titlePageNav={'Detail Produk'}
                    />

                    {this.state.post.map(e => {
                        return (
                            <DetailCard
                                key={e._id}
                                data={e}
                                img={`http://localhost:6235/${e.image}`}
                                buy={this.handleTransaksi}
                                toPageShopp={() => this.addCart(e._id)}
                                displayBoxAlamat={"none"}
                                valueInput={this.state.order}
                                displayInputTotalOrder={'none'}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
}

export default withRouter(DetailProduk)