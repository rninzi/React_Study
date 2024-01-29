import PropTypes from 'prop-types'; // 컴포넌트 필수 props 지정 or props type 지정

/* 함수 표현 시 function 키워드를 사용한 일반 함수 표현식과 화살표 함수는 this가 가리키는 scope가 다르지만, 
함수 컴포넌트 선언 시에는 무엇을 사용하든 큰 차이가 없다. */

const MyComponent = ({ name, favoriteNumber, children }) => {
  // 이처럼 함수 파라미터가 객체라면 사용 구조 분해 문법 사용 가능
  // const { name, children } = props; 비구조화 할당 : 객체에서 값을 추출하는 문법 === 구조 분해 문법

  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'minzzi',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent; // export? 모듈 내보내기 - 다른 파일에서 import 시 위에서 선언한 MyComponent 클래스를 불러오도록 세팅
