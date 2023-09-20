import { Header } from './components/Header';
import { Authorization } from './pages/Authorization';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Authorization />} />
            </Routes>
        </>
    );
};
