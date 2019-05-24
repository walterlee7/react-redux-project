import React from 'react';
import Intro from './intro';
import Counter from './counter';
import './App.css';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

const initialState = {
    count: 0
};

// function reducer(state = initialState, action) {
//     console.log('reducer', state, action);
//     return state;
// }

var store = createStore(reducer);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

function reducer(state = initialState, action) {

    console.log('reducer', state, action);

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}


function App() {
    return (
        <div className="App">
            <Intro />
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    );
}

export default App;
