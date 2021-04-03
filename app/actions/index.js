import regeneratorRuntime from "regenerator-runtime";

const Api_Key = '265257b62109cf6dcfc55ed5a3926ced';

export const fetchWeatherData = async (city, dispatch) => {
    const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_Key}&units=metric`;

    const weatherData = await fetch(weatherUrl);
    const body = await weatherData.json();
    body.list?
    (dispatch({type: 'FETCH_WEATHER', payload: body.list}),
    dispatch({type: 'ERROR', payload: ''})):
    dispatch({type: 'ERROR', payload: body.message})
}

export const hourlyForecast = (data, dispatch) => {
    dispatch({type: 'SELECTED_HOURLY_FORECAST', payload: data});
}

export const toggleModal = (data, dispatch) => {
    dispatch({type: 'TOGGLE_MODAL', payload: data});
}