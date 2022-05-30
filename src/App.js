import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import UseReducer from './routes/UseReducer';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}`} element={<Home />}></Route>
          <Route path="/usereducer" element={<UseReducer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
