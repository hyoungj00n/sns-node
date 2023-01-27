"use strict";

const User = require('../../model/User');

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }
}

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
    // const id = req.body.id;
    // const password = req.body.password;

    // //const userStorage = new UserStorage(); 
    // //console.log(UserStorage.users);//static 변수로 사용해서 직접 사용가능
    // console.log(UserStorage.getUsers("id", "password"));

    // const response = {};
    // // if (users.id.includes(id)) {
    // //   const idx = users.id.indexOf(id);
    // //   if (users.password[idx] === password) {
    // //     response.success = true;
    // //     return res.json(response);
    // //   }
    // // }
    // response.success = false;
    // response.msg = "로그인 실패";
    //return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    console.log(response);
    return res.json(response);
  }
}

module.exports = {
  output,
  process,
};