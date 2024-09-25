import React from 'react'
import { withStorageListener } from './withStorageListener'
import './changeAlert.css'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Parace que han cambiado tus TODOs en otra pestaña o ventana de tu navegador</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button className='TodoForm-button TodoForm-button--add'
                        onClick={() => toggleShow(false)}>Yes!
                    </button>
                </div>
            </div>
        )

    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
export { ChangeAlertWithStorageListener }