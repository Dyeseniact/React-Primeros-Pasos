import React from 'react'
import PropTypes from 'prop-types'

//Las props son propiedades que pasan a la funcion de mi componente

export const TercerComponente = ({nombre, apellidos, ficha}) => {
    //console.log(props);
    return (
        <div>
            <h1>Cumunicación entre componentes</h1>

            <ul>
                <li>{nombre}</li>
                <li>{apellidos}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.estado}</li>
            </ul>

        </div>
    )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: "Yesenia",
    apellidos: "Tenorio"
}
