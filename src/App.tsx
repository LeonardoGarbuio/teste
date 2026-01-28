import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetails from './pages/CarDetails';
import About from './pages/About';
import Login from './pages/admin/Login';
import AdminLayout from './components/Layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import CarForm from './pages/admin/CarForm';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estoque" element={<Inventory />} />
            <Route path="/carro/:id" element={<CarDetails />} />
            <Route path="/sobre" element={<About />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="novo" element={<CarForm />} />
              <Route path="editar/:id" element={<CarForm />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

