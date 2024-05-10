import{s as t,G as i,L as a}from"./index-3efb02e2.js";const e=t.div`
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
`,n=t.div`
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
`,r=t.button`
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
`,c=t.li`
    width: 100%;
    overflow: hidden;
    position: relative;

    &:hover ${e} {
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 1;
    }

    &:hover ${n} {
        opacity: 1;
    }

    &:hover ${r}.active {
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
`,p=t.button`
    background: transparent;
    padding: 0;
    border: none;
    
    svg {
        width: 32px;
        height: 32px;
        fill: #ffffff;
    }
`,d=t.div`
    position: relative;
    padding-top: 150%;
    border-radius: 10px;
    overflow: hidden;
`,l=t.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,f=t.div`
    margin: 9px 0 10px;
`,g=t.h2`
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    line-height: 18px;
    color: #333;
    margin-bottom: 16px;
`,x=t.p`
    height: 18px;
    margin-top: 2px;
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 450;
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;function h(o){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(o)}function m(o){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"},child:[]}]})(o)}const v=t(a)`
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
`,u=t.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
`,b=t.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
`,w=t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
`,y=t.h1`
    font-size: 24px;
`,I=t.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,k=t.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #ffc107;
`,L=t.button`
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
`;export{n as B,L as E,I as F,g as I,k as R,c as S,d as a,l as b,e as c,f as d,x as e,m as f,p as g,r as h,v as i,h as j,u as k,b as l,w as m,y as n};
