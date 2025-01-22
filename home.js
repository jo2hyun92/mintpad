// console.log(age);
// const age = 10;
// console.log(age);

const result = changeName();
console.log(result);

const name = "mintpad";

let named = "todo";
named = "sundeuk";

console.log(named);
// 숙제: 노션 예제 쳐보기

const object = {
    age: 20,
    name: {
        first: "lee",
        last: "hyun",
    },
}

object.age = 30;

console.log(object.age);

function changeName() {
    return "kim";
}

const testFn = function() {
    console.log("test");
} // 함수 표현식



// 메모리
// 1. 20은 -> 1번지 메모리
// 2. leehyun -> 2번지 메모리
// 3. age -> 3번지 메모리
// 4. name -> 4번지 메모리
// 18번 줄에서 30은 5번 메모리에 저장됨
// 5. object -> 10번 메모리(1,2,3,4의 메모리 주소를 바라보고 있는 메모리) + 원시타입이란? 참조타입이란?