import React from 'react'
import { useState } from "react"
export const GifGridItem = ( {title,url } ) => {
    //console.log(title,url);

    const [visible, setVisible] = useState(['visible']);
    const [im, setIm] = useState(["../cuadronegro.png"]);


  function mostrar(){
    if(im==url){
    setIm("../cuadronegro.png");
    
    }else{
      setIm(url);
    }
  }

  return (
    <div className="card animate__animated animate__fadeIn">
    <img src={im} alt={title} style={{visibility: visible,display: "block"}} onClick={() => mostrar()}/>
    </div>
  )
}
