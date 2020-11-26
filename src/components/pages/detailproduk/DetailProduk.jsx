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
                stock: ''
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
        Axios.get(`http://localhost:62542/v2/makaroni/getlimaribu/${id}`)
        .then(result=>{
            let post = result.data
            // Agar bisa mendapatkan data yg masuk
            // Ganti data yg masuk dengan data yg baru
            this.setState({
                post: [
                    {   
                        _id : post.data._id,
                        label : post.data.label,
                        name : post.data.name,
                        price: post.data.price,
                        stock: post.data.stock
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
                            buy={this.handleTransaksi}
                            toPageShopp={this.handleKeranjang}
                       />
                    </>
                    )
                })}
            {/* END Detail Card

            {/* keterangan makaroni */}
            <div className="keterangan-makaroni">
                <p className="title titleGroup">
                    Deskripsi Makaroni
                </p>

                <p className="paragraph paragrapGroup">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident fugiat tenetur eius repudiandae vel sed nisi dolorem id dolores nesciunt.
                </p>

                <p className="komposisi titleGroup">
                    Komposisi
                </p>

                <p className="paragraph-komposisi paragrapGroup">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint culpa vitae quae atque repellat quibusdam? Voluptas beatae consequatur unde?
                </p>
            </div>
            {/* end keterangan makaroni */}

            {/* komen user */}
            <div className="komen-user">
                <p className="title-komen">
                    Tanggapan Pembeli
                </p>

                <div className="container-komen-user">
                    <div className="rowKiri-user">
                        <div className="profil-user">
                            <img src={img} alt="" className="img-profil"/>
                            <p className="name-profil">
                                Mohamad Ridwan Apriyadi
                            </p>
                        </div>
                        <p className="paragraph-komen">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.
                        </p>
                        <p className="date-komen">
                            • 12 Nov 2020
                        </p>
                    </div>
                    <div className="rowKanan-user">
                        <i className="fas fa-thumbs-down"></i>
                    </div>
                </div>

                <div className="container-komen-user">
                    <div className="rowKiri-user">
                        <div className="profil-user">
                            <img src={img} alt="" className="img-profil"/>
                            <p className="name-profil">
                                Mohamad Ridwan Apriyadi
                            </p>
                        </div>
                        <p className="paragraph-komen">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.
                        </p>
                        <p className="date-komen">
                            • 12 Nov 2020
                        </p>
                    </div>
                    <div className="rowKanan-user">
                        <i className="fas fa-thumbs-down"></i>
                    </div>
                </div>
                
                <div className="container-komen-user">
                    <div className="rowKiri-user">
                        <div className="profil-user">
                            <img src={img} alt="" className="img-profil"/>
                            <p className="name-profil">
                                Mohamad Ridwan Apriyadi
                            </p>
                        </div>
                        <p className="paragraph-komen">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.
                        </p>
                        <p className="date-komen">
                            • 12 Nov 2020
                        </p>
                    </div>
                    <div className="rowKanan-user">
                        <i className="fas fa-thumbs-down"></i>
                    </div>
                </div>
            </div>
            {/* end komen user */}
        </div>
        </>
    )
}
}

export default withRouter(DetailProduk)