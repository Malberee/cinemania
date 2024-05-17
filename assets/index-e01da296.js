import{u as o,t as i,b as j,N as z,r as a,e as h,j as e,C as b,L as v,a as S,g as T,i as A,s as I,B as _,_ as x,l as U,k as W,M as H}from"./index-9621549d.js";import{d as C,u as E,V as f,M as R}from"./MovieDetails-0a3031c2.js";import{s as V,a as B,H as D}from"./Hero-24726aef.js";const F=o.div`

`,{desktop:$,tablet:m}=j,G=o.div`
  padding: 40px 0 16px 0;

  @media (width >= ${m}) {
    padding: 52px 0 22px 0;
  }

  @media (width >= ${$}) {
    padding: 80px 0 30px 0;
  }
`,N=o.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  font-size: ${i.mobile.md};
  font-weight: 500;

  @media (width >= ${m}) {
    font-size: ${i.tablet.lg}px;
  }

  @media (width >= ${$}) {
    font-size: ${i.desktop.lg}px;
  }
`,P=o.h2`
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.text};
`,Y=o(z)`
  text-decoration: none;
  color: ${({theme:t})=>t.colors.accent};
`,q=o.ul`
  display: flex;
  gap: 20px;

  @media (width <= ${m}) {
    overflow-y: auto;
  }
`,J=a.memo(({selectMovie:t})=>{const s=h(V).slice(0,3),l=h(B);return e.jsx(G,{children:e.jsxs(b,{children:[e.jsxs(N,{children:[e.jsx(P,{children:"Weekly trends"}),e.jsx(Y,{to:"/catalog",children:"See all"})]}),l&&e.jsx(v,{})||e.jsx(q,{children:s.map(n=>e.jsx(C,{movie:n,selectMovie:t},n.id))})]})})}),{desktop:d,tablet:c}=j,K=o.div`
  padding: 16px 0 12px 0;

  @media (width >= ${c}) {
    padding: 22px 0 37px 0;
  }

  @media (width >= ${d}) {
    padding: 30px 0 20px 0;
  }
`,O=o.h4`
  margin-bottom: 24px;

  text-transform: uppercase;
  font-size: ${i.mobile.md};
  font-weight: 500;

  color: ${({theme:t})=>t.colors.text};

  @media (width >= ${c}) {
    font-size: ${i.tablet.lg}px;
  }

  @media (width >= ${d}) {
    font-size: ${i.desktop.lg}px;
  }
`,Q=o.div`
  @media (width >= ${d}) {
    display: flex;
    gap: 16px;
  }
`,X=o.picture`
  img {
    height: 402px;
    margin-bottom: 24px;
    border-radius: 5px;
    object-fit: cover;

    @media (width >= ${c}) {
      height: 400px;
      margin-bottom: 32px;
    }

    @media (width >= ${d}) {
      height: 458px;
      width: 805px;
      margin-bottom: 32px;
    }
  }
`,Z=o.h3`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: ${i.mobile.lg}px;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.text};

  @media (width >= ${c}) {
    font-size: ${i.desktop.lg}px;
  }

  @media (width >= ${d}) {
    font-size: 32px;
  }
`,ee=o.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 12px;

  margin-bottom: 20px;

  font-weight: 500;

  @media (${d} > width >= ${c}) {
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

  @media (width >= ${d}) {
  }
`,r=o.li(({theme:t,color:s})=>S`
      color: ${t.colors[s||"grey"]};
    `),te=o.div`
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
`,oe=a.memo(()=>{const[t,s]=a.useState(null),[l,n]=a.useState(!1),y=T(),{isLoggedIn:w}=A(),M=h(I),k=E((t==null?void 0:t.genre_ids)||[]).join(", "),p=!!M.find(g=>g.id===(t==null?void 0:t.id)),L=()=>{if(w){x.promise(y(U({movie:t,action:p?"remove":"add"})).unwrap(),{loading:p?"Removing from the library...":"Adding to the library...",success:p?"Successfully removed from the library":"Successfully added to library",error:"Error!"});return}x.error("You are not logged in")};return a.useEffect(()=>{(async()=>{try{n(!0);const u=await W("upcoming");s(u.data.results[1])}catch{x.error("Error loading upcoming movie")}finally{n(!1)}})()},[]),e.jsx(K,{children:e.jsxs(b,{children:[e.jsx(O,{children:"Upcoming this month"}),l&&e.jsx(v,{})||t&&e.jsxs(Q,{children:[e.jsxs(X,{children:[e.jsx("source",{srcSet:`https://image.tmdb.org/t/p/original/${t.backdrop_path}`,media:"(width >= 768px)"}),e.jsx("img",{src:`https://image.tmdb.org/t/p/original/${t.poster_path}`})]}),e.jsxs("div",{children:[e.jsx(Z,{children:t.title}),e.jsxs(ee,{children:[e.jsx(r,{children:"Release date"}),e.jsx(r,{color:"accent",children:t.release_date.replaceAll("-",".")}),e.jsx(r,{children:"Vote / Votes"}),e.jsxs(r,{children:[e.jsx(f,{children:t.vote_average.toFixed(1)})," ","/ ",e.jsx(f,{children:t.vote_count})]}),e.jsx(r,{children:"Popularity"}),e.jsx(r,{color:"text",children:t.popularity.toFixed(1)}),e.jsx(r,{children:"Genre"}),e.jsx(r,{color:"text",children:k})]}),e.jsxs(te,{children:[e.jsx("h4",{children:"About"}),e.jsx("p",{children:t.overview})]}),e.jsx(_,{onClick:L,children:p?"Remove from library":"Add to my library"})]})]})]})})}),ie=()=>{const[t,s]=a.useState(null),l=a.useCallback(n=>{s(n||null)},[]);return e.jsxs(F,{children:[e.jsx(D,{openModal:l}),e.jsx(J,{selectMovie:l}),e.jsx(oe,{}),t&&e.jsx(H,{onClose:()=>s(null),children:e.jsx(R,{movie:t})})]})},ae=ie;export{ae as default};
