import{u as w,a as M,t as q,b as G,C as de,g as Ce,j as c,r as N,c as ke,d as Pe,e as ge,f as le,s as Le,h as we,B as je,i as Ne,k as Oe,l as Ee,m as $e,n as he,L as Se}from"./index-d7e957d2.js";import{M as Re,C as Ae,H as Be,a as Te,b as De}from"./MovieDetails-b12bbebc.js";const Ie=w.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
`,Me=w.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 28px;
`,_e=w(de)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,qe=w.p(({theme:r})=>{const{desktop:l,tablet:m}=G;return M`
    text-align: center;
    line-height: 28px;
    font-size: ${q.mobile.lg}px;
    color: ${r.colors.text};

    @media (width >= ${m}) {
      line-height: 32px;
      font-size: ${q.tablet.lg}px;
    }

    @media (width >= ${l}) {
      line-height: 36px;
      font-size: 32px;
    }
  `}),We=w(de)(({theme:r})=>{const{tablet:l,desktop:m}=G;return M`
    display: flex;
    justify-content: center;

    margin-top: 20px;

    @media (width >= ${l}) {
      margin-top: 44px;
    }

    @media (width >= ${m}) {
      margin-top: 60px;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 8px;

      @media (width >= ${l}) {
        gap: 16px;
      }
    }

    .page {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 24px;
      height: 24px;

      border: solid 1px ${r.colors.grey};
      color: ${r.colors.grey};
      border-radius: 100vw;

      font-size: ${q.mobile.xs}px;

      @media (width >= ${l}) {
        width: 40px;
        height: 40px;
        font-size: ${q.tablet.sm}px;
      }
    }

    .active {
      background: ${Ce.linearGradientUp};
      color: ${r.colors.text};
      border: none;
    }

    .arrowBtn {
      width: 20px;
      height: 20px;

      @media (width >= ${l}) {
        width: 28px;
        height: 28px;
      }
    }

    .break {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${r.colors.grey};

      font-size: ${q.mobile.xs}px;

      @media (width >= ${l}) {
        font-size: ${q.tablet.sm}px;
      }
    }
  `}),be=w.button(({direction:r,theme:l})=>{const{tablet:m}=G;return M`
      width: 20px;
      height: 20px;
      padding: 0;

      border: none;
      background-color: transparent;
      color: ${l.colors.arrowPaginate};

      rotate: ${r==="prev"?90:270}deg;

      &:hover {
        cursor: pointer;
      }

      @media (width >= ${m}) {
        width: 28px;
        height: 28px;
      }
    `}),ue=()=>c.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M3.5 5.75L8 10.25L12.5 5.75",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})});var xe={exports:{}};(function(r,l){(function(m,v){r.exports=v(N)})(ke,m=>(()=>{var v={703:(i,p,y)=>{var t=y(414);function S(){}function U(){}U.resetWarningCache=S,i.exports=function(){function P(re,W,ae,X,fe,ee){if(ee!==t){var ne=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ne.name="Invariant Violation",ne}}function b(){return P}P.isRequired=P;var D={array:P,bigint:P,bool:P,func:P,number:P,object:P,string:P,symbol:P,any:P,arrayOf:b,element:P,elementType:P,instanceOf:b,node:P,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:U,resetWarningCache:S};return D.PropTypes=D,D}},697:(i,p,y)=>{i.exports=y(703)()},414:i=>{i.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:i=>{i.exports=m}},O={};function x(i){var p=O[i];if(p!==void 0)return p.exports;var y=O[i]={exports:{}};return v[i](y,y.exports,x),y.exports}x.n=i=>{var p=i&&i.__esModule?()=>i.default:()=>i;return x.d(p,{a:p}),p},x.d=(i,p)=>{for(var y in p)x.o(p,y)&&!x.o(i,y)&&Object.defineProperty(i,y,{enumerable:!0,get:p[y]})},x.o=(i,p)=>Object.prototype.hasOwnProperty.call(i,p),x.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var $={};return(()=>{x.r($),x.d($,{default:()=>ve});var i=x(98),p=x.n(i),y=x(697),t=x.n(y);function S(){return S=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(n[g]=d[g])}return n},S.apply(this,arguments)}var U=function(n){var s=n.pageClassName,d=n.pageLinkClassName,g=n.page,K=n.selected,Z=n.activeClassName,I=n.activeLinkClassName,a=n.getEventListener,e=n.pageSelectedHandler,h=n.href,o=n.extraAriaContext,u=n.pageLabelBuilder,f=n.rel,k=n.ariaLabel||"Page "+g+(o?" "+o:""),j=null;return K&&(j="page",k=n.ariaLabel||"Page "+g+" is your current page",s=s!==void 0?s+" "+Z:Z,d!==void 0?I!==void 0&&(d=d+" "+I):d=I),p().createElement("li",{className:s},p().createElement("a",S({rel:f,role:h?void 0:"button",className:d,href:h,tabIndex:K?"-1":"0","aria-label":k,"aria-current":j,onKeyPress:e},a(e)),u(g)))};U.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const P=U;function b(){return b=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(n[g]=d[g])}return n},b.apply(this,arguments)}var D=function(n){var s=n.breakLabel,d=n.breakAriaLabel,g=n.breakClassName,K=n.breakLinkClassName,Z=n.breakHandler,I=n.getEventListener,a=g||"break";return p().createElement("li",{className:a},p().createElement("a",b({className:K,role:"button",tabIndex:"0","aria-label":d,onKeyPress:Z},I(Z)),s))};D.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const re=D;function W(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n??s}function ae(n){return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ae(n)}function X(){return X=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(n[g]=d[g])}return n},X.apply(this,arguments)}function fe(n,s){for(var d=0;d<s.length;d++){var g=s[d];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(n,g.key,g)}}function ee(n,s){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,g){return d.__proto__=g,d},ee(n,s)}function ne(n,s){if(s&&(ae(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(n)}function A(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function oe(n){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},oe(n)}function E(n,s,d){return s in n?Object.defineProperty(n,s,{value:d,enumerable:!0,configurable:!0,writable:!0}):n[s]=d,n}var ce=function(n){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&ee(a,e)})(I,n);var s,d,g,K,Z=(g=I,K=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=oe(g);if(K){var h=oe(this).constructor;a=Reflect.construct(e,arguments,h)}else a=e.apply(this,arguments);return ne(this,a)});function I(a){var e,h;return function(o,u){if(!(o instanceof u))throw new TypeError("Cannot call a class as a function")}(this,I),E(A(e=Z.call(this,a)),"handlePreviousPage",function(o){var u=e.state.selected;e.handleClick(o,null,u>0?u-1:void 0,{isPrevious:!0})}),E(A(e),"handleNextPage",function(o){var u=e.state.selected,f=e.props.pageCount;e.handleClick(o,null,u<f-1?u+1:void 0,{isNext:!0})}),E(A(e),"handlePageSelected",function(o,u){if(e.state.selected===o)return e.callActiveCallback(o),void e.handleClick(u,null,void 0,{isActive:!0});e.handleClick(u,null,o)}),E(A(e),"handlePageChange",function(o){e.state.selected!==o&&(e.setState({selected:o}),e.callCallback(o))}),E(A(e),"getEventListener",function(o){return E({},e.props.eventListener,o)}),E(A(e),"handleClick",function(o,u,f){var k=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},j=k.isPrevious,_=j!==void 0&&j,V=k.isNext,te=V!==void 0&&V,Q=k.isBreak,B=Q!==void 0&&Q,H=k.isActive,z=H!==void 0&&H;o.preventDefault?o.preventDefault():o.returnValue=!1;var F=e.state.selected,C=e.props.onClick,T=f;if(C){var R=C({index:u,selected:F,nextSelectedPage:f,event:o,isPrevious:_,isNext:te,isBreak:B,isActive:z});if(R===!1)return;Number.isInteger(R)&&(T=R)}T!==void 0&&e.handlePageChange(T)}),E(A(e),"handleBreakClick",function(o,u){var f=e.state.selected;e.handleClick(u,o,f<o?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),E(A(e),"callCallback",function(o){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:o})}),E(A(e),"callActiveCallback",function(o){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:o})}),E(A(e),"getElementPageRel",function(o){var u=e.state.selected,f=e.props,k=f.nextPageRel,j=f.prevPageRel,_=f.selectedPageRel;return u-1===o?j:u===o?_:u+1===o?k:void 0}),E(A(e),"pagination",function(){var o=[],u=e.props,f=u.pageRangeDisplayed,k=u.pageCount,j=u.marginPagesDisplayed,_=u.breakLabel,V=u.breakClassName,te=u.breakLinkClassName,Q=u.breakAriaLabels,B=e.state.selected;if(k<=f)for(var H=0;H<k;H++)o.push(e.getPageElement(H));else{var z=f/2,F=f-z;B>k-f/2?z=f-(F=k-B):B<f/2&&(F=f-(z=B));var C,T,R=function(J){return e.getPageElement(J)},L=[];for(C=0;C<k;C++){var se=C+1;if(se<=j)L.push({type:"page",index:C,display:R(C)});else if(se>k-j)L.push({type:"page",index:C,display:R(C)});else if(C>=B-z&&C<=B+(B===0&&f>1?F-1:F))L.push({type:"page",index:C,display:R(C)});else if(_&&L.length>0&&L[L.length-1].display!==T&&(f>0||j>0)){var pe=C<B?Q.backward:Q.forward;T=p().createElement(re,{key:C,breakAriaLabel:pe,breakLabel:_,breakClassName:V,breakLinkClassName:te,breakHandler:e.handleBreakClick.bind(null,C),getEventListener:e.getEventListener}),L.push({type:"break",index:C,display:T})}}L.forEach(function(J,Y){var ie=J;J.type==="break"&&L[Y-1]&&L[Y-1].type==="page"&&L[Y+1]&&L[Y+1].type==="page"&&L[Y+1].index-L[Y-1].index<=2&&(ie={type:"page",index:J.index,display:R(J.index)}),o.push(ie.display)})}return o}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),h=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:h},e}return s=I,(d=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,h=a.disableInitialCallback,o=a.extraAriaContext,u=a.pageCount,f=a.forcePage;e===void 0||h||this.callCallback(e),o&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(u)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(u,"). Did you forget a Math.ceil()?")),e!==void 0&&e>u-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(u-1,").")),f!==void 0&&f>u-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(f," > ").concat(u-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,h=e.pageCount,o=a+e.pageRangeDisplayed;return o>=h?h-1:o}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,h=e.hrefBuilder,o=e.pageCount,u=e.hrefAllControls;if(h)return u||a>=0&&a<o?h(a+1,o,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var h=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(h=h+" "+this.props.extraAriaContext),h}}},{key:"getPageElement",value:function(a){var e=this.state.selected,h=this.props,o=h.pageClassName,u=h.pageLinkClassName,f=h.activeClassName,k=h.activeLinkClassName,j=h.extraAriaContext,_=h.pageLabelBuilder;return p().createElement(P,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:o,pageLinkClassName:u,activeClassName:f,activeLinkClassName:k,extraAriaContext:j,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:_,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,h=e.disabledClassName,o=e.disabledLinkClassName,u=e.pageCount,f=e.className,k=e.containerClassName,j=e.previousLabel,_=e.previousClassName,V=e.previousLinkClassName,te=e.previousAriaLabel,Q=e.prevRel,B=e.nextLabel,H=e.nextClassName,z=e.nextLinkClassName,F=e.nextAriaLabel,C=e.nextRel,T=this.state.selected,R=T===0,L=T===u-1,se="".concat(W(_)).concat(R?" ".concat(W(h)):""),pe="".concat(W(H)).concat(L?" ".concat(W(h)):""),J="".concat(W(V)).concat(R?" ".concat(W(o)):""),Y="".concat(W(z)).concat(L?" ".concat(W(o)):""),ie=R?"true":"false",ye=L?"true":"false";return p().createElement("ul",{className:f||k,role:"navigation","aria-label":"Pagination"},p().createElement("li",{className:se},p().createElement("a",X({className:J,href:this.getElementHref(T-1),tabIndex:R?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ie,"aria-label":te,rel:Q},this.getEventListener(this.handlePreviousPage)),j)),this.pagination(),p().createElement("li",{className:pe},p().createElement("a",X({className:Y,href:this.getElementHref(T+1),tabIndex:L?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ye,"aria-label":F,rel:C},this.getEventListener(this.handleNextPage)),B)))}}])&&fe(s.prototype,d),Object.defineProperty(s,"prototype",{writable:!1}),I}(i.Component);E(ce,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),E(ce,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(n){return n},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ve=ce})(),$})())})(xe);var He=xe.exports;const ze=Pe(He),Fe=({totalPages:r})=>{const[l,m]=ge(),[v,O]=N.useState(Number(l.get("page"))||1),x=N.useMemo(()=>Object.fromEntries([...l]),[l]),$=i=>{O(i+1)};return N.useEffect(()=>{m({...x,page:v.toString()})},[v]),c.jsx(We,{children:c.jsx(ze,{pageCount:r>1e3?1e3:r,initialPage:v-1,pageRangeDisplayed:3,marginPagesDisplayed:1,breakLabel:"...",containerClassName:"container",pageLinkClassName:"page",activeLinkClassName:"active",nextClassName:"arrowBtn",previousClassName:"arrowBtn",breakClassName:"break",onPageChange:i=>$(i.selected),previousLabel:c.jsx(be,{direction:"prev",children:c.jsx(ue,{})}),nextLabel:c.jsx(be,{direction:"next",children:c.jsx(ue,{})})})})},Je=N.memo(({movies:r,selectMovie:l})=>{const m=le(Le);return c.jsxs(c.Fragment,{children:[c.jsx(_e,{children:r.length>0?c.jsx(Me,{children:r.map(v=>c.jsx(Re,{movie:v,selectMovie:l},v.id))}):c.jsxs(qe,{children:["OOPS... ",c.jsx("br",{})," We are very sorry! ",c.jsx("br",{})," We don’t have any results matching your search."]})}),c.jsx(Fe,{totalPages:m})]})}),Ye=w(de)(()=>{const{tablet:r}=G;return M`
    display: flex;
    justify-content: center;

    margin-top: 40px;
    margin-bottom: 16px;

    @media (width >= ${r}) {
      margin-top: 60px;
      margin-bottom: 32px;
    }
  `}),Ge=w.div(()=>{const{desktop:r}=G;return M`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;

    max-width: 520px;

    & > div:nth-child(1) {
      flex: 2;
    }

    @media (width >= ${r}) {
      max-width: 600px;
    }
  `}),Ue=w.input(({theme:r})=>{const{tablet:l}=G;return M`
    flex: 4;
    padding: 11px 20px;

    font-size: ${q.mobile.md}px;
    font-weight: 500;

    border-radius: 8px;
    border: 1px solid ${r.colors.grey};
    background-color: ${r.colors.background};
    color: ${r.colors.text};

    transition: border-color 100ms linear;

    &:focus {
      outline: none;
      border-color: ${r.colors.accent};
    }

    &::placeholder {
      font-size: ${q.mobile.md}px;
      font-weight: 500;
      color: ${r.colors.grey};
    }

    @media (width >= ${l}) {
      order: -1;
      padding: 13px 20px;
    }
  `}),Ke=w(je)(()=>{const{tablet:r}=G;return M`
    padding: 11px;
    color: ${we.white};

    @media (width >= ${r}) {
      padding: 13px;
    }
  `}),Ze=w.div`
  position: relative;
  display: flex;
`,Qe=w.button(({theme:r})=>{const{tablet:l}=G;return M`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 22px;

    width: 100%;
    padding: 11px 20px;

    font-size: ${q.mobile.md}px;
    font-weight: 500;

    border-radius: 8px;
    border: solid 1px ${r.colors.grey};
    background-color: transparent;
    color: ${r.colors.grey};

    cursor: pointer;

    transition: border-color 100ms linear;

    &:focus {
      border-color: ${r.colors.accent};
      outline: none;
    }

    @media (width >= ${l}) {
      padding: 13px 20px;
    }
  `}),Ve=w.div`
  display: flex;
  gap: 8px;
`,Xe=w.button`
  width: 16px;
  height: 16px;
  padding: 0;

  border: none;
  color: ${({theme:r})=>r.colors.grey};
  background-color: transparent;

  cursor: pointer;
`,et=w.div(({$isOpen:r})=>M`
      width: 16px;
      height: 16px;

      rotate: ${r?"180deg":"0deg"};

      transition: rotate 150ms linear;
    `),tt=w.ul(({theme:r,$isOpen:l})=>M`
      position: absolute;
      top: 100%;
      z-index: 1;

      display: ${l?"flex":"none"};
      flex-direction: column;

      min-width: 100%;
      max-height: 269px;
      padding: 12px 27px;

      text-align: center;

      border-radius: 8px;
      border: solid 1px ${r.colors.grey};
      background-color: ${r.colors.selectBackground};
      overflow-x: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    `),rt=w.li(({theme:r,$isSelected:l})=>M`
      padding: 6px 0;

      font-size: ${l?18:q.mobile.md}px;
      text-decoration: none;

      color: ${l?r.colors.accent:r.colors.text};

      transition: all 100ms linear;

      &:hover {
        color: ${r.colors.accent};
      }
    `),at=r=>{const l=N.useRef(null);return N.useEffect(()=>{const m=v=>{l.current&&!l.current.contains(v.target)&&r()};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[r]),l},me=({placeholder:r,options:l,isSingleValue:m,isClearable:v,onValueChange:O})=>{const[x,$]=N.useState(!1),[i,p]=N.useState([]),y=b=>{b.stopPropagation(),$(!x)},t=b=>{b.stopPropagation(),p([])},S=at(()=>$(!1)),U=b=>{if(m&&i.includes(b)){p([]);return}if(m){p([b]);return}if(!i.includes(b)){p([...i,b]);return}p(i.filter(D=>D!==b))},P=i.map(b=>{var D;return(D=l.find(re=>re.value===b))==null?void 0:D.label}).join(", ");return N.useEffect(()=>{O==null||O(i)},[i]),c.jsxs(Ze,{ref:S,children:[c.jsxs(Qe,{onClick:y,role:"combobox",type:"button",children:[i.length?P:r,c.jsxs(Ve,{children:[v&&i.length>0&&c.jsx(Xe,{onClick:t,children:c.jsx(Ae,{})}),c.jsx(et,{$isOpen:x,children:c.jsx(ue,{})})]})]}),c.jsx(tt,{$isOpen:x,role:"listbox",children:l.map(b=>c.jsx(rt,{$isSelected:i.includes(b.value),onClick:()=>U(b.value),tabIndex:0,role:"option",children:b.label},b.value))})]})},nt=()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),ot=(r,l)=>Array.from(new Array(l-r),(v,O)=>r+O).reverse(),st=(r,l)=>({...r,[l.type]:l.value}),it=N.memo(()=>{const[r,l]=N.useReducer(st,{year:[],genre:[],query:""}),m=le(Ne),v=ot(1930,new Date().getFullYear()),[O,x]=ge(),$=v.map(t=>Object.assign({value:t,label:t})),i=m.map(t=>Object.assign({value:t.id,label:t.name})),p=(t,S)=>{l({type:t,value:S})},y=t=>{t.preventDefault(),x({query:r.query,year:r.year.join(","),genre:r.genre.join(",")})};return c.jsx(Ye,{onSubmit:y,as:"form",children:c.jsxs(Ge,{children:[c.jsx(me,{placeholder:"Genre",isClearable:!0,options:i,onValueChange:t=>p("genre",t)},"genre"),c.jsx(me,{placeholder:"Year",options:$,isSingleValue:!0,onValueChange:t=>p("year",t)},"year"),c.jsx(Ue,{placeholder:"Search",name:"query",defaultValue:O.get("query")||"",onChange:t=>p("query",t.target.value),tabIndex:0}),c.jsx(Ke,{$isIconOnly:!0,type:"submit",children:c.jsx(nt,{})})]})})}),lt=N.memo(()=>{var t,S;const[r,l]=N.useState(null),m=Oe(),[v]=ge(),O=le(Ee),x=le($e),$=Number(v.get("page"))||1,i=v.get("query"),p=(t=v.get("year"))==null?void 0:t.split(","),y=(S=v.get("genre"))==null?void 0:S.split(",");return N.useEffect(()=>{if(!i&&!(p!=null&&p.length)&&!(y!=null&&y.length)){m(he({type:"popular",page:$}));return}m(he({type:"byQuery",filters:{query:i||"",year:p,genre:y},page:$}))},[v,m]),c.jsxs(Ie,{children:[c.jsx(Be,{openModal:l}),c.jsx(it,{}),x?c.jsx(Se,{}):c.jsx(Je,{movies:O,selectMovie:l}),r&&c.jsx(Te,{onClose:()=>l(null),children:c.jsx(De,{movie:r})})]})}),ut=lt;export{ut as default};
