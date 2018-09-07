"use strict";

const stage = document.querySelector("#stage");
stage.addEventListener("mousemove", mouseMove);

let factor = 50;


function mouseMove(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const centerX = stage.clientWidth / 2;
    const centerY = stage.clientHeight / 2;

    const distX = (centerX - x) / (centerX);
    const distY = (centerY - y) / (centerY);



    console.log(`(x,y)=(${x},${y}), dist ${distX}`);

    // move top
    const upper = document.querySelector("#top");
    upper.style.left = centerX - upper.clientWidth / 2 + (distX * factor) + "px";
    upper.style.top = centerY - upper.clientHeight / 2 + (distY * factor) + "px";

    const lower = document.querySelector("#bottom");
    lower.style.left = centerX - lower.clientWidth / 2 - (distX * factor) + "px";
    lower.style.top = centerY - lower.clientHeight / 2 - (distY * factor) + "px";
}
