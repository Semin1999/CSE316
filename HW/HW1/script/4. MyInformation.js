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

    document.getelementby
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