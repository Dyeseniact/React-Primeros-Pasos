//Importar modulos de react o dependencias
import React, {Fragment} from "react";

// Función de componentes -> Un componente es cada seccion de la pagina
const MiComponente = () => {

    //const nombre = "Yesenia";
    let web = "camposdyes.web";
    let usuario = {
        nombre: "Yesenia",
        apellidos: "Campos",
        web: "camposdyes.web"
    }

    //console.log(usuario);

    return (
        <Fragment>
            <hr/>
            <h2>Componente creado</h2>
            <h3>Datos de usuario:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellido: <strong>{usuario.apellidos}</strong></li>
                <li>Web: <strong>{web}</strong></li>
                <li>Usuario: <strong>{JSON.stringify(usuario)}</strong></li>
            </ul>
            <p> Este es mi primer componente </p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
            

        </Fragment>
    );
};

// Export 

export default MiComponente;