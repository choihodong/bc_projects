//함수 
//반복작업시 사용, 복잡한 루틴을 하나로 묶을때 단위로 사용 ->호출하여 사용
//함수, 메소드 => call by value 특징


//규칙
//표준 함수: 이 형태만 정의된 위치에 관계없이 선행되서 사용 가능하다.
function add(x,y){
    return x+y
}
console.log(add(1,2))

//익명 함수 = 1회성으로 사용-> 이름이 없어도 구동되는 형태에서 사용 콜백함수의 형태로 사용이 된다. 
//console.log(add(2,3))-> 먼저쓰면 에러가 난다요
let add2 =function (x,y){//변수의 값도 함수를 넣으면 이름이 생겨서 호출 할 수 있다.
    return x+y
}
console.log(add(2,3))


//형태 : 클로저 => 함수 안에 함수가 정의되어 있다.

//형태 : 콜백 함수 => 비동기적 상황에서 사용된다=> 콜백함수 매커니즘을 이해하면 노드의 50%는 끝난다고 봅니다.
function callDB(param,cb){
    //뭔가 비동기 작업이 진nod행되었고, 비동기: 디비쿼리, 파일읽고쓰기, 네이트워크 => I/O 작업
    //그결과를 돌려주겠다.
    cb(param+1)

} 
callDB(100, function(data){
    console.log('돌려받은데이터->',data)
})

// 모던 스크립트에서 익명함수를 간략하게 표현하는 에로우함수(화살표함수) 추가
//1. fucntion 제거
//2. 파라미터가 1개면 ()둔다
//3. => 추가
//4. 수행문 statement 1개면 {} 생략할 수 있다.
//5. 만약 생략했는데 return 이라면 return 생략 가능

let add3 = (x,y)=> x+y
console.log(add(100,101))

let add2 = (x,y) =>x+y
console.log(add2(1.2))