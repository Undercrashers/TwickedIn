// script.js




document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.navbar-profile img');
    const dropdownMenu = document.createElement('div');
  
    dropdownMenu.classList.add('dropdown-menu');
    dropdownMenu.innerHTML = `
      <a href="user.html">Profile</a>
      <a href="#">Logout</a>
    `;
  
    document.body.appendChild(dropdownMenu);
  
    profileImg.addEventListener('click', () => {
      dropdownMenu.classList.toggle('visible');
      const rect = profileImg.getBoundingClientRect();
      dropdownMenu.style.top = `${rect.bottom}px`;
      dropdownMenu.style.left = `${rect.left-20}px`;
    });
  
    window.addEventListener('click', (e) => {
      if (!profileImg.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('visible');
      }
    });
  });
  


  const actionButton = document.getElementById('actionButton');
  const container = document.querySelector('.container');
  
  actionButton.addEventListener('click', function() {
    container.classList.toggle('collapsed');
  });



  function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  }
  
  
  function createUserComment() {
    var commentBox = document.getElementById("user-comment");
    if (commentBox.value.trim().length == 0) {
      return;
    }
    document.getElementById("custom-comment").innerHTML =
      "<b>You</b> " + commentBox.value;
    commentBox.value = "";
  }
  
 
 
  
  updateText();

  function toggleDescription() {
    const truncatedDescription = document.querySelector('.truncated-description');
    const fullDescription = document.querySelector('.full-description');
    const showMoreButton = document.querySelector('button');

    if (truncatedDescription.style.display !== 'none') {
        truncatedDescription.style.display = 'none';
        fullDescription.style.display = 'block';
        showMoreButton.textContent = 'Show less';
    } else {
        truncatedDescription.style.display = 'block';
        fullDescription.style.display = 'none';
        showMoreButton.textContent = 'Show more';
    }
}




  