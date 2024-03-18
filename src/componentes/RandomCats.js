import {useState,useEffect} from 'react';
import React from 'react';

const DEFAULT_URL = "https://catfact.ninja/fact"

async function fetchPost(DEFAULT_URL){
    const response = await fetch(DEFAULT_URL);
    const listadoFact = await response.json();
    return listadoFact;
  }

  function RandomCat(){

    const [loadedPosts, setLoadedPosts] = useState([]);
    const [contador, setContador] = useState(0)
  
    useEffect(function(){
      fetchPost(DEFAULT_URL).then((fetchedPosts) =>setLoadedPosts(fetchedPosts));
    },[DEFAULT_URL])
    useEffect(function(){
        fetchPost(DEFAULT_URL).then((fetchedPosts) =>setLoadedPosts(fetchedPosts));
      },[contador])
    
  
    function cambiarFact(){
        setContador(contador + 1)
      
      }
   
    return (
  
      <>
        <p> {loadedPosts.fact}</p>
        <button onClick={cambiarFact}>cmbiar</button>
      </>
    
    );
  }

 
  export default RandomCat;