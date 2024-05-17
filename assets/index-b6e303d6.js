import{u as c,b as $,C as O,I as L,B as I,a as j,t as k,r as h,c as W,j as t,d as q,e as b,f as M,g as B,h as C,L as E,M as A}from"./index-d55e5d20.js";import{s as D,a as T,b as Y,c as z,M as F}from"./MovieDetails-800b20d7.js";import{C as G,M as H,P as Q}from"./Paginate-42762508.js";import{H as R}from"./Hero-ecc0259b.js";const N=c.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
`,{tablet:S,desktop:Z}=$,_=c(O)`
  display: flex;
  justify-content: center;

  margin-top: 40px;

  @media (width >= ${S}) {
    margin-top: 60px;
  }
`,J=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  & > div:nth-child(1) {
    flex: 1;
  }

  @media (width >= ${Z}) {
    max-width: 600px;
  }
`,K=c(L)`
  flex: 4;

  @media (width >= ${S}) {
    order: -1;
    padding: 13px 20px;
  }
`,U=c(I)`
  padding: 11px;
  color: ${({theme:e})=>e.colors.text};

  @media (width >= ${S}) {
    padding: 13px;
  }
`,X=c.div`
  position: relative;
  display: flex;
`,V=c.button(({theme:e})=>{const{tablet:s}=$;return j`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    width: 100%;
    padding: 11px 20px;

    font-size: ${k.mobile.md}px;
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

    @media (width >= ${s}) {
      padding: 13px 20px;
    }
  `}),ee=c.div`
  display: flex;
  gap: 8px;
`,te=c.a`
  width: 16px;
  height: 16px;
  padding: 0;

  border: none;
  color: ${({theme:e})=>e.colors.grey};
  background-color: transparent;

  cursor: pointer;
`,re=c.div(({$isOpen:e})=>j`
      width: 16px;
      height: 16px;

      rotate: ${e?"180deg":"0deg"};

      transition: rotate 150ms linear;
    `),se=c.ul(({theme:e,$isOpen:s})=>j`
      position: absolute;
      top: 100%;
      z-index: 1;

      display: ${s?"flex":"none"};
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
    `),oe=c.li(({theme:e,$isSelected:s})=>j`
      padding: 6px 0;

      font-size: ${s?18:k.mobile.md}px;
      text-decoration: none;

      color: ${s?e.colors.accent:e.colors.text};

      cursor: pointer;

      transition: all 100ms linear;

      &:hover {
        color: ${e.colors.accent};
      }
    `),w=({placeholder:e,options:s,isSingleValue:i,isClearable:m,onValueChange:l})=>{const[x,p]=h.useState(!1),[n,a]=h.useState([]),f=o=>{o.stopPropagation(),p(!x)},r=o=>{o.stopPropagation(),a([])},d=W(()=>p(!1)),v=o=>{if(i&&n.includes(o)){a([]);return}if(i){a([o]);return}if(!n.includes(o)){a([...n,o]);return}a(n.filter(g=>g!==o))},y=n.map(o=>{var g;return(g=s.find(u=>u.value===o))==null?void 0:g.label});return h.useEffect(()=>{l==null||l(n)},[n]),t.jsxs(X,{ref:d,children:[t.jsxs(V,{onClick:f,role:"combobox",type:"button",children:[n.length>1?y.slice(0,1)+"...":n.length?y.toString():e,t.jsxs(ee,{children:[m&&n.length>0&&t.jsx(te,{onClick:r,children:t.jsx(q,{})}),t.jsx(re,{$isOpen:x,children:t.jsx(G,{})})]})]}),t.jsx(se,{$isOpen:x,role:"listbox",children:s.map(o=>t.jsx(oe,{$isSelected:n.includes(o.value),onClick:()=>v(o.value),tabIndex:0,role:"option",children:o.label},o.value))})]})},ne=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),ae=(e,s)=>Array.from(new Array(s-e),(m,l)=>e+l).reverse(),ie=(e,s)=>({...e,[s.type]:s.value}),ce=h.memo(()=>{const[e,s]=h.useReducer(ie,{year:[],genre:[],query:""}),i=b(D),m=ae(1930,new Date().getFullYear()),[l,x]=M(),p=m.map(r=>Object.assign({value:r,label:r})),n=i.map(r=>Object.assign({value:r.id,label:r.name})),a=(r,d)=>{s({type:r,value:d})},f=r=>{r.preventDefault(),x({query:e.query,year:e.year.join(","),genre:e.genre.join(",")})};return t.jsx(_,{onSubmit:f,as:"form",children:t.jsxs(J,{children:[t.jsx(w,{placeholder:"Genre",isClearable:!0,options:n,onValueChange:r=>a("genre",r)},"genre"),t.jsx(w,{placeholder:"Year",options:p,isSingleValue:!0,onValueChange:r=>a("year",r)},"year"),t.jsx(K,{placeholder:"Search",name:"query",defaultValue:l.get("query")||"",onChange:r=>a("query",r.target.value),tabIndex:0}),t.jsx(U,{$isIconOnly:!0,type:"submit",children:t.jsx(ne,{})})]})})}),le=()=>{var o,g;const[e,s]=h.useState(null),[i,m]=M(),l=b(T),x=b(Y),p=b(z),n=B(),a=Number(i.get("page")||1),f=i.get("query"),r=(o=i.get("year"))==null?void 0:o.split(","),d=(g=i.get("genre"))==null?void 0:g.split(","),v=u=>{const P=Object.fromEntries([...i]);u+1!==a&&m({...P,page:(u+1).toString()})},y=u=>{s(u||null)};return h.useEffect(()=>{const u=setTimeout(()=>{if(!f&&!(r!=null&&r.length)&&!(d!=null&&d.length)){n(C({type:"popular",page:a}));return}n(C({type:"byQuery",filters:{query:f||"",year:r,genre:d},page:a}))},0);return()=>clearTimeout(u)},[i,n]),t.jsxs(N,{children:[t.jsx(R,{openModal:y}),t.jsx(ce,{}),x?t.jsx(E,{}):t.jsxs(t.Fragment,{children:[t.jsx(H,{movies:l,selectMovie:s,errorMessage:"We don’t have any results matching your search."}),p>1&&t.jsx(Q,{totalPages:p>500?500:p,onPageChange:v,currentPage:a-1})]}),e&&t.jsx(A,{onClose:()=>s(null),children:t.jsx(F,{movie:e})})]})},ge=le;export{ge as default};
