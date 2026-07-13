const password = document.getElementById("password");
const roastBtn = document.getElementById("roastBtn");
const roast = document.getElementById("roast");
const damageText = document.getElementById("damage");
const damageFill = document.getElementById("damageFill");
const showBtn = document.getElementById("showBtn");
const card = document.getElementById("card");

const roasts = [
    "💀 Bro... my calculator could guess that password.",
    "🔥 Hackers just sent you a thank-you card.",
    "😭 Even your ex could guess this.",
    "🤡 Adding numbers doesn't make you a hacker.",
    "🚨 Your password needs adult supervision.",
    "💀 This password has less security than an open door.",
    "🤖 Password strength: emotional support required.",
    "🔥 Bro really trusted the internet with THIS.",
    "😭 I've seen stronger WiFi signals in elevators.",
    "🚪 Your password security is basically 'come inside'."
];

roastBtn.addEventListener("click", function () {

    const value = password.value;

    if (value.trim() === "") {

        roast.innerText =
            "🤨 You forgot the password... before creating it?";

        shakeCard();

        return;
    }

    let message;

    if (value === "123456") {

        message =
            "💀 123456? Bro is protecting absolutely NOTHING.";

    }

    else if (value.toLowerCase() === "password") {

        message =
            "😭 You really named your password 'password'?";

    }

    else if (value.toLowerCase().includes("ubee")) {

        message =
            "🤨 Using your own name? Hackers say thank you.";

    }

    else if (value.length < 5) {

        message =
            "💀 Your password ended before it even started.";

    }

    else if (value.length > 15) {

        message =
            "😳 Okay Batman, calm down. Nobody is hacking the Batcave.";

    }

    else {

        const randomIndex =
            Math.floor(Math.random() * roasts.length);

        message = roasts[randomIndex];

    }

    roast.innerText = message;

    const damage =
        Math.floor(Math.random() * 51) + 50;

    damageText.innerText = damage;

    damageFill.style.width = damage + "%";

    shakeCard();

});

function shakeCard() {

    card.classList.remove("shake");

    void card.offsetWidth;

    card.classList.add("shake");

}

showBtn.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        showBtn.innerText = "🙈";

    }

    else {

        password.type = "password";

        showBtn.innerText = "👁️";

    }

});

password.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        roastBtn.click();

    }

});