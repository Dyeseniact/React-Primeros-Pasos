import React from 'react'

export const EventoComponente = () => {
    const hasDadoClick = (e, nombre) => {
        alert("Has Dado Click" + nombre);
    }

    function hasDadoDobleClick(e) {
        alert("Has Dado Doble Click");
    }
    const hasEntrado = (e, accion) => {
        alert(`Has ${accion} a la caja con el mouse`);
    }

    const hasSalido = (e, accion) => {
        alert(`Has ${accion} a la caja con el mouse`);
    }
    const estasDentro = e => {
        console.log("Estas dentro del inputl, mete tu nombre");
    }
    const estasFuera = e => {
        console.log("Estas fuera del inputl, mete tu nombre");
    }

    return (
        <div>
            <h1>Eventos en React</h1>
            <p>
                {/*Evento Click */}
                <button onClick={e => hasDadoClick(e, " Yesenia")}>Dame click!</button>
            </p>

            <p>
                {/*Evento Doble Click */}
                <button onDoubleClick={hasDadoDobleClick}>Dame doble click!</button>
            </p>

            <div id="caja"
                onMouseEnter={e => hasEntrado(e, "entrado")}
                onMouseLeave={e => hasSalido(e, "salido")}>
                {/*Evento Mouse Enter y leave*/}
                Pasa por encima
            </div>
            <p>
                {/*Evento focus y blur*/}
                <input type='text' onFocus={estasDentro}  
                onBlur={estasFuera}
                placeholder='Introduce tu nombre'/>
            </p>
        </div>
    )
}
