
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
        const larguraJanela = window.innerWidth;

        if (larguraJanela < 768) {
            window.open('https://wa.me/5514996450887', '_blank');
        } else {
            window.open('https://web.whatsapp.com/send?phone=5514996450887', '_blank');
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

document.addEventListener("DOMContentLoaded", function () {
    var animaSobre = document.querySelector(".anima-sobre");
    var animaHabilidade = document.querySelector(".anima-habilidade");
    var animaProjeto = document.querySelector(".anima-projeto");
    var animaArt = document.querySelector(".anima-art");

    function checkScroll() {
        var positionFromSobre = animaSobre.getBoundingClientRect().top;
        var positionFromTopHabalidade = animaHabilidade.getBoundingClientRect().top;
        var positionFromProjeto = animaProjeto.getBoundingClientRect().top;
        var positionFromArt = animaArt.getBoundingClientRect().top;

        if (positionFromSobre - window.innerHeight < 0) {
            animaSobre.classList.add("show-sobre");
        }

        if (positionFromTopHabalidade - window.innerHeight < 0) {
            animaHabilidade.classList.add("show-habilidade");
        }
        if (positionFromProjeto - window.innerHeight < 0) {
            animaProjeto.classList.add("show-projeto");
        }
        if (positionFromArt - window.innerHeight < 0) {
            animaArt.classList.add("show-art");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});
