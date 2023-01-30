const submit = document.getElementById("send-btn");
const subject = document.getElementById("subject");
const body = document.getElementById("body");
const email = document.getElementById("email");
// hamburger
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

const handleClick = () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("bar-active");
};

const handleSendEmail = (e) => {
  e.preventDefault();
  const messageParams = {
    from_email: email.value,
    to_name: "mateusz.mamica18@gmail.com",
    message: body.value,
  };
  emailjs.send("service_06yt80v", "template_ir8wxou", messageParams).then(
    function (res) {
      console.log(res);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};

hamburger.addEventListener("click", handleClick);
//smtp -> send email

submit.addEventListener("click", handleSendEmail);
