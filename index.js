import{a as y,S as g,i}from"./assets/vendor-frHSA4Lh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const m="50766539-a3a9faf2feed981fcf2beabe9",h="https://pixabay.com/api/";async function w(r,e){return(await y.get(h,{params:{key:m,q:r.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const L=new g(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=document.querySelector(".load-more");async function b(r){d.insertAdjacentHTML("beforeend",r.map(e=>`
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
    `).join("")),await L.refresh()}function S(){d.innerHTML=""}function v(){u.style.display="block"}function q(){u.style.display="none"}function R(){p.style.display="block"}function $(){p.style.display="none"}const M=document.querySelector(".form");let c=1,l;M.addEventListener("submit",r=>{if(r.preventDefault(),c=1,l=r.target.elements["search-text"].value.trim(),l.length==0){i.warning({title:"Warning",message:"All fields should be filled.",position:"topRight"});return}S(),f()});document.querySelector(".load-more").addEventListener("click",async r=>{c+=1,await f();const a=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:48+a.height*2,behavior:"smooth"})});async function O(r,e){try{const a=await w(r,e),s=a.hits,t=a.totalHits;s.length==0?i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(s),e*15<t?R():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}}async function f(){v(),$(),await O(l,c)}
//# sourceMappingURL=index.js.map
