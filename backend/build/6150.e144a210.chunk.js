"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[6150],{44930:(oe,G,s)=>{s.d(G,{A:()=>K});var Q=s(26335),d=s(94683),X=s(75704),v=s(3918);function K(O,C){var _,P,W,y,Y,S,$,N;(0,d.A)(1,arguments);var E=(0,v.q)(),b=(0,X.A)((_=(P=(W=(y=C?.weekStartsOn)!==null&&y!==void 0?y:C==null||(Y=C.locale)===null||Y===void 0||(S=Y.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&W!==void 0?W:E.weekStartsOn)!==null&&P!==void 0?P:($=E.locale)===null||$===void 0||(N=$.options)===null||N===void 0?void 0:N.weekStartsOn)!==null&&_!==void 0?_:0);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var D=(0,Q.A)(O),q=D.getUTCDay(),j=(q<b?7:0)+q-b;return D.setUTCDate(D.getUTCDate()-j),D.setUTCHours(0,0,0,0),D}},96150:(oe,G,s)=>{s.d(G,{A:()=>Ue});var Q=s(10570),d=s(94683);function X(n){return(0,d.A)(1,arguments),n instanceof Date||(0,Q.A)(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}var v=s(26335);function K(n){if((0,d.A)(1,arguments),!X(n)&&typeof n!="number")return!1;var t=(0,v.A)(n);return!isNaN(Number(t))}var O=s(75704);function C(n,t){(0,d.A)(2,arguments);var e=(0,v.A)(n).getTime(),r=(0,O.A)(t);return new Date(e+r)}function _(n,t){(0,d.A)(2,arguments);var e=(0,O.A)(t);return C(n,-e)}var P=864e5;function W(n){(0,d.A)(1,arguments);var t=(0,v.A)(n),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=e-r;return Math.floor(a/P)+1}function y(n){(0,d.A)(1,arguments);var t=1,e=(0,v.A)(n),r=e.getUTCDay(),a=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function Y(n){(0,d.A)(1,arguments);var t=(0,v.A)(n),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var a=y(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=y(i);return t.getTime()>=a.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function S(n){(0,d.A)(1,arguments);var t=Y(n),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=y(e);return r}var $=6048e5;function N(n){(0,d.A)(1,arguments);var t=(0,v.A)(n),e=y(t).getTime()-S(t).getTime();return Math.round(e/$)+1}var E=s(44930),b=s(3918);function D(n,t){var e,r,a,i,o,c,m,h;(0,d.A)(1,arguments);var w=(0,v.A)(n),g=w.getUTCFullYear(),U=(0,b.q)(),f=(0,O.A)((e=(r=(a=(i=t?.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(c=o.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&a!==void 0?a:U.firstWeekContainsDate)!==null&&r!==void 0?r:(m=U.locale)===null||m===void 0||(h=m.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(g+1,0,f),T.setUTCHours(0,0,0,0);var L=(0,E.A)(T,t),p=new Date(0);p.setUTCFullYear(g,0,f),p.setUTCHours(0,0,0,0);var H=(0,E.A)(p,t);return w.getTime()>=L.getTime()?g+1:w.getTime()>=H.getTime()?g:g-1}function q(n,t){var e,r,a,i,o,c,m,h;(0,d.A)(1,arguments);var w=(0,b.q)(),g=(0,O.A)((e=(r=(a=(i=t?.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(c=o.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&a!==void 0?a:w.firstWeekContainsDate)!==null&&r!==void 0?r:(m=w.locale)===null||m===void 0||(h=m.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1),U=D(n,t),f=new Date(0);f.setUTCFullYear(U,0,g),f.setUTCHours(0,0,0,0);var T=(0,E.A)(f,t);return T}var j=6048e5;function ue(n,t){(0,d.A)(1,arguments);var e=(0,v.A)(n),r=(0,E.A)(e,t).getTime()-q(e,t).getTime();return Math.round(r/j)+1}var u=s(6355),se={y:function(t,e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return(0,u.A)(e==="yy"?a%100:a,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):(0,u.A)(r+1,2)},d:function(t,e){return(0,u.A)(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return(0,u.A)(t.getUTCHours()%12||12,e.length)},H:function(t,e){return(0,u.A)(t.getUTCHours(),e.length)},m:function(t,e){return(0,u.A)(t.getUTCMinutes(),e.length)},s:function(t,e){return(0,u.A)(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,a=t.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,r-3));return(0,u.A)(i,e.length)}};const A=se;var k={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},de={G:function(t,e,r){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var a=t.getUTCFullYear(),i=a>0?a:1-a;return r.ordinalNumber(i,{unit:"year"})}return A.y(t,e)},Y:function(t,e,r,a){var i=D(t,a),o=i>0?i:1-i;if(e==="YY"){var c=o%100;return(0,u.A)(c,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):(0,u.A)(o,e.length)},R:function(t,e){var r=Y(t);return(0,u.A)(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return(0,u.A)(r,e.length)},Q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return(0,u.A)(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return(0,u.A)(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,r){var a=t.getUTCMonth();switch(e){case"M":case"MM":return A.M(t,e);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,r){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return(0,u.A)(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,r,a){var i=ue(t,a);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):(0,u.A)(i,e.length)},I:function(t,e,r){var a=N(t);return e==="Io"?r.ordinalNumber(a,{unit:"week"}):(0,u.A)(a,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):A.d(t,e)},D:function(t,e,r){var a=W(t);return e==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):(0,u.A)(a,e.length)},E:function(t,e,r){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,r,a){var i=t.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return(0,u.A)(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,a){var i=t.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return(0,u.A)(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var a=t.getUTCDay(),i=a===0?7:a;switch(e){case"i":return String(i);case"ii":return(0,u.A)(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,r){var a=t.getUTCHours(),i=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var a=t.getUTCHours(),i;switch(a===12?i=k.noon:a===0?i=k.midnight:i=a/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var a=t.getUTCHours(),i;switch(a>=17?i=k.evening:a>=12?i=k.afternoon:a>=4?i=k.morning:i=k.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return A.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):A.H(t,e)},K:function(t,e,r){var a=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(a,{unit:"hour"}):(0,u.A)(a,e.length)},k:function(t,e,r){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?r.ordinalNumber(a,{unit:"hour"}):(0,u.A)(a,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):A.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):A.s(t,e)},S:function(t,e){return A.S(t,e)},X:function(t,e,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return re(o);case"XXXX":case"XX":return M(o);case"XXXXX":case"XXX":default:return M(o,":")}},x:function(t,e,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return re(o);case"xxxx":case"xx":return M(o);case"xxxxx":case"xxx":default:return M(o,":")}},O:function(t,e,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+te(o,":");case"OOOO":default:return"GMT"+M(o,":")}},z:function(t,e,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+te(o,":");case"zzzz":default:return"GMT"+M(o,":")}},t:function(t,e,r,a){var i=a._originalDate||t,o=Math.floor(i.getTime()/1e3);return(0,u.A)(o,e.length)},T:function(t,e,r,a){var i=a._originalDate||t,o=i.getTime();return(0,u.A)(o,e.length)}};function te(n,t){var e=n>0?"-":"+",r=Math.abs(n),a=Math.floor(r/60),i=r%60;if(i===0)return e+String(a);var o=t||"";return e+String(a)+o+(0,u.A)(i,2)}function re(n,t){if(n%60===0){var e=n>0?"-":"+";return e+(0,u.A)(Math.abs(n)/60,2)}return M(n,t)}function M(n,t){var e=t||"",r=n>0?"-":"+",a=Math.abs(n),i=(0,u.A)(Math.floor(a/60),2),o=(0,u.A)(a%60,2);return r+i+e+o}const ce=de;var ae=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ne=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},le=function(t,e){var r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return ae(t,e);var o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",ae(a,e)).replace("{{time}}",ne(i,e))},fe={p:ne,P:le};const ve=fe;var me=s(83960),he=["D","DD"],ge=["YY","YYYY"];function we(n){return he.indexOf(n)!==-1}function Te(n){return ge.indexOf(n)!==-1}function ie(n,t,e){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Oe=s(74802),Ce=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ye=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,be=/^'([^]*?)'?$/,De=/''/g,Ae=/[a-zA-Z]/;function Ue(n,t,e){var r,a,i,o,c,m,h,w,g,U,f,T,L,p,H,V,J,Z;(0,d.A)(2,arguments);var Ee=String(t),I=(0,b.q)(),R=(r=(a=e?.locale)!==null&&a!==void 0?a:I.locale)!==null&&r!==void 0?r:Oe.A,z=(0,O.A)((i=(o=(c=(m=e?.firstWeekContainsDate)!==null&&m!==void 0?m:e==null||(h=e.locale)===null||h===void 0||(w=h.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&c!==void 0?c:I.firstWeekContainsDate)!==null&&o!==void 0?o:(g=I.locale)===null||g===void 0||(U=g.options)===null||U===void 0?void 0:U.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(z>=1&&z<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var ee=(0,O.A)((f=(T=(L=(p=e?.weekStartsOn)!==null&&p!==void 0?p:e==null||(H=e.locale)===null||H===void 0||(V=H.options)===null||V===void 0?void 0:V.weekStartsOn)!==null&&L!==void 0?L:I.weekStartsOn)!==null&&T!==void 0?T:(J=I.locale)===null||J===void 0||(Z=J.options)===null||Z===void 0?void 0:Z.weekStartsOn)!==null&&f!==void 0?f:0);if(!(ee>=0&&ee<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!R.localize)throw new RangeError("locale must contain localize property");if(!R.formatLong)throw new RangeError("locale must contain formatLong property");var F=(0,v.A)(n);if(!K(F))throw new RangeError("Invalid time value");var Me=(0,me.A)(F),pe=_(F,Me),Ye={firstWeekContainsDate:z,weekStartsOn:ee,locale:R,_originalDate:F},ke=Ee.match(ye).map(function(l){var x=l[0];if(x==="p"||x==="P"){var B=ve[x];return B(l,R.formatLong)}return l}).join("").match(Ce).map(function(l){if(l==="''")return"'";var x=l[0];if(x==="'")return xe(l);var B=ce[x];if(B)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Te(l)&&ie(l,t,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&we(l)&&ie(l,t,String(n)),B(pe,l,R.localize,Ye);if(x.match(Ae))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return l}).join("");return ke}function xe(n){var t=n.match(be);return t?t[1].replace(De,"'"):n}}}]);
