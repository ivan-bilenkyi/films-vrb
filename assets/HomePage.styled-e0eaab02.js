import{s as o,G as v,h as F,r as u,i as p,u as V,a as x,j as t,L as C,k as f,l as M,m as T}from"./index-28858dd0.js";import{S as k,a as W,b as G,c as R,d as z,I as D,F as H,e as g,R as E,f as O,B as Z,g as _,h as A}from"./DetailsPage.styled-a53f4021.js";const ae=o.h1`
color: #424242;
`,N=o.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    list-style: none;
    
    @media (min-width: 768px) {
        gap: 24px;
    }

    @media (min-width: 1440px) {
        gap: 25px;
    }
`,j=o.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
    text-align: center;

    & span {
        color: #c92d2d;
    }
`;function Y(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 3.75C5 2.784 5.784 2 6.75 2h10.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.586L12 17.21l-5.781 4.625A.75.75 0 0 1 5 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v15.94l5.031-4.026a.749.749 0 0 1 .938 0L17.5 19.69V3.75a.25.25 0 0 0-.25-.25Z"},child:[]}]})(e)}function $(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"},child:[]}]})(e)}const y=e=>e.favorite.items,q=e=>e.filter.filter,J=F([y,q],(e,a)=>e==null?void 0:e.filter(s=>s.title.toLowerCase().includes(a.toLowerCase()))),K=({item:e})=>{const{id:a,title:s,release_date:i,rating:r,image:d}=e,[n,l]=u.useState(!1),h=p(),I=i.split("-")[0],c=V(),m=x(y),{pathname:w}=p(),S=w==="/favorite";u.useEffect(()=>{l(m.some(b=>b.id===a))},[m,a]);const L=()=>{c(f(e)),c(M(e.id))},B=()=>{l(!n),c(n?f(e):T(e))};return t.jsxs(k,{children:[t.jsxs(C,{to:`/${a}`,state:{from:h,item:e},children:[t.jsxs(W,{children:[t.jsx(G,{src:d,alt:s}),t.jsx(R,{})]}),t.jsxs(z,{children:[t.jsx(D,{children:s}),t.jsxs(H,{children:[t.jsx(g,{children:I}),t.jsxs(E,{children:[t.jsx(O,{}),t.jsx(g,{children:r})]})]})]})]}),t.jsxs(Z,{children:[!S&&t.jsx(_,{onClick:L,children:t.jsx($,{})}),t.jsx(A,{onClick:B,className:n?"active":"",children:t.jsx(Y,{})})]})]})},P=e=>e.films.items,Q=e=>e.filter.genre,U=e=>e.filter.release,X=e=>e.filter.filter,ee=F([P,X,Q,U],(e,a,s,i)=>e==null?void 0:e.filter(r=>{const d=a.toLowerCase().trim(),n=r.title.toLowerCase().includes(d),l=s===""||r.genre.includes(s),h=i===""||r.release_date.includes(i);return n&&l&&h})),re=()=>{const e=x(ee),a=x(J),{pathname:s}=p(),i=s==="/"?e:a;return t.jsx(t.Fragment,{children:i.length===0?s==="/favorite"?t.jsx(j,{children:t.jsx("p",{children:"This page is empty, add some films."})}):t.jsxs(j,{children:[t.jsxs("p",{children:[t.jsx("span",{children:"Sorry, no results were found "}),"for the films filters you selected. You may want to consider other search options to find the film you want."]}),t.jsx("span",{children:"Try changing the search parameters."})]}):t.jsx(N,{children:i.map(r=>t.jsx(K,{item:r},r.id))})})},ie=o.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
`,ne=o.div`
    display: flex;
    gap: 16px;
    button {
        border-radius: 10px;
        border: 1px solid #fff;
    }
`;export{re as F,ae as S,ie as W,ne as a,X as s};
