(()=>{'use strict';
const header=document.querySelector('header.site-head'),nav=header?.querySelector('#siteNav'),toggle=header?.querySelector('#menuToggle'),parent=header?.querySelector('#navParent');
// Existing home script owns home menu; this script owns nav only on detail and info pages.
if(header&&!document.querySelector('#progress')){
 toggle?.addEventListener('click',()=>{let v=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(v))});
 parent?.addEventListener('click',e=>{if(window.innerWidth<=950){e.preventDefault();let open=parent.closest('.nav-group').classList.toggle('open');parent.setAttribute('aria-expanded',String(open))}});
 document.querySelectorAll('header.site-head .site-nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
 const sync=()=>header.classList.toggle('is-scrolled',window.scrollY>80);window.addEventListener('scroll',sync,{passive:true});sync();
}
})();