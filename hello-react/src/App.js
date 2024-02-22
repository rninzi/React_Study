import { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// state의 color 값을 랜덤 색상으로 설정
function getRandomColor () {
  // 000000부터 ffffff 값을 반환
  return '#' + Math.floor(Math.random() * 16777215).toString(16); // 16777215를 hex로 표현하면 ffffff.
}

class App extends Component {
  state = {
    color: '#000000'
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
