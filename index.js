import{a as g,S as m,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const h="50766539-a3a9faf2feed981fcf2beabe9",b="https://pixabay.com/api/";async function w(o,e){return(await g.get(b,{params:{key:h,q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const L=new m(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery"),p=document.querySelector(".loader"),u=document.querySelector(".load-more");async function x(o){d.insertAdjacentHTML("beforeend",o.map(e=>`
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
    `).join("")),await L.refresh()}function v(){d.innerHTML=""}function S(){p.style.display="block"}function q(){p.style.display="none"}function k(){u.style.display="block"}function f(){u.style.display="none"}const R=document.querySelector(".form");let c=1,l;R.addEventListener("submit",o=>{if(o.preventDefault(),c=1,l=o.target.elements["search-text"].value.trim(),l.length==0){n.warning({title:"Warning",message:"All fields should be filled.",position:"topRight"});return}v(),y()});document.querySelector(".load-more").addEventListener("click",async o=>{c+=1,await y();const a=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:48+a.height*2,behavior:"smooth"})});async function B(o,e){try{const a=await w(o,e),i=a.hits,t=a.totalHits;i.length==0?n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(x(i),e*15<t?k():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}}async function y(){S(),f(),await B(l,c)}document.addEventListener("DOMContentLoaded",()=>{f();const o=document.createElement("style");o.textContent=`
  .loader {
  width: 48px;
  height: 48px;
  border: 3px dotted blueviolet;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
  display: none;
}
  .loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px dotted #FF3D00;
  border-style: solid solid dotted;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  animation: rotationBack 1s linear infinite;
  transform-origin: center center;
  
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
  .gallery-image {
  display: block;
  width: 360px;;
  height: 200px;;

}
`,document.head.appendChild(o)});
//# sourceMappingURL=index.js.map
