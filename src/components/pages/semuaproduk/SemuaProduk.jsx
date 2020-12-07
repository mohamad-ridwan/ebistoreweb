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
import Menu from '../../../componentcard/menu/Menu'
import { getAllDataApi } from '../../../config/redux/action'
import { connect } from 'react-redux'

class SemuaProduk extends Component {

    settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500
    }

    state = {
        data: [],
        menu: []
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

        Axios.get('http://localhost:6235/v10/menu/getmenu')
            .then(res => {
                const respon = res.data
                this.setState({
                    menu: respon.data
                })
            })
            .catch(err => {
                console.log(err)
            })

        this.props.getApi()
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
                            {this.state.menu.map(e => {
                                return (
                                    <>
                                        <Menu
                                            key={e._id}
                                            // linkPage={e.linkPage}
                                            link={e.linkPage}
                                            nameMenu={e.nameMenu}
                                        />
                                    </>
                                )
                            })}

                            <NavLink
                                to='' className="btn-kategori" activeClassName={'active-menu'}>
                                {'goblog'}
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

const reduxDispatch = () => ({
    getApi: () => getAllDataApi()
})


export default connect(reduxDispatch)(withRouter(SemuaProduk))