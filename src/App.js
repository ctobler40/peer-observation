import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Pages
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Observations from "./pages/Observations";
import Messaging from "./pages/Messaging";
import Resources from "./pages/Resources";

// Components
import Error404 from "./components/Error404";
import Layout from "./components/Layout";
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <SideNav />
          <Navbar />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element = {<Home />} />
              <Route path="feedback" element={<Feedback />}/> 
              <Route path="observations" element={<Observations />}/> 
              <Route path="messaging" element={<Messaging />}/> 
              <Route path="resources" element={<Resources />}/> 
              <Route path="*" element={<Error404 />}/> 
            </Route>
          </Routes>
          <SideNav />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
