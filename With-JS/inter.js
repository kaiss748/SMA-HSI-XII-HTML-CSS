const body = document.querySelector("body");
const mode = document.querySelector("#tombol-mode");

mode.addEventListener("click", function () {
    document.body.classList.toggle('dark-mode');
})

const kotak = document.querySelector("#kotak-interaktif");
kotak.addEventListener("mouseover", function () {
    kotak.style.backgroundColor = "orangered";
    kotak.innerHTML = "Wow, berhasil!";
})

kotak.addEventListener("mouseout", function () {
    kotak.style.backgroundColor = "steelblue";
    kotak.innerHTML = "Arahkan mouse ke sini!";
})