// We want to update our component’s state when certain actions occur. 
// This function takes care of specifying what the state should contain depending 
// on an action. It returns an object, which is then used to replace the state.
export default function reducer(state, action) {
    switch(action.type) {
      case 'FETCH_WEATHER':
        return { ...state, weatherData: action.payload }
      case 'SELECTED_HOURLY_FORECAST':
        return {  ...state, selectedHourlyData: action.payload }
      case 'TOGGLE_MODAL':
        return {  ...state, openModal: action.payload }
      case 'ERROR':
        return {  ...state, error: action.payload }
      default:
        return state
    }
}