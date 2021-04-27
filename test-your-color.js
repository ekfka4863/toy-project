// 잘 연결되었는지 콘솔에서 확인! 
// console.log('linked!');



// HTML 요소에 접근하기 
const $opneMoreTestMenuBtn = document.querySelector('.open-more-test-menu-btn');
const $closeMoreTestMenuBtn = document.querySelector('.close-more-test-menu-btn');
// const $startTestBtn = document.querySelector('.start-test-btn');
// const $moreTestMenuList = document.querySelector('.more-test-munu-hidden-wrapper');



// 이벤트 관련 함수 정의하기 
// const showTestModal = function() {
	
// }; 
// const openMoreTestMenu = function() {
// 	$moreTestMenuList.style.display = 'block';
// };
// const closeMoreTestMenu = function() {
//   $moreTestMenuList.style.display = 'none';
// };



// 이벤트 등록 
// $openMoreTestMenuBtn.addEventListener('click', () => {
// 	$moreTestMenuList.style.display = 'block';
// });
// $closeMoreTestMenuBtn.addEventListener('click', () => {
// 	$moreTestMenuList.style.display = 'none';
// });
// $startTestBtn.addEventListener('click', ()=> {});


// 메뉴 열기 버튼 클릭시 오픈   
document.querySelector('.open-more-test-menu-btn').addEventListener('click', () => {
	document.querySelector('.more-test-menu-hidden-wrapper').style.right = '0';
	// document.querySelector('.more-test-menu-hidden-wrapper').style.transitionDelay = '0.5s ease';
});

// // 메뉴 닫기 버튼 클릭시 클로즈  
document.querySelector('.close-more-test-menu-btn').addEventListener('click', () => {
	document.querySelector('.more-test-menu-hidden-wrapper').style.right= "-165px";
});

// start 버튼 클릭시 모달 창 오픈 
document.querySelector('.start-test-btn').addEventListener('click', () => {
	document.querySelector('.test-modal-wrapper').style.display= "block";
});

// quit 버튼 클릭시 모달 창 클로즈
document.querySelector('.quit-test-btn').addEventListener('click', () => {
	document.querySelector('.test-modal-wrapper').style.display= "none";
});

// next 버튼 클릭시 다른 텍스트로 변경 
document.querySelector('.next-test-btn').addEventListener('click', () => {
	document.getElementById('#test-modal-contents-paragraph').innerText 
	= "";
});
	// cf. 
	// https://www.python2.net/questions-1088553.htm
	// https://www.w3schools.com/js/js_htmldom_eventlistener.asp