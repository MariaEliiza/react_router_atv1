import React from 'react';
import { Link } from 'react-router-dom';
import HooksImage from './img/recife-rec.jpg';

export const Home = () =>{

    return (
        <div className="main">
            <nav className="nav">
                <Link to="/react" className=""> Tela a React </Link>
                <Link to="/js" className=""> Tela a JS </Link>
                <Link to="/hooks" className=""> Tela Hooks </Link>
            </nav>
        </div>
    );
}
