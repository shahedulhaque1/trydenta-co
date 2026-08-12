;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="36e7a500-419d-ecbe-1839-8ae6975fd7cb")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,647784,e=>{"use strict";var a=e.i(304351),i=e.i(640363);let t=`
.pdv-section{
  width:100%;background:#faf8f6;color:#0b0c0e;
  padding:clamp(72px,9vh,100px) clamp(22px,5vw,76px) clamp(58px,7vh,84px);
  scroll-margin-top:96px;
  border-top:1px solid #eee8df;
  content-visibility:auto;contain-intrinsic-size:auto 720px;
}
.pdv-shell{max-width:1320px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:22px}
.pdv-copy{max-width:860px;text-align:center}
.pdv-eyebrow{
  display:block;margin-bottom:12px;font-family:var(--font-ibm-mono),ui-monospace,monospace;
  font-size:12px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#767b84;
}
.pdv-copy h2{
  font-family:var(--face);font-weight:400;font-size:clamp(32px,3.7vw,48px);
  line-height:1.04;letter-spacing:-.032em;color:#0b0c0e;margin:0 0 14px;
}
.pdv-demo{width:100%;display:flex;flex-direction:column;align-items:center}
.pdv-frame{
  width:min(940px,92vw);border-radius:24px;overflow:hidden;
  border:1px solid rgba(231,228,223,.95);
  box-shadow:0 34px 90px -55px rgba(11,12,14,.38), inset 0 1px 0 rgba(255,255,255,.55);
}
.pdv-video-wrap{
  position:relative;aspect-ratio:16/9;width:100%;background:#0b0c0e;cursor:pointer;
}
.pdv-video{
  display:block;width:100%;height:100%;object-fit:cover;background:#0b0c0e;
}
.pdv-play{
  position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;
  border:0;cursor:pointer;background:linear-gradient(180deg, rgba(11,12,14,.08) 0%, rgba(11,12,14,.28) 100%);
  transition:background .2s ease;
}
.pdv-play:hover{background:linear-gradient(180deg, rgba(11,12,14,.12) 0%, rgba(11,12,14,.36) 100%)}
.pdv-play-icon{
  width:64px;height:64px;border-radius:999px;display:flex;align-items:center;justify-content:center;
  background:rgba(255,255,255,.96);color:#007fe0;
  box-shadow:0 18px 44px -16px rgba(11,12,14,.45), inset 0 1px 0 rgba(255,255,255,.9);
  transition:transform .2s cubic-bezier(.34,1.56,.64,1), box-shadow .2s ease;
}
.pdv-play:hover .pdv-play-icon{transform:scale(1.06);box-shadow:0 22px 50px -14px rgba(11,12,14,.5), inset 0 1px 0 rgba(255,255,255,.9)}
.pdv-play-icon svg{width:56px;height:56px;display:block}
.pdv-play-label{
  font-family:var(--face);font-size:15px;font-weight:500;letter-spacing:.04em;color:#fff;
  text-shadow:0 1px 8px rgba(11,12,14,.35);
}
.pdv-pause{
  position:absolute;right:16px;bottom:16px;width:40px;height:40px;border:0;border-radius:999px;cursor:pointer;
  display:grid;place-items:center;color:#fff;background:rgba(11,12,14,.55);
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
  border:1px solid rgba(255,255,255,.18);
  opacity:0;transition:opacity .2s ease, background .2s ease;
}
.pdv-video-wrap:hover .pdv-pause,.pdv-pause:focus-visible{opacity:1}
.pdv-pause:hover{background:rgba(11,12,14,.72)}
.pdv-pause svg{width:16px;height:16px}
@media (max-width:600px){
  .pdv-section{padding:96px 18px 54px}
  .pdv-copy{text-align:left}
  .pdv-frame{border-radius:18px}
  .pdv-play-icon{width:60px;height:60px}
  .pdv-play-icon svg{width:48px;height:48px}
  .pdv-play-label{font-size:14px}
  .pdv-pause{opacity:1}
}
@media (prefers-reduced-motion:reduce){
  .pdv-play-icon{transition:none}
}
`;e.s(["ProductDemoSection",0,function(){let e=(0,i.useRef)(null),r=(0,i.useRef)(null),[p,o]=(0,i.useState)(!1),[s,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let a=e.current;if(!a)return;let i=new IntersectionObserver(([e])=>d(e.isIntersecting),{threshold:.15});return i.observe(a),()=>i.disconnect()},[]),(0,i.useEffect)(()=>{let e=r.current;e&&!s&&(e.pause(),o(!1))},[s]);let n=(0,i.useCallback)(async()=>{let e=r.current;if(e)try{await e.play(),o(!0)}catch{}},[]),l=(0,i.useCallback)(()=>{let e=r.current;e&&(e.pause(),o(!1))},[]),c=(0,i.useCallback)(()=>{p?l():n()},[p,n,l]);return(0,a.jsxs)("section",{className:"pdv-section",ref:e,children:[(0,a.jsxs)("div",{className:"pdv-shell",children:[(0,a.jsx)("div",{className:"pdv-copy",children:(0,a.jsx)("span",{className:"pdv-eyebrow",children:"Inside Denta"})}),(0,a.jsx)("div",{className:"pdv-demo",children:(0,a.jsx)("div",{className:"pdv-frame",children:(0,a.jsxs)("div",{className:"pdv-video-wrap",children:[(0,a.jsx)("video",{ref:r,className:"pdv-video",src:"/marketing/denta-demo.mp4",poster:"/marketing/denta-demo-poster.jpg",preload:"metadata",playsInline:!0,onEnded:()=>o(!1),onClick:c}),!p&&(0,a.jsxs)("button",{type:"button",className:"pdv-play",onClick:()=>void n(),"aria-label":"Play product demo",children:[(0,a.jsx)("span",{className:"pdv-play-icon","aria-hidden":"true",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M9 7.5v9l9-4.5-9-4.5Z"})})}),(0,a.jsx)("span",{className:"pdv-play-label",children:"Watch demo"})]}),p&&(0,a.jsx)("button",{type:"button",className:"pdv-pause",onClick:l,"aria-label":"Pause product demo",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M6 5h4v14H6V5Zm8 0h4v14h-4V5Z"})})})]})})})]}),(0,a.jsx)("style",{children:t})]})}])},147544,e=>{e.n(e.i(647784))}]);

//# debugId=36e7a500-419d-ecbe-1839-8ae6975fd7cb