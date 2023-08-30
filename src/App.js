import './App.css';
import './styles/variables.css';
import './styles/normalize.css';
import Calculadora from "./components/Calculadora" ;
import Foot from "./components/Foot" ;

function App() {

  return (
    <main id='contenedorgeneral' className='general' data-theme=''>
    <Calculadora />
    <Foot></Foot>
    </main>
  );
}

export default App;
