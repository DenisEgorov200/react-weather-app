import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import styles from './Hero.module.scss';
import { useState } from 'react';

export const Hero = () => {
    const weather = useSelector((state) => state.weather.weather);
    const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm A'));
    const [dayOfWeek, setDayOfWeek] = useState(dayjs().format('dddd'));

    console.log(weather);

    setInterval(() => {
        setCurrentTime(dayjs().format('HH:mm A'));
        setDayOfWeek(dayjs().format('dddd'));
    }, 60000);

    const isEmpty = !weather || Object.keys(weather).length === 0;

    if (isEmpty) {
        return <div>No weather data available</div>;
    }

    const currentWeather = weather.current;
    const locationWeather = weather.location;
    const forecastWeather = weather.forecast.forecastday;

    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroLeft}>
                    <div>
                        <img src={currentWeather?.condition.icon} alt={currentWeather?.cloud} />
                    </div>
                    <span className={styles.heroTemp}>{currentWeather?.temp_c}°</span>
                    <span className={styles.heroPlace}>
                        {locationWeather?.name}, {locationWeather?.country}
                    </span>
                </div>
                <div className={styles.heroRight}>
                    <span className={styles.heroTime}>{currentTime}</span>
                    <div className={styles.heroInfo}>
                        {forecastWeather?.map((day) => (
                            <span key={day.astro.sunrise}>time, {dayOfWeek}</span>
                        ))}
                        <span>{}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
