import React, {useEffect, useState} from "react";
import getGifs from "../getGifs";
import Gif from "./Gif";

export default function ListOfGifs ({keyword}){

    console.log(keyword + 'keyword');
    const [gifs, setGifs ] = useState([])


  //Otro estado para LOADING
  const [loading, setLoading ] = useState(false);

  //Segundo parametro [] para que solo se ejecute una vez, es la dependencia
    useEffect(function (){
        setLoading(true);
        getGifs({ keyword })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    if(loading) return <span>Cargando ... ...</span>

    return gifs.map(({id,title,url}) =>
        <Gif 
        key={id} 
        title={title} 
        url={url} 
        id={id} 
        />
    )
}