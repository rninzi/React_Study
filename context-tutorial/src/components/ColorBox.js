import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {/* Function as a child or Render Props 구조 : 컴포넌트의 children 자리에 JSX를 반환하는 함수를 전달하는 것 */}
      {(value) => <div style={{ width: '64px', height: '64px', background: value.color }} />}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
