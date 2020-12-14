'use strict' ;

window.addEventListener('DOMContentLoaded',()=> {
    
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        console.log('start');   
        let left = parseInt(box.style.left);
        let top = parseInt(box.style.top);
            if(!left) {
                left = 8;
            }
            if(!top) {
                top = 8;
            }
        const startX = e.touches[0].clientX - left;
        const startY = e.touches[0].clientY - top;
        box.addEventListener('touchmove', (event)=>{
            event.preventDefault();
            console.log('move');    
            
            box.style.left = (event.touches[0].clientX - startX)  + 'px';
            box.style.top = (event.touches[0].clientY  - startY) + 'px';
            console.log(event)  ;        
        });
                
    });

    
    

    
    box.addEventListener('touchend', (e)=>{
        e.preventDefault();
        console.log('end');            
    });
    console.dir(box);
});
