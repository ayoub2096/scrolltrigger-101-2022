/* function init(){
    
}

window.addEventListener('load', function(){
    init();
});
 */
gsap.registerPlugin(ScrollTrigger);
$( document ).ready(function() {
    //console.log( "ready!" );
   
/* gsap.to('#intro img', {
    x:-900,
    scrollTrigger: {
        trigger: '#intro',
        start: 'top top',
        end:'bottom center',
        scrub:true,
        markers:true,
    }
    }
) */

gsap.set('#project02', {
    scrollTrigger:{
        trigger: '#project02 img',
        start: 'top bottom-=40%',
        end:'bottom center-=10%',
        scrub:true,
        toggleClass:{targets: "#project02", className: "active"},
        markers:true,
    }
})



});