import '../styles/Calculadora.css';

function Calculadora(){
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
          {/*botones*/ }
          <div className='filabot'>
            <div><span>7</span></div>
            <div><span>8</span></div>
            <div><span>9</span></div>
            <div><span>DEL</span></div>
          </div>
          <div className='filabot'>
            <div><span>4</span></div>
            <div><span>5</span></div>
            <div><span>6</span></div>
            <div><span>+</span></div>
          </div>
          <div className='filabot'>
            <div><span>1</span></div>
            <div><span>2</span></div>
            <div><span>3</span></div>
            <div><span>-</span></div>
          </div>
          <div className='filabot'>
            <div><span>.</span></div>
            <div><span>0</span></div>
            <div><span>/</span></div>
            <div><span>x</span></div>
          </div>
          <div className='filabot'>
            <div className='rese'><span>RESET</span></div>
            <div className='equal'><span>=</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;