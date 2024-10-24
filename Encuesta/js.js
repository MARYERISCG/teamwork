document.getElementById('startButton').onclick = function(event) {
    event.preventDefault();
    
    
    const fullName = document.getElementById('fullName').value.trim();
    const studentCode = document.getElementById('studentCode').value.trim();
    const genderSelected = document.querySelector('input[name="gender"]:checked');

    if (!fullName || !studentCode || !genderSelected) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
    }

    document.getElementById('welcome').style.display = 'none';
    document.getElementById('survey').style.display = 'block';
};

document.getElementById('surveyForm').onsubmit = function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    document.getElementById('userName').textContent = fullName;
    document.getElementById('survey').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
};

document.getElementById('restartButton').onclick = function() {
    document.getElementById('thankYou').style.display = 'none';
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('initialForm').reset(); 
    document.getElementById('surveyForm').reset(); 
};
