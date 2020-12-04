import Axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const ServiceContext = createContext()

const ServiceProvider = ({ children }) => {

    const [getData, setGetData] = useState()

    useEffect(() => {
        Axios.get('http://localhost:6235/v8/makaroni/getall')
            .then(res => {
                console.log(res)
                const respon = res.data

                setGetData(respon.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <ServiceContext.Provider value={[getData, setGetData]}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceProvider