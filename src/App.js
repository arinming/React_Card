import React from 'react';
import './App.css';
import Card from './Components/Card'
import CardList from './Components/CardList';
import Menu from './Components/Menu'
import './Components/Card.css'



function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Menu />
      </div>
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

export default App;
