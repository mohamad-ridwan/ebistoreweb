const { default: ServiceProvider } = require("./Serviceapi_Context")

const ContextWrapper = ({ children }) => {
    return (
        <ServiceProvider>
            {children}
        </ServiceProvider>
    )
}

export default ContextWrapper