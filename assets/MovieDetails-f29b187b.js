import{j as o,r as it,u as c,a as f,t as m,s as nt,b as y,d as rt,f as st,q as at,B as lt,v as dt}from"./index-54f01424.js";const Gt=e=>e.movies.entities,At=e=>e.movies.totalPages,ct=e=>e.movies.genres,Pt=e=>e.movies.isLoading;var Ge={},Ae;Object.defineProperty(Ge,"__esModule",{value:!0});var g=o,u=it,l=function(){return l=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)};function Le(e,t,s){if(s||arguments.length===2)for(var i,n=0,v=t.length;n<v;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}function Me(e){var t=e.size,s=t===void 0?25:t,i=e.SVGstrokeColor,n=i===void 0?"currentColor":i,v=e.SVGstorkeWidth,b=v===void 0?0:v,C=e.SVGclassName,a=C===void 0?"star-svg":C,V=e.SVGstyle;return g.jsx("svg",l({className:a,style:V,stroke:n,fill:"currentColor",strokeWidth:b,viewBox:"0 0 24 24",width:s,height:s,xmlns:"http://www.w3.org/2000/svg"},{children:g.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function pt(e,t){switch(t.type){case"PointerMove":return l(l({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return l(l({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return l(l({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}var ut="style-module_starRatingWrap__q-lJC",ht="style-module_simpleStarRating__nWUxf",xt="style-module_fillIcons__6---A",gt="style-module_emptyIcons__Bg-FZ",mt="style-module_tooltip__tKc3i";function $e(){return typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0}(function(e,t){t===void 0&&(t={});var s=t.insertAt;if(e&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}})(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),Ae=Ge.Rating=function(e){var t,s,i=e.onClick,n=e.onPointerMove,v=e.onPointerEnter,b=e.onPointerLeave,C=e.initialValue,a=C===void 0?0:C,V=e.iconsCount,h=V===void 0?5:V,R=e.size,T=R===void 0?40:R,W=e.readonly,M=W!==void 0&&W,B=e.rtl,I=B!==void 0&&B,E=e.customIcons,U=E===void 0?[]:E,H=e.allowFraction,_=H!==void 0&&H,ze=e.style,O=e.className,Ne=O===void 0?"react-simple-star-rating":O,D=e.transition,Fe=D!==void 0&&D,Z=e.allowHover,q=Z===void 0||Z,J=e.disableFillHover,K=J!==void 0&&J,Y=e.fillIcon,Re=Y===void 0?null:Y,X=e.fillColor,Te=X===void 0?"#ffbc0b":X,Q=e.fillColorArray,We=Q===void 0?[]:Q,Be=e.fillStyle,ee=e.fillClassName,Ee=ee===void 0?"filled-icons":ee,te=e.emptyIcon,Ue=te===void 0?null:te,oe=e.emptyColor,He=oe===void 0?"#cccccc":oe,Oe=e.emptyStyle,ie=e.emptyClassName,De=ie===void 0?"empty-icons":ie,ne=e.allowTitleTag,Ze=ne===void 0||ne,re=e.showTooltip,qe=re!==void 0&&re,se=e.tooltipDefaultText,Je=se===void 0?"Your Rate":se,ae=e.tooltipArray,G=ae===void 0?[]:ae,Ke=e.tooltipStyle,le=e.tooltipClassName,Ye=le===void 0?"react-simple-star-rating-tooltip":le,de=e.SVGclassName,ce=de===void 0?"star-svg":de,pe=e.titleSeparator,Xe=pe===void 0?"out of":pe,ue=e.SVGstyle,he=e.SVGstorkeWidth,xe=he===void 0?0:he,ge=e.SVGstrokeColor,me=ge===void 0?"currentColor":ge,fe=u.useReducer(pt,{hoverIndex:0,valueIndex:0,ratingValue:a,hoverValue:null}),A=fe[0],p=A.ratingValue,d=A.hoverValue,N=A.hoverIndex,ye=A.valueIndex,P=fe[1];u.useEffect(function(){a&&P({type:"MouseClick",payload:0})},[a]);var w=u.useMemo(function(){return _?2*h:h},[_,h]),k=u.useMemo(function(){return a>w?0:_||Math.floor(a)===a?Math.round(a/h*100):2*Math.ceil(a)*10},[_,a,h,w]),ve=u.useMemo(function(){return(_?2*a-1:a-1)||0},[_,a]),S=u.useCallback(function(r){return h%2!=0?r/2/10:r*h/100},[h]),we=function(r){for(var j=r.clientX,x=r.currentTarget.children[0].getBoundingClientRect(),et=x.left,tt=x.right,ot=x.width,_e=I?tt-j:j-et,z=w,ke=Math.round(ot/w),$=0;$<=w;$+=1)if(_e<=ke*$){z=$===0&&_e<ke?0:$;break}var Se=z-1;z>0&&(P({type:"PointerMove",payload:100*z/w,index:Se}),n&&d&&n(S(d),Se,r))},je=function(r){d&&(P({type:"MouseClick",payload:d}),i&&i(S(d),N,r))},Qe=u.useMemo(function(){if(q){if(K){var r=p&&p||k;return d&&d>r?d:r}return d&&d||p&&p||k}return p&&p||k},[q,K,d,p,k]);u.useEffect(function(){G.length>w&&console.error("tooltipArray Array length is bigger then Icons Count length.")},[G.length,w]);var be=u.useCallback(function(r){return d&&r[N]||p&&r[ye]||a&&r[ve]},[d,N,p,ye,a,ve]),Ce=u.useMemo(function(){return d&&S(d)||p&&S(p)||a&&S(k)},[d,S,p,a,k]);return g.jsxs("span",l({className:ut,style:{direction:"".concat(I?"rtl":"ltr")}},{children:[g.jsxs("span",l({className:"".concat(ht," ").concat(Ne),style:l({cursor:M?"":"pointer"},ze),onPointerMove:M?void 0:we,onPointerEnter:M?void 0:function(r){v&&v(r),$e()&&we(r)},onPointerLeave:M?void 0:function(r){$e()&&je(),P({type:"PointerLeave"}),b&&b(r)},onClick:M?void 0:je,"aria-hidden":"true"},{children:[g.jsx("span",l({className:"".concat(gt," ").concat(De),style:l({color:He},Oe)},{children:Le([],Array(h),!0).map(function(r,j){var x;return g.jsx(u.Fragment,{children:((x=U[j])===null||x===void 0?void 0:x.icon)||Ue||g.jsx(Me,{SVGclassName:ce,SVGstyle:ue,SVGstorkeWidth:xe,SVGstrokeColor:me,size:T})},j)})})),g.jsx("span",l({className:"".concat(xt," ").concat(Ee),style:l((t={},t[I?"right":"left"]=0,t.color=be(We)||Te,t.transition=Fe?"width .2s ease, color .2s ease":"",t.width="".concat(Qe,"%"),t),Be),title:Ze?"".concat(Ce," ").concat(Xe," ").concat(h):void 0},{children:Le([],Array(h),!0).map(function(r,j){var x;return g.jsx(u.Fragment,{children:((x=U[j])===null||x===void 0?void 0:x.icon)||Re||g.jsx(Me,{SVGclassName:ce,SVGstyle:ue,SVGstorkeWidth:xe,SVGstrokeColor:me,size:T})},j)})}))]})),qe&&g.jsx("span",l({className:"".concat(mt," ").concat(Ye),style:l((s={},s[I?"marginRight":"marginLeft"]=20,s),Ke)},{children:(G.length>0?be(G):Ce)||Je}))]}))};const ft=c.li(()=>{const{desktop:e,tablet:t}=y;return f`
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
  `}),yt=c.div`
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
`,Ve=c.span(()=>{const{desktop:e,tablet:t}=y;return f`
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
  `}),vt=c(Ae)(()=>{const{desktop:e}=y;return f`
    height: 14px;

    @media (width >= ${e}) {
      height: 18px;
    }
  `}),wt=c.div(()=>{const{desktop:e}=y;return f`
    font-size: ${m.mobile.sm}px;
    font-weight: 500;

    @media (width >= ${e}) {
      font-size: ${m.desktop.md}px;
    }
  `}),jt=c.p`
  color: ${nt.grey};
  margin-top: 10px;
`,Pe=e=>rt(ct).filter(i=>e.includes(i.id)).map(i=>i.name),bt=()=>o.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M15 6.5H9.625L8 1.5L6.375 6.5H1L5.375 9.5L3.6875 14.5L8 11.375L12.3125 14.5L10.625 9.5L15 6.5Z",stroke:"url(#paint0_linear_148_6946)",strokeLinejoin:"round"}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"paint0_linear_148_6946",x1:"2.71002",y1:"2.42889",x2:"11.9805",y2:"14.8555",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F84119"}),o.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),Ct=()=>o.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12.3131 15.0005C12.2079 15.0009 12.1052 14.9681 12.0197 14.9067L8.00064 11.993L3.98158 14.9067C3.89571 14.969 3.79227 15.0024 3.6862 15.002C3.58012 15.0016 3.47692 14.9675 3.39151 14.9046C3.3061 14.8417 3.24291 14.7532 3.21107 14.6521C3.17923 14.5509 3.18039 14.4422 3.21439 14.3417L4.78189 9.69892L0.719389 6.91298C0.631393 6.8527 0.564978 6.76586 0.529849 6.66515C0.49472 6.56444 0.492718 6.45513 0.524134 6.3532C0.555551 6.25127 0.618741 6.16206 0.704471 6.0986C0.790201 6.03514 0.893978 6.00076 1.00064 6.00048H6.01252L7.52501 1.34579C7.5576 1.2453 7.62117 1.15771 7.70662 1.09558C7.79207 1.03346 7.895 1 8.00064 1C8.10628 1 8.20921 1.03346 8.29466 1.09558C8.38011 1.15771 8.44368 1.2453 8.47627 1.34579L9.98876 6.00204H15.0006C15.1074 6.00199 15.2114 6.03613 15.2974 6.09947C15.3834 6.16281 15.4469 6.25201 15.4785 6.35402C15.5101 6.45603 15.5082 6.56548 15.4731 6.66634C15.438 6.76721 15.3716 6.85419 15.2835 6.91454L11.2194 9.69892L12.786 14.3405C12.8113 14.4156 12.8185 14.4957 12.8068 14.5742C12.7951 14.6526 12.7649 14.7272 12.7187 14.7917C12.6725 14.8561 12.6116 14.9087 12.5411 14.945C12.4706 14.9813 12.3925 15.0003 12.3131 15.0005Z",fill:"url(#paint0_linear_148_6941)"}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"paint0_linear_148_6941",x1:"2.33398",y1:"2.00049",x2:"12.334",y2:"15.3338",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F84119"}),o.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),zt=({movie:e,selectMovie:t})=>{const s=Pe(e.genre_ids),i=new Date(e.release_date).getFullYear();return o.jsx(ft,{tabIndex:0,role:"link",children:o.jsxs("a",{onClick:()=>t(e),children:[o.jsx("img",{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`,alt:""}),o.jsxs(yt,{children:[o.jsxs(wt,{children:[o.jsxs("p",{children:[e.title.toUpperCase()," "]}),o.jsxs(jt,{children:[s.slice(0,2).join(", ")," | ",i]})]}),o.jsx(vt,{initialValue:Math.round(e.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:o.jsx(Ve,{children:o.jsx(Ct,{})}),emptyIcon:o.jsx(Ve,{children:o.jsx(bt,{})})})]})]})})},_t=c.div(()=>{const{tablet:e,desktop:t}=y;return f`
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
  `}),kt=c.img(()=>{const{desktop:e,tablet:t}=y;return f`
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
  `}),St=c.h2(({theme:e})=>{const{tablet:t}=y;return f`
    margin-bottom: 29px;
    font-size: ${m.mobile.lg}px;
    color: ${e.colors.text};

    @media (width >= ${t}) {
      margin-bottom: 26px;
      font-size: ${m.tablet.lg}px;
    }
  `}),Lt=c.ul(()=>{const{desktop:e}=y;return f`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    font-size: ${m.mobile.md}px;

    @media (width >= ${e}) {
      font-size: ${m.desktop.sm}px;
    }
  `}),F=c.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,L=c.p`
  flex: 1;
  color: ${({theme:e,color:t})=>e.colors[t==="white"?"text":t]};
`,Mt=c.h3(({theme:e})=>{const{desktop:t}=y;return f`
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: ${m.mobile.md}px;
    color: ${e.colors.grey};

    @media (width >= ${t}) {
      font-size: ${m.desktop.sm}px;
    }
  `}),$t=c.p(({theme:e})=>{const{desktop:t}=y;return f`
    margin-bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    font-size: ${m.mobile.sm}px;
    color: ${e.colors.secondaryText};

    @media (width >= ${t}) {
      font-size: ${m.desktop.xs}px;
    }
  `}),Vt=c.span`
  padding: 1px 4px;
  background-color: ${({theme:e})=>e.colors.voteSpanBackground};
  color: ${({theme:e})=>e.colors.secondaryBlack};
  border-radius: 5px;
`,Ie=({children:e})=>o.jsx(Vt,{children:e}),Nt=({movie:e})=>{const t=st(),{userId:s,library:i,isLoggedIn:n}=at(),v=Pe(e.genre_ids).join(" "),b=!!i.find(a=>a.id===e.id),C=()=>{if(n&&s){t(dt({userId:s,movie:e,action:b?"remove":"add"}));return}console.log("you are not logged in")};return o.jsxs(_t,{children:[o.jsx(kt,{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`}),o.jsxs("div",{children:[o.jsx(St,{children:e.title}),o.jsxs(Lt,{children:[o.jsxs(F,{children:[o.jsx(L,{color:"grey",children:"Vote / Votes"}),o.jsxs(L,{color:"grey",children:[o.jsx(Ie,{children:e.vote_average.toFixed(1)})," /"," ",o.jsx(Ie,{children:e.vote_count})]})]}),o.jsxs(F,{children:[o.jsx(L,{color:"grey",children:"Popularity"}),o.jsx(L,{color:"white",children:e.popularity.toFixed(1)})]}),o.jsxs(F,{children:[o.jsx(L,{color:"grey",children:"Genre"}),o.jsx(L,{color:"white",children:v})]})]}),o.jsx(Mt,{children:"About"}),o.jsx($t,{children:e.overview}),o.jsx(lt,{$isBordered:!0,onClick:C,children:b?"Remove from library":"Add to library"})]})]})};export{Nt as M,Ae as R,Ct as S,Ie as V,Gt as a,Pt as b,zt as c,bt as d,At as e,ct as s,Pe as u};
