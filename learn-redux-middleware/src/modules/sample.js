import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

/*  액션 타입을 선언합니다.
    한 요청당 세 개를 만들어야 합니다. */

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

/*  thunk 함수를 생성합니다.
    thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치합니다. */

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

/*  초기 상태를 선언합니다.
    요청의 로딩 중 상태는 loading이라는 객체에서 관리합니다. */

const initialState = {
  post: null,
  users: null,
};

/*  로딩 상태 관리 모듈 분리로 해당 파일에선 로딩 중에 대한 상태 관리 없이 성공했을 때의 케이스만 관리하면 된다.
    만약 실패했을 때의 케이스도 관리하고 싶다면 _FAILURE가 붙은 액션을 리듀서에서 처리해주면 된다. */
const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 요청 완료
      },
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, // 요청 완료
      },
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
