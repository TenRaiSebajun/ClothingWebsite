// const intro = document.querySelector('.intro');

// const video = intro.querySelector('video');
// const text = intro.querySelector('h1');
// //END SECTION
// const section = document.querySelector('section');
// const end = section.querySelector('h1');

// //SCROLLMAGIC
// const controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//     duration: 5000,
//     triggerElement: intro,
//     triggerHook: 0
// }).addIndicators().setPin(intro).addTo(controller);

// //VIDEO ANIMATION
// let accelamount = 1.9;
// let scrolpos = 0;
// let delay = 0;

// scene.on('update', e => {
//     scrollpos = e.scrollPos / 1000;
// });

// setInterval(() => {
//     delay += (scrollpos - delay) * accelamount;

//     video.currentTime = delay;
// }, 33.3);


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 6.5 });
tl.to(".intro", { y: "-100%", duration: 1 , delay: 7}); 
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".main-page", { opacity: 0 }, { opacity: 1, duration: 1 });