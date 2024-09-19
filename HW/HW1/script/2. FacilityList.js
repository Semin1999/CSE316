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

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.list');

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