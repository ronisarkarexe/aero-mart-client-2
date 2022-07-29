import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import AddProduct from './components/Admin/AddProduct';
import AllUser from './components/Admin/AllUser';
import AllReview from './components/Admin/AllReview';
import ManageOrder from './components/Admin/ManageOrder';
import ManageProducts from './components/Admin/ManageProducts';
import MakeAdmin from './components/Admin/MakeAdmin';
import Shop from './components/Shop/Shop';
import Dashboard from './components/Dashboard/Dashboard';
import OrderList from './components/Dashboard/OrderList';
import Review from './components/Dashboard/Review';
import DashboardPanel from './components/Dashboard/DashboardPanel';
import BookNow from './components/Dashboard/BookNow';
import ProductUpdate from './components/Admin/ProductUpdate';
import ExploreAll from './components/ExploreAll/ExploreAll';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/exploreAll" element={<ExploreAll />} />

          <Route path="/shop/:id" 
          element={
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
          } />

          <Route path="/admin" 
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }>
            <Route path="" element={<AddProduct />} />
            <Route path="allUser" element={<AllUser />} />
            <Route path="allReview" element={<AllReview />} />
            <Route path="manageOrders" element={<ManageOrder />} />
            <Route path="update/:id" element={<ProductUpdate />} />
            <Route path="manageProducts" element={<ManageProducts />} />
            <Route path="makeAdmin" 
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            } />
          </Route>

          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }>
            <Route path="" element={<DashboardPanel />} />
            <Route path="bookNow/:id" element={<BookNow />} />
            <Route path="orderList" element={<OrderList />} />
            <Route path="review" element={<Review />} />
          </Route>


          <Route path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
