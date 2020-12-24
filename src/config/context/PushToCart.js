import Axios from 'axios';
import React, { createContext } from 'react'
import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import API from '../../service';
import { cloudFirestore } from '../firebase';

export const PushToCartContext = createContext();

class PushToCartProvider extends Component {

    state = {
        cart: {}
    }

    addToCart = (cart) => {
        const newData = this.state.cart

        this.setState((prevState) => ({ cart }))
    }

    // componentDidMount() {
    //     console.log(this.state.cart)
    // }

    render() {
        const { cart } = this.state;
        const { addToCart } = this;
        return (
            <PushToCartContext.Provider value={{ cart, addToCart }}>
                {this.props.children}
            </PushToCartContext.Provider>
        )
    }
}

export default PushToCartProvider