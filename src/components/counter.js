import React from 'react';

class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div style={{ margin: 10 }}>
                    <button onClick={this.decrement} style={{ margin: 10, fontSize: 50 }}>-</button>
                    <span style={{ margin: 20, fontSize: 50 }}>{this.state.count}</span>
                    <button onClick={this.increment} style={{ margin: 10, fontSize: 50 }}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter;