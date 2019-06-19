import React, { useContext } from 'react';
import decrementContext from '../../../Contexts/decCounter';

const DecButton = () => {
    const decHandler = useContext(decrementContext);
    console.log(decHandler)
    return <button onClick={decHandler}> <i className="far fa-hand-point-right"></i> </button>
}

export default DecButton;