"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[8642],{8642:(I,n,_)=>{_.r(n),_.d(n,{LoginEE:()=>T});var E=_(92132),D=_(48653),a=_(94061),O=_(83997),o=_(30893),l=_(54894),i=_(79793),P=_(47561),M=_(77452),L=_(34372),C=_(15126),d=_(63299),h=_(67014),s=_(59080),r=_(79275),A=_(14718),t=_(21272),K=_(82437),m=_(61535),g=_(5790),x=_(12083),j=_(35223),f=_(5409),c=_(74930),y=_(2600),S=_(48940),$=_(41286),N=_(56336),F=_(13426),z=_(84624),G=_(77965),Z=_(54257),H=_(71210),J=_(51187),Q=_(39404),V=_(58692),X=_(501),Y=_(57646),u=_(23120),e=_(44414),p=_(25962),w=_(14664),k=_(42588),b=_(90325),q=_(62785),__=_(87443),E_=_(41032),s_=_(22957),t_=_(93179),a_=_(73055),O_=_(15747),P_=_(85306),n_=_(26509),D_=_(32058),M_=_(81185),d_=_(82261);const B=(0,i.default)(D.c)`
  flex: 1;
`,T=R=>{const{formatMessage:U}=(0,l.A)(),{isLoading:W,data:v=[]}=(0,P.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!W&&v.length===0?(0,E.jsx)(P.L,{...R}):(0,E.jsx)(P.L,{...R,children:(0,E.jsx)(a.a,{paddingTop:7,children:(0,E.jsxs)(O.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(O.s,{children:[(0,E.jsx)(B,{}),(0,E.jsx)(a.a,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.o,{variant:"sigma",textColor:"neutral600",children:U({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(B,{})]}),(0,E.jsx)(M.S,{providers:v,displayAllProviders:!1})]})})})}},77452:(I,n,_)=>{_.d(n,{S:()=>L});var E=_(92132),D=_(90151),a=_(68074),O=_(79739),o=_(83997),l=_(30893),i=_(54894),P=_(28183),M=_(79793);const L=({providers:s,displayAllProviders:r})=>{const{formatMessage:A}=(0,i.A)();return r?(0,E.jsx)(D.x,{gap:4,children:s.map(t=>(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(d,{provider:t})},t.uid))}):s.length>2&&!r?(0,E.jsxs)(D.x,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(d,{provider:t})},t.uid)),(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(O.m,{label:A({id:"global.see-more"}),children:(0,E.jsx)(h,{as:P.N_,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(C,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(d,{provider:t},t.uid))})},C=(0,M.default)(o.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,d=({provider:s})=>(0,E.jsx)(O.m,{label:s.displayName,children:(0,E.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.o,{children:s.displayName})})}),h=M.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
