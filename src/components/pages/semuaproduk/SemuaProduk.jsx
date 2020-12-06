import React from 'react'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './SemuaProduk.scss'
import img from '../../../img/enambelas.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import Slider from 'react-slick'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Component } from 'react'

class SemuaProduk extends Component {

    settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500
    }

    state = {
        data: []
    }

    handleDetail = (_id) => {
        this.props.history.push(`/detail-produk/${_id}`)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        Axios.get(`http://localhost:6235/v8/makaroni/getall?page=${id}`)
            .then(res => {
                const respon = res.data

                this.setState({
                    data: respon.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        return (
            <>
                <div className="wrapper-semua-produk">
                    <NavbarPageCard
                        linkPage={'/beranda'}
                        titlePageNav={'Semua'}
                    />

                    {/* Categori navbar */}
                    <div className="categori-nav">
                        <p className="title-ktg">
                            Kategori
                    </p>

                        <Slider {...this.settings} className="slider-allP">
                            <NavLink to="/semuaproduk/9" className="btn-kategori" activeClassName={'active-menu'}>
                                Semua Harga
                            </NavLink>
                            <NavLink to="/semuaproduk/7" className="btn-kategori" activeClassName={'active-menu'}>
                                Serba 5rb
                            </NavLink>
                            <NavLink to="/semuaproduk/3" className="btn-kategori" activeClassName={'active-menu'}>
                                Serba 10rb
                            </NavLink>
                            <NavLink to="/semuaproduk/1" className="btn-kategori" activeClassName={'active-menu'}>
                                Serba 15rb
                            </NavLink>
                        </Slider>
                    </div>
                    {/* END Categori Navbar */}

                    <div className="container-all-card">
                        {this.state.data.map((e) => {
                            return (
                                <>
                                    <BoxCard
                                        key={e._id}
                                        flxDirectWrapp={"column"}
                                        heightWrapp={"auto"}
                                        widthWrapp={"calc(48%)"}
                                        displayNavBtn={"none"}
                                        data={e}
                                        image={`http://localhost:6235/${e.image}`}
                                        displayBtnBuy={"none"}
                                        bdrRadius={"20px"}
                                        mrginWrapp={"0px 0px 10px 0"}
                                        paddContent={"10px"}
                                        mrgnStock={"5px 0 0px 0"}
                                        bxShadow={"0 1px 10px -3px rgba(0,0,0,0.1)"}
                                        detail={this.handleDetail}
                                    />

                                </>
                            )
                        })}

                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(SemuaProduk)