import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { GamePage } from './pages/game/GamePage';
import { Header } from './components/header/Header';
import { Provider } from 'react-redux';
import { store } from './redux';
import { OrderPage } from './pages/order/OrderPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/app/:title" element={<GamePage />} />
          </Routes>
          <Routes>
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
