import React from 'react';
import './App.css';
import Card from './Components/Card'
import image1 from './Components/images/1.png'
import image2 from './Components/images/2.png'
import image3 from './Components/images/3.png'
import image4 from './Components/images/4.jpg'

function App() {
  return (
    <div className="App">
      <h1>Who's Watching</h1>
      <div className='image-container'>
        
      <Card
      imageUrl={image1}>
      </Card>
      <Card
      imageUrl={image2}>
      </Card>
      <Card
      imageUrl={image3}>
      </Card>
      <Card
      imageUrl={image4}>
      </Card>
      </div>
    </div>
  );
}

export default App;
