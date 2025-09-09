import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminApp from "./admin/App"; // Admin app's main component
import CustomerApp from "./customer/App"; // Customer app's main component
import Home from "./customer/home"; // Customer Home Page (for example)

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route path="/*" element={<CustomerApp />} />
        {/* <Route path="/customer" element={<Home />} />{" "} */}
        {/* Example of Customer route */}
        {/* Admin Routes */}
        {/* <Route path="/admin/*" element={<AdminApp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
