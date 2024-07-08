import React from "react";
import {Link} from "react-router-dom"
 const Enlaces = () => {
     
    return(
        <nav>
            <Link to="/Login">Iniciar</Link> | <Link to="/Register">Registarse</Link>
        </nav>
    )
 }

 export default Enlaces