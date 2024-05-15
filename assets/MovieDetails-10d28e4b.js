import{j as o,r as rt,u as c,a as f,t as m,s as nt,b as y,d as st,f as at,l as lt,B as dt,_ as Le,p as ct}from"./index-fef9ee57.js";const At=e=>e.movies.entities,Pt=e=>e.movies.totalPages,pt=e=>e.movies.genres,zt=e=>e.movies.isLoading;var Ae={},Pe;Object.defineProperty(Ae,"__esModule",{value:!0});var g=o,u=rt,l=function(){return l=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};function Me(e,t,s){if(s||arguments.length===2)for(var i,r=0,v=t.length;r<v;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function $e(e){var t=e.size,s=t===void 0?25:t,i=e.SVGstrokeColor,r=i===void 0?"currentColor":i,v=e.SVGstorkeWidth,w=v===void 0?0:v,C=e.SVGclassName,a=C===void 0?"star-svg":C,V=e.SVGstyle;return g.jsx("svg",l({className:a,style:V,stroke:r,fill:"currentColor",strokeWidth:w,viewBox:"0 0 24 24",width:s,height:s,xmlns:"http://www.w3.org/2000/svg"},{children:g.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function ut(e,t){switch(t.type){case"PointerMove":return l(l({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return l(l({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return l(l({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}var ht="style-module_starRatingWrap__q-lJC",xt="style-module_simpleStarRating__nWUxf",gt="style-module_fillIcons__6---A",mt="style-module_emptyIcons__Bg-FZ",ft="style-module_tooltip__tKc3i";function Ve(){return typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0}(function(e,t){t===void 0&&(t={});var s=t.insertAt;if(e&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",s==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}})(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),Pe=Ae.Rating=function(e){var t,s,i=e.onClick,r=e.onPointerMove,v=e.onPointerEnter,w=e.onPointerLeave,C=e.initialValue,a=C===void 0?0:C,V=e.iconsCount,h=V===void 0?5:V,F=e.size,T=F===void 0?40:F,W=e.readonly,M=W!==void 0&&W,B=e.rtl,I=B!==void 0&&B,E=e.customIcons,U=E===void 0?[]:E,H=e.allowFraction,_=H!==void 0&&H,Ne=e.style,O=e.className,Re=O===void 0?"react-simple-star-rating":O,D=e.transition,Fe=D!==void 0&&D,Z=e.allowHover,Y=Z===void 0||Z,q=e.disableFillHover,J=q!==void 0&&q,K=e.fillIcon,Te=K===void 0?null:K,X=e.fillColor,We=X===void 0?"#ffbc0b":X,Q=e.fillColorArray,Be=Q===void 0?[]:Q,Ee=e.fillStyle,ee=e.fillClassName,Ue=ee===void 0?"filled-icons":ee,te=e.emptyIcon,He=te===void 0?null:te,oe=e.emptyColor,Oe=oe===void 0?"#cccccc":oe,De=e.emptyStyle,ie=e.emptyClassName,Ze=ie===void 0?"empty-icons":ie,re=e.allowTitleTag,Ye=re===void 0||re,ne=e.showTooltip,qe=ne!==void 0&&ne,se=e.tooltipDefaultText,Je=se===void 0?"Your Rate":se,ae=e.tooltipArray,G=ae===void 0?[]:ae,Ke=e.tooltipStyle,le=e.tooltipClassName,Xe=le===void 0?"react-simple-star-rating-tooltip":le,de=e.SVGclassName,ce=de===void 0?"star-svg":de,pe=e.titleSeparator,Qe=pe===void 0?"out of":pe,ue=e.SVGstyle,he=e.SVGstorkeWidth,xe=he===void 0?0:he,ge=e.SVGstrokeColor,me=ge===void 0?"currentColor":ge,fe=u.useReducer(ut,{hoverIndex:0,valueIndex:0,ratingValue:a,hoverValue:null}),A=fe[0],p=A.ratingValue,d=A.hoverValue,N=A.hoverIndex,ye=A.valueIndex,P=fe[1];u.useEffect(function(){a&&P({type:"MouseClick",payload:0})},[a]);var b=u.useMemo(function(){return _?2*h:h},[_,h]),k=u.useMemo(function(){return a>b?0:_||Math.floor(a)===a?Math.round(a/h*100):2*Math.ceil(a)*10},[_,a,h,b]),ve=u.useMemo(function(){return(_?2*a-1:a-1)||0},[_,a]),S=u.useCallback(function(n){return h%2!=0?n/2/10:n*h/100},[h]),we=function(n){for(var j=n.clientX,x=n.currentTarget.children[0].getBoundingClientRect(),tt=x.left,ot=x.right,it=x.width,_e=I?ot-j:j-tt,z=b,ke=Math.round(it/b),$=0;$<=b;$+=1)if(_e<=ke*$){z=$===0&&_e<ke?0:$;break}var Se=z-1;z>0&&(P({type:"PointerMove",payload:100*z/b,index:Se}),r&&d&&r(S(d),Se,n))},be=function(n){d&&(P({type:"MouseClick",payload:d}),i&&i(S(d),N,n))},et=u.useMemo(function(){if(Y){if(J){var n=p&&p||k;return d&&d>n?d:n}return d&&d||p&&p||k}return p&&p||k},[Y,J,d,p,k]);u.useEffect(function(){G.length>b&&console.error("tooltipArray Array length is bigger then Icons Count length.")},[G.length,b]);var je=u.useCallback(function(n){return d&&n[N]||p&&n[ye]||a&&n[ve]},[d,N,p,ye,a,ve]),Ce=u.useMemo(function(){return d&&S(d)||p&&S(p)||a&&S(k)},[d,S,p,a,k]);return g.jsxs("span",l({className:ht,style:{direction:"".concat(I?"rtl":"ltr")}},{children:[g.jsxs("span",l({className:"".concat(xt," ").concat(Re),style:l({cursor:M?"":"pointer"},Ne),onPointerMove:M?void 0:we,onPointerEnter:M?void 0:function(n){v&&v(n),Ve()&&we(n)},onPointerLeave:M?void 0:function(n){Ve()&&be(),P({type:"PointerLeave"}),w&&w(n)},onClick:M?void 0:be,"aria-hidden":"true"},{children:[g.jsx("span",l({className:"".concat(mt," ").concat(Ze),style:l({color:Oe},De)},{children:Me([],Array(h),!0).map(function(n,j){var x;return g.jsx(u.Fragment,{children:((x=U[j])===null||x===void 0?void 0:x.icon)||He||g.jsx($e,{SVGclassName:ce,SVGstyle:ue,SVGstorkeWidth:xe,SVGstrokeColor:me,size:T})},j)})})),g.jsx("span",l({className:"".concat(gt," ").concat(Ue),style:l((t={},t[I?"right":"left"]=0,t.color=je(Be)||We,t.transition=Fe?"width .2s ease, color .2s ease":"",t.width="".concat(et,"%"),t),Ee),title:Ye?"".concat(Ce," ").concat(Qe," ").concat(h):void 0},{children:Me([],Array(h),!0).map(function(n,j){var x;return g.jsx(u.Fragment,{children:((x=U[j])===null||x===void 0?void 0:x.icon)||Te||g.jsx($e,{SVGclassName:ce,SVGstyle:ue,SVGstorkeWidth:xe,SVGstrokeColor:me,size:T})},j)})}))]})),qe&&g.jsx("span",l({className:"".concat(ft," ").concat(Xe),style:l((s={},s[I?"marginRight":"marginLeft"]=20,s),Ke)},{children:(G.length>0?je(G):Ce)||Je}))]}))};const yt=c.li(()=>{const{desktop:e,tablet:t}=y;return f`
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
  `}),vt=c.div`
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
`,Ie=c.span(()=>{const{desktop:e,tablet:t}=y;return f`
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
  `}),wt=c(Pe)(()=>{const{desktop:e}=y;return f`
    height: 14px;

    @media (width >= ${e}) {
      height: 18px;
    }
  `}),bt=c.div(()=>{const{desktop:e}=y;return f`
    font-size: ${m.mobile.sm}px;
    font-weight: 500;

    @media (width >= ${e}) {
      font-size: ${m.desktop.md}px;
    }
  `}),jt=c.p`
  color: ${nt.grey};
  margin-top: 10px;
`,ze=e=>st(pt).filter(i=>e.includes(i.id)).map(i=>i.name),Ct=()=>o.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M15 6.5H9.625L8 1.5L6.375 6.5H1L5.375 9.5L3.6875 14.5L8 11.375L12.3125 14.5L10.625 9.5L15 6.5Z",stroke:"url(#paint0_linear_148_6946)",strokeLinejoin:"round"}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"paint0_linear_148_6946",x1:"2.71002",y1:"2.42889",x2:"11.9805",y2:"14.8555",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F84119"}),o.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),_t=()=>o.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12.3131 15.0005C12.2079 15.0009 12.1052 14.9681 12.0197 14.9067L8.00064 11.993L3.98158 14.9067C3.89571 14.969 3.79227 15.0024 3.6862 15.002C3.58012 15.0016 3.47692 14.9675 3.39151 14.9046C3.3061 14.8417 3.24291 14.7532 3.21107 14.6521C3.17923 14.5509 3.18039 14.4422 3.21439 14.3417L4.78189 9.69892L0.719389 6.91298C0.631393 6.8527 0.564978 6.76586 0.529849 6.66515C0.49472 6.56444 0.492718 6.45513 0.524134 6.3532C0.555551 6.25127 0.618741 6.16206 0.704471 6.0986C0.790201 6.03514 0.893978 6.00076 1.00064 6.00048H6.01252L7.52501 1.34579C7.5576 1.2453 7.62117 1.15771 7.70662 1.09558C7.79207 1.03346 7.895 1 8.00064 1C8.10628 1 8.20921 1.03346 8.29466 1.09558C8.38011 1.15771 8.44368 1.2453 8.47627 1.34579L9.98876 6.00204H15.0006C15.1074 6.00199 15.2114 6.03613 15.2974 6.09947C15.3834 6.16281 15.4469 6.25201 15.4785 6.35402C15.5101 6.45603 15.5082 6.56548 15.4731 6.66634C15.438 6.76721 15.3716 6.85419 15.2835 6.91454L11.2194 9.69892L12.786 14.3405C12.8113 14.4156 12.8185 14.4957 12.8068 14.5742C12.7951 14.6526 12.7649 14.7272 12.7187 14.7917C12.6725 14.8561 12.6116 14.9087 12.5411 14.945C12.4706 14.9813 12.3925 15.0003 12.3131 15.0005Z",fill:"url(#paint0_linear_148_6941)"}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"paint0_linear_148_6941",x1:"2.33398",y1:"2.00049",x2:"12.334",y2:"15.3338",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F84119"}),o.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),Nt=({movie:e,selectMovie:t})=>{const s=ze(e.genre_ids),i=new Date(e.release_date).getFullYear();return o.jsx(yt,{tabIndex:0,role:"link",children:o.jsxs("a",{onClick:()=>t(e),children:[o.jsx("img",{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`,alt:""}),o.jsxs(vt,{children:[o.jsxs(bt,{children:[o.jsxs("p",{children:[e.title.toUpperCase()," "]}),o.jsxs(jt,{children:[s.slice(0,2).join(", ")," | ",i]})]}),o.jsx(wt,{initialValue:Math.round(e.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:o.jsx(Ie,{children:o.jsx(_t,{})}),emptyIcon:o.jsx(Ie,{children:o.jsx(Ct,{})})})]})]})})},kt=c.div(()=>{const{tablet:e,desktop:t}=y;return f`
    width: 264px;
    font-weight: 500;

    @media (width >= ${e}) {
      display: flex;
      gap: 16px;
      width: 660px;
    }

    @media (width >= ${t}) {
      width: 786px;
    }
  `}),St=c.img(()=>{const{desktop:e,tablet:t}=y;return f`
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
  `}),Lt=c.h2(({theme:e})=>{const{tablet:t}=y;return f`
    margin-bottom: 29px;
    font-size: ${m.mobile.lg}px;
    color: ${e.colors.text};

    @media (width >= ${t}) {
      margin-bottom: 26px;
      font-size: ${m.tablet.lg}px;
    }
  `}),Mt=c.ul(()=>{const{desktop:e}=y;return f`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    font-size: ${m.mobile.md}px;

    @media (width >= ${e}) {
      font-size: ${m.desktop.sm}px;
    }
  `}),R=c.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,L=c.p`
  flex: 1;
  color: ${({theme:e,color:t})=>e.colors[t==="white"?"text":t]};
`,$t=c.h3(({theme:e})=>{const{desktop:t}=y;return f`
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: ${m.mobile.md}px;
    color: ${e.colors.grey};

    @media (width >= ${t}) {
      font-size: ${m.desktop.sm}px;
    }
  `}),Vt=c.p(({theme:e})=>{const{desktop:t}=y;return f`
    margin-bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    font-size: ${m.mobile.sm}px;
    color: ${e.colors.secondaryText};

    @media (width >= ${t}) {
      font-size: ${m.desktop.xs}px;
    }
  `}),It=c.span`
  padding: 1px 4px;
  background-color: ${({theme:e})=>e.colors.voteSpanBackground};
  color: ${({theme:e})=>e.colors.secondaryBlack};
  border-radius: 5px;
`,Ge=({children:e})=>o.jsx(It,{children:e}),Rt=({movie:e})=>{const t=at(),{userId:s,library:i,isLoggedIn:r}=lt(),v=ze(e.genre_ids).join(" "),w=!!i.find(a=>a.id===e.id),C=()=>{if(r&&s){Le.promise(t(ct({userId:s,movie:e,action:w?"remove":"add"})).unwrap(),{loading:w?"Removing from the library...":"Adding to the library...",success:w?"Successfully removed from the library":"Successfully added to library",error:"Error!"});return}Le.error("You are not logged in")};return o.jsxs(kt,{children:[o.jsx(St,{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`}),o.jsxs("div",{children:[o.jsx(Lt,{children:e.title}),o.jsxs(Mt,{children:[o.jsxs(R,{children:[o.jsx(L,{color:"grey",children:"Vote / Votes"}),o.jsxs(L,{color:"grey",children:[o.jsx(Ge,{children:e.vote_average.toFixed(1)})," /"," ",o.jsx(Ge,{children:e.vote_count})]})]}),o.jsxs(R,{children:[o.jsx(L,{color:"grey",children:"Popularity"}),o.jsx(L,{color:"white",children:e.popularity.toFixed(1)})]}),o.jsxs(R,{children:[o.jsx(L,{color:"grey",children:"Genre"}),o.jsx(L,{color:"white",children:v})]})]}),o.jsx($t,{children:"About"}),o.jsx(Vt,{children:e.overview}),o.jsx(dt,{$isBordered:!0,onClick:C,children:w?"Remove from library":"Add to library"})]})]})};export{Rt as M,Pe as R,_t as S,Ge as V,At as a,zt as b,Pt as c,Nt as d,Ct as e,pt as s,ze as u};
