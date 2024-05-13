import{u as l,a as x,s as O,b as f,C as L,I as M,B as I,t as S,r as p,j as t,c as q,d as j,e as $,f as W,g as w,L as B,M as E}from"./index-54f01424.js";import{s as P,a as A,b as D,M as Y}from"./MovieDetails-f29b187b.js";import{C as z,M as G}from"./MovieList-1507d8d5.js";import{H as R}from"./Hero-006ab925.js";const T=l.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
`,F=l(L)(()=>{const{tablet:e}=f;return x`
    display: flex;
    justify-content: center;

    margin-top: 40px;
    margin-bottom: 16px;

    @media (width >= ${e}) {
      margin-top: 60px;
      margin-bottom: 32px;
    }
  `}),H=l.div(()=>{const{desktop:e}=f;return x`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;

    & > div:nth-child(1) {
      flex: 1;
    }

    @media (width >= ${e}) {
      max-width: 600px;
    }
  `}),Q=l(M)(()=>{const{tablet:e}=f;return x`
    flex: 4;

    @media (width >= ${e}) {
      order: -1;
      padding: 13px 20px;
    }
  `}),N=l(I)(()=>{const{tablet:e}=f;return x`
    padding: 11px;
    color: ${O.white};

    @media (width >= ${e}) {
      padding: 13px;
    }
  `}),Z=l.div`
  position: relative;
  display: flex;
`,_=l.button(({theme:e})=>{const{tablet:r}=f;return x`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    width: 100%;
    padding: 11px 20px;

    font-size: ${S.mobile.md}px;
    font-weight: 500;

    border-radius: 8px;
    border: solid 1px ${e.colors.grey};
    background-color: transparent;
    color: ${e.colors.grey};

    cursor: pointer;

    transition: border-color 100ms linear;

    &:focus {
      border-color: ${e.colors.accent};
      outline: none;
    }

    @media (width >= ${r}) {
      padding: 13px 20px;
    }
  `}),J=l.div`
  display: flex;
  gap: 8px;
`,K=l.a`
  width: 16px;
  height: 16px;
  padding: 0;

  border: none;
  color: ${({theme:e})=>e.colors.grey};
  background-color: transparent;

  cursor: pointer;
`,U=l.div(({$isOpen:e})=>x`
      width: 16px;
      height: 16px;

      rotate: ${e?"180deg":"0deg"};

      transition: rotate 150ms linear;
    `),X=l.ul(({theme:e,$isOpen:r})=>x`
      position: absolute;
      top: 100%;
      z-index: 1;

      display: ${r?"flex":"none"};
      flex-direction: column;

      min-width: 100%;
      max-height: 269px;
      padding: 12px 27px;

      text-align: center;

      border-radius: 8px;
      border: solid 1px ${e.colors.grey};
      background-color: ${e.colors.selectBackground};
      overflow-x: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    `),V=l.li(({theme:e,$isSelected:r})=>x`
      padding: 6px 0;

      font-size: ${r?18:S.mobile.md}px;
      text-decoration: none;

      color: ${r?e.colors.accent:e.colors.text};

      transition: all 100ms linear;

      &:hover {
        color: ${e.colors.accent};
        cursor: pointer;
      }
    `),ee=e=>{const r=p.useRef(null);return p.useEffect(()=>{const i=c=>{r.current&&!r.current.contains(c.target)&&e()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e]),r},C=({placeholder:e,options:r,isSingleValue:i,isClearable:c,onValueChange:d})=>{const[g,h]=p.useState(!1),[s,a]=p.useState([]),u=n=>{n.stopPropagation(),h(!g)},o=n=>{n.stopPropagation(),a([])},m=ee(()=>h(!1)),y=n=>{if(i&&s.includes(n)){a([]);return}if(i){a([n]);return}if(!s.includes(n)){a([...s,n]);return}a(s.filter(b=>b!==n))},v=s.map(n=>{var b;return(b=r.find(k=>k.value===n))==null?void 0:b.label});return p.useEffect(()=>{d==null||d(s)},[s]),t.jsxs(Z,{ref:m,children:[t.jsxs(_,{onClick:u,role:"combobox",type:"button",children:[s.length>1?v.slice(0,1)+"...":s.length?v.toString():e,t.jsxs(J,{children:[c&&s.length>0&&t.jsx(K,{onClick:o,children:t.jsx(q,{})}),t.jsx(U,{$isOpen:g,children:t.jsx(z,{})})]})]}),t.jsx(X,{$isOpen:g,role:"listbox",children:r.map(n=>t.jsx(V,{$isSelected:s.includes(n.value),onClick:()=>y(n.value),tabIndex:0,role:"option",children:n.label},n.value))})]})},te=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),re=(e,r)=>Array.from(new Array(r-e),(c,d)=>e+d).reverse(),oe=(e,r)=>({...e,[r.type]:r.value}),se=p.memo(()=>{const[e,r]=p.useReducer(oe,{year:[],genre:[],query:""}),i=j(P),c=re(1930,new Date().getFullYear()),[d,g]=$(),h=c.map(o=>Object.assign({value:o,label:o})),s=i.map(o=>Object.assign({value:o.id,label:o.name})),a=(o,m)=>{r({type:o,value:m})},u=o=>{o.preventDefault(),g({query:e.query,year:e.year.join(","),genre:e.genre.join(",")})};return t.jsx(F,{onSubmit:u,as:"form",children:t.jsxs(H,{children:[t.jsx(C,{placeholder:"Genre",isClearable:!0,options:s,onValueChange:o=>a("genre",o)},"genre"),t.jsx(C,{placeholder:"Year",options:h,isSingleValue:!0,onValueChange:o=>a("year",o)},"year"),t.jsx(Q,{placeholder:"Search",name:"query",defaultValue:d.get("query")||"",onChange:o=>a("query",o.target.value),tabIndex:0}),t.jsx(N,{$isIconOnly:!0,type:"submit",children:t.jsx(te,{})})]})})}),ne=p.memo(()=>{var o,m;const[e,r]=p.useState(null),i=W(),[c]=$(),d=j(A),g=j(D),h=Number(c.get("page"))||1,s=c.get("query"),a=(o=c.get("year"))==null?void 0:o.split(","),u=(m=c.get("genre"))==null?void 0:m.split(",");return p.useEffect(()=>{const y=setTimeout(()=>{if(!s&&!(a!=null&&a.length)&&!(u!=null&&u.length)){i(w({type:"popular",page:h}));return}i(w({type:"byQuery",filters:{query:s||"",year:a,genre:u},page:h}))},0);return()=>clearTimeout(y)},[c,i]),t.jsxs(T,{children:[t.jsx(R,{openModal:r}),t.jsx(se,{}),g?t.jsx(B,{}):t.jsx(G,{movies:d,selectMovie:r}),e&&t.jsx(E,{onClose:()=>r(null),children:t.jsx(Y,{movie:e})})]})}),pe=ne;export{pe as default};
