const patchStyle = document.createElement("link");

patchStyle.rel = "stylesheet";
patchStyle.href = "../../css/patch.css";

document.head.appendChild(patchStyle);


const subTop = document.querySelector(".sub-top");
const subTopIn = document.querySelector(".sub-top-in");
const subBrand = document.querySelector(".sub-brand");
const backLink = document.querySelector(".back-link");

if (subTop && subTopIn && subBrand) {

    const homeLink = document.createElement("a");

    homeLink.className = "sub-brand home-link";
    homeLink.href = "../../index.html";
    homeLink.setAttribute(
        "aria-label",
        "PARALLAX 메인 페이지로 이동"
    );

    while (subBrand.firstChild) {

        homeLink.appendChild(subBrand.firstChild);

    }

    subBrand.replaceWith(homeLink);
    backLink?.remove();

}


const links = document.querySelectorAll(".sub-nav a");
const sections = document.querySelectorAll("main section[data-nav]");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {

                return;

            }

            links.forEach((link) => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.dataset.nav}`
                );

            });

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach((section) => {

    observer.observe(section);

});
