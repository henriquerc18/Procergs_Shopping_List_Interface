import { React, useNavigate } from "react-router-dom"

function Voltar(){
    const navigate = useNavigate();
    return (
        <>
            <br/>
            <button className="w3-button w3-orange w3-round-xlarge w3-small" onClick={() => navigate(-1)}> Voltar </button>
        </>
    )
}

export default Voltar;