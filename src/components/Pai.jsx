import React from "react";
import FIlho from "./FIlho";

export default props => {
    const notificarSaidaDoFilho = 
        lugar => alert(`Liberado para ${lugar}`)
    return (
        <div>
            <FIlho notificarSaida={notificarSaidaDoFilho} />
        </div>
    )
}