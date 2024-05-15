import{u as o,t as i,b as g,N as v,r as a,d as h,j as e,C as j,L as f,a as b,B as w,h as M,M as y}from"./index-827c5813.js";import{d as k,u as z,V as m,M as L}from"./MovieDetails-fc302948.js";import{s as T,a as S,H as W}from"./Hero-c1522d43.js";const H=o.div`

`,{desktop:u,tablet:x}=g,I=o.div`
  padding: 40px 0 16px 0;

  @media (width >= ${x}) {
    padding: 52px 0 22px 0;
  }

  @media (width >= ${u}) {
    padding: 80px 0 30px 0;
  }
`,U=o.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  font-size: ${i.mobile.md};
  font-weight: 500;

  @media (width >= ${x}) {
    font-size: ${i.tablet.lg}px;
  }

  @media (width >= ${u}) {
    font-size: ${i.desktop.lg}px;
  }
`,_=o.h2`
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.text};
`,A=o(v)`
  text-decoration: none;
  color: ${({theme:t})=>t.colors.accent};
`,C=o.ul`
  display: flex;
  gap: 20px;

  @media (width <= ${x}) {
    overflow-y: auto;
  }
`,V=a.memo(({selectMovie:t})=>{const s=h(T).slice(0,3),d=h(S);return e.jsx(I,{children:e.jsxs(j,{children:[e.jsxs(U,{children:[e.jsx(_,{children:"Weekly trends"}),e.jsx(A,{to:"/catalog",children:"See all"})]}),d&&e.jsx(f,{})||e.jsx(C,{children:s.map(n=>e.jsx(k,{movie:n,selectMovie:t},n.id))})]})})}),{desktop:l,tablet:c}=g,E=o.div`
  padding: 16px 0 12px 0;

  @media (width >= ${c}) {
    padding: 22px 0 37px 0;
  }

  @media (width >= ${l}) {
    padding: 30px 0 20px 0;
  }
`,B=o.h4`
  margin-bottom: 24px;

  text-transform: uppercase;
  font-size: ${i.mobile.md};
  font-weight: 500;

  color: ${({theme:t})=>t.colors.text};

  @media (width >= ${c}) {
    font-size: ${i.tablet.lg}px;
  }

  @media (width >= ${l}) {
    font-size: ${i.desktop.lg}px;
  }
`,F=o.div`
  @media (width >= ${l}) {
    display: flex;
    gap: 16px;
  }
`,G=o.picture`
  img {
    height: 402px;
    margin-bottom: 24px;
    border-radius: 5px;
    object-fit: cover;

    @media (width >= ${c}) {
      height: 400px;
      margin-bottom: 32px;
    }

    @media (width >= ${l}) {
      height: 458px;
      width: 805px;
      margin-bottom: 32px;
    }
  }
`,N=o.h3`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: ${i.mobile.lg}px;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.text};

  @media (width >= ${c}) {
    font-size: ${i.desktop.lg}px;
  }

  @media (width >= ${l}) {
    font-size: 32px;
  }
`,P=o.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 12px;

  margin-bottom: 20px;

  font-weight: 500;

  @media (${l} > width >= ${c}) {
    grid-template-columns: repeat(4, 1fr);

    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(5),
    li:nth-child(6) {
      order: 0;
    }

    li:nth-child(3),
    li:nth-child(4) {
      order: 1;
    }

    li:nth-child(7),
    li:nth-child(8) {
      order: 3;
    }
  }

  @media (width >= ${l}) {
  }
`,r=o.li(({theme:t,color:s})=>b`
      color: ${t.colors[s||"grey"]};
    `),R=o.div`
  margin-bottom: 20px;
  color: ${({theme:t})=>t.colors.grey};

  h4 {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
  }

  p {
    font-size: ${i.mobile.md}px;
    line-height: 20px;
  }
`,D=a.memo(()=>{const[t,s]=a.useState(null),[d,n]=a.useState(!1),$=z((t==null?void 0:t.genre_ids)||[]).join(", ");return a.useEffect(()=>{(async()=>{try{n(!0);const p=await M("upcoming");s(p.data.results[1])}catch(p){console.error(p)}finally{n(!1)}})()},[]),e.jsx(E,{children:e.jsxs(j,{children:[e.jsx(B,{children:"Upcoming this month"}),d&&e.jsx(f,{})||t&&e.jsxs(F,{children:[e.jsxs(G,{children:[e.jsx("source",{srcSet:`https://image.tmdb.org/t/p/original/${t.backdrop_path}`,media:"(width >= 768px)"}),e.jsx("img",{src:`https://image.tmdb.org/t/p/original/${t.poster_path}`})]}),e.jsxs("div",{children:[e.jsx(N,{children:t.title}),e.jsxs(P,{children:[e.jsx(r,{children:"Release date"}),e.jsx(r,{color:"accent",children:t.release_date.replaceAll("-",".")}),e.jsx(r,{children:"Vote / Votes"}),e.jsxs(r,{children:[e.jsx(m,{children:t.vote_average.toFixed(1)})," ","/ ",e.jsx(m,{children:t.vote_count})]}),e.jsx(r,{children:"Popularity"}),e.jsx(r,{color:"text",children:t.popularity.toFixed(1)}),e.jsx(r,{children:"Genre"}),e.jsx(r,{color:"text",children:$})]}),e.jsxs(R,{children:[e.jsx("h4",{children:"About"}),e.jsx("p",{children:t.overview})]}),e.jsx(w,{children:"Add to my library"})]})]})]})})}),q=()=>{const[t,s]=a.useState(null),d=a.useCallback(n=>{if(n){s(n);return}s(null)},[]);return e.jsxs(H,{children:[e.jsx(W,{openModal:d}),e.jsx(V,{selectMovie:d}),e.jsx(D,{}),t&&e.jsx(y,{onClose:d,children:e.jsx(L,{movie:t})})]})},X=q;export{X as default};
