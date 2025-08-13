const projects = [
    { title: "Calculator App", url: "https://sumitkumarsingh21.github.io/Calculator-App/" },
    { title: "Digital Clock Timer", url: "https://sumitkumarsingh21.github.io/Digital-clock-timer/" },
    { title: "Todo List", url: "https://sumitkumarsingh21.github.io/Todo-List/" },
    { title: "Age Calculator", url: "https://sumitkumarsingh21.github.io/Age-calculator/" },
    { title: "Dice Roller App", url: "https://sumitkumarsingh21.github.io/Dice-roller-app" },
    { title: "Dark Light Mode App", url: "https://sumitkumarsingh21.github.io/Dark-Light-mode-app/" },
    { title: "Rock Paper Scissors", url: "https://sumitkumarsingh21.github.io/Rock-paper-scissors-/" },
    { title: "Live Search Filter App", url: "https://sumitkumarsingh21.github.io/Live-search-filter-app/" },
    { title: "Image Slider Closure", url: "https://sumitkumarsingh21.github.io/Image-slider-closure/" },
    { title: "Form Validation", url: "https://sumitkumarsingh21.github.io/Form-validation-/" },
    { title: "Notes App", url: "https://sumitkumarsingh21.github.io/Notes-app/" },
    { title: "Typing Speed Test", url: "https://sumitkumarsingh21.github.io/Typing-speed-test/" },
    { title: "Temperature Converter", url: "https://sumitkumarsingh21.github.io/Temperature-converter/" },
    { title: "Color Picker/Generator", url: "https://sumitkumarsingh21.github.io/Color-pricker-or-generator/" },
    { title: "BMI Calculator", url: "https://sumitkumarsingh21.github.io/BMI-calculator/" },
    { title: "QR Code Generator", url: "https://sumitkumarsingh21.github.io/QR-code-generator/" },
    { title: "Memory Game", url: "https://sumitkumarsingh21.github.io/Memory-game/" },
    { title: "Date Countdown", url: "https://sumitkumarsingh21.github.io/Date-countdown/" },
    { title: "Product Gallery Filter", url: "https://sumitkumarsingh21.github.io/Product-gallery-filter/" },
    { title: "Quiz App", url: "https://sumitkumarsingh21.github.io/Quiz-app/" },
    { title: "Music Player", url: "https://sumitkumarsingh21.github.io/Music-player/" },
    { title: "Voice Assistant", url: "https://sumitkumarsingh21.github.io/Voice-assistant/" }
];

const decorations = [
    "🧸", // teddy bear
    "🌵", // cactus
    "🚗", // toy car
    "🌍", // globe
    "📷", // camera
    "💡", // lamp
    "🎁", // gift
    "🪴"  // potted plant
];

const shelfContainer = document.getElementById("shelf-container");
const booksPerShelf = 5;

function randomColor() {
    const colors = ["#ff9f80", "#ff7f50", "#f4a460", "#cd853f", "#deb887", "#ffa07a", "#ffb347", "#ffd700"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Generate shelves
for (let i = 0; i < projects.length; i += booksPerShelf) {
    const shelf = document.createElement("div");
    shelf.classList.add("shelf");

    const shelfItems = projects.slice(i, i + booksPerShelf);

    shelfItems.forEach((proj, index) => {
        const book = document.createElement("div");
        book.classList.add("book");
        book.style.background = `linear-gradient(145deg, ${randomColor()}, #333)`;
        book.textContent = proj.title;
        book.addEventListener("click", () => {
            window.open(proj.url, "_blank");
        });
        shelf.appendChild(book);

        // Sometimes add a decoration next to the book
        if (Math.random() > 0.5 && index !== shelfItems.length - 1) {
            const deco = document.createElement("div");
            deco.classList.add("decoration");
            deco.textContent = decorations[Math.floor(Math.random() * decorations.length)];
            shelf.appendChild(deco);
        }
    });

    shelfContainer.appendChild(shelf);
}