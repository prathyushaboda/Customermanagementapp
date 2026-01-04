import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./pages/CustomerList";
import CreateCustomer from "./pages/CreateCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/create" element={<CreateCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
