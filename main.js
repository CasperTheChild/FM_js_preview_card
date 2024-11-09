var button = document.getElementById("first_button"); // Corrected 
var second_button = document.getElementById("second_button");
var shareSection = document.querySelector(".Share");

// Initially hide the share section
shareSection.style.display = 'none';

button.addEventListener('click', Toggle);

second_button.addEventListener('click', Toggle);

function Toggle() { 
    if (shareSection.style.display === 'none' || shareSection.style.display === '') {
        shareSection.style.display = 'flex'; 
    } else { 
        shareSection.style.display = 'none';
    }
}
