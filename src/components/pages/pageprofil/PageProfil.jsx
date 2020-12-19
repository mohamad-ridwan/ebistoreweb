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
import { ChangeNumberPhone } from '../../../config/context/ChangeNumberPhone'
import { GetNumberPhone } from '../../../config/context/GetNumberPhone'
import Helmet from '../../../componentcard/helmet/Helmet'
import Spinner from '../../../componentcard/spinner/Spinner'
import ReactImageUploading from 'react-images-uploading'
import { GetAPIFirebaseContext } from '../../../config/context/GetAPIFirebase'
import { GetNomerUserContext } from '../../../config/context/nomerhp/GetNomerUser'
import API from '../../../service'
import { GetNamaUserContext } from '../../../config/context/namauser/GetNamaUser'

const PageProfil = () => {
    const [dataNama] = useContext(GetNamaUserContext)
    const [dataNomer, setDataNomer] = useContext(GetNomerUserContext)
    const [alamat, setAlamat] = useState([])
    const [getUser, setGetUser] = useContext(GetUserLogin)
    const [view, setView] = useState(false)
    let [notes, setNotes, dataUser] = useContext(GetAPIFirebaseContext)

    const getAlamat = () => {
        Axios.get('http://localhost:6235/v5/dataalamat/getalamat')
            .then(result => {
                const response = result.data

                setAlamat(response.dataAlamat)
            })
            .catch(err => {
                console.log('error', err)
            })
    }

    const history = useHistory()

    const handleLogOut = () => {
        const alert = window.confirm('Log Out?')
        if (alert) {
            firebase.auth().signOut().then(function () {
                // alert('Berhasil Log Out')
                history.push('/login')
            })
                .catch(function (error) {
                    console.log(error)
                    // alert('gagal Log Out' + ' ' + 'Error: 404', error)
                });
        }
    }

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

    const handleChangeImage = (imageList) => {
        setGetUser({
            imageUpload: imageList
        })
    }

    const toPageNamaProfil = (user) => {
        history.push(`/profil/${user}/nama-profil`)
    }
    const toPageEmail = (user) => {
        history.push(`/profil/${user}/email`)
    }
    const toPageNomerProfil = (user) => {
        history.push(`/profil/${user}/nomer-profil`)
    }
    const toPageAlamat = (user) => {
        history.push(`/profil/${user}/alamat`)
    }

    useEffect(() => {
        getUserLogin()
        getAlamat();
    }, [])

    return (
        <>
            {dataNomer.data && dataNomer.data.length > 0 ? (
                <>
                    {dataNama.data && dataNama.data.length > 0 ?
                        dataNama.data.map(e => {
                            return (
                                <Helmet
                                    key={e.id}
                                    titleHelmet={`Profil | ${e.data.username} | Ebi Store`}
                                    contentHelmet={`halaman profil |${e.data.username} | Ebi Strore`}
                                />
                            )
                        }) : (
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
                                {dataNama.data && dataNama.data.length > 0 ?
                                    dataNama.data.map(e => {
                                        return (
                                            <p className="name-profil">
                                                {'Hi !'}
                                                <br />
                                                {e.data.username}
                                            </p>
                                        )
                                    }) : (
                                        <p className="name-profil">
                                            {'Hi !'}
                                            <br />
                                            {getUser.name || getUser.email}
                                        </p>
                                    )}

                                <ReactImageUploading
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
                                </ReactImageUploading>

                            </div>
                            {/* end box orange */}

                            <div className="box-kategori">
                                {dataNama.data && dataNama.data.length > 0 ?
                                    dataNama.data.map(e => {
                                        return (
                                            <KategoriProfil
                                                key={e.id}
                                                onClick={() => toPageNamaProfil(e.data.username)}
                                                linkKategori={'link-kategori'}
                                                icon={'fas fa-user-tie'}
                                                title={'Nama'}
                                                deskripsi={e.data.username}
                                            />
                                        )
                                    }) : (
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

                                {dataNomer.data && dataNomer.data.length > 0
                                    ? dataNomer.data.map(e => {
                                        return (
                                            <KategoriProfil
                                                onClick={() => toPageNomerProfil()}
                                                key={e.id}
                                                linkKategori={'link-kategori'}
                                                icon={'fas fa-mobile'}
                                                title={'No Hp.'}
                                                deskripsi={e.data.phoneUser.phoneUser}
                                            />
                                        )
                                    }) : (
                                        <KategoriProfil
                                            onClick={() => toPageNomerProfil(getUser.name || getUser.email)}
                                            linkKategori={'link-kategori'}
                                            icon={'fas fa-mobile'}
                                            title={'No Hp.'}
                                            deskripsi={'Kamu belum memiliki nomer hp yang tercantum'}
                                        />
                                    )}

                                {notes.newData && notes.newData.length > 0 ?
                                    notes.newData.map(e => {
                                        return (
                                            <>
                                                <KategoriProfil
                                                    key={e.id}
                                                    onClick={() => toPageAlamat(getUser.name || getUser.email)}
                                                    linkKategori={'link-kategori'}
                                                    icon={'fas fa-home'}
                                                    title={'Alamat'}
                                                    alamat={e.data.alamat}
                                                    kota={e.data.kota}
                                                    kodePos={e.data.kodePos}
                                                    namaPenerima={e.data.namaPenerima}
                                                />
                                            </>
                                        )
                                    }) : (
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