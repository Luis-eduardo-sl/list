import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import Et from './pages/Et'
import Telephone from './pages/Telephone';
import Conselhos from './pages/Conselhos'


function App() {

  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/et">Et</Link></li>
        <li><Link to="/telephone">Telefone</Link></li>
        <li><Link to="/conselhos">Conselhos</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/et' element={<Et/>}></Route>
        <Route path='/telephone' element={<Telephone/>}></Route>
        <Route path='/conselhos' element={<Conselhos/>}></Route>
      </Routes>

    </Router>

  );
}

export default App;
