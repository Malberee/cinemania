import{u as V,b as ae,a as se,t as F,C as ge,r as de,j as h,n as he,o as ve,i as xe}from"./index-fef9ee57.js";import{d as ye}from"./MovieDetails-10d28e4b.js";const Ce=V.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 28px;

  margin-top: 16px;

  @media (width >= ${ae.tablet}) {
    margin-top: 32px;
  }
`,Pe=V(ge)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,ke=V.p(({theme:v})=>{const{desktop:y,tablet:L}=ae;return se`
    text-align: center;
    line-height: 28px;
    font-size: ${F.mobile.lg}px;
    color: ${v.colors.text};

    @media (width >= ${L}) {
      line-height: 32px;
      font-size: ${F.tablet.lg}px;
    }

    @media (width >= ${y}) {
      line-height: 36px;
      font-size: 32px;
    }
  `}),Ee=de.memo(({movies:v,selectMovie:y})=>h.jsx(h.Fragment,{children:h.jsx(Pe,{children:v.length>0?h.jsx(Ce,{children:v.map(L=>h.jsx(ye,{movie:L,selectMovie:y},L.id))}):h.jsxs(ke,{children:["OOPS... ",h.jsx("br",{})," We are very sorry! ",h.jsx("br",{})," We don’t have any results matching your search."]})})})),ce=()=>h.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M3.5 5.75L8 10.25L12.5 5.75",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Le=V(ge)(({theme:v})=>{const{tablet:y,desktop:L}=ae;return se`
    display: flex;
    justify-content: center;

    margin-top: 20px;

    @media (width >= ${y}) {
      margin-top: 44px;
    }

    @media (width >= ${L}) {
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

      border: solid 1px ${v.colors.grey};
      color: ${v.colors.grey};
      border-radius: 100vw;

      font-size: ${F.mobile.xs}px;

      @media (width >= ${y}) {
        width: 40px;
        height: 40px;
        font-size: ${F.tablet.sm}px;
      }
    }

    .active {
      background: ${he.linearGradientUp};
      color: ${v.colors.text};
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

      color: ${v.colors.grey};

      font-size: ${F.mobile.xs}px;

      @media (width >= ${y}) {
        font-size: ${F.tablet.sm}px;
      }
    }
  `}),ue=V.button(({direction:v,theme:y})=>{const{tablet:L}=ae;return se`
      width: 20px;
      height: 20px;
      padding: 0;

      border: none;
      background-color: transparent;
      color: ${y.colors.arrowPaginate};

      rotate: ${v==="prev"?90:270}deg;

      &:hover {
        cursor: pointer;
      }

      @media (width >= ${L}) {
        width: 28px;
        height: 28px;
      }
    `});var fe={exports:{}};(function(v,y){(function(L,J){v.exports=J(de)})(ve,L=>(()=>{var J={703:(u,g,P)=>{var t=P(414);function q(){}function U(){}U.resetWarningCache=q,u.exports=function(){function m(le,B,Y,K,pe,Z){if(Z!==t){var Q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Q.name="Invariant Violation",Q}}function E(){return m}m.isRequired=m;var W={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:E,element:m,elementType:m,instanceOf:E,node:m,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:U,resetWarningCache:q};return W.PropTypes=W,W}},697:(u,g,P)=>{u.exports=P(703)()},414:u=>{u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:u=>{u.exports=L}},oe={};function C(u){var g=oe[u];if(g!==void 0)return g.exports;var P=oe[u]={exports:{}};return J[u](P,P.exports,C),P.exports}C.n=u=>{var g=u&&u.__esModule?()=>u.default:()=>u;return C.d(g,{a:g}),g},C.d=(u,g)=>{for(var P in g)C.o(g,P)&&!C.o(u,P)&&Object.defineProperty(u,P,{enumerable:!0,get:g[P]})},C.o=(u,g)=>Object.prototype.hasOwnProperty.call(u,g),C.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var re={};return(()=>{C.r(re),C.d(re,{default:()=>be});var u=C(98),g=C.n(u),P=C(697),t=C.n(P);function q(){return q=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},q.apply(this,arguments)}var U=function(r){var i=r.pageClassName,o=r.pageLinkClassName,l=r.page,I=r.selected,M=r.activeClassName,R=r.activeLinkClassName,a=r.getEventListener,e=r.pageSelectedHandler,c=r.href,n=r.extraAriaContext,s=r.pageLabelBuilder,p=r.rel,f=r.ariaLabel||"Page "+l+(n?" "+n:""),x=null;return I&&(x="page",f=r.ariaLabel||"Page "+l+" is your current page",i=i!==void 0?i+" "+M:M,o!==void 0?R!==void 0&&(o=o+" "+R):o=R),g().createElement("li",{className:i},g().createElement("a",q({rel:p,role:c?void 0:"button",className:o,href:c,tabIndex:I?"-1":"0","aria-label":f,"aria-current":x,onKeyPress:e},a(e)),s(l)))};U.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const m=U;function E(){return E=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},E.apply(this,arguments)}var W=function(r){var i=r.breakLabel,o=r.breakAriaLabel,l=r.breakClassName,I=r.breakLinkClassName,M=r.breakHandler,R=r.getEventListener,a=l||"break";return g().createElement("li",{className:a},g().createElement("a",E({className:I,role:"button",tabIndex:"0","aria-label":o,onKeyPress:M},R(M)),i))};W.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const le=W;function B(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??i}function Y(r){return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Y(r)}function K(){return K=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},K.apply(this,arguments)}function pe(r,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,l.key,l)}}function Z(r,i){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},Z(r,i)}function Q(r,i){if(i&&(Y(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return w(r)}function w(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function X(r){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},X(r)}function k(r,i,o){return i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,r}var ne=function(r){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&Z(a,e)})(R,r);var i,o,l,I,M=(l=R,I=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=X(l);if(I){var c=X(this).constructor;a=Reflect.construct(e,arguments,c)}else a=e.apply(this,arguments);return Q(this,a)});function R(a){var e,c;return function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,R),k(w(e=M.call(this,a)),"handlePreviousPage",function(n){var s=e.state.selected;e.handleClick(n,null,s>0?s-1:void 0,{isPrevious:!0})}),k(w(e),"handleNextPage",function(n){var s=e.state.selected,p=e.props.pageCount;e.handleClick(n,null,s<p-1?s+1:void 0,{isNext:!0})}),k(w(e),"handlePageSelected",function(n,s){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,n)}),k(w(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),k(w(e),"getEventListener",function(n){return k({},e.props.eventListener,n)}),k(w(e),"handleClick",function(n,s,p){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},x=f.isPrevious,A=x!==void 0&&x,z=f.isNext,G=z!==void 0&&z,H=f.isBreak,j=H!==void 0&&H,T=f.isActive,S=T!==void 0&&T;n.preventDefault?n.preventDefault():n.returnValue=!1;var $=e.state.selected,d=e.props.onClick,O=p;if(d){var N=d({index:s,selected:$,nextSelectedPage:p,event:n,isPrevious:A,isNext:G,isBreak:j,isActive:S});if(N===!1)return;Number.isInteger(N)&&(O=N)}O!==void 0&&e.handlePageChange(O)}),k(w(e),"handleBreakClick",function(n,s){var p=e.state.selected;e.handleClick(s,n,p<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),k(w(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),k(w(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),k(w(e),"getElementPageRel",function(n){var s=e.state.selected,p=e.props,f=p.nextPageRel,x=p.prevPageRel,A=p.selectedPageRel;return s-1===n?x:s===n?A:s+1===n?f:void 0}),k(w(e),"pagination",function(){var n=[],s=e.props,p=s.pageRangeDisplayed,f=s.pageCount,x=s.marginPagesDisplayed,A=s.breakLabel,z=s.breakClassName,G=s.breakLinkClassName,H=s.breakAriaLabels,j=e.state.selected;if(f<=p)for(var T=0;T<f;T++)n.push(e.getPageElement(T));else{var S=p/2,$=p-S;j>f-p/2?S=p-($=f-j):j<p/2&&($=p-(S=j));var d,O,N=function(D){return e.getPageElement(D)},b=[];for(d=0;d<f;d++){var ee=d+1;if(ee<=x)b.push({type:"page",index:d,display:N(d)});else if(ee>f-x)b.push({type:"page",index:d,display:N(d)});else if(d>=j-S&&d<=j+(j===0&&p>1?$-1:$))b.push({type:"page",index:d,display:N(d)});else if(A&&b.length>0&&b[b.length-1].display!==O&&(p>0||x>0)){var ie=d<j?H.backward:H.forward;O=g().createElement(le,{key:d,breakAriaLabel:ie,breakLabel:A,breakClassName:z,breakLinkClassName:G,breakHandler:e.handleBreakClick.bind(null,d),getEventListener:e.getEventListener}),b.push({type:"break",index:d,display:O})}}b.forEach(function(D,_){var te=D;D.type==="break"&&b[_-1]&&b[_-1].type==="page"&&b[_+1]&&b[_+1].type==="page"&&b[_+1].index-b[_-1].index<=2&&(te={type:"page",index:D.index,display:N(D.index)}),n.push(te.display)})}return n}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),c=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:c},e}return i=R,(o=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,c=a.disableInitialCallback,n=a.extraAriaContext,s=a.pageCount,p=a.forcePage;e===void 0||c||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),p!==void 0&&p>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(p," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,c=e.pageCount,n=a+e.pageRangeDisplayed;return n>=c?c-1:n}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,c=e.hrefBuilder,n=e.pageCount,s=e.hrefAllControls;if(c)return s||a>=0&&a<n?c(a+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var c=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(c=c+" "+this.props.extraAriaContext),c}}},{key:"getPageElement",value:function(a){var e=this.state.selected,c=this.props,n=c.pageClassName,s=c.pageLinkClassName,p=c.activeClassName,f=c.activeLinkClassName,x=c.extraAriaContext,A=c.pageLabelBuilder;return g().createElement(m,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:n,pageLinkClassName:s,activeClassName:p,activeLinkClassName:f,extraAriaContext:x,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:A,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,c=e.disabledClassName,n=e.disabledLinkClassName,s=e.pageCount,p=e.className,f=e.containerClassName,x=e.previousLabel,A=e.previousClassName,z=e.previousLinkClassName,G=e.previousAriaLabel,H=e.prevRel,j=e.nextLabel,T=e.nextClassName,S=e.nextLinkClassName,$=e.nextAriaLabel,d=e.nextRel,O=this.state.selected,N=O===0,b=O===s-1,ee="".concat(B(A)).concat(N?" ".concat(B(c)):""),ie="".concat(B(T)).concat(b?" ".concat(B(c)):""),D="".concat(B(z)).concat(N?" ".concat(B(n)):""),_="".concat(B(S)).concat(b?" ".concat(B(n)):""),te=N?"true":"false",me=b?"true":"false";return g().createElement("ul",{className:p||f,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:ee},g().createElement("a",K({className:D,href:this.getElementHref(O-1),tabIndex:N?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":te,"aria-label":G,rel:H},this.getEventListener(this.handlePreviousPage)),x)),this.pagination(),g().createElement("li",{className:ie},g().createElement("a",K({className:_,href:this.getElementHref(O+1),tabIndex:b?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":me,"aria-label":$,rel:d},this.getEventListener(this.handleNextPage)),j)))}}])&&pe(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),R}(u.Component);k(ne,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),k(ne,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const be=ne})(),re})())})(fe);var Ne=fe.exports;const we=xe(Ne),Re=({totalPages:v,currentPage:y,onPageChange:L})=>h.jsx(Le,{children:h.jsx(we,{pageCount:v,initialPage:y,pageRangeDisplayed:3,marginPagesDisplayed:1,breakLabel:"...",containerClassName:"container",pageLinkClassName:"page",activeLinkClassName:"active",nextClassName:"arrowBtn",previousClassName:"arrowBtn",breakClassName:"break",onPageChange:J=>L(J.selected),previousLabel:h.jsx(ue,{direction:"prev",children:h.jsx(ce,{})}),nextLabel:h.jsx(ue,{direction:"next",children:h.jsx(ce,{})})})});export{ce as C,Ee as M,Re as P};
