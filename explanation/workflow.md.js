let mdoc_js_run0,mdoc_js_run1;
(function(){
'use strict';var f,aa=Object.freeze({esVersion:6,assumingES6:!0,productionMode:!0,linkerVersion:"1.7.0",fileLevelThis:this}),k=Math.imul,ba=Math.clz32,ca;function da(a){for(var b in a)return b}function l(a){this.Ra=a}l.prototype.toString=function(){return String.fromCharCode(this.Ra)};
function ea(a){switch(typeof a){case "string":return"java.lang.String";case "number":return"number"===typeof a&&(a|0)===a&&1/a!==1/-0?a<<24>>24===a?"java.lang.Byte":a<<16>>16===a?"java.lang.Short":"java.lang.Integer":"java.lang.Float";case "boolean":return"java.lang.Boolean";case "undefined":return"java.lang.Void";default:return null===a?a.cd():a instanceof n?"java.lang.Long":a instanceof l?"java.lang.Character":a&&a.$classData?a.$classData.name:null.dd()}}
function fa(a,b){switch(typeof a){case "string":return a===b;case "number":return Object.is(a,b);case "boolean":return a===b;case "undefined":return a===b;default:return a&&a.$classData||null===a?b=a.w(b):a instanceof n?b instanceof n?(a=p(a),b=p(b),b=a.l===b.l&&a.k===b.k):b=!1:b=a instanceof l?b instanceof l?q(a)===q(b):!1:r.prototype.w.call(a,b),b}}
function ha(a){switch(typeof a){case "string":return u(a);case "number":return ia(a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a=a.z():a instanceof n?(a=p(a),a=a.l^a.k):a=a instanceof l?q(a):r.prototype.z.call(a),a}}function ja(a){return void 0===a?"undefined":a.toString()}var ka=0,la=new WeakMap;
function ma(a){switch(typeof a){case "string":return u(a);case "number":return ia(a);case "bigint":var b=0;for(a<BigInt(0)&&(a=~a);a!==BigInt(0);)b^=Number(BigInt.asIntN(32,a)),a>>=BigInt(32);return b;case "boolean":return a?1231:1237;case "undefined":return 0;case "symbol":return a=a.description,void 0===a?0:u(a);default:if(null===a)return 0;b=la.get(a);void 0===b&&(ka=b=ka+1|0,la.set(a,b));return b}}function q(a){return null===a?0:a.Ra}function p(a){return null===a?ca:a}function r(){}
r.prototype.constructor=r;function v(){}v.prototype=r.prototype;r.prototype.z=function(){return ma(this)};r.prototype.w=function(a){return this===a};r.prototype.j=function(){var a=this.z();return ea(this)+"@"+(+(a>>>0)).toString(16)};r.prototype.toString=function(){return this.j()};function w(a){if("number"===typeof a){this.d=Array(a);for(var b=0;b<a;b++)this.d[b]=null}else this.d=a}w.prototype=new v;w.prototype.constructor=w;function na(){}na.prototype=w.prototype;
function oa(a){if("number"===typeof a){this.d=Array(a);for(var b=0;b<a;b++)this.d[b]=!1}else this.d=a}oa.prototype=new v;oa.prototype.constructor=oa;function pa(a){this.d="number"===typeof a?new Uint16Array(a):a}pa.prototype=new v;pa.prototype.constructor=pa;function qa(a){this.d="number"===typeof a?new Int8Array(a):a}qa.prototype=new v;qa.prototype.constructor=qa;function ra(a){this.d="number"===typeof a?new Int16Array(a):a}ra.prototype=new v;ra.prototype.constructor=ra;
function sa(a){this.d="number"===typeof a?new Int32Array(a):a}sa.prototype=new v;sa.prototype.constructor=sa;function ta(a){if("number"===typeof a){this.d=Array(a);for(var b=0;b<a;b++)this.d[b]=ca}else this.d=a}ta.prototype=new v;ta.prototype.constructor=ta;function ua(a){this.d="number"===typeof a?new Float32Array(a):a}ua.prototype=new v;ua.prototype.constructor=ua;function va(a){this.d="number"===typeof a?new Float64Array(a):a}va.prototype=new v;va.prototype.constructor=va;
function wa(){this.G=void 0;this.W=this.q=null;this.X=0;this.sb=null;this.F="";this.O=this.V=void 0;this.name="";this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function x(a,b,c,d){var g=new wa;g.q={};g.sb=a;g.F=b;g.O=e=>e===g;g.name=c;g.isPrimitive=!0;g.isInstance=()=>!1;void 0!==d&&(g.V=xa(g,d));return g}
function y(a,b,c){var d=new wa,g=da(a);d.q=c;d.F="L"+b+";";d.O=e=>!!e.q[g];d.name=b;d.isInterface=!1;d.isInstance=e=>!!(e&&e.$classData&&e.$classData.q[g]);return d}function xa(a,b,c){var d=new wa;b.prototype.$classData=d;var g="["+a.F;d.G=b;d.q={a:1,Aa:1,c:1};d.W=a;d.X=1;d.F=g;d.name=g;d.isArrayClass=!0;d.O=c||(e=>d===e);d.isInstance=e=>e instanceof b;return d}
function ya(a){function b(h){if("number"===typeof h){this.d=Array(h);for(var m=0;m<h;m++)this.d[m]=null}else this.d=h}var c=new wa;b.prototype=new na;b.prototype.constructor=b;var d=a.W||a,g=a.X+1;b.prototype.$classData=c;a="["+a.F;c.G=b;c.q={a:1,Aa:1,c:1};c.W=d;c.X=g;c.F=a;c.name=a;c.isArrayClass=!0;var e=h=>{var m=h.X;return m===g?d.O(h.W):m>g&&d===z};c.O=e;c.isInstance=h=>{h=h&&h.$classData;return!!h&&(h===c||e(h))};return c}function A(a){a.V||(a.V=ya(a));return a.V}var z=new wa;z.q={a:1};
z.F="Ljava.lang.Object;";z.O=a=>!a.isPrimitive;z.name="java.lang.Object";z.isInstance=a=>null!==a;z.V=xa(z,w,a=>{var b=a.X;return 1===b?!a.W.isPrimitive:1<b});r.prototype.$classData=z;x(void 0,"V","void",void 0);x(!1,"Z","boolean",oa);x(0,"C","char",pa);x(0,"B","byte",qa);x(0,"S","short",ra);x(0,"I","int",sa);var za=x(null,"J","long",ta);x(0,"F","float",ua);x(0,"D","double",va);
function Aa(){this.Wa=this.la=this.Y=null;Ba=this;this.Y=new ArrayBuffer(8);this.la=new Int32Array(this.Y,0,2);new Float32Array(this.Y,0,2);this.Wa=new Float64Array(this.Y,0,1);this.la[0]=16909060;new Int8Array(this.Y,0,8)}Aa.prototype=new v;Aa.prototype.constructor=Aa;function Ca(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;a.Wa[0]=b;return(a.la[0]|0)^(a.la[1]|0)}Aa.prototype.$classData=y({Ab:0},"java.lang.FloatingPointBits$",{Ab:1,a:1});var Ba;function Da(){Ba||(Ba=new Aa);return Ba}
function Ea(){this.Ya=this.Ba=null;Fa=this;var a={"java.version":"1.8","java.vm.specification.version":"1.8","java.vm.specification.vendor":"Oracle Corporation","java.vm.specification.name":"Java Virtual Machine Specification","java.vm.name":"Scala.js"};a["java.vm.version"]=aa.linkerVersion;a["java.specification.version"]="1.8";a["java.specification.vendor"]="Oracle Corporation";a["java.specification.name"]="Java Platform API Specification";a["file.separator"]="/";a["path.separator"]=":";a["line.separator"]=
"\n";this.Ba=a;this.Ya=null}Ea.prototype=new v;Ea.prototype.constructor=Ea;function Ga(a,b,c){null!==a.Ba?(Ha||(Ha=new Ia),a=a.Ba,Ja||(Ja=new Ka),b=Ja.$a.call(a,b)?a[b]:c):b=Ga(a.Ya,b,c);return b}Ea.prototype.$classData=y({Gb:0},"java.lang.System$SystemProperties$",{Gb:1,a:1});var Fa;function Ia(){}Ia.prototype=new v;Ia.prototype.constructor=Ia;Ia.prototype.$classData=y({Lb:0},"java.lang.Utils$",{Lb:1,a:1});var Ha;function Ka(){this.$a=null;Ja=this;this.$a=Object.prototype.hasOwnProperty}
Ka.prototype=new v;Ka.prototype.constructor=Ka;Ka.prototype.$classData=y({Mb:0},"java.lang.Utils$Cache$",{Mb:1,a:1});var Ja;function La(){}La.prototype=new v;La.prototype.constructor=La;La.prototype.$classData=y({Nb:0},"java.util.Arrays$",{Nb:1,a:1});var Ma;function B(){}B.prototype=new v;B.prototype.constructor=B;B.prototype.$classData=y({tb:0},"mdocjs$",{tb:1,a:1});var Na;function n(a,b){this.l=a;this.k=b}n.prototype=new v;n.prototype.constructor=n;
n.prototype.w=function(a){return a instanceof n?this.l===a.l&&this.k===a.k:!1};n.prototype.z=function(){return this.l^this.k};n.prototype.j=function(){Oa();var a=this.l,b=this.k;return b===a>>31?""+a:0>b?"-"+Pa(-a|0,0!==a?~b:-b|0):Pa(a,b)};n.prototype.$classData=y({vb:0},"org.scalajs.linker.runtime.RuntimeLong",{vb:1,a:1});
function Pa(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+ba(1E9)|0)-(0!==b?ba(b):32+ba(a)|0)|0,d=c,g=0===(32&d)?1E9<<d:0;d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d;var e=a,h=b;for(a=b=0;0<=c&&0!==(-2097152&h);){var m=e,t=h,Vb=g,J=d;if(t===J?(-2147483648^m)>=(-2147483648^Vb):(-2147483648^t)>=(-2147483648^J))m=h,t=d,h=e-g|0,m=(-2147483648^h)>(-2147483648^e)?-1+(m-t|0)|0:m-t|0,e=h,h=m,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;m=d>>>1|0;g=g>>>1|0|d<<31;d=m}c=h;if(0===c?-1147483648<=(-2147483648^
e):-2147483648<=(-2147483648^c))c=4294967296*h+ +(e>>>0),e=c/1E9,g=e/4294967296|0,d=b,b=e=d+(e|0)|0,a=(-2147483648^e)<(-2147483648^d)?1+(a+g|0)|0:a+g|0,e=c%1E9|0;c=""+e;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}function Qa(){this.fa=0}Qa.prototype=new v;Qa.prototype.constructor=Qa;function Ra(a,b,c){return 0>c?-(4294967296*+((0!==b?~c:-c|0)>>>0)+ +((-b|0)>>>0)):4294967296*c+ +(b>>>0)}
Qa.prototype.$classData=y({wb:0},"org.scalajs.linker.runtime.RuntimeLong$",{wb:1,a:1});var Sa;function Oa(){Sa||(Sa=new Qa);return Sa}function Ta(a,b,c,d){if(a.e())a=""+b+d;else{var g=a.ga,e=new Ua;e.v=Va(new C);a=g.call(a,e,b,c,d).v.b}return a}function Wa(a,b,c,d,g){var e=b.v;0!==(c.length|0)&&(e.b=""+e.b+c);a=a.o();if(a.h())for(c=a.i(),e.b=""+e.b+c;a.h();)e.b=""+e.b+d,c=a.i(),e.b=""+e.b+c;0!==(g.length|0)&&(e.b=""+e.b+g);return b}
function Xa(){this.rb=null;Ya=this;this.rb=new w(0);new (A(A(z)).G)(0);new (A(A(A(z))).G)(0);new (A(A(A(A(z)))).G)(0);new (A(A(A(A(A(z))))).G)(0);new (A(A(A(A(A(A(z)))))).G)(0)}Xa.prototype=new v;Xa.prototype.constructor=Xa;Xa.prototype.$classData=y({Rc:0},"scala.collection.immutable.VectorStatics$",{Rc:1,a:1});var Ya;function Za(){Ya||(Ya=new Xa);return Ya}function $a(){}$a.prototype=new v;$a.prototype.constructor=$a;
$a.prototype.$classData=y({rc:0},"scala.collection.package$$colon$plus$",{rc:1,a:1});var ab;function bb(){}bb.prototype=new v;bb.prototype.constructor=bb;bb.prototype.$classData=y({sc:0},"scala.collection.package$$plus$colon$",{sc:1,a:1});var cb;function db(){}db.prototype=new v;db.prototype.constructor=db;db.prototype.$classData=y({Yb:0},"scala.math.Ordered$",{Yb:1,a:1});var eb;
function fb(){this.db=null;gb=this;hb||(hb=new D);hb||(hb=new D);ib||(ib=new jb);kb||(kb=new lb);E();mb();this.db=F();nb||(nb=new G);cb||(cb=new bb);ab||(ab=new $a);ob||(ob=new pb);H();qb();rb||(rb=new sb);tb||(tb=new ub);vb||(vb=new wb);xb||(xb=new yb);zb||(zb=new Ab);Bb||(Bb=new Cb);eb||(eb=new db);Db||(Db=new Eb);Fb||(Fb=new Gb);Hb||(Hb=new Ib);Jb||(Jb=new Nb)}fb.prototype=new v;fb.prototype.constructor=fb;fb.prototype.$classData=y({$b:0},"scala.package$",{$b:1,a:1});var gb;function Ob(){}
Ob.prototype=new v;Ob.prototype.constructor=Ob;function I(a,b,c){if(b===c)c=!0;else if(Pb(b))a:if(Pb(c))c=Qb(b,c);else{if(c instanceof l){if("number"===typeof b){c=+b===q(c);break a}if(b instanceof n){a=p(b);b=a.k;c=q(c);c=a.l===c&&b===c>>31;break a}}c=null===b?null===c:fa(b,c)}else c=b instanceof l?Rb(b,c):null===b?null===c:fa(b,c);return c}
function Qb(a,b){if("number"===typeof a){a=+a;if("number"===typeof b)return a===+b;if(b instanceof n){var c=p(b);b=c.l;c=c.k;return a===Ra(Oa(),b,c)}return!1}if(a instanceof n){c=p(a);a=c.l;c=c.k;if(b instanceof n){b=p(b);var d=b.k;return a===b.l&&c===d}return"number"===typeof b?(b=+b,Ra(Oa(),a,c)===b):!1}return null===a?null===b:fa(a,b)}
function Rb(a,b){if(b instanceof l)return q(a)===q(b);if(Pb(b)){if("number"===typeof b)return+b===q(a);if(b instanceof n){b=p(b);var c=b.k;a=q(a);return b.l===a&&c===a>>31}return null===b?null===a:fa(b,a)}return null===a&&null===b}Ob.prototype.$classData=y({Yc:0},"scala.runtime.BoxesRunTime$",{Yc:1,a:1});var Sb;function K(){Sb||(Sb=new Ob);return Sb}function Tb(){}Tb.prototype=new v;Tb.prototype.constructor=Tb;
function L(a,b){if(null===b)return 0;if("number"===typeof b){a=+b;b=2147483647<a?2147483647:-2147483648>a?-2147483648:a|0;if(b===a)a=b;else{b=Oa();if(-0x7fffffffffffffff>a){b.fa=-2147483648;var c=0}else if(0x7fffffffffffffff<=a)b.fa=2147483647,c=-1;else{c=a|0;var d=a/4294967296|0;b.fa=0>a&&0!==c?-1+d|0:d}b=b.fa;a=Ra(Oa(),c,b)===a?c^b:Ca(Da(),a)}return a}return b instanceof n?(a=p(b),b=new n(a.l,a.k),a=b.l,b=b.k,b===a>>31?a:a^b):ha(b)}
Tb.prototype.$classData=y({ad:0},"scala.runtime.Statics$",{ad:1,a:1});var Ub;function M(){Ub||(Ub=new Tb);return Ub}function Wb(){}Wb.prototype=new v;Wb.prototype.constructor=Wb;Wb.prototype.$classData=y({Xc:0},"scala.scalajs.runtime.package$",{Xc:1,a:1});var Xb;function Yb(){}Yb.prototype=new v;Yb.prototype.constructor=Yb;function Zb(){}Zb.prototype=Yb.prototype;function N(a,b){a=$b(a,b);return-430675100+k(5,a<<13|a>>>19|0)|0}
function $b(a,b){b=k(-862048943,b);b=k(461845907,b<<15|b>>>17|0);return a^b}function O(a){a=k(-2048144789,a^(a>>>16|0));a=k(-1028477387,a^(a>>>13|0));return a^(a>>>16|0)}function ac(){}ac.prototype=new v;ac.prototype.constructor=ac;
function bc(a,b,c,d){a=document.createElement("div");var g=cc();g="vega"+Ta(g,"","","");a.id=g;c.appendChild(a);a.setAttribute("style","width:"+d+"vmin;height:"+d+"vmin");(0,eval)("\n            vegaEmbed('#"+g+"', \"../assets/"+b+'.json", {\n                renderer: "canvas", // renderer (canvas or svg)\n                container: "#'+g+'", // parent DOM container\n                hover: true, // enable hover processing\n                actions: {\n                    editor : true\n                }\n            }).then(function(result) {\n            console.log(result)\n            })')}
ac.prototype.$classData=y({ub:0},"viz.doc.showJsDocs$",{ub:1,a:1});var dc;function ec(){dc||(dc=new ac);return dc}function fc(a){0===(32&a.ka)<<24>>24&&0===(32&a.ka)<<24>>24&&(a.Va=new sa(new Int32Array([1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43600,44016,65296,66720,69734,69872,69942,70096,71360,120782,120792,120802,120812,120822])),a.ka=(32|a.ka)<<24>>24);return a.Va}
function gc(){this.Va=null;this.ka=0}gc.prototype=new v;gc.prototype.constructor=gc;gc.prototype.$classData=y({zb:0},"java.lang.Character$",{zb:1,a:1,c:1});var hc;function ic(a){throw new jc('For input string: "'+a+'"');}function kc(){}kc.prototype=new v;kc.prototype.constructor=kc;kc.prototype.$classData=y({Cb:0},"java.lang.Integer$",{Cb:1,a:1,c:1});var lc;function Pb(a){return"number"===typeof a||a instanceof n}function P(a,b){a.Za=b;a.Hb=null;a.Ib=!0;a.Jb=!0;a.Ua()}
class mc extends Error{constructor(){super();this.Hb=this.Za=null;this.Jb=this.Ib=!1}ja(){return this.Za}Ua(){"[object Error]"!==Object.prototype.toString.call(this)&&void 0!==Error.captureStackTrace&&Error.captureStackTrace(this)}j(){var a=ea(this),b=this.ja();return null===b?a:a+": "+b}z(){return r.prototype.z.call(this)}w(a){return r.prototype.w.call(this,a)}get ["message"](){var a=this.ja();return null===a?"":a}get ["name"](){return ea(this)}["toString"](){return this.j()}}
function nc(){this.Da=this.Ca=0;this.Rb=!1}nc.prototype=new v;nc.prototype.constructor=nc;function pc(a){var b=a.Da,c=15525485*b+11;b=16777215&((c/16777216|0)+(16777215&(1502*b+15525485*a.Ca|0))|0);c=16777215&(c|0);a.Ca=b;a.Da=c;return(b<<8|c>>16)>>>1|0}nc.prototype.$classData=y({Pb:0},"java.util.Random",{Pb:1,a:1,c:1});function qc(){var a=4294967296*+Math.random();a=+Math.floor(a)-2147483648;return 2147483647<a?2147483647:-2147483648>a?-2147483648:a|0}function rc(){}rc.prototype=new v;
rc.prototype.constructor=rc;rc.prototype.$classData=y({Qb:0},"java.util.Random$",{Qb:1,a:1,c:1});var sc;function G(){}G.prototype=new v;G.prototype.constructor=G;G.prototype.j=function(){return"::"};G.prototype.$classData=y({uc:0},"scala.collection.immutable.$colon$colon$",{uc:1,a:1,c:1});var nb;function ub(){}ub.prototype=new v;ub.prototype.constructor=ub;ub.prototype.$classData=y({Lc:0},"scala.collection.immutable.Range$",{Lc:1,a:1,c:1});var tb;function sb(){}sb.prototype=new v;
sb.prototype.constructor=sb;sb.prototype.$classData=y({Tc:0},"scala.collection.mutable.StringBuilder$",{Tc:1,a:1,c:1});var rb;function yb(){}yb.prototype=new v;yb.prototype.constructor=yb;yb.prototype.$classData=y({Vb:0},"scala.math.Fractional$",{Vb:1,a:1,c:1});var xb;function Ab(){}Ab.prototype=new v;Ab.prototype.constructor=Ab;Ab.prototype.$classData=y({Wb:0},"scala.math.Integral$",{Wb:1,a:1,c:1});var zb;function Cb(){}Cb.prototype=new v;Cb.prototype.constructor=Cb;
Cb.prototype.$classData=y({Xb:0},"scala.math.Numeric$",{Xb:1,a:1,c:1});var Bb;function tc(){}tc.prototype=new v;tc.prototype.constructor=tc;function uc(){}uc.prototype=tc.prototype;tc.prototype.j=function(){return"\x3cfunction0\x3e"};function vc(a){this.Pa=a}vc.prototype=new v;vc.prototype.constructor=vc;vc.prototype.j=function(){return""+this.Pa};vc.prototype.$classData=y({Zc:0},"scala.runtime.IntRef",{Zc:1,a:1,c:1});function wc(a){this.Qa=a}wc.prototype=new v;wc.prototype.constructor=wc;
wc.prototype.j=function(){return""+this.Qa};wc.prototype.$classData=y({$c:0},"scala.runtime.ObjectRef",{$c:1,a:1,c:1});function Gb(){}Gb.prototype=new v;Gb.prototype.constructor=Gb;Gb.prototype.$classData=y({ac:0},"scala.util.Either$",{ac:1,a:1,c:1});var Fb;function Ib(){}Ib.prototype=new v;Ib.prototype.constructor=Ib;Ib.prototype.j=function(){return"Left"};Ib.prototype.$classData=y({bc:0},"scala.util.Left$",{bc:1,a:1,c:1});var Hb;function xc(){this.Ha=null}xc.prototype=new v;
xc.prototype.constructor=xc;function yc(){}yc.prototype=xc.prototype;function zc(){Ac||(Ac=new Bc);var a=Ac;return Cc(H(),new Q((b=>()=>{var c=b.Ha;var d=62;if(0>=d)throw c=new Dc,P(c,"n must be positive"),c;if((d&(-d|0))===d)c=pc(c)>>ba(d);else a:for(;;){var g=pc(c);var e=g;var h=d;if(0===h)throw new Ec;e=e%h|0;if(!(0>((g-e|0)+(-1+d|0)|0))){c=e;break a}}c=65535&("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charCodeAt(c)|0);return new l(c)})(a)))}function Nb(){}Nb.prototype=new v;
Nb.prototype.constructor=Nb;Nb.prototype.j=function(){return"Right"};Nb.prototype.$classData=y({dc:0},"scala.util.Right$",{dc:1,a:1,c:1});var Jb;function Fc(){this.eb=this.oa=0;Gc=this;this.oa=u("Seq");this.eb=u("Map");u("Set");gb||(gb=new fb);for(var a=this.eb,b=0,c=0,d=0,g=1,e=gb.db.o();e.h();){var h=e.i();h=L(M(),h);b=b+h|0;c^=h;g=k(g,1|h);d=1+d|0}a=N(a,b);a=N(a,c);a=$b(a,g);O(a^d)}Fc.prototype=new Zb;Fc.prototype.constructor=Fc;
Fc.prototype.$classData=y({ec:0},"scala.util.hashing.MurmurHash3$",{ec:1,jd:1,a:1});var Gc;function Hc(){Gc||(Gc=new Fc);return Gc}class Ic extends mc{}function Jc(){}Jc.prototype=new v;Jc.prototype.constructor=Jc;function Kc(){}Kc.prototype=Jc.prototype;function Lc(){this.P=null;Mc=this;this.P=new R}Lc.prototype=new v;Lc.prototype.constructor=Lc;Lc.prototype.$classData=y({kc:0},"scala.collection.Iterator$",{kc:1,a:1,A:1,c:1});var Mc;function E(){Mc||(Mc=new Lc);return Mc}
function S(a,b){this.Cc=a;this.Dc=b}S.prototype=new v;S.prototype.constructor=S;S.prototype.n=function(){return this.Cc};S.prototype.g=function(){return this.Dc};S.prototype.$classData=y({Bc:0},"scala.collection.immutable.LazyList$State$Cons",{Bc:1,a:1,Ac:1,c:1});function T(){}T.prototype=new v;T.prototype.constructor=T;T.prototype.N=function(){throw new Nc("head of empty lazy list");};T.prototype.g=function(){throw new Oc("tail of empty lazy list");};T.prototype.n=function(){this.N()};
T.prototype.$classData=y({Ec:0},"scala.collection.immutable.LazyList$State$Empty$",{Ec:1,a:1,Ac:1,c:1});var Pc;function Qc(){Pc||(Pc=new T);return Pc}function wb(){}wb.prototype=new v;wb.prototype.constructor=wb;wb.prototype.$classData=y({Ub:0},"scala.math.Equiv$",{Ub:1,a:1,fd:1,c:1});var vb;function Eb(){}Eb.prototype=new v;Eb.prototype.constructor=Eb;Eb.prototype.$classData=y({Zb:0},"scala.math.Ordering$",{Zb:1,a:1,gd:1,c:1});var Db;function Q(a){this.Wc=a}Q.prototype=new uc;
Q.prototype.constructor=Q;function Rc(a){return(0,a.Wc)()}Q.prototype.$classData=y({Vc:0},"scala.scalajs.runtime.AnonFunction0",{Vc:1,Hd:1,a:1,bd:1});function Bc(){this.Ha=null;var a=new nc;sc||(sc=new rc);var b=qc();var c=qc();b=new n(c,b);c=-554899859^b.l;a.Ca=c>>>24|0|(65535&(5^b.k))<<8;a.Da=16777215&c;a.Rb=!1;this.Ha=a}Bc.prototype=new yc;Bc.prototype.constructor=Bc;Bc.prototype.$classData=y({cc:0},"scala.util.Random$",{cc:1,hd:1,a:1,c:1});var Ac;class U extends Ic{}
U.prototype.$classData=y({t:0},"java.lang.RuntimeException",{t:1,x:1,y:1,a:1,c:1});function Va(a){a.b="";return a}function C(){this.b=null}C.prototype=new v;C.prototype.constructor=C;C.prototype.j=function(){return this.b};C.prototype.f=function(){return this.b.length|0};C.prototype.$classData=y({Fb:0},"java.lang.StringBuilder",{Fb:1,a:1,yb:1,ed:1,c:1});function Sc(){}Sc.prototype=new v;Sc.prototype.constructor=Sc;function Tc(){}f=Tc.prototype=Sc.prototype;f.o=function(){return this};f.e=function(){return!this.h()};
f.ia=function(a){for(var b=0;b<a&&this.h();)this.i(),b=1+b|0;return this};f.j=function(){return"\x3citerator\x3e"};f.ga=function(a,b,c,d){return Wa(this,a,b,c,d)};f.u=function(){return-1};function D(){Uc||(Uc=new Vc)}D.prototype=new Kc;D.prototype.constructor=D;D.prototype.$classData=y({ic:0},"scala.collection.Iterable$",{ic:1,jc:1,a:1,A:1,c:1});var hb;function Wc(){}Wc.prototype=new v;Wc.prototype.constructor=Wc;function Xc(){}Xc.prototype=Wc.prototype;
function Yc(a,b){var c=a.u();if(-1!==c){var d=b.u();c=-1!==d&&c!==d}else c=!1;if(c)return!1;a:{a=a.o();for(b=b.o();a.h()&&b.h();)if(!I(K(),a.i(),b.i())){b=!1;break a}b=a.h()===b.h()}return b}function Vc(){mb()}Vc.prototype=new Kc;Vc.prototype.constructor=Vc;Vc.prototype.$classData=y({wc:0},"scala.collection.immutable.Iterable$",{wc:1,jc:1,a:1,A:1,c:1});var Uc;function Zc(){this.xa=null;$c=this;this.xa=ad(new V(new Q((()=>()=>Qc())(this))))}Zc.prototype=new v;Zc.prototype.constructor=Zc;
function bd(a,b,c){return new V(new Q(((d,g,e)=>()=>{for(var h=g.Qa,m=e.Pa;0<m&&!h.e();)h=W(h).g(),g.Qa=h,m=-1+m|0,e.Pa=m;return W(h)})(a,new wc(b),new vc(c))))}function Cc(a,b){return new V(new Q(((c,d)=>()=>{H();var g=Rc(d),e=Cc(H(),d);return new S(g,e)})(a,b)))}Zc.prototype.$classData=y({yc:0},"scala.collection.immutable.LazyList$",{yc:1,a:1,aa:1,A:1,c:1});var $c;function H(){$c||($c=new Zc);return $c}function pb(){}pb.prototype=new v;pb.prototype.constructor=pb;
pb.prototype.$classData=y({Nc:0},"scala.collection.immutable.Stream$",{Nc:1,a:1,aa:1,A:1,c:1});var ob;class Ec extends U{constructor(){super();P(this,"/ by zero")}}Ec.prototype.$classData=y({xb:0},"java.lang.ArithmeticException",{xb:1,t:1,x:1,y:1,a:1,c:1});class Dc extends U{}Dc.prototype.$classData=y({Xa:0},"java.lang.IllegalArgumentException",{Xa:1,t:1,x:1,y:1,a:1,c:1});class cd extends U{constructor(a){super();P(this,a)}}
cd.prototype.$classData=y({Bb:0},"java.lang.IndexOutOfBoundsException",{Bb:1,t:1,x:1,y:1,a:1,c:1});y({Db:0},"java.lang.NullPointerException",{Db:1,t:1,x:1,y:1,a:1,c:1});class Oc extends U{constructor(a){super();P(this,a)}}Oc.prototype.$classData=y({Kb:0},"java.lang.UnsupportedOperationException",{Kb:1,t:1,x:1,y:1,a:1,c:1});class Nc extends U{constructor(a){super();P(this,a)}}Nc.prototype.$classData=y({Ob:0},"java.util.NoSuchElementException",{Ob:1,t:1,x:1,y:1,a:1,c:1});
class dd extends U{constructor(a){super();this.cb=null;this.Fa=!1;this.na=a;P(this,null)}ja(){if(!this.Fa&&!this.Fa){if(null===this.na)var a="null";else try{a=ja(this.na)+" (of class "+ea(this.na)+")"}catch(b){if(Xb||(Xb=new Wb),null!==(b instanceof mc?b:new ed(b)))a="an instance of class "+ea(this.na);else throw b;}this.cb=a;this.Fa=!0}return this.cb}}dd.prototype.$classData=y({Sb:0},"scala.MatchError",{Sb:1,t:1,x:1,y:1,a:1,c:1});function R(){}R.prototype=new Tc;R.prototype.constructor=R;
R.prototype.h=function(){return!1};R.prototype.u=function(){return 0};R.prototype.i=function(){throw new Nc("next on empty iterator");};R.prototype.$classData=y({lc:0},"scala.collection.Iterator$$anon$19",{lc:1,fb:1,a:1,Ja:1,B:1,C:1});function fd(a,b){if(0>b)throw new cd(""+b);a=a.Ta(b);if(a.e())throw new cd(""+b);return a.n()}
function gd(a,b){if(b&&b.$classData&&b.$classData.q.ib)a:for(;;){if(a===b){a=!0;break a}if((a.e()?0:!b.e())&&I(K(),a.n(),b.n()))a=a.U(),b=b.U();else{a=a.e()&&b.e();break a}}else a=Yc(a,b);return a}function lb(){qb()}lb.prototype=new Xc;lb.prototype.constructor=lb;lb.prototype.$classData=y({vc:0},"scala.collection.immutable.IndexedSeq$",{vc:1,nc:1,a:1,aa:1,A:1,c:1});var kb;function X(a){this.ba=a}X.prototype=new Tc;X.prototype.constructor=X;X.prototype.h=function(){return!this.ba.e()};
X.prototype.i=function(){if(this.ba.e())return E().P.i();var a=W(this.ba).n();this.ba=W(this.ba).g();return a};X.prototype.$classData=y({zc:0},"scala.collection.immutable.LazyList$LazyIterator",{zc:1,fb:1,a:1,Ja:1,B:1,C:1});function hd(){id=this;F();F()}hd.prototype=new v;hd.prototype.constructor=hd;hd.prototype.$classData=y({Hc:0},"scala.collection.immutable.List$",{Hc:1,a:1,pc:1,aa:1,A:1,c:1});var id;function mb(){id||(id=new hd)}
function jd(a){a.p<=a.m&&E().P.i();a.da=1+a.da|0;for(var b=null;0===b.d.length;)a.da=1+a.da|0,b=null;a.ya=a.R;var c=a.Jc/2|0,d=a.da-c|0;a.M=(1+c|0)-(0>d?-d|0:d)|0;c=a.M;switch(c){case 1:a.D=b;break;case 2:a.J=b;break;case 3:a.K=b;break;case 4:a.L=b;break;case 5:a.Q=b;break;case 6:a.Na=b;break;default:throw new dd(c);}a.R=a.ya+k(b.d.length,1<<k(5,-1+a.M|0))|0;a.R>a.E&&(a.R=a.E);1<a.M&&(a.ca=-1+(1<<k(5,a.M))|0)}
function kd(a,b,c){this.Na=this.Q=this.L=this.K=this.J=null;this.E=b;this.Jc=c;this.D=a.S;this.I=this.D.d.length;this.ca=this.m=0;this.p=this.E;this.da=0;this.M=1;this.ya=0;this.R=this.I}kd.prototype=new v;kd.prototype.constructor=kd;f=kd.prototype;f.o=function(){return this};f.e=function(){return this.p<=this.m};f.j=function(){return"\x3citerator\x3e"};f.ga=function(a,b,c,d){return Wa(this,a,b,c,d)};f.u=function(){return this.p-this.m|0};f.h=function(){return this.p>this.m};
f.i=function(){if(this.m===this.I){var a=(this.m-this.p|0)+this.E|0;a===this.R&&jd(this);if(1<this.M){a=a-this.ya|0;var b=this.ca^a;1024>b?this.D=this.J.d[31&(a>>>5|0)]:(32768>b?this.J=this.K.d[31&(a>>>10|0)]:(1048576>b?this.K=this.L.d[31&(a>>>15|0)]:(33554432>b?this.L=this.Q.d[31&(a>>>20|0)]:(this.Q=this.Na.d[a>>>25|0],this.L=this.Q.d[0]),this.K=this.L.d[0]),this.J=this.K.d[0]),this.D=this.J.d[0]);this.ca=a}this.p=this.p-this.m|0;a=this.D.d.length;b=this.p;this.I=a<b?a:b;this.m=0}a=this.D.d[this.m];
this.m=1+this.m|0;return a};
f.ia=function(a){if(0<a){a=((this.m-this.p|0)+this.E|0)+a|0;var b=this.E;a=a<b?a:b;if(a===this.E)this.I=this.p=this.m=0;else{for(;a>=this.R;)jd(this);b=a-this.ya|0;if(1<this.M){var c=this.ca^b;1024>c||(32768>c||(1048576>c||(33554432>c||(this.Q=this.Na.d[b>>>25|0]),this.L=this.Q.d[31&(b>>>20|0)]),this.K=this.L.d[31&(b>>>15|0)]),this.J=this.K.d[31&(b>>>10|0)]);this.D=this.J.d[31&(b>>>5|0)];this.ca=b}this.I=this.D.d.length;this.m=31&b;this.p=this.m+(this.E-a|0)|0;this.I>this.p&&(this.I=this.p)}}return this};
f.$classData=y({Ic:0},"scala.collection.immutable.NewVectorIterator",{Ic:1,a:1,Ja:1,B:1,C:1,Aa:1});function jb(){mb()}jb.prototype=new Xc;jb.prototype.constructor=jb;jb.prototype.$classData=y({Mc:0},"scala.collection.immutable.Seq$",{Mc:1,nc:1,a:1,aa:1,A:1,c:1});var ib;
function ld(){this.Oa=0;this.qb=null;md=this;try{var a=Ga;Fa||(Fa=new Ea);var b=a(Fa,"scala.collection.immutable.Vector.defaultApplyPreferredMaxLength","250");lc||(lc=new kc);var c=null===b?0:b.length|0;0===c&&ic(b);var d=65535&(b.charCodeAt(0)|0),g=(a=45===d)?2147483648:2147483647;d=a||43===d?1:0;d>=(b.length|0)&&ic(b);for(var e=0;d!==c;){hc||(hc=new gc);var h=hc,m=65535&(b.charCodeAt(d)|0);if(256>m)var t=48<=m&&57>=m?-48+m|0:65<=m&&90>=m?-55+m|0:97<=m&&122>=m?-87+m|0:-1;else if(65313<=m&&65338>=
m)t=-65303+m|0;else if(65345<=m&&65370>=m)t=-65335+m|0;else{var Vb=fc(h);Ma||(Ma=new La);b:for(var J=Vb,wd=m,Kb=0,oc=J.d.length;;){if(Kb===oc){var Lb=-1-Kb|0;break b}var Mb=(Kb+oc|0)>>>1|0,xd=J.d[Mb];if(wd<xd)oc=Mb;else{if(I(K(),wd,xd)){Lb=Mb;break b}Kb=1+Mb|0}}J=0>Lb?-2-Lb|0:Lb;if(0>J)t=-1;else{var yd=m-fc(h).d[J]|0;t=9<yd?-1:yd}}var zd=10>t?t:-1;e=10*e+zd;(-1===zd||e>g)&&ic(b);d=1+d|0}}catch(Wd){throw Wd;}this.Oa=a?-e|0:e|0;this.qb=new kd(nd(),0,0)}ld.prototype=new v;ld.prototype.constructor=ld;
ld.prototype.$classData=y({Pc:0},"scala.collection.immutable.Vector$",{Pc:1,a:1,pc:1,aa:1,A:1,c:1});var md;function qb(){md||(md=new ld);return md}function ia(a){a=+a;return Ca(Da(),a)}class jc extends Dc{constructor(a){super();P(this,a)}}jc.prototype.$classData=y({Eb:0},"java.lang.NumberFormatException",{Eb:1,Xa:1,t:1,x:1,y:1,a:1,c:1});function u(a){for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+k(65535&(a.charCodeAt(d)|0),c)|0,c=k(31,c),d=-1+d|0;return b}function od(){}od.prototype=new v;
od.prototype.constructor=od;function pd(){}pd.prototype=od.prototype;od.prototype.ha=function(){return this.T()};od.prototype.ga=function(a,b,c,d){return Wa(this,a,b,c,d)};function qd(a){this.H=0;this.hc=a;this.$=0;this.H=a.f()}qd.prototype=new Tc;qd.prototype.constructor=qd;f=qd.prototype;f.u=function(){return this.H};f.h=function(){return 0<this.H};f.i=function(){if(this.h()){var a=this.hc.s(this.$);this.$=1+this.$|0;this.H=-1+this.H|0;return a}return E().P.i()};
f.ia=function(a){0<a&&(this.$=this.$+a|0,a=this.H-a|0,this.H=0>a?0:a);return this};f.$classData=y({gc:0},"scala.collection.IndexedSeqView$IndexedSeqViewIterator",{gc:1,fb:1,a:1,Ja:1,B:1,C:1,c:1});
class ed extends U{constructor(a){super();this.ea=a;P(this,null)}ja(){return ja(this.ea)}Ua(){}Ea(){return"JavaScriptException"}ab(){return 1}bb(a){if(0===a)a=this.ea;else throw M(),new cd(""+a);return a}z(){Hc();var a=this.ab();if(0===a)a=u(this.Ea());else{var b=N(-889275714,u(this.Ea()));for(var c=0;c<a;){var d=this.bb(c);b=N(b,L(M(),d));c=1+c|0}a=O(b^a)}return a}w(a){if(this===a)return!0;if(a instanceof ed){var b=this.ea;a=a.ea;return I(K(),b,a)}return!1}}
ed.prototype.$classData=y({Uc:0},"scala.scalajs.js.JavaScriptException",{Uc:1,t:1,x:1,y:1,a:1,c:1,Tb:1,ma:1});function rd(){}rd.prototype=new pd;rd.prototype.constructor=rd;function sd(){}sd.prototype=rd.prototype;rd.prototype.j=function(){return this.T()+"(\x3cnot computed\x3e)"};function td(a,b){return a===b?!0:b&&b.$classData&&b.$classData.q.ua&&b.Sa(a)?a.pa(b):!1}function ud(){}ud.prototype=new pd;ud.prototype.constructor=ud;function vd(){}f=vd.prototype=ud.prototype;f.Sa=function(){return!0};
f.w=function(a){return td(this,a)};
f.z=function(){var a=Hc();if(this&&this.$classData&&this.$classData.q.gb)a:{var b=a.oa;a=this.f();switch(a){case 0:a=O(b^0);break a;case 1:a=b;b=this.s(0);a=O(N(a,L(M(),b))^1);break a;default:var c=this.s(0),d=L(M(),c);c=b=N(b,d);var g=this.s(1);g=L(M(),g);var e=g-d|0;for(d=2;d<a;){b=N(b,g);var h=this.s(d);h=L(M(),h);if(e!==(h-g|0)){b=N(b,h);for(d=1+d|0;d<a;)c=this.s(d),b=N(b,L(M(),c)),d=1+d|0;a=O(b^a);break a}g=h;d=1+d|0}a=O(N(N(c,e),g))}}else if(this instanceof Ad){for(a=a.oa;!this.e();)this.N();
a=O(a^0)}else a:if(b=a.oa,a=this.o(),a.h())if(c=a.i(),a.h()){d=a.i();e=L(M(),c);c=b=N(b,e);g=L(M(),d);e=g-e|0;for(d=2;a.h();){b=N(b,g);h=a.i();h=L(M(),h);if(e!==(h-g|0)){b=N(b,h);for(d=1+d|0;a.h();)c=a.i(),b=N(b,L(M(),c)),d=1+d|0;a=O(b^d);break a}g=h;d=1+d|0}a=O(N(N(c,e),g))}else a=O(N(b,L(M(),c))^1);else a=O(b^0);return a};f.j=function(){return Ta(this,this.ha()+"(",", ",")")};f.e=function(){return 0===this.Z(0)};f.pa=function(a){return Yc(this,a)};function Bd(){}Bd.prototype=new sd;
Bd.prototype.constructor=Bd;function Cd(){}Cd.prototype=Bd.prototype;function Y(){this.wa=null}Y.prototype=new Cd;Y.prototype.constructor=Y;function Dd(){}Dd.prototype=Y.prototype;Y.prototype.s=function(a){return this.wa.s(a)};Y.prototype.f=function(){return this.wa.f()};Y.prototype.e=function(){return this.wa.e()};function Ed(a){this.wa=a}Ed.prototype=new Dd;Ed.prototype.constructor=Ed;f=Ed.prototype;f.o=function(){return new qd(this)};f.T=function(){return"IndexedSeqView"};
f.Z=function(a){var b=this.f();return b===a?0:b<a?-1:1};f.u=function(){return this.f()};f.$classData=y({fc:0},"scala.collection.IndexedSeqView$Id",{fc:1,od:1,kd:1,ld:1,qa:1,a:1,ra:1,B:1,ta:1,C:1,sa:1,qd:1,c:1,nd:1,va:1,md:1,hb:1});function Fd(){}Fd.prototype=new vd;Fd.prototype.constructor=Fd;function Gd(){}Gd.prototype=Fd.prototype;function Hd(){}Hd.prototype=new vd;Hd.prototype.constructor=Hd;function Id(){}Id.prototype=Hd.prototype;
var Kd=function Jd(a,b){if(0>=b)return H().xa;H();return new V(new Q(((d,g)=>()=>{if(d.e())return Qc();H();var e=W(d).n(),h=Jd(W(d).g(),-1+g|0);return new S(e,h)})(a,b)))};
function Ld(a,b,c,d,g){b.b=""+b.b+c;if(!a.r)b.b+="\x3cnot computed\x3e";else if(!a.e()){c=W(a).n();b.b=""+b.b+c;c=a;var e=W(a).g();if(c!==e&&(!e.r||W(c)!==W(e))&&(c=e,e.r&&!e.e()))for(e=W(e).g();c!==e&&e.r&&!e.e()&&W(c)!==W(e);){b.b=""+b.b+d;var h=W(c).n();b.b=""+b.b+h;c=W(c).g();e=W(e).g();e.r&&!e.e()&&(e=W(e).g())}if(!e.r||e.e()){for(;c!==e;)b.b=""+b.b+d,a=W(c).n(),b.b=""+b.b+a,c=W(c).g();c.r||(b.b=""+b.b+d,b.b+="\x3cnot computed\x3e")}else{h=a;for(a=0;;){var m=h,t=e;if(m!==t&&W(m)!==W(t))h=W(h).g(),
e=W(e).g(),a=1+a|0;else break}h=c;m=e;(h===m||W(h)===W(m))&&0<a&&(b.b=""+b.b+d,a=W(c).n(),b.b=""+b.b+a,c=W(c).g());for(;;)if(a=c,h=e,a!==h&&W(a)!==W(h))b.b=""+b.b+d,a=W(c).n(),b.b=""+b.b+a,c=W(c).g();else break;b.b=""+b.b+d;b.b+="\x3ccycle\x3e"}}b.b=""+b.b+g;return b}function V(a){this.nb=null;this.La=!1;this.mb=a;this.Ma=this.r=!1}V.prototype=new Gd;V.prototype.constructor=V;f=V.prototype;f.T=function(){return"LinearSeq"};f.f=function(){for(var a=this,b=0;!a.e();)b=1+b|0,a=a.U();return b};
f.Z=function(a){if(0>a)a=1;else a:for(var b=this,c=0;;){if(c===a){a=b.e()?0:1;break a}if(b.e()){a=-1;break a}c=1+c|0;b=b.U()}return a};f.s=function(a){return fd(this,a)};f.pa=function(a){return gd(this,a)};function W(a){if(!a.La&&!a.La){if(a.Ma)throw Xb||(Xb=new Wb),a=new U,P(a,"self-referential LazyList or a derivation thereof has no more elements"),a instanceof ed?a.ea:a;a.Ma=!0;try{var b=Rc(a.mb)}finally{a.Ma=!1}a.r=!0;a.mb=null;a.nb=b;a.La=!0}return a.nb}f.e=function(){return W(this)===Qc()};
f.u=function(){return this.r&&this.e()?0:-1};f.n=function(){return W(this).n()};function ad(a){var b=a,c=a;for(b.e()||(b=W(b).g());c!==b&&!b.e();){b=W(b).g();if(b.e())break;b=W(b).g();if(b===c)break;c=W(c).g()}return a}f.o=function(){return this.r&&this.e()?E().P:new X(this)};f.ha=function(){return"LazyList"};function cc(){var a=zc();return a.r&&a.e()?H().xa:Kd(a,8)}f.ga=function(a,b,c,d){ad(this);Ld(this,a.v,b,c,d);return a};
f.j=function(){var a=new C;Va(a);a.b="LazyList";return Ld(this,a,"(",", ",")").b};f.Ta=function(a){return 0>=a?this:this.r&&this.e()?H().xa:bd(H(),this,a)};f.U=function(){return W(this).g()};f.$classData=y({xc:0},"scala.collection.immutable.LazyList",{xc:1,jb:1,Ia:1,qa:1,a:1,ra:1,B:1,ta:1,C:1,sa:1,ua:1,Ga:1,za:1,va:1,ma:1,ob:1,lb:1,pb:1,Fc:1,ib:1,mc:1,Gc:1,c:1});function Md(){this.S=null}Md.prototype=new Gd;Md.prototype.constructor=Md;function Nd(){}f=Nd.prototype=Md.prototype;
f.Sa=function(a){return a&&a.$classData&&a.$classData.q.kb?this.f()===a.f():!0};f.pa=function(a){if(a&&a.$classData&&a.$classData.q.kb)if(this===a)var b=!0;else{var c=this.f();if(b=c===a.f()){var d=0,g=qb().Oa,e=qb().Oa;g=g<e?g:e;e=c>>31;var h=g>>>31|0|g>>31<<1;for(g=(e===h?(-2147483648^c)>(-2147483648^g<<1):e>h)?g:c;d<g&&b;)K(),Od(d),b=I(0,void 0,Od(d)),d=1+d|0;if(d<c&&b)for(c=this.o().ia(d),a=a.o().ia(d);b&&c.h();)b=I(K(),c.i(),a.i())}}else b=Yc(this,a);return b};f.T=function(){return"IndexedSeq"};
f.Z=function(a){var b=this.f();return b===a?0:b<a?-1:1};f.u=function(){return this.f()};f.f=function(){return this instanceof Pd?this.Ka:this.S.d.length};f.o=function(){return nd()===this?qb().qb:new kd(this,this.f(),0)};f.ha=function(){return"Vector"};function Ad(){}Ad.prototype=new Gd;Ad.prototype.constructor=Ad;function Qd(){}f=Qd.prototype=Ad.prototype;f.T=function(){return"LinearSeq"};f.s=function(a){return fd(this,a)};f.pa=function(a){return gd(this,a)};f.e=function(){return this===F()};
f.f=function(){for(var a=0;!this.e();)a=1+a|0,Rd();return a};f.Z=function(a){if(0>a)a=1;else a:for(;;){if(0===a){a=this.e()?0:1;break a}if(this.e()){a=-1;break a}Rd()}return a};f.ha=function(){return"List"};f.w=function(a){if(a instanceof Ad)a:for(;;){if(this===a){a=!0;break a}var b=this.e(),c=a.e();if(b||c)d=!1;else{K();this.N();var d=I(0,void 0,a.N())}if(d)Rd();else{a=b&&c;break a}}else a=td(this,a);return a};f.Ta=function(a){a:for(var b=this;;){if(0>=a||b.e())break a;a=-1+a|0;b=b.U()}return b};
function Sd(){this.S=null}Sd.prototype=new Nd;Sd.prototype.constructor=Sd;function Td(){}Td.prototype=Sd.prototype;function Pd(){this.S=null;this.Ka=0}Pd.prototype=new Td;Pd.prototype.constructor=Pd;function Ud(){}Ud.prototype=Pd.prototype;function Vd(){Xd=this;F();F()}Vd.prototype=new Qd;Vd.prototype.constructor=Vd;f=Vd.prototype;f.N=function(){throw new Nc("head of empty list");};function Rd(){throw new Oc("tail of empty list");}f.u=function(){return 0};f.o=function(){return E().P};f.Ea=function(){return"Nil"};
f.ab=function(){return 0};f.bb=function(a){M();throw new cd(""+a);};f.U=function(){Rd()};f.n=function(){this.N()};f.$classData=y({Kc:0},"scala.collection.immutable.Nil$",{Kc:1,td:1,jb:1,Ia:1,qa:1,a:1,ra:1,B:1,ta:1,C:1,sa:1,ua:1,Ga:1,za:1,va:1,ma:1,ob:1,lb:1,pb:1,Fc:1,ib:1,mc:1,Gc:1,pd:1,qc:1,oc:1,Oc:1,tc:1,c:1,Tb:1});var Xd;function F(){Xd||(Xd=new Vd);return Xd}function Z(){this.S=null;this.Ka=0;var a=Za().rb;Za();this.Ka=0;this.S=a}Z.prototype=new Ud;Z.prototype.constructor=Z;
function Od(a){throw new cd(a+" is out of bounds (empty vector)");}Z.prototype.w=function(a){return this===a||!(a instanceof Md)&&td(this,a)};Z.prototype.s=function(a){Od(a)};Z.prototype.$classData=y({Qc:0},"scala.collection.immutable.Vector0$",{Qc:1,rd:1,vd:1,ud:1,jb:1,Ia:1,qa:1,a:1,ra:1,B:1,ta:1,C:1,sa:1,ua:1,Ga:1,za:1,va:1,ma:1,ob:1,lb:1,pb:1,kb:1,gb:1,hb:1,sd:1,Oc:1,qc:1,oc:1,tc:1,c:1});var Yd;function nd(){Yd||(Yd=new Z);return Yd}function Ua(){this.v=null}Ua.prototype=new Id;
Ua.prototype.constructor=Ua;f=Ua.prototype;f.T=function(){return"IndexedSeq"};f.o=function(){var a=new Ed(this);return new qd(a)};f.Z=function(a){var b=this.v.f();return b===a?0:b<a?-1:1};f.f=function(){return this.v.f()};f.u=function(){return this.v.f()};f.j=function(){return this.v.b};f.e=function(){return 0===this.v.f()};f.s=function(a){return new l(65535&(this.v.b.charCodeAt(a)|0))};
f.$classData=y({Sc:0},"scala.collection.mutable.StringBuilder",{Sc:1,wd:1,Ia:1,qa:1,a:1,ra:1,B:1,ta:1,C:1,sa:1,ua:1,Ga:1,za:1,va:1,ma:1,Fd:1,Dd:1,Gd:1,zd:1,Aa:1,Ed:1,xd:1,Ad:1,yd:1,Bd:1,gb:1,hb:1,Cd:1,yb:1,c:1});ca=new n(0,0);za.sb=ca;mdoc_js_run0=function(a){Na||(Na=new B);bc(ec(),"linechart1",a,0)};mdoc_js_run1=function(a){Na||(Na=new B);bc(ec(),"pacman",a,50)};
}).call(this);