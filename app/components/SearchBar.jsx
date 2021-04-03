import React, { useState, useCallback } from 'react';
import { fetchWeatherData } from '../actions';

const SearchBar = ({dispatch}) => {
    const [searchInput, setSearchInput] = useState('');
    // if we define submitSearch function here, it will be defined each time the
    // component is rendered. So we should define it outside the component or use the
    // useCallback hook to ensure the function is only redefined when one of its 
    // dependencies (variables in the array) changes.
    // Pass an inline callback and an array of dependencies.
    
    const submitSearch = useCallback(() => {
        fetchWeatherData(searchInput, dispatch);
    }, [searchInput]);

    return (
      <div>
        <h3 className="text-center mt-2">Weather Forecast</h3>
        <div className="input-group mt-2 w-50 m-auto">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Location..."
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}/>
          <div className="input-group-append">
            <button 
              className="btn btn-outline-secondary" 
              type="button" 
              onClick={submitSearch}>Search</button>
          </div>
        </div>
      </div>
    );
}

export default SearchBar;