import{s as m,u as h,a as f,j as e,b as j,c as R,r,g as b,C as w,M as I,d as A,e as G}from"./index-2233f2e4.js";import{s as T,W,S as q,a as L,F as k}from"./HomePage.styled-35e79c57.js";import{E as B,I as M}from"./DetailsPage.styled-57e272e1.js";import{s as N,F as O,a as U}from"./index-f0f4f712.js";const _=m.div`
    display: flex;
    gap: 16px;
`,S=m.select`
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    color: #333;
`,D=m.input`
    padding: 8px 12px; 
    border: 1px solid #ccc; 
    border-radius: 10px; 
    outline: none; 
    color: #333;

`;function H(){const n=h(),l=f(T),a=c=>{const{value:u}=c.currentTarget,d=u.trim();n(j({key:"filter",value:d}))};return e.jsx(D,{type:"text",value:l,onChange:a,placeholder:"Search"})}const $=()=>{const n=h(),[l,a]=R(),c=f(N),[u,d]=r.useState([]),[g,F]=r.useState([]),[v,C]=r.useState(""),[y,E]=r.useState("");r.useEffect(()=>{const s=new Set,t=new Set;c.forEach(o=>{o.genre.forEach(P=>s.add(P));const p=o.release_date.split("-")[0];t.add(p)});const i=Array.from(t).sort((o,p)=>p-o);d(Array.from(s)),F(i)},[c]),r.useEffect(()=>{const s=new URLSearchParams(l),t=s.get("genre"),i=s.get("release");C(t||""),E(i||"")},[l]);const x=s=>t=>{const i=t.target.value,o=new URLSearchParams(l);o.set(s,i),a(o.toString()),n(j({key:s,value:i}))};return e.jsxs(_,{children:[e.jsxs(S,{value:v,onChange:x("genre"),children:[e.jsx("option",{value:"",children:"Select genre"}),u.map((s,t)=>e.jsx("option",{value:s,children:s},t))]}),e.jsxs(S,{value:y,onChange:x("release"),children:[e.jsx("option",{value:"",children:"Select release year"}),g.map((s,t)=>e.jsx("option",{value:s,children:s},t))]}),e.jsx(H,{})]})};function V(){const n=h(),[l,a]=r.useState(!1);r.useEffect(()=>{n(b())},[n]);const c=(u,d)=>{n(G(d))};return e.jsxs(w,{children:[e.jsxs(W,{children:[e.jsx(q,{children:"Films"}),e.jsxs(L,{children:[e.jsx($,{}),e.jsx(B,{onClick:()=>a(!0),children:"Add Film"})]}),e.jsxs(I,{onClose:()=>a(!1),isOpen:l,children:[e.jsx(M,{children:"New Film"}),e.jsx(O,{onSendForm:c,onClose:()=>a(!1)}),e.jsx("button",{className:A.close_modal,onClick:()=>a(!1),children:e.jsx(U,{})})]})]}),e.jsx(k,{})]})}export{V as default};
