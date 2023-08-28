import './App.css';
import './styles/variables.css';
import './styles/normalize.css';
import Calculadora from "./components/Calculadora" ;

function App() {

  return (
    <main id='contenedorgeneral' className='general' data-theme='uno'>
    <Calculadora />
    </main>
  );
}

export default App;
