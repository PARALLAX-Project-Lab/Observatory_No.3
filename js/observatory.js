const observatoryMenu = [
    { id: "obs03", label: "제3관측동", href: "index.html" },
    { id: "security", label: "보안팀", href: "security.html" },
    { id: "ink", label: "INK", href: "ink.html" },
    { id: "loop", label: "Loop", href: "loop.html" },
    { id: "angel", label: "Angel", href: "angel.html" },
    { id: "copycat", label: "CopyCat", href: "copycat.html" }
];

const submenu = document.querySelector(".obs-submenu");
const currentPage = document.body.id;

if (submenu) {
    observatoryMenu.forEach((item) => {
        const link = document.createElement("a");

        link.href = item.href;
        link.textContent = item.label;

        if (item.id === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }

        submenu.appendChild(link);
    });
}
