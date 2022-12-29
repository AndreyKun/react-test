import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import About from './about/About';
import Users from './users/Users';
import User from './users/User';
import Goods from './goods/Goods';
import Error from './error/Error';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/users/:userName" element={<User />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
