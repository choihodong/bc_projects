//조건문, 반복문, 제어문, 연산자
//--------------------------

//조건문 : 만약에 이러면 저렇게하고, 그러면 그렇게 하소
//만약에 아이수아뭬리카노가 1500원이면 싸다, 1500원보다 비싸면 비싸유, 1500원보다 싸면 굿이라고 출력하시오
let ice_coffee = 1500

// 1500원이면
if(ice_coffee==1500){
//싸다
//수행문이 한줄이면 {}생략가능
console.log('싸다')
}

// 2000원이면
else if(ice_coffee>1500){
console.log('비싸다')
    //비싸다
}

// 1000원이면
else{console.log('굿')}
//굿

if(ice_coffee<=1500){
    console.log('싸다')

}
else{
    console.log('비싸다')
}
0
//상황이 2개이고, 해야할 일이 값을 세팅하는 것이라면?  -> 삼항연산자 사용
let result
if(ice_coffee<=1500){
    result = ('싸다')

}
else{
    result = ('비싸다')
}
console.log(result)
//삼항연산자 -> 조건? 참일때값 : 거짓일때 값

result =  ice_coffee <=1500 ? '싸다' : '비싸다'
console.log(result)


