import { useEffect, useState } from 'react';
import styles from './AdditionalWidjet.module.css';

export const AdditionalWidjet = () => {
    const [time, setTime] = useState(new Date());

    const dayOfWeek = (day: number): string | undefined => {
        switch (day) {
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            case 7:
                return 'Sunday';
        }
    };

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, []);

    return (
        <div className={styles.info}>
            <p className={styles.day}>{dayOfWeek(time.getDay())}</p>
            <p className={styles.time}>{time.toLocaleTimeString()}</p>
        </div>
    );
};
