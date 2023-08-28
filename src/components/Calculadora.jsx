import '../styles/Calculadora.css';
import data from "../data.json";

function Calculadora(){
  /*buscar como usar prefers-color-scheme*/ 
  const cambiar = () =>{

    document.getElementById("contenedorgeneral").setAttribute('data-theme', "tres");

  }

  return(
    <div className='contenedor'>
      <div className='concal' >
        <div className='superior'>
          <div className='calc'><span>calc</span></div>
          <div className='themeopc'>
            <div className='theme'><span>THEME</span></div>
            <div>
              <div className='opcbol'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className='contbola'>
                <div className='bola'>{/** contenedor para cambiar opciones */}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='pantalla'>
          <span>{/*aqui ira el resultado*/ } ejemplo</span>
        </div>
        <div className='contbotones'>
          
          {/*botones*/
        data.map((data, index) => 
        (   
          <Botones 
          key={index}
          simbolo ={data.sim}
          fun ={data.fun}
          />
        ))}
        </div>
        
      </div>
    </div>
  );

  
}



function Botones({simbolo,fun}){
    return(
      <button className={fun} >
        <span>{simbolo}</span>
      </button>
    );
  

}

export default Calculadora;