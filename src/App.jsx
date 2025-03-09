import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
