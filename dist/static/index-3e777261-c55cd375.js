import{s as U,B as F,r as o,u as De,g as he,a as r,c as ke,d as Ne,e as fe,f as je,A as Be,W as $e,S as Qe,C as ye,h as ne,i as We,k as Ye,l as qe,m as Ue,j as B,P as Ve,_ as ze,n as He,o as Ge,p as Ke,q as Xe,t as Je,v as Ze,F as et,w as W,x as tt,T as Y,y as X,z as ge,H as nt,E as st,G as rt,I as at,J as ot,K as it,L as ct,M as lt,N as Se,O as ut,Q as re,R as J,U as dt,V as Ie,X as mt,Y as ve,Z,$ as q,a0 as pt,a1 as ht,a2 as ft,a3 as ae,a4 as yt,a5 as gt,a6 as St,a7 as It,a8 as vt,a9 as Tt,aa as bt,ab as Lt,ac as Rt,ad as Et,ae as _t,af as wt,ag as Ct}from"./sanity-b0d6a3f4.js";import{useDeskToolSetting as oe}from"./index-0de920bc-93d3e648.js";import{P as Pt}from"./PaneItem-51d63fac-5dc74505.js";import"./json-inspector-2c0d51b2.js";var ie,ce,le,ue,de;function $(s,e){return e||(e=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(e)}}))}const me=100,ee=2e3,Te={by:[{field:"_updatedAt",direction:"desc"}]},xt={};function At(s){return vt(s).map(e=>({...e.draft||e.published,hasPublished:!!e.published,hasDraft:!!e.draft}))}const Ot=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function be(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=s.match(Ot);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),d=e[a];return typeof d=="string"?d:null}return t}function Mt(s){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(s.trim())}function Ft(s,e){const n=s.by.map(t=>{if(t.mapWith)return t;const a=Dt(e,t.field);return a?Nt(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===s.by[a])?s:{...s,by:n}}function Dt(s,e){const n=He(e);let t=s;for(const a of n){if(!t)return;if(typeof a=="string"){t=kt(t,a);continue}if(!(Ge(a)||Ke(a))||t.jsonType!=="array")return;const[c,u]=t.of||[];if(u||!c)return;if(!Xe(c)){t=c;continue}const[l,p]=c.to||[];if(p||!l)return;t=l}return t}function kt(s,e){if(!("fields"in s))return;const n=s.fields.find(t=>t.name===e);return n?n.type:void 0}function Nt(s,e){let n=s.type;for(;n;){if(n.name===e||!n.type&&n.jsonType===e)return!0;n=n.type}return!1}const jt=U(F)(ie||(ie=$([`
  position: relative;
`]))),Bt=U(F)(ce||(ce=$([`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`]))),$t=[...Array(30).keys()];function Qt(s){const{layout:e}=s;return r(ge,{padding:2,space:1,children:$t.map(n=>r(ye,{padding:2,children:r(Tt,{isPlaceholder:!0,layout:e})},n))})}function Wt(s){const{childItemId:e,error:n,filterIsSimpleTypeConstraint:t,hasMaxItems:a,hasSearchQuery:d,isActive:c,isLazyLoading:u,isLoading:l,items:p,layout:g,loadingVariant:f,onListChange:S,onRetry:R,paneTitle:m,searchInputElement:y,showIcons:E}=s,_=ne(),{collapsed:h}=Je(),{collapsed:I,index:b}=he(),[L,P]=o.useState(!1),D=o.useCallback(()=>{l||u||!L||S()},[u,l,S,L]);o.useEffect(()=>{if(I)return;const i=setTimeout(()=>{P(!0)},0);return()=>{clearTimeout(i)}},[I,p]);const w=o.useCallback((i,x)=>{let{activeIndex:A}=x;const O=Ze(i._id),v=e===O,T=!c&&v,V=c&&v,M=A===p.length-1,z=M&&u,H=M&&a;return B(et,{children:[r(Pt,{icon:E===!1?!1:void 0,id:O,layout:g,marginBottom:1,pressed:T,schemaType:_.get(i._type),selected:V,value:i}),z&&r(W,{align:"center",justify:"center",padding:4,children:r(tt,{muted:!0})}),H&&r(F,{marginY:1,paddingX:3,paddingY:4,children:B(Y,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",ee," documents"]})})]})},[e,c,p.length,g,_,E,a,u]),k=o.useMemo(()=>d?r(W,{align:"center",direction:"column",height:"fill",justify:"center",children:r(X,{width:1,children:r(F,{paddingX:4,paddingY:5,children:r(Y,{align:"center",muted:!0,children:"No results found"})})})}):r(W,{align:"center",direction:"column",height:"fill",justify:"center",children:r(X,{width:1,children:r(F,{paddingX:4,paddingY:5,children:r(Y,{align:"center",muted:!0,children:t?"No documents of this type":"No matching documents"})})})}),[t,d]),C=o.useMemo(()=>{if(!L)return null;if(n)return r(W,{align:"center",direction:"column",height:"fill",justify:"center",children:r(X,{width:1,children:B(ge,{paddingX:4,paddingY:5,space:4,children:[r(nt,{as:"h3",children:"Could not fetch list items"}),B(Y,{as:"p",children:["Error: ",r("code",{children:n.message})]}),R&&r(F,{children:r(fe,{icon:st,onClick:R,text:"Retry",tone:"primary"})})]})})});if(!l&&p.length===0)return k;if(f==="initial"&&l)return r(rt,{ms:300,children:r(Qt,{layout:g})});if(f==="spinner"&&l)return null;const i="".concat(b,"-").concat(I);return r(jt,{overflow:"hidden",height:"fill",children:r(Bt,{children:r(at,{activeItemDataAttr:"data-hovered",ariaLabel:m,canReceiveFocus:!0,focusRingOffset:-3,inputElement:y,itemHeight:51,items:p,onEndReached:D,onlyShowSelectionWhenActive:!0,overscan:10,padding:2,paddingBottom:1,renderItem:w,wrapAround:!1},i)})})},[I,n,D,b,l,p,g,f,R,w,y,L]);return r(ot,{overflow:h||f==="initial"?"hidden":"auto",children:C})}const Le=o.memo(s=>{let{contentAfter:e,index:n,initialValueTemplates:t=[],menuItemGroups:a=[],menuItems:d=[],setLayout:c,setSortOrder:u,title:l}=s;const{features:p}=De(),{collapsed:g,isLast:f}=he(),S=f&&!g?-1:0,R=o.useMemo(()=>({setLayout:m=>{let{layout:y}=m;c(y)},setSortOrder:m=>{u(m)}}),[c,u]);return r(ke,{actions:r(Ne,{initialValueTemplateItems:t,actionHandlers:R,menuItemGroups:a,menuItems:d}),backButton:p.backButton&&n>0&&r(fe,{as:je,"data-as":"a",icon:Be,mode:"bleed"}),contentAfter:e,tabIndex:S,title:l})});Le.displayName="DocumentListPaneHeader";function Yt(s){const{client:e,schema:n,sort:t,limit:a,params:d,filter:c,searchQuery:u,staticTypeNames:l}=s,p=t.by,g=t==null?void 0:t.extendedProjection,f=bt(()=>e.listen("*[".concat(c,"]"),d,{events:["welcome","mutation","reconnect"],includeResult:!1,visibility:"query"})).pipe(Z((m,y)=>y===0&&m.type!=="welcome"?J(()=>new Error(m.type==="reconnect"?"Could not establish EventSource connection":'Received unexpected type of first event "'.concat(m.type,'"'))):q(m)),Lt()),[S,R]=Rt(f,m=>m.type==="welcome");return Ie(S.pipe(ve(1)),R.pipe(Et(1e3,wt,{leading:!0,trailing:!0}))).pipe(_t(()=>(l?q(l):e.observable.fetch("array::unique(*[".concat(c,"][]._type)"),d)).pipe(Z(y=>{const E=y.flatMap(L=>n.get(L)||[]),_={filter:c,query:u||"",types:E},h={__unstable_extendedProjection:g,comments:["findability-source: ".concat(u?"list-query":"list")],limit:a,params:d,sort:p},{query:I,params:b}=Ct(_,h);return e.observable.fetch(I,b)}))))}const qt=[],pe={error:null,onRetry:void 0,result:null},Ut={result:null,error:null};function Vt(s){const{filter:e,params:n,sortOrder:t,searchQuery:a}=s,d=it(ct),c=ne(),[u,l]=o.useState(pe),{onRetry:p,error:g,result:f}=u,S=f==null?void 0:f.documents,R=o.useMemo(()=>S?At(S):qt,[S]),[m,y]=o.useState(!1),[E,_]=o.useState(!1),[h,I]=o.useState(!1),b=o.useMemo(()=>be(e,n),[e,n]),L=f===null&&!g,P=(S==null?void 0:S.length)===ee,D=o.useCallback(()=>{L||E||h||I(!0)},[L,E,h]),w=o.useCallback(i=>{var x,A;if(i.error){l(i);return}const O=((A=(x=i.result)==null?void 0:x.documents)==null?void 0:A.length)||0;if(!i.error&&(i==null?void 0:i.result)===null&&h){y(!0);return}if(O<me&&O!==0&&!h&&_(!0),(i==null?void 0:i.result)===null){l(T=>({...T.error?i:T}));return}y(!1),l(i)},[h]),k=o.useMemo(()=>{const i=new lt,x=()=>i.next();return Yt({client:d,filter:e,limit:h?ee:me,params:n,schema:c,searchQuery:a||"",sort:t||Te,staticTypeNames:b?[b]:void 0}).pipe(Se(v=>({result:{documents:v},error:null})),ut(Ut),re(v=>v instanceof ProgressEvent?J(()=>new Error("Request error")):J(()=>v)),re((v,T)=>dt(q({result:null,error:v}),Ie(mt(window,"online"),i).pipe(ve(1),Z(()=>T)))),pt((v,T)=>({...v,...T,onRetry:x})))},[d,e,n,c,a,h,t,b]);o.useEffect(()=>{const i=k.subscribe(w);return()=>{i.unsubscribe()}},[w,k]);const C=o.useCallback(()=>{_(!1),y(!1),l(pe),I(!1)},[]);return o.useEffect(()=>{C()},[C,e,n,t,a]),{error:g,hasMaxItems:P,isLazyLoading:m,isLoading:L,isSearchReady:!g,items:R,onListChange:D,onRetry:p}}const te=[],zt=$e(le||(le=$([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]))),Ht=U(Qe)(ue||(ue=$([`
  animation: `,` 500ms linear infinite;
`])),zt),Gt=U(ye)(de||(de=$([`
  [data-ui='TextInput'] {
    border-radius: inherit;
  }
`])));function Kt(s){const e=o.useRef(s);return ht(e.current,s)||(e.current=s),e.current}const Xt=s=>{const{menuItems:e,sortOrderRaw:n,layout:t}=s;return e==null?void 0:e.map(a=>{var d,c,u,l;return(d=a.params)!=null&&d.layout?{...a,selected:t===((c=a.params)==null?void 0:c.layout)}:(u=a==null?void 0:a.params)!=null&&u.by?{...a,selected:ft(n==null?void 0:n.by,((l=a==null?void 0:a.params)==null?void 0:l.by)||te)}:{...a,selected:!1}})},sn=o.memo(function(e){const{childItemId:n,index:t,isActive:a,isSelected:d,pane:c,paneKey:u}=e,l=ne(),{name:p}=We(),{defaultLayout:g="default",displayOptions:f,initialValueTemplates:S=te,menuItemGroups:R,menuItems:m,options:y,title:E}=c,{apiVersion:_,defaultOrdering:h=te,filter:I}=y,b=Kt(y.params||xt),L=c.source,P=o.useMemo(()=>be(I,b),[I,b]),D=(f==null?void 0:f.showIcons)!==!1,[w,k]=oe(P,"layout",g),[C,i]=o.useState(""),[x,A]=o.useState(""),[O,v]=o.useState(null),T=o.useRef(!1),V=o.useMemo(()=>(h==null?void 0:h.length)>0?{by:h}:Te,[h]),[M,z]=oe(P,"sortOrder",V),H=P&&M?Ft(M,l.get(P)):M,Re=Ye(H),Ee=Mt(I),{error:_e,hasMaxItems:we,isLazyLoading:Ce,isLoading:N,isSearchReady:Pe,items:G,onListChange:xe,onRetry:Ae}=Vt({apiVersion:_,filter:I,params:b,searchQuery:C==null?void 0:C.trim(),sortOrder:Re}),Oe=o.useMemo(()=>Xt({menuItems:m,sortOrderRaw:M,layout:w}),[w,m,M]),Me=qe(Q=>Q.pipe(Se(K=>K.target.value),ae(A),yt(K=>K===""?q(""):gt(300)),ae(i)),[]),j=o.useCallback(()=>{i(""),A("")},[]),Fe=o.useCallback(Q=>{Q.key==="Escape"&&j()},[j]);o.useEffect(()=>(T.current===!1&&!N&&(T.current=!0),()=>{T.current=!1}),[N]),o.useEffect(()=>{j(),T.current=!1},[u,j]);const se=o.useMemo(()=>N&&G.length===0&&T.current?"spinner":"initial",[N,G.length]);return r(Ue,{name:L||p,children:B(Ve,{currentMaxWidth:350,"data-ui":"DocumentListPane",id:u,maxWidth:640,minWidth:320,selected:d,children:[ze,r(Le,{contentAfter:r(F,{paddingX:2,paddingBottom:2,children:r(Gt,{radius:4,tone:"transparent",children:r(St,{"aria-label":"Search list",autoComplete:"off",border:!1,clearButton:!!C,disabled:!Pe,fontSize:[2,2,1],icon:se==="spinner"?Ht:It,onChange:Me,onClear:j,onKeyDown:Fe,placeholder:"Search list",radius:2,ref:v,spellCheck:!1,value:x})})}),index:t,initialValueTemplates:S,menuItemGroups:R,menuItems:Oe,setLayout:k,setSortOrder:z,title:E}),r(Wt,{childItemId:n,error:_e,filterIsSimpleTypeConstraint:Ee,hasMaxItems:we,hasSearchQuery:!!C,isActive:a,isLazyLoading:Ce,isLoading:N,items:G,layout:w,loadingVariant:se,onListChange:xe,onRetry:Ae,paneTitle:E,searchInputElement:O,showIcons:D},u)]})})});export{sn as default};
