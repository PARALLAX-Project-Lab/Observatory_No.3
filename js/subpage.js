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


/* 제3관측동 인물 이미지 */

const profileImages = {
    "COPYCAT IMAGE": {
        src: "../../img/copycat_profile.png",
        alt: "CopyCat",
        className: "profile-copycat"
    },
    "INK IMAGE": {
        src: "../../img/ink_profile.png",
        alt: "INK",
        className: "profile-ink"
    },
    "LOOP IMAGE": {
        src: "../../img/loop_profile.png",
        alt: "Loop",
        className: "profile-loop"
    },
    "ANGEL IMAGE": {
        src: "../../img/angel_profile.png",
        alt: "Angel",
        className: "profile-angel"
    }
};

document.querySelectorAll(".person-placeholder").forEach((placeholder) => {

    const profile = profileImages[placeholder.textContent.trim()];

    if (!profile) {

        return;

    }

    const visual = placeholder.closest(".person-visual");
    const image = document.createElement("img");

    image.className = `person-img contain ${profile.className}`;
    image.src = profile.src;
    image.alt = profile.alt;

    visual?.classList.add("profile-white");

    placeholder.replaceWith(image);

});


/* 미제작 인물 이미지 */

document.querySelectorAll(
    'section[data-nav="security-member"] .person-placeholder, section[data-nav="gilo"] .person-placeholder'
).forEach((placeholder) => {

    const visual = placeholder.closest(".person-visual");

    placeholder.textContent = "이미지 추가 예정";
    visual?.classList.add("image-pending");

});


const subNavIn = document.querySelector(".sub-nav-in");
const links = document.querySelectorAll(".sub-nav a");
const sections = document.querySelectorAll("main section[data-nav]");

let didDrag = false;


/* 서브메뉴 마우스 드래그 */

if (subNavIn) {

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    subNavIn.addEventListener("pointerdown", (event) => {

        if (event.pointerType !== "mouse") {

            return;

        }

        isDragging = true;
        didDrag = false;

        startX = event.clientX;
        startScrollLeft = subNavIn.scrollLeft;

        subNavIn.classList.add("dragging");
        subNavIn.setPointerCapture(event.pointerId);

    });

    subNavIn.addEventListener("pointermove", (event) => {

        if (!isDragging) {

            return;

        }

        const moveX = event.clientX - startX;

        if (Math.abs(moveX) > 4) {

            didDrag = true;

        }

        subNavIn.scrollLeft = startScrollLeft - moveX;

    });

    const endDrag = (event) => {

        if (!isDragging) {

            return;

        }

        isDragging = false;

        subNavIn.classList.remove("dragging");

        if (subNavIn.hasPointerCapture(event.pointerId)) {

            subNavIn.releasePointerCapture(event.pointerId);

        }

    };

    subNavIn.addEventListener("pointerup", endDrag);
    subNavIn.addEventListener("pointercancel", endDrag);

}


/* 서브메뉴 클릭 시 별도 페이지 이동 없이 같은 페이지 해당 섹션으로 이동 */

links.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        if (didDrag) {

            didDrag = false;

            return;

        }

        const targetName = link.getAttribute("href")?.replace("#", "");

        const targetSection = document.querySelector(
            `main section[data-nav="${targetName}"]`
        );

        if (!targetSection) {

            return;

        }

        const topHeight = subTop?.offsetHeight || 0;
        const navHeight = document.querySelector(".sub-nav")?.offsetHeight || 0;

        const targetTop =
            targetSection.getBoundingClientRect().top +
            window.scrollY -
            topHeight -
            navHeight -
            20;

        window.scrollTo({

            top: targetTop,
            behavior: "smooth"

        });

    });

});


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
