// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for button click
document.getElementById('colorButton').addEventListener('click', function() {
    // Change background color to a random color
    document.body.style.backgroundColor = getRandomColor();
});
