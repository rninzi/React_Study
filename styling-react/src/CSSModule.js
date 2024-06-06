import classNames from 'classnames/bind';
import styles from './CSSModule.scss';

const cx = classNames.bind(styles); // 여러 개의 클래스 사용 or 조건부 클래스 설정 시 유용

const CSSModule = () => {
  console.log(styles);
  return (
    <div className={cx('wrapper','inverted')}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
