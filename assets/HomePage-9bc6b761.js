import{s as d,u as c,a as o,g as p,j as s,b as m,r as i,c as u,C as x,M as h,d as j,e as F}from"./index-9eeb5a8c.js";import{W as f,S as g,a as S,F as C}from"./HomePage.styled-c58f6706.js";import{s as b,a as E,F as I,b as y}from"./index-4b0a1b9c.js";import{E as T,I as W}from"./DetailsPage.styled-5442908d.js";const k=d.input`
    padding: 8px 12px; 
    border: 1px solid #ccc; 
    border-radius: 10px; 
    outline: none; 
    color: #333;

`;function v(){const t=c(),a=o(p),e=r=>{const{value:l}=r.currentTarget,n=l.trim();t(m(n))};return s.jsx(k,{type:"text",value:a,onChange:e,placeholder:"Search"})}function N(){const t=c();o(b),o(E);const[a,e]=i.useState(!1);i.useEffect(()=>{t(u())},[t]);const r=(l,n)=>{t(F(n))};return s.jsxs(x,{children:[s.jsxs(f,{children:[s.jsx(g,{children:"Films"}),s.jsxs(S,{children:[s.jsx(T,{onClick:()=>e(!0),children:"Add Film"}),s.jsx(v,{})]}),s.jsxs(h,{onClose:()=>e(!1),isOpen:a,children:[s.jsx(W,{children:"New Film"}),s.jsx(I,{onSendForm:r,onClose:()=>e(!1)}),s.jsx("button",{className:j.close_modal,onClick:()=>e(!1),children:s.jsx(y,{})})]})]}),s.jsx(C,{})]})}export{N as default};
