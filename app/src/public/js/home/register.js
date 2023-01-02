"use strict"

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const registerBtn = document.querySelector("#button");
const name = document.querySelector("#name");
const confirmPassword = document.querySelector("#confirm-password");

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  }).then((res) => res.json())
    .then((res) => {
      if (res.sucess) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));//error 또는 new Error 둘중 하나만 이용
    });
}