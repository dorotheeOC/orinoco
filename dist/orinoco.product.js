!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=e=>{let t=document.querySelector("div.product"),n=document.createElement("div");n.classList.add("alert"),n.classList.add("alert-danger"),n.role="alert",n.textContent=null==e?"Erreur server ! ":"Produit inexistant ! ";let r=document.createElement("a");r.classList.add("alert-link"),r.href="index.html",r.innerHTML="Revenir à l'accueil",n.appendChild(r),t.appendChild(n)};const l=e=>new Promise((t,n)=>{const r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&(200===r.status?t(r.responseText):n())},r.open("GET",e,!0),r.send()});class a{constructor(e,t,n,r){this.id=e,this.varnish=t,this.name=n,this.price=r}}let d=(()=>{const e=window.location.search;return new URLSearchParams(e).get("id")})();const i=(e,t,n)=>{let r=new a(e._id,t.textContent,e.name,e.price);n.push(r);let l=JSON.stringify(n);localStorage.setItem("product",l)};l(d?"http://localhost:3000/api/furniture/"+d:"http://localhost:3000/api/furniture/").then(e=>{let t=JSON.parse(e);console.log(t),(e=>{let t=document.querySelector("div.product"),n=document.createElement("div");n.classList.add("col-12");let r=document.createElement("div");r.classList.add("card");let l=document.createElement("div");l.classList.add("col-12");let a=document.createElement("img");a.classList.add("product-img"),a.src=e.imageUrl;let d=document.createElement("div");d.classList.add("card-desc");let c=document.createElement("h5");c.classList.add("card-title"),c.innerHTML=""+e.name;let o=document.createElement("p");o.classList.add("card-text"),o.innerHTML=e.description;let s=document.createElement("p");s.classList.add("price"),s.innerHTML=e.price+" €";let u=document.createElement("form");u.action="panier.html",u.method="post";let p=document.createElement("div");p.classList.add("form-group");let m=document.createElement("label");m.htmlFor="material",m.innerHTML="Choose your material";let h=e.varnish,f=document.createElement("select");f.id="material",f.classList.add("form-control");for(let e=0;e<h.length;e++){let t=document.createElement("option");t.innerHTML=h[e],f.appendChild(t)}let L=document.createElement("button");L.type="submit",L.innerHTML="Ajouter au panier";let v=document.createElement("div");v.classList.add("result"),v.textContent=h[0],v.style.color="transparent",l.appendChild(a),r.appendChild(l),d.appendChild(c),d.appendChild(o),d.appendChild(s),p.appendChild(m),p.appendChild(f),u.appendChild(p),u.appendChild(L),u.appendChild(v),d.appendChild(u),r.appendChild(d),n.appendChild(r),t.appendChild(n),f.addEventListener("change",e=>{let t=e.target.value;v.innerHTML=t});let g=JSON.parse(localStorage.getItem("product"))||[];L.addEventListener("click",t=>{t.preventDefault(),i(e,v,g)})})(t)}).then(e=>{}).catch(e=>{r(d)}).then(()=>{console.log("fin AJAX")})}]);