const http = require("http");


// 서버 생성 및 요청 처리
const server = http.createServer((req, res) => {
    // login..
    // req: request로 프론트엔드로 받은 데이터
    // res: response로 프론트엔드로 전달하는 응답값 
    res.statusCode = 200; // ok상태 코드
    res.setHeader("Content-Type", "text/plain"); // 응답헤더
    res.end("skyrain~!!"); // 클라이언트에게 응답할 데이터
});


// http://localhost:8080 확인
server.listen(8080, () => {
    console.log("Server On");
});