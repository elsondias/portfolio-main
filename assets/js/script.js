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
