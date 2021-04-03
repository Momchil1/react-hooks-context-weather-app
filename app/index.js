import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

ReactDom.render(<App/>, document.querySelector('#app'));

// useReducer hook (as a replacement of Redux library) notes:
// 1. Pros:
// If we were using Redux, we’d have had to use Provider to wrap all the components,
// create a separate store, and then for each component that needs to connect to the 
// store, wrap them in a HOC with connect.
// With useReducer, however, we can bypass using all that boilerplate and just pass 
// in the store values directly to the components as props.

// For further improvement we can use the useContext Hook to make the store and 
// dispatch function available to all components without having to manually pass it down by hand.

// In this app we will use the useReducer hook to hold the global state and the useContext
// hook, so every component will have access to the global state.

// 2. Cons:
// Your store is not truly global. Redux’s implementation of a global store means that 
// the store itself isn’t tied to any component; it’s separate from your app.
// The state you get from useReducer is component-dependent, along with its dispatch 
// function. This makes it impossible to use the dispatch from one useReducer call 
// on a different reducer. For instance, take these two separate stores and their 
// dispatch functions:
// const [notificationStore, dispatch1] = useReducer(initialState, notificationReducer)
// const [authStore, dispatch2] = useReducer(initialState, authReducer)
// Because of the dependence of the dispatch function on the useReducer call that 
// returned it, you can’t use dispatch1 to trigger state updates in authStore, nor can
// you use dispatch2 to trigger state updates in notificationStore.
// This limitation means you have to manually keep track of which dispatch function 
// belongs to which reducer.