/* =========================================================
   1. 랜덤 능력 데이터
   ---------------------------------------------------------
   능력 뽑기 버튼을 눌렀을 때 여기 등록된 능력 중 하나를
   무작위로 선택합니다.

   type     = 능력계열
   name     = 능력명
   cost     = 대가
   limit    = 제약
   detail   = 능력 설명
   backlash = 상세 설명 / 부작용
   ========================================================= */

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
        backlash: "대상에게 마력을 주입할 때 시전자가 가진 온기 일부가 함께 전달됩니다. 따라서 상대를 오래 회복시키거나 많은 사람에게 사용할수록 시전자의 체온이 빠르게 떨어집니다. 이는 냉기를 생성해 체온이 낮아지는 것이 아니라 자신의 온기를 다른 사람에게 넘긴 결과입니다. 과사용하면 손발이 차가워지고 떨림과 감각 저하가 나타날 수 있으며, 심해질 경우 스스로 체온을 유지하기 어려워집니다."
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
    }    ,
    {
        type: "생명계 ",
        name: "절대영도",
        cost: "사용할수록 손끝부터 몸이 얼어붙으며 실제 체온이 지속적으로 저하됨",
        limit: "생명체를 장시간 냉동할수록 해동 이후 신체 부담과 손상 가능성이 증가",
        detail: "극도로 차가운 냉기를 발생시켜 사물이나 생명체를 급속 냉동합니다. 대상을 즉석 동결건조하거나 냉동보관 상태로 만들어 부패와 변질을 늦출 수 있습니다.",
        backlash: "냉기를 한 지점에 집중하면 짧은 시간 안에 대상을 얼릴 수 있으며 출력과 지속시간을 조절해 냉동보관이나 동결건조에 활용할 수 있습니다. 과사용 시 손끝과 말초부터 감각이 둔해지고 피부와 조직이 얼어붙기 시작합니다. 시전자는 오히려 몸이 덥다고 느끼지만 실제 체온은 계속 낮아지며, 체온 저하가 심해질수록 체감온도와 실제 체온의 괴리가 커져 자신의 상태를 정확히 판단하기 어려워집니다."
    },
    {
        type: "생명계 기반 · 광휘계/사령계 부가 · 인과계 조건형",
        name: "심판의 불꽃",
        cost: "주기적으로 불꽃을 배출하지 않으면 내향연소가 시작되며 마력역류 시 화멸지옥 발생",
        limit: "불꽃별 조건 충족 필요 · 심리 상태가 크게 흔들리면 조건 제어가 불안정해짐",
        detail: "서로 다른 성질의 세 종류 불꽃을 다룹니다. 홍염은 일반적인 화염에 가까운 완전한 생명의 불꽃, 황염은 광휘계 기반의 황금색 회복·저주정화·마력주입 불꽃, 흑염은 사령계 기반으로 살아있는 것만 태우는 가장 강력한 불꽃입니다.",
        backlash: "생명계 기반이기에 시전자는 일반적인 불꽃에 화상을 입지 않지만 흑염은 예외입니다. 인과계는 불꽃 자체가 아니라 각 불꽃의 발동 조건과 제어 규칙을 고정합니다. 불꽃을 장기간 배출하지 않으면 체내에서 내향연소가 시작되어 열과 마력이 축적됩니다. 마력역류까지 겹치면 시전자를 중심으로 약 30m 범위를 화염으로 뒤덮는 화멸지옥이 발생할 수 있으며, 일반적인 3층 건물 하나를 전소시킬 정도의 화재로 이어질 수 있습니다. 심리적 안정과 마력 제어가 특히 중요합니다."
    },
    {
        type: "미분류",
        name: "모방",
        cost: "동시에 유지하는 모방 능력이 많아질수록 마력 소모와 제어 부담이 급격히 증가",
        limit: "직접 관측한 로고스 계보의 권능·능력만 모방 가능 · 전문화 및 고유 권한 재현 불가 · 최대 4개",
        detail: " 아자토스계보는 주변에서 관측한 타 창조신 계보의 권능이나 능력을 일정 시간 흉내 냅니다. 한 번에 최대 4개의 능력을 동시에 모방하여 유지할 수 있습니다.",
        backlash: "아자토스계보의 존재가 주변에 원래부터 존재했던 것처럼 위장하고 적응하는 성질이 능력으로 발현된 형태입니다. 관측한 로고스 계보의 능력 구조를 일시적으로 흉내 내지만 원본 계보의 본질이나 전문성을 획득하는 것은 아니므로 정밀도·출력·응용력이 원본보다 떨어집니다. 서로 다른 계열을 많이 섞을수록 안정성도 낮아집니다."
    }    ,
    {
        type: "변칙계 기반 · 인과계/광휘계 부가",
        name: "감정공명",
        cost: "상대의 감정이 지나치게 강할 경우 그 감정 일부가 시전자에게 밀려들어 자신의 감정과 구분하기 어려워짐",
        limit: "동시에 한 명과만 공명 가능 · 상대가 강하게 거부하거나 관계가 완전히 단절되면 유지 어려움",
        detail: "한 명의 대상과 감정적 공명을 형성합니다. 공명이 이어지는 동안 서로의 감정 상태를 직감적으로 느낄 수 있으며, 감정이 강해질수록 상대의 위치·위험·마력 상태까지 흐릿하게 감지할 수 있습니다.",
        backlash: "변칙계가 두 사람의 감각과 감정을 비정상적으로 겹치게 만들고, 인과계가 공명 조건과 연결을 고정하며, 광휘계가 상대의 위험과 상태를 감지하고 보호하려는 방향으로 공명을 강화합니다. 공명이 깊어질수록 상대의 두려움·고통·안도 같은 감정을 더 선명하게 느끼지만 독심은 아니므로 생각 자체를 읽을 수는 없습니다."
    }


];


/* =========================================================
   2. 모바일 메뉴 열기 / 닫기
   ---------------------------------------------------------
   .menu-btn을 누르면 .side-nav에 open 클래스를 붙였다 떼어서
   모바일 메뉴를 화면 안팎으로 움직입니다.
   메뉴 항목을 누르면 메뉴를 다시 닫습니다.
   ========================================================= */

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


/* =========================================================
   3. 능력 배포기에서 사용할 HTML 요소 찾기
   ---------------------------------------------------------
   버튼, 결과창, 능력계열/능력명/대가/제약 칸을 찾습니다.
   HTML 구조와 아이콘은 이미 HTML/CSS에 있고,
   JS는 뽑힌 텍스트만 교체합니다.
   ========================================================= */

const abilityButton = document.querySelector(".ability-maker-btn");
const abilityResult = document.querySelector(".ability-maker-result");
const abilityType = document.querySelector('[data-ability="type"]');
const abilityName = document.querySelector('[data-ability="name"]');
const abilityCost = document.querySelector('[data-ability="cost"]');
const abilityLimit = document.querySelector('[data-ability="limit"]');
const abilityCopyButton = document.querySelector(".ability-copy-btn");

let currentAbilityText = "";

/* =========================================================
   4. 긴 능력 설명의 하단 페이드 표시
   ---------------------------------------------------------
   결과가 결과창보다 길면 has-overflow 클래스를 붙이고,
   끝까지 읽으면 at-bottom 클래스를 붙입니다.
   페이드 모양 자체는 CSS가 담당합니다.
   ========================================================= */

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


/* =========================================================
   5. 능력 뽑기
   ---------------------------------------------------------
   randomAbilities 중 하나를 무작위 선택한 뒤
   HTML에 있는 네 칸과 상세 결과창에 내용을 넣습니다.
   ========================================================= */

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


/* =========================================================
   6. 생성된 능력 복사
   ---------------------------------------------------------
   Clipboard API로 복사합니다.
   지원하지 않는 브라우저에서는 임시 textarea를 사용합니다.

   copied 클래스는 '복사 완료' 상태를 알려주기 위한 것이고,
   실제 복사 아이콘 이미지는 CSS가 바꿉니다.
   ========================================================= */

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


/* =========================================================
   7. 현재 보고 있는 메인 섹션 표시
   ---------------------------------------------------------
   IntersectionObserver가 현재 보이는 section을 감지해서
   같은 href를 가진 왼쪽 메뉴 링크에 active를 붙입니다.
   ========================================================= */

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
