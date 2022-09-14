import Hello from './Hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello isSpecial/>
      <Hello color={"pink"} name={"수원"} isSpecial={true}/>
      <InputSample/>
    </Wrapper>
  );

  /* props
    - Wrapper 컴포넌트에서 props.children 조회 시 태그 사이의 Hello 컴포넌트를 렌더링한다.
    - isSpecial 과 isSpecial={true} 는 동일한 의미이다.
   */
}

export default App;
