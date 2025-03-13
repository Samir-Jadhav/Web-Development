const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check the current theme and set the initial theme
let isDarkMode = false;

toggleButton.addEventListener('change', () => {
    isDarkMode = toggleButton.checked; // Get the checked state

    if (isDarkMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

// Set the initial theme
body.classList.add('light-mode');