const IMAGE_MAP = {
  "bg.jpg": "https://lh3.googleusercontent.com/d/1E7lS_ryt7dr0pDGXxcyAnsnf2VF3cB6m=s2000",
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
  return IMAGE_MAP[name] || IMAGE_MAP[String(name).toLowerCase()] || "";
}

const TELEGRAM = "nastebel_flowers";
const COUNTS = [24,18,31,15,42,27,19,36,22,14,29,33,17,41,26,20,38,16,23];
const N = 19;

function tgLink(text) {
  const encoded = encodeURIComponent(text);
  if (TELEGRAM) return "https://t.me/" + TELEGRAM + "?text=" + encoded;
  return "https://t.me/share/url?url=&text=" + encoded;
}

document.getElementById("heroBg").style.backgroundImage = 'url("' + imgSrc("bg.jpg") + '")';
document.getElementById("logo").src = imgSrc("logo.jpg");

const carousel = document.getElementById("carousel");
const grid = document.getElementById("grid");
for (let i = 1; i <= N; i++) {
  const src = imgSrc(i + ".jpg");
  const c = document.createElement("img");
  c.src = src;
  c.alt = "";
  carousel.appendChild(c);

  const btn = document.createElement("button");
  btn.className = "card";
  btn.type = "button";
  btn.innerHTML = '<img src="' + src + '" alt="Букет ' + i + '" /><span class="plaque">Букет ' + i + '</span>';
  btn.addEventListener("click", function () { openDetail(i); });
  grid.appendChild(btn);
}

document.getElementById("heroTg").href = tgLink("Добрый день, хочу собрать букет под запрос. Нужен ");

const detail = document.getElementById("detail");
function openDetail(i) {
  const src = imgSrc(i + ".jpg");
  const name = "Букет " + i;
  document.getElementById("dHero").src = src;
  document.getElementById("dThumb").src = src;
  document.getElementById("dName").textContent = name;
  document.getElementById("dMade").textContent = "цветочная мастерская · Москва";
  document.getElementById("dCount").textContent = "+" + COUNTS[i-1];
  document.getElementById("order").href = tgLink("Добрый день, хочу заказать букет " + name + ". Получится ли это сделать? Букет мне нужен ");
  detail.classList.add("open");
  document.body.style.overflow = "hidden";
}
document.getElementById("back").addEventListener("click", function () {
  detail.classList.remove("open");
  document.body.style.overflow = "";
});

const params = new URLSearchParams(location.search);
if (params.get("b")) openDetail(+params.get("b"));
if (params.get("shot") === "catalog") {
  document.querySelector(".hero").style.display = "none";
}
