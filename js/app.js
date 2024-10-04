const submit = document.getElementById("send-btn");
const subject = document.getElementById("subject");
const body = document.getElementById("body");
const email = document.getElementById("email");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const messageStatus = document.getElementById("message-status");

const handleClick = () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("bar-active");
};

const handleSendEmail = (e) => {
  e.preventDefault();
  if (!email.value.trim()) {
    messageStatus.textContent = "Please enter an email address.";
    messageStatus.style.display = "block";
    messageStatus.style.color = "red";
    return;
  }
  if (!email.value.includes("@")) {
    messageStatus.textContent = "Please enter a valid email address.";
    messageStatus.style.display = "block";
    messageStatus.style.color = "red";
    return;
  }

  if (!subject.value.trim()) {
    messageStatus.textContent = "Please enter a subject.";
    messageStatus.style.display = "block";
    messageStatus.style.color = "red";
    return;
  }

  if (!body.value.trim()) {
    messageStatus.textContent = "Please enter a message.";
    messageStatus.style.display = "block";
    messageStatus.style.color = "red";
    return;
  }

  const messageParams = {
    subject: subject.value,
    from_email: email.value,
    to_name: "mateusz.mamica18@gmail.com",
    message: body.value,
  };
  emailjs.send("service_k2dtdim", "template_ir8wxou", messageParams).then(
    function (res) {
      console.log("SUCCESS", res);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
      });

      messageStatus.textContent = "The message has been sent!";
      messageStatus.style.display = "block";
    },
    function (error) {
      console.log("FAILED...", error);
      console.error("Error Details:", error);
      messageStatus.textContent = "The message has been sent!";
      messageStatus.style.display = "block";
      messageStatus.style.color = "red";
    }
  );
};

hamburger.addEventListener("click", handleClick);
submit.addEventListener("click", handleSendEmail);
