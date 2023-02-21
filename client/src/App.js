 import Navbar from './components/Navbar/Navbar'
 import './App.css';
import {BrowserRouter as Router } from 'react-router-dom'
 import AllRoutes from './AllRoutes'

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <AllRoutes />
   </Router>
    </div>
  );
}

export default App;
