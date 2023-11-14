// 변경버튼 누르면 취소/저장 나오게 하기
document.querySelector('.change-btn').addEventListener('click', () => {
  document.querySelector('.change-btn').style.display = "none";
	document.querySelector('.bts').style.display = "flex";
});
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.change-btn').style.display = "block";
	document.querySelector('.bts').style.display = "none";
});


// 비밀번호 재설정 누르면 popup 나오게 하기
document.querySelector('.password-reset').addEventListener('click', () => {
  document.querySelector('#popup').style.display = "block";
});
document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('#popup').style.display = "none";
});


document.querySelector('.error').addEventListener('click', () => {
  document.querySelector('.error-message').style.display = "block";
});


// toast
//1. 토스트 메시지, 버튼요소를 변수에 대입
let toastMessage1 = document.querySelector('.toast_message1');
let toastMessage2 = document.querySelector('.toast_message2');
const qrBtn = document.querySelector('.copy');
const addressBtn = document.querySelector('.address-copy');

//2. 토스트 메시지 노출-사라짐 함수 작성
function toastOn1(){
    toastMessage1.classList.add('active');
    setTimeout(function(){
        toastMessage1.classList.remove('active');
    },1500);
}
function toastOn2(){
    toastMessage2.classList.add('active');
    setTimeout(function(){
        toastMessage2.classList.remove('active');
    },1500);
}

//3. 토스트 버튼에 이벤트 연결
qrBtn.addEventListener('click',function(){
    toastOn1();
});
addressBtn.addEventListener('click',function(){
    toastOn2();
});