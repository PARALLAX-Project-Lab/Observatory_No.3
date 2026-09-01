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
