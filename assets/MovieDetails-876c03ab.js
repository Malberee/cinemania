import{j as t,r as lt,u as c,t as f,k as dt,b as ze,d as ct,a as F,f as pt,h as ut,B as ht,_ as Me,l as xt}from"./index-91566caa.js";const Rt=e=>e.movies.entities,Ft=e=>e.movies.totalPages,gt=e=>e.movies.genres,Tt=e=>e.movies.isLoading;var Ne={},Re;Object.defineProperty(Ne,"__esModule",{value:!0});var m=t,h=lt,l=function(){return l=Object.assign||function(e){for(var o,s=1,i=arguments.length;s<i;s++)for(var r in o=arguments[s])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},l.apply(this,arguments)};function Ve(e,o,s){if(s||arguments.length===2)for(var i,r=0,p=o.length;r<p;r++)!i&&r in o||(i||(i=Array.prototype.slice.call(o,0,r)),i[r]=o[r]);return e.concat(i||Array.prototype.slice.call(o))}function Ie(e){var o=e.size,s=o===void 0?25:o,i=e.SVGstrokeColor,r=i===void 0?"currentColor":i,p=e.SVGstorkeWidth,b=p===void 0?0:p,w=e.SVGclassName,a=w===void 0?"star-svg":w,M=e.SVGstyle;return m.jsx("svg",l({className:a,style:M,stroke:r,fill:"currentColor",strokeWidth:b,viewBox:"0 0 24 24",width:s,height:s,xmlns:"http://www.w3.org/2000/svg"},{children:m.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function mt(e,o){switch(o.type){case"PointerMove":return l(l({},e),{hoverValue:o.payload,hoverIndex:o.index});case"PointerLeave":return l(l({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return l(l({},e),{valueIndex:e.hoverIndex,ratingValue:o.payload});default:return e}}var ft="style-module_starRatingWrap__q-lJC",yt="style-module_simpleStarRating__nWUxf",vt="style-module_fillIcons__6---A",wt="style-module_emptyIcons__Bg-FZ",bt="style-module_tooltip__tKc3i";function Ge(){return typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0}(function(e,o){o===void 0&&(o={});var s=o.insertAt;if(e&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",s==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}})(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),Re=Ne.Rating=function(e){var o,s,i=e.onClick,r=e.onPointerMove,p=e.onPointerEnter,b=e.onPointerLeave,w=e.initialValue,a=w===void 0?0:w,M=e.iconsCount,x=M===void 0?5:M,W=e.size,B=W===void 0?40:W,E=e.readonly,S=E!==void 0&&E,U=e.rtl,V=U!==void 0&&U,H=e.customIcons,O=H===void 0?[]:H,D=e.allowFraction,j=D!==void 0&&D,We=e.style,Z=e.className,Be=Z===void 0?"react-simple-star-rating":Z,Y=e.transition,Ee=Y!==void 0&&Y,q=e.allowHover,J=q===void 0||q,K=e.disableFillHover,X=K!==void 0&&K,Q=e.fillIcon,Ue=Q===void 0?null:Q,ee=e.fillColor,He=ee===void 0?"#ffbc0b":ee,te=e.fillColorArray,Oe=te===void 0?[]:te,De=e.fillStyle,oe=e.fillClassName,Ze=oe===void 0?"filled-icons":oe,ie=e.emptyIcon,Ye=ie===void 0?null:ie,re=e.emptyColor,qe=re===void 0?"#cccccc":re,Je=e.emptyStyle,ne=e.emptyClassName,Ke=ne===void 0?"empty-icons":ne,se=e.allowTitleTag,Xe=se===void 0||se,ae=e.showTooltip,Qe=ae!==void 0&&ae,le=e.tooltipDefaultText,et=le===void 0?"Your Rate":le,de=e.tooltipArray,I=de===void 0?[]:de,tt=e.tooltipStyle,ce=e.tooltipClassName,ot=ce===void 0?"react-simple-star-rating-tooltip":ce,pe=e.SVGclassName,ue=pe===void 0?"star-svg":pe,he=e.titleSeparator,it=he===void 0?"out of":he,xe=e.SVGstyle,ge=e.SVGstorkeWidth,me=ge===void 0?0:ge,fe=e.SVGstrokeColor,ye=fe===void 0?"currentColor":fe,ve=h.useReducer(mt,{hoverIndex:0,valueIndex:0,ratingValue:a,hoverValue:null}),G=ve[0],u=G.ratingValue,d=G.hoverValue,N=G.hoverIndex,we=G.valueIndex,A=ve[1];h.useEffect(function(){a&&A({type:"MouseClick",payload:0})},[a]);var y=h.useMemo(function(){return j?2*x:x},[j,x]),C=h.useMemo(function(){return a>y?0:j||Math.floor(a)===a?Math.round(a/x*100):2*Math.ceil(a)*10},[j,a,x,y]),be=h.useMemo(function(){return(j?2*a-1:a-1)||0},[j,a]),_=h.useCallback(function(n){return x%2!=0?n/2/10:n*x/100},[x]),je=function(n){for(var v=n.clientX,g=n.currentTarget.children[0].getBoundingClientRect(),nt=g.left,st=g.right,at=g.width,Se=V?st-v:v-nt,P=y,$e=Math.round(at/y),$=0;$<=y;$+=1)if(Se<=$e*$){P=$===0&&Se<$e?0:$;break}var Le=P-1;P>0&&(A({type:"PointerMove",payload:100*P/y,index:Le}),r&&d&&r(_(d),Le,n))},Ce=function(n){d&&(A({type:"MouseClick",payload:d}),i&&i(_(d),N,n))},rt=h.useMemo(function(){if(J){if(X){var n=u&&u||C;return d&&d>n?d:n}return d&&d||u&&u||C}return u&&u||C},[J,X,d,u,C]);h.useEffect(function(){I.length>y&&console.error("tooltipArray Array length is bigger then Icons Count length.")},[I.length,y]);var _e=h.useCallback(function(n){return d&&n[N]||u&&n[we]||a&&n[be]},[d,N,u,we,a,be]),ke=h.useMemo(function(){return d&&_(d)||u&&_(u)||a&&_(C)},[d,_,u,a,C]);return m.jsxs("span",l({className:ft,style:{direction:"".concat(V?"rtl":"ltr")}},{children:[m.jsxs("span",l({className:"".concat(yt," ").concat(Be),style:l({cursor:S?"":"pointer"},We),onPointerMove:S?void 0:je,onPointerEnter:S?void 0:function(n){p&&p(n),Ge()&&je(n)},onPointerLeave:S?void 0:function(n){Ge()&&Ce(),A({type:"PointerLeave"}),b&&b(n)},onClick:S?void 0:Ce,"aria-hidden":"true"},{children:[m.jsx("span",l({className:"".concat(wt," ").concat(Ke),style:l({color:qe},Je)},{children:Ve([],Array(x),!0).map(function(n,v){var g;return m.jsx(h.Fragment,{children:((g=O[v])===null||g===void 0?void 0:g.icon)||Ye||m.jsx(Ie,{SVGclassName:ue,SVGstyle:xe,SVGstorkeWidth:me,SVGstrokeColor:ye,size:B})},v)})})),m.jsx("span",l({className:"".concat(vt," ").concat(Ze),style:l((o={},o[V?"right":"left"]=0,o.color=_e(Oe)||He,o.transition=Ee?"width .2s ease, color .2s ease":"",o.width="".concat(rt,"%"),o),De),title:Xe?"".concat(ke," ").concat(it," ").concat(x):void 0},{children:Ve([],Array(x),!0).map(function(n,v){var g;return m.jsx(h.Fragment,{children:((g=O[v])===null||g===void 0?void 0:g.icon)||Ue||m.jsx(Ie,{SVGclassName:ue,SVGstyle:xe,SVGstorkeWidth:me,SVGstrokeColor:ye,size:B})},v)})}))]})),Qe&&m.jsx("span",l({className:"".concat(bt," ").concat(ot),style:l((s={},s[V?"marginRight":"marginLeft"]=20,s),tt)},{children:(I.length>0?_e(I):ke)||et}))]}))};const{desktop:z,tablet:Fe}=ze,jt=c.li`
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

  @media (width >= ${Fe}) {
    min-width: auto;
    max-width: 224px;
    height: 325px;
  }

  @media (width >= ${z}) {
    max-width: 394px;
    height: 574px;
  }
`,Ct=c.div`
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
`,Ae=c.span`
  display: inline-block;
  padding: 0 2px;
  width: 18px;
  height: 14px;

  @media (width >= ${Fe}) {
    width: 14px;
    height: 10px;
  }

  @media (width >= ${z}) {
    width: 22px;
    height: 18px;
  }
`,_t=c(Re)`
  height: 14px;

  @media (width >= ${z}) {
    height: 18px;
  }
`,kt=c.div`
  font-size: ${f.mobile.sm}px;
  font-weight: 500;

  @media (width >= ${z}) {
    font-size: ${f.desktop.md}px;
  }
`,St=c.p`
  color: ${dt.grey};
  margin-top: 10px;
`,Te=e=>ct(gt).filter(i=>e.includes(i.id)).map(i=>i.name),$t=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M15 6.5H9.625L8 1.5L6.375 6.5H1L5.375 9.5L3.6875 14.5L8 11.375L12.3125 14.5L10.625 9.5L15 6.5Z",stroke:"url(#paint0_linear_148_6946)",strokeLinejoin:"round"}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:"paint0_linear_148_6946",x1:"2.71002",y1:"2.42889",x2:"11.9805",y2:"14.8555",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F84119"}),t.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),Lt=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M12.3131 15.0005C12.2079 15.0009 12.1052 14.9681 12.0197 14.9067L8.00064 11.993L3.98158 14.9067C3.89571 14.969 3.79227 15.0024 3.6862 15.002C3.58012 15.0016 3.47692 14.9675 3.39151 14.9046C3.3061 14.8417 3.24291 14.7532 3.21107 14.6521C3.17923 14.5509 3.18039 14.4422 3.21439 14.3417L4.78189 9.69892L0.719389 6.91298C0.631393 6.8527 0.564978 6.76586 0.529849 6.66515C0.49472 6.56444 0.492718 6.45513 0.524134 6.3532C0.555551 6.25127 0.618741 6.16206 0.704471 6.0986C0.790201 6.03514 0.893978 6.00076 1.00064 6.00048H6.01252L7.52501 1.34579C7.5576 1.2453 7.62117 1.15771 7.70662 1.09558C7.79207 1.03346 7.895 1 8.00064 1C8.10628 1 8.20921 1.03346 8.29466 1.09558C8.38011 1.15771 8.44368 1.2453 8.47627 1.34579L9.98876 6.00204H15.0006C15.1074 6.00199 15.2114 6.03613 15.2974 6.09947C15.3834 6.16281 15.4469 6.25201 15.4785 6.35402C15.5101 6.45603 15.5082 6.56548 15.4731 6.66634C15.438 6.76721 15.3716 6.85419 15.2835 6.91454L11.2194 9.69892L12.786 14.3405C12.8113 14.4156 12.8185 14.4957 12.8068 14.5742C12.7951 14.6526 12.7649 14.7272 12.7187 14.7917C12.6725 14.8561 12.6116 14.9087 12.5411 14.945C12.4706 14.9813 12.3925 15.0003 12.3131 15.0005Z",fill:"url(#paint0_linear_148_6941)"}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:"paint0_linear_148_6941",x1:"2.33398",y1:"2.00049",x2:"12.334",y2:"15.3338",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F84119"}),t.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),Wt=({movie:e,selectMovie:o})=>{const s=Te(e.genre_ids),i=new Date(e.release_date).getFullYear();return t.jsx(jt,{tabIndex:0,role:"link",children:t.jsxs("a",{onClick:()=>o(e),children:[t.jsx("img",{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`,alt:""}),t.jsxs(Ct,{children:[t.jsxs(kt,{children:[t.jsxs("p",{children:[e.title.toUpperCase()," "]}),t.jsxs(St,{children:[s.slice(0,2).join(", ")," | ",i]})]}),t.jsx(_t,{initialValue:Math.round(e.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:t.jsx(Ae,{children:t.jsx(Lt,{})}),emptyIcon:t.jsx(Ae,{children:t.jsx($t,{})})})]})]})})},{tablet:T,desktop:L}=ze,Mt=c.div`
  width: 264px;
  font-weight: 500;

  @media (width >= ${T}) {
    display: flex;
    gap: 16px;
    width: 660px;
  }

  @media (width >= ${L}) {
    width: 786px;
  }
`,Vt=c.img`
  height: 315px;
  margin-bottom: 22px;
  border-radius: 5px;
  object-fit: cover;

  @media (width >= ${T}) {
    height: 400px;
    min-width: 294px;
    margin-bottom: 0;
  }

  @media (width >= ${L}) {
    min-width: 375px;
    height: 478px;
  }
`,It=c.h2(({theme:e})=>F`
    margin-bottom: 29px;
    font-size: ${f.mobile.lg}px;
    color: ${e.colors.text};

    @media (width >= ${T}) {
      margin-bottom: 26px;
      font-size: ${f.tablet.lg}px;
    }
  `),Gt=c.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  font-size: ${f.mobile.md}px;

  @media (width >= ${L}) {
    font-size: ${f.desktop.sm}px;
  }
`,R=c.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,k=c.p`
  flex: 1;
  color: ${({theme:e,color:o})=>e.colors[o==="white"?"text":o]};
`,At=c.h3(({theme:e})=>F`
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: ${f.mobile.md}px;
    color: ${e.colors.grey};

    @media (width >= ${L}) {
      font-size: ${f.desktop.sm}px;
    }
  `),Pt=c.p(({theme:e})=>F`
    margin-bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    font-size: ${f.mobile.sm}px;
    color: ${e.colors.secondaryText};

    @media (width >= ${L}) {
      font-size: ${f.desktop.xs}px;
    }
  `),zt=c.span`
  padding: 1px 4px;
  background-color: ${({theme:e})=>e.colors.voteSpanBackground};
  color: ${({theme:e})=>e.colors.secondaryBlack};
  border-radius: 5px;
`,Pe=({children:e})=>t.jsx(zt,{children:e}),Bt=({movie:e})=>{const o=pt(),{library:s,isLoggedIn:i}=ut(),r=Te(e.genre_ids).join(" "),p=!!s.find(w=>w.id===e.id),b=()=>{if(i){Me.promise(o(xt({movie:e,action:p?"remove":"add"})).unwrap(),{loading:p?"Removing from the library...":"Adding to the library...",success:p?"Successfully removed from the library":"Successfully added to library",error:"Error!"});return}Me.error("You are not logged in")};return t.jsxs(Mt,{children:[t.jsx(Vt,{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`}),t.jsxs("div",{children:[t.jsx(It,{children:e.title}),t.jsxs(Gt,{children:[t.jsxs(R,{children:[t.jsx(k,{color:"grey",children:"Vote / Votes"}),t.jsxs(k,{color:"grey",children:[t.jsx(Pe,{children:e.vote_average.toFixed(1)})," /"," ",t.jsx(Pe,{children:e.vote_count})]})]}),t.jsxs(R,{children:[t.jsx(k,{color:"grey",children:"Popularity"}),t.jsx(k,{color:"white",children:e.popularity.toFixed(1)})]}),t.jsxs(R,{children:[t.jsx(k,{color:"grey",children:"Genre"}),t.jsx(k,{color:"white",children:r})]})]}),t.jsx(At,{children:"About"}),t.jsx(Pt,{children:e.overview}),t.jsx(ht,{$isBordered:!0,onClick:b,children:p?"Remove from library":"Add to library"})]})]})};export{Bt as M,Re as R,Lt as S,Pe as V,Rt as a,Tt as b,Ft as c,Wt as d,$t as e,gt as s,Te as u};
