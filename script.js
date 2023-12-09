function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultElement = document.getElementById('result');

    const birthdate = birthdateInput.value;
    
    if (birthdate) {
        const ageInDays = calculateAgeInDays(birthdate);
        resultElement.textContent = ageInDays;
    } else {
        resultElement.textContent = 'Please enter a valid birthdate.';
    }
}

function calculateAgeInDays(birthdate) {
    const birthdateObj = new Date(birthdate);
    const currentDate = new Date();
    
    const ageInMilliseconds = currentDate - birthdateObj;
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    return ageInDays;
}
