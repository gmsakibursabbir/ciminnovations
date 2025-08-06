
  const basePath =
    window.location.hostname === "localhost" ? ".." : "/ciminnovations";

  const images = [
    {
      url: `${basePath}/assets/img/hero-slider-01.png`,
      heading: "Share, connect, <span>grow</span>",
      subtext: "Spread the word through your network of friends and family",
    },
    {
      url: `${basePath}/assets/img/hero-slider-02.png`,
      heading: "Create Wholesome <span>content</span>",
      subtext: "Your voice has the power to make an impact",
    },
    {
      url: `${basePath}/assets/img/hero-slider-03.png`,
      heading: "Boost your events and reach more in a <span>click</span>",
      subtext:
        "Stream live prayer meetings, devotional services, and small‑group fellowships with zero tech headache.",
    },
  ];

  let index = 0;

  window.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("landing-hero");
    const heading = document.getElementById("hero-heading");
    const subtext = document.getElementById("hero-subtext");

    hero.style.backgroundImage = `url('${images[0].url}')`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.transition = "background-image 1s ease-in-out";

    setInterval(updateHero, 5000);
  });

  function updateHero() {
    const hero = document.getElementById("landing-hero");
    const heading = document.getElementById("hero-heading");
    const subtext = document.getElementById("hero-subtext");

    heading.style.opacity = "0";
    subtext.style.opacity = "0";

    setTimeout(() => {
      index = (index + 1) % images.length;
      hero.style.backgroundImage = `url('${images[index].url}')`;
      heading.innerHTML = images[index].heading;
      subtext.textContent = images[index].subtext;
      heading.style.opacity = "1";
      subtext.style.opacity = "1";
    }, 1000);
  }



//sliders

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#pricing-slider", {
    autoplay: true,
    perPage: 3.3,
    fixedWidth: 360,
    arrows: false,
    pagination: false,
    drag: true,
    breakpoints: {
      992: {
        perPage: 2,
        fixedWidth: null,
      },
      768: {
        perPage: 1,
        fixedWidth: null,
      },
    },
  }).mount();
});

//form
document.addEventListener("DOMContentLoaded", function () {
  // Password toggle functionality for signup modal
  const togglePassword = document.getElementById("togglePassword");
  const togglePasswordText = document.getElementById("togglePasswordText");
  const passwordInput = document.getElementById("signupPasswordInput");

  if (togglePassword && passwordInput && togglePasswordText) {
    togglePassword.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      togglePasswordText.textContent = type === "password" ? "Show" : "Hide";
    });
  }

  // Handle signup form submission to show verify account modal
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Get the signup modal instance
      const signupModalElement = document.getElementById("signupModal");
      const signupModal = bootstrap.Modal.getInstance(signupModalElement);

      // Get the verify account modal instance
      const verifyAccountModalElement =
        document.getElementById("verifyAccountModal");
      const verifyAccountModal = new bootstrap.Modal(verifyAccountModalElement);

      // Hide the signup modal
      if (signupModal) {
        signupModal.hide();
      }

      // Show the verify account modal after a short delay to allow signup modal to close
      setTimeout(() => {
        verifyAccountModal.show();
      }, 300); // Adjust delay as needed
    });
  }
});
