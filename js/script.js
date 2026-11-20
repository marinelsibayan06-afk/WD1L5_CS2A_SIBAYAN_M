// Contact form: check the fields, then open the email app
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const message = document.getElementById("cMessage").value.trim();

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please enter all details to send.";
    return;
  }

  const subject = encodeURIComponent("Message from " + name);
  const body = encodeURIComponent(message + "\n\n- " + name + " (" + email + ")");
  window.location.href = "mailto:pablanfrenalyn@gmail.com?subject=" + subject + "&body=" + body;
  status.textContent = "Thank you! Preparing your email...";
  form.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
