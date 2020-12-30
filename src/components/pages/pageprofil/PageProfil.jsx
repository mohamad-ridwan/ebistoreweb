import Axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './PageProfil.scss'
import newProfil from '../../../img/newprofil.png'
import KategoriProfil from '../../../componentcard/kategoriprofil/KategoriProfil'
import firebase from 'firebase/app';
import { useContext } from 'react'
import { GetUserLogin } from '../../../config/context/GetUserLogin.jsx'
import Spinner from '../../../componentcard/spinner/Spinner'
import ReactImageUploading from 'react-images-uploading'
import API from '../../../service'
import { UpdateStateContext } from '../../../config/context/updatestate/UpdateState'
import Helmet from '../../../componentcard/helmet/Helmet'

const PageProfil = () => {
    const [update, setUpdate] = useContext(UpdateStateContext)
    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [dataForLoading, setDataForLoading] = useState([])
    const [dataNama, setDataNama] = useState({})
    const [dataNomer, setDataNomer] = useState({})
    const [dataAlamat, setDataAlamat] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [view, setView] = useState(false)

    const getUserLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userId = user.uid
                const emailUser = user.email
                const nameDefault = 'User'
                const nameUser = user.displayName
                const photoUser = user.photoURL
                const sayHi = 'Hi !'

                setGetUser({
                    uid: userId,
                    email: emailUser,
                    hi: sayHi,
                    name: nameUser || emailUser,
                    photo: photoUser || newProfil,
                })

            } else {
                history.push('/login')
                const photoDefault = newProfil
                const nameDefault = 'User'
                const emailDefault = 'Kamu belum memiliki Email yang tercantum'
                setGetUser({
                    photo: photoDefault,
                    name: nameDefault,
                    email: emailDefault,
                })
            }
        })
    }

    const setAllAPI = () => {
        API.APIRealtimeNamaProfile()
            .then((res) => {
                setDataNama(res)
            })
        API.APIRealtimeNomerProfile()
            .then((res) => {
                if (res) {
                    setDataNomer(res)
                }
            })
        API.APIRealtimeAlamatProfile()
            .then((res) => {
                setDataAlamat(res)
            })
    }

    const getAPIForLoading = () => {
        API.APIFirebaseSerbaLimaRibu()
            .then((res) => {
                setDataForLoading(res)
            })
    }

    const history = useHistory()

    const handleLogOut = () => {
        const alert = window.confirm('Log Out?')
        setIsLoading(true)
        if (alert) {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    firebase.auth().signOut().then(function () {
                        history.push('/login')
                        resolve(setIsLoading(false))
                    })
                    reject(setIsLoading(false))
                }, 3000)
            })
            return promise
        } else {
            setIsLoading(false)
        }
    }

    const handleChangeImage = (imageList) => {
        setGetUser({
            imageUpload: imageList
        })
    }

    // console.log(update)
    const toPageNamaProfil = (data) => {
        history.push(`/profil/${data}/nama-profil`)
        const isUpdate = setUpdate(data)
        return isUpdate
    }
    const toPageEmail = (user) => {
        history.push(`/profil/${user}/email`)
    }
    const toPageNomerProfil = (user) => {
        history.push(`/profil/${user}/nomer-profil`)
        const updateNomerUser = setUpdate(user)
        return updateNomerUser
    }
    const toPageAlamat = (user) => {
        history.push(`/profil/${user}/alamat`)
    }

    useEffect(() => {
        getUserLogin()
        setAllAPI()
        getAPIForLoading();
    }, [])

    return (
        <>
            {dataForLoading && dataForLoading.length > 0 ? (
                <>
                    {dataNama && dataNama ? (
                        <Helmet
                            titleHelmet={`Profil | ${dataNama.username} | Ebi Store`}
                            contentHelmet={`halaman profil | ${dataNama.username} | Ebi Strore`}
                        />
                    ) : (
                            <Helmet
                                titleHelmet={`Profil | ${getUser.name || getUser.email} | Ebi Store`}
                                contentHelmet={`halaman profil |${getUser.name || getUser.email} | Ebi Strore`}
                            />
                        )}

                    <div className="wrapp-profil">
                        <NavbarPageCard
                            linkPage={'/'}
                            position={'absolute'}
                            titlePageNav={'Profil Kamu'}
                            transparant={"transparant"}
                            color={"#fff"}
                        />
                        {/* Img Modals */}
                        <div className="box-img-modal"
                            style={{
                                display: view ? 'flex' : 'none'
                            }}
                        >
                            <i className="fas fa-times btnClose"
                                onClick={() => {
                                    setView(!view)
                                }}
                            ></i>
                            <div className="box-circle-img">
                                <i className="fas fa-camera"
                                    onClick={handleChangeImage}
                                ></i>
                                <img src={getUser.photo} alt="" className="img-modal"
                                />
                            </div>
                        </div>
                        {/* END Img Modals */}
                        <div className="box-white-profile">
                            {/* Box orange */}
                            <div className="box-orange">
                                {dataNama && dataNama ? (
                                    <p className="name-profil">
                                        {'Hi !'}
                                        <br />
                                        {dataNama.username}
                                    </p>
                                ) : (
                                        <p className="name-profil">
                                            {'Hi !'}
                                            <br />
                                            {getUser.name || getUser.email}
                                        </p>
                                    )}

                                {/* <ReactImageUploading
                                    multiple
                                    value={getUser.imageUpload}
                                    onChange={handleChangeImage}
                                    dataURLKey="data_url"
                                >
                                    {({
                                        imageList,
                                        onImageUpload
                                    }) => (
                                        <>
                                            {imageList.map((image, index) => (
                                                <img src={getUser.photo} alt="" className="img-profil" />
                                            ))}

                                        </>
                                    )}
                                </ReactImageUploading> */}

                                <img src={getUser.photo} alt="" className="img-profil" />

                            </div>
                            {/* end box orange */}

                            <div className="box-kategori">
                                {dataNama && dataNama ? (
                                    <KategoriProfil
                                        onClick={() => toPageNamaProfil(dataNama.username)}
                                        linkKategori={'link-kategori'}
                                        icon={'fas fa-user-tie'}
                                        title={'Nama'}
                                        deskripsi={dataNama.username}
                                    />
                                ) : (
                                        <KategoriProfil
                                            onClick={() => toPageNamaProfil(getUser.name || getUser.email)}
                                            linkKategori={'link-kategori'}
                                            icon={'fas fa-user-tie'}
                                            title={'Nama'}
                                            deskripsi={getUser.name}
                                        />
                                    )}

                                <KategoriProfil
                                    onClick={() => toPageEmail(getUser.name || getUser.email)}
                                    linkKategori={'link-kategori'}
                                    icon={'fas fa-envelope'}
                                    title={'Email'}
                                    deskripsi={getUser.email}
                                />

                                {dataNomer.phoneUser && dataNomer.phoneUser ? (
                                    <KategoriProfil
                                        onClick={() => toPageNomerProfil(dataNomer.phoneUser.phoneUser)}
                                        linkKategori={'link-kategori'}
                                        icon={'fas fa-mobile'}
                                        title={'No Hp.'}
                                        deskripsi={dataNomer.phoneUser.phoneUser}
                                    />
                                ) : (
                                        <KategoriProfil
                                            onClick={() => toPageNomerProfil(getUser.name || getUser.email)}
                                            linkKategori={'link-kategori'}
                                            icon={'fas fa-mobile'}
                                            title={'No Hp.'}
                                            deskripsi={'Kamu belum memiliki nomer hp yang tercantum'}
                                        />
                                    )}

                                {dataAlamat && dataAlamat ? (
                                    <KategoriProfil
                                        onClick={() => toPageAlamat()}
                                        linkKategori={'link-kategori'}
                                        icon={'fas fa-home'}
                                        title={'Alamat'}
                                        alamat={dataAlamat.alamat}
                                        kota={dataAlamat.kota}
                                        kodePos={dataAlamat.kodePos}
                                        namaPenerima={dataAlamat.namaPenerima}
                                    />
                                ) : (
                                        <KategoriProfil
                                            onClick={() => toPageAlamat(getUser.name || getUser.email)}
                                            linkKategori={'link-kategori'}
                                            icon={'fas fa-home'}
                                            title={'Alamat'}
                                            deskripsi={"Kamu belum memiliki alamat yang tercantum"}
                                        />
                                    )}
                            </div>
                        </div>

                        <BtnCard
                            heightBtn={'45px'}
                            widthBtn={'auto'}
                            btnName={'Log Out'}
                            marginBtn={'10px 20px 20px 20px'}
                            bdrRadius={"100px"}
                            bgColor={"#ffa835"}
                            colorP={"#fff6eb"}
                            fontWeight={"bold"}
                            bxShadow={"0px 5px 15px -5px #ffa835"}
                            goTo={handleLogOut}
                            loading={isLoading}
                        />


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

export default PageProfil