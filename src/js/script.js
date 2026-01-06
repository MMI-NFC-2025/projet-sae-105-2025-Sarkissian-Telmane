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
}