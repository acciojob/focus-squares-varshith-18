
const containers = document.querySelectorAll(".container");

// Create 3 squares inside the containers
containers.forEach((container, index) => {
    const square = document.createElement("div");

    square.classList.add("square");
    square.textContent = `Square ${index + 1}`;

    container.appendChild(square);
});

// Select all squares
const squares = document.querySelectorAll(".square");

// Attach events to individual squares
squares.forEach((square) => {

    square.addEventListener("mouseover", () => {

        squares.forEach((box) => {
            if (box !== square) {
                box.style.backgroundColor = "#6F4E37";
            }
        });

    });

    square.addEventListener("mouseleave", () => {

        squares.forEach((box) => {
            box.style.backgroundColor = "#E6E6FA";
        });

    });

});
