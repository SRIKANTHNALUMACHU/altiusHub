import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetail from "./pages/InvoiceDetail";
function App() {
  return (
    <Box display="flex" flexDir="column">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/invoices" element={<InvoiceList />} />
          <Route path="/invoice-detail" element={<InvoiceDetail />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
