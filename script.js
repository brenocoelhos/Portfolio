/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Desenvolvedor", "Desenvolvedor"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/* ----- Links dos projetos ----- */

document.getElementById("apaeLink").addEventListener("click", function () {
  window.open("https://apaecarandai.netlify.app/", "_blank");
});
/*    document.getElementById("myButton").addEventListener("click", function() {
      window.open('https://www.exemplo.com', '_blank');
    });
    document.getElementById("myButton").addEventListener("click", function() {
      window.open('https://www.exemplo.com', '_blank');
    });
*/

/* ----- botão de download do curriculo----- */

document.getElementById("download-btn").addEventListener("click", function () {
  // Exibe o alerta de confirmação
  const userConfirmed = confirm("Gostaria de baixar o PDF agora?");

  if (userConfirmed) {
    // Se o usuário confirmar, inicia o download
    const link = document.createElement("a");
    link.href = "./Curriculo-breno.pdf"; 
    link.download = "Currículo-Breno-Coelho.pdf"; // Nome do arquivo baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Caso o usuário cancele, exibe uma mensagem ou simplesmente não faz nada
    alert("Download cancelado.");
  }
});

/* ----- envia o email  ----- */
(function() {
    emailjs.init("23Nqfl-dRE325xdUo");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Defina o seu Service ID e Template ID (obtidos no painel do EmailJS)
        const serviceID = 'service_xabrsg3';
        const templateID = 'template_16vdx52';

        // Coleta os dados do formulário
        const templateParams = {
            name: document.getElementById('name').value,
            subject: document.getElementById('subject').value, 
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        if (name === "" || subject === "" || email === "" || message === "") {
                alert("Por favor, preencha todos os campos.");
                return; // Sai da função se algum campo estiver vazio
        }

        // Envia o e-mail usando o EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('Sucesso!', response.status, response.text);
                alert('E-mail enviado com sucesso!');
                // Limpa o formulário após o envio
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.error('Falha no envio do e-mail...', error);
                alert('Falha ao enviar o e-mail. Tente novamente mais tarde.') ;
            });
    });

window.addEventListener("scroll", scrollActive);
