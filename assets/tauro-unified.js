(()=>{'use strict';
const header=document.querySelector('header.site-head'),nav=header?.querySelector('#siteNav'),toggle=header?.querySelector('#menuToggle'),parent=header?.querySelector('#navParent');
// Existing home script owns home menu; this script owns nav only on detail and info pages.
if(header&&!document.querySelector('#progress')){
 toggle?.addEventListener('click',()=>{let v=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(v))});
 parent?.addEventListener('click',e=>{if(window.innerWidth<=950){e.preventDefault();let open=parent.closest('.nav-group').classList.toggle('open');parent.setAttribute('aria-expanded',String(open))}});
 document.querySelectorAll('header.site-head .site-nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
 const sync=()=>header.classList.toggle('is-scrolled',window.scrollY>80);window.addEventListener('scroll',sync,{passive:true});sync();
}
// Hide the header only after a deliberate downward scroll on mobile/tablet.
if(header){
 let last=Math.max(0,window.scrollY),travel=0;
 const update=()=>{
  const y=Math.max(0,window.scrollY),delta=y-last;
  if(!window.matchMedia('(max-width:950px)').matches || y<65 || nav?.classList.contains('open')){
   header.classList.remove('cvt-header-hidden');travel=0;
  }else if(Math.abs(delta)>0.5){
   travel=(Math.sign(travel)===Math.sign(delta))?travel+delta:delta;
   if(travel>45){header.classList.add('cvt-header-hidden');travel=0}
   if(travel< -45){header.classList.remove('cvt-header-hidden');travel=0}
  }
  last=y;
 };
 window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
 toggle?.addEventListener('click',()=>{header.classList.remove('cvt-header-hidden');travel=0});update();
}
})();