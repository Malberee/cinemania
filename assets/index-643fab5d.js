import{u as c,b as $,C as P,I as M,B as L,a as b,t as k,r as p,j as t,c as I,d as y,e as O,f as W,g as C,L as q,M as B}from"./index-91566caa.js";import{s as E,a as A,b as D,c as T,M as Y}from"./MovieDetails-876c03ab.js";import{C as z,M as F,P as G}from"./Paginate-1716c90c.js";import{H as R}from"./Hero-fd8673c4.js";const H=c.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
`,{tablet:w,desktop:Q}=$,N=c(P)`
  display: flex;
  justify-content: center;

  margin-top: 40px;

  @media (width >= ${w}) {
    margin-top: 60px;
  }
`,Z=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  & > div:nth-child(1) {
    flex: 1;
  }

  @media (width >= ${Q}) {
    max-width: 600px;
  }
`,_=c(M)`
  flex: 4;

  @media (width >= ${w}) {
    order: -1;
    padding: 13px 20px;
  }
`,J=c(L)`
  padding: 11px;
  color: ${({theme:e})=>e.colors.text};

  @media (width >= ${w}) {
    padding: 13px;
  }
`,K=c.div`
  position: relative;
  display: flex;
`,U=c.button(({theme:e})=>{const{tablet:r}=$;return b`
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

    @media (width >= ${r}) {
      padding: 13px 20px;
    }
  `}),X=c.div`
  display: flex;
  gap: 8px;
`,V=c.a`
  width: 16px;
  height: 16px;
  padding: 0;

  border: none;
  color: ${({theme:e})=>e.colors.grey};
  background-color: transparent;

  cursor: pointer;
`,ee=c.div(({$isOpen:e})=>b`
      width: 16px;
      height: 16px;

      rotate: ${e?"180deg":"0deg"};

      transition: rotate 150ms linear;
    `),te=c.ul(({theme:e,$isOpen:r})=>b`
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
    `),re=c.li(({theme:e,$isSelected:r})=>b`
      padding: 6px 0;

      font-size: ${r?18:k.mobile.md}px;
      text-decoration: none;

      color: ${r?e.colors.accent:e.colors.text};

      cursor: pointer;

      transition: all 100ms linear;

      &:hover {
        color: ${e.colors.accent};
      }
    `),se=e=>{const r=p.useRef(null);return p.useEffect(()=>{const a=u=>{r.current&&!r.current.contains(u.target)&&e()};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[e]),r},S=({placeholder:e,options:r,isSingleValue:a,isClearable:u,onValueChange:l})=>{const[h,g]=p.useState(!1),[n,i]=p.useState([]),m=o=>{o.stopPropagation(),g(!h)},s=o=>{o.stopPropagation(),i([])},x=se(()=>g(!1)),j=o=>{if(a&&n.includes(o)){i([]);return}if(a){i([o]);return}if(!n.includes(o)){i([...n,o]);return}i(n.filter(d=>d!==o))},f=n.map(o=>{var d;return(d=r.find(v=>v.value===o))==null?void 0:d.label});return p.useEffect(()=>{l==null||l(n)},[n]),t.jsxs(K,{ref:x,children:[t.jsxs(U,{onClick:m,role:"combobox",type:"button",children:[n.length>1?f.slice(0,1)+"...":n.length?f.toString():e,t.jsxs(X,{children:[u&&n.length>0&&t.jsx(V,{onClick:s,children:t.jsx(I,{})}),t.jsx(ee,{$isOpen:h,children:t.jsx(z,{})})]})]}),t.jsx(te,{$isOpen:h,role:"listbox",children:r.map(o=>t.jsx(re,{$isSelected:n.includes(o.value),onClick:()=>j(o.value),tabIndex:0,role:"option",children:o.label},o.value))})]})},oe=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),ne=(e,r)=>Array.from(new Array(r-e),(u,l)=>e+l).reverse(),ae=(e,r)=>({...e,[r.type]:r.value}),ie=p.memo(()=>{const[e,r]=p.useReducer(ae,{year:[],genre:[],query:""}),a=y(E),u=ne(1930,new Date().getFullYear()),[l,h]=O(),g=u.map(s=>Object.assign({value:s,label:s})),n=a.map(s=>Object.assign({value:s.id,label:s.name})),i=(s,x)=>{r({type:s,value:x})},m=s=>{s.preventDefault(),h({query:e.query,year:e.year.join(","),genre:e.genre.join(",")})};return t.jsx(N,{onSubmit:m,as:"form",children:t.jsxs(Z,{children:[t.jsx(S,{placeholder:"Genre",isClearable:!0,options:n,onValueChange:s=>i("genre",s)},"genre"),t.jsx(S,{placeholder:"Year",options:g,isSingleValue:!0,onValueChange:s=>i("year",s)},"year"),t.jsx(_,{placeholder:"Search",name:"query",defaultValue:l.get("query")||"",onChange:s=>i("query",s.target.value),tabIndex:0}),t.jsx(J,{$isIconOnly:!0,type:"submit",children:t.jsx(oe,{})})]})})}),ce=()=>{var f,o;const[e,r]=p.useState(null),[a,u]=O(),l=y(A),h=y(D),g=y(T),n=W(),i=Number(a.get("page")||1),m=a.get("query"),s=(f=a.get("year"))==null?void 0:f.split(","),x=(o=a.get("genre"))==null?void 0:o.split(","),j=d=>{const v=Object.fromEntries([...a]);d+1!==i&&u({...v,page:(d+1).toString()})};return p.useEffect(()=>{const d=setTimeout(()=>{if(!m&&!(s!=null&&s.length)&&!(x!=null&&x.length)){n(C({type:"popular",page:i}));return}n(C({type:"byQuery",filters:{query:m||"",year:s,genre:x},page:i}))},0);return()=>clearTimeout(d)},[a,n]),t.jsxs(H,{children:[t.jsx(R,{openModal:r}),t.jsx(ie,{}),h?t.jsx(q,{}):t.jsxs(t.Fragment,{children:[t.jsx(F,{movies:l,selectMovie:r,errorMessage:"We don’t have any results matching your search."}),g>1&&t.jsx(G,{totalPages:g>500?500:g,onPageChange:j,currentPage:i-1})]}),e&&t.jsx(B,{onClose:()=>r(null),children:t.jsx(Y,{movie:e})})]})},ge=ce;export{ge as default};
