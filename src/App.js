import logo from './logo.svg';
import './App.css';
import SignUp from "./LandingPage1"
import SignUp1 from './LandingPage2';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup1" element={<SignUp1 />} />
    </Routes>
  </Router>
  );
}

export default App;
