import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Products = lazy(() => import("./pages/Products"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));

function App() {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/customers" element={<Customers />} />
                    <Route path="/admin/products" element={<Products />} />
                    <Route
                        path="/admin/transaction"
                        element={<Transaction />}
                    />
                    {/* Charts */}

                    {/* Apps */}

                    {/* Management */}
                    <Route path="/admin/products/new" element={<NewProduct />} />
                    <Route path="/admin/products/:id" element={<ProductManagement />} />
                    <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
