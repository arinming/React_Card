import React from 'react';
import './App.css';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      <Card
        title='기다린 만큼, 더'
        imageUrl='https://image.bugsm.co.kr/album/images/500/200402/20040257.jpg'
        body='검정치마'
       />

    </div>
  );
}

export default App;
