import Axios from 'axios'
import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageAlamat.scss'

class PageAlamat extends Component {

    state = {
        formInput : {
            id : 1,
            jalan: '',
            desa: '',
            kecamatan : '',
            kota: '',
            provinsi: '',
            kodePos: '',
            userId: 1
        }
    }

    postAlamatAPI = ()=>{
        Axios.post('http://localhost:3004/alamat', this.state.formInput)
        .then((result)=>{
            console.log('success!!', result)
        }, (err)=>{
            console.log(err)
        })
    }

    handleFormChange = (event)=>{
        let formInputNew = {...this.state.formInput};
        let timestamp = new Date().getTime();
        formInputNew['id'] = timestamp;
        formInputNew[event.target.name] = event.target.value

        this.setState({
            formInput: formInputNew
        })
    }

    handleSubmit = ()=>{
        this.postAlamatAPI();
        alert('Data Berhasil Tersimpan!')
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
            <label htmlFor="" className="labelGroup">
                Jalan / Komplek / Kampung
            </label>
            <input type="text" name="jalan" className="inputGroup"
                placeholder='Masukkan Nama Jalan'
                autoFocus
                onChange={this.handleFormChange}
                />
            <label htmlFor="" className="labelGroup">
                Desa / Kelurahan
            </label>
            <input type="text" name="desa" className="inputGroup"
                placeholder='Masukkan Nama Desa atau Kelurahan'
                onChange={this.handleFormChange}
                />
            <label htmlFor="" className="labelGroup">
                Kecamatan
            </label>
            <input type="text" name="kecamatan" className="inputGroup"
                placeholder='Masukkan Nama Kecamatan'
                onChange={this.handleFormChange}
                />
            <label htmlFor="" className="labelGroup">
                Kota / Kabupaten
            </label>
            <input type="text" name="kota" className="inputGroup"
                placeholder='Masukkan Nama Kota / Kabupaten'
                onChange={this.handleFormChange}
                />
            <label htmlFor="" className="labelGroup">
                Provinsi
            </label>
            <input type="text" name="provinsi" className="inputGroup"
                placeholder='Masukkan Nama Provinsi'
                onChange={this.handleFormChange}
                />
            <label htmlFor="" className="labelGroup">
                Kode Pos
            </label>
            <input type="text" name="kodePos" className="inputGroup"
                placeholder='Masukkan Kode Pos'
                onChange={this.handleFormChange}
                />

                <Link style={{
                    textDecoration: 'none'
                }} onClick={this.handleSubmit}>
                    <BtnCard
                    heightBtn={'50px'}
                    widthBtn={'auto'}
                    btnName={'Simpan Alamat'}
                    marginBtn={'10px 0'}
                    link={'/pageprofil'}
                    />
               </Link>
               
            </form>
        </div>
        </>
    )
}
}

export default PageAlamat