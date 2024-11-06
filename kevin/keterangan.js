document.addEventListener("DOMContentLoaded", function () {
    const deskripsi = document.querySelector(".deskripsi");
    deskripsi.style.display = "none";

    document.querySelector("h2").addEventListener("click", function () {
        deskripsi.style.display = deskripsi.style.display === "none" ? "block" : "none";
    });
});
