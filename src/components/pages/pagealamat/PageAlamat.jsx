import Axios from 'axios'
import { action, createStore } from 'easy-peasy'
import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import FormAlamat from '../../../componentcard/formalamat/FormAlamat'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageAlamat.scss'

class PageAlamat extends Component {

    state = {
        dataAlamat : {
            id : 1,
            jalan: '',
            desa: '',
            kecamatan : '',
            kota: '',
            provinsi: '',
            kodePos: '',
            userId: 1
        },
        isUpdate: false
    }

    // POST alamat API
    postAlamatAPI = ()=>{
        Axios.post(`http://localhost:62542/v5/dataalamat/postalamat/`, this.state.dataAlamat)
        .then((result)=>{
            this.setState({
                dataAlamat: result
            })
        }, (err)=>{
            console.log('data failed in post' ,err)
        })
    }

    handleFormChange = (event)=>{
        let dataAlamatNew = {...this.state.dataAlamat};
        let timestamp = new Date().getTime();
        dataAlamatNew['id'] = timestamp;
        dataAlamatNew[event.target.name] = event.target.value

        this.setState({
            dataAlamat: dataAlamatNew
        })
    }

    handleUpdate = (data)=>{
        this.setState({
            dataAlamat : data,
            isUpdate: true
        })
    }

    handleSubmit = ()=>{
        alert('Data Berhasil Tersimpan!')
        this.postAlamatAPI();
    }

    componentDidMount(){
    }

    render(){

    return(
        <>
        <div className="wrapper-alamat">
            <NavbarPageCard
                linkPage={'/pageprofil'}
                titlePageNav={'Form Alamat'}
            />

            <form action="" className="form-alamat"
                onSubmit={this.handleFormChange}
            >
            
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
                />

                <Link style={{
                    textDecoration: 'none'
                }} onClick={this.handleSubmit}>
                    <BtnCard
                    heightBtn={'50px'}
                    widthBtn={'auto'}
                    btnName={'Simpan Alamat'}
                    marginBtn={'10px 0'}
                    link={"/pageprofil"}
                    />
               </Link>
               
            </form>
        </div>
        </>
    )
}
}

export default PageAlamat