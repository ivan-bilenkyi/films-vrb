import{i as h,r as n,u as f,n as u,a as p,j as s,C as F,M as I,e as g,o as k,p as y}from"./index-a48f7f08.js";import{i as B,j as E,k as R,l as S,m as C,n as b,F as D,R as L,f as A,E as T,I as G}from"./DetailsPage.styled-9410a077.js";import{s as M,F as O,b as _}from"./index-c543f722.js";function z(){var c;const o=h(),d=n.useRef(o),[t,w]=n.useState(o.state.item),r=f(),[m,i]=n.useState(!1),{isLoggedIn:j}=u(),e=p(M).find(a=>a.id===t.id);n.useEffect(()=>{(async()=>{try{r(k(t.id))}catch(l){console.error(l)}})()},[t.id]);const x=(a,l)=>{r(y({id:a,values:l}))};return e?s.jsxs(F,{children:[s.jsxs(B,{to:((c=d.current.state)==null?void 0:c.from)??"/",children:[s.jsx(E,{style:{marginRight:"5px"}}),"Go back"]}),s.jsxs(R,{children:[s.jsx(S,{src:e.image,alt:e.title}),s.jsxs(C,{children:[s.jsx(b,{children:e.title}),s.jsx("p",{children:e.description}),s.jsxs(D,{children:[s.jsx(L,{children:s.jsx(A,{})}),s.jsx("p",{children:e.rating})]}),s.jsxs("p",{children:["Release Date: ",e.release_date]}),s.jsxs("p",{children:["Genre: ",e.genre.join(", ")]}),s.jsxs("p",{children:["Actors: ",e.actors.join(", ")]}),s.jsxs("p",{children:["Director: ",e.director]}),j&&s.jsx(T,{onClick:()=>i(!0),children:"Edit Film"})]})]}),s.jsxs(I,{onClose:()=>i(!1),isOpen:m,children:[s.jsx(G,{children:"Edit Film"}),s.jsx(O,{item:t,onSendForm:x,onClose:()=>i(!1)}),s.jsx("button",{className:g.close_modal,onClick:()=>i(!1),children:s.jsx(_,{})})]})]}):null}export{z as default};
