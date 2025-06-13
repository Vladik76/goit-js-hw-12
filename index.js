import{a as y,S as g,i}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const m="50766539-a3a9faf2feed981fcf2beabe9",h="https://pixabay.com/api/";async function L(r,s){return(await y.get(h,{params:{key:m,q:r.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const w=new g(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=document.querySelector(".load-more");function b(r){d.insertAdjacentHTML("beforeend",r.map(t=>`
      <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${t.webformatURL}" 
            alt="${t.tags}" 
          />
        </a>
        <div class='image-info'>
        <p>Likes<span>${t.likes}</span></p>
        <p>Views<span>${t.views}</span></p>
        <p>Comments<span>${t.comments}</span></p>
        <p>Downloads<span>${t.downloads}</span></p>
        </div>
      </li>
    `).join("")),w.refresh();const a=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:48+a.height*2,behavior:"smooth"})}function S(){d.innerHTML=""}function v(){u.style.display="block"}function q(){u.style.display="none"}function R(){p.style.display="block"}function $(){p.style.display="none"}const M=document.querySelector(".form");let c=1,l;M.addEventListener("submit",r=>{if(r.preventDefault(),c=1,l=r.target.elements["search-text"].value.trim(),l.length==0){i.warning({title:"Warning",message:"All fields should be filled.",position:"topRight"});return}S(),f()});document.querySelector(".load-more").addEventListener("click",r=>{c+=1,f()});async function O(r,s){try{const a=await L(r,s),t=a.hits,e=a.totalHits;t.length==0?i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(t),s*15<e?R():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}}function f(){v(),$(),O(l,c)}
//# sourceMappingURL=index.js.map
