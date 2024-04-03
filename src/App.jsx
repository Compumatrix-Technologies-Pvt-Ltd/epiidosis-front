import { Routes, Route } from "react-router-dom/dist";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLyout";
import './App.css'
import AboutUs from "./pages/AboutUs";
import FundraisingPage from "./pages/FundraisingPage";
import AssetMonetization from "./pages/AssetMonetization";
import LoanAgainstListedStocks from "./pages/LoanAgainstListedStocks";
import InvestorRelations from "./pages/InvestorRelations";
const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/fundraising" element={<FundraisingPage/>} />
        <Route path="/assetmonetization" element={<AssetMonetization/>} />
        <Route path="/loanagainststocks" element={<LoanAgainstListedStocks/>} />
        <Route path="/investorrelation" element={<InvestorRelations/>} />
      </Route>
    </Routes>
  );
};

export default App;
