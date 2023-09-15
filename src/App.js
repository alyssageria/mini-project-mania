import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Calculator from './components/pages/Calculator';
import TicTacToe from './components/pages/TicTacToe';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <Home />
      <TicTacToe />
      <Calculator />
    </div>
  );
}

export default App;
