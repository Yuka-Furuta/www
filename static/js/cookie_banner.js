
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");
    const closedBtn = document.getElementById("cookie-close");
    const modal = document.getElementById("privacy-modal");
    const openBtn = document.getElementById("open-privacy-modal");
    const closeBtn = document.querySelector(".privacy-close");

    // Check if users accept
    const accepted = localStorage.getItem("cookieAccepted");

    // If not clicked, banner is displayed
    if (!accepted) {
        banner.classList.add("active");
    }

    // Click accept button
    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookieAccepted", "true");
        banner.classList.remove("active"); // hidden
    });

    // Click close button
    closedBtn.addEventListener("click", function () {
        banner.classList.remove("active"); // hidden
    });


    // Open privacy modal
    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // Close privacy modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Click Background
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
