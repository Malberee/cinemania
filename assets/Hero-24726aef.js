import{u as i,m as x,t as r,b as w,r as d,e as p,j as t,L as $,C as f,B as h}from"./index-9621549d.js";import{R as j,S as v,e as b,T as u}from"./MovieDetails-0a3031c2.js";const k=a=>a.trendingMovies.entities,y=a=>a.trendingMovies.isLoading,{desktop:e,tablet:s}=w,M=i.div`
  position: relative;
  height: 380px;
  overflow: hidden;

  @media (width >= ${s}) {
    height: 432px;
  }

  @media (width >= ${e}) {
    height: 720px;
  }
`,I=i.img`
  position: absolute;
  left: 50px;
  object-fit: cover;
  height: 100%;

  @media (width >= ${s}) {
    left: 100px;
  }

  @media (width >= ${e}) {
    left: 180px;
  }
`,S=i.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  padding: 40px 0;

  background: linear-gradient(82deg, #111 28.7%, transparent 100%);

  @media (width >= ${s}) {
    padding: 36px 0;
  }

  @media (width >= ${e}) {
    padding: 118px 0;
  }
`,C=i.h2`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 32px;
  color: ${x.white};

  @media (width >= ${s}) {
    font-size: 44px;
  }

  @media (width >= ${e}) {
    margin-left: 85px;

    font-size: ${r.desktop.xl}px;
  }
`,T=i(j)`
  height: 16px;
  margin-bottom: 16px;

  @media (width >= ${s}) {
    height: 20px;
    margin-bottom: 20px;
  }

  @media (width >= ${e}) {
    height: 24px;
    margin-bottom: 28px;
    margin-left: 85px;
  }
`,l=i.span`
  display: inline-block;
  height: 16px;
  width: 20px;
  padding: 0 2px;

  @media (width >= ${s}) {
    height: 20px;
    width: 24px;
  }

  @media (width >= ${e}) {
    height: 24px;
    width: 28px;
  }
`,z=i.p`
  width: 177px;
  margin-bottom: 20px;
  font-size: ${r.mobile.md}px;
  color: ${x.white};

  @media (width >= ${s}) {
    width: 254px;
    margin-bottom: 28px;
  }

  @media (width >= ${e}) {
    width: 367px;
    margin-bottom: 36px;
    margin-left: 85px;
    font-size: ${r.desktop.sm}px;
  }
`,L=i.div`
  display: flex;
  gap: 8px;

  @media (width >= ${e}) {
    margin-left: 85px;
  }
`,H=d.memo(({openModal:a})=>{const[m,n]=d.useState(!1),c=p(k),g=p(y),o=c[0];return t.jsxs(M,{children:[g&&t.jsx($,{})||o&&t.jsxs(t.Fragment,{children:[t.jsx(I,{src:`https://image.tmdb.org/t/p/original/${o.backdrop_path}`}),t.jsx(S,{children:t.jsxs(f,{children:[t.jsx(C,{children:o.title}),t.jsx(T,{initialValue:Math.round(o.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:t.jsx(l,{children:t.jsx(v,{})}),emptyIcon:t.jsx(l,{children:t.jsx(b,{})})}),t.jsxs(z,{children:[o.overview.split(" ").slice(0,25).join(" "),".."]}),t.jsxs(L,{children:[t.jsx(h,{onClick:()=>n(!0),children:"Watch trailer"}),t.jsx(h,{$isBordered:!0,$isColorless:!0,onClick:()=>a(o),children:"More details"})]})]})})]}),m&&t.jsx(u,{movieId:o.id,closeTrailer:()=>n(!1)})]})});export{H,y as a,k as s};
