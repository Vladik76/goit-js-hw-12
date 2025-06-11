import{a as p,S as f,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const u="50766539-a3a9faf2feed981fcf2beabe9",d="https://pixabay.com/api/";function g(o){return p.get(d,{params:{key:u,q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const m=new f(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(o){l.insertAdjacentHTML("beforeend",o.map(e=>`
      <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${e.webformatURL}" 
            alt="${e.tags}" 
          />
        </a>
        <div class='image-info'>
        <p>Likes<span>${e.likes}</span></p>
        <p>Views<span>${e.views}</span></p>
        <p>Comments<span>${e.comments}</span></p>
        <p>Downloads<span>${e.downloads}</span></p>
        </div>
      </li>
    `).join("")),m.refresh()}function h(){l.innerHTML=""}function L(){c.style.display="block"}function b(){c.style.display="none"}const w=document.querySelector(".form");w.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements["search-text"].value.trim();if(e.length==0){n.warning({title:"Warning",message:"All fields should be filled.",position:"topRight"});return}h(),L(),g(e).then(i=>{const a=i.hits;a.length==0?n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(a)}).catch(i=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
