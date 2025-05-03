
function openModal() {
    document.getElementById('locationModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('locationModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('locationModal');
    if (event.target === modal) {
        closeModal();
    }
}

/*hello signin*/
// Location Modal
function openModal() {
    document.getElementById('locationModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('locationModal').style.display = 'none';
}

// Sign-In Modal
function openSigninModal() {
    document.getElementById('signinModal').style.display = 'flex';
}

function closeSigninModal() {
    document.getElementById('signinModal').style.display = 'none';
}

// Close modals on outside click
window.onclick = function(event) {
    const locationModal = document.getElementById('locationModal');
    const signinModal = document.getElementById('signinModal');
    if (event.target === locationModal) {
        closeModal();
    }
    if (event.target === signinModal) {
        closeSigninModal();
    }
}

// Event listener for Hello Sign-In
document.querySelector('.navsignin').addEventListener('click', openSigninModal);
/*return &order*/
// Returns & Orders Modal
function openReturnsModal() {
document.getElementById('returnsModal').style.display = 'flex';
}
function closeReturnsModal() {
document.getElementById('returnsModal').style.display = 'none';
}
window.onclick = function(event) {
const locationModal = document.getElementById('locationModal');
const signinModal = document.getElementById('signinModal');
const returnsModal = document.getElementById('returnsModal');

if (event.target === locationModal) closeModal();
if (event.target === signinModal) closeSigninModal();
if (event.target === returnsModal) closeReturnsModal();
}

/*cart*/
function openCartModal() {
document.getElementById("cartModal").style.display = "flex";
}

function closeCartModal() {
document.getElementById("cartModal").style.display = "none";
}

/*panel all*/ 
function openSidebar() {
document.getElementById("sidebarMenu").style.display = "block";
}

function closeSidebar() {
document.getElementById("sidebarMenu").style.display = "none";
}

/*back to top*/

function scrollToTop() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}


/*boxes*/

function toggleInfo(el) {
const infoBox = el.nextElementSibling;
infoBox.style.display = (infoBox.style.display === "block") ? "none" : "block";
}



const slides = document.querySelectorAll('.carousel-slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');

  index = (index + 1) % slides.length;

  slides[index].classList.add('active');
}, 3000); // Change slide every 3 seconds

