import{s as d,G as u,c as j,r as p,b as l,u as C,a as c,j as e,S as V,L as k,I as b,d as M,e as z,f as D,h as G,F as H,i as m,R,B as T,k as W,l as E,m as v,n as O,o as Z}from"./index-3795f3a6.js";import{I as $}from"./index-e0a156c1.js";const tt=d.h1`
color: #424242;
`,A=d.ul`
display: flex;
flex-wrap: wrap;
gap: 25px;
list-style: none;
`;function N(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 3.75C5 2.784 5.784 2 6.75 2h10.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.586L12 17.21l-5.781 4.625A.75.75 0 0 1 5 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v15.94l5.031-4.026a.749.749 0 0 1 .938 0L17.5 19.69V3.75a.25.25 0 0 0-.25-.25Z"},child:[]}]})(t)}function _(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"},child:[]}]})(t)}const f=t=>t.favorite.items,q=t=>t.filter.filter,J=j([f,q],(t,s)=>t==null?void 0:t.filter(a=>a.title.toLowerCase().includes(s.toLowerCase()))),K=({item:t})=>{const{id:s,title:a,release_date:i,rating:o,image:F}=t,[n,h]=p.useState(!1),g=l(),I=i.split("-")[0],r=C(),x=c(f),{pathname:y}=l(),L=y==="/favorite";p.useEffect(()=>{h(x.some(B=>B.id===s))},[x,s]);const S=()=>{r(v(t)),console.log(t.id),r(O(t.id))},w=()=>{h(!n),r(n?v(t):Z(t))};return e.jsxs(V,{children:[e.jsxs(k,{to:`/${s}`,state:{from:g,item:t},children:[e.jsxs(b,{children:[e.jsx(M,{src:F,alt:a}),e.jsx(z,{})]}),e.jsxs(D,{children:[e.jsx(G,{children:a}),e.jsxs(H,{children:[e.jsx(m,{children:I}),e.jsxs(R,{children:[e.jsx($,{}),e.jsx(m,{children:o})]})]})]})]}),e.jsxs(T,{children:[!L&&e.jsx(W,{onClick:S,children:e.jsx(_,{})}),e.jsx(E,{onClick:w,className:n?"active":"",children:e.jsx(N,{})})]})]})},P=t=>t.films.items,Q=t=>t.filter.filter,U=j([P,Q],(t,s)=>t==null?void 0:t.filter(a=>a.title.toLowerCase().includes(s.toLowerCase()))),et=()=>{const t=c(U),s=c(J),{pathname:a}=l(),i=a==="/"?t:s;return e.jsx(e.Fragment,{children:e.jsx(A,{children:i.map(o=>e.jsx(K,{item:o},o.id))})})},st=d.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
`;export{et as F,tt as S,st as W};
