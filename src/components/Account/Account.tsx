import image from '../../assets/images/profile.png';
import styles from './Account.module.css';

export const Account = () => {
    return (
        <div className={styles.account}>
            <div className={styles.flex}>
                <p> Alex Borisov </p>
                <img src={image} alt="Account Profile" />
            </div>
            <ul>
                <li>
                    <a href="/"> Refresh </a>
                </li>
                <li>
                    <a href="/login"> Exit </a>
                </li>
            </ul>
        </div>
    );
};
