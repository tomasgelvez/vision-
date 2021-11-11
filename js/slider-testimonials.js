const slider = document.querySelector("#slider-testimonials");
let sliderSection = document.querySelectorAll(".testimonials-slider");
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnLeft = document.querySelector("#btn-left-testimonials");
const btnRight = document.querySelector("#btn-ridht-testimonials");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next () {
    let sliderSectionFirst = document.querySelectorAll(".testimonials-slider")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";

    },500);

}

btnRight.addEventListener('click', function (){
    Next();
});

 function Prev () {
    let sliderSection = document.querySelectorAll(".testimonials-slider");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function (){
        slider.style.transition = "none" ;
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);

};

setInterval(function(){
    Next();
},4000);


btnLeft.addEventListener('click', function (){
    Prev();
}); 


