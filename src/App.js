import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";

import Layout from "./components/Layout";
import Error404 from "./components/Error404";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element = {<Home />} />
              <Route path="*" element={<Error404 />}/> 
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
