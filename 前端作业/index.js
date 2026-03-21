//轮播图
const sliderData = [
  { url: './picture/BookPro.jpg' },
  { url: './picture/Watch 5s.webp' },
  { url: './picture/shoutixiang.webp' },
  { url: './picture/bingxiangpro.webp' },
  { url: './picture/chumanyipro.webp' },
  { url: './picture/shizi606L.webp' },
]
const slider = document.querySelector('.picture img');

const next = document.querySelector('.button-right');
let i = 0
//点击右侧按钮
next.addEventListener('click', function () {
  i++;
  if (i >= sliderData.length) {
    i = 0;
  }
  slider.src = sliderData[i].url;
  document.querySelector('.circle .active').classList.remove('active');
  document.querySelector(`.circle li:nth-child(${i + 1})`).classList.add('active');
})
//点击左侧按钮
const prev = document.querySelector('.button-left');
prev.addEventListener('click', function () {
  i--;
  if (i < 0) {
    i = sliderData.length - 1;
  }
  slider.src = sliderData[i].url;
  document.querySelector('.circle .active').classList.remove('active');
  document.querySelector(`.circle li:nth-child(${i + 1})`).classList.add('active');
})
//加入定时器
let autoPlay = setInterval(function () {
  next.click();
}, 3000)

//鼠标移入停止自动播放
slider.addEventListener('mouseover', function () {
  clearInterval(autoPlay);
})

//鼠标移出继续自动播放
slider.addEventListener('mouseout', function () {
  autoPlay = setInterval(function () {
    next.click();
  }, 3000);
})

//点击圆点切换图片
const circles = document.querySelectorAll('.circle li')
circles.forEach(function (circle, index) {
  circle.addEventListener('click', function () {
    i = index
    slider.src = sliderData[i].url
    const currentActive = document.querySelector('.circle .active')
    if (currentActive) {
      currentActive.classList.remove('active')
    }
    circle.classList.add('active')
  })
})


//搜索栏文字随时间变化
const searchlist = ['手机换新', '耳机', '冰箱', '充电宝', '空调', '笔记本', '红米', '洗衣机'];
const searchInput = document.querySelector('.search input');
let num = 0;
if (searchInput) {
  searchInput.placeholder = searchlist[num];
  setInterval(function () {
    num++;
    if (num >= searchlist.length) {
      num = 0;
    }
    searchInput.placeholder = searchlist[num];
  }, 2500);
}


