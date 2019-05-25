import React from 'react';
import Intro from './intro';
import Counter from './counter';
import './App.css';

//redux state storage
import { createStore } from 'redux';

//element designation for state storage
import { Provider } from 'react-redux';

const initialState = {
    count: 0
};

//declare state storage with the reducer method
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
