import{a as g,S as y,i}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const m="50766539-a3a9faf2feed981fcf2beabe9",h="https://pixabay.com/api/";async function L(t,s){return(await g.get(h,{params:{key:m,q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const b=new y(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".gallery"),u=document.querySelector(".loader"),d=document.querySelector(".load-more");function w(t){p.insertAdjacentHTML("beforeend",t.map(r=>`
      <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${r.webformatURL}" 
            alt="${r.tags}" 
          />
        </a>
        <div class='image-info'>
        <p>Likes<span>${r.likes}</span></p>
        <p>Views<span>${r.views}</span></p>
        <p>Comments<span>${r.comments}</span></p>
        <p>Downloads<span>${r.downloads}</span></p>
        </div>
      </li>
    `).join("")),b.refresh();const a=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:48+a.height*2,behavior:"smooth"})}function v(){p.innerHTML=""}function S(){u.style.display="block"}function q(){u.style.display="none"}function R(){d.style.display="block"}function $(){d.style.display="none"}const M=document.querySelector(".form");let n=1,c;M.addEventListener("submit",t=>{if(t.preventDefault(),n=1,c=t.target.elements["search-text"].value.trim(),c.length==0){i.warning({title:"Warning",message:"All fields should be filled.",position:"topRight"});return}v(),f()});document.querySelector(".load-more").addEventListener("click",t=>{n+=1,f()});function f(){S(),$(),L(c,n).then(t=>{const s=t.hits,a=t.totalHits;s.length==0?i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(w(s),n*15<a?R():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}).catch(t=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
