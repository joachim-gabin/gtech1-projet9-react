import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Accueil from './Accueil';
import ShoppingCart from './ShoppingCart';
import ArticlePage from './ArticlePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Accueil />} />
        <Route exact path='/cart' element={<ShoppingCart />} />
        <Route exact path="/articles" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
