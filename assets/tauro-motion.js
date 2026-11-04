(()=>{'use strict';
const strokes=[...document.querySelectorAll('section:not(.hero) .tauro-strokes')];
const seed=Date.now()%7919;
const rand=(i,n)=>{const x=Math.sin((i+1)*92.17+n*16.13+seed)*43758.5453;return x-Math.floor(x)};
strokes.forEach((svg,i)=>{
 const left=i%2===0;
 svg.style.transform='translate('+(rand(i,1)*15-7.5)+'%,'+(rand(i,2)*12-6)+'%) rotate('+(rand(i,3)*24-12)+'deg) scale('+(0.9+rand(i,4)*.2)+')';
 svg.style.transformOrigin=left?'15% 50%':'85% 50%';
 if(!left)svg.style.scale='-1 1';
});
const show=svg=>svg.classList.add('cvt-stroke-visible');
if(matchMedia('(prefers-reduced-motion: reduce)').matches){strokes.forEach(show);return}
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const line=e.target.querySelector('.tauro-strokes');if(line)show(line);observer.unobserve(e.target)}}),{rootMargin:'0px 0px -15% 0px',threshold:.08});
 strokes.forEach(svg=>observer.observe(svg.closest('section')));
}else strokes.forEach(show);
})();