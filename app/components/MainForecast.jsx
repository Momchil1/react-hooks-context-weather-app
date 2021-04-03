import React from 'react';
import DailyForecast from './DailyForecast.jsx';
import { toggleModal } from '../actions';
import './styles/MainForecast.css';
import { aggregateDailyData, getDailyData } from '../utils/dailyData';

const MainForecast = ({store, dispatch}) => {
  const aggregatedDailyData = aggregateDailyData(store.weatherData);
  const dailyData = getDailyData(aggregatedDailyData);
    
  const weatherForecast = dailyData.map((data, inx) => {
    const weekDay = new Date(data.dt * 1000).toLocaleDateString('en-US', {weekday: 'short'});
    const date = new Date(data.dt * 1000).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit'});
    let tempMax = Math.round(data.maxTemp);
    let tempMin = Math.round(data.minTemp);

    return (
      <div className="daily-data" key={inx} onClick={() => toggleModal(true, dispatch)}>
        <DailyForecast 
          forecast={data}
          weekDay={weekDay}
          date={date}
          tempMax={tempMax}
          tempMin={tempMin}
          aggregatedDailyData={aggregatedDailyData}/>
      </div>)
    }
  );
  return (
    !store.error?
    <div className="d-flex mt-5">{weatherForecast}</div>:
    <div className="d-flex justify-content-center">{store.error}</div>
  );
}

export default MainForecast;