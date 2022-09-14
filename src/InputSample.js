import React, { useState } from 'react'

const InputSample = () => {
    
    /* 여러 input 상태 관리하기 */
    // 각 input에 대해 useState를 여러 번 선언하는 대신 객체로 초기화해서 관리한다.
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name, nickname} = inputs;

    // 이벤트에 등록한 함수에 이벤트 객체 e를 불러올 수 있다.
    // e.target은 이벤트가 발생한 DOM을 가리킨다.
    const onChange = (e) => {
        const {name, value} = e.target; // e.target이 가리키는 input DOM의 name과 value 을 불러온다.
        
        /* "불변성을 지킨다"
        리액트에서 객체의 상태 업데이트 시, 기존 객체를 직접 수정하는 것이 아니라 
        새로운 객체를 만들어 새 객체에 변화를 주어야 한다.
        */
        setInputs({
            ...inputs, // 기존 객체 inputs를 복사한 후
            [name]: value // name 키에 해당하는 값을 value로 설정한다.
        });
    }



    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    }

    
    
    return (
        // 
        <div>
            <input 
                name="name"
                placeholder="이름"
                value={name}
                onChange={onChange}
            />

            <input
                name="nickname"
                placeholder="닉네임"
                value={nickname}
                onChange={onChange}
            />

            <button onClick={onReset}>초기화</button>

            <div>
                값: {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample