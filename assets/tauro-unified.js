(()=>{'use strict';
const header=document.querySelector('header.site-head');
const nav=header?.querySelector('#siteNav'),toggle=header?.querySelector('#menuToggle'),parent=header?.querySelector('#navParent');
if(header&&!document.querySelector('#progress')){
 toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
 parent?.addEventListener('click',e=>{if(window.innerWidth<=950){e.preventDefault();const open=parent.closest('.nav-group').classList.toggle('open');parent.setAttribute('aria-expanded',String(open))}});
 document.querySelectorAll('header.site-head .site-nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
 const sync=()=>header.classList.toggle('is-scrolled',window.scrollY>80);
 window.addEventListener('scroll',sync,{passive:true});sync();
}
if(header){
 let last=Math.max(0,window.scrollY),travel=0;
 const update=()=>{
  const y=Math.max(0,window.scrollY),delta=y-last;
  if(y<65||nav?.classList.contains('open')){
   header.classList.remove('cvt-header-hidden');document.documentElement.classList.remove('cvt-header-hidden');travel=0;
  }else if(Math.abs(delta)>.5){
   travel=Math.sign(travel)===Math.sign(delta)?travel+delta:delta;
   if(travel>45){header.classList.add('cvt-header-hidden');document.documentElement.classList.add('cvt-header-hidden');travel=0}
   if(travel< -45){header.classList.remove('cvt-header-hidden');document.documentElement.classList.remove('cvt-header-hidden');travel=0}
  }
  last=y;
 };
 window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
 toggle?.addEventListener('click',()=>{header.classList.remove('cvt-header-hidden');document.documentElement.classList.remove('cvt-header-hidden');travel=0});update();
}
})();