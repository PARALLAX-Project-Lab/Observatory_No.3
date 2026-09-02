const patchStyle = document.createElement("link");

patchStyle.rel = "stylesheet";
patchStyle.href = "css/patch.css";

document.head.appendChild(patchStyle);


const randomAbilities = [

    {
        type: "인과계 기반 · 변칙계 혼합",
        name: "거짓간파",
        cost: "마력의 주기적 역류 · 심한 두통 · 비자발적 독심",
        limit: "상대방과 의식적으로 시선을 맞춰야 발동",
        detail: "시선을 마주친 상대가 거짓을 말하면 동공색이 붉게 변하고 동공에 X자 표식이 나타납니다.",
        backlash: "약 한 달에 한 번 인과계와 변칙계의 상극으로 마력이 역류합니다. 역류 시 거짓 여부만 판별하던 능력이 통제되지 않는 독심으로 악화됩니다. 지나치게 강한 마력과 충돌하거나 감정적 동요가 심할 때도 추가 역류할 수 있습니다."
    }

];


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

                <p>등록된 능력 중 하나를 무작위로 출력합니다.</p>

            </div>

            <div class="ability-maker-fields">

                <div class="ability-maker-field">

                    <strong>능력계열</strong>

                    <span data-ability="type">등록 능력 대기</span>

                </div>

                <div class="ability-maker-field">

                    <strong>능력</strong>

                    <span data-ability="name">등록 능력 대기</span>

                </div>

                <div class="ability-maker-field">

                    <strong>대가</strong>

                    <span data-ability="cost">등록 능력 대기</span>

                </div>

                <div class="ability-maker-field">

                    <strong>제약</strong>

                    <span data-ability="limit">등록 능력 대기</span>

                </div>

            </div>

            <div class="ability-maker-action">

                <p class="ability-maker-result">
                    버튼을 누르면 능력 상세가 표시됩니다.
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
