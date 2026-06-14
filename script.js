const comparison = document.querySelector(".comparison");
const overlay = document.getElementById("overlay");
const handle = document.getElementById("handle");

function updateSlider(clientX) {
    const rect = comparison.getBoundingClientRect();
    let x = clientX - rect.left;

    x = Math.max(0, Math.min(x, rect.width));

    const percent = (x / rect.width) * 100;
    const hiddenRight = 100 - percent;

    overlay.style.clipPath = `inset(0 ${hiddenRight}% 0 0)`;
    handle.style.left = percent + "%";
}

comparison.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    comparison.setPointerCapture(event.pointerId);
    updateSlider(event.clientX);
});

comparison.addEventListener("pointermove", (event) => {
    if (!comparison.hasPointerCapture(event.pointerId)) return;
    event.preventDefault();
    updateSlider(event.clientX);
});

comparison.addEventListener("dragstart", (event) => {
    event.preventDefault();
});

comparison.addEventListener("pointerup", (event) => {
    if (comparison.hasPointerCapture(event.pointerId)) {
        comparison.releasePointerCapture(event.pointerId);
    }
});

comparison.addEventListener("pointercancel", (event) => {
    if (comparison.hasPointerCapture(event.pointerId)) {
        comparison.releasePointerCapture(event.pointerId);
    }
});
