/* 
Name: Semin Bae (114730530)
SBU-Email: semin.bae@stonybrook.edu 
*/

/* -- NAVIGATOR START -- */
function dropdownFunction() {

    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
      
    if (!event.target.matches('.dropbtn')) {
      
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      
      for (i = 0; i < dropdowns.length; i++) {
      
        var openDropdown = dropdowns[i];
      
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      
      }
    }
  }
  /* -- NAVIGATOR END -- */

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalClose = document.querySelector('.close_btn');

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener('click',function(){
  	//'on' class 추가
    modal.classList.add('on');
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener('click',function(){
    //'on' class 제거
    modal.classList.remove('on');
});