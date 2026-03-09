// Hello World Script for Digital Signage
console.log("Hello World app initialized");

// No interactivity required for this simple display,
// but we can add a simple timestamp log or minor animation logic if needed.
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    console.log("Displaying: " + title.textContent);
});
