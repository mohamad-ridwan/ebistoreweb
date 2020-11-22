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

class DetailProduk extends Component {

    state = {
        post : {
            label : '',
            name : '',
            price : '',
            stock: ''
        }
    }

    // carousel react-slick
    settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200
    }

    componentDidMount(){
        // dapatkan id dari id yang masuk
        const id = this.props.match.params.id
        Axios.get(`http://localhost:62542/v2/makaroni/getlimaribu/${id}`)
        .then(result=>{
            let post = result.data
            // Agar bisa mendapatkan data yg masuk
            // Ganti data yg masuk dengan data yg baru
            this.setState({
                post: {
                    label : post.data.label,
                    name : post.data.name,
                    price: post.data.price,
                    stock: post.data.stock
                }
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

            <Slider {...this.settings} className={'slider-img-produk'}>
                <img src={imgProduk} alt="" className="img-produk"/>
                <img src={imgProduk} alt="" className="img-produk"/>
                <img src={imgProduk} alt="" className="img-produk"/>
            </Slider>

            {/* deskripsi produk */}
            <div className="deskripsi-produk">
                <div className="rowKiri">
                <p className="label-produk labelGroup">
                    {this.state.post.label}
                </p>
                <p className="name-produk marginGroup">
                    {this.state.post.name}
                </p>
                <p className="price-produk marginGroup">
                    Rp. {this.state.post.price}
                </p>
                <p className="stock-produk labelGroup marginGroup">
                    Stock ({this.state.post.stock})
                </p>           
                </div>
                <div className="rowKanan">
                <BtnCard
                    heightBtn={'35px'}
                    widthBtn={'100%'}
                    btnName={'Beli'}
                    link={'/transaksi'}
                />
                </div>                
            </div>
            {/* end deskripsi produk */}

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