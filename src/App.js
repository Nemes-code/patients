import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Payroll from "./Components/finance/accounting/payroll/payroll";
import Invoices from "./Components/finance/invoices/invoice/invoiceLIst/invoices";
import Profoma from "./Components/finance/invoices/profoma/newProfoma/profoma";
import Settings from "./Components/finance/invoices/setup/setup";
import Bid from "./Components/crm/bids/bids";
import Customer from "./Components/crm/customers/customer";
import Potential from "./Components/crm/potential/potential";
import Expense from "./Components/finance/accounting/expenses/expenses";
import Income from "./Components/finance/accounting/incomes/incomes";
import Attendance from "./Components/human resource/attendance/attendance";
import Operations from "./Components/human resource/guards/Form";
import IctActivities from "./Components/human resource/ict/activities/ictActivities";
import IctDeals from "./Components/human resource/ict/deals/ictDeals";
import OfficeActivities from "./Components/human resource/office/activities/officeActivities";
import Enquiries from "./Components/human resource/office/enquiries/enquiries";
import Hr from "./Components/human resource/office/staff/Form";
import HrReport from "./Components/human resource/reports/hr/hrReport";
import ICTREP from "./Components/human resource/reports/ict/ictReport";
import OperationReport from "./Components/human resource/reports/operations/operationsReport";
import Shifts from "./Components/human resource/shifts/shifts";
import Header from "./Components/Header";
import POS from "./Components/finance/store/POS/pos";
import Product from "./Components/finance/store/products/product";
import Comp from "./Components/crm/companies/companies";
import Contr from "./Components/crm/contracts/contracts";
import Mark from "./Components/crm/marketing/marketing";
import ProfomaList from "./Components/finance/invoices/profoma/profList/profomalist";
import Homee from "./Components/home";
import InvoiceTitle from "./Components/finance/invoices/invoice/newInvoice/invoiceTittle";
import Home2 from "./Components/home2";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/exp" element={<Homee />} />
        <Route path="/expenses" element={<Expense />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/incomes" element={<Income />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/profoma" element={<Profoma />} />
        <Route path="/newInvoice" element={<InvoiceTitle />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product" element={<ProfomaList />} />

        <Route path="/bid" element={<Bid />} />
        <Route path="/companies" element={<Comp />} />
        <Route path="/contracts" element={<Contr />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/marketing" element={<Mark />} />
        <Route path="/potential" element={<Potential />} />

        <Route path="/attendance" element={<Attendance />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/ictactivities" element={<IctActivities />} />
        <Route path="/ictdeals" element={<IctDeals />} />
        <Route path="/officeactivities" element={<OfficeActivities />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/staff" element={<Hr />} />
        <Route path="/hrreport" element={<HrReport />} />
        <Route path="/ictreport" element={<ICTREP />} />
        <Route path="/operationsrep" element={<OperationReport />} />
        <Route path="/shifts" element={<Shifts />} />
      </Routes>
    </Router>
  );
}

export default App;
