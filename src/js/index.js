
document.addEventListener("DOMContentLoaded", function () {

    const intro = document.querySelector(".intro");
    const content = document.querySelector(".content");

    setTimeout(function () {
        intro.style.opacity = "0";
        intro.style.pointerEvents = "none";
        content.style.visibility = "visible";
    }, 2000);

    intro.addEventListener("click", function () {
        intro.style.display = "none";
        intro.style.pointerEvents = "none";
        content.style.visibility = "visible";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var whatsappLink = document.getElementById('whatsapp');

    whatsappLink.addEventListener('click', function (event) {
        if (window.innerWidth <= 768) {
            event.preventDefault(); 
            window.location.href = 'https://wa.me/55014996450887 ' , '_balck';
        }
    });
});

let animacaoAtivada = false;
const sobreTexto = document.getElementById("sobretexto");

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    if (scrollY > 0 && !animacaoAtivada) {
        animacaoAtivada = true;
        sobreTexto.style.animation = "fadeIn 2s forwards";
    }
});


const darkbtn = document.getElementById('darkbtn');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkbtn.checked = true;
}

darkbtn.addEventListener('change', () => {
    if (darkbtn.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

