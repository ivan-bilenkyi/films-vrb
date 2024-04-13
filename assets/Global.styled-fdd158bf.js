import{s as a,R as l}from"./index-03e997ea.js";const b=a.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); 
    opacity: 0; 
    transition: background-color 0.3s, opacity 0.3s;
`,S=a.li`
    width: calc(20% - 20px);
    overflow: hidden;
    position: relative;


    &:hover ${b} {
        background-color: rgba(0, 0, 0, 0.5); 
        opacity: 1; 
    }
`,E=a.div`
    position: relative;
    padding-top: 150%;
    border-radius: 10px;
    overflow: hidden;
`,C=a.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,N=a.div`
    margin: 9px 0 10px;
`,_=a.h2`
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    line-height: 18px;
    color: #333;
    margin-bottom: 16px;
`,z=a.span`
    height: 18px;
    margin-top: 2px;
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 450;
    line-height: 18px;
    //overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,k=a.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    padding: 0;
    border: none;

    svg {
        width: 32px;
        height: 32px;
        fill: #FFF; 
    }

    &.active {
        svg {
            fill: red;
        }
    }
`;var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=l.createContext&&l.createContext(g),h=["attr","size","title"];function y(t,e){if(t==null)return{};var r=w(t,e),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function w(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?d(Object(r),!0).forEach(function(n){O(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function O(t,e,r){return e=x(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t){var e=j(t,"string");return typeof e=="symbol"?e:String(e)}function j(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m(t){return t&&t.map((e,r)=>l.createElement(e.tag,u({key:r},e.attr),m(e.child)))}function D(t){return e=>l.createElement(P,c({attr:u({},t.attr)},e),m(t.child))}function P(t){var e=r=>{var{attr:n,size:i,title:o}=t,v=y(t,h),f=i||r.size||"1em",s;return r.className&&(s=r.className),t.className&&(s=(s?s+" ":"")+t.className),l.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,v,{className:s,style:u(u({color:t.color||r.color},r.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),t.children)};return p!==void 0?l.createElement(p.Consumer,null,r=>e(r)):e(g)}const W=a.div`
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
`;export{k as B,W as C,D as G,E as I,S,C as a,b,N as c,_ as d,z as e};
