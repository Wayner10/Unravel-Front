import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Places from './components/places';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path="/places" element={<Places />} />
                    {/*<Route path="/reviews" element={<Reviews />} />
                    <Route path="/regions" element={<Regions />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/email" element={<Email />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin" element={<ProtectedRoute element={Admin} />} /> */}
                </Routes>
            </div>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
