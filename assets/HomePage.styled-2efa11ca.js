import{s as c,G as g,f as j,r as m,h as p,u as b,a as x,j as t,L as V,i as f,k as C,l as M}from"./index-ca89f3af.js";import{S as k,a as G,b as R,c as W,d as z,I as D,F as H,e as v,R as T,f as E,B as O,g as Z,h as _}from"./DetailsPage.styled-320b5c24.js";const se=c.h1`
color: #424242;
`,A=c.ul`
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
`;function N(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 3.75C5 2.784 5.784 2 6.75 2h10.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.586L12 17.21l-5.781 4.625A.75.75 0 0 1 5 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v15.94l5.031-4.026a.749.749 0 0 1 .938 0L17.5 19.69V3.75a.25.25 0 0 0-.25-.25Z"},child:[]}]})(e)}function $(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"},child:[]}]})(e)}const F=e=>e.favorite.items,q=e=>e.filter.filter,J=j([F,q],(e,s)=>e==null?void 0:e.filter(a=>a.title.toLowerCase().includes(s.toLowerCase()))),K=({item:e})=>{const{id:s,title:a,release_date:i,rating:r,image:d}=e,[n,o]=m.useState(!1),h=p(),I=i.split("-")[0],l=b(),u=x(F),{pathname:y}=p(),w=y==="/favorite";m.useEffect(()=>{o(u.some(B=>B.id===s))},[u,s]);const L=()=>{l(f(e)),console.log(e.id),l(C(e.id))},S=()=>{o(!n),l(n?f(e):M(e))};return t.jsxs(k,{children:[t.jsxs(V,{to:`/${s}`,state:{from:h,item:e},children:[t.jsxs(G,{children:[t.jsx(R,{src:d,alt:a}),t.jsx(W,{})]}),t.jsxs(z,{children:[t.jsx(D,{children:a}),t.jsxs(H,{children:[t.jsx(v,{children:I}),t.jsxs(T,{children:[t.jsx(E,{}),t.jsx(v,{children:r})]})]})]})]}),t.jsxs(O,{children:[!w&&t.jsx(Z,{onClick:L,children:t.jsx($,{})}),t.jsx(_,{onClick:S,className:n?"active":"",children:t.jsx(N,{})})]})]})},P=e=>e.films.items,Q=e=>e.filter.genre,U=e=>e.filter.release,X=e=>e.filter.filter,Y=j([P,X,Q,U],(e,s,a,i)=>e==null?void 0:e.filter(r=>{const d=s.toLowerCase().trim(),n=r.title.toLowerCase().includes(d),o=a===""||r.genre.includes(a),h=i===""||r.release_date.includes(i);return n&&o&&h})),ae=()=>{const e=x(Y),s=x(J),{pathname:a}=p(),i=a==="/"?e:s;return t.jsx(t.Fragment,{children:t.jsx(A,{children:i.map(r=>t.jsx(K,{item:r},r.id))})})},re=c.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
`,ie=c.div`
    display: flex;
    gap: 16px;
    button {
        border-radius: 10px;
        border: 1px solid #fff;
    }
`;export{ae as F,se as S,re as W,ie as a,X as s};
