/* =========================================================
   제3관측동 메뉴
   ---------------------------------------------------------
   메인 페이지와 같은 왼쪽 고정 메뉴를 사용합니다.
   모바일에서는 메뉴 버튼으로 열고 닫습니다.
   ========================================================= */

const menuButton = document.querySelector(".menu-btn");
const sideNav = document.querySelector(".side-nav");
const links = document.querySelectorAll('.side-nav a[href^="#"]');
const sections = document.querySelectorAll("main section[data-nav]");


/* 1. 모바일 메뉴 열기 / 닫기 */

menuButton?.addEventListener("click", () => {

    sideNav?.classList.toggle("open");

});


/* 2. 메뉴 클릭 시 같은 페이지의 해당 섹션으로 이동 */

links.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const targetName = link.getAttribute("href")?.replace("#", "");
        const targetSection = document.querySelector(
            `main section[data-nav="${targetName}"]`
        );

        if (!targetSection) {

            return;

        }

        const topHeight = document.querySelector(".topbar")?.offsetHeight || 0;

        const targetTop =
            targetSection.getBoundingClientRect().top +
            window.scrollY -
            topHeight -
            20;

        window.scrollTo({

            top: targetTop,
            behavior: "smooth"

        });

        sideNav?.classList.remove("open");

    });

});


/* 3. 현재 보고 있는 섹션의 메뉴 표시 */

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
