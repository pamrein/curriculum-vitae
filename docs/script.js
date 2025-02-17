document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let recipientEmail = "maracuda93@gmail.com";  

    let mailtoLink = `mailto:${recipientEmail}?subject=Message from ${name}&body=${message} (Reply to: ${email})`;

    window.location.href = mailtoLink;

    document.getElementById("form-message").innerText = "Redirecting to email...";
});
