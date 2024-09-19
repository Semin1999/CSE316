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
  const dateControl = document.querySelector('input[type="date"]');
  const numberControl = document.querySelector('input[type="number"]');
  const dropdown = document.getElementById('dropdown');
  const list = document.querySelector('.list');

  // 현재 날짜 설정
  dateControl.value = new Date().toISOString().split('T')[0];

  // 드롭다운 항목 추가
  items.forEach(item => {
      const option = document.createElement('option');
      option.value = item.name;
      option.textContent = item.name;
      dropdown.appendChild(option);
  });

  // 드롭다운 변화에 따른 리스트 업데이트 함수
  const updateList = (selectedItem) => {
      while (list.firstChild) {
          list.removeChild(list.firstChild);
      }

      const listElement = document.createElement('li');
      listElement.className = 'listElement';

      listElement.innerHTML = `
          <img src="${selectedItem.img}" class="listImage">
          <div class="description">
              <b class="listName">${selectedItem.name}</b>
              <span class="listExplain">${selectedItem.explain}</span>
              <div class="peopleInfo">
                  <img src="../AssignImages/twoPeople.png" class="twoPeople">
                  <span class="twoPeopleText"><span class="twoPeopleNumber">${selectedItem.people}</span></span>
              </div>
              <div class="locationInfo">
                  <img src="../AssignImages/locate.png" class="locate">
                  <span class="locateText"><span class="locateInfo">${selectedItem.location}</span></span>
              </div>
              <div class="info">
                  <img src="../AssignImages/information.png" class="information">
                  <span class="informationText">${selectedItem.info}</span>
              </div>
          </div>
      `;

      list.appendChild(listElement);
  };

  // 드롭다운 변화 이벤트 리스너
  dropdown.addEventListener('change', () => {
      const selectedItem = items.find(item => item.name === dropdown.value);
      if (selectedItem) {
          updateList(selectedItem);
      }
  });

  // 페이지 로드 시 첫 번째 항목의 리스트 업데이트
  const initialItem = items[0];
  updateList(initialItem);
});