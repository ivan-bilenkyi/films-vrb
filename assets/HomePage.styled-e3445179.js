import{s as r,r as d,u,j as e,L as h}from"./index-03e997ea.js";import{G as j,S,I as v,a as y,b as F,B as b,c as L,d as O,e as w}from"./Global.styled-fdd158bf.js";const E=r.h1`
color: #424242;
`,N=r.ul`
display: flex;
flex-wrap: wrap;
gap: 25px;
list-style: none;
`;function W(t){return j({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(t)}const k=({item:t})=>{const{id:i,title:o,release_date:p,rating:z,image:x}=t,[l,c]=d.useState(!1),m=u(),f=p.split("-")[0];d.useEffect(()=>{const n=(JSON.parse(localStorage.getItem("favoriteFilms"))||[]).findIndex(a=>a.id===t.id);c(n!==-1)},[t.id]);const g=()=>{const s=JSON.parse(localStorage.getItem("favoriteFilms"))||[],n=s.findIndex(I=>I.id===t.id),a=[...s];n===-1?a.push(t):a.splice(n,1),localStorage.setItem("favoriteFilms",JSON.stringify(a)),c(!l)};return e.jsx(S,{children:e.jsxs(h,{to:`/${i}`,state:{from:m,item:t},children:[e.jsxs(v,{children:[e.jsx(y,{src:x,alt:o}),e.jsx(F,{children:e.jsx(b,{onClick:s=>{s.preventDefault(),g()},className:l?"active":"",children:e.jsx(W,{})})})]}),e.jsxs(L,{children:[e.jsx(O,{children:o}),e.jsx(w,{children:f})]})]})})},J=({films:t})=>e.jsx(e.Fragment,{children:e.jsx(N,{children:t.map(i=>e.jsx(k,{item:i},i.id))})}),T=r.input`
    padding: 10px; /* Задаємо відступ від тексту до межі інпуту */
    border: 1px solid #ccc; /* Задаємо товщину та колір рамки */
    border-radius: 10px; /* Задаємо радіус заокруглення кутів */
    outline: none; /* Видаляємо стандартний контур при фокусі */
    
    /* Додаткові стилі, якщо потрібно */
    /* background-color: #f8f8f8; */
    /* color: #333; */
    /* font-size: 16px; */
    /* і т.д. */
`,A=r.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
`;export{J as F,T as S,A as W,E as a};
