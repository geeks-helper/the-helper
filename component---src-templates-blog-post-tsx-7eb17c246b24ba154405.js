"use strict";(self.webpackChunkthe_helper=self.webpackChunkthe_helper||[]).push([[7],{5604:function(e,t,n){var l=n(7294),i=n(9261),a=n(3009),r=n(5951);const o="https://utteranc.es",m="github-light",s="github-dark",c=()=>{var e;const t=(0,a.Z)(),{repo:n}=null!==(e=t.utterances)&&void 0!==e?e:{repo:void 0},c=(0,l.useContext)(r.Z),d=(0,l.useRef)(null),g=(0,l.useRef)(!1);return(0,l.useEffect)((()=>{var e;if(!n)return;let t;t=g.current?c===i.P?s:m:document.body.dataset.theme===i.P?s:m;const l=null===(e=d.current)||void 0===e?void 0:e.querySelector("iframe.utterances-frame");g.current?(()=>{var e;if(!l)return;const n={type:"set-theme",theme:t};null==l||null===(e=l.contentWindow)||void 0===e||e.postMessage(n,o)})():(()=>{var e;const n=document.createElement("script"),l={src:o+"/client.js",repo:"geeks-helper/the-helper-comment","issue-term":"url",label:"comment",theme:t,crossOrigin:"anonymous",async:"true"};Object.entries(l).forEach((e=>{let[t,l]=e;n.setAttribute(t,l)})),null===(e=d.current)||void 0===e||e.appendChild(n),g.current=!0})()}),[n,c]),l.createElement("div",{ref:d})};c.displayName="comment",t.Z=c},2307:function(e,t,n){const l=n(2788).default.span.withConfig({displayName:"category__Category",componentId:"sc-wcpv1v-0"})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);"]);t.Z=l},3247:function(e,t,n){const l=n(2788).default.time.withConfig({displayName:"dateTime__DateTime",componentId:"sc-105pimp-0"})(["margin-top:12px;font-size:0.875rem;font-weight:var(--font-weight-regular);color:var(--color-text-3);"]);t.Z=l},140:function(e,t,n){n.r(t);var l=n(7294),i=n(2788),a=n(5604),r=n(3951),o=n(3208),m=n(2307),s=n(3247),c=n(1153),d=n(8709);const g=i.default.div.withConfig({displayName:"blogPost__OuterWrapper",componentId:"sc-lg2p7l-0"})(["margin-top:var(--sizing-xl);@media (max-width:","){margin-top:var(--sizing-lg);}"],(e=>{let{theme:t}=e;return t.device.sm})),u=i.default.div.withConfig({displayName:"blogPost__InnerWrapper",componentId:"sc-lg2p7l-1"})(["width:var(--post-width);margin:0 auto;padding-bottom:var(--sizing-lg);@media (max-width:","){width:87.5%;}"],(e=>{let{theme:t}=e;return t.device.sm})),h=i.default.section.withConfig({displayName:"blogPost__CommentWrap",componentId:"sc-lg2p7l-2"})(["width:100%;padding:0 var(--padding-sm);margin:0 auto;margin-bottom:var(--sizing-xl);@media (max-width:","){width:auto;}"],(e=>{let{theme:t}=e;return t.device.sm})),p=(0,i.default)(m.Z).withConfig({displayName:"blogPost__PostCategory",componentId:"sc-lg2p7l-3"})(["font-size:0.875rem;font-weight:var(--font-weight-semi-bold);"]),f=i.default.div.withConfig({displayName:"blogPost__Info",componentId:"sc-lg2p7l-4"})(["margin-bottom:var(--sizing-md);"]),v=(0,i.default)(s.Z).withConfig({displayName:"blogPost__Time",componentId:"sc-lg2p7l-5"})(["display:block;margin-top:var(--sizing-xs);"]),w=i.default.p.withConfig({displayName:"blogPost__Desc",componentId:"sc-lg2p7l-6"})(["margin-top:var(--sizing-lg);line-height:1.5;font-size:var(--text-lg);@media (max-width:","){line-height:1.31579;font-size:1.1875rem;}"],(e=>{let{theme:t}=e;return t.device.sm})),b=i.default.div.withConfig({displayName:"blogPost__Divider",componentId:"sc-lg2p7l-7"})(["width:100%;height:1px;background-color:var(--color-gray-3);margin-top:var(--sizing-lg);margin-bottom:var(--sizing-lg);"]),y=i.default.h1.withConfig({displayName:"blogPost__Title",componentId:"sc-lg2p7l-8"})(["font-weight:var(--font-weight-bold);line-height:1.1875;font-size:var(--text-xl);@media (max-width:","){line-height:1.21875;font-size:2.5rem;}@media (max-width:","){line-height:1.21875;font-size:2rem;}"],(e=>{let{theme:t}=e;return t.device.md}),(e=>{let{theme:t}=e;return t.device.sm}));t.default=e=>{var t;let{data:n}=e;const{markdownRemark:i}=n,{frontmatter:m,html:s}=i,{title:_,desc:E,thumbnail:C,date:x,category:z}=m,I=C&&(null==C||null===(t=C.childImageSharp)||void 0===t?void 0:t.gatsbyImageData.images.fallback.src);return l.createElement(o.Z,null,l.createElement(r.Z,{title:_,desc:E,image:I}),l.createElement("main",null,l.createElement("article",null,l.createElement(g,null,l.createElement(u,null,l.createElement("div",null,l.createElement("header",null,l.createElement(f,null,l.createElement(p,null,z),l.createElement(v,{dateTime:x},x)),l.createElement(y,null,_),l.createElement(w,null,E)),l.createElement(b,null),l.createElement(c.Z,{dangerouslySetInnerHTML:{__html:null!=s?s:""},rhythm:d.q}))))),l.createElement(h,null,l.createElement(a.Z,null))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-7eb17c246b24ba154405.js.map