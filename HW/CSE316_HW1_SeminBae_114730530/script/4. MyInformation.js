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
  
// After DOM locaded
  document.addEventListener('DOMContentLoaded', () => {

    // Get the variables
    const closeButtons = document.querySelectorAll(".close_btn");
    const saveButtons = document.querySelectorAll(".save_btn");
    const buttonUnits = document.querySelectorAll(".buttonUnit");
    const popups = document.querySelectorAll(".popup > div");
  
    // Make Function for close display
    function closePopup() {
      popups.forEach(popup => {
        popup.style.display = 'none';
      });
    }

    // allocate function to close button
    closeButtons.forEach(btn => {
      btn.addEventListener('click', closePopup);
    });
    
    // allocate functiono to save button, it is same with close button but alert saved!
    saveButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        closePopup();
        alert("Saved!");
      });
    });
    
    // add event to button
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