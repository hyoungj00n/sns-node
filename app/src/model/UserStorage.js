"use strict";

const fs = require("fs");

class UserStorage {
  static #users = {
    "id": ["가", "나", "다"],
    "password": ["123", "456", "789"],
    "name": ["김", "최", "이"]
  }

  static getUsers(...fields) {

    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {//users object에 해당하는 key값이 있는지 확인
        newUsers[field] = users[field];//newUsers에 field에 있는 users만 추가한다.
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  static getUserInfo(id) {
    //fs.readFile("./package.json", (err, data) => {
    //if (err) throw err;
    //})
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {

  }
}

module.exports = UserStorage;