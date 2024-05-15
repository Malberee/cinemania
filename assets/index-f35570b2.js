import{u as c,s as P,b as $,C as M,I as L,B as I,a as b,t as k,r as p,j as t,c as W,d as y,e as O,f as q,g as C,L as B,M as E}from"./index-827c5813.js";import{s as A,a as D,b as T,c as Y,M as z}from"./MovieDetails-fc302948.js";import{C as F,M as G,P as R}from"./Paginate-e1e19018.js";import{H}from"./Hero-c1522d43.js";const Q=c.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
`,{tablet:w,desktop:N}=$,Z=c(M)`
  display: flex;
  justify-content: center;

  margin-top: 40px;

  @media (width >= ${w}) {
    margin-top: 60px;
  }
`,_=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  & > div:nth-child(1) {
    flex: 1;
  }

  @media (width >= ${N}) {
    max-width: 600px;
  }
`,J=c(L)`
  flex: 4;

  @media (width >= ${w}) {
    order: -1;
    padding: 13px 20px;
  }
`,K=c(I)`
  padding: 11px;
  color: ${P.white};

  @media (width >= ${w}) {
    padding: 13px;
  }
`,U=c.div`
  position: relative;
  display: flex;
`,X=c.button(({theme:e})=>{const{tablet:r}=$;return b`
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
  `}),V=c.div`
  display: flex;
  gap: 8px;
`,ee=c.a`
  width: 16px;
  height: 16px;
  padding: 0;

  border: none;
  color: ${({theme:e})=>e.colors.grey};
  background-color: transparent;

  cursor: pointer;
`,te=c.div(({$isOpen:e})=>b`
      width: 16px;
      height: 16px;

      rotate: ${e?"180deg":"0deg"};

      transition: rotate 150ms linear;
    `),re=c.ul(({theme:e,$isOpen:r})=>b`
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
    `),se=c.li(({theme:e,$isSelected:r})=>b`
      padding: 6px 0;

      font-size: ${r?18:k.mobile.md}px;
      text-decoration: none;

      color: ${r?e.colors.accent:e.colors.text};

      transition: all 100ms linear;

      &:hover {
        color: ${e.colors.accent};
        cursor: pointer;
      }
    `),oe=e=>{const r=p.useRef(null);return p.useEffect(()=>{const a=u=>{r.current&&!r.current.contains(u.target)&&e()};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[e]),r},S=({placeholder:e,options:r,isSingleValue:a,isClearable:u,onValueChange:l})=>{const[h,g]=p.useState(!1),[n,i]=p.useState([]),m=o=>{o.stopPropagation(),g(!h)},s=o=>{o.stopPropagation(),i([])},x=oe(()=>g(!1)),j=o=>{if(a&&n.includes(o)){i([]);return}if(a){i([o]);return}if(!n.includes(o)){i([...n,o]);return}i(n.filter(d=>d!==o))},f=n.map(o=>{var d;return(d=r.find(v=>v.value===o))==null?void 0:d.label});return p.useEffect(()=>{l==null||l(n)},[n]),t.jsxs(U,{ref:x,children:[t.jsxs(X,{onClick:m,role:"combobox",type:"button",children:[n.length>1?f.slice(0,1)+"...":n.length?f.toString():e,t.jsxs(V,{children:[u&&n.length>0&&t.jsx(ee,{onClick:s,children:t.jsx(W,{})}),t.jsx(te,{$isOpen:h,children:t.jsx(F,{})})]})]}),t.jsx(re,{$isOpen:h,role:"listbox",children:r.map(o=>t.jsx(se,{$isSelected:n.includes(o.value),onClick:()=>j(o.value),tabIndex:0,role:"option",children:o.label},o.value))})]})},ne=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),ae=(e,r)=>Array.from(new Array(r-e),(u,l)=>e+l).reverse(),ie=(e,r)=>({...e,[r.type]:r.value}),ce=p.memo(()=>{const[e,r]=p.useReducer(ie,{year:[],genre:[],query:""}),a=y(A),u=ae(1930,new Date().getFullYear()),[l,h]=O(),g=u.map(s=>Object.assign({value:s,label:s})),n=a.map(s=>Object.assign({value:s.id,label:s.name})),i=(s,x)=>{r({type:s,value:x})},m=s=>{s.preventDefault(),h({query:e.query,year:e.year.join(","),genre:e.genre.join(",")})};return t.jsx(Z,{onSubmit:m,as:"form",children:t.jsxs(_,{children:[t.jsx(S,{placeholder:"Genre",isClearable:!0,options:n,onValueChange:s=>i("genre",s)},"genre"),t.jsx(S,{placeholder:"Year",options:g,isSingleValue:!0,onValueChange:s=>i("year",s)},"year"),t.jsx(J,{placeholder:"Search",name:"query",defaultValue:l.get("query")||"",onChange:s=>i("query",s.target.value),tabIndex:0}),t.jsx(K,{$isIconOnly:!0,type:"submit",children:t.jsx(ne,{})})]})})}),le=()=>{var f,o;const[e,r]=p.useState(null),[a,u]=O(),l=y(D),h=y(T),g=y(Y),n=q(),i=Number(a.get("page")||1),m=a.get("query"),s=(f=a.get("year"))==null?void 0:f.split(","),x=(o=a.get("genre"))==null?void 0:o.split(","),j=d=>{const v=Object.fromEntries([...a]);d+1!==i&&u({...v,page:(d+1).toString()})};return p.useEffect(()=>{const d=setTimeout(()=>{if(!m&&!(s!=null&&s.length)&&!(x!=null&&x.length)){n(C({type:"popular",page:i}));return}n(C({type:"byQuery",filters:{query:m||"",year:s,genre:x},page:i}))},0);return()=>clearTimeout(d)},[a,n]),t.jsxs(Q,{children:[t.jsx(H,{openModal:r}),t.jsx(ce,{}),h?t.jsx(B,{}):t.jsxs(t.Fragment,{children:[t.jsx(G,{movies:l,selectMovie:r,errorMessage:"We don’t have any results matching your search."}),g>1&&t.jsx(R,{totalPages:g>500?500:g,onPageChange:j,currentPage:i-1})]}),e&&t.jsx(E,{onClose:()=>r(null),children:t.jsx(z,{movie:e})})]})},xe=le;export{xe as default};
