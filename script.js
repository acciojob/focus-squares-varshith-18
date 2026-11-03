
const squares = document.querySelectorAll(".square");

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
