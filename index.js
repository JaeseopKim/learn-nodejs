const http = require("http");
const fs = require("fs");   // 파일시스템 모듈(html파일 읽기 위함)
const path = require("path");    // 경로처리를 위한 모듈

// 서버 생성 및 요청 처리
const server = http.createServer((req, res) => {
    // login..
    // req: request로 프론트엔드로 받은 데이터
    // res: response로 프론트엔드로 전달하는 응답값 
    //res.statusCode = 200; // ok상태 코드
    //res.setHeader("Content-Type", "text/plain"); // 응답헤더
    //res.end("skyrain~!!"); // 클라이언트에게 응답할 데이터

    // 1. GET 2.POST 3. PUT 4. DELETE
    if (req.method === "GET") {
        // 조건식 True 인 경우 실행
        if (req.url === "/") {
            // index.html 응답
            fs.readFile(path.join(__dirname, "index.html"),
                'utf-8',
                (err, data) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end("Error");
                    }
                    else {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "text/html");
                        res.end(data); // html파일 변환
                    }
                });
        } else if (req.url === "/about") {
            // about.html 응답
            fs.readFile(path.join(__dirname, "about.html"),
                'utf-8',
                (err, data) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end("Error");
                    }
                    else {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "text/html");
                        res.end(data); // html파일 변환
                    }
                });
        } else {
            // contact.html 응답
            fs.readFile(path.join(__dirname, "contact.html"),
                'utf-8',
                (err, data) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end("Error");
                    }
                    else {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "text/html");
                        res.end(data); // html파일 변환
                    }
                });
        }
    }


});


const main1 = () => {
    /*
    function add(a, b) {
        return a + b;
    }
    */

    // 여기에 화살표 함수로 다시 작성하세요.
    const add = (a, b) => {
        return a + b;
    }
    console.log(add(5, 3)); // 예상 결과: 8
};

const main2 = () => {
    /*
    function add(a, b) {
        return a + b;
    }
    */

    // 여기에 화살표 함수로 다시 작성하세요.
    // 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
    const minus = (a, b) => {
        return a - b;
    }

    // 함수 테스트
    console.log(minus(60, 20));// 예상 결과: 40
};

const main3 = () => {

    const introduce = (name, age) => {
        return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
    };

    // 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
    console.log(introduce("김철수", 25));// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."
};

const main4 = () => {

    const orderSandwich = (order) => {
        return (order === 'vegan') ? '🥖 + 🥬 + 🍅 + 🥑 + 🥒' : '🥖 + 🥬 + 🍅 + 🧀 + 🥓';
    }
    // 함수 테스트 - 아래 코드는 수정하지 마세요
    console.log("기본 샌드위치 주문: " + orderSandwich());
    console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
    console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

    /* 예상 결과:
    기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
    기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
    비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
    */
};



const main5 = () => {

    // 여기에 for문을 작성하세요.
    const forValue = () => {
        let text = '';
        for (let i = 5; i > 0; i--)
            text += i + ' ';
        return text;
    }

    //console.log("예상 출력: 5 4 3 2 1");
    console.log("예상 출력: " + forValue());
};

const main6 = () => {

    const numbers = [1, 2, 3, 4, 5];
    const incrementedNumbers = numbers.map(numbers => numbers + 1);
    console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]

};



// http://localhost:8080 확인
server.listen(8080, () => {
    console.log("Server On");
    console.log("🚀 __dirname:", __dirname);
    main4();
});

// 정적파일 서빙
// index.html, about.html, contact.html