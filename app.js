const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 현재 폴더 정적 파일 제공
app.use(express.static(__dirname));

// 루트 접속 시 az.html 반환
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "az.html")); // 파일 이름 변경
});

app.listen(port, () => {
console.log(`서버 실행 중: http://localhost:${port}`);
});
