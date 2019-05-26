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
store.dispatch({ type: "MULTIPLY(2)" });
store.dispatch({ type: "DIVIDE(2)" });
store.dispatch({ type: "FACTORIAL" });
store.dispatch({ type: "SQUARE" });
store.dispatch({ type: "SQUARE-ROOT" });
store.dispatch({ type: "RESET" });

function reducer(state = initialState, action) {

    console.log('reducer', state, action);

    switch (action.type) {
        case 'INCREMENT':
            if (state.count <= 9999999) {
                return {
                    count: state.count + 1
                }
            } else {
                return {
                    count: "Too Large",
                }
            }
        case 'SQUARE':
            if (state.count <= 9999999) {
                return {
                    count: state.count * state.count
                }
            } else {
                return {
                    count: "Too Large",
                }
            }
        case 'SQUARE-ROOT':
            if (state.count <= 9999999) {
                return {
                    count: Math.sqrt(state.count)
                }
            } else {
                return {
                    count: "Too Large",
                }
            }
        case 'DECREMENT':
            if (state.count >= -9999999) {
                return {
                    count: state.count - 1
                }
            } else {
                return {
                    count: "Too Large",
                }
            }
        case 'MULTIPLY(2)':
            if (state.count <= 9999999 || state.count <= -9999999) {
                return {
                    count: state.count * 2
                }
            } else {
                return {
                    count: "Too Large",
                }
            }
        case 'DIVIDE(2)':
            if (state.count <= 9999999 || state.count <= -9999999) {
                return {
                    count: state.count / 2
                }
            } else {
                return {
                    count: "Too Large",
                }
            }
        case 'FACTORIAL':
            //recursive method to factorial the counter
            function factorialize(num) {
                if (num < 0)
                    return -1;
                else if (num === 0)
                    return 1;
                else {
                    return (num * factorialize(num - 1));
                }
            }

            if (state.count <= 9999999) {
                return {
                    count: factorialize(state.count)
                }
            } else {
                return {
                    count: "Too Large",
                }
            }
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
