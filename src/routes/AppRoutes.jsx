import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Test from "../Pages/Test/Test";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/myaccount" element={<MyAccount />} />  
        <Route path="/test" element={<Test />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
