function datetimepost(){
    let postTime = document.querySelectorAll(".post-time");
    let initData0 = new Date("December 16, 2020 8:30:00");
    let initData1 = new Date("December 16, 2020 10:30:00");
    let now = Date.now();
    let deference0 = now - initData0;
    let deference1 = now - initData1;
    let mSPD = 60 * 60 * 1000; //вычисляет сколько м/с в часах
    let hour0 = Math.floor(deference0/mSPD); //сколько прошло часов с заданной даты
    let hour1 = Math.floor(deference1/mSPD);
    
    if (hour0 > 24) {
        let dayRemainder0 = hour0 % 24;
        let day0 = Math.floor(hour0 / 24);
        postTime[1].innerHTML = day0 + " day " + dayRemainder0+ " chr";
    } else {
        postTime[1].innerHTML = hour0 + " chr";
    }
    //hour0
    if (hour1 > 24) {
        let dayRemainder1 = hour1 % 24;
        let day1 = Math.floor(hour1 / 24);
        postTime[0].innerHTML = day1 + " day " + dayRemainder1+ " chr";
    } else {
        postTime[0].innerHTML = hour1 + " chr";
    }
    //hour1
    
}
datetimepost();

const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");
menuBtn.addEventListener("click", function(){
    menu.classList.toggle("active");
})