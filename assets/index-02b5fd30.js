import{u as i,a as r,t as n,b as d,N as j,r as c,d as x,j as t,C as m,L as g,B as f,h as b,M as $}from"./index-97ef8c61.js";import{c as v,u as w,V as h,M}from"./MovieDetails-d5b5b311.js";import{s as y,a as k,H as z}from"./Hero-76b2451c.js";const L=i.div`

`,T=i.div(()=>{const{desktop:e,tablet:o}=d;return r`
    padding: 40px 0 16px 0;

    @media (width >= ${o}) {
      padding: 52px 0 22px 0;
    }

    @media (width >= ${e}) {
      padding: 80px 0 30px 0;
    }
  `}),S=i.div(()=>{const{desktop:e,tablet:o}=d;return r`
    display: flex;
    justify-content: space-between;

    margin-bottom: 24px;

    font-size: ${n.mobile.md};
    font-weight: 500;

    @media (width >= ${o}) {
      font-size: ${n.tablet.lg}px;
    }

    @media (width >= ${e}) {
      font-size: ${n.desktop.lg}px;
    }
  `}),W=i.h2`
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.text};
`,H=i(j)`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.accent};
`,I=i.ul(()=>{const{tablet:e}=d;return r`
    display: flex;
    gap: 20px;

    @media (width <= ${e}) {
      overflow-y: auto;
    }
  `}),U=c.memo(({selectMovie:e})=>{const o=x(y).slice(0,3),s=x(k);return t.jsx(T,{children:t.jsxs(m,{children:[t.jsxs(S,{children:[t.jsx(W,{children:"Weekly trends"}),t.jsx(H,{to:"/catalog",children:"See all"})]}),s&&t.jsx(g,{})||t.jsx(I,{children:o.map(a=>t.jsx(v,{movie:a,selectMovie:e},a.id))})]})})}),_=i.div(()=>{const{desktop:e,tablet:o}=d;return r`
    padding: 16px 0 12px 0;

    @media (width >= ${o}) {
      padding: 22px 0 37px 0;
    }

    @media (width >= ${e}) {
      padding: 30px 0 20px 0;
    }
  `}),A=i.h4(()=>{const{desktop:e,tablet:o}=d;return r`
    margin-bottom: 24px;

    text-transform: uppercase;
    font-size: ${n.mobile.md};
    font-weight: 500;

    color: ${({theme:s})=>s.colors.text};

    @media (width >= ${o}) {
      font-size: ${n.tablet.lg}px;
    }

    @media (width >= ${e}) {
      font-size: ${n.desktop.lg}px;
    }
  `}),C=i.div(()=>{const{desktop:e}=d;return r`
    @media (width >= ${e}) {
      display: flex;
      gap: 16px;
    }
  `}),V=i.picture(()=>{const{desktop:e,tablet:o}=d;return r`
    img {
      height: 402px;
      margin-bottom: 24px;
      border-radius: 5px;
      object-fit: cover;

      @media (width >= ${o}) {
        height: 400px;
        margin-bottom: 32px;
      }

      @media (width >= ${e}) {
        height: 458px;
        width: 805px;
        margin-bottom: 32px;
      }
    }
  `}),E=i.h3(()=>{const{desktop:e,tablet:o}=d;return r`
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: ${n.mobile.lg}px;
    font-weight: 500;
    color: ${({theme:s})=>s.colors.text};

    @media (width >= ${o}) {
      font-size: ${n.desktop.lg}px;
    }

    @media (width >= ${e}) {
      font-size: 32px;
    }
  `}),B=i.ul(()=>{const{desktop:e,tablet:o}=d;return r`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 12px;

    margin-bottom: 20px;

    font-weight: 500;

    @media (${e} > width >= ${o}) {
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

    @media (width >= ${e}) {
    }
  `}),l=i.li(({theme:e,color:o})=>r`
      color: ${e.colors[o||"grey"]};
    `),F=i.div`
  margin-bottom: 20px;
  color: ${({theme:e})=>e.colors.grey};

  h4 {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
  }

  p {
    font-size: ${n.mobile.md}px;
    line-height: 20px;
  }
`,G=c.memo(()=>{const[e,o]=c.useState(null),[s,a]=c.useState(!1),u=w((e==null?void 0:e.genre_ids)||[]).join(", ");return c.useEffect(()=>{(async()=>{try{a(!0);const p=await b("upcoming");o(p.data.results[1])}catch(p){console.error(p)}finally{a(!1)}})()},[]),t.jsx(_,{children:t.jsxs(m,{children:[t.jsx(A,{children:"Upcoming this month"}),s&&t.jsx(g,{})||e&&t.jsxs(C,{children:[t.jsxs(V,{children:[t.jsx("source",{srcSet:`https://image.tmdb.org/t/p/original/${e.backdrop_path}`,media:"(width >= 768px)"}),t.jsx("img",{src:`https://image.tmdb.org/t/p/original/${e.poster_path}`})]}),t.jsxs("div",{children:[t.jsx(E,{children:e.title}),t.jsxs(B,{children:[t.jsx(l,{children:"Release date"}),t.jsx(l,{color:"accent",children:e.release_date.replaceAll("-",".")}),t.jsx(l,{children:"Vote / Votes"}),t.jsxs(l,{children:[t.jsx(h,{children:e.vote_average.toFixed(1)})," ","/ ",t.jsx(h,{children:e.vote_count})]}),t.jsx(l,{children:"Popularity"}),t.jsx(l,{color:"text",children:e.popularity.toFixed(1)}),t.jsx(l,{children:"Genre"}),t.jsx(l,{color:"text",children:u})]}),t.jsxs(F,{children:[t.jsx("h4",{children:"About"}),t.jsx("p",{children:e.overview})]}),t.jsx(f,{children:"Add to my library"})]})]})]})})}),N=()=>{const[e,o]=c.useState(null),s=c.useCallback(a=>{if(a){o(a);return}o(null)},[]);return t.jsxs(L,{children:[t.jsx(z,{openModal:s}),t.jsx(U,{selectMovie:s}),t.jsx(G,{}),e&&t.jsx($,{onClose:s,children:t.jsx(M,{movie:e})})]})},J=N;export{J as default};
