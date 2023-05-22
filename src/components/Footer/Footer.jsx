import { WeatherInfo } from 'src/components/WeatherInfo/WeatherInfo.jsx';
import { Rainfall } from 'src/components/Rainfall/Rainfall.jsx';

import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <WeatherInfo />
                    <Rainfall />
                </div>
                <div className={styles.footerRight}></div>
            </div>
        </footer>
    );
};
