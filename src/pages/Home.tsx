import './home.scss';
import { Account } from '../components/Account/Account';
import { AdditionalWidjet } from '../components/AdditionalWidjet/AdditionalWidjet';
import { Main } from '../components/Main/Main';

export const Home = () => {
    return (
        <section className="grid">
            <div className="info">
                <Main />
            </div>
            <Account />
            <AdditionalWidjet />
        </section>
    );
};
