"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[1272],{40216:(rt,U,s)=>{s.d(U,{S:()=>$});var t=s(92132),_=s(79793),p=s(94061),X=s(48653),m=s(83997),S=s(30893);const F=(0,_.default)(p.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:x})=>x.colors.primary600};
  }
`,N=(0,_.default)(p.a)`
  border-radius: 0 0 ${({theme:x})=>x.borderRadius} ${({theme:x})=>x.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,$=({children:x,icon:G,...z})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(X.c,{}),(0,t.jsx)(N,{as:"button",background:"primary100",padding:5,...z,children:(0,t.jsxs)(m.s,{children:[(0,t.jsx)(F,{"aria-hidden":!0,background:"primary200",children:G}),(0,t.jsx)(p.a,{paddingLeft:3,children:(0,t.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:x})})]})})]})},61272:(rt,U,s)=>{s.r(U),s.d(U,{default:()=>Nt});var t=s(92132),_=s(94061),p=s(83997),X=s(58805),m=s(30893),S=s(35513),F=s(26127),N=s(90361),$=s(33363),x=s(85963),G=s(40216),z=s(88353),dt=s(55356),ct=s(4198),d=s(34372),ht=s(68802),R=s(5194),H=s(41909),_t=s(50612),pt=s(41231),gt=s(77701),ut=s(54514),ft=s(46270),D=s(2600),mt=s(412),J=s(56336),Y=s(39404),I=s(54894),w=s(46725),W=s(21272),r=s(30200),E=s(79793),kt=s(14718),Zt=s(74428),Vt=s(48940),Xt=s(77160),Gt=s(21835),wt=s(17024),Qt=s(51187),Ht=s(12083),Jt=s(94710),Yt=s(14311),qt=s(82437),te=s(89102),ee=s(5409),se=s(35336),ne=s(71547),oe=s(58692),ae=s(71210),ie=s(5790),le=s(35223),re=s(45635);const Et=(0,E.default)(_.a)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`,q=E.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,d.a8)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,d.a8)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:e?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,tt=({customRowComponent:e,component:n,isFromDynamicZone:o=!1,isNestedInDZComponent:a=!1,firstLoopComponentUid:c})=>{const{modifiedData:l}=(0,r.u)(),{schema:{attributes:g}}=D(l,["components",n],{schema:{attributes:[]}});return(0,t.jsx)(q,{isChildOfDynamicZone:o,className:"component-row",children:(0,t.jsx)("td",{colSpan:12,children:(0,t.jsx)(st,{customRowComponent:e,items:g,targetUid:n,firstLoopComponentUid:c||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:a,isSub:!0,secondLoopComponentUid:c?n:null})})})},xt=({isActive:e=!1,icon:n="cube"})=>(0,t.jsx)(p.s,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:(0,t.jsx)(X.I,{as:r.C[n]||r.C.cube,height:5,width:5})}),et=(0,E.default)(_.a)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,d.a8)(8)};

  svg {
    width: ${(0,d.a8)(10)};
    height: ${(0,d.a8)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Mt=(0,E.default)(p.s)`
  width: ${(0,d.a8)(140)};
  height: ${(0,d.a8)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${et} {
      display: block;
    }

    ${m.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,yt=({component:e,dzName:n,index:o,isActive:a=!1,isInDevelopmentMode:c=!1,onClick:l})=>{const{modifiedData:g,removeComponentFromDynamicZone:C}=(0,r.u)(),{schema:{icon:y,displayName:M}}=D(g,["components",e],{schema:{}}),u=i=>{i.stopPropagation(),C(n,o)};return(0,t.jsxs)(Mt,{alignItems:"center",direction:"column",className:a?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:l,role:"tab",tabIndex:a?0:-1,cursor:"pointer","aria-selected":a,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[(0,t.jsx)(xt,{icon:y,isActive:a}),(0,t.jsx)(_.a,{marginTop:1,maxWidth:"100%",children:(0,t.jsx)(m.o,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:M})}),c&&(0,t.jsx)(et,{as:"button",onClick:u,children:(0,t.jsx)(ht.A,{})})]})},jt=(0,E.default)(R.A)`
  width: ${(0,d.a8)(32)};
  height: ${(0,d.a8)(32)};
  padding: ${(0,d.a8)(9)};
  border-radius: ${(0,d.a8)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Dt=(0,E.default)(_.a)`
  height: ${(0,d.a8)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Ct=(0,E.default)(p.s)`
  width: 100%;
  overflow-x: auto;
`,Ot=(0,E.default)(_.a)`
  padding-top: ${(0,d.a8)(90)};
`,Pt=(0,E.default)(p.s)`
  flex-shrink: 0;
  width: ${(0,d.a8)(140)};
  height: ${(0,d.a8)(80)};
  justify-content: center;
  align-items: center;
`,vt=({customRowComponent:e,components:n=[],addComponent:o,name:a,targetUid:c})=>{const{isInDevelopmentMode:l}=(0,r.u)(),[g,C]=(0,W.useState)(0),{formatMessage:y}=(0,I.A)(),M=i=>{g!==i&&C(i)},u=()=>{o(a)};return(0,t.jsx)(q,{className:"dynamiczone-row",isFromDynamicZone:!0,children:(0,t.jsxs)("td",{colSpan:12,children:[(0,t.jsx)(Dt,{paddingLeft:8,children:(0,t.jsxs)(Ct,{gap:2,children:[l&&(0,t.jsx)("button",{type:"button",onClick:u,children:(0,t.jsxs)(Pt,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(jt,{}),(0,t.jsx)(m.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:y({id:(0,r.g)("button.component.add"),defaultMessage:"Add a component"})})]})}),(0,t.jsx)(p.s,{role:"tablist",gap:2,children:n.map((i,h)=>(0,t.jsx)(yt,{dzName:a||"",index:h,component:i,isActive:g===h,isInDevelopmentMode:l,onClick:()=>M(h)},i))})]})}),(0,t.jsx)(Ot,{children:n.map((i,h)=>{const f={customRowComponent:e,component:i};return(0,t.jsx)(_.a,{id:`dz-${a}-panel-${h}`,role:"tabpanel","aria-labelledby":`dz-${a}-tab-${h}`,style:{display:g===h?"block":"none"},children:(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,W.createElement)(tt,{...f,isFromDynamicZone:!0,component:c,key:i})})})},i)})})]})})},Tt=(0,E.default)(_.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e,color:n})=>e.colors[`${n}600`]};
  }
`,At=(0,E.default)(_.a)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,bt=({children:e,icon:n,color:o,...a})=>(0,t.jsx)(At,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...a,children:(0,t.jsxs)(p.s,{children:[(0,t.jsx)(Tt,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),(0,t.jsx)(_.a,{paddingLeft:3,children:(0,t.jsx)(m.o,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:e})})]})}),st=({addComponentToDZ:e,customRowComponent:n,editTarget:o,firstLoopComponentUid:a,isFromDynamicZone:c=!1,isMain:l=!1,isNestedInDZComponent:g=!1,isSub:C=!1,items:y=[],secondLoopComponentUid:M,targetUid:u})=>{const{formatMessage:i}=(0,I.A)(),{trackUsage:h}=(0,d.z1)(),{isInDevelopmentMode:f,modifiedData:b,isInContentTypeView:P}=(0,r.u)(),{onOpenModalAddField:T}=(0,r.a)(),O=()=>{h("hasClickedCTBAddFieldBanner"),T({forTarget:o,targetUid:u})};return u?y.length===0&&l?(0,t.jsxs)(S.X,{colCount:2,rowCount:2,children:[(0,t.jsx)(F.d,{children:(0,t.jsxs)(N.Tr,{children:[(0,t.jsx)($.Th,{children:(0,t.jsx)(m.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)($.Th,{children:(0,t.jsx)(m.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.m5,{action:(0,t.jsx)(x.$,{onClick:O,size:"L",startIcon:(0,t.jsx)(R.A,{}),variant:"secondary",children:i({id:(0,r.g)("table.button.no-fields"),defaultMessage:"Add new field"})}),colSpan:2,content:P?{id:(0,r.g)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,r.g)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})]}):(0,t.jsxs)(Et,{children:[(0,t.jsx)(_.a,{paddingLeft:6,paddingRight:l?6:0,...l&&{style:{overflowX:"auto"}},children:(0,t.jsxs)("table",{children:[l&&(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(m.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)("th",{colSpan:2,children:(0,t.jsx)(m.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)("tbody",{children:y.map(v=>{const{type:B}=v,L=n;return(0,t.jsxs)(W.Fragment,{children:[(0,t.jsx)(L,{...v,isNestedInDZComponent:g,targetUid:u,editTarget:o,firstLoopComponentUid:a,isFromDynamicZone:c,secondLoopComponentUid:M}),B==="component"&&(0,t.jsx)(tt,{...v,customRowComponent:n,targetUid:u,isNestedInDZComponent:c,editTarget:o,firstLoopComponentUid:a}),B==="dynamiczone"&&(0,t.jsx)(vt,{...v,customRowComponent:n,addComponent:e,targetUid:u})]},v.name)})})]})}),l&&f&&(0,t.jsx)(G.S,{icon:(0,t.jsx)(R.A,{}),onClick:O,children:i({id:(0,r.g)(`form.button.add.field.to.${b.contentType?b.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),C&&f&&!c&&(0,t.jsx)(bt,{icon:(0,t.jsx)(R.A,{}),onClick:O,color:c?"primary":"neutral",children:i({id:(0,r.g)("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):(0,t.jsxs)(S.X,{colCount:2,rowCount:2,children:[(0,t.jsx)(F.d,{children:(0,t.jsxs)(N.Tr,{children:[(0,t.jsx)($.Th,{children:(0,t.jsx)(m.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)($.Th,{children:(0,t.jsx)(m.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.m5,{colSpan:2,content:{id:(0,r.g)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}})]})},Bt=(0,E.default)(_.a)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:n})=>e.colors[n]};
    display: block;
  }
`,$t=E.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:n})=>e.colors[n]};
  }
`,It=e=>(0,t.jsx)(Bt,{children:(0,t.jsx)($t,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),Rt=({type:e,customField:n=null,repeatable:o=!1})=>{const{formatMessage:a}=(0,I.A)();let c=e;return["integer","biginteger","float","decimal"].includes(e)?c="number":["string"].includes(e)&&(c="text"),n?(0,t.jsx)(m.o,{children:a({id:(0,r.g)("attribute.customField"),defaultMessage:"Custom field"})}):(0,t.jsxs)(m.o,{children:[a({id:(0,r.g)(`attribute.${c}`),defaultMessage:e}),"\xA0",o&&a({id:(0,r.g)("component.repeatable"),defaultMessage:"(repeatable)"})]})},Wt=({content:e})=>(0,t.jsx)(t.Fragment,{children:Y(e)}),Lt=(0,E.default)(_.a)`
  position: relative;
`,Kt=(0,W.memo)(({configurable:e=!0,customField:n=null,editTarget:o,firstLoopComponentUid:a=null,isFromDynamicZone:c=!1,name:l,onClick:g,relation:C="",repeatable:y=!1,secondLoopComponentUid:M=null,target:u=null,targetUid:i=null,type:h})=>{const{contentTypes:f,isInDevelopmentMode:b,removeAttribute:P}=(0,r.u)(),{formatMessage:T}=(0,I.A)(),O=h==="relation"&&C.includes("morph"),v=["integer","biginteger","float","decimal"].includes(h)?"number":h,B=D(f,[u],{}),L=D(B,["schema","displayName"],""),K=D(B,"plugin"),Q=u?"relation":v,k=()=>{O||e!==!1&&g(o,M||a||i,l,h,n)};let A;return M&&a?A=2:a?A=1:A=0,(0,t.jsxs)(Lt,{as:"tr",...(0,d.qM)({fn:k,condition:b&&e&&!O}),children:[(0,t.jsxs)("td",{style:{position:"relative"},children:[A!==0&&(0,t.jsx)(It,{color:c?"primary200":"neutral150"}),(0,t.jsxs)(p.s,{paddingLeft:2,gap:4,children:[(0,t.jsx)(r.A,{type:Q,customField:n}),(0,t.jsx)(m.o,{fontWeight:"bold",children:l})]})]}),(0,t.jsx)("td",{children:u?(0,t.jsxs)(m.o,{children:[T({id:(0,r.g)(`modelPage.attribute.${O?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",(0,t.jsxs)("span",{style:{fontStyle:"italic"},children:[(0,t.jsx)(Wt,{content:L}),"\xA0",K&&`(${T({id:(0,r.g)("from"),defaultMessage:"from"})}: ${K})`]})]}):(0,t.jsx)(Rt,{type:h,customField:n,repeatable:y})}),(0,t.jsx)("td",{children:b?(0,t.jsx)(p.s,{justifyContent:"flex-end",...d.dG,children:e?(0,t.jsxs)(p.s,{gap:1,children:[!O&&(0,t.jsx)(z.K,{onClick:k,label:`${T({id:"app.utils.edit",defaultMessage:"Edit"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(H.A,{})}),(0,t.jsx)(z.K,{onClick:Z=>{Z.stopPropagation(),P(o,l,M||a||"")},label:`${T({id:"global.delete",defaultMessage:"Delete"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(_t.A,{})})]}):(0,t.jsx)(pt.A,{})}):(0,t.jsx)(_.a,{height:(0,d.a8)(32)})})]})}),Ut=e=>{let n;switch(e){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=e}return n},St={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Ft=(0,W.memo)(({disabled:e,isTemporary:n=!1,isInContentTypeView:o=!0,contentTypeKind:a="collectionType",targetUid:c=""})=>{const{formatMessage:l}=(0,I.A)(),{push:g}=(0,w.W6)(),{collectionTypesConfigurations:C,componentsConfigurations:y,singleTypesConfigurations:M}=St,u=l({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let i=C;const h=()=>(n||g(o?`/content-manager/collection-types/${c}/configurations/edit`:`/content-manager/components/${c}/configurations/edit`),!1);return o&&a==="singleType"&&(i=M),o||(i=y),(0,t.jsx)(d.d4,{permissions:i,children:(0,t.jsx)(x.$,{startIcon:(0,t.jsx)(gt.A,{}),variant:"tertiary",onClick:h,disabled:n||e,children:u})})}),Nt=()=>{const{initialData:e,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:a,submitData:c}=(0,r.u)(),{formatMessage:l}=(0,I.A)(),{trackUsage:g}=(0,d.z1)(),C=(0,w.W5)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:y,onOpenModalAddField:M,onOpenModalEditField:u,onOpenModalEditSchema:i,onOpenModalEditCustomField:h}=(0,r.a)(),f=a?"contentType":"component",b=[f,"schema","attributes"],P=D(n,[f,"uid"]),T=D(n,[f,"isTemporary"],!1),O=D(n,[f,"schema","kind"],null),v=D(n,b,[]),B=mt(e,[f,"plugin"]),L=!J(n,e),K=a?"contentType":"component",Q=j=>{y({dynamicZoneTarget:j,targetUid:P})},k=async(j,nt,ot,at,it)=>{const lt=Ut(at);it?h({forTarget:j,targetUid:nt,attributeName:ot,attributeType:lt,customFieldUid:it}):u({forTarget:j,targetUid:nt,attributeName:ot,attributeType:lt,step:at==="component"?"2":null})};let A=D(n,[f,"schema","displayName"],"");const Z=D(n,[f,"schema","kind"],""),V=C?.params.currentUID==="create-content-type";!A&&V&&(A=l({id:(0,r.g)("button.model.create"),defaultMessage:"Create new collection type"}));const zt=()=>{const j=Z||f;j==="collectionType"&&g("willEditNameOfContentType"),j==="singleType"&&g("willEditNameOfSingleType"),i({modalType:f,forTarget:f,targetUid:P,kind:j})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.XG,{message:j=>j.hash==="#back"?!1:l({id:(0,r.g)("prompt.unsaved")}),when:L}),(0,t.jsx)(dt.Q,{id:"title",primaryAction:o&&(0,t.jsxs)(p.s,{gap:2,children:[!V&&(0,t.jsx)(x.$,{startIcon:(0,t.jsx)(R.A,{}),variant:"secondary",onClick:()=>{M({forTarget:K,targetUid:P})},children:l({id:(0,r.g)("button.attributes.add.another"),defaultMessage:"Add another field"})}),(0,t.jsx)(x.$,{startIcon:(0,t.jsx)(ut.A,{}),onClick:async()=>await c(),type:"submit",disabled:J(n,e),children:l({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:o&&!B&&!V&&(0,t.jsx)(x.$,{startIcon:(0,t.jsx)(H.A,{}),variant:"tertiary",onClick:zt,children:l({id:"app.utils.edit",defaultMessage:"Edit"})}),title:Y(A),subtitle:l({id:(0,r.g)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:(0,t.jsx)(d.N_,{startIcon:(0,t.jsx)(ft.A,{}),to:"/plugins/content-type-builder/",children:l({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(ct.s,{children:(0,t.jsxs)(p.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(p.s,{justifyContent:"flex-end",children:(0,t.jsx)(p.s,{gap:2,children:(0,t.jsx)(Ft,{targetUid:P,isTemporary:T,isInContentTypeView:a,contentTypeKind:O,disabled:V},"link-to-cm-settings-view")})}),(0,t.jsx)(_.a,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(st,{items:v,customRowComponent:j=>(0,t.jsx)(Kt,{...j,onClick:k}),addComponentToDZ:Q,targetUid:P,editTarget:K,isMain:!0})})]})})]})}}}]);
