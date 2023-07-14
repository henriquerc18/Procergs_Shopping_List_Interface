import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Voltar from "../components/Voltar";


const Layout = () => {
  
  return (
    <>
    <header>
      <div id="cabecalho">
        <img src="./menor_preco_logo.png" alt="Logo do Menor Preço" />
      </div>
      <nav>
        <ul>          
          <li>
            <Link to="/"> Home </Link>
          </li>
          
        </ul>
      </nav>
    </header>
    
    <Voltar></Voltar>
    <Outlet />
    
    <main>
               
        <footer> 
          
        </footer>
        
    </main>
      
    </>
  )
};

export default Layout;