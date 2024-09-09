//nodejs.org

// 1.Variables - let (not var)
var aVar = 5;
let aLet = 6;

function test() {
    // aVar should exists for the whole function
    let a = 0;
    while (a < 10){
        // aLet exists from here to next close braces
       var aVar = 5;
        let aLet = 6;
        console.log(a);
        a = a + 1;
    }
}


// 2. Constnats
const myArray = [1,2,3,4,5];
const PI = 3.14;


// 3. Types
// Primitives = numbers, string, boolean, undefidned, null
// Reference = object, array, functions


// 4. Operator
// +, *, -, /, %, **

// 5. operaion
// ===, == 이 있는데 === 는 타입까지 보고 같은지 확인, == 는 모양만 확인 즉 "3" 과 3 이 같음


// 6. Ternary (불값 뒤에 물음표 박고 true false로 나누는거) (bool) ? true :false  
console.log("a == b: This is " + (a == b) ? 'True' : 'Not True');

// do while 과 while의 차이는 do while은 최소 한번은 실행된다는 것이다.
// foreach
// state in state list -> index number 가 나옴, state of statelist -> 순서에 맞는 객체가 튀어나옴, 