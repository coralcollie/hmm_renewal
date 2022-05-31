

/* -----------cursor style-------------- */

let cursor = document.getElementById("cursor");
// let aTag = document.getElementsByTagName("a")

document.onmousemove = function(e){
    cursor.style.left = (e.pageX) + "px";
    cursor.style.top = (e.pageY)+ "px";
    cursor.style.display = "block";

    // aTag.addEventListener("mouseenter", function(){
    //     cursor.style.background = "transparent";
    // })
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
window.addEventListener('scroll',()=>{
    let winSCT = window.scrollY;
    let header = document.querySelector('header');

    if(winSCT>0){
        header.classList.add('active');
    
    }else{
        header.classList.remove('active');
    }
    
    /* -------------service animation-------------- */ 
    let service = document.querySelector('.service'),
        serviceUl = service.querySelector('ul')
        serviceOST = service.offsetTop-737;

    console.log(serviceOST);
    console.log(winSCT);
    if(winSCT>=serviceOST){
        service.classList.add('animate__fadeInUp');
        serviceUl.classList.add('animate__fadeInUp');
    }else{
        service.classList.remove('animate__fadeInUp');
        serviceUl.classList.remove('animate__fadeInUp');
    }
    
    /* -------------Counter animation-------------- */ 
    let counters = document.querySelector('.content_wrap');
    let counterNums = counters.querySelectorAll('.content h3');
    let courtersOST = counters.offsetTop - 700;
    let excuted = false;


    if(winSCT>courtersOST){
        if(!excuted){
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
            excuted = true;
        }
    }



})




// /* -----------filter-------------- */

// var mixer = mixitup('.gallery_list',{
//     "animation": {
//         "duration": 354,
//         "nudge": true,
//         "reverseOut": false,
//         "effects": "scale(0.04) translateZ(24px)"
//     }
// });

