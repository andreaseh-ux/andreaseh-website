document.querySelectorAll("video").forEach(v=>{v.muted=true;v.playsInline=true;});
if(!document.querySelector('script[src="/_vercel/insights/script.js"]')){
  const s=document.createElement('script');
  s.src='/_vercel/insights/script.js';
  s.defer=true;
  document.head.appendChild(s);
}