import{i as e}from"./chunk-FQFHLQFH-BioXHlKG.js";import{M as t,N as n,T as r,n as i}from"./chunk-GRVEB7DL-BKHCXA5M.js";import{K as a,S as o,T as s,X as c,b as l,l as u,o as d,p as f,q as p,y as m}from"./chunk-NCW2MGAP-CDjnVeEj.js";import{t as h}from"./chunk-2CD2RWVO-fZ5KpEbv.js";import"./chunk-3OTVAOVH-DTs1Psr1.js";import"./chunk-3QJOF6JT-DMA38jZI.js";import{f as g,r as _}from"./chunk-5FJ6MPNB-DVMuLe_w.js";import"./chunk-UKL4YMJ2-DekfJyRY.js";import"./chunk-MFRUYFWM-DK4TbbXy.js";import"./chunk-WEB62QT6-bKLrCvo8.js";import"./chunk-P6XZ56Y6-DesbCWrn.js";import{t as v}from"./chunk-WASTHULE-Bz2gEaAK.js";import{t as y}from"./chunk-COTS6TSK-BWrW8ALE.js";import"./chunk-7TV4ZQ6C-B55caLEz.js";import"./chunk-RPUGE2OU-BsRdDhak.js";import"./chunk-TQNTULNW-BiuSHfbJ.js";import"./chunk-ZJYGCH2D-B1uU-M8q.js";import"./chunk-Q6KCKTBH-DP7TjfMn.js";import"./chunk-7XTPNGWE-Cfl80Jgn.js";import"./chunk-FKWWLAQO-2Iy-l83z.js";import"./chunk-BPXICT63-CtjeVAUo.js";var b=f.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T={getConfig:e(()=>structuredClone(w),`getConfig`),clear:e(()=>{S=new Map,C=x.showData,d()},`clear`),setDiagramTitle:c,getDiagramTitle:s,setAccTitle:p,getAccTitle:l,setAccDescription:a,getAccDescription:m,addSection:e(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);S.has(e)||(S.set(e,t),r.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:e(()=>S,`getSections`),setShowData:e(e=>{C=e},`setShowData`),getShowData:e(()=>C,`getShowData`)},E=e((e,t)=>{v(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),D={parse:e(async e=>{let t=await y(`pie`,e);r.debug(t),E(t,T)},`parse`)},O=e(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),k=e(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),r=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return n().value(e=>e.value).sort(null)(r)},`createPieArcs`),A={parser:D,db:T,renderer:{draw:e((e,n,a,s)=>{r.debug(`rendering pie chart
`+e);let c=s.db,l=o(),d=_(c.getConfig(),l.pie),f=h(n),p=f.append(`g`);p.attr(`transform`,`translate(225,225)`);let{themeVariables:m}=l,[v]=g(m.pieOuterStrokeWidth);v??=2;let y=d.textPosition,b=i().innerRadius(0).outerRadius(185),x=i().innerRadius(185*y).outerRadius(185*y);p.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+v/2).attr(`class`,`pieOuterCircle`);let S=c.getSections(),C=k(S),w=[m.pie1,m.pie2,m.pie3,m.pie4,m.pie5,m.pie6,m.pie7,m.pie8,m.pie9,m.pie10,m.pie11,m.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=t(w).domain([...S.keys()]);p.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),p.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let O=p.append(`text`).text(c.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),A=[...S.entries()].map(([e,t])=>({label:e,value:t})),j=p.selectAll(`.legend`).data(A).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*A.length/2;return`translate(216,`+(t*22-n)+`)`});j.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),j.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>c.getShowData()?`${e.label} [${e.value}]`:e.label);let M=512+Math.max(...j.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),N=O.node()?.getBoundingClientRect().width??0,P=450/2-N/2,F=450/2+N/2,I=Math.min(0,P),L=Math.max(M,F)-I;f.attr(`viewBox`,`${I} 0 ${L} 450`),u(f,450,L,d.useMaxWidth)},`draw`)},styles:O};export{A as diagram};