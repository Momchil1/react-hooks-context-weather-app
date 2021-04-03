import React from 'react';
import './styles/DailyForecast.css';

const HourlyForecast = (props) => {
    const { forecast, hour, date, temp } = props;
    return (
        <div className="card">
          <div className="title">
            <p>{hour}</p>
            <p className="date">{date}</p>
          </div>
          <span className="icon">
            <img
              className="img-fluid mt-2"
              src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/>
          </span>
          <div className="temp">
                <span className="high-temp">{temp}<sup>&deg;</sup></span>
            </div>
          <div className="row">
            <div className="col-12">
              <div className="header">{forecast.weather[0].description}</div>
            </div>
          </div>
        </div>  
    );
};

export default HourlyForecast;