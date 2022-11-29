/* function init(){
    
}

window.addEventListener('load', function(){
    init();
});
 */
gsap.registerPlugin(ScrollTrigger);
$( document ).ready(function() {
    //console.log( "ready!" );
   
// gsap.to('#intro img', {
//     x:-900,
//     scrollTrigger: {
//         trigger: '#intro',
//         start: 'top top',
//         end:'bottom center',
//         scrub:true,
//         markers:true,
//     }
//     }
// )
// change on scrolltrigger

// gsap.set('#project02', {
//     scrollTrigger:{
//         trigger: '#project02 img',
//         start: 'top 40%',
//         end:'bottom 20%',
//         scrub:true,
//         toggleClass:{
//             targets: "#project02", 
//             className: "active"
//         },
//         markers:{
//             visible: true,
//             startColor: "blue", 
//             endColor: "pink", 
//             fontSize: "18px", 
//             fontWeight: "bold", 
//             indent: 10
//             }
//     }
// })
// addclass

// const tl = gsap.timeline({
//     defaults:{
//         ease : 'none',
//     },
//     scrollTrigger:{
//         trigger: '.bcg-parallax',
//         start: 'top 60%',
//         end:'bottom 50%',
//         scrub: true,
//         markers:{
//             visible: true,
//             startColor: "green", 
//             endColor: "red", 
//             fontSize: "18px", 
//             fontWeight: "bold", 
//             indent: 10
//             }
//     }
//  })
//     tl
//     .from('.content-wrapper', {
//         duration: .4,
//          autoAlpha:0,
//         },.4)
//     .from('.bcg', {
//         duration: 2,
//          y:'-30%',
//         },0)
// parallax


 gsap.to('#intro h1, #intro p', {
        autoAlpha:0,
        ease:'none',
        scrollTrigger: {
            trigger: '#intro .content',
            start:'top top+=5%',
            pin:true,
            scrub:true,
            markers:true,
        }
        }
    )




}); 
// ready