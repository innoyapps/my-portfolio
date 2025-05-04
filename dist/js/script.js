const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

window.addEventListener("scroll", () => {
  hamburger.classList.remove("is-active");
  menu.classList.remove("is-active");
});

const loader = document.querySelector(".loader");

function loaderActive() {
  loader.classList.add("is-active");
}

function loaderActiveTime() {
  setInterval(loaderActive, 2000);
}

window.onload = loaderActiveTime();

// copy
function emailCopy() {
  const email = document.querySelector(".contact-email .email");
  const copyBtn = document.querySelector(".copy-btn");
  navigator.clipboard.writeText(email.textContent).then(() => {
    copyBtn.innerHTML = `<i class="far fa-copy"></i> Copied!`;
    setTimeout(() => {
      copyBtn.innerHTML = `<i class="far fa-copy"></i>`;
    }, 1000);
  });
}

function seeMore() {
  const seeMoreSection = document.getElementById("seemore");
  const btnSeeMore = document.getElementById("btn-see-more");

  if (seeMoreSection.style.display === "none" || !seeMoreSection.style.display) {
    seeMoreSection.style.display = "flex";
    seeMoreSection.style.animation = "fadeIn 0.5s ease forwards";
    btnSeeMore.textContent = "See Less..";
  } else {
    seeMoreSection.style.display = "none";
    btnSeeMore.textContent = "See More..";
  }
  AOS.refresh();
}
