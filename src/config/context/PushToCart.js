import Axios from 'axios';
import React, { createContext } from 'react'
import { Component } from 'react';
import { withRouter } from 'react-router-dom'

export const PushToCartContext = createContext();

class PushToCartProvider extends Component {

    state = {
        post: [
            {
                _id: '',
                name: '',
                price: '',
                stock: '',
                deskripsi: '',
                image: '',
            }
        ],
        cart: []
    }

    // componentDidMount() {
    //     const id = this.props.match.params.id
    //     Axios.get(`http://localhost:6235/v8/makaroni/getall/${id}`)
    //         .then(result => {
    //             let post = result.data
    //             // Agar bisa mendapatkan data yg masuk
    //             // Ganti data yg masuk dengan data yg baru
    //             this.setState({
    //                 post: [
    //                     {
    //                         _id: post._id,
    //                         name: post.name,
    //                         price: post.price,
    //                         stock: post.stock,
    //                         deskripsi: post.deskripsi,
    //                         image: post.image
    //                     }
    //                 ]
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    render() {
        const { post, cart } = this.state;
        return (
            <PushToCartContext.Provider value={{ post, cart }}>
                {this.props.children}
            </PushToCartContext.Provider>
        )
    }
}

export default PushToCartProvider