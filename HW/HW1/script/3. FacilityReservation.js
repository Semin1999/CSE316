/* 
Name: Semin Bae (114730530)
SBU-Email: semin.bae@stonybrook.edu 
*/

/* -- NAVIGATOR START -- */

function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function dropdownFunctionMobile() {
    const lst = document.getElementById("myDropdownMobile");
    if(lst.style.display == 'block'){
      lst.style.display = 'none'
    }
    else{
      lst.style.display = 'block'
    }
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
  
  function toggleHamburgerMenu(){
    const lst = document.getElementById("hambuger");
    if(lst.style.display == 'block'){
      lst.style.display = 'none'
    }
    else{
      lst.style.display = 'block'
    }
  }
  
  /* -- NAVIGATOR END -- */

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('dropdown');
    const button = document.getElementById('submit');
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');

    // 버튼 클릭 시 제출 함수 실행
    button.onclick = onHitSubmit;

    // 드롭다운 항목 추가
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        dropdown.appendChild(option);
    });

    // 드롭다운 변화 이벤트
    dropdown.addEventListener('change', () => handleDropdownChange(dropdown));

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

function onHitSubmit() {
    const dropdown = document.getElementById('dropdown');
    const selectedItemName = dropdown.value;
    const selectedItem = items.find(item => item.name === selectedItemName);

    if (selectedItem) {
        const maxPeople = selectedItem.people;
        const purpose = document.getElementById('purpose').value;
        const number = document.getElementById('number').value;
        const dateInput = document.getElementById('date').value; // 입력된 날짜 문자열
        const currDate = new Date(); // 현재 날짜
        const yes = document.getElementById('yes');

        // 인원 수 체크
        if (number && number > maxPeople) {
            alert("Cannot reserve: exceeds maximum number of people");
        } 
        // 날짜 체크
        else if (dateInput) {
            const inputDate = new Date(dateInput);
            if (inputDate < currDate) {
                alert("Cannot reserve: date is in the past");
            }
            else {
                alert("Successfully reserved!");
            
                const count = window.localStorage.length;

                const reservedItem = {
                    img: selectedItem.img,
                    name: selectedItem.name,
                    location: selectedItem.location,
                    purpose: purpose,
                    number: number,
                    date: inputDate.toISOString().split('T')[0]
                };
            
                window.localStorage.setItem(`reservedItem${count}`, JSON.stringify(reservedItem));
            
                const savedItem = JSON.parse(window.localStorage.getItem(`reservedItem${count}`));
            
                console.log(`saved!! ${savedItem.date} / ${savedItem.img} / ${savedItem.name} / ${savedItem.location} / ${savedItem.purpose} / ${savedItem.number}`);
            }
        }
        // SUNY 체크 확인
        else if (!yes.checked) {
            alert("Cannot reserve: should check Yes on SUNY Korea student");
        }
        // 목적 확인
        else if (purpose === "") {
            alert("Cannot reserve: define the purpose of use");
        } 
        else{
            alert("Cannot reserve: Should define the reservation date!");
        }
    }    
}

// 드롭다운 변화 이벤트 처리 함수
const handleDropdownChange = (dropdown) => {
    const selectedItem = items.find(item => item.name === dropdown.value);
    if (selectedItem) {
        updateList(selectedItem); // 선택된 항목 업데이트
    }
};



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