document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.jelajahi .content');
    const cardHTML = `
        <div class="card">
            <img src="img/sotow.jpg" alt="Card 1" />
            <h3>Gradient setup with simple furniture 😆</h3>
            <div class="profile">
                <img src="img/profil.png" alt="Profile" />
                <p>Heydar Gaminx</p>
            </div>
        </div>
    `;
    
    for (let i = 0; i < 5; i++) {
        contentDiv.innerHTML += cardHTML;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
  
    menuToggle.addEventListener('click', function() {
        console.log('clicked');
      navList.classList.toggle('menu-open');
    //   navList.classList.toggle('menu-closed');
    });
  });
