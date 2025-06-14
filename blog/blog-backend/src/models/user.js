import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

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

const User = mongoose.model('User', UserSchema);
export default User;
