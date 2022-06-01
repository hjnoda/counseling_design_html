window.onload = function() {
//adswiper(中江オンライン割引)
var adSwiper = new Swiper('.adSwiper', {
    centermode: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});
//768以上 swiper destroy
var itemSwiper, swiperbool;
const breakPoint = 768;

window.addEventListener('load', () => {
if (breakPoint < window.innerWidth) {
swiperbool = false;
} else {
createSwiper();
swiperbool = true;
}
}, false);

window.addEventListener('resize', () => {
if (breakPoint < window.innerWidth && swiperbool) {
itemSwiper.destroy(false, true);
swiperbool = false;
} else if (breakPoint <= window.innerWidth && !(swiperbool)) {
createSwiper();
swiperbool = true;
}
}, false);

function createSwiper() {
itemsSwiper = new Swiper('.itemSwiper', {
    autoHeight: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});
};

}