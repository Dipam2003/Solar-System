const container = document.querySelector("body");

function createStars() {
    for(let i = 0; i<1000; i++) {

        // Create a star class
        const star = document.createElement("div");
         star.className = "star";
         star.style.width = ".1px";
         star.style.height = ".1px";
         star.style.top = Math.random() * 100 + "%";
         star.style.left = Math.random() * 100 + "%";
        
         // Add this star class to container
         container.appendChild(star);
    }
}

createStars();