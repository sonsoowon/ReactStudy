import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        // 함수를 등록하는 방식으로도 값을 업데이트할 수 있다.
        // setNumber(number + 1); 과 같은 의미
        setNumber(prevNumber => prevNumber + 1);
        
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <h1>0</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter