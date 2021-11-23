import React from "react";
import { Link } from 'react-router-dom';

import jsImage from './img/recife-rec.jpg';

export const JsPage = () =>{
    <div>
        <img className="imagem" src={jsImage} alt="Imagem representando react"/>
        <link to="/" className="">ir para a tela de home</link>
    </div>
}