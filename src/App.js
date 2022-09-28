import React, {Component} from 'react';
import './App.css';
import Card from './Components/Card'
import Menu from './Components/Menu'
import ShowMusic from './Components/ShowMusic';
import Study from './Components/Study';
import Header from './Components/Header';
import './Components/Card.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'



class App extends Component {
  render() { 
    return (
      
      <div className="App">

        <div className="Menu">
          <Menu />
        </div>
        <ShowMusic></ShowMusic>
        <Study age = {10}></Study>
        <Header />
        <Card
          title='기다린 만큼, 더'
          body='검정치마'
        />

        <Card 
          title = '정류장'
          body = '버스커버스커'
        />

        <Card 
          title = '정류장'
          body = '버스커버스커'
        />

        

      </div>
      
    );
  }
}





export default App;
