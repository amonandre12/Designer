AOS.init({
//   duration: 800,  
//   once: true        
});


// Selection des elements

const burger = document.getElementById("burger")
const navLinks = document.getElementById("nav-links")

burger.addEventListener('click', (e) => {
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
        e.preventDefault()
    } else {
        navLinks.style.display = 'none'
    }
}) ;









