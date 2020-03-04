function openLanguages(evt, Language) {
  // Declare all variables
  var i, tabcontent, tablinks;
 
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
 
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
 
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(Language).style.display = "block";
  evt.currentTarget.className += " active";
}


function openLanguages1(evt, Language) {
  // Declare all variables
  var i, tabcontent1, tablinks1;
 
  // Get all elements with class="tabcontent" and hide them
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
 
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks1 = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }
 
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(Language).style.display = "block";
  evt.currentTarget.className += " active";
}


const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

  portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
      console.log(portfolioItem.childNodes[1].classList)
      portfolioItem.childNodes[1].classList.add('image-darken');
    });

    portfolioItem.addEventListener('mouseout', () => {
      console.log(portfolioItem.childNodes[1].classList)
      portfolioItem.childNodes[1].classList.remove('image-darken');
    });
  });