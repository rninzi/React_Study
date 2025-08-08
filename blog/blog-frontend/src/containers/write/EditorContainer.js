import { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, originalPostId } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    originalPostId: write.originalPostId,
  }));

  const onChangeField = useCallback(
    payload => dispatch(changeField(payload)),
    [dispatch],
  );
  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      // 포스트 수정 중이 아닐 때
      if (!originalPostId) {
        dispatch(initialize());
      }
    };
  }, [dispatch, originalPostId]);
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
