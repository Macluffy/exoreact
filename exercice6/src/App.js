
import React from 'react';
import Header from './composant/Header/Header.js'
import Contenue from './composant/Contenue/Contenue.js'
import Footer from './composant/Footer/Footer.js'

export default class App extends React.Component{
render() {
  return (
    <div>
    <Header/>
    <Contenue/>
    <Footer/>
    </div>
  );
}
}

