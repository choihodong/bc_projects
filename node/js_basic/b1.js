// 1.변수
// java는 =>  int a= 10;
//          타입 변수명;-> 컴파일언어
// js는  => var/const/let a=10
// ;는 생략가능
// js는 변수에 값이 세팅될때 타입이 결정된다=> 타입추론
// javascrip, ptyhon, kotlin, scalar,. . 동일하다(타입추론) -> 인터프린터언어 라고함(한줄한줄 바로해석)

var a   //a의 타입은 모른다
var b=10;  //이렇게 쓰면 b= 정수타입이다
console.log(typeof a, a)
console.log(typeof b, b)

//ls 현재 디렉토리 목록 확인
//$ ls 리눅스
//$ dir 윈도우
//디렉토리 변경 $ cd 폴더명
//상위로 이동 $ cd ..ls
//..상위 디렉토리 / .현재 디렉토리
//두칸이 가고싶다? ../..
//실행 $ node b1.js
//js에서 변수를 선언하고 아무것도 세팅하지 않으면 타입 -> undefined
//var, const, let
//상수 : 값이 절대로 바뀌지 않는다-> 통상 대문자를 사용
 const PI=3.14
 console.log(PI)
// PI=3.144 상수라서 오류가 난다 이건
//var -> let 대체하시오. 표준에서 지향하는 방향
let name= '점심'
console.log(name)