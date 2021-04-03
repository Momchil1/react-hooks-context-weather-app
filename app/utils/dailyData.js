// The data from the API call comes in interval of 3 hours, so we need to make some
// calculations to extract the daily data and the min/max temperatures.

  export function aggregateDailyData (weatherData){
    // js objects don't keep the order of insertion of the keys when they are integers.
    // So we will use Map instead of plain object to keep the order
    var dailyData = new Map();
    weatherData.map((item) => {
      const dateTime = new Date(item.dt * 1000);
      const day = dateTime.getDate();
      if (!dailyData.has(day)){
        dailyData.set(day, []);
      }
      dailyData.get(day).push({ ...item, day });
    });
    return dailyData;
  }

  export function getDailyData(aggregatedDailyData){
    return Array.from(aggregatedDailyData.keys()).map(key => {
      const maxTemp = getMaxTemp(aggregatedDailyData.get(key));
      const minTemp = getMinTemp(aggregatedDailyData.get(key));
      // get the count of all hour intervals for a day
      const arrLength = aggregatedDailyData.get(key).length;
      // pick an hour around the middle (12:00 o'clock)
      const neededIndex = Math.ceil(arrLength/2);
      // find the forecast (for 12:00)
      const dailyForecast = aggregatedDailyData.get(key).find((_, inx) => inx === neededIndex) || aggregatedDailyData.get(key)[0];
      dailyForecast.maxTemp = maxTemp;
      dailyForecast.minTemp = minTemp;
      return dailyForecast
      // get only the first 5 elements
    }).slice(0, 5)
  }

  function getMaxTemp(data){
    return Math.max(...data.map(el => el.main.temp));
  }

  function getMinTemp(data){
    return Math.min(...data.map(el => el.main.temp));
  }