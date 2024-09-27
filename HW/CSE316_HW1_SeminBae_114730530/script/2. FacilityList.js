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

  // It will be dynamic information for item list!
  // not hard coded from HTML  
  const items = [
    {
        img: "../AssignImages/gym.jpg",
        name: "Gym",
        explain: "sport hall",
        people: 4,
        location: "C1033",
        info: "Available to all"
    },
    {
        img: "../AssignImages/auditorium.jpg",
        name: "Auditorium",
        explain: "The Auditorium Theater",
        people: 30,
        location: "A234",
        info: "Available to all"
    },
    {
        img: "../AssignImages/pool.jpg",
        name: "Swimming Pool",
        explain: "aquatic center",
        people: 4,
        location: "C1033",
        info: "Available to all"
    },
    {
        img: "../AssignImages/seminar.jpg",
        name: "Seminar Room",
        explain: "lecture hall",
        people: 4,
        location: "C1033",
        info: "Available to all"
    },
    {
        img: "../AssignImages/conference.jpg",
        name: "Conference Room",
        explain: "meeting space",
        people: 4,
        location: "C1033",
        info: "Available to all"
    },
    {
        img: "../AssignImages/library.jpg",
        name: "Library",
        explain: "study and read books",
        people: 4,
        location: "C1033",
        info: "Available to all"
    },
];

// Dynamically allocate to HTML file after it DOM content loaded
// Allocate html structure with item information in the list
document.addEventListener('DOMContentLoaded', () => {

    // find list
    const list = document.querySelector('.list');

    // for each items have html structures with each item information
    items.forEach(item => {
      const listElement = document.createElement('li');
      listElement.className = 'listElement';

      listElement.innerHTML = `
        <img src="${item.img}" class="listImage">
          <div class="description">
            <b class="listName">${item.name}</b>
            <span class="listExplain">${item.explain}</span>
              <div class="peopleInfo">
                <img src="../AssignImages/twoPeople.png" class="twoPeople">
                  <span class="twoPeopleText"><span class="twoPeopleNumber">${item.people}</span></span>
                </div>
                <div class="locationInfo">
                  <img src="../AssignImages/locate.png" class="locate">
                  <span class="locateText"><span class="locateInfo">${item.location}</span></span>
                </div>
                <div class="info">
                  <img src="../AssignImages/information.png" class="information">
                  <span class="informationText">${item.info}</span>
                </div>
            </div>
        `;
        list.appendChild(listElement);
    });
});