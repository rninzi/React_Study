import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // [쿼리파라미터 조회 or 수정 가능 메서드들이 담긴 객체, 쿼리파라미터를 객체 형태로 업데이트 할 수 있는 함수]
  const detail = searchParams.get('detail'); // get()으로 특정 쿼리파라미터 조회 가능
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true }); // 쿼리파라미터의 조회 값은 무조건 문자열 타입! 'true'로 비교하는 이유
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1; // 위와 같은 이유로 숫자형도 반드시 숫자 타입으로 변환 필요
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
