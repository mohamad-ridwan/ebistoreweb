import React, { useEffect } from 'react'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './DetailProduk.scss'
import Slider from 'react-slick'
import imgProduk from '../../../img/satu.jpeg'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import { Link, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter } from 'react-router-dom'
import img from '../../../img/avatarnew.jpg'
import Axios from 'axios'
import { useState } from 'react'
import { Component } from 'react'
import DetailCard from '../../../componentcard/detailcard/DetailCard'

class DetailProduk extends Component {

    state = {
        post : [
            {
                _id : '',
                label: '',
                name: '',
                price: '',
                stock: '',
                deskripsi : '',
                komposisi: '',
                image: '',
            }
        ],
        postKeranjang : {
            id : '',
            label: '',
            name: '',
            price: ''
        }
    }

    handleKeranjang = ()=>{
        let id = this.props.match.params.id
        Axios.post(`http://localhost:62542/v7/makaroni/postkeranjang/${id}`)
        .then(result=>{
            let post = result.data
            this.setState({
                postKeranjang : {
                    id : post.data.id,
                    label : post.data.label,
                    name : post.data.name,
                    price: post.data.price
                }
            })
            alert('masuk', result.data)
            console.log('success', result.data)
        })
        .catch(err=>{
            alert('failed', err)
            console.log(err)
        })
    }

    // carousel react-slick
    // settings = {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 200
    // }

    // to transaksion
    handleTransaksi = (id)=>{
        this.props.history.push(`/transaksi/${id}`)
    }
    // end to transaksion

    componentDidMount(){
        // dapatkan id dari id yang masuk
        const id = this.props.match.params.id
        Axios.get(`http://localhost:62542/v8/makaroni/getall/${id}`)
        .then(result=>{
            let post = result.data
            // Agar bisa mendapatkan data yg masuk
            // Ganti data yg masuk dengan data yg baru
            console.log(result.data)
            this.setState({
                post: [
                    {   
                        _id : post.data._id,
                        label : post.data.label,
                        name : post.data.name,
                        price: post.data.price,
                        stock: post.data.stock,
                        deskripsi: post.data.deskripsi,
                        komposisi: post.data.komposisi,
                        image: post.data.image
                    }
                ]
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){

    return(
        <>
        <div className="wrapp-detail-produk">
            <NavbarPageCard
                linkPage={'/'}
                titlePageNav={'Detail Produk'}
            />

            {/* Detail Card */}
            {this.state.post.map((e)=>{
                    return(
                    <>
                       <DetailCard
                            data={e}
                            img={`http://localhost:62542/${e.image}`}
                            buy={this.handleTransaksi}
                            toPageShopp={this.handleKeranjang}
                       />
                    </>
                    )
                })}
            {/* {/* END Detail Card */}
        </div>
        </>
    )
}
}

export default withRouter(DetailProduk)