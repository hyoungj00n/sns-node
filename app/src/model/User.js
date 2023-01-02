"use strict";

const UserStorage = require("./UserStorage");
class User {
  constructor(body) {
    this.body = body;
  }

  login() {

    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === this.body.id && password === this.body.password) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
    return { success: false, message: "존재하지 않는 아이디입니다." };
  }

  register() {
    UserStorage.save(this.body);
  }
}


module.exports = User;