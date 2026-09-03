/* =========================================================
   제3관측동 페이지 JS
   ---------------------------------------------------------
   JS가 꼭 필요한 사용자 동작만 남겨둔 파일입니다.

   CSS로 이동한 고정 처리:
   - PARALLAX 로고 영역을 메인 링크로 사용
   - CopyCat / INK / Loop / Angel 이미지 표시
   - 보안팀 / Gilo의 '이미지 추가 예정' 표시
   ========================================================= */

const subTop = document.querySelector(".sub-top");

const subNavIn = document.querySelector(".sub-nav-in");
const links = document.querySelectorAll(".sub-nav a");
const sections = document.querySelectorAll("main section[data-nav]");

let didDrag = false;


/* =========================================================
   1. 서브메뉴 마우스 드래그
   ---------------------------------------------------------
   PC에서 메뉴를 잡고 좌우로 끌 수 있게 합니다.
   4px 이상 움직이면 드래그로 판단해서
   드래그 직후 링크가 실수로 눌리는 것을 막습니다.
   ========================================================= */

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


/* =========================================================
   2. 같은 페이지의 해당 섹션으로 이동
   ---------------------------------------------------------
   링크의 #값과 같은 data-nav를 가진 section을 찾아
   sticky 헤더/메뉴 높이를 빼고 부드럽게 이동합니다.
   ========================================================= */

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


/* =========================================================
   3. 현재 보고 있는 서브 섹션 표시
   ---------------------------------------------------------
   화면 중앙에 들어온 섹션을 감지해서
   해당 서브메뉴 링크에 active 클래스를 붙입니다.
   ========================================================= */

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
