const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        document.body.classList.toggle('no-scroll');

        toggle.ariaExpanded = isClosed;
        nav.hidden = isOpen;
    });
};

const scroll = document.querySelector(".cta__button-scroll")
if (scroll) {
    scroll.addEventListener("click", () => {
        window.scroll({ top: 870, left: 0, behavior: "smooth", });
    });
};

const buttons = document.querySelectorAll(".cadre__film-btn");
const videos = document.querySelectorAll(".ba__film");

buttons.forEach((button, index) => {
    const video = videos[index];

    button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isOpen));
        video.hidden = isOpen;
    });
});