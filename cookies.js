
(function(){
var K='gbh_consent',b=document.querySelector('[data-cb="banner"]');if(!b)return;
var p=b.querySelector('[data-cb="prefs"]'),sv=b.querySelector('[data-cb-action="save"]'),st=b.querySelector('[data-cb-action="settings"]');
function get(){try{return JSON.parse(localStorage.getItem(K)||'null')}catch(e){return null}}
function tg(n){return b.querySelector('[data-cb-toggle="'+n+'"]')}
function on(el){return el.getAttribute('aria-checked')==='true'}
function setT(el,v){el.setAttribute('aria-checked',v?'true':'false');el.classList.toggle('is-on',v)}
function prefs(show){p.style.display=show?'block':'none';sv.style.display=show?'':'none';st.style.display=show?'none':''}
function open(withPrefs){var c=get();setT(tg('analytics'),!!(c&&c.a));setT(tg('marketing'),!!(c&&c.m));prefs(!!withPrefs);b.style.display='block'}
function save(a,m){
 try{localStorage.setItem(K,JSON.stringify({v:1,a:a,m:m,t:Date.now()}))}catch(e){}
 window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
 gtag('consent','update',{analytics_storage:a?'granted':'denied',ad_storage:m?'granted':'denied',ad_user_data:m?'granted':'denied',ad_personalization:m?'granted':'denied'});
 dataLayer.push({event:'consent_update',consent_analytics:a,consent_marketing:m});
 b.style.display='none'}
b.addEventListener('click',function(e){
 var t=e.target.closest('[data-cb-action],[data-cb-toggle]');if(!t)return;e.preventDefault();
 if(t.hasAttribute('data-cb-toggle')){setT(t,!on(t));return}
 var x=t.getAttribute('data-cb-action');
 if(x==='accept')save(true,true);
 else if(x==='reject')save(false,false);
 else if(x==='settings')prefs(true);
 else if(x==='save')save(on(tg('analytics')),on(tg('marketing')));
});
document.addEventListener('click',function(e){var o=e.target.closest('[data-cb-open]');if(o){e.preventDefault();open(true)}});
window.openCookieSettings=function(){open(true)};
prefs(false);
var c=get();if(!c||c.v!==1||Date.now()-c.t>15552e6)open(false);
})();
