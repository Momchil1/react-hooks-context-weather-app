import React from 'react';
const StoreContext = React.createContext({});

export const StoreProvider = StoreContext.Provider;
export default StoreContext;

// We are doing a few things here: Creating the context object (StoreContext with 
// initial value of empty object), then creating a way to ‘provide’ the context to
// components as StoreProvider. We will be accessing the context with the useContext 
// hook later.