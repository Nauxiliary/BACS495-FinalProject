import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Body from './Body.js';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/auth" element={<Login />} />
        
        {/*<Route exact path={'/password-reset'} element={<PasswordReset/>}/>*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
