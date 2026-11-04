(()=>{'use strict';
const strokes=[...document.querySelectorAll('section:not(.hero) .tauro-strokes')];
const seed=Date.now()%7919;
const rand=(i,n)=>{const x=Math.sin((i+1)*92.17+n*16.13+seed)*43758.5453;return x-Math.floor(x)};
strokes.forEach((svg,i)=>{
 const left=i%2===0;
 svg.style.transform='translate('+(rand(i,1)*18-9)+'%,'+(rand(i,2)*16-8)+'%) rotate('+(rand(i,3)*30-15)+'deg) scale('+(0.85+rand(i,4)*.38)+')';
 svg.style.transformOrigin=left?'15% 50%':'85% 50%';
 if(!left)svg.style.scale='-1 1';
});
if(matchMedia('(prefers-reduced-motion: reduce)').matches){
 strokes.forEach(svg=>svg.classList.add('cvt-stroke-visible'));return;
}
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('cvt-stroke-visible');observer.unobserve(e.target)}}),{rootMargin:'0px 0px -10% 0px',threshold:.02});
 strokes.forEach(svg=>observer.observe(svg));
}else strokes.forEach(svg=>svg.classList.add('cvt-stroke-visible'));
})();