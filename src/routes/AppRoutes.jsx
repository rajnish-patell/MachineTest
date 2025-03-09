import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import MyAccount from "../Pages/MyAccount/MyAccount";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/myaccount" element={<MyAccount />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
