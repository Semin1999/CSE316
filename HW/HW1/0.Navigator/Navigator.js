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