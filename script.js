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


