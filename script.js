'use strict'

/* メニュータブ */
const toggleNav = () => {
  const line = document.getElementById('line');
  const nav = document.getElementById('sp-nav');

  line.addEventListener('click', function () {
    line.classList.toggle('active');
    nav.classList.toggle('open');
  });
}
toggleNav();


/* メニューのカレント表示 */
const selectedNav = () => {
  const about = document.getElementById('about');
  const news = document.getElementById('news');
  const qa = document.getElementById('qa');

  about.addEventListener('click', function () {
    about.classList.toggle('.selected');
    nav.classList.toggle('open');
  });
}
selectedNav();

if (element.classList.contains('selected') === true) {}


/* Ｑ＆Ａアコーディオン */
const qaToggle01 = () => {
  const arrow = document.getElementById('arrow01');
  const qa = document.getElementById('qa-close01');

  arrow.addEventListener('click', function () {
    qa.classList.toggle('qa-open');
  });
}
qaToggle01();

const qaToggle02 = () => {
  const arrow = document.getElementById('arrow02');
  const qa = document.getElementById('qa-close02');

  arrow.addEventListener('click', function () {
    qa.classList.toggle('qa-open');
  });
}
qaToggle02();

const qaToggle03 = () => {
  const arrow = document.getElementById('arrow03');
  const qa = document.getElementById('qa-close03');

  arrow.addEventListener('click', function () {
    qa.classList.toggle('qa-open');
  });
}
qaToggle03();

const qaToggle04 = () => {
  const arrow = document.getElementById('arrow04');
  const qa = document.getElementById('qa-close04');

  arrow.addEventListener('click', function () {
    qa.classList.toggle('qa-open');
  });
}
qaToggle04();

const qaToggle05 = () => {
  const arrow = document.getElementById('arrow05');
  const qa = document.getElementById('qa-close05');

  arrow.addEventListener('click', function () {
    qa.classList.toggle('qa-open');
  });
}
qaToggle05();
/* Ｑ＆Ａアコーディオン ここまで */