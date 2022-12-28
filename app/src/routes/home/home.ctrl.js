"use strict";

const users = {
  id: ["가", "나", "다"],
  password: ["123", "456", "789"],
};

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  }
}

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;


    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({
          success: true,
        })
      }
    }
    return res.json({
      success: false,
      msg: "로그인 실패",
    })
  }
}

module.exports = {
  output,
  process,
};