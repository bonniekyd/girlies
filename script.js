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
        image.src = selectedName.toLowerCase().replace(/\s+/g, '') + '.png';
        audio.src = selectedName.toLowerCase().replace(/\s+/g, '') + '.mp3';
    } else {
        alert('Please select a name before confirming.');
    }
}
