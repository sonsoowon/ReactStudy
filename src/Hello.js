import React from 'react'

const Hello = ({color, name="기본값"}) => {
  /* props 비구조화 할당
    1. 객체의 key 값을 다른 이름으로 변경 가능
        Q. props의 key를 변경한 이름은 컴포넌트에서 인식되지 않는 듯 하다. 왜일까?
          ({color: myColor}를 사용해 색을 적용할 수 없다)
        A. ______

    2. 기본값 설정 가능
   */
  return (
    <div style={{color}}>안녕하세요 {name}</div>
  )
}

/* defaultProps
App에서 name이 없는 <Hello /> 컴포넌트를 렌더링할 경우 사용할 기본값을 선언한다

Q. props의 비구조화 할당 시 설정한 기본값과 defaultProps 중 어느 것이 우선할까?
A. defaultProps
*/
Hello.defaultProps = {
    name: "defaultProps"
}

export default Hello