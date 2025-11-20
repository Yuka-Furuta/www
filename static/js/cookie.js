
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");
    const declineBtn = document.getElementById("cookie-decline");

    // Check if users accept
    const accepted = localStorage.getItem("cookieAccepted");
    // Check if users decline
    const declined = localStorage.getItem("cookieDeclined");

    // If not clicked, banner is displayed
    if (accepted) {
        runPageSpecificScript();
    } else if (!declined){
        banner.classList.add("active");
    }

    // agree button
    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookieAccepted", "true");
        banner.classList.remove("active"); // hidden
        runPageSpecificScript();
    });

    // decline button
    declineBtn.addEventListener("click", function () {
        localStorage.setItem("cookieDeclined", "true");
        banner.classList.remove("active"); // hidden
    });

    // Loading Turnstiles depending on the page
    function runPageSpecificScript() {
        const path = location.pathname;
        if (path.startsWith("/contact")) {
            console.log("Turnstile を読み込む: contact ページ");
            // Add Turnstile script
            const script = document.createElement("script");
            script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }
});
