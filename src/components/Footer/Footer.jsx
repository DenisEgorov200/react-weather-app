import React from 'react';
import { useSelector } from 'react-redux';

import { WaterDrop } from 'src/assets/icons/WaterDrop.jsx';

import styles from './Footer.module.scss';

export const Footer = () => {
    const weather = useSelector((state) => state.weather.weather);

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <div className={styles.footerInfo}>
                        <div className={styles.footerWrapper}>
                            <div className={styles.footerCol}>
                                <div className={styles.footerItem}>
                                    <WaterDrop className={styles.footerIcon} />
                                    <div className={styles.footerText}>
                                        <span className={styles.footerTitle}>Humidity</span>
                                        <span className={styles.footerSubTitle}>29%</span>
                                    </div>
                                </div>
                                <div className={styles.footerItem}>
                                    <WaterDrop className={styles.footerIcon} />
                                    <div className={styles.footerText}>
                                        <span className={styles.footerTitle}>Uv index</span>
                                        <span className={styles.footerSubTitle}>0 out of 10</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footerCol}>
                                <div className={styles.footerItem}>
                                    <WaterDrop className={styles.footerIcon} />
                                    <div className={styles.footerText}>
                                        <span className={styles.footerTitle}>Sunset</span>
                                        <span className={styles.footerSubTitle}>29%</span>
                                    </div>
                                </div>
                                <div className={styles.footerItem}>
                                    <WaterDrop className={styles.footerIcon} />
                                    <div className={styles.footerText}>
                                        <span className={styles.footerTitle}>Sunrise</span>
                                        <span className={styles.footerSubTitle}>0 out of 10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerRight}></div>
            </div>
        </footer>
    );
};
