function sendForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please Fill All Column.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please Enter A Vail Email Adress.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Your Message Has Been Sent Successfully.";
}
