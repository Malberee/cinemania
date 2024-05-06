import{j as o,r as N,u as r,a as l,t as x,h as R,b as d,f as T,i as ct,L as pt,C as ht,B as A,p as xt}from"./index-ab161033.js";const ut=e=>e.trendingMovies.trendingMovies,gt=e=>e.trendingMovies.isLoading;var Te={},E;Object.defineProperty(Te,"__esModule",{value:!0});var w=o,g=N,p=function(){return p=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},p.apply(this,arguments)};function Ge(e,t,n){if(n||arguments.length===2)for(var i,s=0,b=t.length;s<b;s++)!i&&s in t||(i||(i=Array.prototype.slice.call(t,0,s)),i[s]=t[s]);return e.concat(i||Array.prototype.slice.call(t))}function ze(e){var t=e.size,n=t===void 0?25:t,i=e.SVGstrokeColor,s=i===void 0?"currentColor":i,b=e.SVGstorkeWidth,S=b===void 0?0:b,_=e.SVGclassName,c=_===void 0?"star-svg":_,V=e.SVGstyle;return w.jsx("svg",p({className:c,style:V,stroke:s,fill:"currentColor",strokeWidth:S,viewBox:"0 0 24 24",width:n,height:n,xmlns:"http://www.w3.org/2000/svg"},{children:w.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function mt(e,t){switch(t.type){case"PointerMove":return p(p({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return p(p({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return p(p({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}var ft="style-module_starRatingWrap__q-lJC",wt="style-module_simpleStarRating__nWUxf",vt="style-module_fillIcons__6---A",yt="style-module_emptyIcons__Bg-FZ",bt="style-module_tooltip__tKc3i";function We(){return typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0}(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}})(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),E=Te.Rating=function(e){var t,n,i=e.onClick,s=e.onPointerMove,b=e.onPointerEnter,S=e.onPointerLeave,_=e.initialValue,c=_===void 0?0:_,V=e.iconsCount,m=V===void 0?5:V,H=e.size,O=H===void 0?40:H,U=e.readonly,M=U!==void 0&&U,D=e.rtl,I=D!==void 0&&D,Z=e.customIcons,q=Z===void 0?[]:Z,J=e.allowFraction,j=J!==void 0&&J,Ee=e.style,K=e.className,He=K===void 0?"react-simple-star-rating":K,Y=e.transition,Oe=Y!==void 0&&Y,X=e.allowHover,Q=X===void 0||X,ee=e.disableFillHover,te=ee!==void 0&&ee,oe=e.fillIcon,Ue=oe===void 0?null:oe,ie=e.fillColor,De=ie===void 0?"#ffbc0b":ie,ne=e.fillColorArray,Ze=ne===void 0?[]:ne,qe=e.fillStyle,re=e.fillClassName,Je=re===void 0?"filled-icons":re,se=e.emptyIcon,Ke=se===void 0?null:se,ae=e.emptyColor,Ye=ae===void 0?"#cccccc":ae,Xe=e.emptyStyle,le=e.emptyClassName,Qe=le===void 0?"empty-icons":le,de=e.allowTitleTag,et=de===void 0||de,ce=e.showTooltip,tt=ce!==void 0&&ce,pe=e.tooltipDefaultText,ot=pe===void 0?"Your Rate":pe,he=e.tooltipArray,G=he===void 0?[]:he,it=e.tooltipStyle,xe=e.tooltipClassName,nt=xe===void 0?"react-simple-star-rating-tooltip":xe,ue=e.SVGclassName,ge=ue===void 0?"star-svg":ue,me=e.titleSeparator,rt=me===void 0?"out of":me,fe=e.SVGstyle,we=e.SVGstorkeWidth,ve=we===void 0?0:we,ye=e.SVGstrokeColor,be=ye===void 0?"currentColor":ye,je=g.useReducer(mt,{hoverIndex:0,valueIndex:0,ratingValue:c,hoverValue:null}),z=je[0],u=z.ratingValue,h=z.hoverValue,F=z.hoverIndex,ke=z.valueIndex,W=je[1];g.useEffect(function(){c&&W({type:"MouseClick",payload:0})},[c]);var v=g.useMemo(function(){return j?2*m:m},[j,m]),k=g.useMemo(function(){return c>v?0:j||Math.floor(c)===c?Math.round(c/m*100):2*Math.ceil(c)*10},[j,c,m,v]),Ce=g.useMemo(function(){return(j?2*c-1:c-1)||0},[j,c]),C=g.useCallback(function(a){return m%2!=0?a/2/10:a*m/100},[m]),$e=function(a){for(var y=a.clientX,f=a.currentTarget.children[0].getBoundingClientRect(),at=f.left,lt=f.right,dt=f.width,Se=I?lt-y:y-at,B=v,Ve=Math.round(dt/v),L=0;L<=v;L+=1)if(Se<=Ve*L){B=L===0&&Se<Ve?0:L;break}var Ie=B-1;B>0&&(W({type:"PointerMove",payload:100*B/v,index:Ie}),s&&h&&s(C(h),Ie,a))},_e=function(a){h&&(W({type:"MouseClick",payload:h}),i&&i(C(h),F,a))},st=g.useMemo(function(){if(Q){if(te){var a=u&&u||k;return h&&h>a?h:a}return h&&h||u&&u||k}return u&&u||k},[Q,te,h,u,k]);g.useEffect(function(){G.length>v&&console.error("tooltipArray Array length is bigger then Icons Count length.")},[G.length,v]);var Me=g.useCallback(function(a){return h&&a[F]||u&&a[ke]||c&&a[Ce]},[h,F,u,ke,c,Ce]),Le=g.useMemo(function(){return h&&C(h)||u&&C(u)||c&&C(k)},[h,C,u,c,k]);return w.jsxs("span",p({className:ft,style:{direction:"".concat(I?"rtl":"ltr")}},{children:[w.jsxs("span",p({className:"".concat(wt," ").concat(He),style:p({cursor:M?"":"pointer"},Ee),onPointerMove:M?void 0:$e,onPointerEnter:M?void 0:function(a){b&&b(a),We()&&$e(a)},onPointerLeave:M?void 0:function(a){We()&&_e(),W({type:"PointerLeave"}),S&&S(a)},onClick:M?void 0:_e,"aria-hidden":"true"},{children:[w.jsx("span",p({className:"".concat(yt," ").concat(Qe),style:p({color:Ye},Xe)},{children:Ge([],Array(m),!0).map(function(a,y){var f;return w.jsx(g.Fragment,{children:((f=q[y])===null||f===void 0?void 0:f.icon)||Ke||w.jsx(ze,{SVGclassName:ge,SVGstyle:fe,SVGstorkeWidth:ve,SVGstrokeColor:be,size:O})},y)})})),w.jsx("span",p({className:"".concat(vt," ").concat(Je),style:p((t={},t[I?"right":"left"]=0,t.color=Me(Ze)||De,t.transition=Oe?"width .2s ease, color .2s ease":"",t.width="".concat(st,"%"),t),qe),title:et?"".concat(Le," ").concat(rt," ").concat(m):void 0},{children:Ge([],Array(m),!0).map(function(a,y){var f;return w.jsx(g.Fragment,{children:((f=q[y])===null||f===void 0?void 0:f.icon)||Ue||w.jsx(ze,{SVGclassName:ge,SVGstyle:fe,SVGstorkeWidth:ve,SVGstrokeColor:be,size:O})},y)})}))]})),tt&&w.jsx("span",p({className:"".concat(bt," ").concat(nt),style:p((n={},n[I?"marginRight":"marginLeft"]=20,n),it)},{children:(G.length>0?Me(G):Le)||ot}))]}))};const jt=r.li(()=>{const{desktop:e,tablet:t}=d;return l`
    position: relative;

    min-width: 100%;
    height: 406px;

    border-radius: 5px;
    overflow: hidden;

    transition: scale 100ms linear;

    &:hover {
      scale: 1.02;
    }

    img {
      object-fit: cover;
    }

    @media (width >= ${t}) {
      min-width: auto;
      max-width: 224px;
      height: 325px;
    }

    @media (width >= ${e}) {
      max-width: 394px;
      height: 574px;
    }
  `}),kt=r.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 16px 12px;

  color: white;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 63.48%,
    rgba(0, 0, 0, 0.9) 92.16%
  );
`,Be=r.span(()=>{const{desktop:e,tablet:t}=d;return l`
    display: inline-block;
    padding: 0 2px;
    width: 18px;
    height: 14px;

    @media (width >= ${t}) {
      width: 14px;
      height: 10px;
    }

    @media (width >= ${e}) {
      width: 22px;
      height: 18px;
    }
  `}),Ct=r(E)(()=>{const{desktop:e}=d;return l`
    height: 14px;

    @media (width >= ${e}) {
      height: 18px;
    }
  `}),$t=r.div(()=>{const{desktop:e}=d;return l`
    font-size: ${x.mobile.sm}px;
    font-weight: 500;

    @media (width >= ${e}) {
      font-size: ${x.desktop.md}px;
    }
  `}),_t=r.p`
  color: ${R.grey};
  margin-top: 10px;
`,Ae=e=>T(ct).filter(i=>e.includes(i.id)).map(i=>i.name),Ne=()=>o.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M15 6.5H9.625L8 1.5L6.375 6.5H1L5.375 9.5L3.6875 14.5L8 11.375L12.3125 14.5L10.625 9.5L15 6.5Z",stroke:"url(#paint0_linear_148_6946)",strokeLinejoin:"round"}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"paint0_linear_148_6946",x1:"2.71002",y1:"2.42889",x2:"11.9805",y2:"14.8555",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F84119"}),o.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),Re=()=>o.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12.3131 15.0005C12.2079 15.0009 12.1052 14.9681 12.0197 14.9067L8.00064 11.993L3.98158 14.9067C3.89571 14.969 3.79227 15.0024 3.6862 15.002C3.58012 15.0016 3.47692 14.9675 3.39151 14.9046C3.3061 14.8417 3.24291 14.7532 3.21107 14.6521C3.17923 14.5509 3.18039 14.4422 3.21439 14.3417L4.78189 9.69892L0.719389 6.91298C0.631393 6.8527 0.564978 6.76586 0.529849 6.66515C0.49472 6.56444 0.492718 6.45513 0.524134 6.3532C0.555551 6.25127 0.618741 6.16206 0.704471 6.0986C0.790201 6.03514 0.893978 6.00076 1.00064 6.00048H6.01252L7.52501 1.34579C7.5576 1.2453 7.62117 1.15771 7.70662 1.09558C7.79207 1.03346 7.895 1 8.00064 1C8.10628 1 8.20921 1.03346 8.29466 1.09558C8.38011 1.15771 8.44368 1.2453 8.47627 1.34579L9.98876 6.00204H15.0006C15.1074 6.00199 15.2114 6.03613 15.2974 6.09947C15.3834 6.16281 15.4469 6.25201 15.4785 6.35402C15.5101 6.45603 15.5082 6.56548 15.4731 6.66634C15.438 6.76721 15.3716 6.85419 15.2835 6.91454L11.2194 9.69892L12.786 14.3405C12.8113 14.4156 12.8185 14.4957 12.8068 14.5742C12.7951 14.6526 12.7649 14.7272 12.7187 14.7917C12.6725 14.8561 12.6116 14.9087 12.5411 14.945C12.4706 14.9813 12.3925 15.0003 12.3131 15.0005Z",fill:"url(#paint0_linear_148_6941)"}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"paint0_linear_148_6941",x1:"2.33398",y1:"2.00049",x2:"12.334",y2:"15.3338",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F84119"}),o.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),Zt=({movie:e,selectMovie:t})=>{const n=Ae(e.genre_ids),i=new Date(e.release_date).getFullYear();return o.jsx(jt,{tabIndex:0,role:"link",children:o.jsxs("a",{onClick:()=>t(e),children:[o.jsx("img",{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`,alt:""}),o.jsxs(kt,{children:[o.jsxs($t,{children:[o.jsxs("p",{children:[e.title.toUpperCase()," "]}),o.jsxs(_t,{children:[n.slice(0,2).join(", ")," | ",i]})]}),o.jsx(Ct,{initialValue:Math.round(e.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:o.jsx(Be,{children:o.jsx(Re,{})}),emptyIcon:o.jsx(Be,{children:o.jsx(Ne,{})})})]})]})})},Mt=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M17.25 17.25L6.75 6.75M17.25 6.75L6.75 17.25",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Lt=r.div(()=>{const{desktop:e,tablet:t}=d;return l`
    position: relative;
    height: 380px;
    overflow: hidden;

    @media (width >= ${t}) {
      height: 432px;
    }

    @media (width >= ${e}) {
      height: 720px;
    }
  `}),St=r.img(()=>{const{desktop:e,tablet:t}=d;return l`
    position: absolute;
    left: 50px;
    object-fit: cover;
    height: 100%;

    @media (width >= ${t}) {
      left: 100px;
    }

    @media (width >= ${e}) {
      left: 180px;
    }
  `}),Vt=r.div(()=>{const{desktop:e,tablet:t}=d;return l`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    padding: 40px 0;

    background: linear-gradient(82deg, #111 28.7%, transparent 100%);

    @media (width >= ${t}) {
      padding: 36px 0;
    }

    @media (width >= ${e}) {
      padding: 118px 0;
    }
  `}),It=r.h2(()=>{const{desktop:e,tablet:t}=d;return l`
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 32px;
    color: ${R.white};

    @media (width >= ${t}) {
      font-size: 44px;
    }

    @media (width >= ${e}) {
      font-size: ${x.desktop.xl}px;
    }
  `}),Gt=r(E)(()=>{const{desktop:e,tablet:t}=d;return l`
    height: 16px;
    margin-bottom: 16px;

    @media (width >= ${t}) {
      height: 20px;
      margin-bottom: 20px;
    }

    @media (width >= ${e}) {
      height: 24px;
      margin-bottom: 28px;
    }
  `}),Fe=r.span(()=>{const{desktop:e,tablet:t}=d;return l`
    display: inline-block;
    height: 16px;
    width: 20px;
    padding: 0 2px;

    @media (width >= ${t}) {
      height: 20px;
      width: 24px;
    }

    @media (width >= ${e}) {
      height: 24px;
      width: 28px;
    }
  `}),zt=r.p(()=>{const{desktop:e,tablet:t}=d;return l`
    width: 177px;
    margin-bottom: 20px;
    font-size: ${x.mobile.md}px;
    color: ${R.white};

    @media (width >= ${t}) {
      width: 254px;
      margin-bottom: 28px;
    }

    @media (width >= ${e}) {
      width: 367px;
      margin-bottom: 36px;
      font-size: ${x.desktop.sm}px;
    }
  `}),Wt=r.div`
  display: flex;
  gap: 8px;
`,qt=N.memo(({openModal:e})=>{const t=T(ut),n=T(gt),i=t[0];return o.jsx(Lt,{children:n&&o.jsx(pt,{})||i&&o.jsxs(o.Fragment,{children:[o.jsx(St,{src:`https://image.tmdb.org/t/p/original/${i.backdrop_path}`}),o.jsx(Vt,{children:o.jsxs(ht,{children:[o.jsx(It,{children:i.title}),o.jsx(Gt,{initialValue:Math.round(i.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:o.jsx(Fe,{children:o.jsx(Re,{})}),emptyIcon:o.jsx(Fe,{children:o.jsx(Ne,{})})}),o.jsxs(zt,{children:[i.overview.split(" ").slice(0,25).join(" "),".."]}),o.jsxs(Wt,{children:[o.jsx(A,{children:"Watch trailer"}),o.jsx(A,{$isBordered:!0,$isColorless:!0,onClick:()=>e(i),children:"More details"})]})]})})]})})}),Bt=r.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 20px;

  background-color: ${({theme:e})=>e.colors.backdrop};
  backdrop-filter: blur(2px);
  overflow-y: auto;

  @media (width >= 768px) {
    padding: 32px;
  }
`,Ft=r.div(()=>{const{desktop:e,tablet:t}=d;return l`
    position: relative;
    width: 280px;
    margin: auto;
    padding: 52px 16px;
    border-radius: 16px;
    background-color: ${({theme:n})=>n.colors.background};

    @media (width >= ${t}) {
      width: 704px;
      padding: 44px;
    }

    @media (width >= ${e}) {
      width: 846px;
      padding: 60px;
    }
  `}),Pt=r.button(()=>{const{desktop:e,tablet:t}=d;return l`
    position: absolute;
    top: 20px;
    right: 16px;

    width: 24px;
    height: 24px;
    padding: 0;

    border: none;
    background-color: transparent;
    color: ${({theme:n})=>n.colors.secondaryText};

    transition: color 100ms linear;

    &:hover {
      color: ${({theme:n})=>n.colors.accent};
      cursor: pointer;
    }

    @media (width >= ${t}) {
      top: 24px;
      right: 24px;
    }

    @media (width >= ${e}) {
      top: 40px;
      right: 40px;
    }
  `}),Tt=document.getElementById("modal-root"),Jt=({children:e,onClose:t})=>{const n=i=>{i.target===i.currentTarget&&t()};return N.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]),xt.createPortal(o.jsx(Bt,{onClick:n,children:o.jsxs(Ft,{children:[o.jsx(Pt,{onClick:t,children:o.jsx(Mt,{})}),e]})}),Tt)},At=r.div(()=>{const{tablet:e}=d;return l`
    font-weight: 500;

    @media (width >= ${e}) {
      display: flex;
      gap: 16px;
    }
  `}),Nt=r.img(()=>{const{desktop:e,tablet:t}=d;return l`
    height: 315px;
    margin-bottom: 22px;
    border-radius: 5px;
    object-fit: cover;

    @media (width >= ${t}) {
      height: 400px;
      min-width: 294px;
      margin-bottom: 0;
    }

    @media (width >= ${e}) {
      min-width: 375px;
      height: 478px;
    }
  `}),Rt=r.h2(({theme:e})=>{const{tablet:t}=d;return l`
    margin-bottom: 29px;
    font-size: ${x.mobile.lg}px;
    color: ${e.colors.text};

    @media (width >= ${t}) {
      margin-bottom: 26px;
      font-size: ${x.tablet.lg}px;
    }
  `}),Et=r.ul(()=>{const{desktop:e}=d;return l`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    font-size: ${x.mobile.md}px;

    @media (width >= ${e}) {
      font-size: ${x.desktop.sm}px;
    }
  `}),P=r.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,$=r.p`
  flex: 1;
  color: ${({theme:e,color:t})=>e.colors[t==="white"?"text":t]};
`,Ht=r.h3(({theme:e})=>{const{desktop:t}=d;return l`
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: ${x.mobile.md}px;
    color: ${e.colors.grey};

    @media (width >= ${t}) {
      font-size: ${x.desktop.sm}px;
    }
  `}),Ot=r.p(({theme:e})=>{const{desktop:t}=d;return l`
    margin-bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    font-size: ${x.mobile.sm}px;
    color: ${e.colors.secondaryText};

    @media (width >= ${t}) {
      font-size: ${x.desktop.xs}px;
    }
  `}),Ut=r.span`
  padding: 1px 4px;
  background-color: ${({theme:e})=>e.colors.voteSpanBackground};
  color: ${({theme:e})=>e.colors.secondaryBlack};
  border-radius: 5px;
`,Pe=({children:e})=>o.jsx(Ut,{children:e}),Kt=({movie:e})=>{const t=Ae(e.genre_ids).join(" ");return o.jsxs(At,{children:[o.jsx(Nt,{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`}),o.jsxs("div",{children:[o.jsx(Rt,{children:e.title}),o.jsxs(Et,{children:[o.jsxs(P,{children:[o.jsx($,{color:"grey",children:"Vote / Votes"}),o.jsxs($,{color:"grey",children:[o.jsx(Pe,{children:e.vote_average.toFixed(1)})," /"," ",o.jsx(Pe,{children:e.vote_count})]})]}),o.jsxs(P,{children:[o.jsx($,{color:"grey",children:"Popularity"}),o.jsx($,{color:"white",children:e.popularity.toFixed(1)})]}),o.jsxs(P,{children:[o.jsx($,{color:"grey",children:"Genre"}),o.jsx($,{color:"white",children:t})]})]}),o.jsx(Ht,{children:"About"}),o.jsx(Ot,{children:e.overview}),o.jsx(A,{$isBordered:!0,children:"Add to library"})]})]})};export{Mt as C,qt as H,Zt as M,Pe as V,Jt as a,Kt as b,gt as c,ut as s,Ae as u};
