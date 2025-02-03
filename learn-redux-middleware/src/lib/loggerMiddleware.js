// store: 리덕스 스토어 인스턴스, action: 디스패치된 액션, next: 함수 형태(store.dispatch)와 비슷한 역할
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); // 액션 타입으로 log를 그룹화
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어 혹은 리듀서 전달 (그다음 처리해야 할 미들웨어에게 액션을 넘겨주고, 만약 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다.)
  console.log('다음 상태', store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

/* 위 코드는 아래와 같다.
    const loggerMiddleware = function loggerMiddleware(store) {
        return function(next) {
            return function(action){
            };
        };
    };
*/

export default loggerMiddleware;
