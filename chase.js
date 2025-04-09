const THRESHOLD_DISTANCE = 400;  
const SPEED = 20;

let element = document.getElementById("prey");

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
element.style.transform = `translate(${posX}px, ${posY}px)`;

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let deltaX = centerX - mouseX;
    let deltaY = centerY - mouseY;

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    if (distance < THRESHOLD_DISTANCE) { 
        const speed = SPEED / distance;
        posX += deltaX * speed;
        posY += deltaY * speed;

        posX = Math.max(0, Math.min(window.innerWidth - rect.width, posX));
        posY = Math.max(0, Math.min(window.innerHeight - rect.height, posY));

        element.style.transform = `translate(${posX}px, ${posY}px)`;
    }
});
