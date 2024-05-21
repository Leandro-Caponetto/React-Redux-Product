/** @format */

import "./App.css";
import Card from "./component/Card";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Product from "./component/Product";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/:id" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
