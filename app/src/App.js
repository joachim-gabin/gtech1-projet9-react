import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Accueil from './Accueil';
import ShoppingCart from './ShoppingCart';
import ArticleInfo from './ArticleInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Accueil />} />
        <Route exact path='/cart' element={<ShoppingCart />} />
        <Route exact path="/article" element={<ArticleInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
