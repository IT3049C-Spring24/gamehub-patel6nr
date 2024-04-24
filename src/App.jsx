import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from '../Components/Navigation'
import HomePage from '../Routes/HomePage';
import RPSPage from '../Routes/RPSPage';
import TicTacToePage from '../Routes/TicTacToePage';
import SnakeGame from '../Routes/SnakeGame';
import Wordle from '../Routes/Wordle';

function App() {

  return (
    <Router basename='/gamehub-patel6nr'>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rps" element={<RPSPage />} />
        <Route path="/TicTacToe" element={<TicTacToePage />} />
        <Route path="/Snake" element={<SnakeGame />} />
        <Route path="/Wordle" element={<Wordle />} />
      </Routes>
    </Router>
  )
}

export default App
