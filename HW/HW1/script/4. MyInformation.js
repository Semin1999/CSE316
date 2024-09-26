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
    const closeButtons = document.querySelectorAll(".close_btn");
    const saveButtons = document.querySelectorAll(".save_btn");
    const buttonUnits = document.querySelectorAll(".buttonUnit");
    const popups = document.querySelectorAll(".popup > div");
  
    function closePopup() {
      popups.forEach(popup => {
        popup.style.display = 'none';
      });
    }
  
    closeButtons.forEach(btn => {
      btn.addEventListener('click', closePopup);
    });
  
    saveButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        closePopup();
        alert("Saved!");
      });
    });
  
    buttonUnits.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const popupId = ["image_popup", "password_popup", "name_popup"][index];
        const popup = document.getElementById(popupId);
        if (popup) {
          popup.style.display = 'block';
        }
      });
    });
  });