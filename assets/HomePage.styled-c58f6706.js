import{s as o,G as u,f as v,r as x,h as c,u as b,a as d,j as e,L as C,i as m,k as V,l as k}from"./index-9eeb5a8c.js";import{S as M,a as W,b as z,c as D,d as G,I as H,F as R,e as f,R as T,f as E,B as O,g as Z,h as $}from"./DetailsPage.styled-5442908d.js";const tt=o.h1`
color: #424242;
`,A=o.ul`
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
`;function N(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 3.75C5 2.784 5.784 2 6.75 2h10.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.586L12 17.21l-5.781 4.625A.75.75 0 0 1 5 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v15.94l5.031-4.026a.749.749 0 0 1 .938 0L17.5 19.69V3.75a.25.25 0 0 0-.25-.25Z"},child:[]}]})(t)}function _(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"},child:[]}]})(t)}const g=t=>t.favorite.items,q=t=>t.filter.filter,J=v([g,q],(t,s)=>t==null?void 0:t.filter(a=>a.title.toLowerCase().includes(s.toLowerCase()))),K=({item:t})=>{const{id:s,title:a,release_date:n,rating:i,image:j}=t,[l,p]=x.useState(!1),F=c(),I=n.split("-")[0],r=b(),h=d(g),{pathname:y}=c(),w=y==="/favorite";x.useEffect(()=>{p(h.some(B=>B.id===s))},[h,s]);const L=()=>{r(m(t)),console.log(t.id),r(V(t.id))},S=()=>{p(!l),r(l?m(t):k(t))};return e.jsxs(M,{children:[e.jsxs(C,{to:`/${s}`,state:{from:F,item:t},children:[e.jsxs(W,{children:[e.jsx(z,{src:j,alt:a}),e.jsx(D,{})]}),e.jsxs(G,{children:[e.jsx(H,{children:a}),e.jsxs(R,{children:[e.jsx(f,{children:I}),e.jsxs(T,{children:[e.jsx(E,{}),e.jsx(f,{children:i})]})]})]})]}),e.jsxs(O,{children:[!w&&e.jsx(Z,{onClick:L,children:e.jsx(_,{})}),e.jsx($,{onClick:S,className:l?"active":"",children:e.jsx(N,{})})]})]})},P=t=>t.films.items,Q=t=>t.filter.filter,U=v([P,Q],(t,s)=>t==null?void 0:t.filter(a=>a.title.toLowerCase().includes(s.toLowerCase()))),et=()=>{const t=d(U),s=d(J),{pathname:a}=c(),n=a==="/"?t:s;return e.jsx(e.Fragment,{children:e.jsx(A,{children:n.map(i=>e.jsx(K,{item:i},i.id))})})},st=o.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
`,at=o.div`
    display: flex;
    gap: 16px;
    button {
        border-radius: 10px;
        border: 1px solid #fff;
    }
`;export{et as F,tt as S,st as W,at as a};
