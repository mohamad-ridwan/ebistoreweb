import Axios from 'axios';
import React, { Component } from 'react'

export const ServiceContext = React.createContext();

export class ServiceProvider extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        Axios.get('http://localhost:6235/v8/makaroni/getall')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { data } = this.state;
        return (
            <ServiceContext.Provider value={{ data }}>
                {this.props.children}
            </ServiceContext.Provider>
        )

    }
}