import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    //increases counter by 1
    increment = () => {
        this.props.dispatch({ type: "INCREMENT" });
    }

    //squares the counter by 2
    square = () => {
        this.props.dispatch({ type: "SQUARE" });
    }

    //takes square root of counter
    squareRoot = () => {
        this.props.dispatch({ type: "SQUARE-ROOT" });
    }

    //decreases counter by 1
    decrement = () => {
        this.props.dispatch({ type: "DECREMENT" });
    }

    //resets counter to 0
    reset = () => {
        this.props.dispatch({ type: "RESET" });
    }

    //multiply counter by 2
    multiply2 = () => {
        this.props.dispatch({ type: "MULTIPLY(2)" });
    }

    //divide counter by 2
    divide2 = () => {
        this.props.dispatch({ type: "DIVIDE(2)" });
    }

    //factorizes the counter
    factorial = () => {
        this.props.dispatch({ type: "FACTORIAL" });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div style={{ margin: 10 }}>
                    <span className="count">{this.props.count}</span>
                </div>
                <div style={{ margin: 10 }}>
                    <button onClick={this.decrement}>-1</button>
                    <button id="add" onClick={this.increment}>+1</button>
                </div>
                <div style={{ margin: 10 }}>
                    <button onClick={this.multiply2}>x2</button>
                    <button onClick={this.divide2}>/2</button>
                    <button onClick={this.factorial}>Factorial</button>
                </div>
                <div style={{ margin: 10 }}>
                    <button onClick={this.square}>Square(2)</button>
                    <button onClick={this.squareRoot}>Square Root</button>
                </div>
                <div style={{ margin: 10 }}>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

//links redux state parent storage to child props
function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);