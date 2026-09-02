const patchStyle = document.createElement("link");

patchStyle.rel = "stylesheet";
patchStyle.href = "css/patch.css";

document.head.appendChild(patchStyle);


const menuButton = document.querySelector(".menu-btn");
const sideNav = document.querySelector(".side-nav");
const navLinks = [...document.querySelectorAll(".side-nav a")];

menuButton?.addEventListener("click", () => {

    sideNav.classList.toggle("open");

});

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        sideNav.classList.remove("open");

    });

});


const page = document.querySelector(".page");
const footer = page?.querySelector("footer");

if (page && !document.querySelector("#ability-maker")) {

    const abilityMaker = document.createElement("section");

    abilityMaker.className = "section";
    abilityMaker.id = "ability-maker";

    abilityMaker.innerHTML = `
        <div class="section-head">

            <p class="eyebrow">FREE ABILITY MAKER</p>

            <h2>임의 능력 만들기</h2>

            <p>
                원하는 능력을 간단하게 조합할 수 있는 무료 배포용 능력 제작기입니다.
                세부 생성 규칙과 내용은 추후 추가됩니다.
            </p>

        </div>

        <div class="ability-maker">

            <div class="ability-maker-head">

                <h3>능력 생성기</h3>

                <p>현재는 UI 틀만 구현된 상태입니다.</p>

            </div>

            <div class="ability-maker-fields">

                <div class="ability-maker-field">

                    <strong>능력계열</strong>

                    <span>설정 준비 중</span>

                </div>

                <div class="ability-maker-field">

                    <strong>능력</strong>

                    <span>설정 준비 중</span>

                </div>

                <div class="ability-maker-field">

                    <strong>대가</strong>

                    <span>설정 준비 중</span>

                </div>

                <div class="ability-maker-field">

                    <strong>제약</strong>

                    <span>설정 준비 중</span>

                </div>

            </div>

            <div class="ability-maker-action">

                <p class="ability-maker-result">
                    생성 규칙이 추가되면 이곳에 결과가 표시됩니다.
                </p>

                <button class="ability-maker-btn" type="button">
                    딸깍
                </button>

            </div>

        </div>
    `;

    if (footer) {

        page.insertBefore(abilityMaker, footer);

    } else {

        page.appendChild(abilityMaker);

    }

}


const sections = [...document.querySelectorAll("main section[id]")];

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {

                return;

            }

            navLinks.forEach((link) => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );

            });

        });

    },
    {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0
    }
);

sections.forEach((section) => {

    observer.observe(section);

});
