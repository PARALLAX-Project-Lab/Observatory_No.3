const randomAbilities = [

    {
        type: "인과계 기반 · 변칙계 혼합",
        name: "거짓간파",
        cost: "마력의 주기적 역류 · 심한 두통 · 비자발적 독심",
        limit: "상대방과 의식적으로 시선을 맞춰야 발동",
        detail: "시선을 마주친 상대가 거짓을 말하면 동공색이 붉게 변하고 동공에 X자 표식이 나타납니다.",
        backlash: "약 한 달에 한 번 인과계와 변칙계의 상극으로 마력이 역류합니다. 역류 시 거짓 여부만 판별하던 능력이 통제되지 않는 독심으로 악화됩니다. 지나치게 강한 마력과 충돌하거나 감정적 동요가 심할 때도 추가 역류할 수 있습니다."
    },
    {
        type: "인과계 기반 · 변칙계 혼합",
        name: "아카이브",
        cost: "시간이 지나면 자신의 고통 기억이 선택적으로 휘발",
        limit: "자신의 기억만 저장 가능",
        detail: "자신의 기억을 비눗방울 형태로 아카이브에 저장합니다. 저장된 비눗방울을 터뜨리면 해당 기억에서 자신이 느꼈던 감정이 주변에 퍼집니다.",
        backlash: "기억을 저장한 직후에는 원본 기억이 그대로 남아 있습니다. 그러나 시간이 지나면 저장 여부와 관계없이 자신의 고통스러운 기억만 원본에서 자동적으로 휘발됩니다."
    }
    ,
    {
        type: "생명계 ",
        name: "화롯불",
        cost: "능력을 사용할수록 자신의 체온이 점차 내려감",
        limit: "마력주입 특화 · 자신에게는 사용할 수 없음",
        detail: "자신의 마력을 온기와 생명력으로 변환해 상대를 따뜻하게 감싸며 회복시킵니다. 상처 회복과 체온 유지에 특화되어 있습니다.",
        backlash: "대상에게 마력을 지속적으로 주입하는 동안 포근한 열이 몸을 감싸며 회복을 촉진합니다. 사용량과 지속시간이 늘어날수록 시전자의 체온 저하가 누적되며, 자신의 신체에는 능력을 사용할 수 없습니다."
    },
    {
        type: "변칙계 ",
        name: "캡슐토이",
        cost: "사용할수록 그날 하루 동안 사소한 불행이 누적됨",
        limit: "랜덤 가챠형 · 획득할 물건의 종류·성능·정확한 용도를 지정할 수 없음",
        detail: "현재 상황에 도움이 될 가능성이 있는 물건을 무작위로 획득합니다.",
        backlash: "능력 사용 시 캡슐토이처럼 임의의 물건 하나가 생성됩니다. 물건은 현재 상황과 어느 정도 연관된 도움을 주지만 반드시 최적의 해결책이 나오지는 않습니다. 사용 횟수가 늘어날수록 물건을 떨어뜨리거나 발을 헛디디거나 타이밍이 어긋나는 등 사소한 불운이 그날 하루 동안 누적됩니다."
    }    ,
    {
        type: "천체계 ",
        name: "부유",
        cost: "제어 실패 또는 과사용 시 자신의 몸에 과도한 중력이 집중되어 비정상적으로 무거워짐",
        limit: "대상이 무겁거나 수가 많을수록 제어 난도가 크게 증가",
        detail: "자신이나 다른 사람, 물건에 작용하는 중력을 약화시켜 공중에 띄웁니다. 여러 대상을 동시에 띄우는 것도 가능합니다.",
        backlash: "대상의 중력을 줄여 천천히 부유시키거나 공중에서 위치를 조절할 수 있습니다. 제어에 실패할 경우 반동처럼 시전자에게 중력이 몰리며 몸을 움직이기 어렵거나 바닥에서 쉽게 떨어지지 못할 정도로 무거워질 수 있습니다."
    },
    {
        type: "시간계 ",
        name: "되감기",
        cost: "시간을 되돌린 만큼 자신의 기억도 함께 이전 상태로 돌아감",
        limit: "자신의 시간만 되돌릴 수 있음",
        detail: "자신의 시간을 이전 시점으로 되돌려 부상·손상·상태 이상 등을 복구합니다.",
        backlash: "능력 발동 시 자신의 신체와 상태가 지정한 과거 시점으로 복구됩니다. 그러나 기억 또한 그 시점으로 되돌아가기 때문에 능력을 사용한 사실이나 되돌리기 직전까지의 경험을 스스로 기억할 수 없습니다."
    },
    {
        type: "천체계 ",
        name: "파티클",
        cost: "강한 빛을 만들거나 과도하게 사용할 경우 일정 시간 시야를 잃음",
        limit: "어두운 장소에서만 사용 가능 · 본인의 시야가 아닌 주변 실제 광량을 기준으로 발동",
        detail: "아무것도 없는 암흑 속에서 반짝이는 빛의 입자를 생성합니다. 파티클이 많이 모일수록 광량이 강해지고 유지시간도 길어지며 다량을 모으면 섬광탄처럼 사용할 수 있습니다.",
        backlash: "생성된 파티클은 별가루처럼 공중에 부유하며 한곳에 모으거나 넓게 퍼뜨릴 수 있습니다. 섬광 수준으로 사용할 경우 시전자도 일정 시간 시야를 잃습니다. 시전자가 보이지 않는 상태라도 주변이 밝다면 새 파티클을 생성할 수 없습니다."
    },
    {
        type: "광휘계 ",
        name: "나 좀 지켜줘!",
        cost: "지정이 유지되는 동안 시전자의 방어력과 위험 감지 능력이 일부 감소",
        limit: "동시에 한 명만 보디가드로 지정 가능 · 일정 거리 이상 떨어지면 효과 약화 또는 해제",
        detail: "한 명을 자신의 보디가드로 지정합니다. 지정된 대상은 방어력이 증가하고 주변의 위험이나 공격 징후를 더 빠르게 감지할 수 있게 됩니다.",
        backlash: "지정 대상은 시전자에게 향하는 위험을 더 빠르게 알아차리며 충격·공격·위협에 대한 대응력이 상승합니다. 강화 효과는 지정 대상이 시전자를 보호하려는 행동을 할 때 가장 강하게 발현됩니다."
    },
    {
        type: "사령계 기반 · 변칙계 혼합",
        name: "죽음 직감",
        cost: "죽음을 피할수록 사령계 존재에게 자신의 흔적이 선명해짐",
        limit: "죽음의 기척만 감지 가능 · 위험의 정확한 원인은 알 수 없음 · 사신의 직접 집행은 회피 불가",
        detail: "자신에게 치명적인 위험이 닥치기 직전 죽음의 기척을 감지하며 본능적으로 피해야 할 방향이나 행동을 선택해 수상할 정도로 높은 확률로 살아남습니다.",
        backlash: "사고·습격·재난 등 실제로 사망 가능성이 높은 상황에서 자동으로 발동합니다. 다만 사신이 직접 명부를 들고 찾아와 죽음을 집행하는 경우에는 회피할 수 없으며 사신의 낫에 베이면 그대로 사후로 끌려갑니다."
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


const abilityButton = document.querySelector(".ability-maker-btn");
const abilityResult = document.querySelector(".ability-maker-result");
const abilityType = document.querySelector('[data-ability="type"]');
const abilityName = document.querySelector('[data-ability="name"]');
const abilityCost = document.querySelector('[data-ability="cost"]');
const abilityLimit = document.querySelector('[data-ability="limit"]');
const abilityCopyButton = document.querySelector(".ability-copy-btn");

let currentAbilityText = "";

/* 능력 결과 페이드 */

const abilityResultWrap = document.querySelector(".ability-maker-result-wrap");

const syncAbilityResultFade = () => {

    if (!abilityResult || !abilityResultWrap) {

        return;

    }

    const hasOverflow = abilityResult.scrollHeight > abilityResult.clientHeight + 1;
    const atBottom = abilityResult.scrollTop + abilityResult.clientHeight >= abilityResult.scrollHeight - 2;

    abilityResultWrap.classList.toggle("has-overflow", hasOverflow);
    abilityResultWrap.classList.toggle("at-bottom", !hasOverflow || atBottom);

};

abilityResult?.addEventListener("scroll", syncAbilityResultFade);

window.addEventListener("resize", syncAbilityResultFade);


abilityButton?.addEventListener("click", () => {

    if (!randomAbilities.length) {

        return;

    }

    const ability = randomAbilities[
        Math.floor(Math.random() * randomAbilities.length)
    ];

    if (abilityType) {

        abilityType.textContent = ability.type;

    }

    if (abilityName) {

        abilityName.textContent = ability.name;

    }

    if (abilityCost) {

        abilityCost.textContent = ability.cost;

    }

    if (abilityLimit) {

        abilityLimit.textContent = ability.limit;

    }

    if (abilityResult) {

        abilityResult.innerHTML = `
            <strong>${ability.name}</strong><br>
            ${ability.detail}<br><br>
            <strong>대가</strong><br>${ability.backlash}
        `;

        abilityResult.scrollTop = 0;

        window.requestAnimationFrame(syncAbilityResultFade);

    }

    currentAbilityText = [
        `[${ability.name}]`,
        `분류: ${ability.type}`,
        `능력: ${ability.detail}`,
        `제약: ${ability.limit}`,
        `대가: ${ability.cost}`,
        `상세: ${ability.backlash}`
    ].join("\n");

    if (abilityCopyButton) {

        abilityCopyButton.disabled = false;

    }

});


abilityCopyButton?.addEventListener("click", async () => {

    if (!currentAbilityText) {

        return;

    }

    try {

        await navigator.clipboard.writeText(currentAbilityText);

    } catch {

        const copyArea = document.createElement("textarea");

        copyArea.value = currentAbilityText;
        copyArea.setAttribute("readonly", "");
        copyArea.className = "clipboard-copy-area";

        document.body.appendChild(copyArea);

        copyArea.select();
        document.execCommand("copy");

        copyArea.remove();

    }

    abilityCopyButton.classList.add("copied");
    abilityCopyButton.setAttribute("aria-label", "복사 완료");
    abilityCopyButton.title = "복사 완료";

    window.setTimeout(() => {

        abilityCopyButton.classList.remove("copied");
        abilityCopyButton.setAttribute("aria-label", "생성된 능력 복사");
        abilityCopyButton.title = "복사";

    }, 1200);

});


/* 시간계보 아이콘 */

document.querySelectorAll(".lineage-card").forEach((card) => {

    const title = card.querySelector("h3");

    if (title?.textContent.trim() !== "시간계보") {

        return;

    }

    const icon = card.querySelector(".sigil");

    if (!icon) {

        return;

    }

    icon.textContent = "";
    icon.classList.add("time-lineage-icon");

});


/* 혼돈계보 아이콘 */

document.querySelectorAll(".lineage-card").forEach((card) => {

    const title = card.querySelector("h3");

    if (title?.textContent.trim() !== "혼돈계보") {

        return;

    }

    const icon = card.querySelector(".sigil");

    if (!icon) {

        return;

    }

    icon.textContent = "";
    icon.classList.add("chaos-lineage-icon");

});


/* 운명계보 아이콘 */

document.querySelectorAll(".lineage-card").forEach((card) => {

    const title = card.querySelector("h3");

    if (title?.textContent.trim() !== "운명계보") {

        return;

    }

    const icon = card.querySelector(".sigil");

    if (!icon) {

        return;

    }

    icon.textContent = "";
    icon.classList.add("fate-lineage-icon");

});


/* 천상계보 아이콘 */

document.querySelectorAll(".lineage-card").forEach((card) => {

    const title = card.querySelector("h3");

    if (title?.textContent.trim() !== "천상계보") {

        return;

    }

    const icon = card.querySelector(".sigil");

    if (!icon) {

        return;

    }

    icon.textContent = "";
    icon.classList.add("heaven-lineage-icon");

});


/* 죽음계보 · 천체계보 아이콘 */

document.querySelectorAll(".lineage-card").forEach((card) => {

    const title = card.querySelector("h3");
    const icon = card.querySelector(".sigil");

    if (!title || !icon) {

        return;

    }

    const name = title.textContent.trim();

    if (name === "죽음계보") {

        icon.textContent = "";
        icon.classList.add("death-lineage-icon");

    }

    if (name === "천체계보") {

        icon.textContent = "";
        icon.classList.add("celestial-lineage-icon");

    }

});


/* 타 창조신 계보 */

const lineageGrid = document.querySelector(".lineage-grid");

if (lineageGrid && !document.querySelector(".other-creator-lineage")) {

    const otherCreator = document.createElement("article");

    otherCreator.className = "lineage-card other-creator-lineage";

    otherCreator.innerHTML = `
        <span class="sigil other-creator-lineage-icon">?</span>
        <h3>타 창조신 계보</h3>
        <p>로고스 계보에 속하지 않은 다른 신격들이 포함됩니다.</p>
        <small>다른 창조신에게서 파생된 존재들을 분류합니다.</small>
    `;

    lineageGrid.appendChild(otherCreator);

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
