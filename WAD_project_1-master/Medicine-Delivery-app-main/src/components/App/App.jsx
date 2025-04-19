import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from 'components/Layout/Layout';
import { AuthProvider } from '../../context/AuthContext';
import { Loader } from '../Loader/Loader';

const Home = lazy(() => import('../../pages/Home'));
const Pharmacies = lazy(() => import('../../pages/Pharmacies'));
const Cart = lazy(() => import('../../pages/Cart'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));

export const App = () => (
  <AuthProvider>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pharmacies" element={<Pharmacies />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  </AuthProvider>
);
