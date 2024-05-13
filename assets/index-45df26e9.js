import{u as n,r as e,f as d,d as t,i as p,k as m,l as u,m as L,j as s,L as f,M as x}from"./index-97ef8c61.js";import{M}from"./MovieList-26960c64.js";import{M as v}from"./MovieDetails-d5b5b311.js";const h=n.div`
  height: 100%;
`,j=e.memo(()=>{const[o,a]=e.useState(null),r=d(),i=t(p),c=t(m),l=t(u);return e.useEffect(()=>{i&&r(L(i))},[r]),s.jsxs(h,{children:[c?s.jsx(f,{}):s.jsx(M,{movies:l,selectMovie:a}),o&&s.jsx(x,{onClose:()=>a(null),children:s.jsx(v,{movie:o})})]})}),E=j;export{E as default};
