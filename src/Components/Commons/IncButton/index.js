import React, { useContext } from 'react';
import incrementContext from '../../../Contexts/counter';

const IncButton = () => {
    const incHandler = useContext(incrementContext);
    console.log(incHandler)
    return <button onClick={incHandler}> <i className="far fa-hand-point-left"></i> </button>
}

export default IncButton;