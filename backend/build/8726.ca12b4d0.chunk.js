"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[8726],{77452:(W,P,_)=>{_.d(P,{S:()=>v});var s=_(92132),M=_(90151),a=_(68074),n=_(79739),d=_(83997),h=_(30893),C=_(54894),A=_(28183),D=_(79793);const v=({providers:E,displayAllProviders:r})=>{const{formatMessage:B}=(0,C.A)();return r?(0,s.jsx)(M.x,{gap:4,children:E.map(t=>(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(O,{provider:t})},t.uid))}):E.length>2&&!r?(0,s.jsxs)(M.x,{gap:4,children:[E.slice(0,2).map(t=>(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(O,{provider:t})},t.uid)),(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(n.m,{label:B({id:"global.see-more"}),children:(0,s.jsx)(i,{as:A.N_,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(l,{justifyContent:"center",children:E.map(t=>(0,s.jsx)(O,{provider:t},t.uid))})},l=(0,D.default)(d.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:E})=>E.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:E})=>E.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }
`,O=({provider:E})=>(0,s.jsx)(n.m,{label:E.displayName,children:(0,s.jsx)(i,{href:`${window.strapi.backendURL}/admin/connect/${E.uid}`,children:E.icon?(0,s.jsx)("img",{src:E.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(h.o,{children:E.displayName})})}),i=D.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:E})=>E.colors.neutral150};
  border-radius: ${({theme:E})=>E.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:E})=>E.colors.neutral600};
`},48726:(W,P,_)=>{_.r(P),_.d(P,{FORMS:()=>U});var s=_(92132),M=_(38413),a=_(94061),n=_(30893),d=_(83997),h=_(43064),C=_(85963),A=_(48653),D=_(21610),v=_(54894),l=_(46725),O=_(28183),i=_(79793),E=_(47561),r=_(77452),B=_(34372),t=_(15126),g=_(63299),x=_(67014),j=_(59080),c=_(79275),f=_(14718),y=_(21272),S=_(82437),$=_(61535),e=_(5790),N=_(12083),u=_(35223),F=_(5409),z=_(74930),G=_(2600),Z=_(48940),H=_(41286),J=_(56336),Q=_(13426),V=_(84624),X=_(77965),Y=_(54257),p=_(71210),k=_(51187),w=_(39404),b=_(58692),q=_(501),__=_(57646),s_=_(23120),E_=_(44414),t_=_(25962),a_=_(14664),n_=_(42588),d_=_(90325),o_=_(62785),O_=_(87443),P_=_(41032),M_=_(22957),D_=_(93179),l_=_(73055),i_=_(15747),r_=_(85306),h_=_(26509),C_=_(32058),A_=_(81185),v_=_(82261);const T=()=>{const{push:I}=(0,l.W6)(),{formatMessage:o}=(0,v.A)(),{isLoading:m,data:L=[]}=(0,E.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),K=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!m&&L.length===0?(0,s.jsx)(l.rd,{to:"/auth/login"}):(0,s.jsx)(E.U,{children:(0,s.jsxs)(M.g,{children:[(0,s.jsxs)(E.h,{children:[(0,s.jsxs)(E.C,{children:[(0,s.jsx)(E.i,{}),(0,s.jsx)(a.a,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(n.o,{as:"h1",variant:"alpha",children:o({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(a.a,{paddingBottom:7,children:(0,s.jsx)(n.o,{variant:"epsilon",textColor:"neutral600",children:o({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.s,{direction:"column",alignItems:"stretch",gap:7,children:[m?(0,s.jsx)(d.s,{justifyContent:"center",children:(0,s.jsx)(h.a,{children:o({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(r.S,{providers:L}),(0,s.jsxs)(d.s,{children:[(0,s.jsx)(R,{}),(0,s.jsx)(a.a,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(n.o,{variant:"sigma",textColor:"neutral600",children:o({id:"or"})})}),(0,s.jsx)(R,{})]}),(0,s.jsx)(C.$,{fullWidth:!0,size:"L",onClick:K,children:o({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.s,{justifyContent:"center",children:(0,s.jsx)(a.a,{paddingTop:4,children:(0,s.jsx)(D.N,{as:O.k2,to:"/auth/forgot-password",children:(0,s.jsx)(n.o,{variant:"pi",children:o({id:"Auth.link.forgot-password"})})})})})]})})},R=(0,i.default)(A.c)`
  flex: 1;
`,U={providers:T}}}]);
