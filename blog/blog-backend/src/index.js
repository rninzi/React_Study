const Koa = require('koa');

const app = new Koa();

// 미들웨어 함수를 애플리케이션에 등록 ctx(context): 웹 요청과 응답에 관한 정보 next: 현재 처리 중인 미들웨어의 다음 미들웨어
app.use((ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== '1') {
    ctx.status = 401; // Unauthorized
    return;
  }
  next();
});

// 미들웨어는 app.use를 사용해 등록되는 순서대로 처리
app.use((ctx, next) => {
  console.log(2);
  next();
});

// next를 사용하지 않는 경우 생략 가능
app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
