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
        formAlamat : {
            id: 1,
            jalan: '',
            desa: '',
            kecamatan: '',
            kota: '',
            provinsi: '',
            kodePos: ''
        }
    }

    handleFormChange = (event)=>{
        // console.log(event.target.name)
        let formAlamatNew = {...this.state.formAlamat}
        let timestamp = new Date().getTime();
        formAlamatNew['id'] = timestamp
        formAlamatNew[event.target.name] = event.target.value
        this.setState({
            formAlamat : formAlamatNew
        })
    }

    postData = ()=>{
        Axios.post('http://localhost:62542/v5/dataalamat/postalamat/',
        this.state.formAlamat)
        .then((result)=>{
            console.log(result)
        })
        .catch(err=>{
            console.log('failed in post', err)
        })
    }

    handleSubmit = ()=>{
        alert('Alamat berhasil di simpan!!')
        this.postData()
        this.props.history.push('/pageprofil')
    }

    componentDidMount(){
    }

    render(){

    return(
        <>
        <NavbarPageCard
                linkPage={'/pageprofil'}
                titlePageNav={'Form Alamat'}
            />
        <div className="wrapper-alamat">
                <FormAlamat
                    title={"Jalan"}
                    valueName={"jalan"}
                    placeholder={"Masukkan Nama Jalan Rumah / Blok / No / RT/RW"}
                    fungsiAutoFocus={'autoFocus'}
                    handle={this.handleFormChange}
                />
                <FormAlamat
                    title={"Desa / Kelurahan"}
                    valueName={"desa"}
                    placeholder={"Masukkan Nama Desa / Kelurahan"}
                    handle={this.handleFormChange}
                />
                <FormAlamat
                    title={"kecamatan"}
                    valueName={"kecamatan"}
                    placeholder={"Masukkan Nama Kecamatan"}
                    handle={this.handleFormChange}
                />
                <FormAlamat
                    title={"Kota / Kabupaten"}
                    valueName={"kota"}
                    placeholder={"Masukkan Nama Kota / Kabupaten"}
                    handle={this.handleFormChange}

                />
                <FormAlamat
                    title={"Provinsi"}
                    valueName={"provinsi"}
                    placeholder={"Masukkan Nama Provinsi"}
                    handle={this.handleFormChange}
         
                />
                <FormAlamat
                    title={"Kode Pos"}
                    valueName={"kodePos"}
                    placeholder={"Masukkan Kode Pos"}
                    handle={this.handleFormChange}
                    submit={this.handleSubmit}
                />

                <Link style={{
                    textDecoration: 'none'
                }}
                    onClick={this.handleSubmit}
                 >
                    <BtnCard
                    heightBtn={'50px'}
                    widthBtn={'auto'}
                    btnName={'Simpan Alamat'}
                    marginBtn={'10px'}
                    link={"/pageprofil"}
                    />
               </Link>
        </div>
        </>
    )
}
}

export default withRouter(PageAlamat)