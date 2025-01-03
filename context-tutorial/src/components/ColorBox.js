import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {/* Function as a child or Render Props 구조 : 컴포넌트의 children 자리에 JSX를 반환하는 함수를 전달하는 것 */}
      {({ state }) => (
        <>
          <div style={{ width: '64px', height: '64px', background: state.color }} />
          <div style={{ width: '32px', height: '32px', background: state.subcolor }} />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
