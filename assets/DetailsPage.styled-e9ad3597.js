import{s as n,R as c,L as x}from"./index-51b8539a.js";const b=n.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    transition: background-color 0.3s, opacity 0.3s;
    
    @media (min-width: 1440px) {
        background-color: rgba(0, 0, 0, 0);
        opacity: 0;

    }
`,y=n.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 4px;
    opacity: 1;
    transition: background-color 0.3s, opacity 0.3s;
    
    @media (min-width: 1440px) {
        opacity: 0;
        
    }
`,w=n.button`
    background: transparent;
    padding: 0;
    border: none;

    svg {
        width: 32px;
        height: 32px;
        fill: #ffffff;
    }

    &.active {
        svg {
            fill: #ff0000;
        }
    }
`,L=n.li`
    width: 100%;
    overflow: hidden;
    position: relative;

    &:hover ${b} {
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 1;
    }

    &:hover ${y} {
        opacity: 1;
    }

    &:hover ${w}.active {
        svg {
            fill: #ff0000;
        }
    }
    
    @media (min-width: 768px) {
        width: calc(33.3% - 16px);
    }

    @media (min-width: 1440px) {
        width: calc(20% - 20px);
    }
`,B=n.button`
    background: transparent;
    padding: 0;
    border: none;
    
    svg {
        width: 32px;
        height: 32px;
        fill: #ffffff;
    }
`,C=n.div`
    position: relative;
    padding-top: 150%;
    border-radius: 10px;
    overflow: hidden;
`,N=n.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,_=n.div`
    margin: 9px 0 10px;
`,D=n.h2`
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    line-height: 18px;
    color: #333;
    margin-bottom: 16px;
`,F=n.p`
    height: 18px;
    margin-top: 2px;
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 450;
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=c.createContext&&c.createContext(g),O=["attr","size","title"];function j(t,e){if(t==null)return{};var r=I(t,e),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)i=a[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function I(t,e){if(t==null)return{};var r={},i=Object.keys(t),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},s.apply(this,arguments)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,i)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?u(Object(r),!0).forEach(function(i){P(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function P(t,e,r){return e=k(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function k(t){var e=S(t,"string");return typeof e=="symbol"?e:String(e)}function S(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m(t){return t&&t.map((e,r)=>c.createElement(e.tag,p({key:r},e.attr),m(e.child)))}function h(t){return e=>c.createElement(z,s({attr:p({},t.attr)},e),m(t.child))}function z(t){var e=r=>{var{attr:i,size:o,title:a}=t,v=j(t,O),d=o||r.size||"1em",l;return r.className&&(l=r.className),t.className&&(l=(l?l+" ":"")+t.className),c.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,v,{className:l,style:p(p({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&c.createElement("title",null,a),t.children)};return f!==void 0?c.createElement(f.Consumer,null,r=>e(r)):e(g)}function R(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(t)}function W(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"},child:[]}]})(t)}const T=n(x)`
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
`,G=n.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
`,$=n.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
`,H=n.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
`,K=n.h1`
    font-size: 24px;
`,M=n.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,A=n.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #ffc107;
`,q=n.button`
    background-color: #333333;
    color: #fff;
    padding: 8px 18px;
    border: none;
    max-width: fit-content;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        color: red;
    }
`;export{y as B,q as E,M as F,h as G,D as I,A as R,L as S,C as a,N as b,b as c,_ as d,F as e,W as f,B as g,w as h,T as i,R as j,G as k,$ as l,H as m,K as n};
