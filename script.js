function openInvitation() {
    var popup = document.getElementById("popup");
    popup.classList.add("slide-out-up");

    setTimeout(() => {
        popup.style.display = "none";

        var audio = document.getElementById("bg-music");
        if (audio) {
            audio.play().catch(err => {
                console.log("Autoplay diblokir: ", err);
            });
        }

        document.getElementById("mainContent").style.display = "block";
    }, 800);
}

function showMessage() {
    document.getElementById("confirmation").classList.remove("hidden");
}


// Url
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
document.addEventListener("DOMContentLoaded", () => {
    const guestNameElement = document.getElementById("guest-name");
    const guestName = getQueryParam("to");

    if (guestName) {
        const decodedName = decodeURIComponent(guestName.replace(/\+/g, " "));
        guestNameElement.textContent = decodedName;
    }
});

// Countdown
  const countdownDate = new Date("June 9, 2025 00:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".countdown").innerHTML = "Acara telah selesai";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);

// Pause
    const bgMusic = document.getElementById("bg-music");
    const toggleBtn = document.getElementById("toggleMusic");
    const icon = toggleBtn.querySelector("i");

    let isPlaying = true;

    toggleBtn.addEventListener("click", () => {
        if (isPlaying) {
            bgMusic.pause();
            icon.classList.remove("bi-pause-circle-fill");
            icon.classList.add("bi-play-circle-fill");
        } else {
            bgMusic.play();
            icon.classList.remove("bi-play-circle-fill");
            icon.classList.add("bi-pause-circle-fill");
        }
        isPlaying = !isPlaying;
    });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));



