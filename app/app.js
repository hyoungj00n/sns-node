//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//미들웨어
app.use("/", home);

app.use(express.static(`${__dirname}/src/public`));//${__dirname}은 현재 디렉토리를 의미한다.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extende: true }));//URL을 통해 전달되는 데이터에 한글,공백등과 같은 문자가 포함 될경우
//제대로 인식되지 않는 문제해결
module.exports = app;
