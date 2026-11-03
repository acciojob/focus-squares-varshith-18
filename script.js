//your JS code here. If required.
const container = document.getElementById("container");

        // Create 100 boxes
        for (let i = 1; i <= 3; i++) {
            const box = document.createElement("div");

            box.classList.add("box");
            box.textContent = `Box ${i}`;

            container.appendChild(box);
        }

       
        container.addEventListener("mouseover", (event) => {
            if (!event.target.classList.contains("box")) return;

            const boxes = document.querySelectorAll(".box");

            boxes.forEach((box) => {
                if (box !== event.target) {
                    box.style.backgroundColor = "#E6E6FA";
                } else {
                    box.style.backgroundColor = "#6F4E37";
                }
            });
        });

        // Reset colours when mouse leaves container
        container.addEventListener("mouseleave", () => {
            document.querySelectorAll(".box").forEach((box) => {
                box.style.backgroundColor = "#E6E6FA";
            });
        });