import { React, useNavigate } from "react-router-dom"

function Voltar(){
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)}> Voltar </button>
    )
}

export default Voltar;