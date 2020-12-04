const background = document.querySelector("#contenedor");

console.log("Working Extension");
background.classList.add("contenedor-new");

background.id = "#contenedor-new";

document.querySelector("div.title").classList.replace("title", "new-title");

document.querySelectorAll("form input").forEach((element) => {
    element.classList.add("new-input");
});

document
    .querySelectorAll("input.cred")
    .forEach((el) => el.classList.remove("cred"));
document.querySelector("#formulario").classList.remove("form");

document
    .querySelectorAll(".vnc")
    .forEach((el) => el.classList.replace("vnc", "vnc-new"));
