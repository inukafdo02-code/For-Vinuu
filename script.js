/* ================================= */
/* OPEN MAIN SURPRISE */
/* ================================= */

function startSurprise() {

  const hero =
    document.getElementById("hero");

  const surprise =
    document.getElementById("surprise");


  hero.style.display = "none";

  surprise.classList.remove("hidden");


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}



/* ================================= */
/* OPEN SECRET LOVE LETTER */
/* ================================= */

function openSecretLetter() {

  const letter =
    document.getElementById("secretLetter");

  const heart =
    document.querySelector(".secret-heart");

  const hint =
    document.querySelector(".secret-hint");

  const tapText =
    document.querySelector(".tap-text");


  /* Show letter */

  letter.classList.remove("hidden");


  /* Change heart */

  heart.innerHTML = "💖";

  heart.style.animation = "none";


  /* Change text */

  hint.textContent =
    "You found my little secret... 🥺❤️";

  tapText.textContent =
    "This one is only for you, princess 🤍";


  /* Heart explosion */

  createHearts();


  /* Scroll to letter */

  setTimeout(function() {

    letter.scrollIntoView({

      behavior: "smooth",

      block: "center"

    });

  }, 300);

}



/* ================================= */
/* FINAL LOVE REVEAL */
/* ================================= */

function revealLove() {

  const finalMessage =
    document.getElementById("finalMessage");

  const revealButton =
    document.querySelector(".reveal-btn");


  finalMessage.classList.remove("hidden");


  revealButton.style.display =
    "none";


  createHearts();


  setTimeout(function() {

    finalMessage.scrollIntoView({

      behavior: "smooth",

      block: "center"

    });

  }, 300);

}



/* ================================= */
/* MUSIC */
/* ================================= */

function openMusic() {

  /*
   * PUT YOUR YOUTUBE LINK HERE
   *
   * Example:
   *
   * const musicLink =
   * "https://www.youtube.com/watch?v=XXXXXXXX";
   */

  const musicLink =
    "YOUR_YOUTUBE_LINK_HERE";


  if (
    musicLink ===
    "YOUR_YOUTUBE_LINK_HERE"
  ) {

    alert(
      "Add your Perfect - Ed Sheeran YouTube link in script.js 🎵"
    );

  }

  else {

    window.open(
      musicLink,
      "_blank"
    );

  }

}



/* ================================= */
/* FLOATING HEARTS */
/* ================================= */

function createHearts() {

  const heartSymbols = [

    "❤️",
    "💗",
    "💕",
    "💖",
    "💘",
    "💞"

  ];


  for (
    let i = 0;
    i < 25;
    i++
  ) {

    const heart =
      document.createElement("div");


    heart.innerHTML =
      heartSymbols[
        Math.floor(
          Math.random() *
          heartSymbols.length
        )
      ];


    heart.style.position =
      "fixed";


    heart.style.left =
      Math.random() * 100 + "vw";


    heart.style.bottom =
      "-30px";


    heart.style.fontSize =
      (
        15 +
        Math.random() * 20
      ) + "px";


    heart.style.zIndex =
      "10";


    heart.style.pointerEvents =
      "none";


    heart.style.animation =
      `
        heartRise
        ${3 + Math.random() * 3}s
        linear
        forwards
      `;


    document.body.appendChild(
      heart
    );


    setTimeout(
      function() {

        heart.remove();

      },

      6000

    );

  }

}
