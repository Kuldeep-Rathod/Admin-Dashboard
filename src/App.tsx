import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Customers = lazy(() => import("./pages/Customers"))
const Product = lazy(() => import("./pages/Product"))
const Transaction = lazy(() => import("./pages/Transaction"))



function App() {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/customer" element={<Customers />} />
                <Route path="/admin/product" element={<Product />} />
                <Route path="/admin/transaction" element={<Transaction />} />
              </Routes>

              {/* Charts */}

              {/* Apps */}
            </Suspense>
        </Router>
    );
}

export default App;
