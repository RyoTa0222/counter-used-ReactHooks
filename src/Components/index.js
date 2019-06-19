import * as React from 'react';
import decrementContext from '../Contexts/decCounter';
import incrementContext from '../Contexts/counter';
import DecButton from './Commons/DecButton';
import IncButton from './Commons/IncButton';
const { useState } = React;

export const Counter = () => {
    const [count, setCount] = useState({ number: 1, show: false });

    const incAmount = () => {
        count.number += 1;
        count.show = true;
        console.log('aaaa')
        setCount({ number: count.number, show: count.show })
    }
    const decAmount = () => {
        count.number -= 1;
        count.show = true;
        setCount({ number: count.number, show: count.show })
    }
    return (
        <>
            <incrementContext.Provider value={() => incAmount()}>
                <IncButton />
            </incrementContext.Provider>
            <span>{count.number - 1}</span>
            <span>{count.number}</span>
            <span>{count.number + 1}</span>
            <decrementContext.Provider value={() => decAmount()}>
                <DecButton />
            </decrementContext.Provider>
            <button onClick={() => setCount({ number: 1, show: false })}><i className="far fa-thumbs-up">reset</i></button>
        </>
    );
}
