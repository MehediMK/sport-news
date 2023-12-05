document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Display the first slide
    showSlide(currentIndex);

    // Automatically advance to the next slide every 3 seconds
    setInterval(nextSlide, 3000);
});

// JavaScript function to toggle the navigation menu
function openNavbar() {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.toggle("active");
}


// logout functionality here
const logout = document.getElementById("logout");
if (logout != null)
{
    logout.addEventListener("click", function() {
        sessionStorage.clear();  
        location.reload();      
    });
}

// login and logout button hidden functionality
function button_hide(){
    let username = sessionStorage.getItem('username');
    let login = document.getElementById("login");
    let logout = document.getElementById("logout");
    if(username != null){
        login.style.display = 'none';
        console.log(username)
    }else{
        if(logout != null){
            logout.style.display = 'none';
        }
    }

}
button_hide()