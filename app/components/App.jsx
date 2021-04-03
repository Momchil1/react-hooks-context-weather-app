import React, { useReducer } from 'react';
import reducer from '../reducers';
import initialState from '../store';
import SearchBar from './SearchBar.jsx';
import MainForecast from './MainForecast.jsx';
import Modal from './Modal.jsx';
import { StoreProvider } from '../contexts/storeContext';
import { DispatchProvider } from '../contexts/dispatchContext';

// useReducer allows you to update parts of your component’s state when certain 
// actions are dispatched, and it is very similar to how Redux works.
// It takes in a reducer function and an initial state as arguments and then provides
// you with a store variable and a dispatch function to enable you to update the state. 
const App = () => {
    // This is going to hold the store and pass the required data and the dispatch 
    // function down to the components that need them. This will allow the children 
    // components to read from and update the store as required.
    const [store, dispatch] = useReducer(reducer, initialState);

    // We wrap all the components which need access to the store with the Provider.
    // This way all children, grand children and so on will have also access to the store
    return (
        <div className="App container">
            <StoreProvider value={store}>
                <DispatchProvider value={dispatch}>
                    <SearchBar dispatch={dispatch}/>
                    <MainForecast store={store} dispatch={dispatch}/>
                    <Modal/>
                </DispatchProvider>
            </StoreProvider>
        </div>
    )
}

export default App;