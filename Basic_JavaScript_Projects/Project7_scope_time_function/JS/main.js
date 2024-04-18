function addTwo() {
    var x = 10;
    sum = x + 2;
    document.getElementById("Add").innerHTML = sum;
}

function minusTwo() {
    result = x - 2;
    document.getElementById("Subtr").innerHTML = result;
}

console.log(minusTwo());

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}

function age_Check() {
    var age;
    age = document.getElementById("Age").value
    if (age > 17) {
        document.getElementById("adult").innerHTML = "You are an Adult";
    }
    else {
        document.getElementById("adult").innerHTML = "You are a Minor";
    }
}