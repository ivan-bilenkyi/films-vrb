import{s as c,c as j,r as p,b as f,u as B,a as o,j as e,L as C,d as u,e as V}from"./index-8bf60108.js";import{G as g,S as b,I as k,a as D,b as M,B as z,c as m,d as G,e as H,F as R,f as v,R as T,g as W}from"./DetailsPage.styled-aee6d479.js";const Q=c.h1`
color: #424242;
`,E=c.ul`
display: flex;
flex-wrap: wrap;
gap: 25px;
list-style: none;
`;function O(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 3.75C5 2.784 5.784 2 6.75 2h10.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.586L12 17.21l-5.781 4.625A.75.75 0 0 1 5 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v15.94l5.031-4.026a.749.749 0 0 1 .938 0L17.5 19.69V3.75a.25.25 0 0 0-.25-.25Z"},child:[]}]})(t)}function Z(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"},child:[]}]})(t)}const F=t=>t.favorite.items,$=t=>t.filter.filter,A=j([F,$],(t,s)=>t==null?void 0:t.filter(a=>a.title.toLowerCase().includes(s.toLowerCase()))),N=({item:t})=>{const{id:s,title:a,release_date:n,rating:i,image:I}=t,[d,h]=p.useState(!1),y=f(),L=n.split("-")[0],l=B(),x=o(F);p.useEffect(()=>{h(x.some(r=>r.id===s))},[x,s]);const S=()=>{l(u(t)),l(V(s))},w=()=>{h(!d),l(u(t))};return e.jsx(b,{children:e.jsxs(C,{to:`/${s}`,state:{from:y,item:t},children:[e.jsxs(k,{children:[e.jsx(D,{src:I,alt:a}),e.jsx(M,{children:e.jsxs(z,{children:[e.jsx(m,{onClick:r=>{r.preventDefault(),S()},children:e.jsx(Z,{})}),e.jsx(m,{onClick:r=>{r.preventDefault(),w()},className:d?"active":"",children:e.jsx(O,{})})]})})]}),e.jsxs(G,{children:[e.jsx(H,{children:a}),e.jsxs(R,{children:[e.jsx(v,{children:L}),e.jsxs(T,{children:[e.jsx(W,{}),e.jsx(v,{children:i})]})]})]})]})})},_=t=>t.films.items,q=t=>t.filter.filter,J=j([_,q],(t,s)=>t==null?void 0:t.filter(a=>a.title.toLowerCase().includes(s.toLowerCase()))),U=()=>{const t=o(J),s=o(A),{pathname:a}=f(),n=a==="/"?t:s;return e.jsx(e.Fragment,{children:e.jsx(E,{children:n.map(i=>e.jsx(N,{item:i},i.id))})})},X=c.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
`;export{U as F,Q as S,X as W};
