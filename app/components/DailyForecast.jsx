import React, { useContext } from 'react';
import { hourlyForecast } from '../actions';
import DispatchContext from '../contexts/dispatchContext';
import './styles/DailyForecast.css';

const DailyForecast = (props) => {
    const dispatch = useContext(DispatchContext);
    const { forecast, weekDay, date, tempMax, tempMin, aggregatedDailyData } = props;
    const hourlyData = aggregatedDailyData.get(forecast.day);
    
    return (
        <div className="card" onClick={() => hourlyForecast(hourlyData, dispatch)}>
          <div className="title">
            <p>{weekDay}</p>
            <p className="date">{date}</p>
          </div>
          <span className="icon">
            <img
              className="img-fluid mt-2"
              src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/>
          </span>
          <div className="temp">
            <span className="high-temp">{tempMax}<sup>&deg;</sup></span>/ {tempMin}<sup>&deg;</sup>
            </div>
          <div className="row">
            <div className="col-12">
              <div className="header">{forecast.weather[0].description}</div>
            </div>
          </div>
        </div>  
    );
};

export default DailyForecast;