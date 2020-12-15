import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BtnCard from '../../../componentcard/btncard/BtnCard'
import NavbarPageCard from '../../../componentcard/navbarpagecard/NavbarPageCard'
import './NamaProfil.scss'
import firebase from 'firebase/app';
import Helmet from '../../../componentcard/helmet/Helmet'
// import Helmet from 'react-helmet'

const NamaProfil = () => {

    const [getUser, setGetUser] = useState({
        data: {
            name: '',
            email: ''
        }
    })

    const handleChangeName = (event) => {
        // history.push('/pageprofil')
        const newGetUser = { ...getUser.data }
        newGetUser[event.target.name] = event.target.value
        // const nameNew = event.target.value
        // const emailNew = event.target.value
        console.log(newGetUser)
        setGetUser({
            data: newGetUser
        })

    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const nameUser = user.displayName
                const emailUser = user.email

                // Change Data User yg masuk
                setGetUser({
                    data: {
                        name: nameUser,
                        email: emailUser,
                    }
                })
            } else {
                // Data Default Jika User tidak login
                const nameDefault = 'Profil Saya'
                const emailDefault = 'Kamu belum memiliki Email yang tercantum'

                // Change Data Untuk data default
                setGetUser({
                    data: {
                        name: nameDefault,
                        email: emailDefault,
                    }
                })
            }
        });
    }, [])

    return (
        <>
            <Helmet
                titleHelmet={'Nama Profil | Ebi Store'}
                contentHelmet={'halaman rubah nama profil | Ebi Store'}
            />
            <NavbarPageCard
                linkPage={'/profil'}
                position={'absolute'}
                titlePageNav={'Rubah Nama'}
                transparant={"transparant"}
                color={"#fff"}
            />
            <div className="wrapper-namaProfil">
                <div className="box-input-nama">
                    <label htmlFor="label" className="name">
                        {getUser.data.name || getUser.data.email}
                    </label>
                    <input type="text" className="input-nama" autoFocus name="name" value={getUser.data.name || getUser.data.email}
                        onChange={handleChangeName}
                    />

                    <BtnCard
                        heightBtn={'45px'}
                        widthBtn={'100%'}
                        btnName={'Simpan Nama'}
                        marginBtn={'20px 0px 20px 0px'}
                        bdrRadius={"100px"}
                        bgColor={"#fff"}
                        colorP={"#ffa835"}
                        fontWeight={"bold"}
                        bxShadow={"0 3px 9px -1px rgba(0,0,0,0.2)"}
                        goTo={handleChangeName}
                    />
                </div>
            </div>
        </>
    )
}

export default NamaProfil