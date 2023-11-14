const badge = document.querySelector("#badge");
const header = document.querySelector("header");
const headerBg = document.querySelector("header .header-bg");

const menuBg = document.querySelector(".header-bg");
const mainMenu = document.querySelector(".main-menu");

var main_image = document.getElementById("main_image");


// 메인 메뉴 mouseenter
document.querySelector(".main-menu").addEventListener(
  "mouseenter",
  () => {
    console.log(header.style.backgroundColor);
    document.querySelector(".header-bg").style.height = "200px";
    document.querySelector("header").style.background = "white";
    document.querySelector("header").style.borderBottom = "none";
  },
  () => {}
);

// 메인 메뉴 mouseleave
document.querySelector(".main-menu").addEventListener("mouseleave", () => {
  document.querySelector(".header-bg").style.height = "0px";
  document.querySelector("header").style.background =
    window.scrollY == 0 ? "black" : "white";
});


// badge
document.addEventListener("scroll", () => {
  if (window.scrollY < 1080) {
    badge.style.opacity = "0";
  } else {
    badge.style.opacity = "1";
  }
});

/* document.addEventListener("DOMContentLoaded", function () {
  const badgeMenu = document.querySelectorAll('#badge a');

  function setActive() {
    badgeMenu.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  }

  badgeMenu.forEach((item) => {
    item.addEventListener("click", setActive);
  });
}); */
document.addEventListener("DOMContentLoaded", function () {
  const badgeMenu = document.querySelectorAll('#badge a');

  function setActive() {
    badgeMenu.forEach((item) => {
      item.classList.remove("active");
      const img = item.querySelector('img');
      if (img) {
        img.src = img.src.replace("_w.svg", ".svg");
      }
    });

    this.classList.add("active");

    const activeImg = this.querySelector('img');
    if (activeImg) {
      activeImg.src = activeImg.src.replace(".svg", "_w.svg");
    }
  }

  badgeMenu.forEach((item) => {
    item.addEventListener("click", setActive);
  });
});




// 20230913 jpchoi
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.background = "white";
    document.querySelector("header").style.borderBottom = "none";
    document.querySelector('.box1').style.display ="flex";
    document.querySelector('.box2').style.display ="none";
  } else {
    console.log();

    if (document.querySelector(".header-bg").style.height != "200px") {
      document.querySelector("header").style.borderBottom = "1px solid #777";
      header.style.background = "black";
      document.querySelector('.box1').style.display ="none";
      document.querySelector('.box2').style.display ="flex";
    }
  }
});

// 감시자 - 인스턴스
let observer = new MutationObserver(mutations => {
  console.log("헤더가 변경됨!!");

  // 노드가 변경 됐을 때의 작업
  const menu_items = document.getElementsByClassName("menu_item");
  const divider = document.getElementById("divider");

  // 헤더의 배경 색상이 검정인 경우
  if (header.style.backgroundColor === "black") {
    main_image.src = "./images/KRWTOKEN_logo_w.svg";

    divider.style.background = "white";

    for (const item of menu_items) {
      item.style.color = "white";
    }
    document.querySelector("header").style.borderBottom = "1px solid #777";
  }
  // 헤더의 배경 색상이 하얀색인 경우
  else {
    main_image.src = "./images/KRWTOKEN_logo.svg";

    divider.style.background = "black";

    for (const item of menu_items) {
      item.style.color = "black";
    }
  }
});

// 감시자 - 설정
let option = {
  attributes: true
  // childList: true,
  // characterData: true
};

// 대상 노드에 감시자 전달
observer.observe(header, option);