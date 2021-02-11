import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
// import Album from './components/Album'
import Shop from './pages/Shop.page'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Shop />
    </div>
  );
}

export default App;
