// anime event
const sec0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    loop: true,
    direction: "alternate",
  });
};

const sec1 = () => {
  const tl = anime.timeline({
    easeing: "linear",
    duration: 500,
  });

  tl.add({
    targets: ".g01",
    height: "90%",
  })
    .add({
      targets: ".g02",
      height: "80%",
    })
    .add({
      targets: ".g03",
      height: "80%",
    })
    .add({
      targets: ".g04",
      height: "60%",
    });
};

const sec2 = () => {
  const tl = anime.timeline({
    duration: 500,
    easing: "linear",
  });

  tl.add({
    targets: "#sec2 h1",
    opacity: 1,
    translateY: 50,
  }).add({
    targets: "#sec2 .slider_wrap",
    opacity: 1,
    translateY: 50,
  });
};

const sec3 = () => {
  const d0 =
    "M570 10C308.5 -26.5 135 62 0.5 95V730H1921V95C1753.5 176 1579.5 209 1344 209C1028.11 209 875.763 52.6782 570 10Z";
  const d1 =
    "M453 100C283.5 11.5 184 0.499989 0.5 0.5V772H1921V63C1753.5 144 1381.5 288 1146 288C825 288 726.67 242.89 453 100Z";
  const d2 =
    "M585.5 276C367.959 243.273 245 160.5 0.5 20V729H1921V20C1693 -24 1501 6.78688 1312 147.287C1070.85 326.558 758.5 302.027 585.5 276Z";

  anime({
    targets: ".sec3_svg path",
    d: [{ value: d0 }, { value: d1 }, { value: d2 }],
    duration: 4000,
    easing: "easeInOutQuart",
    loop: true,
    direction: "alternate",
  });

  anime({
    targets: "#sec3 h1 span",
    delay: anime.stagger(100),
    opacity: 1,
    duration: 3000,
    translateX: 100,
    easing: "easeOutSine",
  });
};

const staggerWrap = document.querySelector("#sec4 .img_wrap");
const fragment = document.createDocumentFragment();
const grid = [20, 20];
const col = grid[0];
const row = grid[1];

const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const div = document.createElement("div");
  fragment.appendChild(div);
  div.className = "tail";
}

staggerWrap.appendChild(fragment);

const sec4 = () => {
  const stageAni = anime.timeline({
    targets: ".tail",
    easing: "easeInBack",
    delay: anime.stagger(10, { from: "last" }),
    duration: 2000,
    endDelay: 1000,
    loop: false,
    autoplay: false,
  });
  stageAni.add({
    targets: "#sec4 h1 img",
    opacity: 0,
    duration: 500,
  });

  staggerWrap.addEventListener("click", () => {
    stageAni.play();
  });
};

const reset_sec1 = () => {
  anime({
    targets: ".gage_in",
    height: "0%",
  });
};

// fullpage event
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (old_elem.index === 1) {
      reset_sec1();
    }
    if (new_elem.index === 2) {
      sec2();
    }
    if (new_elem.index === 3) {
      sec3();
    }
    if (new_elem.index === 4) {
      sec4();
    }
  },
});

// nav event
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  body.classList.toggle("nav_active");
});

// slide event
const sliderItems = document.querySelectorAll(".sec2_slider li");
const sliderPagers = document.querySelectorAll(".slide_icons li");
const leftBtn = document.querySelector(".slide_btn.left");
const rightBtn = document.querySelector(".slide_btn.right");
const background = document.querySelector("#sec2");

const reset = () => {
  sliderItems.forEach((item, index) => {
    sliderItems[index].classList.remove("On");
    sliderPagers[index].classList.remove("Active");
  });
};

const next = (e) => {
  e.preventDefault();

  let crtSlide = document.querySelector(".sec2_slider li.On");
  let i = crtSlide.dataset.index;

  reset();

  i++;

  if (i >= sliderItems.length) i = 0;

  sliderItems[i].classList.add("On");
  sliderPagers[i].classList.add("Active");

  background.style.backgroundImage = `url("./img/sec2_bg_${i}.png")`;
};

rightBtn.addEventListener("click", next);

const prev = (e) => {
  e.preventDefault();

  let crtSlide = document.querySelector(".sec2_slider li.On");
  let i = crtSlide.dataset.index;

  reset();

  i--;

  if (i < 0) i = sliderItems.length - 1;

  sliderItems[i].classList.add("On");
  sliderPagers[i].classList.add("Active");

  background.style.backgroundImage = `url("./img/sec2_bg_${i}.png")`;
};

leftBtn.addEventListener("click", prev);

const pagerFnc = (e) => {
  let target = e.target.dataset.index;
  reset();
  for (let i = 0; i < sliderPagers.length; i++) {
    if (Number(target) === i) {
      sliderItems[i].classList.add("On");
      sliderPagers[i].classList.add("Active");
      background.style.backgroundImage = `url("./img/sec2_bg_${i}.png")`;
    }
  }
};

sliderPagers.forEach((li) => {
  li.addEventListener("click", pagerFnc);
});
