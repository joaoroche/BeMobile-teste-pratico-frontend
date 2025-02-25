import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import Home from './pages/Home/Home';


const App = () => {
  return (
      <Router>
        <Header />

        <div className="page__container--root">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
