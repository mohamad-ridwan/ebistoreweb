import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import FormAlamat from '../../../componentcard/formalamat/FormAlamat'
import Helmet from '../../../componentcard/helmet/Helmet'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import API from '../../../service'
import firebase from 'firebase/app';
import './PageAlamat.scss'
import { GetUserLogin } from '../../../config/context/GetUserLogin'
import { UpdateAlamatContext } from '../../../config/context/updatestate/UpdateAlamat'

const PageAlamat = () => {

    const [updateAlamat, setUpdateAlamat] = useContext(UpdateAlamatContext)
    const [dataNama, setDataNama] = useState({})
    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [dataAlamat, setDataAlamat] = useState({
        alamat: '',
        kota: '',
        kodePos: '',
        namaPenerima: ''
    })

    const handleChange = (e) => {
        const newDataAlamat = { ...dataAlamat }
        newDataAlamat[e.target.name] = e.target.value
        setDataAlamat(newDataAlamat)
    }

    const handleSubmit = () => {
        const windowConfirm = window.confirm('Simpan alamat kamu?')
        if (windowConfirm) {
            const { alamat, kota, kodePos, namaPenerima } = dataAlamat
            const userData = JSON.parse(localStorage.getItem('userData'))
            const data = {
                alamat: alamat,
                kota: kota,
                kodePos: kodePos,
                namaPenerima: namaPenerima,
                date: new Date().getTime(),
                uid: userData.uid
            }
            API.APIRealtimePostAlamat(data, getUser.uid)
            alert('Berhasil tersimpan')
        }
    }

    const history = useHistory()

    const toProfil = (user) => {
        history.push(`/profil/${user}`)
    }

    const getAllAPI = () => {
        API.APIRealtimeNamaProfile()
            .then((res) => {
                setDataNama(res)
            })
    }

    const getFirebase = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const nameUser = user.displayName
                const emailUser = user.email

                // setGetUser({
                //     name: nameUser,
                //     email: emailUser
                // })
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getAllAPI()
        getFirebase();
    }, [])

    return (
        <>
            {dataNama && dataNama ?
                (
                    <Helmet
                        titleHelmet={`Alamat | ${dataNama.username} | Ebi Store`}
                        contentHelmet={`halaman form alamat | ${dataNama.username} | Ebi Store`}
                    />
                ) : (
                    <Helmet
                        titleHelmet={`Alamat | ${getUser.name || getUser.email} | Ebi Store`}
                        contentHelmet={`halaman form alamat | ${getUser.name || getUser.email} | Ebi Store`}
                    />
                )}

            <NavbarPageCard
                backPage={() => toProfil(getUser.name || getUser.email)}
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
                        valueDefault={updateAlamat.alamat}
                        handle={handleChange}
                    />
                    <FormAlamat
                        title={"Kota atau Kecamatan"}
                        valueName={"kota"}
                        placeholder={"Masukkan Kota / Kecamatan"}
                        valueDefault={updateAlamat.kota}
                        handle={handleChange}
                    />
                    <FormAlamat
                        title={"Kode Pos"}
                        valueName={"kodePos"}
                        placeholder={"Masukkan Kode Pos"}
                        valueDefault={updateAlamat.kodePos}
                        handle={handleChange}
                    />
                    <FormAlamat
                        title={"Nama Penerima"}
                        valueName={"namaPenerima"}
                        placeholder={"Masukkan Nama Penerima"}
                        valueDefault={updateAlamat.namaPenerima}
                        handle={handleChange}
                        submit={handleSubmit}
                    />

                    <Link style={{
                        textDecoration: 'none',
                        overflow: 'hidden'
                    }}
                        onClick={handleSubmit}
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


export default withRouter(PageAlamat)