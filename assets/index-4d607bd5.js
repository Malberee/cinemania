import{u as c,b as j,B as S,n as C,m as $,t as h,j as n,C as P,r as u,e as l,o as T,f as E,s as F,i as N,p as A,L as O,M as B}from"./index-9621549d.js";import{M as H,P as v}from"./Paginate-868512b3.js";import{M as _}from"./MovieDetails-0a3031c2.js";const{tablet:z,desktop:G}=j,R=c.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,W=c(S)`
  margin-top: 20px;

  @media (width >= ${z}) {
    margin-top: 24px;
  }

  @media (width >= ${G}) {
    margin-top: 28px;
  }
`;var b=1/0,k=9007199254740991,q=17976931348623157e292,y=0/0,D="[object Function]",U="[object GeneratorFunction]",X="[object Symbol]",Y=/^\s+|\s+$/g,J=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,V=/^(?:0|[1-9]\d*)$/,Z=parseInt,tt=Object.prototype,w=tt.toString,et=Math.ceil,rt=Math.max;function nt(t,e,r){var o=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var s=Array(i);++o<i;)s[o]=t[o+e];return s}function it(t,e){return e=e??k,!!e&&(typeof t=="number"||V.test(t))&&t>-1&&t%1==0&&t<e}function ot(t,e,r){if(!d(r))return!1;var o=typeof e;return(o=="number"?ct(r)&&it(e,r.length):o=="string"&&e in r)?at(r[e],t):!1}function st(t,e,r){(r?ot(t,e,r):e===void 0)?e=1:e=rt(mt(e),0);var o=t?t.length:0;if(!o||e<1)return[];for(var i=0,s=0,p=Array(et(o/e));i<o;)p[s++]=nt(t,i,i+=e);return p}function at(t,e){return t===e||t!==t&&e!==e}function ct(t){return t!=null&&gt(t.length)&&!pt(t)}function pt(t){var e=d(t)?w.call(t):"";return e==D||e==U}function gt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=k}function d(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function dt(t){return!!t&&typeof t=="object"}function ft(t){return typeof t=="symbol"||dt(t)&&w.call(t)==X}function ht(t){if(!t)return t===0?t:0;if(t=xt(t),t===b||t===-b){var e=t<0?-1:1;return e*q}return t===t?t:0}function mt(t){var e=ht(t),r=e%1;return e===e?r?e-r:e:0}function xt(t){if(typeof t=="number")return t;if(ft(t))return y;if(d(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=d(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Y,"");var r=K.test(t);return r||Q.test(t)?Z(t.slice(2),r?2:8):J.test(t)?y:+t}var ut=st;const lt=C(ut),{tablet:m,desktop:x}=j,bt=c.div`
  height: 380px;
  padding: 40px 0;

  background: linear-gradient(77deg, #111 28.7%, transparent 70%),
    url('images/background.jpg');
  background-size: cover;
  background-position: 25%;
  background-repeat: no-repeat;
  background-color: white;

  @media (width >= ${m}) {
    height: 372px;
    padding: 60px 0;
  }

  @media (width >= ${x}) {
    height: 660px;
    padding: 169px 0;
  }
`,yt=c.h1`
  margin-bottom: 8px;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: capitalize;

  color: ${$.white};

  @media (width >= ${m}) {
    font-size: 44px;
  }

  @media (width >= ${x}) {
    margin-bottom: 16px;
    margin-left: 85px;
    font-size: ${h.desktop.xl}px;
  }
`,jt=c.p`
  width: 249px;
  font-size: ${h.mobile.md}px;
  line-height: 1.2;
  color: ${$.secondaryText};

  @media (width >= ${m}) {
    width: 357px;
  }

  @media (width >= ${x}) {
    width: 464px;
    margin-left: 85px;
    font-size: ${h.tablet.md}px;
  }
`,$t=()=>n.jsx(bt,{children:n.jsxs(P,{children:[n.jsxs(yt,{children:["Create your ",n.jsx("br",{})," dream cinema"]}),n.jsx(jt,{children:"Is a guide to designing a personalized movie theater experience with the right equipment, customized decor, and favorite films. This guide helps you bring the cinema experience into your own home with cozy seating, dim lighting, and movie theater snacks."})]})}),kt=()=>{const[t,e]=u.useState(null),r=l(T),[o,i]=E(),s=l(F),{isLoggedIn:p}=N(),I=A(),g=Number(o.get("page")||1),a=lt(s,21),f=Object.fromEntries([...o]),M=L=>{i({...f,page:(L+1).toString()})};return u.useEffect(()=>{g<1&&i({...f,page:"1"}),a.length<g&&i({...f,page:(a.length||1).toString()})},[s]),n.jsxs(R,{children:[n.jsx($t,{}),r?n.jsx(O,{}):p&&n.jsxs(n.Fragment,{children:[n.jsx(H,{movies:a[g-1]||[],selectMovie:e,errorMessage:n.jsxs(n.Fragment,{children:["You don’t have any movies at your library.",n.jsx(W,{onClick:()=>I("/catalog"),children:"Search movie"})]})}),a.length>1&&n.jsx(v,{totalPages:a.length,currentPage:g-1,onPageChange:M})]}),t&&n.jsx(B,{onClose:()=>e(null),children:n.jsx(_,{movie:t})})]})},Lt=kt;export{Lt as default};
