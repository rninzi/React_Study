import { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  // this.context 조회 시 현재 Context의 value를 가리킴
  static contextType = ColorContext;

  // static contextType의 장점 → 클래스 메서드에서도 Context에 넣어둔 함수 호출 가능, but 한 클래스에서 하나의 Context만 사용 가능
  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubColor = (subcolor) => {
    this.context.actions.setSubColor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
