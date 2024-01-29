/* 함수 표현 시 function 키워드를 사용한 일반 함수 표현식과 화살표 함수는 this가 가리키는 scope가 다르지만, 
함수 컴포넌트 선언 시에는 무엇을 사용하든 큰 차이가 없다. */

const MyComponent = () => {
  return <>나의 새롭고 멋진 컴포넌트</>;
};

export default MyComponent; // export? 모듈 내보내기 - 다른 파일에서 import 시 위에서 선언한 MyComponent 클래스를 불러오도록 세팅
