/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += "responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Triveni"],
    loop : true,  
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 });


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.featured-img',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll, scrollActive')
const container = document.querySelector('.project-container');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

let currentIndex = 0;


document.getElementById('submit').addEventListener('click', function() {
  var name = document.querySelector('input[placeholder="Name"]').value;
  var email = document.querySelector('input[placeholder="Email"]').value;
  var message = document.querySelector('textarea[placeholder="Message"]').value;

  if (name && email && message) {
    emailjs.send("service_bs82c11", "template_nyvu0y5", {
      from_name: name,
      from_email: email,
      message: message
    }).then(function(response) {
      alert('Email sent successfully!');
    }, function(error) {
      alert('Failed to send email. Please try again later.');
    });
  } else {
    alert('Please fill out all fields.');
  }
});

  
   
      



// const updateProjectBoxes = () => {
//   const projectBoxes = document.querySelectorAll('.project-box');
//   projectBoxes.forEach((box, index) => {
//     box.style.transform = `translateX(-${currentIndex * 100}%)`;
//   });
// };

// rightBtn.addEventListener('click', () => {
//   const projectBoxes = document.querySelectorAll('.project-box');
//   if (currentIndex < projectBoxes.length - 1) {
//     currentIndex++;
//     updateProjectBoxes();
//   }
// });

// leftBtn.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateProjectBoxes();
//   }
// });