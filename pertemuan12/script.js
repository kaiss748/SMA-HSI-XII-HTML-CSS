const tombol = document.querySelector("#tombol-mode");
const isi = document.querySelector("body");



tombol.addEventListener("click", function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains("dark-mode")) {
        tombol.style.background = "#fff";
        tombol.style.color = "#37353E";
        tombol.innerHTML = "Light Mode";
    } else {
        tombol.style.background = "#37353E";
        tombol.style.color = "#fff";
        tombol.innerHTML = "Dark Mode";
    }
})