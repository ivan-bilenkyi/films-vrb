import{s as o,R as l,L as b}from"./index-8bf60108.js";const x=o.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); 
    opacity: 0; 
    transition: background-color 0.3s, opacity 0.3s;
`,z=o.li`
    width: calc(20% - 20px);
    overflow: hidden;
    position: relative;


    &:hover ${x} {
        background-color: rgba(0, 0, 0, 0.5); 
        opacity: 1; 
    }
`,E=o.div`
    position: relative;
    padding-top: 150%;
    border-radius: 10px;
    overflow: hidden;
`,L=o.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,B=o.div`
    margin: 9px 0 10px;
`,C=o.h2`
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    line-height: 18px;
    color: #333;
    margin-bottom: 16px;
`,N=o.p`
    height: 18px;
    margin-top: 2px;
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 450;
    line-height: 18px;
    //overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_=o.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 4px;
`,D=o.button`
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
`;var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=l.createContext&&l.createContext(g),y=["attr","size","title"];function w(t,e){if(t==null)return{};var r=O(t,e),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function O(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?u(Object(r),!0).forEach(function(n){j(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function j(t,e,r){return e=I(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){var e=P(t,"string");return typeof e=="symbol"?e:String(e)}function P(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m(t){return t&&t.map((e,r)=>l.createElement(e.tag,f({key:r},e.attr),m(e.child)))}function h(t){return e=>l.createElement(S,c({attr:f({},t.attr)},e),m(t.child))}function S(t){var e=r=>{var{attr:n,size:i,title:a}=t,v=w(t,y),p=i||r.size||"1em",s;return r.className&&(s=r.className),t.className&&(s=(s?s+" ":"")+t.className),l.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,v,{className:s,style:f(f({color:t.color||r.color},r.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),a&&l.createElement("title",null,a),t.children)};return d!==void 0?l.createElement(d.Consumer,null,r=>e(r)):e(g)}function F(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(t)}function R(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"},child:[]}]})(t)}const W=o(b)`
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
`,T=o.div`
    display: flex;
    gap: 20px;
`,G=o.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
`,H=o.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
`,K=o.h1`
    font-size: 24px;
`,M=o.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,A=o.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #ffc107;
`,$=o.button`
    background-color: #333333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    max-width: fit-content;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        color: red;
    }
`;export{_ as B,$ as E,M as F,h as G,E as I,A as R,z as S,L as a,x as b,D as c,B as d,C as e,N as f,R as g,W as h,F as i,T as j,G as k,H as l,K as m};
