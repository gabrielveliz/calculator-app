import '../styles/Calculadora.css';
import React from "react";

const Tog = () =>{
  const cambiar = (id1,id2,id3) =>{
  let nombre = "";
  if (id1==="1"){nombre = "uno"}
  if (id1==="2"){nombre = "dos"}
  if (id1==="3"){nombre = "tres"}
  
  document.getElementById("contenedorgeneral").setAttribute('data-theme',nombre);

  document.getElementById("bola"+id1).style.opacity="1";
  document.getElementById("bola"+id2).style.opacity="0";
  document.getElementById("bola"+id3).style.opacity="0";
}

return(
  <div className='contbola'>
    <div onClick={()=>{cambiar("1","2","3")}} id='bola1' className='bola'></div>
    <div onClick={()=>{cambiar("2","1","3")}} id='bola2' className='bola'></div>
    <div onClick={()=>{cambiar("3","1","2")}} id='bola3' className='bola'></div>
  </div>);
}

export default Tog