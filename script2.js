const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const tumbnail = document.querySelector('.tumbnail');
const next =document.querySelector('#next');
const prev =document.querySelector('#prev');


// outo play
let runAutoPlay = setTimeout(( ) => {
    next.click( );
}, 10000)


next.addEventListener('click', ( ) => {
    initslider('next');
});

prev.addEventListener('click', ( ) => {
    initslider('prev');
});

const initslider = (type) => {
    const sliderItems = list.querySelectorAll('.item');
    const tumbnailItems = tumbnail.querySelectorAll('.item');


    if (type === 'next') {
        list.appendChild( sliderItems[0]);
        tumbnail.appendChild( tumbnailItems[0]);
        slider.classList.add('next');
    } else {
        const lastItemPosition = sliderItems.length - 1;
        list.prepend(sliderItems[lastItemPosition]);
        tumbnail.prepend(tumbnailItems[lastItemPosition]);
        slider.classList.add('prev');
    }


    setTimeout(( ) => {
     slider.classList.remove('next');
     slider.classList.remove('prev');
    }, 2000);

 clearTimeout(runAutoPlay);
    runAutoPlay = setTimeout(( ) => {
    next.click( );
}, 10000);

};
