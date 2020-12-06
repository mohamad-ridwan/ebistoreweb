import Axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const ContextService = createContext()

const ContextProvider = ({ children }) => {

    const [getData, setGetData] = useState()

    useEffect(() => {
        Axios.get('http://localhost:6235/v8/makaroni/getall')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <ContextService.Provider value={[getData, setGetData]}>
            {children}
        </ContextService.Provider>
    )
}

export default ContextProvider