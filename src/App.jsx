import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from 'src/redux/weather/reducer.js';

import { Header } from 'src/components/Header/Header.jsx';
import { Hero } from 'src/components/Hero/Hero.jsx';
import { Footer } from 'src/components/Footer/Footer.jsx';

import './App.scss';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    return (
        <>
            <div className="container">
                <Header />
                <Hero />
                <Footer />
            </div>
        </>
    );
}

export default App;
