const images = [
  {
    url: "../assets/img/hero-slider-01.png",
    heading: "Share, connect, <span>grow</span>",
    subtext: "Spread the word through your network of friends and family",
  },
  {
    url: "../assets/img/hero-slider-02.png",
    heading: "Create Wholesome <span>content</span>",
    subtext: "Your voice has the power to make an impact",
  },
  {
    url: "../assets/img/hero-slider-03.png",
    heading: "Boost your events and reach more in a <span>click</span>",
    subtext:
      "Stream live prayer meetings, devotional services, and small‑group fellowships with zero tech headache.",
  },
];

let index = 0;

function updateHero() {
  const hero = document.getElementById("landing-hero");
  const heading = document.getElementById("hero-heading");
  const subtext = document.getElementById("hero-subtext");

  // Fade out
  heading.style.opacity = "0";
  subtext.style.opacity = "0";

  setTimeout(() => {
    // Change content
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url(${images[index].url})`;
    heading.innerHTML = images[index].heading;
    subtext.textContent = images[index].subtext;

    // Fade in
    heading.style.opacity = "1";
    subtext.style.opacity = "1";
  }, 1000);
}

setInterval(updateHero, 5000);

//sliders

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#pricing-slider", {
    type: "loop", // <-- This enables infinite looping
    perPage: 3.6,
    fixedWidth: 360,
    arrows: false,
    pagination: false,
    drag: true,
    breakpoints: {
      992: {
        perPage: 2,
        fixedWidth: null, // Remove fixedWidth on smaller devices for flexibility
      },
      768: {
        perPage: 1,
        fixedWidth: null,
      },
    },
  }).mount();
});
