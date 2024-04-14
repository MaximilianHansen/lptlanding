import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SignUp from "./LandingPage1"
import SignUp1 from './LandingPage2';

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signUp1" element={<SignUp1 />} />
    </Routes>
    </div>
  );
}

export default App;
