let navbar = document.querySelector('.header .navbar');
let logoutBtn = document.getElementById('logoutBtn');
let loginButton = document.getElementById('loginb');
let signupButton = document.getElementById('signupb');
let registerbtn= document.getElementsByClassName('.box .btn');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
};
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    grabCursor: true,
  });
});



// var userData = JSON.parse(localStorage.getItem("userData"));


// document.addEventListener('DOMContentLoaded', function() {
//   var registerButtons = document.querySelectorAll('.box .btn');

//   registerButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       const boxId = button.closest('.box').id;
//       console.log('Box ID:', boxId);

//       try {
//         const response = await fetch('/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ eventId: boxId }),
//         });
      
//       const data = await response.json();
//         if (response.ok) {
//             // Registration successful, show a success message to the user
//             alert(data.message);
//         } else {
//             // Registration failed, handle the error (data.error)
//             console.error(data.error);
//             alert(data.message); // You might want to show a different message for the user in case of error
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         // Handle network or other errors
//     }
       
//     });
//   });
// });








loginButton.addEventListener("click", (e)=>{
  e.preventDefault();
  window.location.href = "./login.html";
})

signupButton.addEventListener("click", (e)=>{
  e.preventDefault();
  window.location.href = "./signup.html";
})

logoutBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  localStorage.removeItem('LoggedIn');
  window.location.href = "./index.html";
})

if (localStorage.getItem('LoggedIn') === 'true') {
  logoutBtn.style.display = 'block';
  loginButton.style.display = 'none';
  signupButton.style.display = 'none';
} else {
  logoutBtn.style.display = 'none';
  loginButton.style.display = 'block';
  signupButton.style.display = 'block';
}

document.querySelector('#close-navbar').onclick = () => {
  navbar.classList.remove('active');
};

let signupBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.account-form .login-form').classList.remove('active');
  document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () => {
  registerBtn.classList.remove('active');
  loginBtn.classList.add('active');
  document.querySelector('.account-form .login-form').classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});

var swiper = new Swiper(".home-courses-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

$(document).ready(function(){
  $('.accordion-heading').click(function(){
      // Check if the clicked accordion header has the active class
      var isActive = $(this).hasClass('active');

      // Remove the active class from all accordion headers
      $('.accordion-heading').removeClass('active');

      // Add the active class to the clicked accordion header if it wasn't active before
      if (!isActive) {
          $(this).addClass('active');
      }

      // Find the next element (accordion content) after the clicked header
      var accordionContent = $(this).next('.accordion-content');

      // Toggle the display property of the accordion content
      accordionContent.slideToggle();
  });
});



var swiper = new Swiper(".teachers-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});



let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
  acco.onclick = () =>{
    accordion.forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});

document.querySelector('.load-more .btn').onclick = function loadmore (){
  document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
};


