"use strict";(self.webpackChunkthe_helper=self.webpackChunkthe_helper||[]).push([[218],{8633:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var n=i(5785),r=i(7294),a=i(2788),s=i(3951),o=i(3208);const h=2*Math.PI;var l=function(){function t(t){let{x:e,y:i,radius:n,rgb:r}=t;this.x=e,this.y=i,this.radius=n,this.rgb=r,this.vx=4*Math.random(),this.vy=4*Math.random(),this.sinValue=Math.random()}return t.prototype.animate=function(t,e,i){this.sinValue+=.01,this.radius+=Math.sin(this.sinValue),this.x+=this.vx,this.y+=this.vy,this.x<0?(this.vx*=-1,this.x+=10):this.x>e&&(this.vx*=-1,this.x-=10),this.y<0?(this.vy*=-1,this.y+=10):this.y>i&&(this.vy*=-1,this.y-=10),t.beginPath();const n=t.createRadialGradient(this.x,this.y,.01*this.radius,this.x,this.y,this.radius);n.addColorStop(0,"rgba("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+", 1)"),n.addColorStop(1,"rgba("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+", 0)"),t.fillStyle=n,t.arc(this.x,this.y,this.radius,0,h,!1),t.fill()},t}();const c=[{r:255,g:149,b:0},{r:255,g:45,b:85},{r:175,g:82,b:222},{r:255,g:59,b:48},{r:255,g:204,b:0}],d=a.default.main.withConfig({displayName:"sc-404__Container",componentId:"sc-1j4z72t-0"})(["position:fixed;width:100%;height:100%;background-color:rgb(255,45,85);"]),u=a.default.div.withConfig({displayName:"sc-404__Divider",componentId:"sc-1j4z72t-1"})(["width:100%;height:4px;margin:1rem 0 1.5rem 0;background-color:rgba(255,255,255,0.5);"]),m=a.default.div.withConfig({displayName:"sc-404__TitleWrap",componentId:"sc-1j4z72t-2"})(["position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:1;"]),f=a.default.h1.withConfig({displayName:"sc-404__Title",componentId:"sc-1j4z72t-3"})(["color:white;font-size:8rem;"]),g=a.default.h2.withConfig({displayName:"sc-404__Desc",componentId:"sc-1j4z72t-4"})(["color:white;font-size:2.5rem;"]),b=a.default.canvas.withConfig({displayName:"sc-404__Canvas",componentId:"sc-1j4z72t-5"})(["position:fixed;top:0;left:0;width:100%;height:100%;"]);var p=()=>{const t=(0,r.useRef)(null),{0:e,1:i}=(0,r.useState)([]),a=(0,r.useRef)(!1),h=(0,r.useRef)();return(0,r.useLayoutEffect)((()=>{const r=t.current,s=null==r?void 0:r.getContext("2d");let o=document.body.clientWidth,d=document.body.clientHeight;const u=window.devicePixelRatio>1?2:1,m=Math.max(Math.floor(o/3),600),f=Math.max(Math.floor(o/5),300),g=()=>{null==s||s.clearRect(0,0,o,d);for(let t=0;t<5;t++){const i=e[t];if(!i||!s)return;i.animate(s,o,d)}h.current=requestAnimationFrame(g)},b=()=>{o=document.body.clientWidth,d=document.body.clientHeight,r&&(r.width=o*u,r.height=d*u,s&&(s.scale(u,u),s.globalCompositeOperation="saturation",s.clearRect(0,0,o,d),a.current=!0,(()=>{let t=0;i([]);for(let e=0;e<5;e++){const e=new l({x:Math.random()*o,y:Math.random()*d,radius:Math.random()*(m-f)+f,rgb:c[t]});++t>=c.length&&(t=0),i((t=>[].concat((0,n.Z)(t),[e])))}})()))};return a.current?g():b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),h.current&&window.cancelAnimationFrame(h.current)}})),r.createElement(o.Z,null,r.createElement(s.Z,{title:"Not found"}),r.createElement(d,null,r.createElement(m,null,r.createElement(f,null,"404"),r.createElement(u,null),r.createElement(g,null,"Page not found")),r.createElement(b,{ref:t})))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-80297c42c7391d3c9372.js.map