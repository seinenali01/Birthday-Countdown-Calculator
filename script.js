document.getElementById('birthdate').addEventListener('change', function() {
    calculateDays();
});

function calculateDays() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();
    
    if (today.getMonth() > birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() > birthdate.getDate())) {
        birthdate.setFullYear(today.getFullYear() + 1);
    }

    var timeDiff = birthdate.getTime() - today.getTime();
    var daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    var birthdateThisYear = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (birthdateThisYear > today) {
        daysRemaining--;
    }

    var resultMessage = "Days left for your birthday: " + daysRemaining + " days!";
    document.getElementById('result').innerHTML = resultMessage;

    
}

