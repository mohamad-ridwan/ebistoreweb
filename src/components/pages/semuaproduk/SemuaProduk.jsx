import React from 'react'
import BoxCard from '../../../componentcard/bocxcard/BoxCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './SemuaProduk.scss'
import img from '../../../img/satu.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'

const SemuaProduk = ()=>{

    const [semuaProduk, setSemuaProduk] = useState([]);

    const GetSemuaProduk = ()=>{
        Axios.get('http://localhost:62542/v2/makaroni/getlimaribu?perPage=8')
        .then(result=>{
            const resAPI = result.data

            setSemuaProduk(resAPI.dataLimaRibu)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        GetSemuaProduk();
    }, [])

    return(
        <>
            <div className="wrapper-semua-produk">
                <NavbarPageCard
                    linkPage={'/'}
                    titlePageNav={'Serba 5rb'}
                />

                <div className="container-all-card">
                    {semuaProduk && semuaProduk.length > 0
                        ? semuaProduk.map(e=>{
                            return(
                                <BoxCard
                                key={e._id}
                                flxDirectWrapp={"column"}
                                heightWrapp={"auto"}
                                widthWrapp={"calc(48%)"}
                                displayNavBtn={"none"}
                                imgProduk={img}
                                label={e.label}
                                nama={e.name}
                                price={`Rp. ${e.price}`}
                                stock={`Stock (${e.stock})`}
                                displayBtnBuy={"none"}
                                bdrRadius={"10px"}
                                mrginWrapp={"5px 5px 10px 0"}
                                paddContent={"10px"}
                                mrgnStock={"5px 0 0px 0"}
                                />
                            )
                        }) :(
                            <div className="wait">FAILED</div>
                        )}
                </div>
            </div>
        </>
    )
}

export default SemuaProduk