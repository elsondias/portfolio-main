let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("menu-mobile")
let overlay = document.getElementById("overlay-menu")

btnMenu.addEventListener("click", () => {
    menu.classList.add("abrir-menu")
})

menu.addEventListener("click", () => {
    menu.classList.remove("abrir-menu")
})

overlay.addEventListener("click", () => {
    menu.classList.remove("abrir-menu")
})

onload = function () {
    window.onscroll = function () { scrollFunction() };
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnVoltarAoTopo").style.display = "block";
    } else {
        document.getElementById("btnVoltarAoTopo").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
