window.addEventListener('scroll', function() {
    var nav = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
}   
);

window.addEventListener('scroll',() =>  {
    
    let image = document.querySelector('.im');
    if(window.innerHeight >image.getBoundingClientRect().top && image.getBoundingClientRect().top > -100){
        image.classList.add('oim');
        console.log(window.innerHeight);
        console.log(image.getBoundingClientRect().top);
    
    }
    else{
        image.classList.remove('oim');

    
    }
}
);
// change text color when background is changed
// Language: javascript
// Path: JS\index.js
// var bg = document.querySelector('.bg');
// var text = document.querySelector('.text');
// var bgColor = bg.style.backgroundColor;
