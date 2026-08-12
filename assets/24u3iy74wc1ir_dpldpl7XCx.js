;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="688d9961-cf35-27be-628a-215ee60eb6db")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,446967,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},359287,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={assign:function(){return s},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return l}};for(var n in o)Object.defineProperty(a,n,{enumerable:!0,get:o[n]});function r(e){let t={};for(let[a,o]of e.entries()){let e=t[a];void 0===e?t[a]=o:Array.isArray(e)?e.push(o):t[a]=[e,o]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[a,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(a,i(e));else t.set(a,i(o));return t}function s(e,...t){for(let a of t){for(let t of a.keys())e.delete(t);for(let[t,o]of a.entries())e.append(t,o)}return e}},303273,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return y},NormalizeError:function(){return x},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return r},execOnce:function(){return i},getDisplayName:function(){return p},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return u},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return k}};for(var n in o)Object.defineProperty(a,n,{enumerable:!0,get:o[n]});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,a=!1;return(...o)=>(a||(a=!0,t=e(...o)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function d(){let{protocol:e,hostname:t,port:a}=window.location;return`${e}//${t}${a?":"+a:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let a=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(a&&u(a))return o;if(!o)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return o}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class x extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}},388521,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={callServer:function(){return r.callServer},createServerReference:function(){return l.createServerReference},findSourceMapURL:function(){return i.findSourceMapURL}};for(var n in o)Object.defineProperty(a,n,{enumerable:!0,get:o[n]});let r=e.r(375174),i=e.r(517828),l=e.r(20625)},496628,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=e.r(640363);function n(e,t){let a=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=a.current;e&&(a.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(a.current=r(e,o)),t&&(n.current=r(t,o))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},656156,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={formatUrl:function(){return l},formatWithValidation:function(){return d},urlObjectKeys:function(){return s}};for(var n in o)Object.defineProperty(a,n,{enumerable:!0,get:o[n]});let r=e.r(744066)._(e.r(359287)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:a}=e,o=e.protocol||"",n=e.pathname||"",l=e.hash||"",s=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:a&&(d=t+(~a.indexOf(":")?`[${a}]`:a),e.port&&(d+=":"+e.port)),s&&"object"==typeof s&&(s=String(r.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||i.test(o))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${o}${d}${n}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return l(e)}},622150,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return r}});let o=e.r(303273),n=e.r(53879);function r(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),a=new URL(e,t);return a.origin===t&&(0,n.hasBasePath)(a.pathname)}catch(e){return!1}}},133639,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},984149,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={default:function(){return b},useLinkStatus:function(){return v}};for(var n in o)Object.defineProperty(a,n,{enumerable:!0,get:o[n]});let r=e.r(744066),i=e.r(304351),l=r._(e.r(640363)),s=e.r(656156),d=e.r(451757),c=e.r(496628),p=e.r(303273),u=e.r(619386);e.r(446967);let f=e.r(407642),h=e.r(135036),m=e.r(622150),g=e.r(80638);function b(t){var a,o;let n,r,b,[v,y]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,l.useRef)(null),{href:k,as:j,children:z,prefetch:N=null,passHref:P,replace:S,shallow:_,scroll:O,onClick:T,onMouseEnter:C,onTouchStart:E,legacyBehavior:R=!1,onNavigate:A,transitionTypes:I,ref:L,unstable_dynamicOnHover:M,...D}=t;n=z,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let U=l.default.useContext(d.AppRouterContext),W=!1!==N,$=!1!==N?null===(o=N)||"auto"===o?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,B="string"==typeof(a=j||k)?a:(0,s.formatUrl)(a);if(R){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=l.default.Children.only(n)}let F=R?r&&"object"==typeof r&&r.ref:L,Y=l.default.useCallback(e=>(null!==U&&(w.current=(0,h.mountLinkInstance)(e,B,U,$,W,y)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[W,B,U,$,y]),X={ref:(0,c.useMergedRef)(Y,F),onClick(t){R||"function"!=typeof T||T(t),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!U||t.defaultPrevented||function(t,a,o,n,r,i,s){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(a)){n&&(t.preventDefault(),location.replace(a));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(928532);l.default.startTransition(()=>{p(a,n?"replace":"push",!1===r?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,o.current,s)})}}(t,B,w,S,O,A,I)},onMouseEnter(e){R||"function"!=typeof C||C(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),U&&W&&(0,h.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){R||"function"!=typeof E||E(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),U&&W&&(0,h.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,p.isAbsoluteUrl)(B)?X.href=B:R&&!P&&("a"!==r.type||"href"in r.props)||(X.href=(0,u.addBasePath)(B)),b=R?l.default.cloneElement(r,X):(0,i.jsx)("a",{...D,...X,children:n}),(0,i.jsx)(x.Provider,{value:v,children:b})}e.r(133639);let x=(0,l.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,l.useContext)(x);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},845279,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let o=e.r(757518);function n({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new o.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},270313,(e,t,a)=>{"use strict";function o(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"encodeURIPath",{enumerable:!0,get:function(){return o}})},960007,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"PreloadChunks",{enumerable:!0,get:function(){return s}});let o=e.r(304351),n=e.r(849403),r=e.r(703750),i=e.r(270313),l=e.r(517932);function s({moduleIds:e}){if("u">typeof window)return null;let t=r.workAsyncStorage.getStore();if(void 0===t)return null;let a=[];if(t.reactLoadableManifest&&e){let o=t.reactLoadableManifest;for(let t of e){if(!o[t])continue;let e=o[t].files;a.push(...e)}}if(0===a.length)return null;let d=(0,l.getAssetTokenQuery)();return(0,o.jsx)(o.Fragment,{children:a.map(e=>{let a=`${t.assetPrefix}/_next/${(0,i.encodeURIPath)(e)}${d}`;return e.endsWith(".css")?(0,o.jsx)("link",{precedence:"dynamic",href:a,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,n.preload)(a,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},617851,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return d}});let o=e.r(304351),n=e.r(640363),r=e.r(845279),i=e.r(960007);function l(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},d=function(e){let t={...s,...e},a=(0,n.lazy)(()=>t.loader().then(l)),d=t.loading;function c(e){let l=d?(0,o.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,s=!t.ssr||!!t.loading,c=s?n.Suspense:n.Fragment,p=t.ssr?(0,o.jsxs)(o.Fragment,{children:["u"<typeof window?(0,o.jsx)(i.PreloadChunks,{moduleIds:t.modules}):null,(0,o.jsx)(a,{...e})]}):(0,o.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(a,{...e})});return(0,o.jsx)(c,{...s?{fallback:l}:{},children:p})}return c.displayName="LoadableComponent",c}},350863,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return n}});let o=e.r(481258)._(e.r(617851));function n(e,t){let a={};"function"==typeof e&&(a.loader=e);let n={...a,...t};return(0,o.default)({...n,modules:n.loadableGenerated?.modules})}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},204576,e=>{"use strict";var t=e.i(304351),a=e.i(350863),o=e.i(640363),n=e.i(984149),r=e.i(73719);function i({children:e,rootMargin:a="160px 0px",minHeight:n}){let r=(0,o.useRef)(null),[l,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(l)return;let e=r.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e?.isIntersecting&&(s(!0),t.disconnect())},{rootMargin:a});return t.observe(e),()=>t.disconnect()},[l,a]),(0,t.jsx)("div",{ref:r,style:l||null==n?void 0:{minHeight:n},children:l?e:null})}var l=e.i(388521);let s=(0,l.createServerReference)("605b29eeb4e1ea903881a6f77d2893c8c28186cbaf",l.callServer,void 0,l.findSourceMapURL,"captureEmailLead"),d=(0,a.default)(()=>e.A(248202).then(e=>({default:e.AssembleViz})),{loadableGenerated:{modules:[70521]},ssr:!1}),c=(0,a.default)(()=>e.A(717635).then(e=>({default:e.ProductDemoSection})),{loadableGenerated:{modules:[147544]},ssr:!1}),p="/work-with-us",u={vision:"Your practice on autopilot",service:"How we do it",about:"We are building the dental practice that runs itself",blog:"Blog"},f={vision:[["December 8, 1903 — The New York Times proclaimed:",""],["Man won’t fly for a million years.","italic"],["December 17, 1903 — Wilbur and Orville Wright flew a plane.",""],["Two kids from the midwest, with no institutional backing, beat everyone else in a race to fly.",""],["While rivals courted the press and threw money at the problem, the Wright brothers tinkered in their bike shop with a wind tunnel to invent the future.",""],["At Denta, we believe the breakthroughs in AI won’t just happen where the money is being burned. They will happen slowly as critical institutions across the United States rewire their infrastructure.",""],["To help, we built the practice management software dentists kept asking us for: the one that’s invisible.",""],["Work with us","workcta"]],service:[["Phase 1: Combining your fragmented data","phase"],["We ingest your company’s policies, connect to your various softwares, and store all of your data in one foundational layer.",""],["Phase 2: Understanding your company’s systems","phase"],["We realize that a majority of the intelligence that governs your company doesn’t exist in code. It exists in the minds of your team members. We fly out to your practice, break bread, and meet with each of the core members on your team.",""],["Phase 3: Implementation","phase"],["With your data and company context, we implement Denta to solve for the most pressing problem preventing your practice’s growth. We build and stay in contact with your team until this bottleneck is solved for. Slowly, your systems will be automated into the background.",""],["Work with us","workcta"]],about:[["Denta","phase"],["We are a research lab working hands on with dental practices to solve their most pressing problems. The dream of AI is customizable software that runs itself. We help dental practices create it.",""],["Careers","phase"],["We are always scouting for elite engineers to join our team. If you want to work hard and rewrite the DNA of the dental economy, contact careers@agentfm.co","contact"],["Working with us","phase"],["If it makes sense to work together, we will meet with your team on-site to understand your operational workflows and smoothly migrate you over to Denta.",""],["Work with us","workcta"]]},h=`
.dl-page{
  --face:var(--font-eb-garamond),"EB Garamond",Georgia,serif;
  --col:min(760px,88%);
  --dl-blue:#38B6FF;
  --dl-blue-hover:#2aa0ef;
  position:relative;min-height:100dvh;width:100%;
  background:#fff;color:#0b0c0e;
  -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;
}
.dl-page *{box-sizing:border-box;margin:0;padding:0}
/* full-bleed: the card fills the whole viewport — no surrounding surface,
   border, radius, or shadow. Internal padding keeps content off the edges. */
.dl-card{
  position:relative;width:100%;height:100dvh;
  background:#fff;
  overflow:hidden;
  display:grid;grid-template-rows:1fr auto;
  /* extra top padding reserves space for the fixed nav bar */
  padding:clamp(78px,9vh,104px) clamp(22px,2.2vw,32px) clamp(18px,1.8vw,26px);
}

/* background: warm paper canvas with a faint technical dot-grid, no photo */
.dl-bg{position:absolute;inset:0;z-index:0;pointer-events:none;background:#faf8f6}
.dl-dots{
  position:absolute;inset:0;
  background-image:radial-gradient(rgba(11,12,14,.1) 1.2px, transparent 1.2px);
  background-size:24px 24px;
  /* fade the dots out toward the bottom so the page resolves to clean paper */
  -webkit-mask-image:linear-gradient(180deg, #000 0%, #000 45%, rgba(0,0,0,0) 85%);
  mask-image:linear-gradient(180deg, #000 0%, #000 45%, rgba(0,0,0,0) 85%);
}
/* (glow layer kept in markup but neutralized for the warm-paper look) */
.dl-glow{position:absolute;inset:0;background:none}
.dl-top,.dl-stage,.dl-foot{position:relative;z-index:1}

/* divider band BELOW the hero: 4 thin warm-grey bars, each lighter than the last,
   separated by warm-paper gaps, resolving into the warm-paper page below. */
.dl-stripes{
  position:relative;width:100%;background:#fff;
  display:flex;flex-direction:column;gap:1px;
}
.dl-bar{display:block;width:100%;height:4px}

/* white page below the divider */
.dl-page2{display:block;width:100%;background:#fff}

/* ===== section 2: graphic (left) + text block (right) ===== */
.dl-s2{
  min-height:100dvh;display:grid;align-items:center;
  grid-template-columns:1fr 1fr;gap:clamp(24px,3vw,48px);
  /* slightly less top padding so the whole block sits a touch higher */
  padding:clamp(24px,4vh,56px) clamp(24px,5vw,72px) clamp(40px,7vh,80px);
}
/* push the animation toward center (right); text stays left */
.dl-s2-left{display:flex;align-items:center;justify-content:flex-end;padding-right:0;margin-right:clamp(-60px,-4vw,0px)}
.dl-s2-right{display:flex;align-items:center}
.dl-s2-block{max-width:560px}
.dl-s2-lead{display:flex;flex-direction:column;gap:18px;margin-bottom:28px}
.dl-s2-lead p{font-family:var(--face);font-size:18px;line-height:1.5;color:#565a62;font-weight:400}
.dl-s2-statement{
  font-family:var(--face);font-weight:400;font-size:clamp(30px,3.8vw,48px);
  line-height:1.08;letter-spacing:-.027em;color:#0b0c0e;
}

/* left-side "Assemble" animation: a 300x600 framed canvas (dots merge -> ball ->
   foundation -> automation bars) + a Phase 1/2/3 control below it */
.dl-asm{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;gap:18px;contain:layout style;isolation:isolate}
.dl-asm-frame{
  position:relative;width:clamp(320px,30vw,400px);max-width:100%;aspect-ratio:300/600;
  background:transparent;contain:paint;transform:translateZ(0);
}
.dl-asm-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none}

/* phase control: glass pill with a sliding white thumb over the active segment */
.dl-asm-phases{
  position:relative;display:grid;grid-template-columns:repeat(3,1fr);align-items:center;
  /* the 1:2 frame has empty space below the animation; pull the control up so it
     sits just under the visible bars/ball */
  margin-top:-150px;
  width:clamp(280px,26vw,340px);padding:4px;border-radius:999px;
  background:linear-gradient(135deg, rgba(224,242,255,.85), rgba(255,255,255,.92));
  border:1px solid rgba(255,255,255,.85);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.85), 0 4px 16px -8px rgba(11,12,14,.18);
}
.dl-asm-thumb{
  position:absolute;top:4px;bottom:4px;left:4px;width:calc((100% - 8px)/3);
  background:#fff;border-radius:999px;
  box-shadow:0 1px 3px rgba(11,12,14,.16), inset 0 1px 0 rgba(255,255,255,.9);
  transform:translateX(0);
  transition:transform .42s cubic-bezier(.16,.84,.32,1);
}
.dl-asm-phases[data-active="1"] .dl-asm-thumb{transform:translateX(100%)}
.dl-asm-phases[data-active="2"] .dl-asm-thumb{transform:translateX(200%)}
.dl-asm-pbtn{
  position:relative;z-index:1;padding:8px 6px;text-align:center;cursor:pointer;
  background:none;border:0;border-radius:999px;
  font-family:var(--font-ibm-mono),ui-monospace,monospace;
  font-size:11px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#767b84;
  transition:color .25s cubic-bezier(.2,.6,.2,1);
}
.dl-asm-pbtn:hover{color:#0b0c0e}
.dl-asm-phases[data-active="0"] .dl-asm-pbtn:nth-child(2),
.dl-asm-phases[data-active="1"] .dl-asm-pbtn:nth-child(3),
.dl-asm-phases[data-active="2"] .dl-asm-pbtn:nth-child(4){color:#0b0c0e}
/* caption layer fills the frame; each caption is anchored just above its phase's
   visual (ball sits high, foundation low, bars mid) so none float too far away */
.dl-asm-caps{position:absolute;inset:0;padding:0 7%;z-index:2;pointer-events:none}
/* all three phases share one TOP-fixed position, so the caption's top edge stays
   put and longer (wrapping) captions grow downward. The ball/animation starts low
   enough (ballY in assemble-viz) that Phase 01 never overlaps it */
.dl-asm-cap{position:absolute;left:7%;right:7%;top:27%;text-align:center;opacity:0}
.dl-asm-ph{display:block;font-family:var(--font-ibm-mono),ui-monospace,monospace;font-size:12px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#b3b8bf;margin-bottom:9px}
.dl-asm-ln{font-family:var(--face);font-size:21px;font-weight:400;letter-spacing:.005em;color:#16181a;line-height:1.34}

@media (max-width:860px){
  .dl-s2{grid-template-columns:1fr;gap:48px;text-align:left}
  .dl-s2-right{justify-content:flex-start}
}
@media (prefers-reduced-motion:reduce){
  .dl-agent,.dl-spark,.dl-viz-layer span{animation:none !important}
}

/* top bar: Denta (L) === Vision | Services | About | Blog (C) */
/* floating glossy nav bar: FIXED to the top of the viewport (stays on scroll),
   inset from the edges, frosted glass, centered + capped on huge screens */
.dl-top{
  position:fixed;z-index:50;
  top:clamp(12px,1.6vw,20px);left:12px;right:12px;
  margin-inline:auto;max-width:1480px;
  display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:16px;
  padding:12px clamp(18px,2vw,28px);border-radius:16px;
  background:linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.92));
  border:1px solid rgba(231,228,223,.9);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.85), 0 8px 30px -16px rgba(11,12,14,.18);
}
.dl-ui{font-family:var(--face);font-size:22px;font-weight:500;letter-spacing:.005em;color:#0b0c0e;line-height:1}
.dl-wordmark{justify-self:start;display:flex;align-items:center;background:none;border:0;cursor:pointer;padding:0}
.dl-wordmark-img{height:28px;width:auto;display:block}
/* Vision \xb7 About — centered, plain text with a hairline divider; active item
   underlined. Nudged down 1px to sit on the wordmark's baseline. */
.dl-nav{justify-self:center;display:inline-flex;align-items:baseline;gap:8px;transform:translateY(1px)}
.dl-nav-sep{color:#c3c6cc;font-size:18px;line-height:1}
.dl-nav-link{
  font-family:var(--face);font-size:18px;font-weight:500;letter-spacing:.005em;color:#34373d;cursor:pointer;
  padding:2px 2px;border:0;background:none;line-height:1;
  transition:color .18s cubic-bezier(.2,.6,.2,1);
}
.dl-nav-link:hover{color:var(--dl-blue)}
.dl-nav-link.is-active{color:#0b0c0e;text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1px}
.dl-top-actions{justify-self:end;display:inline-flex;align-items:center;gap:12px}
.dl-demo-cta{
  display:inline-flex;align-items:center;font-family:var(--face);font-size:14px;font-weight:500;
  letter-spacing:.005em;color:#fff;text-decoration:none;background:var(--dl-blue);
  padding:8px 16px;border-radius:999px;white-space:nowrap;
  box-shadow:0 6px 18px -10px rgba(56,182,255,.45), inset 0 1px 0 rgba(255,255,255,.18);
  transition:background .18s,transform .18s,box-shadow .18s;
}
.dl-demo-cta:hover{background:var(--dl-blue-hover);transform:translateY(-1px)}
/* Log in — quiet text action; demo pill is the only filled control in the bar */
.dl-login{
  display:inline-flex;align-items:center;font-family:var(--face);font-size:16px;font-weight:500;
  letter-spacing:.005em;color:#34373d;text-decoration:none;background:none;padding:8px 4px;
  transition:color .18s cubic-bezier(.2,.6,.2,1);
}
.dl-login:hover{color:var(--dl-blue)}

/* center stage */
.dl-stage{position:relative}
.dl-col{position:absolute;inset:0;text-align:left}

/* headline travels center -> top -> left. Rise first (head-y), then slide left (head-x). */
.dl-head-y{
  position:absolute;left:0;right:0;top:33%;
  transform:translateY(-50%);
  transition:top .62s cubic-bezier(.16,.84,.32,1), transform .62s cubic-bezier(.16,.84,.32,1);
}
.dl-head-x{
  position:relative;display:inline-block;left:50%;max-width:min(1100px,92vw);text-align:left;
  transform:translateX(-50%);
  transition:left .58s cubic-bezier(.16,.84,.32,1), transform .58s cubic-bezier(.16,.84,.32,1);
}
/* home hero: stack headline and subhead centered */
.dl-col:not(.is-expanded) .dl-head-x{
  display:flex;flex-direction:column;align-items:center;text-align:center;
}
.dl-head{
  display:inline-block;font-family:var(--face);font-weight:400;letter-spacing:-.02em;color:#0b0c0e;
  /* big centered home claim — shrink eased in lockstep with the rise. The low
     floor lets the vw term keep scaling on phones so the claim never wraps. */
  font-size:clamp(18px,5.4vw,68px);line-height:1.1;
  transition:font-size .62s cubic-bezier(.16,.84,.32,1);
}
/* home claim stays a single centered line at every width (scales via 5.4vw).
   Scoped to the home state so expanded section headings can still wrap. */
.dl-col:not(.is-expanded) .dl-head{white-space:nowrap}
/* subheader under the centered claim */
.dl-subhead{
  position:relative;top:auto;margin-top:clamp(14px,2vh,20px);left:auto;right:auto;text-align:center;
  font-family:var(--font-ibm-mono),ui-monospace,monospace;
  font-size:14px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#767b84;
  opacity:1;transition:opacity .4s ease;
}
.dl-col.is-expanded .dl-subhead{opacity:0;transition:opacity .25s ease}
/* expanded targets. Headline rises (.12s), then slides left (.6s). Copy cuts in immediately. */
.dl-col.is-expanded .dl-head-y{top:20px;transform:translateY(0);transition:top .62s cubic-bezier(.16,.84,.32,1) .12s, transform .62s cubic-bezier(.16,.84,.32,1) .12s}
.dl-col.is-expanded .dl-head-x{left:calc(50% - var(--col)/2);transform:translateX(0);transition:left .58s cubic-bezier(.16,.84,.32,1) .6s, transform .58s cubic-bezier(.16,.84,.32,1) .6s}
/* section headlines shrink to the smaller size IN LOCKSTEP with the rise (same
   .62s / .12s delay as head-y), so the size change flows with the upward motion */
.dl-col.is-expanded .dl-head{font-size:clamp(28px,3.2vw,38px);line-height:1.25;transition:font-size .62s cubic-bezier(.16,.84,.32,1) .12s}

/* section paragraphs — left aligned, visible immediately (no staged fade) */
.dl-body{
  position:absolute;left:calc(50% - var(--col)/2);width:var(--col);top:104px;bottom:84px;
  display:flex;flex-direction:column;gap:13px;
  overflow-y:auto;-webkit-overflow-scrolling:touch;
  /* fade the top/bottom edges so long (Service) content scrolls cleanly */
  -webkit-mask-image:linear-gradient(180deg, transparent 0, #000 14px, #000 calc(100% - 18px), transparent 100%);
  mask-image:linear-gradient(180deg, transparent 0, #000 14px, #000 calc(100% - 18px), transparent 100%);
}
.dl-body p{
  margin:0;font-family:var(--face);font-size:18px;line-height:1.5;color:#34373d;text-align:left;
}
.dl-body p.dl-b-strong{color:#0b0c0e;font-weight:600}
.dl-body p.dl-b-italic{font-style:italic;color:#0b0c0e}
/* phase / section eyebrow headings + inline-email contact lines */
.dl-b-contact{
  margin:0;font-family:var(--face);font-size:18px;line-height:1.5;color:#565a62;
}
.dl-b-contact a{color:#0b0c0e;font-weight:600;text-decoration:none}
.dl-b-contact a:hover{color:var(--dl-blue)}
/* Work with us — primary inline CTA at the end of each section */
.dl-b-workcta{
  align-self:flex-start;display:inline-flex;align-items:center;gap:8px;margin-top:14px;
  font-family:var(--face);font-size:19px;font-weight:600;color:#0b0c0e;text-decoration:none;
  border-bottom:1px solid var(--dl-blue);padding-bottom:2px;
  transition:color .15s;
}
.dl-b-workcta span{font-size:16px}
.dl-b-workcta:hover{color:var(--dl-blue)}
/* Blog section — date + title rows, same column as Vision/About copy */
.dl-blog-list{list-style:none;margin:0;padding:0;width:100%}
.dl-blog-row{border-top:1px solid #e7e4df}
.dl-blog-row:last-child{border-bottom:1px solid #e7e4df}
.dl-blog-link{
  display:flex;flex-direction:column;gap:5px;padding:16px 0;
  text-decoration:none;color:inherit;
}
.dl-blog-link:hover .dl-blog-title{color:var(--dl-blue)}
.dl-blog-meta{
  display:flex;flex-wrap:wrap;align-items:baseline;gap:0 .4em;
  font-family:var(--face);font-size:14px;font-weight:400;color:#767b84;letter-spacing:.01em;
}
.dl-blog-meta-sep{color:#c3c6cc}
.dl-blog-author{color:#565a62}
.dl-blog-date{font:inherit;color:inherit}
.dl-blog-title{
  font-family:var(--face);font-size:20px;font-weight:500;letter-spacing:-.01em;
  line-height:1.3;color:#0b0c0e;transition:color .18s;
}
.dl-b-phase{
  margin-top:12px;font-family:var(--font-ibm-mono),ui-monospace,monospace;font-size:12px;font-weight:500;
  letter-spacing:.08em;text-transform:uppercase;color:#0b0c0e;
}
.dl-b-cta{
  display:flex;align-items:baseline;gap:10px;margin-top:4px;
}
.dl-b-cta span{font-family:var(--face);font-size:18px;color:#565a62}
.dl-b-cta a{
  font-family:var(--face);font-size:18px;font-weight:600;color:#0b0c0e;text-decoration:none;
  border-bottom:1px solid var(--dl-blue);padding-bottom:1px;transition:color .15s;
}
.dl-b-cta a:hover{color:var(--dl-blue)}

/* bottom: locator sits bottom-right so the centered glass capture bar owns the middle */
.dl-foot{display:flex;align-items:flex-end;justify-content:flex-end}
.dl-locator{font-family:var(--face);font-size:14px;font-weight:400;letter-spacing:.02em;color:#767b84;line-height:1;white-space:nowrap}
.dl-dot{padding:0 .5em;color:#9a9ea7}

/* home: small "liquid glass" badge, bottom-left, soft Denta-blue tint (#e0f2ff).
   Adapted from the dark reference for a light page: dark text, present blue,
   heavier blur + more transparency, glossy sheen via inset highlights + glow. */
.dl-badge{
  /* anchored bottom-left of the hero. Absolutely positioned within the hero card;
     the bottom inset clears the centered locator that sits in the foot row below. */
  position:absolute;z-index:6;
  left:clamp(16px,10vw,140px);bottom:clamp(30px,4vh,40px);
  width:min(395px, calc(100vw - 32px));min-height:178px;
  border-radius:14px;padding:22px;isolation:isolate;
  display:flex;flex-direction:column;justify-content:flex-start;gap:10px;
  /* more glass: thinner tint so the photo shows through, lighter blur, and a
     diagonal gloss sheen layered on top via ::before */
  background:rgba(255,255,255,.01);
  -webkit-backdrop-filter:blur(10px) saturate(125%);backdrop-filter:blur(10px) saturate(125%);
  border:1px solid rgba(255,255,255,.35);
  box-shadow:0 26px 60px -34px rgba(11,12,14,.34), inset 0 1px 1px rgba(255,255,255,.55), inset 0 -1px 1px rgba(255,255,255,.08);
  animation:dl-rise .6s cubic-bezier(.16,.84,.32,1) both;
}
/* glossy diagonal highlight sweeping across the top-left */
.dl-badge::before{
  content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:1;
  background:linear-gradient(135deg, rgba(255,255,255,.5) 0%, rgba(255,255,255,.12) 22%, rgba(255,255,255,0) 46%);
  mix-blend-mode:screen;
}
.dl-badge::after{
  content:"";position:absolute;inset:0;border-radius:inherit;z-index:-1;pointer-events:none;
  background:radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,.35), rgba(255,255,255,0) 60%);
}
.dl-badge-title,.dl-badge p{position:relative;z-index:2}
.dl-badge-title{position:relative;z-index:2;font-family:var(--face);font-size:24px;font-weight:600;line-height:1.15;letter-spacing:-.01em;color:#0b0c0e}
.dl-badge p{position:relative;z-index:2;font-family:var(--face);font-size:18px;line-height:1.45;color:#1c1e22}
.dl-badge-cta{
  position:relative;z-index:2;align-self:flex-start;display:inline-flex;align-items:center;gap:8px;margin-top:4px;
  background:none;border:0;cursor:pointer;
  font-family:var(--face);font-size:17px;font-weight:600;color:#0b0c0e;
  border-bottom:1px solid var(--dl-blue);padding:0 0 2px;transition:color .15s;
}
.dl-badge-cta span{font-size:15px}
.dl-badge-cta:hover{color:var(--dl-blue)}

/* On short or narrow viewports the badge shouldn't reserve a tall min-height. */
@media (max-height:640px), (max-width:560px){
  .dl-badge{min-height:0}
}
@keyframes dl-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}

/* ===== phones (≤600px): keep the single-row nav from overflowing, stop the
   badge clipping the screen edge, and collapse section 2's forced full height
   into a content-tall block. Purely additive — desktop composition unchanged. */
@media (max-width:600px){
  /* hero becomes a flex column: the claim fills the middle, the badge drops into
     flow at the bottom-left, the locator below it. The card grows past the viewport
     only when the badge wouldn't fit, so on short screens you scroll a little to
     reach it instead of it overlapping anything. */
  .dl-card{padding:clamp(62px,10vh,84px) 18px 44px;height:auto;min-height:100dvh;display:flex;flex-direction:column;justify-content:center}
  /* expanded section view keeps the tall stage so the scrolling copy has room */
  .dl-stage{flex:1 1 auto;min-height:48dvh}
  /* home view: the claim + badge are a tight group, centered together, so tall
     screens get balanced breathing room instead of a void between them. */
  .dl-stage:not(.is-expanded){flex:0 0 auto;min-height:0;height:clamp(260px,38dvh,340px)}
  .dl-col:not(.is-expanded) .dl-head-y{top:50%}
  /* locator pinned to the bottom, out of the centered group */
  .dl-foot{position:absolute;left:0;right:0;bottom:clamp(14px,2.4vh,20px)}

  /* nav: shrink type + gaps so the bar never clips on narrow screens */
  .dl-top{top:8px;left:8px;right:8px;gap:8px;padding:9px 12px;border-radius:13px}
  .dl-wordmark-img{height:20px}
  .dl-nav{gap:5px;transform:none}
  .dl-nav-link{font-size:13px;padding:2px 1px}
  .dl-nav-sep{font-size:12px}
  .dl-top-actions{gap:8px}
  .dl-demo-cta{font-size:12px;padding:6px 11px}
  .dl-login{font-size:13px;padding:6px 2px;white-space:nowrap}

  /* badge stays a glass card over the hero dots, anchored left and shrinking with
     the viewport. position:static drops it into the flex column below the claim, so
     it sits bottom-left of the hero and never overlaps the claim or locator. */
  .dl-badge{
    position:static;align-self:flex-start;z-index:auto;
    left:auto;top:auto;bottom:auto;transform:none;
    width:clamp(240px,82vw,360px);min-height:0;
    margin:0 0 14px 16px;padding:18px;border-radius:13px;gap:9px;
  }
  .dl-badge-title{font-size:clamp(18px,5vw,22px)}
  .dl-badge p{font-size:clamp(14px,4vw,16px);line-height:1.4}

  /* expanded sections scroll with the PAGE, not inside a fixed box: the stage,
     column and body all flow and grow, so copy that doesn't fit just makes the
     page taller and you scroll down for the rest. The headline sits at the top of
     the flowing column. */
  .dl-stage.is-expanded{display:block;height:auto;min-height:100dvh}
  .dl-col.is-expanded{position:relative;inset:auto;width:var(--col);margin:0 auto}
  .dl-col.is-expanded .dl-head-y{position:relative;top:auto;left:auto;right:auto;transform:none;margin-top:6px}
  .dl-col.is-expanded .dl-head-x{position:relative;left:auto;transform:none;display:block;max-width:100%}
  .dl-stage.is-expanded .dl-body{
    position:relative;left:auto;top:auto;bottom:auto;width:100%;height:auto;gap:11px;
    overflow:visible;-webkit-mask-image:none;mask-image:none;margin-top:16px;padding-bottom:28px;
  }
  .dl-body p,.dl-b-contact{font-size:17px}

  /* section 2: drop the forced 100dvh + oversized canvas so the block is
     content-tall instead of a screen of whitespace; center + scale the viz */
  .dl-s2{min-height:auto;padding:36px 22px 52px;gap:4px}
  .dl-s2-left{margin-right:0;justify-content:center}
  .dl-asm{gap:10px}
  .dl-asm-frame{width:min(300px,82vw)}
  .dl-asm-phases{width:min(280px,80vw);margin-top:-120px}
  .dl-s2-lead p{font-size:16px}
  .dl-s2-statement{font-size:clamp(26px,7vw,32px)}
}

/* narrow phones (≤480px): the badge reads as nearly full-width, so center it
   horizontally instead of left-anchoring it (which looks lopsided at this size). */
@media (max-width:480px){
  .dl-badge{align-self:center;margin-left:0;margin-right:0}
}

@media (prefers-reduced-motion: reduce){
  .dl-head-y,.dl-head-x,.dl-head,.dl-b-cta{transition:none !important;animation:none !important}
}

/* bottom CTA — large closing block, warm editorial (matches hero / paper theme) */
.dl-cta-foot{
  position:relative;text-align:center;overflow:hidden;
  padding:clamp(72px,11vh,112px) clamp(22px,5vw,76px) clamp(80px,12vh,120px);
  background:#faf8f6;border-top:1px solid #eee8df;
}
.dl-cta-foot::before{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:0;
  background-image:radial-gradient(rgba(11,12,14,.09) 1.2px, transparent 1.2px);
  background-size:24px 24px;
  -webkit-mask-image:linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%);
  mask-image:linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%);
}
.dl-cta-foot-title,.dl-cta-foot-actions{position:relative;z-index:1}
.dl-cta-foot-title{
  font-family:var(--face);font-weight:400;font-size:clamp(34px,4.2vw,52px);
  line-height:1.06;letter-spacing:-.028em;color:#0b0c0e;margin:0 0 clamp(24px,3vh,32px);
}
.dl-cta-foot-actions{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:12px}
.dl-cta-foot-primary,.dl-cta-foot-secondary{
  display:inline-flex;align-items:center;justify-content:center;min-width:148px;
  padding:13px 28px;border-radius:999px;font-family:var(--face);font-size:17px;font-weight:500;
  letter-spacing:.005em;text-decoration:none;transition:background .2s ease,color .2s ease,border-color .2s ease,transform .2s ease,box-shadow .2s ease;
}
.dl-cta-foot-primary{
  color:#fff;background:#0b0c0e;border:1px solid #0b0c0e;
  box-shadow:0 14px 36px -18px rgba(11,12,14,.32);
}
.dl-cta-foot-primary:hover{background:#34373d;border-color:#34373d;transform:translateY(-1px)}
.dl-cta-foot-secondary{
  color:#0b0c0e;background:rgba(255,255,255,.42);border:1px solid rgba(231,228,223,.95);
  -webkit-backdrop-filter:blur(10px) saturate(125%);backdrop-filter:blur(10px) saturate(125%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.65), 0 10px 28px -18px rgba(11,12,14,.14);
}
.dl-cta-foot-secondary:hover{
  background:rgba(255,255,255,.62);border-color:#c3c6cc;transform:translateY(-1px);
}
@media (max-width:480px){
  .dl-cta-foot-actions{flex-direction:column;width:100%;max-width:320px;margin:0 auto}
  .dl-cta-foot-primary,.dl-cta-foot-secondary{width:100%;min-width:0}
}

/* ===== bottom glass email-capture bar ===== */
/* fixed, centered, frosted-glass pill: an Email bubble + a brand-blue Sign up
   button. Persists across scroll; fades out when the closing footer CTA shows. */
.dl-capture{
  position:fixed;z-index:45;left:50%;bottom:clamp(20px,3vh,30px);
  transform:translateX(-50%);
  display:flex;align-items:center;gap:6px;
  padding:6px 6px 6px 8px;border-radius:999px;
  background:linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.92));
  border:1px solid rgba(231,228,223,.9);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.85), 0 18px 44px -22px rgba(11,12,14,.32);
  transition:opacity .3s ease, transform .3s ease;
}
.dl-capture.is-hidden{opacity:0;pointer-events:none;transform:translateX(-50%) translateY(14px)}
.dl-capture-input{
  border:0;background:transparent;outline:none;
  font-family:var(--face);font-size:16px;color:#0b0c0e;
  padding:9px 14px;width:clamp(150px,26vw,230px);
}
.dl-capture-input::placeholder{color:#767b84}
.dl-capture-btn{
  border:0;cursor:pointer;white-space:nowrap;
  font-family:var(--face);font-size:15px;font-weight:600;letter-spacing:.005em;color:#fff;
  background:var(--dl-blue);padding:10px 22px;border-radius:999px;
  box-shadow:0 8px 20px -10px rgba(56,182,255,.5), inset 0 1px 0 rgba(255,255,255,.2);
  transition:background .18s ease, transform .18s ease;
}
.dl-capture-btn:hover{background:var(--dl-blue-hover);transform:translateY(-1px)}
.dl-capture-btn:active{transform:translateY(0)}

@media (max-width:600px){
  /* full-width bar across the bottom; hide the tiny hero locator it would cover */
  .dl-capture{left:12px;right:12px;bottom:12px;transform:none;padding:5px 5px 5px 6px}
  .dl-capture.is-hidden{transform:translateY(14px)}
  .dl-capture-input{flex:1 1 auto;width:auto;min-width:0;font-size:15px;padding:9px 12px}
  .dl-capture-btn{font-size:14px;padding:9px 16px}
  .dl-foot{display:none}
}
`;e.s(["LandingCard",0,function({posts:e,initialView:a}){let l=(0,r.useRouter)(),[m,g]=(0,o.useState)(""),[b,x]=(0,o.useState)(!1),v=(0,o.useRef)(null),y=async e=>{e.preventDefault();let t=m.trim(),a=e.currentTarget.elements.namedItem("company_website")?.value??"";if(t)try{await s(t,a)}catch{}l.push(t?`${p}?email=${encodeURIComponent(t)}`:p)};(0,o.useEffect)(()=>{let e=v.current;if(!e)return;let t=new IntersectionObserver(([e])=>x(e.isIntersecting),{rootMargin:"0px 0px -10% 0px"});return t.observe(e),()=>t.disconnect()},[]);let[w,k]=(0,o.useState)(()=>a&&a in u?a:"home"),j=()=>{window.scrollTo({top:0,behavior:"smooth"})},z=e=>{if(j(),e===w){k("home"),"blog"===w&&l.replace("/",{scroll:!1});return}k(e),"blog"===e?l.replace("/?view=blog",{scroll:!1}):"blog"===w&&l.replace("/",{scroll:!1})},N="home"!==w,P=N?u[w]:"Your practice on autopilot";return(0,t.jsxs)("div",{className:"dl-page",children:[(0,t.jsxs)("div",{className:"dl-card",children:[(0,t.jsxs)("div",{className:"dl-bg",children:[(0,t.jsx)("div",{className:"dl-dots"}),(0,t.jsx)("div",{className:"dl-glow"})]}),(0,t.jsxs)("div",{className:"dl-top",children:[(0,t.jsx)("button",{type:"button",className:"dl-wordmark",onClick:()=>{j(),k("home"),"blog"===w&&l.replace("/",{scroll:!1})},"aria-label":"Denta home",children:(0,t.jsx)("img",{src:"/brand/logo-horizontal-home.png",alt:"Denta",className:"dl-wordmark-img"})}),(0,t.jsxs)("nav",{className:"dl-nav dl-ui",children:[(0,t.jsx)("button",{className:"dl-nav-link"+("vision"===w?" is-active":""),onClick:()=>z("vision"),children:"Vision"}),(0,t.jsx)("span",{className:"dl-nav-sep","aria-hidden":"true",children:"|"}),(0,t.jsx)("button",{className:"dl-nav-link"+("service"===w?" is-active":""),onClick:()=>z("service"),children:"Services"}),(0,t.jsx)("span",{className:"dl-nav-sep","aria-hidden":"true",children:"|"}),(0,t.jsx)("button",{className:"dl-nav-link"+("about"===w?" is-active":""),onClick:()=>z("about"),children:"About"}),(0,t.jsx)("span",{className:"dl-nav-sep","aria-hidden":"true",children:"|"}),(0,t.jsx)("button",{className:"dl-nav-link"+("blog"===w?" is-active":""),onClick:()=>z("blog"),children:"Blog"})]}),(0,t.jsxs)("div",{className:"dl-top-actions",children:[(0,t.jsx)(n.default,{className:"dl-demo-cta",href:p,children:"Request a demo"}),(0,t.jsx)(n.default,{className:"dl-login",href:"/login",children:"Log in"})]})]}),(0,t.jsx)("div",{className:"dl-stage"+(N?" is-expanded":""),children:(0,t.jsxs)("div",{className:"dl-col"+(N?" is-expanded":""),children:[(0,t.jsx)("div",{className:"dl-head-y",children:(0,t.jsxs)("div",{className:"dl-head-x",children:[(0,t.jsx)("span",{className:"dl-head",children:P}),(0,t.jsx)("span",{className:"dl-subhead","aria-hidden":N,children:"The first system to automate your back office"})]})}),N&&(0,t.jsx)("div",{className:"dl-body",children:"blog"===w?(0,t.jsx)("ul",{className:"dl-blog-list",children:e.map(e=>{var a;return(0,t.jsx)("li",{className:"dl-blog-row",children:(0,t.jsxs)(n.default,{href:`/${e.slug}`,className:"dl-blog-link",children:[(0,t.jsxs)("span",{className:"dl-blog-meta",children:[(0,t.jsx)("time",{className:"dl-blog-date",dateTime:e.date,children:(a=e.date,new Date(`${a.slice(0,10)}T12:00:00`).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}))}),e.author?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"dl-blog-meta-sep","aria-hidden":"true",children:"·"}),(0,t.jsx)("span",{className:"dl-blog-author",children:e.author})]}):null]}),(0,t.jsx)("span",{className:"dl-blog-title",children:e.title})]})},e.slug)})}):f[w].map(([e,a],o)=>{let n,r,i;return"phase"===a?(0,t.jsx)("h3",{className:"dl-b-phase",children:e},o):"workcta"===a?(0,t.jsxs)("a",{className:"dl-b-workcta",href:p,children:[e," ",(0,t.jsx)("span",{"aria-hidden":"true",children:"→"})]},o):"contact"===a?(n=e.match(/([\w.+-]+@[\w.-]+\.\w+)/),i=(r=n?.[1])?e.slice(0,e.indexOf(r)):e,(0,t.jsxs)("p",{className:"dl-b-contact",children:[i,r&&(0,t.jsx)("a",{href:`mailto:${r}`,children:r})]},o)):(0,t.jsx)("p",{className:a?"dl-b-"+a:"",children:e},o)})},w)]})}),!N&&(0,t.jsxs)("div",{className:"dl-badge",children:[(0,t.jsx)("h2",{className:"dl-badge-title",children:"Automating the Dental Economy"}),(0,t.jsx)("p",{children:"We are embedding AI Engineers into dental organizations to pioneer how artificial intelligence is used in enterprise healthcare."}),(0,t.jsxs)("a",{className:"dl-badge-cta",href:p,children:["Work with us ",(0,t.jsx)("span",{"aria-hidden":"true",children:"→"})]})]}),(0,t.jsx)("div",{className:"dl-foot",children:(0,t.jsxs)("span",{className:"dl-locator",children:["San Francisco",(0,t.jsx)("span",{className:"dl-dot",children:"·"}),"Denta Inc."]})})]}),(0,t.jsxs)("div",{className:"dl-stripes","aria-hidden":"true",children:[(0,t.jsx)("span",{className:"dl-bar",style:{background:"#e7e4df"}}),(0,t.jsx)("span",{className:"dl-bar",style:{background:"#eeebe6"}}),(0,t.jsx)("span",{className:"dl-bar",style:{background:"#f4f1ed"}}),(0,t.jsx)("span",{className:"dl-bar",style:{background:"#f8f6f3"}})]}),(0,t.jsx)("section",{className:"dl-page2",children:(0,t.jsxs)("div",{className:"dl-s2",children:[(0,t.jsx)("div",{className:"dl-s2-left",children:(0,t.jsx)(d,{})}),(0,t.jsx)("div",{className:"dl-s2-right",children:(0,t.jsxs)("div",{className:"dl-s2-block",children:[(0,t.jsxs)("div",{className:"dl-s2-lead",children:[(0,t.jsx)("p",{children:"We envision a world where operating a company involves talking to people, not computers. Denta’s automations exist in the background, governing your organization with complete context of your unique data and systems."}),(0,t.jsx)("p",{children:"It’s time to forget about software."})]}),(0,t.jsx)("h2",{className:"dl-s2-statement",children:"Custom AI built on the context of your practice"})]})})]})}),(0,t.jsx)("style",{children:h}),(0,t.jsx)(i,{minHeight:"720px",children:(0,t.jsx)(c,{})}),(0,t.jsxs)("footer",{ref:v,className:"dl-cta-foot",children:[(0,t.jsx)("h2",{className:"dl-cta-foot-title",children:"Ready to go paperless?"}),(0,t.jsxs)("div",{className:"dl-cta-foot-actions",children:[(0,t.jsx)(n.default,{className:"dl-cta-foot-primary",href:p,children:"Try Denta"}),(0,t.jsx)(n.default,{className:"dl-cta-foot-secondary",href:p,children:"Book a call"})]})]}),(0,t.jsxs)("form",{className:"dl-capture"+(b?" is-hidden":""),onSubmit:y,"aria-label":"Sign up for a demo",children:[(0,t.jsx)("input",{type:"text",name:"company_website",tabIndex:-1,autoComplete:"off","aria-hidden":"true",style:{position:"absolute",left:"-9999px",width:1,height:1,opacity:0}}),(0,t.jsx)("input",{className:"dl-capture-input",type:"email",inputMode:"email",autoComplete:"email",placeholder:"Email","aria-label":"Email",maxLength:254,value:m,onChange:e=>g(e.target.value)}),(0,t.jsx)("button",{className:"dl-capture-btn",type:"submit",children:"Sign up"})]})]})}],204576)},248202,e=>{e.v(t=>Promise.all(["static/chunks/3zz_p3ks303lu.js"].map(t=>e.l(t))).then(()=>t(70521)))},717635,e=>{e.v(t=>Promise.all(["static/chunks/3-rfw982qy_iz.js"].map(t=>e.l(t))).then(()=>t(147544)))}]);

//# debugId=688d9961-cf35-27be-628a-215ee60eb6db