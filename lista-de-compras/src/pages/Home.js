import { Link } from "react-router-dom";

const Home = () => {
    return <>
        
        <div class="container">
        
            <h3> Lista de Compras </h3>
            
            <Link to="./nova-lista">
                <button className="w3-button w3-orange w3-round-xlarge"> Criar Nova Lista </button>    
            </Link>             
        </div>
    </>
};
  
export default Home;