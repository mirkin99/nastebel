const IMAGE_MAP = {
  "bg.jpg": "https://lh3.googleusercontent.com/d/1E7lS_ryt7dr0pDGXxcyAnsnf2VF3cB6m=s2000",
  "fon2.jpg": "https://lh3.googleusercontent.com/d/1QVGJUJJo_697Zeuk4ZZWdP7raR9xpIqf=s2000",
  "logo.jpg": "https://lh3.googleusercontent.com/d/1MG6APfUyH004zygBVvI-TA2w0fywPS6K=s400",
  "1.jpg": "https://lh3.googleusercontent.com/d/113dGUD4P1tPnyHMpGDCNIEU89c5RLm6K=s1200",
  "2.jpg": "https://lh3.googleusercontent.com/d/1-3DfYuWH7ZfDrYHPtBFHkou3eAbR56v6=s1200",
  "3.jpg": "https://lh3.googleusercontent.com/d/1tvcizbrvmBVmpks8iy-Qe-THq1B-enwP=s1200",
  "4.jpg": "https://lh3.googleusercontent.com/d/1asrwL87pCYCaZA1L9XIJ1UI6CBVrLaOK=s1200",
  "5.jpg": "https://lh3.googleusercontent.com/d/1yoncXreMqzJG-zQPyo4cReGh0atYpk7G=s1200",
  "6.jpg": "https://lh3.googleusercontent.com/d/1nlB2inSXjA6-IXfKn3VAqiULNZfWsy9C=s1200",
  "7.jpg": "https://lh3.googleusercontent.com/d/18dMoY1rCqH4CXzeO0WqzK4jPt3-sfacm=s1200",
  "8.jpg": "https://lh3.googleusercontent.com/d/1FovqlYyP9NFQmQGznt_or0GRlMUURXEE=s1200",
  "9.jpg": "https://lh3.googleusercontent.com/d/1lFOJzp7xysLqCftOinGRAmvhwmAvp5tv=s1200",
  "10.jpg": "https://lh3.googleusercontent.com/d/1_hiURmkPOLdXBDBanlYVrFGdxBgkspsn=s1200",
  "11.jpg": "https://lh3.googleusercontent.com/d/1nTmIaEB0lkkHDEC-3LSRHo3yOvrc8aL2=s1200",
  "12.jpg": "https://lh3.googleusercontent.com/d/1CxZXPp5sxqj6FxSo9kOLfv-TFHW8UhDi=s1200",
  "13.jpg": "https://lh3.googleusercontent.com/d/1_SWVQQGPzeY6g_QqBEeBsAtp5dRZp43W=s1200",
  "14.jpg": "https://lh3.googleusercontent.com/d/1RsGnWqQUv0aQmfBmkKmjX3grdlqCE0wL=s1200",
  "15.jpg": "https://lh3.googleusercontent.com/d/1RD5yreV1Scrau4jOwvNQQKWWBn5HM10t=s1200",
  "16.jpg": "https://lh3.googleusercontent.com/d/1kLEPkf7BevUiArGdt9PLw32DkosNS9aq=s1200",
  "17.jpg": "https://lh3.googleusercontent.com/d/1zXEWK1aiNhtnp-dtIU_boYl6zdz3VQj5=s1200",
  "18.jpg": "https://lh3.googleusercontent.com/d/1jidc7Z5M5Hxm2ZwAl6e-1kEwsNFLkYo1=s1200",
  "19.jpg": "https://lh3.googleusercontent.com/d/1mfS84njJ4lXhUgsVAPayeyn6_5WvyJo6=s1200"
};

function imgSrc(name) {
  const key = String(name).toLowerCase();
  return IMAGE_MAP[name] || IMAGE_MAP[key] || "";
}

const TG_CHANNEL = "nastebel";
const TG_ORDER = "nastebel";

const BOUQUETS = [
  { file: "1.jpg", name: "Янтарное поле", comp: "Подсолнухи, белые розы, эустома, дельфиниум, зелёный вибурнум / молюцелла.", pet: "осторожно с питомцами", petWarn: true },
  { file: "2.jpg", name: "Ванильное облако", comp: "Пионовидные розы кремовых и персиковых оттенков, хризантемы, эвкалипт.", pet: "осторожно с питомцами", petWarn: true },
  { file: "3.jpg", name: "Лимонад и ягоды", comp: "Кустовые розы, белая гортензия, гвоздика, душистый горошек, сухоцветы.", pet: "осторожно с питомцами", petWarn: true },
  { file: "4.jpg", name: "Голубой фарфор", comp: "Голубая гортензия, розы, диантус Green Trick, гиперикум, эвкалипт.", pet: "осторожно с питомцами", petWarn: true },
  { file: "5.jpg", name: "Первая оттепель", comp: "Пионовидные розы, эустома, верба, пшеница, цветущие ветки.", pet: "уточните для питомцев", petWarn: false },
  { file: "6.jpg", name: "Ромашковый сад", comp: "Хризантема, розы, ранункулюс, ромашка / танацетум, хамелациум.", pet: "осторожно с питомцами", petWarn: true },
  { file: "7.jpg", name: "Персиковый шёлк", comp: "Монобукет из персиковых ранункулюсов.", pet: "уточните для питомцев", petWarn: false },
  { file: "8.jpg", name: "Утренний выпуск", comp: "Белая гортензия, кустовые розы, гвоздика, ромашка, восковник.", pet: "осторожно с питомцами", petWarn: true },
  { file: "9.jpg", name: "Весенний сад", comp: "Тюльпаны, гвоздика, матиола, форзиция, альстромерия, гиперикум, ветки.", pet: "осторожно с питомцами", petWarn: true },
  { file: "10.jpg", name: "Лимонный мёд", comp: "Пионовидные розы, эустома, твидия, форзиция, леукадендрон, цветущие ветки.", pet: "уточните для питомцев", petWarn: false },
  { file: "11.jpg", name: "Янтарь и вино", comp: "Хризантемы, бордовая гортензия, диантус Green Trick, эремурус, лимониум, ковыль.", pet: "осторожно с питомцами", petWarn: true },
  { file: "12.jpg", name: "Лотос и фарфор", comp: "Георгины, голубая гортензия, коробочка лотоса, диантус, сухоцветы.", pet: "осторожно с питомцами", petWarn: true },
  { file: "13.jpg", name: "Высокая ваза", comp: "Книфофия, ромашки, хризантемы, диантус, гладиолус, эвкалипт.", pet: "осторожно с питомцами", petWarn: true },
  { file: "14.jpg", name: "Тропический фарфор", comp: "Георгины, гортензия, антуриум, гладиолус, амарантус, сухоцветы.", pet: "осторожно с питомцами", petWarn: true },
  { file: "15.jpg", name: "Конфетти", comp: "Герберы, хризантемы, гвоздика, аллиум, краспедия, матиола, амарантус.", pet: "осторожно с питомцами", petWarn: true },
  { file: "16.jpg", name: "Пионовый зефир", comp: "Пионы, гортензия, розы, гвоздика, хризантемы, эвкалипт.", pet: "осторожно с питомцами", petWarn: true },
  { file: "17.jpg", name: "Романтический момент", comp: "Пионы, хризантемы, эвкалипт.", pet: "осторожно с питомцами", petWarn: true },
  { file: "18.jpg", name: "Сиреневый туман", comp: "Пионы, сиреневая эустома, лимониум.", pet: "уточните для питомцев", petWarn: false },
  { file: "19.jpg", name: "Розовый чертополох", comp: "Пионы, кустовые розы, хризантемы, гиперикум, эрингиум, эвкалипт, гвоздика.", pet: "осторожно с питомцами", petWarn: true }
];

function orderLink(name) {
  const text = "Здравствуйте! Хочу заказать букет «" + name + "». Нужен на дату: ";
  return "https://t.me/" + TG_ORDER + "?text=" + encodeURIComponent(text);
}

document.getElementById("heroBg").style.backgroundImage = 'url("' + imgSrc("bg.jpg") + '")';
document.getElementById("logo").src = imgSrc("logo.jpg");
document.getElementById("heroTg").href = "https://t.me/" + TG_CHANNEL;

const catalogBg = 'url("' + imgSrc("fon2.jpg") + '")';
document.getElementById("catalog").style.backgroundImage =
  'linear-gradient(180deg, rgba(8,8,8,.55), rgba(8,8,8,.62)), ' + catalogBg;
document.getElementById("about").style.backgroundImage =
  'linear-gradient(180deg, rgba(8,8,8,.62), rgba(8,8,8,.82)), ' + catalogBg;

const carousel = document.getElementById("carousel");
const grid = document.getElementById("grid");

BOUQUETS.forEach(function (b, i) {
  const src = imgSrc(b.file);
  const thumb = document.createElement("button");
  thumb.type = "button";
  thumb.setAttribute("aria-label", b.name);
  thumb.innerHTML = '<img src="' + src + '" alt="' + b.name + '" />';
  thumb.addEventListener("click", function () { openDetail(i); });
  carousel.appendChild(thumb);

  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.innerHTML = '<img src="' + src + '" alt="' + b.name + '" /><span class="plaque">' + b.name + "</span>";
  card.addEventListener("click", function () { openDetail(i); });
  grid.appendChild(card);
});

const detail = document.getElementById("detail");
const sheet = document.getElementById("sheet");
const dPet = document.getElementById("dPet");

function openDetail(i) {
  const b = BOUQUETS[i];
  document.getElementById("dHero").src = imgSrc(b.file);
  document.getElementById("dHero").alt = b.name;
  document.getElementById("dName").textContent = b.name;
  document.getElementById("dComp").textContent = b.comp;
  dPet.textContent = b.pet;
  dPet.className = "chip" + (b.petWarn ? " warn" : "");
  document.getElementById("order").href = orderLink(b.name);
  detail.classList.add("open");
  detail.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  history.replaceState(null, "", "?b=" + (i + 1));
}

function closeDetail() {
  detail.classList.remove("open");
  detail.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  sheet.style.transform = "";
  if (location.search) history.replaceState(null, "", location.pathname);
}

document.getElementById("back").addEventListener("click", closeDetail);

let startY = 0;
let startX = 0;
let dragging = false;

function onStart(x, y) {
  startX = x;
  startY = y;
  dragging = true;
  sheet.style.transition = "none";
}
function onMove(x, y) {
  if (!dragging) return;
  const dy = y - startY;
  const dx = x - startX;
  if (dy > 0 && Math.abs(dy) > Math.abs(dx)) {
    sheet.style.transform = "translateY(" + dy + "px)";
  }
}
function onEnd(x, y) {
  if (!dragging) return;
  dragging = false;
  sheet.style.transition = "";
  const dy = y - startY;
  const dx = x - startX;
  if (dy > 88 || dx > 90) closeDetail();
  else sheet.style.transform = "";
}

sheet.addEventListener("touchstart", function (e) {
  onStart(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });
sheet.addEventListener("touchmove", function (e) {
  onMove(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });
sheet.addEventListener("touchend", function (e) {
  onEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
});

detail.addEventListener("touchstart", function (e) {
  if (e.touches[0].clientX < 24) onStart(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });

const themeBtn = document.getElementById("themeBtn");
function applyTheme(mode) {
  document.body.classList.toggle("light", mode === "light");
  localStorage.setItem("nastebel-theme", mode);
}
themeBtn.addEventListener("click", function () {
  applyTheme(document.body.classList.contains("light") ? "dark" : "light");
});
applyTheme(localStorage.getItem("nastebel-theme") || "dark");

const params = new URLSearchParams(location.search);
if (params.get("b")) openDetail(+params.get("b") - 1);
if (params.get("shot") === "catalog") {
  document.querySelector(".hero").style.display = "none";
}
