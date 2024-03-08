function confirmSelection() {
    var nameForm = document.getElementById('nameForm');
    var resultDiv = document.getElementById('result');
    var image = document.getElementById('image');
    var audio = document.getElementById('audio');

    var selectedName = null;
    var radioButtons = nameForm.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        if (radioButton.checked) {
            selectedName = radioButton.value;
            radioButton.style.display = 'none'; // Hide the selected radio button
        }
    });

    if (selectedName) {
        resultDiv.classList.remove('hidden');
        if (selectedName === 'Anel') {
            image.src = 'anel.png';
            audio.src = 'anel.mp3';
        } else if (selectedName === 'Aliia') {
            image.src = 'alia.png';
            audio.src = 'alia.mp3';
        } else if (selectedName === 'Aru B') {
            image.src = 'arub.png';
            audio.src = 'arub.mp3';
        } else if (selectedName === 'Aru S') {
            image.src = 'arus.png';
            audio.src = 'arus.mp3';
        } else if (selectedName === 'Tomi') {
            image.src = 'tomi.png';
            audio.src = 'tomi.mp3';
        } else if (selectedName === 'Dana') {
            image.src = 'dana.png';
            audio.src = 'dana.mp3';
        }
    } else {
        alert('Please select a name before confirming.');
    }
}
