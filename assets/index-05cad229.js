import{u as l,a as x,s as O,b,C as P,I as L,B as M,t as $,r as p,j as t,c as I,d as j,e as k,f as q,g as C,L as W,M as B}from"./index-33e55bc9.js";import{s as E,a as A,b as D,c as T,M as Y}from"./MovieDetails-799a8ac2.js";import{C as z,M as F,P as G}from"./Paginate-336cd085.js";import{H as R}from"./Hero-489a48e7.js";const H=l.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
`,Q=l(P)(()=>{const{tablet:e}=b;return x`
    display: flex;
    justify-content: center;

    margin-top: 40px;

    @media (width >= ${e}) {
      margin-top: 60px;
    }
  `}),N=l.div(()=>{const{desktop:e}=b;return x`
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
  `}),Z=l(L)(()=>{const{tablet:e}=b;return x`
    flex: 4;

    @media (width >= ${e}) {
      order: -1;
      padding: 13px 20px;
    }
  `}),_=l(M)(()=>{const{tablet:e}=b;return x`
    padding: 11px;
    color: ${O.white};

    @media (width >= ${e}) {
      padding: 13px;
    }
  `}),J=l.div`
  position: relative;
  display: flex;
`,K=l.button(({theme:e})=>{const{tablet:r}=b;return x`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    width: 100%;
    padding: 11px 20px;

    font-size: ${$.mobile.md}px;
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
  `}),U=l.div`
  display: flex;
  gap: 8px;
`,X=l.a`
  width: 16px;
  height: 16px;
  padding: 0;

  border: none;
  color: ${({theme:e})=>e.colors.grey};
  background-color: transparent;

  cursor: pointer;
`,V=l.div(({$isOpen:e})=>x`
      width: 16px;
      height: 16px;

      rotate: ${e?"180deg":"0deg"};

      transition: rotate 150ms linear;
    `),ee=l.ul(({theme:e,$isOpen:r})=>x`
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
    `),te=l.li(({theme:e,$isSelected:r})=>x`
      padding: 6px 0;

      font-size: ${r?18:$.mobile.md}px;
      text-decoration: none;

      color: ${r?e.colors.accent:e.colors.text};

      transition: all 100ms linear;

      &:hover {
        color: ${e.colors.accent};
        cursor: pointer;
      }
    `),re=e=>{const r=p.useRef(null);return p.useEffect(()=>{const c=a=>{r.current&&!r.current.contains(a.target)&&e()};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[e]),r},S=({placeholder:e,options:r,isSingleValue:c,isClearable:a,onValueChange:d})=>{const[h,m]=p.useState(!1),[n,i]=p.useState([]),f=o=>{o.stopPropagation(),m(!h)},s=o=>{o.stopPropagation(),i([])},u=re(()=>m(!1)),v=o=>{if(c&&n.includes(o)){i([]);return}if(c){i([o]);return}if(!n.includes(o)){i([...n,o]);return}i(n.filter(g=>g!==o))},y=n.map(o=>{var g;return(g=r.find(w=>w.value===o))==null?void 0:g.label});return p.useEffect(()=>{d==null||d(n)},[n]),t.jsxs(J,{ref:u,children:[t.jsxs(K,{onClick:f,role:"combobox",type:"button",children:[n.length>1?y.slice(0,1)+"...":n.length?y.toString():e,t.jsxs(U,{children:[a&&n.length>0&&t.jsx(X,{onClick:s,children:t.jsx(I,{})}),t.jsx(V,{$isOpen:h,children:t.jsx(z,{})})]})]}),t.jsx(ee,{$isOpen:h,role:"listbox",children:r.map(o=>t.jsx(te,{$isSelected:n.includes(o.value),onClick:()=>v(o.value),tabIndex:0,role:"option",children:o.label},o.value))})]})},se=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),oe=(e,r)=>Array.from(new Array(r-e),(a,d)=>e+d).reverse(),ne=(e,r)=>({...e,[r.type]:r.value}),ae=p.memo(()=>{const[e,r]=p.useReducer(ne,{year:[],genre:[],query:""}),c=j(E),a=oe(1930,new Date().getFullYear()),[d,h]=k(),m=a.map(s=>Object.assign({value:s,label:s})),n=c.map(s=>Object.assign({value:s.id,label:s.name})),i=(s,u)=>{r({type:s,value:u})},f=s=>{s.preventDefault(),h({query:e.query,year:e.year.join(","),genre:e.genre.join(",")})};return t.jsx(Q,{onSubmit:f,as:"form",children:t.jsxs(N,{children:[t.jsx(S,{placeholder:"Genre",isClearable:!0,options:n,onValueChange:s=>i("genre",s)},"genre"),t.jsx(S,{placeholder:"Year",options:m,isSingleValue:!0,onValueChange:s=>i("year",s)},"year"),t.jsx(Z,{placeholder:"Search",name:"query",defaultValue:d.get("query")||"",onChange:s=>i("query",s.target.value),tabIndex:0}),t.jsx(_,{$isIconOnly:!0,type:"submit",children:t.jsx(se,{})})]})})}),ie=p.memo(()=>{var y,o;const[e,r]=p.useState(null),c=q(),[a,d]=k(),h=j(A),m=j(D),n=j(T),i=Number(a.get("page")||1),f=a.get("query"),s=(y=a.get("year"))==null?void 0:y.split(","),u=(o=a.get("genre"))==null?void 0:o.split(","),v=g=>{const w=Object.fromEntries([...a]);d({...w,page:(g+1).toString()})};return p.useEffect(()=>{const g=setTimeout(()=>{if(!f&&!(s!=null&&s.length)&&!(u!=null&&u.length)){c(C({type:"popular",page:i}));return}c(C({type:"byQuery",filters:{query:f||"",year:s,genre:u},page:i}))},0);return()=>clearTimeout(g)},[a,c]),t.jsxs(H,{children:[t.jsx(R,{openModal:r}),t.jsx(ae,{}),m?t.jsx(W,{}):t.jsxs(t.Fragment,{children:[t.jsx(F,{movies:h,selectMovie:r}),t.jsx(G,{totalPages:n>500?500:n,onPageChange:v,currentPage:i-1})]}),e&&t.jsx(B,{onClose:()=>r(null),children:t.jsx(Y,{movie:e})})]})}),ue=ie;export{ue as default};
