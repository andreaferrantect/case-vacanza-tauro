(()=>{'use strict';
const strokes=[...document.querySelectorAll('.tauro-strokes')];
const seed=Date.now()%7919;
const rand=(i,n)=>{const x=Math.sin((i+1)*92.17+n*16.13+seed)*43758.5453;return x-Math.floor(x)};
strokes.forEach((svg,i)=>{
 const left=i%2===0;
 svg.style.transform='translate('+(rand(i,1)*18-9)+'%,'+(rand(i,2)*16-8)+'%) rotate('+(rand(i,3)*30-15)+'deg) scale('+(0.85+rand(i,4)*.38)+')';
 svg.style.transformOrigin=left?'15% 50%':'85% 50%';
 if(!left)svg.style.scale='-1 1';
 // Single line per section. Its existing #C98954, width 1.6, dash pattern and 19s timing remain unchanged.
});
})();