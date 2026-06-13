const comparison = document.querySelector(".comparison");
const overlay = document.getElementById("overlay");
const handle = document.getElementById("handle");

let dragging = false;

comparison.addEventListener("mousedown", () => {
    dragging = true;
});

window.addEventListener("mouseup", () => {
    dragging = false;
});

window.addEventListener("mousemove", (e) => {

    if (!dragging) return;

    const rect = comparison.getBoundingClientRect();

    let x = e.clientX - rect.left;

    x = Math.max(0, Math.min(x, rect.width));

    const percent = (x / rect.width) * 100;

    overlay.style.width = percent + "%";
    handle.style.left = percent + "%";
});

comparison.addEventListener("touchstart", () => {
    dragging = true;
});

window.addEventListener("touchend", () => {
    dragging = false;
});

window.addEventListener("touchmove", (e) => {

    if (!dragging) return;

    const rect = comparison.getBoundingClientRect();

    let x = e.touches[0].clientX - rect.left;

    x = Math.max(0, Math.min(x, rect.width));

    const percent = (x / rect.width) * 100;

    overlay.style.width = percent + "%";
    handle.style.left = percent + "%";
});