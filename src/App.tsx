import { Header } from './components/Header';
import { Authorization } from './pages/Authorization';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Authorization />} />
                <Route path="/registration" element={<SignUp />} />
            </Routes>
        </>
    );
};
