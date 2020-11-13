import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ListEvent from './pages/ListEvent';

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/list" component={ListEvent} />
    </Router>
  );
}

export default App;