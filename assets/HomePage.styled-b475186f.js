import{s as e,r as d,u as v,j as t,L as I}from"./index-090d0589.js";import{G as b}from"./Global.styled-50b93937.js";const J=e.h1`
color: #424242;
`,j=e.ul`
display: flex;
flex-wrap: wrap;
gap: 25px;
list-style: none;
`,p=e.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); 
    opacity: 0; 
    transition: background-color 0.3s, opacity 0.3s;
`,w=e.li`
    width: calc(20% - 20px);
    overflow: hidden;
    position: relative;


    &:hover ${p} {
        background-color: rgba(0, 0, 0, 0.5); 
        opacity: 1; 
    }
`,y=e.div`
    position: relative;
    padding-top: 150%;
    border-radius: 10px;
    overflow: hidden;
`,S=e.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,F=e.div`
    margin: 9px 0 10px;
`,k=e.h2`
    overflow: hidden;
    max-height: 54px;
    margin: 5px 0 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: #333;
`,z=e.span`
    height: 18px;
    margin-top: 2px;
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 450;
    line-height: 18px;
    //overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,L=e.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    padding: 0;
    border: none;

    svg {
        width: 32px;
        height: 32px;
        fill: #FFF; 
    }

    &.active {
        svg {
            fill: red;
        }
    }
`;function O(o){return b({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(o)}const N=({item:o})=>{const{id:n,title:a,release_date:x,director:W,image:g}=o,[l,c]=d.useState(!1),h=v(),f=x.split("-")[0];d.useEffect(()=>{const r=(JSON.parse(localStorage.getItem("favoriteFilms"))||[]).findIndex(s=>s.id===o.id);c(r!==-1)},[o.id]);const m=()=>{const i=JSON.parse(localStorage.getItem("favoriteFilms"))||[],r=i.findIndex(u=>u.id===o.id),s=[...i];r===-1?s.push(o):s.splice(r,1),localStorage.setItem("favoriteFilms",JSON.stringify(s)),c(!l)};return t.jsx(w,{children:t.jsxs(I,{to:`/${n}`,state:{from:h,item:o},children:[t.jsxs(y,{children:[t.jsx(S,{src:g,alt:a}),t.jsx(p,{children:t.jsx(L,{onClick:i=>{i.preventDefault(),m()},className:l?"active":"",children:t.jsx(O,{})})})]}),t.jsxs(F,{children:[t.jsx(k,{children:a}),t.jsx(z,{children:f})]})]})})},T=({films:o})=>t.jsx(t.Fragment,{children:t.jsx(j,{children:o.map(n=>t.jsx(N,{item:n},n.id))})}),A=e.input`
    padding: 10px; /* Задаємо відступ від тексту до межі інпуту */
    border: 1px solid #ccc; /* Задаємо товщину та колір рамки */
    border-radius: 10px; /* Задаємо радіус заокруглення кутів */
    outline: none; /* Видаляємо стандартний контур при фокусі */
    
    /* Додаткові стилі, якщо потрібно */
    /* background-color: #f8f8f8; */
    /* color: #333; */
    /* font-size: 16px; */
    /* і т.д. */
`,B=e.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
`;export{T as F,A as S,B as W,J as a};
