import React from 'react'

function withStorageListener(WrappedComponent) {
    console.log('entro')
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)
        window.addEventListener('storage', (change) => {
            if (change.key === 'Todo_v1') {
                setStorageChange(true)
            }
        })

        const toggleShowq = () => {
            console.log(props)
            props.sincronize()
            setStorageChange(false)
        }

        return <WrappedComponent
            show={storageChange}
            toggleShow={toggleShowq} />
    }
}

export { withStorageListener }