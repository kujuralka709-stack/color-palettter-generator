const generateBtn = document.getElementById("generateBtn");
const palette = document.getElementById("palette");
const message = document.getElementById("message");

function generatePalette() {
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");

        const card = document.createElement("div");
        card.className = "color-card";

        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;

        const code = document.createElement("p");
        code.textContent = color.toUpperCase();

        card.appendChild(box);
        card.appendChild(code);

        card.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(color.toUpperCase());
                message.textContent = "Copied: " + color.toUpperCase();
            } catch {
                message.textContent = "Color code: " + color.toUpperCase();
            }
        });

        palette.appendChild(card);
    }
}

generateBtn.addEventListener("click", generatePalette);

generatePalette();