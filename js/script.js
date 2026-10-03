// =========================================================
// FRASER YACHTS EXCLUSIVE
// STEP 1 — BASIC INTERACTIONS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // Close announcement bar
    const closeButton = document.querySelector(".announcement-close");
    const announcementBar = document.querySelector(".announcement-bar");

    if (closeButton && announcementBar) {
        closeButton.addEventListener("click", () => {
            announcementBar.style.display = "none";
        });
    }

    // Simple favorite interaction
    const heartButton = document.querySelector(".heart-button");

    if (heartButton) {
        heartButton.addEventListener("click", () => {
            heartButton.classList.toggle("active");

            if (heartButton.classList.contains("active")) {
                heartButton.textContent = "♥";
            } else {
                heartButton.textContent = "♡";
            }
        });
    }

    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});
