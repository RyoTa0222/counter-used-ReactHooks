import * as React from 'react';
const { useState } = React;

export const Counter = () => {
    const [count, setCount] = useState({ number: 1, show: false });
    const incAmount = () => {
        count.number += 1;
        count.show = true;
        setCount({ number: count.number, show: count.show })
    }
    const decAmount = () => {
        count.number -= 1;
        count.show = true;
        setCount({ number: count.number, show: count.show })
    }
    return (
        <>
            <button onClick={() => incAmount()}> <i className="far fa-hand-point-left"></i> </button>
            <span>{count.number - 1}</span>
            <span>{count.number}</span>
            <span>{count.number + 1}</span>
            <button onClick={() => decAmount()}> <i className="far fa-hand-point-right"></i> </button>
            <button onClick={() => setCount({ number: 1, show: false })}><i className="far fa-thumbs-up">reset</i></button>
        </>
    )
}

// this.state = {
//     count: {
//         number: 1,
//     }
// }
// var { number } = this.state.count;
// number = number + 1;
// this.setState({
//     count
// })