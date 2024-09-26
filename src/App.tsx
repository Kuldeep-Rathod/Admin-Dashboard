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
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));


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
                    <Route path="/admin/chart/bar" element={<BarCharts />} />
                    <Route path="/admin/chart/pie" element={<PieCharts />} />
                    <Route path="/admin/chart/line" element={<LineCharts />} />

                    {/* Apps */}
                    <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
                    <Route path="/admin/app/coupon" element={<Coupon />} />
                    <Route path="/admin/app/toss" element={<Toss />} />

                    {/* Management */}
                    <Route
                        path="/admin/products/new"
                        element={<NewProduct />}
                    />
                    <Route
                        path="/admin/products/:id"
                        element={<ProductManagement />}
                    />
                    <Route
                        path="/admin/transaction/:id"
                        element={<TransactionManagement />}
                    />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
