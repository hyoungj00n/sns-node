"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {

    const body = this.body;
    try {
      const { id, password } = await UserStorage.getUserInfo(body.id);
      if (id) {
        if (id === this.body.id && password === this.body.password) {
          return { success: true };
        }
        return { success: false, message: "비밀번호가 틀렸습니다." };
      }
      return { success: false, message: "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { success: false, message: err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}


module.exports = User;