import AboutUs from "components/AboutUs";
import NotFound from "components/NotFound";
import Footer from "container/Footer";
import Header from "container/Header";
import MainContent from "container/MainContent";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (

    <div className="App">
      
    <Header />
<Router>
  <Routes>
        <Route  path="/" element={<MainContent />} />
        <Route  path="/home" element={<MainContent />} />
        <Route  path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
    <Footer />
        </div>
  );
}

export default App;
