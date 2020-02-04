'use strict'

const text = document.getElementById("text");

text.style.color = 'green'

function clickEvent() {
    alert('クリックされました')
}

// a tag が押されたときのやつ
const myfunc1 = () => {
const menu = document.getElementById("id-menu");

/* ユズノハさんのコード
    // 現在の開閉状態を判断する
    if (menu.classList.contains("close")) {
        // 現在閉じているので開く
        menu.classList.remove("close");
    }else {
        // 現在開いているので閉じる
        menu.classList.add("close");
    }
*/

function hamburger() {
    　　document.getElementsByClassName('menu').classList.toggle('close');
    　　document.getElementsByClassName('global-nav').classList.toggle('open');
    }
    
    document.getElementsByClassName('menuWrapper').addEventListener('click', function () {
    　　hamburger();
    });


};

/*　
function hamburger() {
　　document.getElementsByClassName('menu').classList.toggle('close');
　　document.getElementsByClassName('global-nav').classList.toggle('open');
}
document.getElementsByClassName('menuWrapper').addEventListener('click', function () {
　　hamburger();
});

*/