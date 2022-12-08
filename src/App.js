import './App.css';
import store from './store/store'
import { Provider } from 'react-redux';
import Navbar from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Product/Products';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
