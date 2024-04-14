import logo from './logo.svg';
import './App.css';
import SignUp from "./LandingPage1"
import SignUp1 from './LandingPage2';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

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
