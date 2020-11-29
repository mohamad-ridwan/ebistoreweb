import Axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alamat from '../../../componentcard/alamat/Alamat'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageProfil.scss'

const PageProfil =()=>{

    const [alamat, setAlamat] = useState([])

    const getAlamat = ()=>{
        Axios.get('http://localhost:62542/v5/dataalamat/getalamat')
        .then(result=>{
            const response = result.data

            setAlamat(response.dataAlamat)
        })
        .catch(err=>{
            console.log('error', err)
        })
    }
    
    const handleRemove = (data)=>{
        Axios.delete(`http://localhost:62542/v5/dataalamat/postalamat/${data}`)
        .then(result=>{
            const res = result.data
            setAlamat(res)

            getAlamat()
            alert('Data Berhasil Di Delete!')
        })
        .catch(err=>{
            console.log('error', err)
        })
    }

    // delete post alamat

    // end delete post alamat

    // const addTodo = useStoreActions((actions)=> actions.addTodo);
    // const [value, setValue] = React.useState();

    useEffect(()=>{
        getAlamat();
    })

    return(
        <>
        <div className="wrapp-profil">
            <NavbarPageCard
                linkPage={'/'}
                titlePageNav={'Profil Kamu'}
            />

            <div className="box-profil">

            </div>

            {/* box alamat */}
            <div className="box-alamat">
                <p className="title-alamat">
                    Alamat Kamu :
                </p>
                    {alamat && alamat.length > 0
                    ? alamat.map(e=>{
                        return(
                            <>
                            <Alamat
                                data={e}
                                key={e._id}
                                remove={handleRemove}
                            />
                            </>
                        )
                    }) : (
                        <div className="box-input-alamat">
                        <p className="deskripsi">
                            Kamu belum mengisi alamat kamu,
                            <br/>
                            Silahkan isi alamat kamu untuk mempermudah transaksi kamu
                        </p>

                        <BtnCard
                            link='/pagealamat'
                            heightBtn={'30px'}
                            widthBtn={'100px'}
                            marginBtn={'20px 0 0 0'}
                            btnName={'Isi Alamat'}
                            paddName={'5px'}
                        />
                    </div> 
                    )}
            </div>
            {/* end box alamat */}
        </div>
        </>
    )
}

export default PageProfil