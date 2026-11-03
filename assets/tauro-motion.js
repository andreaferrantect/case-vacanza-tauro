(()=>{'use strict';if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const strokes=[...document.querySelectorAll('.tauro-strokes')];
const seed=Date.now()%7919;const rand=(i,n)=>{let x=Math.sin((i+1)*92.17+n*16.13+seed)*43758.5453;return x-Math.floor(x)};
strokes.forEach((svg,i)=>{svg.style.transform='translate('+(rand(i,1)*18-9)+'%,'+(rand(i,2)*16-8)+'%) rotate('+(rand(i,3)*30-15)+'deg) scale('+(0.85+rand(i,4)*.38)+')';svg.style.transformOrigin=i%2?'85% 50%':'15% 50%';if(i%2)svg.style.scale='-1 1';[...svg.querySelectorAll('path')].forEach((p,k)=>{p.style.setProperty('--duration',(14+rand(i,k+5)*22).toFixed(1)+'s');p.style.setProperty('--delay',(-rand(i,k+8)*12).toFixed(1)+'s');});});
})();