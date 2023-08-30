import '../styles/Calculadora.css';
import data from "../data.json";
import React from "react";
import Tog from "./Tog";
import { useState } from 'react';


let total=0; 
let aux = ""; /*variable de apoyo*/
let arreglo=[];/*guardar ecuacion*/


function Calculadora(){
  const [indice,setIndice] = useState(0);

  
  
  function calcular(simbolo){

    /*si es numero / if is number*/
    if(isNaN(simbolo)===false){
      
      if(arreglo.length>=2){
        aux=aux + simbolo;
        setIndice(aux);
        arreglo[2]=aux;
      }
      else{
        aux=aux + simbolo;
        setIndice(aux);
        arreglo[0]=aux;
      }
      
    }
    /*si es simbolo / if is symbol*/
    if(isNaN(simbolo)){
      /*DELETE*********************/
      if(simbolo==="DEL" && aux.length>0){
        
        if(arreglo.length===1){
          aux=aux.substring(0, aux.length - 1);
          setIndice(aux);
          arreglo[0]=aux;
          if(aux.length===0){
            setIndice(0);
            aux = "";
            arreglo[0]="";
          }
        }
        if(arreglo.length===2){
          aux=aux.substring(0, aux.length - 1);
          setIndice(aux);
          arreglo[1]=aux;
          if(aux.length===0){
            setIndice(0);
            aux = "";
            arreglo[1]="";
          }
        }
        if(arreglo.length===3){
          aux=aux.substring(0, aux.length - 1);
          setIndice(aux);
          arreglo[2]=aux;
          if(aux.length===0){
            setIndice(0);
            aux = "";
            arreglo[2]="";
          }
        }

        
      }
      /*RESET********************/
      if(simbolo==="RESET"){
        aux="";
        setIndice(0);
        arreglo.pop();
        arreglo.pop();
        arreglo.pop();
      }

      if(simbolo==="." && aux.indexOf(".")===-1 ){
        if (aux.length===0){
          aux=aux + "0";
        }
        aux=aux + simbolo;
        setIndice(aux);
      }

      /* + - x / *********************/
      if(simbolo==="+" || simbolo==="-" || simbolo ==="x" || simbolo ==="/"){

        if(arreglo.includes("+") || arreglo.includes("-") || arreglo.includes("x") || arreglo.includes("/")){
          if(arreglo.length===1 || arreglo.length===2){
            arreglo[1] = simbolo;
            setIndice(simbolo);
            aux ="";
          }

          if(arreglo.length===3){

            if(arreglo.indexOf(".")===-1 && arreglo[2].indexOf(".")===-1){
              if(arreglo[1]==="+"){total = parseInt(arreglo[0]) + parseInt(arreglo[2]);}
              if(arreglo[1]==="-"){total = parseInt(arreglo[0]) - parseInt(arreglo[2]);}
              if(arreglo[1] ==="x"){total = parseInt(arreglo[0]) * parseInt(arreglo[2]);}
              if(arreglo[1] ==="/"){total = parseInt(arreglo[0]) / parseInt(arreglo[2]);}

            }else{
              if(arreglo[1]==="+"){total = parseFloat(arreglo[0]) + parseFloat(arreglo[2]);}
              if(arreglo[1]==="-"){total = parseFloat(arreglo[0]) - parseFloat(arreglo[2]);}
              if(arreglo[1] ==="x"){total = parseFloat(arreglo[0]) * parseFloat(arreglo[2]);}
              if(arreglo[1] ==="/"){total = parseFloat(arreglo[0]) / parseFloat(arreglo[2]);}
              
            }
            
            setIndice(total);
            arreglo[0]=total;
            arreglo[1] = simbolo;
            aux ="";
            arreglo.pop();


          }
          
        }
        else{
          if(arreglo.length===0){
            if(simbolo==="-"){
              
              aux=aux + simbolo;
              setIndice(aux);
              arreglo[0]=aux;
            }
          }
          else{
            arreglo[1] = simbolo;
            setIndice(simbolo);
            aux ="";
          }
          
          
        }
        
      }

        /*   =    / *********************/
      if(simbolo==="="){
        
        if(arreglo.length===3){

          if(arreglo[0].indexOf(".")===-1 && arreglo[2].indexOf(".")===-1){
            if(arreglo[1]==="+"){total = parseInt(arreglo[0]) + parseInt(arreglo[2]);}
            if(arreglo[1]==="-"){total = parseInt(arreglo[0]) - parseInt(arreglo[2]);}
            if(arreglo[1] ==="x"){total = parseInt(arreglo[0]) * parseInt(arreglo[2]);}
            if(arreglo[1] ==="/"){total = parseInt(arreglo[0]) / parseInt(arreglo[2]);}
          }else{
            if(arreglo[1]==="+"){total = parseFloat(arreglo[0]) + parseFloat(arreglo[2]);}
            if(arreglo[1]==="-"){total = parseFloat(arreglo[0]) - parseFloat(arreglo[2]);}
            if(arreglo[1] ==="x"){total = parseFloat(arreglo[0]) * parseFloat(arreglo[2]);}
            if(arreglo[1] ==="/"){total = parseFloat(arreglo[0]) / parseFloat(arreglo[2]);}
          }

          setIndice(total);

          arreglo[0]=total;

          arreglo.pop();
          arreglo.pop();
          aux="";

        }
        
      }

      
    }

  }
    /* funcion botones / *********************/
  function Botones({simbolo,fun}){
      return(
        <button className={fun} onClick={()=>{calcular(simbolo)}}>
          <span>{simbolo}</span>
        </button>
      );
    
  }
  const handleKeyDown = event => {
    console.log(event.key)
    if(event.key==="1" || event.key==="2" || event.key==="3" ||
      event.key==="4" || event.key==="5" || event.key==="6" || 
      event.key==="7" || event.key==="8" || event.key==="9" || 
      event.key==="0" || event.key==="." || event.key==="+" || event.key==="-" || 
      event.key==="/" )
      { 
        calcular(event.key)
      }else{
          if(event.key==="Backspace"){
            calcular("DEL")
          }
          if(event.key==="Enter"){
            calcular("=")
          }
          if(event.key==="*"){
            calcular("x")
          }
        }

      
  };

  return(
    <div className='contenedor' tabIndex={0} onKeyDown={handleKeyDown}>
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
              <Tog/>
            </div>
          </div>
        </div>
        <div className='pantalla'>
          <span>{/*aqui ira el resultado*/ } {indice}</span>
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


export default Calculadora;
