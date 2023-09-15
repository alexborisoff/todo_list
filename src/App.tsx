import './app.scss';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <div>
            <div className="title">
                <p> To Do List №1 </p>
            </div>
            <Home />
        </div>
    );
};
