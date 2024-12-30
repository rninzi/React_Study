# 14장 외부 API를 연동하여 뉴스 뷰어 만들기 실습

## 기능 설명

<img width="1510" alt="Screenshot 2024-12-28 at 18 04 49" src="https://github.com/user-attachments/assets/c7cfb852-c487-4b7e-a2d8-f2b53f3df66c" />

> 메인 화면

<img width="1512" alt="Screenshot 2024-12-26 at 22 15 16" src="https://github.com/user-attachments/assets/f2e897b3-90fc-4f70-919c-a5c606b9230a" />

> 기술 카테고리 진입 시 화면

1. axios로 News API 호출해 데이터 받아오기
   - ⚠️ 24.12 기준 NEWS API로 articles 호출 시 유효한 국가 옵션이 US로 한정됨
2. 뉴스 뷰어 UI(title, description, image) 제작 후 데이터 연동하기
3. 뉴스 카테고리 기능 구현하기
4. 리액트 라우터 적용하기
5. usePromise 커스텀 Hook 만들고 적용하기

### 사용 기술 스택

- axios (with News API)
- styled-components
- react-router-dom
