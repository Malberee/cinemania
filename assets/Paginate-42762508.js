import{u as Y,a as se,t as U,b as ge,C as de,r as fe,j as h,q as xe,v as ye,n as Ce}from"./index-d55e5d20.js";import{d as Pe}from"./MovieDetails-800b20d7.js";const{desktop:ke,tablet:be}=ge,Le=Y.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 28px;

  margin-top: 16px;

  @media (width >= ${be}) {
    margin-top: 32px;
  }
`,Ne=Y(de)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,we=Y.p(({theme:v})=>se`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 28px;
    font-size: ${U.mobile.lg}px;
    color: ${v.colors.text};

    @media (width >= ${be}) {
      line-height: 32px;
      font-size: ${U.tablet.lg}px;
    }

    @media (width >= ${ke}) {
      padding: 120px 0 20px 0;
      line-height: 36px;
      font-size: 32px;
    }
  `),Te=fe.memo(({movies:v,selectMovie:H,errorMessage:q})=>h.jsx(h.Fragment,{children:h.jsx(Ne,{children:v.length>0?h.jsx(Le,{children:v.map(A=>h.jsx(Pe,{movie:A,selectMovie:H},A.id))}):h.jsxs(we,{children:["OOPS... ",h.jsx("br",{})," We are very sorry! ",h.jsx("br",{})," ",q]})})})),ce=()=>h.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M3.5 5.75L8 10.25L12.5 5.75",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),{tablet:J,desktop:je}=ge,Oe=Y(de)(({theme:v})=>se`
    display: flex;
    justify-content: center;

    margin-top: 20px;

    @media (width >= ${J}) {
      margin-top: 44px;
    }

    @media (width >= ${je}) {
      margin-top: 60px;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 8px;

      @media (width >= ${J}) {
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

      font-size: ${U.mobile.xs}px;

      @media (width >= ${J}) {
        width: 40px;
        height: 40px;
        font-size: ${U.tablet.sm}px;
      }
    }

    .active {
      background: ${xe.linearGradientUp};
      color: ${v.colors.text};
      border: none;
    }

    .arrowBtn {
      width: 20px;
      height: 20px;

      @media (width >= ${J}) {
        width: 28px;
        height: 28px;
      }
    }

    .break {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${v.colors.grey};

      font-size: ${U.mobile.xs}px;

      @media (width >= ${J}) {
        font-size: ${U.tablet.sm}px;
      }
    }
  `),ue=Y.button(({direction:v,theme:H})=>se`
      width: 20px;
      height: 20px;
      padding: 0;

      border: none;
      background-color: transparent;
      color: ${H.colors.arrowPaginate};

      rotate: ${v==="prev"?90:270}deg;

      cursor: pointer;

      @media (width >= ${J}) {
        width: 28px;
        height: 28px;
      }
    `);var me={exports:{}};(function(v,H){(function(q,A){v.exports=A(fe)})(ye,q=>(()=>{var A={703:(u,g,C)=>{var t=C(414);function z(){}function K(){}K.resetWarningCache=z,u.exports=function(){function m(le,R,Q,Z,pe,G){if(G!==t){var X=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw X.name="Invariant Violation",X}}function j(){return m}m.isRequired=m;var W={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:j,element:m,elementType:m,instanceOf:j,node:m,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j,checkPropTypes:K,resetWarningCache:z};return W.PropTypes=W,W}},697:(u,g,C)=>{u.exports=C(703)()},414:u=>{u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:u=>{u.exports=q}},oe={};function y(u){var g=oe[u];if(g!==void 0)return g.exports;var C=oe[u]={exports:{}};return A[u](C,C.exports,y),C.exports}y.n=u=>{var g=u&&u.__esModule?()=>u.default:()=>u;return y.d(g,{a:g}),g},y.d=(u,g)=>{for(var C in g)y.o(g,C)&&!y.o(u,C)&&Object.defineProperty(u,C,{enumerable:!0,get:g[C]})},y.o=(u,g)=>Object.prototype.hasOwnProperty.call(u,g),y.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var re={};return(()=>{y.r(re),y.d(re,{default:()=>he});var u=y(98),g=y.n(u),C=y(697),t=y.n(C);function z(){return z=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},z.apply(this,arguments)}var K=function(r){var i=r.pageClassName,o=r.pageLinkClassName,l=r.page,_=r.selected,I=r.activeClassName,O=r.activeLinkClassName,a=r.getEventListener,e=r.pageSelectedHandler,c=r.href,n=r.extraAriaContext,s=r.pageLabelBuilder,p=r.rel,f=r.ariaLabel||"Page "+l+(n?" "+n:""),x=null;return _&&(x="page",f=r.ariaLabel||"Page "+l+" is your current page",i=i!==void 0?i+" "+I:I,o!==void 0?O!==void 0&&(o=o+" "+O):o=O),g().createElement("li",{className:i},g().createElement("a",z({rel:p,role:c?void 0:"button",className:o,href:c,tabIndex:_?"-1":"0","aria-label":f,"aria-current":x,onKeyPress:e},a(e)),s(l)))};K.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const m=K;function j(){return j=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},j.apply(this,arguments)}var W=function(r){var i=r.breakLabel,o=r.breakAriaLabel,l=r.breakClassName,_=r.breakLinkClassName,I=r.breakHandler,O=r.getEventListener,a=l||"break";return g().createElement("li",{className:a},g().createElement("a",j({className:_,role:"button",tabIndex:"0","aria-label":o,onKeyPress:I},O(I)),i))};W.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const le=W;function R(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??i}function Q(r){return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Q(r)}function Z(){return Z=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},Z.apply(this,arguments)}function pe(r,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,l.key,l)}}function G(r,i){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},G(r,i)}function X(r,i){if(i&&(Q(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(r)}function L(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ee(r){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},ee(r)}function P(r,i,o){return i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,r}var ne=function(r){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&G(a,e)})(O,r);var i,o,l,_,I=(l=O,_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=ee(l);if(_){var c=ee(this).constructor;a=Reflect.construct(e,arguments,c)}else a=e.apply(this,arguments);return X(this,a)});function O(a){var e,c;return function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,O),P(L(e=I.call(this,a)),"handlePreviousPage",function(n){var s=e.state.selected;e.handleClick(n,null,s>0?s-1:void 0,{isPrevious:!0})}),P(L(e),"handleNextPage",function(n){var s=e.state.selected,p=e.props.pageCount;e.handleClick(n,null,s<p-1?s+1:void 0,{isNext:!0})}),P(L(e),"handlePageSelected",function(n,s){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,n)}),P(L(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),P(L(e),"getEventListener",function(n){return P({},e.props.eventListener,n)}),P(L(e),"handleClick",function(n,s,p){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},x=f.isPrevious,E=x!==void 0&&x,F=f.isNext,V=F!==void 0&&F,M=f.isBreak,N=M!==void 0&&M,B=f.isActive,T=B!==void 0&&B;n.preventDefault?n.preventDefault():n.returnValue=!1;var $=e.state.selected,d=e.props.onClick,w=p;if(d){var k=d({index:s,selected:$,nextSelectedPage:p,event:n,isPrevious:E,isNext:V,isBreak:N,isActive:T});if(k===!1)return;Number.isInteger(k)&&(w=k)}w!==void 0&&e.handlePageChange(w)}),P(L(e),"handleBreakClick",function(n,s){var p=e.state.selected;e.handleClick(s,n,p<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),P(L(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),P(L(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),P(L(e),"getElementPageRel",function(n){var s=e.state.selected,p=e.props,f=p.nextPageRel,x=p.prevPageRel,E=p.selectedPageRel;return s-1===n?x:s===n?E:s+1===n?f:void 0}),P(L(e),"pagination",function(){var n=[],s=e.props,p=s.pageRangeDisplayed,f=s.pageCount,x=s.marginPagesDisplayed,E=s.breakLabel,F=s.breakClassName,V=s.breakLinkClassName,M=s.breakAriaLabels,N=e.state.selected;if(f<=p)for(var B=0;B<f;B++)n.push(e.getPageElement(B));else{var T=p/2,$=p-T;N>f-p/2?T=p-($=f-N):N<p/2&&($=p-(T=N));var d,w,k=function(S){return e.getPageElement(S)},b=[];for(d=0;d<f;d++){var te=d+1;if(te<=x)b.push({type:"page",index:d,display:k(d)});else if(te>f-x)b.push({type:"page",index:d,display:k(d)});else if(d>=N-T&&d<=N+(N===0&&p>1?$-1:$))b.push({type:"page",index:d,display:k(d)});else if(E&&b.length>0&&b[b.length-1].display!==w&&(p>0||x>0)){var ie=d<N?M.backward:M.forward;w=g().createElement(le,{key:d,breakAriaLabel:ie,breakLabel:E,breakClassName:F,breakLinkClassName:V,breakHandler:e.handleBreakClick.bind(null,d),getEventListener:e.getEventListener}),b.push({type:"break",index:d,display:w})}}b.forEach(function(S,D){var ae=S;S.type==="break"&&b[D-1]&&b[D-1].type==="page"&&b[D+1]&&b[D+1].type==="page"&&b[D+1].index-b[D-1].index<=2&&(ae={type:"page",index:S.index,display:k(S.index)}),n.push(ae.display)})}return n}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),c=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:c},e}return i=O,(o=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,c=a.disableInitialCallback,n=a.extraAriaContext,s=a.pageCount,p=a.forcePage;e===void 0||c||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),p!==void 0&&p>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(p," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,c=e.pageCount,n=a+e.pageRangeDisplayed;return n>=c?c-1:n}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,c=e.hrefBuilder,n=e.pageCount,s=e.hrefAllControls;if(c)return s||a>=0&&a<n?c(a+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var c=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(c=c+" "+this.props.extraAriaContext),c}}},{key:"getPageElement",value:function(a){var e=this.state.selected,c=this.props,n=c.pageClassName,s=c.pageLinkClassName,p=c.activeClassName,f=c.activeLinkClassName,x=c.extraAriaContext,E=c.pageLabelBuilder;return g().createElement(m,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:n,pageLinkClassName:s,activeClassName:p,activeLinkClassName:f,extraAriaContext:x,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:E,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,c=e.disabledClassName,n=e.disabledLinkClassName,s=e.pageCount,p=e.className,f=e.containerClassName,x=e.previousLabel,E=e.previousClassName,F=e.previousLinkClassName,V=e.previousAriaLabel,M=e.prevRel,N=e.nextLabel,B=e.nextClassName,T=e.nextLinkClassName,$=e.nextAriaLabel,d=e.nextRel,w=this.state.selected,k=w===0,b=w===s-1,te="".concat(R(E)).concat(k?" ".concat(R(c)):""),ie="".concat(R(B)).concat(b?" ".concat(R(c)):""),S="".concat(R(F)).concat(k?" ".concat(R(n)):""),D="".concat(R(T)).concat(b?" ".concat(R(n)):""),ae=k?"true":"false",ve=b?"true":"false";return g().createElement("ul",{className:p||f,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:te},g().createElement("a",Z({className:S,href:this.getElementHref(w-1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ae,"aria-label":V,rel:M},this.getEventListener(this.handlePreviousPage)),x)),this.pagination(),g().createElement("li",{className:ie},g().createElement("a",Z({className:D,href:this.getElementHref(w+1),tabIndex:b?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ve,"aria-label":$,rel:d},this.getEventListener(this.handleNextPage)),N)))}}])&&pe(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),O}(u.Component);P(ne,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),P(ne,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const he=ne})(),re})())})(me);var Ee=me.exports;const Re=Ce(Ee),$e=({totalPages:v,currentPage:H,onPageChange:q})=>h.jsx(Oe,{children:h.jsx(Re,{pageCount:v,initialPage:H,pageRangeDisplayed:3,marginPagesDisplayed:1,breakLabel:"...",containerClassName:"container",pageLinkClassName:"page",activeLinkClassName:"active",nextClassName:"arrowBtn",previousClassName:"arrowBtn",breakClassName:"break",onPageChange:A=>q(A.selected),previousLabel:h.jsx(ue,{direction:"prev",children:h.jsx(ce,{})}),nextLabel:h.jsx(ue,{direction:"next",children:h.jsx(ce,{})})})});export{ce as C,Te as M,$e as P};
