import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    // state = { count: 0 }

    //increases counter by 1
    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // });

        this.props.dispatch({ type: "INCREMENT" });
    }

    //decreases counter by 1
    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // });

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
                    <button onClick={this.decrement} style={{ margin: 10, fontSize: 25 }}>-1</button>
                    <span className="count" style={{ margin: 20, fontSize: 50 }}>{this.props.count}</span>
                    <button onClick={this.increment} style={{ margin: 10, fontSize: 25 }}>+1</button>
                </div>
                <div style={{ margin: 10 }}>
                    <button onClick={this.multiply2} style={{ margin: 10, fontSize: 25 }}>x2</button>
                    <button onClick={this.divide2} style={{ margin: 10, fontSize: 25 }}>/2</button>
                    <button onClick={this.factorial} style={{ margin: 10, fontSize: 25 }}>Factorial</button>
                </div>
                <div style={{ margin: 10 }}>
                    <button onClick={this.reset} style={{ margin: 10, fontSize: 25 }}>Reset</button>
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