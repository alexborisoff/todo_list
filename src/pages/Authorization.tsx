import './authorization.scss';
import pass from '../assets/images/keypass.png';
import login from '../assets/images/profile.png';

export const Authorization = () => {
    return (
        <>
            <div className="form">
                <div className="form_text_info">
                    <p> Authorization Tab </p>
                </div>
                <div className="inputs">
                    <div className="login_input">
                        <img src={login} alt="login_icon" />
                        <input type="text" placeholder="Login" />
                    </div>
                    <div className="password_input">
                        <img src={pass} alt="pass_icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                <div className="buttons">
                    <button>
                        <a href="/"> Sign In </a>
                    </button>
                    <button>
                        <a href="/"> Back </a>
                    </button>
                </div>
            </div>
        </>
    );
};
