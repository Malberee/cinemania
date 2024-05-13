import{u as o,a as s,s as l,t as n,b as r,r as c,d,j as e,L as m,C as g,B as p}from"./index-97ef8c61.js";import{R as w,S as b,d as u}from"./MovieDetails-d5b5b311.js";const $=t=>t.trendingMovies.entities,j=t=>t.trendingMovies.isLoading,v=o.div(()=>{const{desktop:t,tablet:i}=r;return s`
    position: relative;
    height: 380px;
    overflow: hidden;

    @media (width >= ${i}) {
      height: 432px;
    }

    @media (width >= ${t}) {
      height: 720px;
    }
  `}),f=o.img(()=>{const{desktop:t,tablet:i}=r;return s`
    position: absolute;
    left: 50px;
    object-fit: cover;
    height: 100%;

    @media (width >= ${i}) {
      left: 100px;
    }

    @media (width >= ${t}) {
      left: 180px;
    }
  `}),k=o.div(()=>{const{desktop:t,tablet:i}=r;return s`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    padding: 40px 0;

    background: linear-gradient(82deg, #111 28.7%, transparent 100%);

    @media (width >= ${i}) {
      padding: 36px 0;
    }

    @media (width >= ${t}) {
      padding: 118px 0;
    }
  `}),M=o.h2(()=>{const{desktop:t,tablet:i}=r;return s`
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 32px;
    color: ${l.white};

    @media (width >= ${i}) {
      font-size: 44px;
    }

    @media (width >= ${t}) {
      font-size: ${n.desktop.xl}px;
    }
  `}),y=o(w)(()=>{const{desktop:t,tablet:i}=r;return s`
    height: 16px;
    margin-bottom: 16px;

    @media (width >= ${i}) {
      height: 20px;
      margin-bottom: 20px;
    }

    @media (width >= ${t}) {
      height: 24px;
      margin-bottom: 28px;
    }
  `}),h=o.span(()=>{const{desktop:t,tablet:i}=r;return s`
    display: inline-block;
    height: 16px;
    width: 20px;
    padding: 0 2px;

    @media (width >= ${i}) {
      height: 20px;
      width: 24px;
    }

    @media (width >= ${t}) {
      height: 24px;
      width: 28px;
    }
  `}),S=o.p(()=>{const{desktop:t,tablet:i}=r;return s`
    width: 177px;
    margin-bottom: 20px;
    font-size: ${n.mobile.md}px;
    color: ${l.white};

    @media (width >= ${i}) {
      width: 254px;
      margin-bottom: 28px;
    }

    @media (width >= ${t}) {
      width: 367px;
      margin-bottom: 36px;
      font-size: ${n.desktop.sm}px;
    }
  `}),z=o.div`
  display: flex;
  gap: 8px;
`,W=c.memo(({openModal:t})=>{const i=d($),x=d(j),a=i[0];return e.jsx(v,{children:x&&e.jsx(m,{})||a&&e.jsxs(e.Fragment,{children:[e.jsx(f,{src:`https://image.tmdb.org/t/p/original/${a.backdrop_path}`}),e.jsx(k,{children:e.jsxs(g,{children:[e.jsx(M,{children:a.title}),e.jsx(y,{initialValue:Math.round(a.vote_average/2*2)/2,readonly:!0,allowFraction:!0,fillIcon:e.jsx(h,{children:e.jsx(b,{})}),emptyIcon:e.jsx(h,{children:e.jsx(u,{})})}),e.jsxs(S,{children:[a.overview.split(" ").slice(0,25).join(" "),".."]}),e.jsxs(z,{children:[e.jsx(p,{children:"Watch trailer"}),e.jsx(p,{$isBordered:!0,$isColorless:!0,onClick:()=>t(a),children:"More details"})]})]})})]})})});export{W as H,j as a,$ as s};
