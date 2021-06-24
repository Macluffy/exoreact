
import React from 'react';
import './header.css'

export default class Footer extends React.Component{
render() {
    return (
        <nav className="navbar">
        <ul className="liste">
            <li className="li"><a href="" className="lia"> acceuil</a> </li>
            <li className="li"><a href="" className="lia"> connexion</a></li>
            <li className="li"><a href="" className="lia">inscription </a></li>
            <li className="li"><a href="" className="lia"> Faq</a></li>
        </ul>
        </nav>
        );
}
}

