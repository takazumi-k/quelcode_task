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


/* Ｑ＆Ａアコーディオン */

const qa = (str) => {
  const arrowId = 'arrow' + str;
  const qaId = 'qa-close' + str;
  const arrow = document.getElementById(arrowId);
  const qa = document.getElementById(qaId);
  qa.classList.toggle('qa-open');
  arrow.classList.toggle('qa-rotate');

  // console.log(a);
}


// arrow.addEventListener('click', function () {
//   qa.classList.toggle('qa-open');
//   arrow.classList.toggle('qa-rotate');
// });



// const qaToggle01 = () => {
//   const arrow = document.getElementById('arrow01');
//   const qa = document.getElementById('qa-close01');

//   arrow.addEventListener('click', function () {
//     qa.classList.toggle('qa-open');
//     arrow.classList.toggle('qa-rotate');
//   });
// }

// qaToggle01();

// const qaToggle02 = () => {
//   const arrow = document.getElementById('arrow02');
//   const qa = document.getElementById('qa-close02');

//   arrow.addEventListener('click', function () {
//     qa.classList.toggle('qa-open');
//     arrow.classList.toggle('qa-rotate');
//   });
// }
// qaToggle02();

// const qaToggle03 = () => {
//   const arrow = document.getElementById('arrow03');
//   const qa = document.getElementById('qa-close03');

//   arrow.addEventListener('click', function () {
//     qa.classList.toggle('qa-open');
//     arrow.classList.toggle('qa-rotate');
//   });
// }
// qaToggle03();

// const qaToggle04 = () => {
//   const arrow = document.getElementById('arrow04');
//   const qa = document.getElementById('qa-close04');

//   arrow.addEventListener('click', function () {
//     qa.classList.toggle('qa-open');
//     arrow.classList.toggle('qa-rotate');
//   });
// }
// qaToggle04();

// const qaToggle05 = () => {
//   const arrow = document.getElementById('arrow05');
//   const qa = document.getElementById('qa-close05');

//   arrow.addEventListener('click', function () {
//     qa.classList.toggle('qa-open');
//     arrow.classList.toggle('qa-rotate');
//   });
// }
// qaToggle05();
/* Ｑ＆Ａアコーディオン ここまで */