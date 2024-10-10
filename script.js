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
  },
});

// nav event
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  body.classList.toggle("nav_active");
});
