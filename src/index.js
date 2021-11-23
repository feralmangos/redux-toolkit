import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/index';
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


// You could also wrap nested components with provider,but only wrapped components and their child components, and the child components
// of the child components,and so on.Only those components will have access to Redux thereafter. And if the vast majority of your components need access
// to the store, if maybe your entire app, needs access to the store, you should typically provide, on this highest level.
// Now just by wrapping Provider around app, we're not telling react Redux and react therefore, which store we wanna provide. Sure. We only have one store,
// but that's stored in this index JS file, react Redux of course doesn't know that data file holds our store. Instead we have to import our store from,
// store index in this case.
// So that store,which we're exporting in there, we're importing this into index JS, and on this provider, which we import from react Redux.
// We have a store prop, which we have to set. And this one's a value, a value which is our Redux store.
// So this store, which we're importing here, we're setting this as a value, for the store prop on this provider component. And that now provides our Redux store,
// cue this react app. now our components in this app, the app component, and any other child components, can tap into that store.
// They can get data out of the store. They can set up a subscription to that data to be precise,and they also can dispatch actions.
