import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/product-details" element={<ProductDetails />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
