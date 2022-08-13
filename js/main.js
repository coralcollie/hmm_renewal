/* -----------cursor style-------------- */

let cursor = document.getElementById('cursor');

document.onmousemove = function (e) {
  cursor.style.left = e.pageX + 15 + 'px';
  cursor.style.top = e.pageY + 15 + 'px';
  cursor.style.display = 'block';
};

/* -----------hamburger-------------- */
let hamburger = document.querySelector('.hamburger-button');

hamburger.addEventListener('click', function (e) {
  e.preventDefault;
  this.classList.toggle('click');
});

/* -----------search-------------- */
// let searchForm = document.querySelector('.top_links form'),
//   inputSearch = document.querySelector('.input-search');

// searchForm.addEventListener('click', function (e) {
//   e.preventDefault;
//   this.classList.toggle('active');
// });

/* -----------tab highlight animation-------------- */
let tabTarget = document.querySelector('.tab .target'),
  links = document.querySelectorAll('.tab li a');

links.forEach((item) => {
  item.addEventListener('mouseenter', mouseEnterFunc);
  item.addEventListener('click', (e) => {
    links.forEach(function (item) {
      item.addEventListener.classList.remove('active');
    });
    e.target.addEventListener.classList.add('active');
  });
});

function mouseEnterFunc() {
  let width = this.getBoundingClientRect().width;
  let height = this.getBoundingClientRect().height + 10;
  let left = this.getBoundingClientRect().left;
  let top = this.getBoundingClientRect().top + height;

  tabTarget.style.width = `${width}px`;
  tabTarget.style.left = `${left}px`;
  tabTarget.style.top = `${top}px`;
}
/* -----------service network tab-------------- */

$(document).ready(function () {
  //슬릭 초기 실행
  $('.network_content.active').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
  });
});

if (document.querySelectorAll('.network_tab').length) {
  let tabMenu = document.querySelectorAll('.tab li'),
    network = document.querySelectorAll('.network_content'),
    contentTab = document.querySelectorAll('.network_content div'),
    networkDesc = document.querySelectorAll('.network_desc');

  tabMenu.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      tabMenu.forEach(function (item) {
        item.querySelector('a').classList.remove('active');
      });
      this.querySelector('a').classList.add('active');

      let tabHref = this.querySelector('a').getAttribute('href');
      //console.log(tabHref);
      network.forEach(function (item) {
        item.classList.remove('active');
      });
      document.querySelector(tabHref).classList.add('active');

      $('.network_content.active').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
      });
    });
  });

  contentTab.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let contentTabHref = this.querySelector('a').getAttribute('href'); //클릭한 그 요소안에 a의 href 값 저장
      networkDesc.forEach(function (item) {
        item.classList.remove('active');
      });
      document.querySelector(contentTabHref).classList.add('active');
    });
  });
}

/* -----------container 3d box-------------- */
if (document.querySelectorAll('.equipment_tab').length) {
  let box = document.querySelector('.box'),
    radioGroup = document.querySelector('.radio-group'),
    currentClass = '',
    tabMenu = document.querySelectorAll('.equipment_tab li a'),
    tabContent = document.querySelector('#tab-content');

  tabMenu.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      tabMenu.forEach(function (item) {
        item.classList.remove('active');
      });
      this.classList.add('active');

      let tabContent = document.querySelectorAll('.equipment_content');
      let tabHref = this.getAttribute('href');
      console.log(tabHref);

      tabContent.forEach(function (item) {
        item.classList.remove('active');
      });
      document.querySelector(tabHref).classList.add('active');
    });
  });

  function changeSide() {
    let checkedRadio = radioGroup.querySelector(':checked');
    let showClass = 'show-' + checkedRadio.value;
    if (currentClass) {
      box.classList.remove(currentClass);
    }
    box.classList.add(showClass);
    currentClass = showClass;
  }
  changeSide();
  radioGroup.addEventListener('change', changeSide);
}

/* -----------slide style-------------- */
let mainslideWrapper = document.querySelector('.main_slide'),
  mainslideUl = document.querySelector('.slide_container'),
  slide = mainslideUl.querySelectorAll('li'),
  slideCount = slide.length,
  slideCurrentIdx = 0,
  mainPager = document.querySelector('.pager'),
  timer = '',
  pagerBtn = mainPager.querySelectorAll('a'),
  progress = mainPager.querySelector('.progress');

mainslideUl.style.width = `${slideCount * 100}%`;

function moveSlide(num) {
  mainslideUl.style.left = `${num * -100}%`;
  slideCurrentIdx = num;
  updatepager();
  progress.classList.add('active');
  setTimeout(() => {
    progress.classList.remove('active');
  }, 3900);
}

function updatepager() {
  for (pb of pagerBtn) {
    pb.classList.remove('active');
  }
  pagerBtn[slideCurrentIdx].classList.add('active');

  for (timebar of slide) {
    timebar.classList.remove('active');
  }
  slide[slideCurrentIdx].classList.add('active');
}

pagerBtn.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    moveSlide(index);
  });
});

/* -----------autoSlide-------------- */

function autoSlide() {
  timer = setInterval(() => {
    let nextIdx = (slideCurrentIdx + 1) % slideCount;
    moveSlide(nextIdx);
  }, 4000);
}
moveSlide(0);
autoSlide();

/*
mainslideWrapper.addEventListener('mouseenter',()=>{
    clearInterval(timer);
});
mainslideWrapper.addEventListener('mouseleave',()=>{
    autoSlide();
});
*/
//slide style

/* -----------SCROLL ANIMATION-------------- */
let execute = false;

window.addEventListener('scroll', () => {
  /* -------------header animation-------------- */
  let winSCT = window.scrollY;
  let header = document.querySelector('header');

  if (winSCT > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  /* -------------section animation-------------- */
  let service = document.querySelector('.service'),
    serviceUl = service.querySelector('ul'),
    serviceOST = service.offsetTop - 537;

  if (winSCT > serviceOST) {
    service.classList.add('animate__animated', 'animate__backInUp');
    serviceUl.classList.add('animate__animated', 'animate__backInUp');
  }

  let worksNews = document.querySelector('.works_news'),
    worksNewsF = worksNews.querySelector('li:nth-child(1)'),
    worksNewsS = worksNews.querySelector('li:nth-child(2)'),
    worksNewsT = worksNews.querySelector('li:nth-child(3)'),
    worksNewsOST = worksNews.offsetTop - 549;
  if (winSCT > worksNewsOST) {
    worksNewsF.classList.add('animate__animated', 'animate__fadeInRight');
  }
  if (winSCT > worksNewsOST + 339) {
    worksNewsS.classList.add('animate__animated', 'animate__fadeInLeft');
  }
  if (winSCT > worksNewsOST + 741) {
    worksNewsT.classList.add('animate__animated', 'animate__fadeInRight');
  }

  let result = document.querySelector('.result'),
    resultTit = document.querySelector('.result_tit'),
    resultWrap = document.querySelector('.result .content_wrap'),
    resultOST = result.offsetTop - 506;
  if (winSCT > resultOST) {
    resultTit.classList.add('animate__animated', 'animate__fadeInUp');
    resultWrap.classList.add('animate__animated', 'animate__flipInX');
  }

  let gallery = document.querySelector('.gallery'),
    galleryList = document.querySelector('.gallery_list'),
    galleryOST = gallery.offsetTop - 507;
  if (winSCT > galleryOST) {
    gallery.classList.add('animate__animated', 'animate__backInUp');
    galleryList.classList.add('animate__animated', 'animate__backInUp');
  }

  // console.log(winSCT,galleryOST);

  /* -------------Counter animation-------------- */
  let counters = document.querySelector('.content_wrap');
  let counterNums = counters.querySelectorAll('.content h3');
  let courtersOST = counters.offsetTop - 700;

  if (winSCT >= courtersOST) {
    if (!execute) {
      counterNums.forEach((item) => {
        let targetNum = item.getAttribute('data-target');
        let speed = 4;
        let add = 10;

        if (targetNum > 10000) {
          speed = 4;
          add = 15;
        }

        let num = 0;

        let numAnime = setInterval(() => {
          num += add;

          if (num == targetNum || num > targetNum) {
            num = targetNum;
            clearInterval(numAnime);
          }
          item.innerText = num;
        }, speed);
      });
      execute = true;
    }
  }
});

/* -----------filter-------------- */

var mixer = mixitup('.gallery_list', {
  animation: {
    duration: 354,
    nudge: true,
    reverseOut: false,
    effects: 'scale(0.04) translateZ(24px)',
  },
});

/* -----------banner slide-------------- */
$('.banner_item').slick({
  autoplay: true,
  autoplaySpeed: 4000,
});
