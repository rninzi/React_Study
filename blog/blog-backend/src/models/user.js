import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// 인스턴스 메서드 작성 시 반드시 `function` 키워드를 사용해 구현해야 한다. (함수 내부에서 this로 문서 인스턴스를 가리키기 위해서)
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true / false
};

// static 함수에서의 this는 모델(User)를 가리킨다.
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

// 응답할 데이터에서 hashedPassword 필드 제거
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣습니다.
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣습니다.
    {
      expiresIn: '7d', // 7일 동안 유효함
    },
  );
  return token;
};

const User = mongoose.model('User', UserSchema);
export default User;
