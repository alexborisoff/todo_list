import image from '../../assets/images/profile.png';
import styles from './Account.module.css';

export const Account = () => {
    return (
        <div className={styles.account}>
            <img src={image} alt="Account Profile" />
            <p> Alex Borisov </p>
        </div>
    );
};
