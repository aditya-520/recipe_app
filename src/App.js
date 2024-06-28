import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages';
import Favourites from './pages/favourites';
import Details from './pages/details';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route
          path='/favourites'
          element={
            <Favourites />
          }
        />
        <Route
          path='/item/:id'
          element={
            <Details />
          }
        />
      </Routes>


    </div>
  );
}

export default App;
