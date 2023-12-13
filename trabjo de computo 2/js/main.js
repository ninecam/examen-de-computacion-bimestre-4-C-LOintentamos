let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let todo_btn = document.querySelector(".card-container"); // Cambiado a .card-container

play_btn.addEventListener("click", () => {
    todo_btn.style.animationPlayState = "running";
    cancion.play();
});

pause_btn.addEventListener("click", () => {
    cancion.pause();
    todo_btn.style.animationPlayState = "paused";
});