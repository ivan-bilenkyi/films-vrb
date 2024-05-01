import{s as h,u as x,a as p,j as e,b as j,c as P,r,g as R,C as I,M as w,d as A,e as G}from"./index-1cde8d4e.js";import{s as L,W as T,S as W,a as q,F as k}from"./HomePage.styled-776c1bb1.js";import{s as B,a as M,b as N,F as O,c as U}from"./index-5978a04c.js";import{E as _,I as D}from"./DetailsPage.styled-95b1c173.js";const H=h.div`
    display: flex;
    gap: 16px;
`,f=h.select`
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    color: #333;
`,$=h.input`
    padding: 8px 12px; 
    border: 1px solid #ccc; 
    border-radius: 10px; 
    outline: none; 
    color: #333;

`;function z(){const n=x(),l=p(L),a=o=>{const{value:u}=o.currentTarget,d=u.trim();n(j({key:"filter",value:d}))};return e.jsx($,{type:"text",value:l,onChange:a,placeholder:"Search"})}const J=()=>{const n=x(),[l,a]=P(),o=p(B),[u,d]=r.useState([]),[g,F]=r.useState([]),[v,C]=r.useState(""),[y,E]=r.useState("");r.useEffect(()=>{const s=new Set,t=new Set;o.forEach(c=>{c.genre.forEach(b=>s.add(b));const m=c.release_date.split("-")[0];t.add(m)});const i=Array.from(t).sort((c,m)=>m-c);d(Array.from(s)),F(i)},[o]),r.useEffect(()=>{const s=new URLSearchParams(l),t=s.get("genre"),i=s.get("release");C(t||""),E(i||"")},[l]);const S=s=>t=>{const i=t.target.value,c=new URLSearchParams(l);c.set(s,i),a(c.toString()),n(j({key:s,value:i}))};return e.jsxs(H,{children:[e.jsxs(f,{value:v,onChange:S("genre"),children:[e.jsx("option",{value:"",children:"Select genre"}),u.map((s,t)=>e.jsx("option",{value:s,children:s},t))]}),e.jsxs(f,{value:y,onChange:S("release"),children:[e.jsx("option",{value:"",children:"Select release year"}),g.map((s,t)=>e.jsx("option",{value:s,children:s},t))]}),e.jsx(z,{})]})};function Y(){const n=x();p(M),p(N);const[l,a]=r.useState(!1);r.useEffect(()=>{n(R())},[n]);const o=(u,d)=>{n(G(d))};return e.jsxs(I,{children:[e.jsxs(T,{children:[e.jsx(W,{children:"Films"}),e.jsxs(q,{children:[e.jsx(J,{}),e.jsx(_,{onClick:()=>a(!0),children:"Add Film"})]}),e.jsxs(w,{onClose:()=>a(!1),isOpen:l,children:[e.jsx(D,{children:"New Film"}),e.jsx(O,{onSendForm:o,onClose:()=>a(!1)}),e.jsx("button",{className:A.close_modal,onClick:()=>a(!1),children:e.jsx(U,{})})]})]}),e.jsx(k,{})]})}export{Y as default};
