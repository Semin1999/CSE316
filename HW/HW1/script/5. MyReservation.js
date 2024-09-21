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

  document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.list');
    list.innerHTML = ''; // 리스트 초기화

    const count = window.localStorage.length;
    
    console.log(count);

    if(count > 0){
      for (let i = 0; i < count; i++) {
        const savedItem = JSON.parse(window.localStorage.getItem(`reservedItem${i}`));
        if (savedItem) {
            updateList(savedItem);
        }
    }
    }
    else{
      const noReservation = document.getElementsByClassName("noReservation")[0];
      noReservation.innerHTML = "No Reservation Yet";
    }
});

function updateList(item) {
    const list = document.querySelector('.list');
    
    const listElement = document.createElement('li');
    listElement.className = 'listElement';

    listElement.innerHTML = `
        <img src="${item.img}" class="listImage">
        <div class="description">
            <b class="listName">${item.name}</b>
            <span class="listExplain">${item.purpose}</span>
            <div class="peopleInfo">
                <img src="../AssignImages/calander.png" class="twoPeople">
                <span>${item.date}</span>
            </div>
            <div class="locationInfo">
                <img src="../AssignImages/twoPeople.png" class="locate">
                <span>${item.number}</span>
            </div>
            <div class="info">
                <img src="../AssignImages/locate.png" class="information">
                <span>${item.location}</span>
            </div>
        </div>
    `;

    list.appendChild(listElement); // 리스트에 추가
}