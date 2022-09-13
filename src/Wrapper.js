import React from 'react'

/* props.children
컴포넌트 태그 사이의 내용을 조회하려면 props.children을 사용해 
Wrapper 컴포넌트 내부에 렌더링 한다.
children이 아닌 다른 이름으로는 렌더링할 수 없다.
*/

const Wrapper = ({children}) => {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper