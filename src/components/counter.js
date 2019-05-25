import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    // state = { count: 0 }

    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // });

        this.props.dispatch({ type: "INCREMENT" });
    }

    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // });

        this.props.dispatch({ type: "DECREMENT" });
    }

    reset = () => {
        this.props.dispatch({ type: "RESET" });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div style={{ margin: 10 }}>
                    <button onClick={this.decrement} style={{ margin: 10, fontSize: 50 }}>-</button>
                    <span className="count" style={{ margin: 20, fontSize: 50 }}>{this.props.count}</span>
                    <button onClick={this.increment} style={{ margin: 10, fontSize: 50 }}>+</button>
                </div>
                <div style={{ margin: 10 }}>
                    <button onClick={this.reset} style={{ margin: 10, fontSize: 30 }}>Reset</button>
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