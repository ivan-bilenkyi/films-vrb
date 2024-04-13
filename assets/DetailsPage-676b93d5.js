import{s as i,u as m,r,j as t,L as p}from"./index-090d0589.js";import{G as c,C as d}from"./Global.styled-50b93937.js";function g(o){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(o)}function h(o){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"},child:[]}]})(o)}const f=i(p)`
    display: inline-block;
    margin-bottom: 20px;
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        color: #555;
    }
`,j=i.div`
    display: flex;
    gap: 20px;
`,u=i.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
`,b=i.div`
    display: flex;
    flex-direction: column;
`,F=i.h1`
    font-size: 24px;
    margin-bottom: 10px;
`,L=i.p`
    font-size: 16px;
    margin-bottom: 10px;
`,z=i.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`,k=i.div`
    color: #ffc107;
    margin-right: 5px;
`,v=i.p`
    font-size: 16px;
    margin: 0;
`,I=i.p`
    font-size: 16px;
    margin-bottom: 10px;
`,R=i.p`
    font-size: 16px;
    margin-bottom: 10px;
`,y=i.p`
    font-size: 16px;
    margin-bottom: 10px;
`,D=i.p`
    font-size: 16px;
    margin-bottom: 10px;
`,M=()=>{var n;const o=m(),a=r.useRef(o),e=o.state.item,[s,l]=r.useState(!1),x=()=>{l(!s)};return console.log(s),t.jsxs(d,{children:[t.jsxs(f,{to:((n=a.current.state)==null?void 0:n.from)??"/",children:[t.jsx(g,{style:{marginRight:"5px"}}),"Go back"]}),t.jsxs(j,{children:[t.jsx(u,{src:e.image,alt:e.title}),t.jsxs(b,{children:[t.jsx(F,{children:e.title}),t.jsx(L,{children:e.description}),t.jsxs(z,{children:[t.jsx(k,{children:t.jsx(h,{})}),t.jsx(v,{children:e.rating})]}),t.jsxs(I,{children:["Release Date: ",e.release_date]}),t.jsxs(R,{children:["Genre: ",e.genre.join(", ")]}),t.jsxs(y,{children:["Actors: ",e.actors.join(", ")]}),t.jsxs(D,{children:["Director: ",e.director]}),t.jsx("button",{onClick:x,children:"Edit Film"})]})]})]})};export{M as default};
