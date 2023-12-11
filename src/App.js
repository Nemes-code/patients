import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";
import Accounts from "./pages/accounts";
import Customers from "./pages/customers";
import Staff from "./pages/staff";
import Stock from "./pages/stock";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acct" element={<Accounts />} />
        <Route path="/cst" element={<Customers />} />
        <Route path="/stf" element={<Staff />} />
        <Route path="/pos" element={<POSPage />} />
        <Route path="/stk" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;
