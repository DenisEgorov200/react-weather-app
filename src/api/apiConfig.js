export const apiConfig = {
    baseUrl: `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_API_KEY
    }&q=Moscow`,
};
