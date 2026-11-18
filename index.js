function checkStrength() {
    const password = document.getElementById("password").value;
    const fill = document.getElementById("strength-fill");
    const text = document.getElementById("strength-text");

    // Empty field: reset the bar and text
    if (password.length === 0) {
        fill.style.width = "0%";
        text.textContent = "";
        return;
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (password.length >= 15) score++;
    if (password.length >= 20) score++;
    if (/[A-Z]/.test(password)) score++;          // uppercase
    if (/[a-z]/.test(password)) score++;          // lowercase
    if (/[0-9]/.test(password)) score++;          // number
    if (/[^A-Za-z0-9]/.test(password)) score++;   // symbol

    let strengthColor = "#ff4d4d";
    let strengthLabel = "Svakt passord";
    let widthPercentage = "20%";

    if (score >= 5) {
        strengthColor = "#28c368ff";
        strengthLabel = "Sterkt passord";
        widthPercentage = "100%";
        document.body.classList.toggle("sterk-bakgrunn", score >= 5);
    } else if (score >= 3) {
        strengthColor = "#ffa500";
        strengthLabel = "Middels passord";
        widthPercentage = "60%";
    }

    // Show the result on the page
    fill.style.width = widthPercentage;
    fill.style.backgroundColor = strengthColor;
    text.textContent = strengthLabel;
    text.style.color = strengthColor;
}