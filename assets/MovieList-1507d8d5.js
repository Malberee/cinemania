import{u as Q,a as oe,t as J,b as le,C as de,n as me,j as x,r as Y,o as ve,p as xe,e as ye,d as Ce}from"./index-54f01424.js";import{e as Pe,c as ke}from"./MovieDetails-f29b187b.js";const Le=Q.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 28px;
`,Ne=Q(de)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,we=Q.p(({theme:h})=>{const{desktop:y,tablet:N}=le;return oe`
    text-align: center;
    line-height: 28px;
    font-size: ${J.mobile.lg}px;
    color: ${h.colors.text};

    @media (width >= ${N}) {
      line-height: 32px;
      font-size: ${J.tablet.lg}px;
    }

    @media (width >= ${y}) {
      line-height: 36px;
      font-size: 32px;
    }
  `}),je=Q(de)(({theme:h})=>{const{tablet:y,desktop:N}=le;return oe`
    display: flex;
    justify-content: center;

    margin-top: 20px;

    @media (width >= ${y}) {
      margin-top: 44px;
    }

    @media (width >= ${N}) {
      margin-top: 60px;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 8px;

      @media (width >= ${y}) {
        gap: 16px;
      }
    }

    .page {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 24px;
      height: 24px;

      border: solid 1px ${h.colors.grey};
      color: ${h.colors.grey};
      border-radius: 100vw;

      font-size: ${J.mobile.xs}px;

      @media (width >= ${y}) {
        width: 40px;
        height: 40px;
        font-size: ${J.tablet.sm}px;
      }
    }

    .active {
      background: ${me.linearGradientUp};
      color: ${h.colors.text};
      border: none;
    }

    .arrowBtn {
      width: 20px;
      height: 20px;

      @media (width >= ${y}) {
        width: 28px;
        height: 28px;
      }
    }

    .break {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${h.colors.grey};

      font-size: ${J.mobile.xs}px;

      @media (width >= ${y}) {
        font-size: ${J.tablet.sm}px;
      }
    }
  `}),ue=Q.button(({direction:h,theme:y})=>{const{tablet:N}=le;return oe`
      width: 20px;
      height: 20px;
      padding: 0;

      border: none;
      background-color: transparent;
      color: ${y.colors.arrowPaginate};

      rotate: ${h==="prev"?90:270}deg;

      &:hover {
        cursor: pointer;
      }

      @media (width >= ${N}) {
        width: 28px;
        height: 28px;
      }
    `}),ge=()=>x.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M3.5 5.75L8 10.25L12.5 5.75",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})});var fe={exports:{}};(function(h,y){(function(N,A){h.exports=A(Y)})(ve,N=>(()=>{var A={703:(l,g,P)=>{var t=P(414);function W(){}function K(){}K.resetWarningCache=W,l.exports=function(){function v(ce,S,ee,Z,pe,G){if(G!==t){var te=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw te.name="Invariant Violation",te}}function O(){return v}v.isRequired=v;var z={array:v,bigint:v,bool:v,func:v,number:v,object:v,string:v,symbol:v,any:v,arrayOf:O,element:v,elementType:v,instanceOf:O,node:v,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:K,resetWarningCache:W};return z.PropTypes=z,z}},697:(l,g,P)=>{l.exports=P(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:l=>{l.exports=N}},X={};function m(l){var g=X[l];if(g!==void 0)return g.exports;var P=X[l]={exports:{}};return A[l](P,P.exports,m),P.exports}m.n=l=>{var g=l&&l.__esModule?()=>l.default:()=>l;return m.d(g,{a:g}),g},m.d=(l,g)=>{for(var P in g)m.o(g,P)&&!m.o(l,P)&&Object.defineProperty(l,P,{enumerable:!0,get:g[P]})},m.o=(l,g)=>Object.prototype.hasOwnProperty.call(l,g),m.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var U={};return(()=>{m.r(U),m.d(U,{default:()=>be});var l=m(98),g=m.n(l),P=m(697),t=m.n(P);function W(){return W=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},W.apply(this,arguments)}var K=function(r){var i=r.pageClassName,o=r.pageLinkClassName,c=r.page,M=r.selected,H=r.activeClassName,R=r.activeLinkClassName,a=r.getEventListener,e=r.pageSelectedHandler,u=r.href,n=r.extraAriaContext,s=r.pageLabelBuilder,p=r.rel,f=r.ariaLabel||"Page "+c+(n?" "+n:""),C=null;return M&&(C="page",f=r.ariaLabel||"Page "+c+" is your current page",i=i!==void 0?i+" "+H:H,o!==void 0?R!==void 0&&(o=o+" "+R):o=R),g().createElement("li",{className:i},g().createElement("a",W({rel:p,role:u?void 0:"button",className:o,href:u,tabIndex:M?"-1":"0","aria-label":f,"aria-current":C,onKeyPress:e},a(e)),s(c)))};K.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const v=K;function O(){return O=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},O.apply(this,arguments)}var z=function(r){var i=r.breakLabel,o=r.breakAriaLabel,c=r.breakClassName,M=r.breakLinkClassName,H=r.breakHandler,R=r.getEventListener,a=c||"break";return g().createElement("li",{className:a},g().createElement("a",O({className:M,role:"button",tabIndex:"0","aria-label":o,onKeyPress:H},R(H)),i))};z.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const ce=z;function S(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??i}function ee(r){return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},ee(r)}function Z(){return Z=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},Z.apply(this,arguments)}function pe(r,i){for(var o=0;o<i.length;o++){var c=i[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}function G(r,i){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,c){return o.__proto__=c,o},G(r,i)}function te(r,i){if(i&&(ee(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return w(r)}function w(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ae(r){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},ae(r)}function k(r,i,o){return i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,r}var ie=function(r){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&G(a,e)})(R,r);var i,o,c,M,H=(c=R,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=ae(c);if(M){var u=ae(this).constructor;a=Reflect.construct(e,arguments,u)}else a=e.apply(this,arguments);return te(this,a)});function R(a){var e,u;return function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,R),k(w(e=H.call(this,a)),"handlePreviousPage",function(n){var s=e.state.selected;e.handleClick(n,null,s>0?s-1:void 0,{isPrevious:!0})}),k(w(e),"handleNextPage",function(n){var s=e.state.selected,p=e.props.pageCount;e.handleClick(n,null,s<p-1?s+1:void 0,{isNext:!0})}),k(w(e),"handlePageSelected",function(n,s){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,n)}),k(w(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),k(w(e),"getEventListener",function(n){return k({},e.props.eventListener,n)}),k(w(e),"handleClick",function(n,s,p){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},C=f.isPrevious,B=C!==void 0&&C,F=f.isNext,V=F!==void 0&&F,q=f.isBreak,j=q!==void 0&&q,T=f.isActive,$=T!==void 0&&T;n.preventDefault?n.preventDefault():n.returnValue=!1;var D=e.state.selected,d=e.props.onClick,E=p;if(d){var L=d({index:s,selected:D,nextSelectedPage:p,event:n,isPrevious:B,isNext:V,isBreak:j,isActive:$});if(L===!1)return;Number.isInteger(L)&&(E=L)}E!==void 0&&e.handlePageChange(E)}),k(w(e),"handleBreakClick",function(n,s){var p=e.state.selected;e.handleClick(s,n,p<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),k(w(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),k(w(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),k(w(e),"getElementPageRel",function(n){var s=e.state.selected,p=e.props,f=p.nextPageRel,C=p.prevPageRel,B=p.selectedPageRel;return s-1===n?C:s===n?B:s+1===n?f:void 0}),k(w(e),"pagination",function(){var n=[],s=e.props,p=s.pageRangeDisplayed,f=s.pageCount,C=s.marginPagesDisplayed,B=s.breakLabel,F=s.breakClassName,V=s.breakLinkClassName,q=s.breakAriaLabels,j=e.state.selected;if(f<=p)for(var T=0;T<f;T++)n.push(e.getPageElement(T));else{var $=p/2,D=p-$;j>f-p/2?$=p-(D=f-j):j<p/2&&(D=p-($=j));var d,E,L=function(_){return e.getPageElement(_)},b=[];for(d=0;d<f;d++){var re=d+1;if(re<=C)b.push({type:"page",index:d,display:L(d)});else if(re>f-C)b.push({type:"page",index:d,display:L(d)});else if(d>=j-$&&d<=j+(j===0&&p>1?D-1:D))b.push({type:"page",index:d,display:L(d)});else if(B&&b.length>0&&b[b.length-1].display!==E&&(p>0||C>0)){var se=d<j?q.backward:q.forward;E=g().createElement(ce,{key:d,breakAriaLabel:se,breakLabel:B,breakClassName:F,breakLinkClassName:V,breakHandler:e.handleBreakClick.bind(null,d),getEventListener:e.getEventListener}),b.push({type:"break",index:d,display:E})}}b.forEach(function(_,I){var ne=_;_.type==="break"&&b[I-1]&&b[I-1].type==="page"&&b[I+1]&&b[I+1].type==="page"&&b[I+1].index-b[I-1].index<=2&&(ne={type:"page",index:_.index,display:L(_.index)}),n.push(ne.display)})}return n}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),u=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:u},e}return i=R,(o=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,u=a.disableInitialCallback,n=a.extraAriaContext,s=a.pageCount,p=a.forcePage;e===void 0||u||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),p!==void 0&&p>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(p," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,u=e.pageCount,n=a+e.pageRangeDisplayed;return n>=u?u-1:n}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,u=e.hrefBuilder,n=e.pageCount,s=e.hrefAllControls;if(u)return s||a>=0&&a<n?u(a+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var u=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(u=u+" "+this.props.extraAriaContext),u}}},{key:"getPageElement",value:function(a){var e=this.state.selected,u=this.props,n=u.pageClassName,s=u.pageLinkClassName,p=u.activeClassName,f=u.activeLinkClassName,C=u.extraAriaContext,B=u.pageLabelBuilder;return g().createElement(v,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:n,pageLinkClassName:s,activeClassName:p,activeLinkClassName:f,extraAriaContext:C,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:B,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,u=e.disabledClassName,n=e.disabledLinkClassName,s=e.pageCount,p=e.className,f=e.containerClassName,C=e.previousLabel,B=e.previousClassName,F=e.previousLinkClassName,V=e.previousAriaLabel,q=e.prevRel,j=e.nextLabel,T=e.nextClassName,$=e.nextLinkClassName,D=e.nextAriaLabel,d=e.nextRel,E=this.state.selected,L=E===0,b=E===s-1,re="".concat(S(B)).concat(L?" ".concat(S(u)):""),se="".concat(S(T)).concat(b?" ".concat(S(u)):""),_="".concat(S(F)).concat(L?" ".concat(S(n)):""),I="".concat(S($)).concat(b?" ".concat(S(n)):""),ne=L?"true":"false",he=b?"true":"false";return g().createElement("ul",{className:p||f,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:re},g().createElement("a",Z({className:_,href:this.getElementHref(E-1),tabIndex:L?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ne,"aria-label":V,rel:q},this.getEventListener(this.handlePreviousPage)),C)),this.pagination(),g().createElement("li",{className:se},g().createElement("a",Z({className:I,href:this.getElementHref(E+1),tabIndex:b?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":he,"aria-label":D,rel:d},this.getEventListener(this.handleNextPage)),j)))}}])&&pe(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),R}(l.Component);k(ie,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),k(ie,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const be=ie})(),U})())})(fe);var Ee=fe.exports;const Oe=xe(Ee),Re=({totalPages:h})=>{const[y,N]=ye(),[A,X]=Y.useState(Number(y.get("page"))||1),m=Y.useMemo(()=>Object.fromEntries([...y]),[y]),U=l=>{X(l+1)};return Y.useEffect(()=>{N({...m,page:A.toString()})},[A,m]),x.jsx(je,{children:x.jsx(Oe,{pageCount:h>500?500:h,initialPage:A-1,pageRangeDisplayed:3,marginPagesDisplayed:1,breakLabel:"...",containerClassName:"container",pageLinkClassName:"page",activeLinkClassName:"active",nextClassName:"arrowBtn",previousClassName:"arrowBtn",breakClassName:"break",onPageChange:l=>U(l.selected),previousLabel:x.jsx(ue,{direction:"prev",children:x.jsx(ge,{})}),nextLabel:x.jsx(ue,{direction:"next",children:x.jsx(ge,{})})})})},Se=Y.memo(({movies:h,selectMovie:y})=>{const N=Ce(Pe);return x.jsxs(x.Fragment,{children:[x.jsx(Ne,{children:h.length>0?x.jsx(Le,{children:h.map(A=>x.jsx(ke,{movie:A,selectMovie:y},A.id))}):x.jsxs(we,{children:["OOPS... ",x.jsx("br",{})," We are very sorry! ",x.jsx("br",{})," We don’t have any results matching your search."]})}),h.length&&x.jsx(Re,{totalPages:N})]})});export{ge as C,Se as M};
