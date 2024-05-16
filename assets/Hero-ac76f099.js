import{u as i,k as h,t as n,b as m,r as g,d as r,j as t,L as c,C as w,B as d}from"./index-e394d5df.js";import{R as $,S as f,e as j}from"./MovieDetails-bed61edd.js";const v=a=>a.trendingMovies.entities,b=a=>a.trendingMovies.isLoading,{desktop:e,tablet:o}=m,u=i.div`
  position: relative;
  height: 380px;
  overflow: hidden;

  @media (width >= ${o}) {
    height: 432px;
  }

  @media (width >= ${e}) {
    height: 720px;
  }
`,k=i.img`
  position: absolute;
  left: 50px;
  object-fit: cover;
  height: 100%;

  @media (width >= ${o}) {
    left: 100px;
  }

  @media (width >= ${e}) {
    left: 180px;
  }
`,M=i.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  padding: 40px 0;

  background: linear-gradient(82deg, #111 28.7%, transparent 100%);

  @media (width >= ${o}) {
    padding: 36px 0;
  }

  @media (width >= ${e}) {
    padding: 118px 0;
  }
`,y=i.h2`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 32px;
  color: ${h.white};

  @media (width >= ${o}) {
    font-size: 44px;
  }

  @media (width >= ${e}) {
    margin-left: 85px;

    font-size: ${n.desktop.xl}px;
  }
`,S=i($)`
  height: 16px;
  margin-bottom: 16px;

  @media (width >= ${o}) {
    height: 20px;
    margin-bottom: 20px;
  }

  @media (width >= ${e}) {
    height: 24px;
    margin-bottom: 28px;
    margin-left: 85px;
  }
`,p=i.span`
  display: inline-block;
  height: 16px;
  width: 20px;
  padding: 0 2px;

  @media (width >= ${o}) {
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
  font-size: ${n.mobile.md}px;
  color: ${h.white};

  @media (width >= ${o}) {
    width: 254px;
    margin-bottom: 28px;
  }

  @media (width >= ${e}) {
    width: 367px;
    margin-bottom: 36px;
    margin-left: 85px;
    font-size: ${n.desktop.sm}px;
  }
`,C=i.div`
  display: flex;
  gap: 8px;

  @media (width >= ${e}) {
    margin-left: 85px;
  }
`,B=g.memo(({openModal:a})=>{const x=r(v),l=r(b),s=x[0];return t.jsx(u,{children:l&&t.jsx(c,{})||s&&t.jsxs(t.Fragment,{children:[t.jsx(k,{src:`https://image.tmdb.org/t/p/original/${s.backdrop_path}`}),t.jsx(M,{children:t.jsxs(w,{children:[t.jsx(y,{children:s.title}),t.jsx(S,{initialValue:Math.round(s.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:t.jsx(p,{children:t.jsx(f,{})}),emptyIcon:t.jsx(p,{children:t.jsx(j,{})})}),t.jsxs(z,{children:[s.overview.split(" ").slice(0,25).join(" "),".."]}),t.jsxs(C,{children:[t.jsx(d,{children:"Watch trailer"}),t.jsx(d,{$isBordered:!0,$isColorless:!0,onClick:()=>a(s),children:"More details"})]})]})})]})})});export{B as H,b as a,v as s};
