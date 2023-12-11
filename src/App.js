import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Customers from "./pages/customers";
import Stock from "./pages/stock";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Customers />} />{" "}
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;
