
(function () {
    emailjs.init("4B3TgWkXpF1pcojLh"); // Replace with your EmailJS public key
  })();

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_31lk6sn", "template_ybinc5r", this)
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert("Failed to send message. Error: " + JSON.stringify(error)));
  });