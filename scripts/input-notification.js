

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('form');

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') { // Check if the Enter key is pressed
            const inputValue = inputField.value.trim();

            if (inputValue) { // Only show pop-up if there's a value
                alert('Thank you for the feedback, it will probably never be handeled (:');
                inputField.value = ''; // Clear the input field
            }
        }
    });
});
