import { useSelector } from 'react-redux';

import { WaterDrop } from 'src/assets/icons/WaterDrop.jsx';
import { SunsetIcon } from 'src/assets/icons/SunsetIcon.jsx';
import { SunriseIcon } from 'src/assets/icons/SunriseIcon.jsx';
import { SunIcon } from 'src/assets/icons/SunIcon.jsx';

import styles from './WeatherInfo.module.scss';

export const WeatherInfo = () => {
    const weather = useSelector((state) => state.weather.weather);

    const isEmpty = !weather || Object.keys(weather).length === 0;

    if (isEmpty) {
        return <div>No weather data available</div>;
    }

    const currentWeather = weather.current;
    const forecastWeather = weather.forecast.forecastday;

    return (
        <div className={styles.weatherInfo}>
            <div className={styles.weatherWrapper}>
                <div className={styles.weatherCol}>
                    <div className={styles.weatherItem}>
                        <WaterDrop className={styles.weatherIcon} />
                        <div className={styles.weatherText}>
                            <span className={styles.weatherTitle}>Humidity</span>
                            <span className={styles.weatherSubTitle}>
                                {currentWeather.humidity}%
                            </span>
                        </div>
                    </div>
                    <div className={styles.weatherItem}>
                        <SunIcon className={styles.weatherIcon} />
                        <div className={styles.weatherText}>
                            <span className={styles.weatherTitle}>Uv index</span>
                            <span className={styles.weatherSubTitle}>
                                {currentWeather.uv} out of 10
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.weatherCol}>
                    <div className={styles.weatherItem}>
                        <SunsetIcon className={styles.weatherIcon} />
                        <div className={styles.weatherText}>
                            <span className={styles.weatherTitle}>Sunset</span>
                            <span className={styles.weatherSubTitle}>
                                {forecastWeather?.map((day) => (
                                    <span key={day.astro.sunset}>{day.astro.sunset}</span>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={styles.weatherItem}>
                        <SunriseIcon className={styles.weatherIcon} />
                        <div className={styles.weatherText}>
                            <span className={styles.weatherTitle}>Sunrise</span>
                            <span className={styles.weatherSubTitle}>
                                {forecastWeather?.map((day) => (
                                    <span key={day.astro.sunrise}>{day.astro.sunrise}</span>
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
