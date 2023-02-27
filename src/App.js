import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/HomePage.jsx';
import './App.css';

function App() {
  const [user, setUser] = useState('')
  return (
    <div className="App">
        <HomePage/>
    </div>
  );
}

export default App;
