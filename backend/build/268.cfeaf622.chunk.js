"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[268],{40268:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var P=_(92132),D=_(7637),n=_(40894),A=_(21272),C=_(34372),R=_(14718),l=_(86379),v=_(55151),U=_(79077),B=_(47561),t=_(15126),i=_(63299),I=_(67014),L=_(59080),d=_(79275),o=_(82437),T=_(61535),M=_(5790),E=_(12083),O=_(35223),K=_(5409),a=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(56336),S=_(13426),y=_(84624),j=_(77965),N=_(54257),H=_(71210),c=_(51187),e=_(39404),F=_(58692),x=_(501),G=_(57646),V=_(23120),$=_(44414),z=_(25962),X=_(14664),Y=_(42588),J=_(90325),Q=_(62785),Z=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),o_=_(34011),M_=_(67031);const m=()=>((0,n.u)(),(0,P.jsx)(D.HomePageCE,{}))},40894:(W,s,_)=>{_.d(s,{u:()=>B});var P=_(21272),D=_(34372),n=_(67031),A=_(54894),C=_(46725),R=_(47561);const l="strapi-notification-seat-limit",v="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:i,isError:I,isLoading:L}=(0,R.m)(),d=(0,D.hN)(),{pathname:o}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:O}=i??{};P.useEffect(()=>{if(I||L)return;const K=!n(M)&&!window.sessionStorage.getItem(`${l}-${o}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let a;E==="OVER_LIMIT"?a="warning":E==="AT_LIMIT"&&(a="softWarning"),K&&d({type:a,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:O?v:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:O})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${o}`,"true")}})},[d,i,o,t,L,M,E,T,O,I])}}}]);
