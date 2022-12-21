import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export const RoutesPath = () => {
    return(
        <Router>
            <Routes>
                <Route
                path="/"
                element={<Home />}
                />
            </Routes>
        </Router>
    )
}