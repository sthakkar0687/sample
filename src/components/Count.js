import React, { useState } from 'react'

export const Count = () => {
    const [count, setCount] = useState(0);
    return (

        <div>
            <div>Count :{count}</div>
            <br />
            <div>
                <button id='btnCounter' name='btnCounter'
                    onClick={() => { setCount(count + 1) }}
                    title=''>Click to increase count</button>
                <button id='btnCounter' name='btnCounter'
                    onClick={() => { setCount(count + 5) }}
                    title=''>Click to increase count by 5 </button>
            </div>
        </div >
    )
}
