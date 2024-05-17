import{j as u,r as z,u as b,t as V,m as Ft,b as Ie,e as Gt,a as de,n as ke,R as ge,c as Ut,w as Yt,L as Bt,M as Wt,x as zt,g as qt,i as Qt,B as at,_ as it,l as Ht}from"./index-9621549d.js";const so=e=>e.movies.entities,lo=e=>e.movies.totalPages,Zt=e=>e.movies.genres,uo=e=>e.movies.isLoading;var gt={},vt;Object.defineProperty(gt,"__esModule",{value:!0});var R=u,T=z,x=function(){return x=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},x.apply(this,arguments)};function st(e,t,r){if(r||arguments.length===2)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function lt(e){var t=e.size,r=t===void 0?25:t,o=e.SVGstrokeColor,n=o===void 0?"currentColor":o,a=e.SVGstorkeWidth,c=a===void 0?0:a,p=e.SVGclassName,i=p===void 0?"star-svg":p,s=e.SVGstyle;return R.jsx("svg",x({className:i,style:s,stroke:n,fill:"currentColor",strokeWidth:c,viewBox:"0 0 24 24",width:r,height:r,xmlns:"http://www.w3.org/2000/svg"},{children:R.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function Jt(e,t){switch(t.type){case"PointerMove":return x(x({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return x(x({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return x(x({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}var Kt="style-module_starRatingWrap__q-lJC",Xt="style-module_simpleStarRating__nWUxf",er="style-module_fillIcons__6---A",tr="style-module_emptyIcons__Bg-FZ",rr="style-module_tooltip__tKc3i";function ut(){return typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0}(function(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",r==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}})(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),vt=gt.Rating=function(e){var t,r,o=e.onClick,n=e.onPointerMove,a=e.onPointerEnter,c=e.onPointerLeave,p=e.initialValue,i=p===void 0?0:p,s=e.iconsCount,l=s===void 0?5:s,d=e.size,h=d===void 0?40:d,g=e.readonly,f=g!==void 0&&g,_=e.rtl,v=_!==void 0&&_,S=e.customIcons,C=S===void 0?[]:S,E=e.allowFraction,m=E!==void 0&&E,L=e.style,U=e.className,$=U===void 0?"react-simple-star-rating":U,A=e.transition,O=A!==void 0&&A,D=e.allowHover,I=D===void 0||D,j=e.disableFillHover,N=j!==void 0&&j,te=e.fillIcon,re=te===void 0?null:te,q=e.fillColor,fe=q===void 0?"#ffbc0b":q,Q=e.fillColorArray,he=Q===void 0?[]:Q,oe=e.fillStyle,Ve=e.fillClassName,St=Ve===void 0?"filled-icons":Ve,Me=e.emptyIcon,Et=Me===void 0?null:Me,Re=e.emptyColor,jt=Re===void 0?"#cccccc":Re,At=e.emptyStyle,Oe=e.emptyClassName,It=Oe===void 0?"empty-icons":Oe,Ne=e.allowTitleTag,kt=Ne===void 0||Ne,Le=e.showTooltip,Tt=Le!==void 0&&Le,$e=e.tooltipDefaultText,Vt=$e===void 0?"Your Rate":$e,De=e.tooltipArray,ne=De===void 0?[]:De,Mt=e.tooltipStyle,Fe=e.tooltipClassName,Rt=Fe===void 0?"react-simple-star-rating-tooltip":Fe,Ge=e.SVGclassName,Ue=Ge===void 0?"star-svg":Ge,Ye=e.titleSeparator,Ot=Ye===void 0?"out of":Ye,Be=e.SVGstyle,We=e.SVGstorkeWidth,ze=We===void 0?0:We,qe=e.SVGstrokeColor,Qe=qe===void 0?"currentColor":qe,He=T.useReducer(Jt,{hoverIndex:0,valueIndex:0,ratingValue:i,hoverValue:null}),ae=He[0],k=ae.ratingValue,P=ae.hoverValue,ye=ae.hoverIndex,Ze=ae.valueIndex,ie=He[1];T.useEffect(function(){i&&ie({type:"MouseClick",payload:0})},[i]);var F=T.useMemo(function(){return m?2*l:l},[m,l]),Y=T.useMemo(function(){return i>F?0:m||Math.floor(i)===i?Math.round(i/l*100):2*Math.ceil(i)*10},[m,i,l,F]),Je=T.useMemo(function(){return(m?2*i-1:i-1)||0},[m,i]),B=T.useCallback(function(y){return l%2!=0?y/2/10:y*l/100},[l]),Ke=function(y){for(var G=y.clientX,M=y.currentTarget.children[0].getBoundingClientRect(),Lt=M.left,$t=M.right,Dt=M.width,rt=v?$t-G:G-Lt,se=F,ot=Math.round(Dt/F),H=0;H<=F;H+=1)if(rt<=ot*H){se=H===0&&rt<ot?0:H;break}var nt=se-1;se>0&&(ie({type:"PointerMove",payload:100*se/F,index:nt}),n&&P&&n(B(P),nt,y))},Xe=function(y){P&&(ie({type:"MouseClick",payload:P}),o&&o(B(P),ye,y))},Nt=T.useMemo(function(){if(I){if(N){var y=k&&k||Y;return P&&P>y?P:y}return P&&P||k&&k||Y}return k&&k||Y},[I,N,P,k,Y]);T.useEffect(function(){ne.length>F&&console.error("tooltipArray Array length is bigger then Icons Count length.")},[ne.length,F]);var et=T.useCallback(function(y){return P&&y[ye]||k&&y[Ze]||i&&y[Je]},[P,ye,k,Ze,i,Je]),tt=T.useMemo(function(){return P&&B(P)||k&&B(k)||i&&B(Y)},[P,B,k,i,Y]);return R.jsxs("span",x({className:Kt,style:{direction:"".concat(v?"rtl":"ltr")}},{children:[R.jsxs("span",x({className:"".concat(Xt," ").concat($),style:x({cursor:f?"":"pointer"},L),onPointerMove:f?void 0:Ke,onPointerEnter:f?void 0:function(y){a&&a(y),ut()&&Ke(y)},onPointerLeave:f?void 0:function(y){ut()&&Xe(),ie({type:"PointerLeave"}),c&&c(y)},onClick:f?void 0:Xe,"aria-hidden":"true"},{children:[R.jsx("span",x({className:"".concat(tr," ").concat(It),style:x({color:jt},At)},{children:st([],Array(l),!0).map(function(y,G){var M;return R.jsx(T.Fragment,{children:((M=C[G])===null||M===void 0?void 0:M.icon)||Et||R.jsx(lt,{SVGclassName:Ue,SVGstyle:Be,SVGstorkeWidth:ze,SVGstrokeColor:Qe,size:h})},G)})})),R.jsx("span",x({className:"".concat(er," ").concat(St),style:x((t={},t[v?"right":"left"]=0,t.color=et(he)||fe,t.transition=O?"width .2s ease, color .2s ease":"",t.width="".concat(Nt,"%"),t),oe),title:kt?"".concat(tt," ").concat(Ot," ").concat(l):void 0},{children:st([],Array(l),!0).map(function(y,G){var M;return R.jsx(T.Fragment,{children:((M=C[G])===null||M===void 0?void 0:M.icon)||re||R.jsx(lt,{SVGclassName:Ue,SVGstyle:Be,SVGstorkeWidth:ze,SVGstrokeColor:Qe,size:h})},G)})}))]})),Tt&&R.jsx("span",x({className:"".concat(rr," ").concat(Rt),style:x((r={},r[v?"marginRight":"marginLeft"]=20,r),Mt)},{children:(ne.length>0?et(ne):tt)||Vt}))]}))};const{desktop:ce,tablet:mt}=Ie,or=b.li`
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

  @media (width >= ${mt}) {
    min-width: auto;
    max-width: 224px;
    height: 325px;
  }

  @media (width >= ${ce}) {
    max-width: 394px;
    height: 574px;
  }
`,nr=b.div`
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
`,dt=b.span`
  display: inline-block;
  padding: 0 2px;
  width: 18px;
  height: 14px;

  @media (width >= ${mt}) {
    width: 14px;
    height: 10px;
  }

  @media (width >= ${ce}) {
    width: 22px;
    height: 18px;
  }
`,ar=b(vt)`
  height: 14px;

  @media (width >= ${ce}) {
    height: 18px;
  }
`,ir=b.div`
  font-size: ${V.mobile.sm}px;
  font-weight: 500;

  @media (width >= ${ce}) {
    font-size: ${V.desktop.md}px;
  }
`,sr=b.p`
  color: ${Ft.grey};
  margin-top: 10px;
`,xt=e=>Gt(Zt).filter(o=>e.includes(o.id)).map(o=>o.name),lr=()=>u.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M15 6.5H9.625L8 1.5L6.375 6.5H1L5.375 9.5L3.6875 14.5L8 11.375L12.3125 14.5L10.625 9.5L15 6.5Z",stroke:"url(#paint0_linear_148_6946)",strokeLinejoin:"round"}),u.jsx("defs",{children:u.jsxs("linearGradient",{id:"paint0_linear_148_6946",x1:"2.71002",y1:"2.42889",x2:"11.9805",y2:"14.8555",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#F84119"}),u.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),ur=()=>u.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M12.3131 15.0005C12.2079 15.0009 12.1052 14.9681 12.0197 14.9067L8.00064 11.993L3.98158 14.9067C3.89571 14.969 3.79227 15.0024 3.6862 15.002C3.58012 15.0016 3.47692 14.9675 3.39151 14.9046C3.3061 14.8417 3.24291 14.7532 3.21107 14.6521C3.17923 14.5509 3.18039 14.4422 3.21439 14.3417L4.78189 9.69892L0.719389 6.91298C0.631393 6.8527 0.564978 6.76586 0.529849 6.66515C0.49472 6.56444 0.492718 6.45513 0.524134 6.3532C0.555551 6.25127 0.618741 6.16206 0.704471 6.0986C0.790201 6.03514 0.893978 6.00076 1.00064 6.00048H6.01252L7.52501 1.34579C7.5576 1.2453 7.62117 1.15771 7.70662 1.09558C7.79207 1.03346 7.895 1 8.00064 1C8.10628 1 8.20921 1.03346 8.29466 1.09558C8.38011 1.15771 8.44368 1.2453 8.47627 1.34579L9.98876 6.00204H15.0006C15.1074 6.00199 15.2114 6.03613 15.2974 6.09947C15.3834 6.16281 15.4469 6.25201 15.4785 6.35402C15.5101 6.45603 15.5082 6.56548 15.4731 6.66634C15.438 6.76721 15.3716 6.85419 15.2835 6.91454L11.2194 9.69892L12.786 14.3405C12.8113 14.4156 12.8185 14.4957 12.8068 14.5742C12.7951 14.6526 12.7649 14.7272 12.7187 14.7917C12.6725 14.8561 12.6116 14.9087 12.5411 14.945C12.4706 14.9813 12.3925 15.0003 12.3131 15.0005Z",fill:"url(#paint0_linear_148_6941)"}),u.jsx("defs",{children:u.jsxs("linearGradient",{id:"paint0_linear_148_6941",x1:"2.33398",y1:"2.00049",x2:"12.334",y2:"15.3338",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#F84119"}),u.jsx("stop",{offset:"1",stopColor:"#F89F19"})]})})]}),co=({movie:e,selectMovie:t})=>{const r=xt(e.genre_ids),o=new Date(e.release_date).getFullYear();return u.jsx(or,{tabIndex:0,role:"link",children:u.jsxs("a",{onClick:()=>t(e),children:[u.jsx("img",{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`,alt:""}),u.jsxs(nr,{children:[u.jsxs(ir,{children:[u.jsxs("p",{children:[e.title.toUpperCase()," "]}),u.jsxs(sr,{children:[r.slice(0,2).join(", ")," | ",o]})]}),u.jsx(ar,{initialValue:Math.round(e.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:u.jsx(dt,{children:u.jsx(ur,{})}),emptyIcon:u.jsx(dt,{children:u.jsx(lr,{})})})]})]})})},{tablet:bt,desktop:dr}=Ie,cr=b.div`
  .player {
    border-radius: 16px;

    @media (width < ${bt}) {
      width: 100%;
    }
  }
`,pr=b.p(({theme:e})=>de`
    padding: 16px;

    color: ${e.colors.text};

    font-size: ${V.mobile.lg}px;
    text-align: center;

    @media (width >= ${bt}) {
      font-size: ${V.tablet.lg}px;
    }

    @media (width >= ${dr}) {
      font-size: 32px;
    }
  `);var wt={exports:{}},fr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hr=fr,yr=hr;function Pt(){}function _t(){}_t.resetWarningCache=Pt;var gr=function(){function e(o,n,a,c,p,i){if(i!==yr){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_t,resetWarningCache:Pt};return r.PropTypes=r,r};wt.exports=gr();var vr=wt.exports;const w=ke(vr);var mr=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var o,n,a;if(Array.isArray(t)){if(o=t.length,o!=r.length)return!1;for(n=o;n--!==0;)if(!e(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(a=Object.keys(t),o=a.length,o!==Object.keys(r).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[n]))return!1;for(n=o;n--!==0;){var c=a[n];if(!e(t[c],r[c]))return!1}return!0}return t!==t&&r!==r};const xr=ke(mr);var me={exports:{}},Ct;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/Ct=function(){var e={},t={};return e.on=function(r,o){var n={name:r,handler:o};return t[r]=t[r]||[],t[r].unshift(n),n},e.off=function(r){var o=t[r.name].indexOf(r);o!==-1&&t[r.name].splice(o,1)},e.trigger=function(r,o){var n=t[r],a;if(n)for(a=n.length;a--;)n[a].handler(o)},e};var br=Ct,xe={exports:{}},wr=function(t,r,o){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");typeof r=="function"&&(o=r,r={}),r=r||{},o=o||function(){},a.type=r.type||"text/javascript",a.charset=r.charset||"utf8",a.async="async"in r?!!r.async:!0,a.src=t,r.attrs&&Pr(a,r.attrs),r.text&&(a.text=""+r.text);var c="onload"in a?ct:_r;c(a,o),a.onload||ct(a,o),n.appendChild(a)};function Pr(e,t){for(var r in t)e.setAttribute(r,t[r])}function ct(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function _r(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=wr,o=n(r);function n(a){return a&&a.__esModule?a:{default:a}}t.default=function(a){var c=new Promise(function(p){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){p(window.YT);return}else{var i=window.location.protocol==="http:"?"http:":"https:";(0,o.default)(i+"//www.youtube.com/iframe_api",function(l){l&&a.trigger("error",l)})}var s=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){s&&s(),p(window.YT)}});return c},e.exports=t.default})(xe,xe.exports);var Cr=xe.exports,be={exports:{}},we={exports:{}},Pe={exports:{}},Z=1e3,J=Z*60,K=J*60,X=K*24,Sr=X*365.25,Er=function(e,t){t=t||{};var r=typeof e;if(r==="string"&&e.length>0)return jr(e);if(r==="number"&&isNaN(e)===!1)return t.long?Ir(e):Ar(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function jr(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]),o=(t[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return r*Sr;case"days":case"day":case"d":return r*X;case"hours":case"hour":case"hrs":case"hr":case"h":return r*K;case"minutes":case"minute":case"mins":case"min":case"m":return r*J;case"seconds":case"second":case"secs":case"sec":case"s":return r*Z;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function Ar(e){return e>=X?Math.round(e/X)+"d":e>=K?Math.round(e/K)+"h":e>=J?Math.round(e/J)+"m":e>=Z?Math.round(e/Z)+"s":e+"ms"}function Ir(e){return le(e,X,"day")||le(e,K,"hour")||le(e,J,"minute")||le(e,Z,"second")||e+" ms"}function le(e,t,r){if(!(e<t))return e<t*1.5?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}(function(e,t){t=e.exports=n.debug=n.default=n,t.coerce=i,t.disable=c,t.enable=a,t.enabled=p,t.humanize=Er,t.names=[],t.skips=[],t.formatters={};var r;function o(s){var l=0,d;for(d in s)l=(l<<5)-l+s.charCodeAt(d),l|=0;return t.colors[Math.abs(l)%t.colors.length]}function n(s){function l(){if(l.enabled){var d=l,h=+new Date,g=h-(r||h);d.diff=g,d.prev=r,d.curr=h,r=h;for(var f=new Array(arguments.length),_=0;_<f.length;_++)f[_]=arguments[_];f[0]=t.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");var v=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,function(C,E){if(C==="%%")return C;v++;var m=t.formatters[E];if(typeof m=="function"){var L=f[v];C=m.call(d,L),f.splice(v,1),v--}return C}),t.formatArgs.call(d,f);var S=l.log||t.log||console.log.bind(console);S.apply(d,f)}}return l.namespace=s,l.enabled=t.enabled(s),l.useColors=t.useColors(),l.color=o(s),typeof t.init=="function"&&t.init(l),l}function a(s){t.save(s),t.names=[],t.skips=[];for(var l=(typeof s=="string"?s:"").split(/[\s,]+/),d=l.length,h=0;h<d;h++)l[h]&&(s=l[h].replace(/\*/g,".*?"),s[0]==="-"?t.skips.push(new RegExp("^"+s.substr(1)+"$")):t.names.push(new RegExp("^"+s+"$")))}function c(){t.enable("")}function p(s){var l,d;for(l=0,d=t.skips.length;l<d;l++)if(t.skips[l].test(s))return!1;for(l=0,d=t.names.length;l<d;l++)if(t.names[l].test(s))return!0;return!1}function i(s){return s instanceof Error?s.stack||s.message:s}})(Pe,Pe.exports);var kr=Pe.exports;(function(e,t){t=e.exports=kr,t.log=n,t.formatArgs=o,t.save=a,t.load=c,t.useColors=r,t.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:p(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(i){try{return JSON.stringify(i)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}};function o(i){var s=this.useColors;if(i[0]=(s?"%c":"")+this.namespace+(s?" %c":" ")+i[0]+(s?"%c ":" ")+"+"+t.humanize(this.diff),!!s){var l="color: "+this.color;i.splice(1,0,l,"color: inherit");var d=0,h=0;i[0].replace(/%[a-zA-Z%]/g,function(g){g!=="%%"&&(d++,g==="%c"&&(h=d))}),i.splice(h,0,l)}}function n(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(i){try{i==null?t.storage.removeItem("debug"):t.storage.debug=i}catch{}}function c(){var i;try{i=t.storage.debug}catch{}return!i&&typeof process<"u"&&"env"in process&&(i={}.DEBUG),i}t.enable(c());function p(){try{return window.localStorage}catch{}}})(we,we.exports);var Tr=we.exports,_e={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default})(_e,_e.exports);var Vr=_e.exports,Ce={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default})(Ce,Ce.exports);var Mr=Ce.exports,Se={exports:{}},Ee={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default})(Ee,Ee.exports);var Rr=Ee.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Rr,o=n(r);function n(a){return a&&a.__esModule?a:{default:a}}t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default})(Se,Se.exports);var Or=Se.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Tr,o=l(r),n=Vr,a=l(n),c=Mr,p=l(c),i=Or,s=l(i);function l(g){return g&&g.__esModule?g:{default:g}}var d=(0,o.default)("youtube-player"),h={};h.proxyEvents=function(g){var f={},_=function($){var A="on"+$.slice(0,1).toUpperCase()+$.slice(1);f[A]=function(O){d('event "%s"',A,O),g.trigger($,O)}},v=!0,S=!1,C=void 0;try{for(var E=p.default[Symbol.iterator](),m;!(v=(m=E.next()).done);v=!0){var L=m.value;_(L)}}catch(U){S=!0,C=U}finally{try{!v&&E.return&&E.return()}finally{if(S)throw C}}return f},h.promisifyPlayer=function(g){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,_={},v=function(A){f&&s.default[A]?_[A]=function(){for(var O=arguments.length,D=Array(O),I=0;I<O;I++)D[I]=arguments[I];return g.then(function(j){var N=s.default[A],te=j.getPlayerState(),re=j[A].apply(j,D);return N.stateChangeRequired||Array.isArray(N.acceptableStates)&&N.acceptableStates.indexOf(te)===-1?new Promise(function(q){var fe=function Q(){var he=j.getPlayerState(),oe=void 0;typeof N.timeout=="number"&&(oe=setTimeout(function(){j.removeEventListener("onStateChange",Q),q()},N.timeout)),Array.isArray(N.acceptableStates)&&N.acceptableStates.indexOf(he)!==-1&&(j.removeEventListener("onStateChange",Q),clearTimeout(oe),q())};j.addEventListener("onStateChange",fe)}).then(function(){return re}):re})}:_[A]=function(){for(var O=arguments.length,D=Array(O),I=0;I<O;I++)D[I]=arguments[I];return g.then(function(j){return j[A].apply(j,D)})}},S=!0,C=!1,E=void 0;try{for(var m=a.default[Symbol.iterator](),L;!(S=(L=m.next()).done);S=!0){var U=L.value;v(U)}}catch($){C=!0,E=$}finally{try{!S&&m.return&&m.return()}finally{if(C)throw E}}return _},t.default=h,e.exports=t.default})(be,be.exports);var Nr=be.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},o=br,n=s(o),a=Cr,c=s(a),p=Nr,i=s(p);function s(d){return d&&d.__esModule?d:{default:d}}var l=void 0;t.default=function(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,f=(0,n.default)();if(l||(l=(0,c.default)(f)),h.events)throw new Error("Event handlers cannot be overwritten.");if(typeof d=="string"&&!document.getElementById(d))throw new Error('Element "'+d+'" does not exist.');h.events=i.default.proxyEvents(f);var _=new Promise(function(S){if((typeof d>"u"?"undefined":r(d))==="object"&&d.playVideo instanceof Function){var C=d;S(C)}else l.then(function(E){var m=new E.Player(d,h);return f.on("ready",function(){S(m)}),null})}),v=i.default.promisifyPlayer(_,g);return v.on=f.on,v.off=f.off,v},e.exports=t.default})(me,me.exports);var Lr=me.exports;const $r=ke(Lr);var Dr=Object.defineProperty,Fr=Object.defineProperties,Gr=Object.getOwnPropertyDescriptors,pt=Object.getOwnPropertySymbols,Ur=Object.prototype.hasOwnProperty,Yr=Object.prototype.propertyIsEnumerable,ft=(e,t,r)=>t in e?Dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,je=(e,t)=>{for(var r in t||(t={}))Ur.call(t,r)&&ft(e,r,t[r]);if(pt)for(var r of pt(t))Yr.call(t,r)&&ft(e,r,t[r]);return e},Ae=(e,t)=>Fr(e,Gr(t)),Br=(e,t,r)=>new Promise((o,n)=>{var a=i=>{try{p(r.next(i))}catch(s){n(s)}},c=i=>{try{p(r.throw(i))}catch(s){n(s)}},p=i=>i.done?o(i.value):Promise.resolve(i.value).then(a,c);p((r=r.apply(e,t)).next())});function Wr(e,t){var r,o;if(e.videoId!==t.videoId)return!0;const n=((r=e.opts)==null?void 0:r.playerVars)||{},a=((o=t.opts)==null?void 0:o.playerVars)||{};return n.start!==a.start||n.end!==a.end}function ht(e={}){return Ae(je({},e),{height:0,width:0,playerVars:Ae(je({},e.playerVars),{autoplay:0,start:0,end:0})})}function zr(e,t){return e.videoId!==t.videoId||!xr(ht(e.opts),ht(t.opts))}function qr(e,t){var r,o,n,a;return e.id!==t.id||e.className!==t.className||((r=e.opts)==null?void 0:r.width)!==((o=t.opts)==null?void 0:o.width)||((n=e.opts)==null?void 0:n.height)!==((a=t.opts)==null?void 0:a.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var Qr={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},Hr={videoId:w.string,id:w.string,className:w.string,iframeClassName:w.string,style:w.object,title:w.string,loading:w.oneOf(["lazy","eager"]),opts:w.objectOf(w.any),onReady:w.func,onError:w.func,onPlay:w.func,onPause:w.func,onEnd:w.func,onStateChange:w.func,onPlaybackRateChange:w.func,onPlaybackQualityChange:w.func},ue=class extends ge.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=t=>{var r,o;return(o=(r=this.props).onReady)==null?void 0:o.call(r,t)},this.onPlayerError=t=>{var r,o;return(o=(r=this.props).onError)==null?void 0:o.call(r,t)},this.onPlayerStateChange=t=>{var r,o,n,a,c,p,i,s;switch((o=(r=this.props).onStateChange)==null||o.call(r,t),t.data){case ue.PlayerState.ENDED:(a=(n=this.props).onEnd)==null||a.call(n,t);break;case ue.PlayerState.PLAYING:(p=(c=this.props).onPlay)==null||p.call(c,t);break;case ue.PlayerState.PAUSED:(s=(i=this.props).onPause)==null||s.call(i,t);break}},this.onPlayerPlaybackRateChange=t=>{var r,o;return(o=(r=this.props).onPlaybackRateChange)==null?void 0:o.call(r,t)},this.onPlayerPlaybackQualityChange=t=>{var r,o;return(o=(r=this.props).onPlaybackQualityChange)==null?void 0:o.call(r,t)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const t=Ae(je({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=$r(this.container,t),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(r=>{this.props.title&&r.setAttribute("title",this.props.title),this.props.loading&&r.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var t;(t=this.internalPlayer)==null||t.getIframe().then(r=>{this.props.id?r.setAttribute("id",this.props.id):r.removeAttribute("id"),this.props.iframeClassName?r.setAttribute("class",this.props.iframeClassName):r.removeAttribute("class"),this.props.opts&&this.props.opts.width?r.setAttribute("width",this.props.opts.width.toString()):r.removeAttribute("width"),this.props.opts&&this.props.opts.height?r.setAttribute("height",this.props.opts.height.toString()):r.removeAttribute("height"),this.props.title?r.setAttribute("title",this.props.title):r.setAttribute("title","YouTube video player"),this.props.loading?r.setAttribute("loading",this.props.loading):r.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var t,r,o,n;if(typeof this.props.videoId>"u"||this.props.videoId===null){(t=this.internalPlayer)==null||t.stopVideo();return}let a=!1;const c={videoId:this.props.videoId};if((r=this.props.opts)!=null&&r.playerVars&&(a=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(c.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(c.endSeconds=this.props.opts.playerVars.end)),a){(o=this.internalPlayer)==null||o.loadVideoById(c);return}(n=this.internalPlayer)==null||n.cueVideoById(c)},this.refContainer=t=>{this.container=t},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return Br(this,null,function*(){qr(e,this.props)&&this.updatePlayer(),zr(e,this.props)&&(yield this.resetPlayer()),Wr(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return ge.createElement("div",{className:this.props.className,style:this.props.style},ge.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},pe=ue;pe.propTypes=Hr;pe.defaultProps=Qr;pe.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var Zr=pe;const Jr=({movieId:e,closeTrailer:t})=>{const[r,o]=z.useState(""),[n,a]=z.useState(!1),[c,p]=z.useState(!1),i=Ut(t);return z.useEffect(()=>{const s=setTimeout(()=>{(async()=>{try{p(!1),a(!0);const h=(await zt(e)).find(g=>g.type==="Trailer");o((h==null?void 0:h.key)||"")}catch{p(!0)}finally{a(!1)}})()},0);return()=>clearTimeout(s)},[]),u.jsx(Yt,{children:u.jsx(cr,{ref:i,children:n?u.jsx(Bt,{}):c?u.jsx(Wt,{onClose:t,children:u.jsxs(pr,{children:["OOPS... ",u.jsx("br",{})," We are very sorry! ",u.jsx("br",{})," We don't have any trailers for this film."]})}):u.jsx(Zr,{videoId:r,iframeClassName:"player"})})})},{tablet:Te,desktop:ee}=Ie,Kr=b.div`
  width: 264px;
  font-weight: 500;

  @media (width >= ${Te}) {
    display: flex;
    gap: 16px;
    width: 660px;
  }

  @media (width >= ${ee}) {
    width: 786px;
  }
`,Xr=b.img`
  height: 315px;
  margin-bottom: 22px;
  border-radius: 5px;
  object-fit: cover;

  @media (width >= ${Te}) {
    height: 400px;
    min-width: 294px;
    margin-bottom: 0;
  }

  @media (width >= ${ee}) {
    min-width: 375px;
    height: 478px;
  }
`,eo=b.h2(({theme:e})=>de`
    margin-bottom: 29px;
    font-size: ${V.mobile.lg}px;
    color: ${e.colors.text};

    @media (width >= ${Te}) {
      margin-bottom: 26px;
      font-size: ${V.tablet.lg}px;
    }
  `),to=b.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  font-size: ${V.mobile.md}px;

  @media (width >= ${ee}) {
    font-size: ${V.desktop.sm}px;
  }
`,ve=b.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,W=b.p`
  flex: 1;
  color: ${({theme:e,color:t})=>e.colors[t==="white"?"text":t]};
`,ro=b.h3(({theme:e})=>de`
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: ${V.mobile.md}px;
    color: ${e.colors.grey};

    @media (width >= ${ee}) {
      font-size: ${V.desktop.sm}px;
    }
  `),oo=b.p(({theme:e})=>de`
    margin-bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    font-size: ${V.mobile.sm}px;
    color: ${e.colors.secondaryText};

    @media (width >= ${ee}) {
      font-size: ${V.desktop.xs}px;
    }
  `),no=b.div`
  display: flex;
  gap: 16px;
`,ao=b.span`
  padding: 1px 4px;
  background-color: ${({theme:e})=>e.colors.voteSpanBackground};
  color: ${({theme:e})=>e.colors.secondaryBlack};
  border-radius: 5px;
`,yt=({children:e})=>u.jsx(ao,{children:e}),po=({movie:e})=>{const[t,r]=z.useState(!1),o=qt(),{library:n,isLoggedIn:a}=Qt(),c=xt(e.genre_ids).join(" "),p=!!n.find(s=>s.id===e.id),i=()=>{if(a){it.promise(o(Ht({movie:e,action:p?"remove":"add"})).unwrap(),{loading:p?"Removing from the library...":"Adding to the library...",success:p?"Successfully removed from the library":"Successfully added to library",error:"Error!"});return}it.error("You are not logged in")};return u.jsxs(Kr,{children:[u.jsx(Xr,{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`}),u.jsxs("div",{children:[u.jsx(eo,{children:e.title}),u.jsxs(to,{children:[u.jsxs(ve,{children:[u.jsx(W,{color:"grey",children:"Vote / Votes"}),u.jsxs(W,{color:"grey",children:[u.jsx(yt,{children:e.vote_average.toFixed(1)})," /"," ",u.jsx(yt,{children:e.vote_count})]})]}),u.jsxs(ve,{children:[u.jsx(W,{color:"grey",children:"Popularity"}),u.jsx(W,{color:"white",children:e.popularity.toFixed(1)})]}),u.jsxs(ve,{children:[u.jsx(W,{color:"grey",children:"Genre"}),u.jsx(W,{color:"white",children:c})]})]}),u.jsx(ro,{children:"About"}),u.jsx(oo,{children:e.overview}),u.jsxs(no,{children:[u.jsx(at,{onClick:()=>r(!0),children:"Watch trailer"}),u.jsx(at,{$isBordered:!p,onClick:i,children:p?"Remove from library":"Add to library"})]})]}),t&&u.jsx(Jr,{movieId:e.id,closeTrailer:()=>r(!1)})]})};export{po as M,vt as R,ur as S,Jr as T,yt as V,so as a,uo as b,lo as c,co as d,lr as e,Zt as s,xt as u};
