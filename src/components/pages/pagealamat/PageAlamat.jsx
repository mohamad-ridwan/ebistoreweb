import Axios from 'axios'
import { action, createStore } from 'easy-peasy'
import React from 'react'
import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import FormAlamat from '../../../componentcard/formalamat/FormAlamat'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageAlamat.scss'

class PageAlamat extends Component {

    state = {
        formAlamat: {
            id: 1,
            alamat: '',
            kota: '',
            kodePos: '',
            namaPenerima: ''
        }
    }

    handleFormChange = (event) => {
        const formAlamatNew = { ...this.state.formAlamat };
        const timestamp = new Date().getTime()
        formAlamatNew['id'] = timestamp
        formAlamatNew[event.target.name] = event.target.value
        this.setState({
            formAlamat: formAlamatNew
        })
    }

    postAlamat = () => {
        Axios.post('http://localhost:6235/v5/dataalamat/postalamat',
            this.state.formAlamat)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleSubmit = () => {
        alert('Alamat berhasil di simpan!!')
        this.postAlamat()
        // this.props.history.push('/pageprofil')
    }

    render() {

        return (
            <>
                <NavbarPageCard
                    linkPage={'/pageprofil'}
                    position={'absolute'}
                    titlePageNav={'Form Alamat'}
                    transparant={"transparant"}
                    color={"#fff"}
                />
                <div className="wrapper-alamat">
                    <div className="box-orange">
                        <FormAlamat
                            title={"Alamat"}
                            valueName={"alamat"}
                            placeholder={"Masukkan Nama Jalan Rumah / Blok / No / RT/RW"}
                            fungsiAutoFocus={'autoFocus'}
                            handle={this.handleFormChange}
                        />
                        <FormAlamat
                            title={"Kota atau Kecamatan"}
                            valueName={"kota"}
                            placeholder={"Masukkan Kota / Kecamatan"}
                            handle={this.handleFormChange}
                        />
                        <FormAlamat
                            title={"Kode Pos"}
                            valueName={"kodePos"}
                            placeholder={"Masukkan Kode Pos"}
                            handle={this.handleFormChange}
                        />
                        <FormAlamat
                            title={"Nama Penerima"}
                            valueName={"namaPenerima"}
                            placeholder={"Masukkan Nama Penerima"}
                            handle={this.handleFormChange}
                        />

                        <Link style={{
                            textDecoration: 'none',
                            overflow: 'hidden'
                        }}
                            onClick={this.handleSubmit}
                        >
                            <BtnCard
                                // display={props.displayBtnTransaksis}
                                heightBtn={'40px'}
                                widthBtn={'auto'}
                                btnName={'Simpan Alamat'}
                                marginBtn={'10px'}
                                bdrRadius={"100px"}
                                bgColor={"#ffa835"}
                                colorP={"#fff"}
                                fontWeight={"bold"}
                                bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                            // link={"/pageprofil"}
                            // goTo={() => props.buy(props.data._id)}
                            />
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(PageAlamat)