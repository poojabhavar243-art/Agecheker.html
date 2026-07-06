function checkAge() {

    let age = Number(document.getElementById("age").value);

    let result = document.getElementById("result");

    if (isNaN(age)) {
        result.innerHTML = "Please enter your age.";
    }
    else if (age < 0) {
        result.innerHTML = "Please enter a valid age.";
    }
    else if (age <= 12) {
        result.innerHTML = "You are a Child.";
    }
    else if (age <= 17) {
        result.innerHTML = "You are a Minor.";
    }
    else if (age <= 59) {
        result.innerHTML = "You are an Adult.";
    }
    else {
        result.innerHTML = "You are a Senior Citizen.";
    }

}