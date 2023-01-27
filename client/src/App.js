import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      </Router>
    </div>
  );
}

export default App;
