import React, { useContext } from 'react'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './SemuaProduk.scss'
import img from '../../../img/enambelas.jpg'
import Slider from 'react-slick'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Component } from 'react'
import Menu from '../../../componentcard/menu/Menu'
import Helmet from '../../../componentcard/helmet/Helmet'
import Spinner from '../../../componentcard/spinner/Spinner'
import API from '../../../service'

class SemuaProduk extends Component {

    settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500
    }

    state = {
        data: [],
        menu: [],
    }

    handleGoPage = (id) => {
        this.props.history.push(`${id}`)
        window.location.reload()
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-produk/${id}`)
    }

    removeDuplicate = ((data, index) => {
        const unique = data
            .map(e => e[index])

            .map((e, i, final) => final.indexOf(e) === i && i)

            .filter(e => data[e]).map(e => data[e])

        return unique;
    })

    setAllAPI = async () => {
        const id = this.props.match.params.id
        API.APIFirebasePageAllProduct(id)
            .then((res) => {
                this.setState({
                    data: this.removeDuplicate(res, 'id')
                })
            })
        API.APIFirebaseMenuAllProduct()
            .then((res) => {
                this.setState({
                    menu: res
                })
            })
    }

    componentDidMount() {
        this.setAllAPI();
    }

    render() {
        return (
            <>
                {this.state.data && this.state.menu.length > 0 ? (
                    <>
                        {this.state.data.map(e => {
                            return (
                                <Helmet
                                    key={e.id}
                                    titleHelmet={`Semua Produk | ${e.data.pathName} | Ebi Store`}
                                    contentHelmet={`halaman semua produk |  | Ebi Store`}
                                />
                            )
                        })}

                        <div className="wrapper-semua-produk">
                            <NavbarPageCard
                                linkPage={'/'}
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
                                                    key={e.id}
                                                    link={e.data.pathName}
                                                    nameMenu={e.data.name}
                                                    toPage={() => this.handleGoPage(e.data.pathName)}
                                                />
                                            </>
                                        )
                                    })}

                                    <NavLink
                                        to='' className="btn-kategori" activeClassName={'active-menu'}>
                                        {'a'}
                                    </NavLink>
                                </Slider>
                            </div>
                            {/* END Categori Navbar */}

                            <div className="container-all-card">
                                {this.state.data.map((e) => {
                                    return (
                                        <>
                                            <BoxCard
                                                key={e.id}
                                                flxDirectWrapp={"column"}
                                                heightWrapp={"auto"}
                                                widthWrapp={"calc(48%)"}
                                                displayNavBtn={"none"}
                                                name={`${e.data.name}`}
                                                image={img}
                                                price={e.data.price}
                                                stock={e.data.stock}
                                                displayBtnBuy={"none"}
                                                bdrRadius={"20px"}
                                                mrginWrapp={"0px 0px 10px 0"}
                                                paddContent={"10px"}
                                                mrgnStock={"5px 0 0px 0"}
                                                bxShadow={"0 1px 10px -3px rgba(0,0,0,0.1)"}
                                                detail={() => this.handleDetail(e.id)}
                                            />

                                        </>
                                    )
                                })}

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


export default (withRouter(SemuaProduk))