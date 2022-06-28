

/* -----------cursor style-------------- */

let cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = (e.pageX) + "px";
    cursor.style.top = (e.pageY)+ "px";
    cursor.style.display = "block";

}



/* -----------slide style-------------- */
let mainslideWrapper = document.querySelector('.main_slide'),
    mainslideUl = document.querySelector('.slide_container'),
    slide = mainslideUl.querySelectorAll('li'),
    slideCount = slide.length,
    slideCurrentIdx = 0,
    mainPager = document.querySelector('.pager'),
    pagerBtn = mainPager.querySelectorAll('a');


mainslideUl.style.width = `${slideCount*100}%`;

function moveSlide(num){
    mainslideUl.style.left = `${num*-100}%`;
    slideCurrentIdx = num;
    updatepager();
}

function updatepager(){
    for(pb of pagerBtn){
        pb.classList.remove('active');
    }
    pagerBtn[slideCurrentIdx].classList.add('active');

    for(timebar of slide){
        timebar.classList.remove('active');
    }
    slide[slideCurrentIdx].classList.add('active');
}
// updatepager();


pagerBtn.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        moveSlide(index);
    })
})

/* -----------autoSlide-------------- */

function autoSlide(){
    timer = setInterval(()=>{
        let nextIdx = (slideCurrentIdx + 1)%slideCount;
        moveSlide(nextIdx);
    },4000);
}
moveSlide(0);

/* -----------SCROLL ANIMATION-------------- */
let execute = false;

window.addEventListener('scroll',()=>{

    /* -------------header animation-------------- */ 
    let winSCT = window.scrollY;
    let header = document.querySelector('header');

    if(winSCT>0){
        header.classList.add('active');
    
    }else{
        header.classList.remove('active');
    }
    
    /* -------------section animation-------------- */ 
    let service = document.querySelector('.service'),
        serviceUl = service.querySelector('ul'),
        serviceOST = service.offsetTop-537;

    if(winSCT>serviceOST){
        service.classList.add('animate__animated','animate__backInUp');
        serviceUl.classList.add('animate__animated','animate__backInUp');
    }

    let worksNews = document.querySelector('.works_news'),
        worksNewsF = worksNews.querySelector('li:nth-child(1)'),
        worksNewsS = worksNews.querySelector('li:nth-child(2)'),
        worksNewsT = worksNews.querySelector('li:nth-child(3)'),
        worksNewsOST = worksNews.offsetTop-549;
    if(winSCT>worksNewsOST){
        worksNewsF.classList.add('animate__animated','animate__fadeInRight');
    }
    if(winSCT>worksNewsOST+339){
        worksNewsS.classList.add('animate__animated','animate__fadeInLeft');
    }
    if(winSCT>worksNewsOST+741){
        worksNewsT.classList.add('animate__animated','animate__fadeInRight');
    }

    let result = document.querySelector('.result'),
        resultTit = document.querySelector('.result_tit'),
        resultWrap = document.querySelector('.result .content_wrap'),
        resultOST = result.offsetTop-506;
    if(winSCT>resultOST){
        resultTit.classList.add('animate__animated','animate__fadeInUp');
        resultWrap.classList.add('animate__animated','animate__flipInX');
    }

    let gallery = document.querySelector('.gallery'),
        galleryList = document.querySelector('.gallery_list'),
        galleryOST = gallery.offsetTop-507;
    if(winSCT>galleryOST){
        gallery.classList.add('animate__animated','animate__backInUp');
        galleryList.classList.add('animate__animated','animate__backInUp');
    }

    // console.log(winSCT,galleryOST);


    
    /* -------------Counter animation-------------- */ 
    let counters = document.querySelector('.content_wrap');
    let counterNums = counters.querySelectorAll('.content h3');
    let courtersOST = counters.offsetTop - 700;



    if(winSCT>=courtersOST){
        if(!execute){
            counterNums.forEach(item=>{
                let targetNum = item.getAttribute('data-target');
                let speed = 4;
                let add = 10;

                if(targetNum > 10000){
                    speed = 4;
                    add = 15;
                }

                let num = 0;
                
                    let numAnime = setInterval(()=>{
                        num += add;                       

                        if(num == targetNum || num > targetNum){
                            num = targetNum;
                            clearInterval(numAnime);
                        }
                        item.innerText =  num;
                        
                    }, speed);                 
            });
            execute = true;
        }
    }



})




/* -----------filter-------------- */

var mixer = mixitup('.gallery_list',{
    "animation": {
        "duration": 354,
        "nudge": true,
        "reverseOut": false,
        "effects": "scale(0.04) translateZ(24px)"
    }
});

/* -----------banner slide-------------- */
$('.banner_item').slick({

});
