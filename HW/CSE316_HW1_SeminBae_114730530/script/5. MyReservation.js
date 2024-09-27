/* 
Name: Semin Bae (114730530)
SBU-Email: semin.bae@stonybrook.edu 
*/

/* -- NAVIGATOR START -- */

// drop down function where called from html. make toggle show
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// drop down function where the mobile size (x <= 800)
// Get variables from myDropdownMobile id, if that's block then none, if none then show
function dropdownFunctionMobile() {
  const lst = document.getElementById("myDropdownMobile");
  if(lst.style.display == 'block'){
    lst.style.display = 'none'
  }
  else{
    lst.style.display = 'block'
  }
}

// same struction with dropdownfunctionmobiles
function toggleHamburgerMenu(){
  const lst = document.getElementById("hambuger");
  if(lst.style.display == 'block'){
    lst.style.display = 'none'
  }
  else{
    lst.style.display = 'block'
  }
}

// if it onclick the window the dropdown content will unshow
// remove dropdown when it click the window if it is in showing
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

// After DOM loaded
  document.addEventListener('DOMContentLoaded', () => {
    // get list variables from HTML and reset the list
    const list = document.querySelector('.list');
    list.innerHTML = '';

    const count = window.localStorage.length;
    
    // Get the all Local Item from the stroage, Receive with Json structure then parsing it, then allocate with HTML with innerHTML
    if(count > 0){
      for (let i = 0; i < count; i++) {
        const savedItem = JSON.parse(window.localStorage.getItem(`reservedItem${i}`));
        if (savedItem) {
            updateList(savedItem);
        }
    }
    }
    // If there is no any item in local structure then show..
    else{
      const noReservation = document.getElementsByClassName("noReservation")[0];
      noReservation.innerHTML = "No Reservation Yet";
    }
});

// This is dynamically allocate the information from local storage item
// same structre with FacilityList.js, but something different variables
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

    list.appendChild(listElement);
}