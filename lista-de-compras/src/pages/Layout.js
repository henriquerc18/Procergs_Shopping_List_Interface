import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
    <header>
      <div id="cabecalho">
        <img src="img/menor_preco_logo.png" alt="Logo do Menor Preço" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nova-lista"> Nova Lista </Link>
          </li>
          <li>
            <Link to="/pesquisar-melhor-local-de-compra"> Pesquisar Melhor Local de Compra </Link>
          </li>
        </ul>
      </nav>
    </header>
    
    <Outlet />
    
    <main>
        <div className="container">        
        <footer> 
            <h1> Footer </h1>
        </footer>
        </div>
    </main>
      
    </>
  )
};

export default Layout;