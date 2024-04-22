import React, { useState } from 'react'

const Button = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='App'>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Btn User</button>

        </div>
    )
}

export default Button
