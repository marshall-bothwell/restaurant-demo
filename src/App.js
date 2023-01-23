import { BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LocationPage from './pages/LocationPage'
import MenuPage from './pages/MenuPage'
import ErrorPage from './pages/ErrorPage'

function App() {

    return (
        <div className="bg-gradient-to-r from-slate-500 to-slate-400">
            
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/location" element={<LocationPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            <FooterBar />
            </BrowserRouter>
        </div>
    )
}

export default App;