import{s as d,r as e,j as t,u as p}from"./index-846c9299.js";import{g as f}from"./api-08bf6273.js";import{W as h,S as x,F as g}from"./HomePage.styled-523f7442.js";import{C as S}from"./Global.styled-9e329e44.js";const F=d.input`
    padding: 10px; 
    border: 1px solid #ccc; 
    border-radius: 10px; 
    outline: none; 
    color: #333;

`;function j({onChange:c,films:s}){const[u,i]=e.useState(""),l=n=>{const r=n.target.value;i(r);const a=s.filter(m=>m.title.toLowerCase().includes(r.toLowerCase().trim()));c(a)};return t.jsx(F,{type:"text",value:u,onChange:l,placeholder:"Search"})}function v(){const[c,s]=e.useState(!1),[u,i]=e.useState(null),[l,n]=e.useState([]),[r,a]=e.useState([]);return p(),e.useEffect(()=>{(async()=>{s(!0);try{const o=await f();n(o),a(o)}catch(o){i(o)}finally{s(!1)}})()},[]),t.jsxs(S,{children:[t.jsxs(h,{children:[t.jsx(x,{children:"Films"}),t.jsx(j,{onChange:a,films:l})]}),t.jsx(g,{films:r})]})}export{v as default};
