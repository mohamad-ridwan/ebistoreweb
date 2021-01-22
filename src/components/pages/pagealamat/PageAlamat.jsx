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
import PopUp from '../../../componentcard/popup/PopUp'
import Spinner from '../../../componentcard/spinner/Spinner'

const PageAlamat = () => {

    const [getUser, setGetUser, updateAlamat, setUpdateAlamat] = useContext(GetUserLogin)
    const [dataNama, setDataNama] = useState({})
    const [loading, setLoading] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [loadingPage, setLoadingPage] = useState([])
    const [dataAlamat, setDataAlamat] = useState({
        alamat: `${updateAlamat.alamat}`,
        kota: `${updateAlamat.kota}`,
        kodePos: `${updateAlamat.kodePos}`,
        nomerHp: `${updateAlamat.nomerHp}`,
        namaPenerima: `${updateAlamat.namaPenerima}`
    })

    const handleChange = (e) => {
        const newDataAlamat = { ...dataAlamat }
        newDataAlamat[e.target.name] = e.target.value
        setDataAlamat(newDataAlamat)
    }

    const handleSubmit = (e) => {
        const windowConfirm = window.confirm('Simpan alamat kamu?')
        if (windowConfirm) {
            setLoading(true)
            const { alamat, kota, kodePos, nomerHp, namaPenerima } = dataAlamat
            const userData = JSON.parse(localStorage.getItem('userData'))
            const data = {
                alamat: alamat,
                kota: kota,
                kodePos: kodePos,
                nomerHp: nomerHp,
                namaPenerima: namaPenerima,
                uid: userData.uid
            }
            if (API.APIRealtimePostAlamat(data)) {
                setTimeout(() => {
                    setLoading(false)
                    setPopUp(true)
                }, 2000)
                setInterval(() => {
                    setPopUp(false)
                }, 3000)
            }
        }
        e.preventDefault()
    }

    const history = useHistory()

    const toProfil = function (user) {
        const getEmail = window.location.pathname.split('/profil/').join('').split('/alamat').join('').split(`-${getUser.email}`).join('')
        // getName, get for {getUser.name}
        const getName = window.location.pathname.split('/profil/').join('').split('/alamat').join('').split('%20').join('').split('-', [1]).join('')
        const getNameTwo = window.location.pathname.split('/profil/').join('').split('/alamat').join('').split(`-${dataNama.username}`).join('')
        const getUsername = window.location.pathname.split('/profil/').join('').split('/alamat').join('').split('%20').join(' ')
        if (user === getUsername) {
            history.push(`/profil/${user}`)
        } else {
            history.push(`/detail-produk/transaksi/${getName || getEmail}`)
        }
    }

    const getAllAPI = () => {
        API.APIRealtimeNamaProfile()
            .then((res) => {
                setDataNama(res)
            })
        API.APIRealtimeAlamatProfile()
            .then((res) => {
                if (res) {
                    loadingPage.push(res)
                    setDataAlamat({
                        alamat: `${res.alamat}`,
                        kota: `${res.kota}`,
                        kodePos: `${res.kodePos}`,
                        nomerHp: `${res.nomerHp}`,
                        namaPenerima: `${res.namaPenerima}`
                    })
                }
            })
    }

    const getFirebase = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const nameUser = user.displayName
                const emailUser = user.email

                setGetUser({
                    name: nameUser,
                    email: emailUser
                })
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
            {loadingPage && loadingPage.length > 0 ? (
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
                                fungsiAutoFocus={'autoFocus'}
                                type={'text'}
                                title={"Nama Penerima"}
                                valueName={"namaPenerima"}
                                placeholder={"Masukkan Nama Penerima"}
                                valueDefault={dataAlamat.namaPenerima}
                                handle={handleChange}
                            />
                            <FormAlamat
                                type={'number'}
                                title={"Nomor Telepon Penerima"}
                                valueName={"nomerHp"}
                                placeholder={"Masukkan Nomer Telepon Penerima"}
                                valueDefault={dataAlamat.nomerHp}
                                handle={handleChange}
                            />
                            <FormAlamat
                                type={'text'}
                                title={"Alamat"}
                                valueName={"alamat"}
                                placeholder={"Masukkan Nama Jalan Rumah / Blok / No / RT/RW"}
                                valueDefault={dataAlamat.alamat}
                                handle={handleChange}
                            />
                            <FormAlamat
                                type={'text'}
                                title={"Kota atau Kecamatan"}
                                valueName={"kota"}
                                placeholder={"Masukkan Kota / Kecamatan"}
                                valueDefault={dataAlamat.kota}
                                handle={handleChange}
                            />
                            <FormAlamat
                                type={'number'}
                                title={"Kode Pos"}
                                valueName={"kodePos"}
                                placeholder={"Masukkan Kode Pos"}
                                valueDefault={dataAlamat.kodePos}
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
                                    heightBtn={'40px'}
                                    widthBtn={'auto'}
                                    btnName={'Simpan Alamat'}
                                    marginBtn={'10px'}
                                    bdrRadius={"100px"}
                                    bgColor={"#ffa835"}
                                    colorP={"#fff"}
                                    fontWeight={"bold"}
                                    bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                                    loading={loading}
                                />

                                <PopUp
                                    transformPopUp={popUp ? 'translateY(0px)' : 'translateY(100px)'}
                                    txtPopUp={'Alamat telah di simpan!'} />
                            </Link>
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


export default withRouter(PageAlamat)