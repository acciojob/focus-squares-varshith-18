
const containers = document.querySelectorAll(".container");

// Create one square inside each container
containers.forEach((container, index) => {
    const square = document.createElement("div");

    square.classList.add("square");
    square.textContent = `Square ${index + 1}`;

    container.appendChild(square);
});

// Select all squares
const squares = document.querySelectorAll(".square");

// Hover functionality
containers.forEach((container) => {

    container.addEventListener("mouseover", (event) => {

        if (!event.target.classList.contains("square")) return;

        squares.forEach((square) => {
            if (square === event.target) {
                square.style.backgroundColor = "#6F4E37";
            } else {
                square.style.backgroundColor = "#E6E6FA";
            }
        });

    });

    // Reset colors when mouse leaves
    container.addEventListener("mouseleave", () => {
        squares.forEach((square) => {
            square.style.backgroundColor = "#E6E6FA";
        });
    });

});
