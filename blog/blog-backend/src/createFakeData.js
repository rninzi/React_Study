import Post from './models/post.js';

export default async function createFakeData() {
  // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트 #${i}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nibh lorem. Ut ut metus nec eros semper pulvinar eget eu odio. Donec pharetra eros sed erat posuere pulvinar. Vivamus maximus vulputate mauris, porta mollis nunc molestie vel. Nam euismod tristique justo ac facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ullamcorper lacinia rutrum. Cras luctus ipsum tortor. Etiam accumsan et risus tincidunt auctor. Sed pellentesque consequat lorem, id scelerisque libero congue non. Pellentesque gravida, ex sit amet maximus malesuada, neque est fermentum lacus, eu aliquet eros neque ac mauris. Aliquam lectus sem, gravida nec eros efficitur, tempus sollicitudin nunc. Nam eleifend tortor metus, vel lobortis felis venenatis ut. Donec sed ligula sed lorem pellentesque finibus in nec enim.',
    tags: ['가짜', '데이터'],
  }));

  try {
    const inserted = await Post.insertMany(posts);
    console.log(inserted);
  } catch (e) {
    console.log(e);
  }
}
