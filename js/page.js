// main menu
document.querySelector('.main-menu').addEventListener('mouseenter', () => {
	document.querySelector('.header-bg').style.display = "block";
});
document.querySelector('.main-menu').addEventListener('mouseleave', () => {
	document.querySelector('.header-bg').style.display = "none";
});


// modal
document.querySelector('.modal-open').addEventListener('click', () => {
	document.querySelector('#modal').style.display = "block";
});
document.querySelector('#close').addEventListener('click', () => {
	document.querySelector('#modal').style.display = "none";
});


// > 버튼 클릭 시
function styleAdd(){
	console.log('style')
	document.querySelector('.wallet-address').style.overflowY = "auto";
	document.querySelector('.wallet-address').style.height = "160px";
}