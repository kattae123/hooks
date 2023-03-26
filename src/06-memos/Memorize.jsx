import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import Small from './Small'

const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter}/> </h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary mt-2'
                onClick={ () => setShow( !show )}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

            <div className="pene-div" id='pene-div'></div>
        </>
    )
}

export default Memorize
