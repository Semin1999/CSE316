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

// After DOM Loaded
document.addEventListener('DOMContentLoaded', () => {

    // Find variables from HTML files
    const dropdown = document.getElementById('dropdown');
    const button = document.getElementById('submit');
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');

    // when button click the onHitSubmit function caled
    button.onclick = onHitSubmit;

    // added the information to dropdown
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        dropdown.appendChild(option);
    });

    // Change event for Dropdown
    dropdown.addEventListener('change', () => handleDropdownChange(dropdown));

    // If you check yes, then will uncheck no, if you check no, then the yes will uncheck
    yes.addEventListener('change', () => {
        no.checked = false;
    });
    no.addEventListener('change', () => {
        yes.checked = false;
    });
    
    // 페이지 로드 시 첫 번째 항목으로 리스트 초기화
    updateList(items[0]);
});

// 리스트 업데이트 함수
const updateList = (item) => {
    const list = document.querySelector('.list');
    list.innerHTML = ''; // 리스트 초기화

    const listElement = document.createElement('li');
    listElement.className = 'listElement';

    listElement.innerHTML = `
        <img src="${item.img}" class="listImage">
        <div class="description">
            <b class="listName">${item.name}</b>
            <span class="listExplain">${item.explain}</span>
            <div class="peopleInfo">
                <img src="../AssignImages/twoPeople.png" class="twoPeople">
                <span>${item.people}</span>
            </div>
            <div class="locationInfo">
                <img src="../AssignImages/locate.png" class="locate">
                <span>${item.location}</span>
            </div>
            <div class="info">
                <img src="../AssignImages/information.png" class="information">
                <span>${item.info}</span>
            </div>
        </div>
    `;

    list.appendChild(listElement); // 리스트에 추가
};

// If hit the button of SUBMIT
function onHitSubmit() {
    const dropdown = document.getElementById('dropdown');
    const selectedItemName = dropdown.value;
    const selectedItem = items.find(item => item.name === selectedItemName);

    if (selectedItem) {
        // Get the information fron the HTML variabels
        const maxPeople = selectedItem.people;
        const purpose = document.getElementById('purpose').value;
        const number = document.getElementById('number').value;
        const dateInput = document.getElementById('date').value;
        const currDate = new Date();
        const yes = document.getElementById('yes');

        // 인원 수 체크
        if (number && number > maxPeople) {
            alert("Cannot reserve: exceeds maximum number of people");
        } 
        // Check there is date information or not
        else if (dateInput) {
            const inputDate = new Date(dateInput);
            // if the data is past
            if (inputDate <= currDate) {
                alert("Cannot reserve: date is in the past");
            }
            else {
                // If every condition has fulfilled
                alert("Successfully reserved!");
                
                const count = window.localStorage.length;

                // make instance with what I need information
                const reservedItem = {
                    img: selectedItem.img,
                    name: selectedItem.name,
                    location: selectedItem.location,
                    purpose: purpose,
                    number: number,
                    date: inputDate.toISOString().split('T')[0]
                };
                
                // save it local storage to use JSON stringify
                window.localStorage.setItem(`reservedItem${count}`, JSON.stringify(reservedItem));
            }
        }
        // If there is no checked 'yes' on SUNY korea
        else if (!yes.checked) {
            alert("Cannot reserve: should check Yes on SUNY Korea student");
        }
        // If there's no any comment on purpose
        else if (purpose === "") {
            alert("Cannot reserve: define the purpose of use");
        } 
        // If there's no choice in date
        else{
            alert("Cannot reserve: Should define the reservation date!");
        }
    }    
}

// the function call from dropdown
const handleDropdownChange = (dropdown) => {
    const selectedItem = items.find(item => item.name === dropdown.value);
    if (selectedItem) {
        updateList(selectedItem); // update with selected Item
    }
};

// Dynamic item list
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