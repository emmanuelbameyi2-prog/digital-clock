document.getElementById('flipBtn').addEventListener('click', function() {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
});