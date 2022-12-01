import PropTypes from 'prop-types'
import React, { useState } from 'react'

const CounterApp = ({ value = 0 }) => {
    const [num, setNum] = useState(value)

    const aumentar = (e) => setNum(num + 1)
    const disminuir = (e) => setNum(num - 1)
    const resetear = (e) => setNum(0)

    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{ num }</h2>
            <div className='contenedor-botones'>
                <button onClick={disminuir}>-1</button>
                <button onClick={resetear}>Resetear</button>
                <button onClick={aumentar}>+1</button>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp