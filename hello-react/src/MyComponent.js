import { Component } from 'react';
import PropTypes from 'prop-types'; // 컴포넌트 필수 props 지정 or props type 지정

class MyComponent extends Component {
  static defaultProps = {
    name: 'minzzi',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

/*
클래스형 컴포넌트에선 defaultProps와 propTypes 설정을 class 내부에서 지정할 수도 있다.

MyComponent.defaultProps = {
  name: 'minzzi',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
*/

export default MyComponent; // export? 모듈 내보내기 - 다른 파일에서 import 시 위에서 선언한 MyComponent 클래스를 불러오도록 세팅
