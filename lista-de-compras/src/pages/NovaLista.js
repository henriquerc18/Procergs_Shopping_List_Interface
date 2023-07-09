import './NovaLista.css'

const NovaLista = () => {
    return <>
        <h1> Nova Lista </h1>
        <form>
            <label>
                Name:
                <input type="text" name="name" placeholder="Digite o nome da sua lista" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </>
};
  
export default NovaLista;