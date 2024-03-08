function confirmSelection() {
    var nameForm = document.getElementById('nameForm');
    var resultDiv = document.getElementById('result');
    var image = document.getElementById('image');
    var audio = document.getElementById('audio');

    var selectedName = null;
    var checkboxes = nameForm.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedName = checkbox.value;
        }
    });

    if (selectedName) {
        resultDiv.classList.remove('hidden');
        image.src = selectedName.toLowerCase() + '.png';
        audio.src = selectedName.toLowerCase() + '.mp3';
    } else {
        alert('Please select a name before confirming.');
    }
}
