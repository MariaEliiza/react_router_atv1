import React from 'react';
import { Link } from 'react-router-dom';

import hooksImage from './img/recife-rec.jpg';


export const HooksPage = () =>(
    <div className="main">
       
        <img className="imagem" src={hooksImage} alt="Imagem representando hooks"/>
        <Link to="/home" className="nav-link margin-20">Ir para Home</Link>
    </div>
);