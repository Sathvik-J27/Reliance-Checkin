(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function i(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(m){if(m.ep)return;m.ep=!0;const h=i(m);fetch(m.href,h)}})();function Cp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cs={exports:{}},ln={},ds={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function Sp(){if(rd)return ze;rd=1;var s=Symbol.for("react.element"),u=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),b=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),y=Symbol.iterator;function w(p){return p===null||typeof p!="object"?null:(p=y&&p[y]||p["@@iterator"],typeof p=="function"?p:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,T={};function P(p,v,Q){this.props=p,this.context=v,this.refs=T,this.updater=Q||U}P.prototype.isReactComponent={},P.prototype.setState=function(p,v){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,v,"setState")},P.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function q(){}q.prototype=P.prototype;function S(p,v,Q){this.props=p,this.context=v,this.refs=T,this.updater=Q||U}var A=S.prototype=new q;A.constructor=S,W(A,P.prototype),A.isPureReactComponent=!0;var $=Array.isArray,O=Object.prototype.hasOwnProperty,_={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function B(p,v,Q){var G,pe={},ae=null,Pe=null;if(v!=null)for(G in v.ref!==void 0&&(Pe=v.ref),v.key!==void 0&&(ae=""+v.key),v)O.call(v,G)&&!K.hasOwnProperty(G)&&(pe[G]=v[G]);var we=arguments.length-2;if(we===1)pe.children=Q;else if(1<we){for(var be=Array(we),Le=0;Le<we;Le++)be[Le]=arguments[Le+2];pe.children=be}if(p&&p.defaultProps)for(G in we=p.defaultProps,we)pe[G]===void 0&&(pe[G]=we[G]);return{$$typeof:s,type:p,key:ae,ref:Pe,props:pe,_owner:_.current}}function L(p,v){return{$$typeof:s,type:p.type,key:v,ref:p.ref,props:p.props,_owner:p._owner}}function te(p){return typeof p=="object"&&p!==null&&p.$$typeof===s}function xe(p){var v={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(Q){return v[Q]})}var Ce=/\/+/g;function re(p,v){return typeof p=="object"&&p!==null&&p.key!=null?xe(""+p.key):v.toString(36)}function fe(p,v,Q,G,pe){var ae=typeof p;(ae==="undefined"||ae==="boolean")&&(p=null);var Pe=!1;if(p===null)Pe=!0;else switch(ae){case"string":case"number":Pe=!0;break;case"object":switch(p.$$typeof){case s:case u:Pe=!0}}if(Pe)return Pe=p,pe=pe(Pe),p=G===""?"."+re(Pe,0):G,$(pe)?(Q="",p!=null&&(Q=p.replace(Ce,"$&/")+"/"),fe(pe,v,Q,"",function(Le){return Le})):pe!=null&&(te(pe)&&(pe=L(pe,Q+(!pe.key||Pe&&Pe.key===pe.key?"":(""+pe.key).replace(Ce,"$&/")+"/")+p)),v.push(pe)),1;if(Pe=0,G=G===""?".":G+":",$(p))for(var we=0;we<p.length;we++){ae=p[we];var be=G+re(ae,we);Pe+=fe(ae,v,Q,be,pe)}else if(be=w(p),typeof be=="function")for(p=be.call(p),we=0;!(ae=p.next()).done;)ae=ae.value,be=G+re(ae,we++),Pe+=fe(ae,v,Q,be,pe);else if(ae==="object")throw v=String(p),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return Pe}function ke(p,v,Q){if(p==null)return p;var G=[],pe=0;return fe(p,G,"","",function(ae){return v.call(Q,ae,pe++)}),G}function Se(p){if(p._status===-1){var v=p._result;v=v(),v.then(function(Q){(p._status===0||p._status===-1)&&(p._status=1,p._result=Q)},function(Q){(p._status===0||p._status===-1)&&(p._status=2,p._result=Q)}),p._status===-1&&(p._status=0,p._result=v)}if(p._status===1)return p._result.default;throw p._result}var je={current:null},J={transition:null},le={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:J,ReactCurrentOwner:_};function ee(){throw Error("act(...) is not supported in production builds of React.")}return ze.Children={map:ke,forEach:function(p,v,Q){ke(p,function(){v.apply(this,arguments)},Q)},count:function(p){var v=0;return ke(p,function(){v++}),v},toArray:function(p){return ke(p,function(v){return v})||[]},only:function(p){if(!te(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},ze.Component=P,ze.Fragment=i,ze.Profiler=m,ze.PureComponent=S,ze.StrictMode=c,ze.Suspense=N,ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ze.act=ee,ze.cloneElement=function(p,v,Q){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var G=W({},p.props),pe=p.key,ae=p.ref,Pe=p._owner;if(v!=null){if(v.ref!==void 0&&(ae=v.ref,Pe=_.current),v.key!==void 0&&(pe=""+v.key),p.type&&p.type.defaultProps)var we=p.type.defaultProps;for(be in v)O.call(v,be)&&!K.hasOwnProperty(be)&&(G[be]=v[be]===void 0&&we!==void 0?we[be]:v[be])}var be=arguments.length-2;if(be===1)G.children=Q;else if(1<be){we=Array(be);for(var Le=0;Le<be;Le++)we[Le]=arguments[Le+2];G.children=we}return{$$typeof:s,type:p.type,key:pe,ref:ae,props:G,_owner:Pe}},ze.createContext=function(p){return p={$$typeof:b,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:h,_context:p},p.Consumer=p},ze.createElement=B,ze.createFactory=function(p){var v=B.bind(null,p);return v.type=p,v},ze.createRef=function(){return{current:null}},ze.forwardRef=function(p){return{$$typeof:M,render:p}},ze.isValidElement=te,ze.lazy=function(p){return{$$typeof:F,_payload:{_status:-1,_result:p},_init:Se}},ze.memo=function(p,v){return{$$typeof:H,type:p,compare:v===void 0?null:v}},ze.startTransition=function(p){var v=J.transition;J.transition={};try{p()}finally{J.transition=v}},ze.unstable_act=ee,ze.useCallback=function(p,v){return je.current.useCallback(p,v)},ze.useContext=function(p){return je.current.useContext(p)},ze.useDebugValue=function(){},ze.useDeferredValue=function(p){return je.current.useDeferredValue(p)},ze.useEffect=function(p,v){return je.current.useEffect(p,v)},ze.useId=function(){return je.current.useId()},ze.useImperativeHandle=function(p,v,Q){return je.current.useImperativeHandle(p,v,Q)},ze.useInsertionEffect=function(p,v){return je.current.useInsertionEffect(p,v)},ze.useLayoutEffect=function(p,v){return je.current.useLayoutEffect(p,v)},ze.useMemo=function(p,v){return je.current.useMemo(p,v)},ze.useReducer=function(p,v,Q){return je.current.useReducer(p,v,Q)},ze.useRef=function(p){return je.current.useRef(p)},ze.useState=function(p){return je.current.useState(p)},ze.useSyncExternalStore=function(p,v,Q){return je.current.useSyncExternalStore(p,v,Q)},ze.useTransition=function(){return je.current.useTransition()},ze.version="18.3.1",ze}var td;function gs(){return td||(td=1,ds.exports=Sp()),ds.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function Pp(){if(od)return ln;od=1;var s=gs(),u=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function b(M,N,H){var F,y={},w=null,U=null;H!==void 0&&(w=""+H),N.key!==void 0&&(w=""+N.key),N.ref!==void 0&&(U=N.ref);for(F in N)c.call(N,F)&&!h.hasOwnProperty(F)&&(y[F]=N[F]);if(M&&M.defaultProps)for(F in N=M.defaultProps,N)y[F]===void 0&&(y[F]=N[F]);return{$$typeof:u,type:M,key:w,ref:U,props:y,_owner:m.current}}return ln.Fragment=i,ln.jsx=b,ln.jsxs=b,ln}var nd;function Ep(){return nd||(nd=1,cs.exports=Pp()),cs.exports}var t=Ep(),bl={},us={exports:{}},Mr={},ps={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function Tp(){return ld||(ld=1,(function(s){function u(J,le){var ee=J.length;J.push(le);e:for(;0<ee;){var p=ee-1>>>1,v=J[p];if(0<m(v,le))J[p]=le,J[ee]=v,ee=p;else break e}}function i(J){return J.length===0?null:J[0]}function c(J){if(J.length===0)return null;var le=J[0],ee=J.pop();if(ee!==le){J[0]=ee;e:for(var p=0,v=J.length,Q=v>>>1;p<Q;){var G=2*(p+1)-1,pe=J[G],ae=G+1,Pe=J[ae];if(0>m(pe,ee))ae<v&&0>m(Pe,pe)?(J[p]=Pe,J[ae]=ee,p=ae):(J[p]=pe,J[G]=ee,p=G);else if(ae<v&&0>m(Pe,ee))J[p]=Pe,J[ae]=ee,p=ae;else break e}}return le}function m(J,le){var ee=J.sortIndex-le.sortIndex;return ee!==0?ee:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var b=Date,M=b.now();s.unstable_now=function(){return b.now()-M}}var N=[],H=[],F=1,y=null,w=3,U=!1,W=!1,T=!1,P=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(J){for(var le=i(H);le!==null;){if(le.callback===null)c(H);else if(le.startTime<=J)c(H),le.sortIndex=le.expirationTime,u(N,le);else break;le=i(H)}}function $(J){if(T=!1,A(J),!W)if(i(N)!==null)W=!0,Se(O);else{var le=i(H);le!==null&&je($,le.startTime-J)}}function O(J,le){W=!1,T&&(T=!1,q(B),B=-1),U=!0;var ee=w;try{for(A(le),y=i(N);y!==null&&(!(y.expirationTime>le)||J&&!xe());){var p=y.callback;if(typeof p=="function"){y.callback=null,w=y.priorityLevel;var v=p(y.expirationTime<=le);le=s.unstable_now(),typeof v=="function"?y.callback=v:y===i(N)&&c(N),A(le)}else c(N);y=i(N)}if(y!==null)var Q=!0;else{var G=i(H);G!==null&&je($,G.startTime-le),Q=!1}return Q}finally{y=null,w=ee,U=!1}}var _=!1,K=null,B=-1,L=5,te=-1;function xe(){return!(s.unstable_now()-te<L)}function Ce(){if(K!==null){var J=s.unstable_now();te=J;var le=!0;try{le=K(!0,J)}finally{le?re():(_=!1,K=null)}}else _=!1}var re;if(typeof S=="function")re=function(){S(Ce)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ke=fe.port2;fe.port1.onmessage=Ce,re=function(){ke.postMessage(null)}}else re=function(){P(Ce,0)};function Se(J){K=J,_||(_=!0,re())}function je(J,le){B=P(function(){J(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){W||U||(W=!0,Se(O))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return w},s.unstable_getFirstCallbackNode=function(){return i(N)},s.unstable_next=function(J){switch(w){case 1:case 2:case 3:var le=3;break;default:le=w}var ee=w;w=le;try{return J()}finally{w=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=w;w=J;try{return le()}finally{w=ee}},s.unstable_scheduleCallback=function(J,le,ee){var p=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?p+ee:p):ee=p,J){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=ee+v,J={id:F++,callback:le,priorityLevel:J,startTime:ee,expirationTime:v,sortIndex:-1},ee>p?(J.sortIndex=ee,u(H,J),i(N)===null&&J===i(H)&&(T?(q(B),B=-1):T=!0,je($,ee-p))):(J.sortIndex=v,u(N,J),W||U||(W=!0,Se(O))),J},s.unstable_shouldYield=xe,s.unstable_wrapCallback=function(J){var le=w;return function(){var ee=w;w=le;try{return J.apply(this,arguments)}finally{w=ee}}}})(hs)),hs}var ad;function zp(){return ad||(ad=1,ps.exports=Tp()),ps.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Mp(){if(sd)return Mr;sd=1;var s=gs(),u=zp();function i(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,m={};function h(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(m[e]=r,e=0;e<r.length;e++)c.add(r[e])}var M=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,H=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F={},y={};function w(e){return N.call(y,e)?!0:N.call(F,e)?!1:H.test(e)?y[e]=!0:(F[e]=!0,!1)}function U(e,r,o,n){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W(e,r,o,n){if(r===null||typeof r>"u"||U(e,r,o,n))return!0;if(n)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(e,r,o,n,l,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=o,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];P[r]=new T(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(q,S);P[r]=new T(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(q,S);P[r]=new T(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(q,S);P[r]=new T(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,r,o,n){var l=P.hasOwnProperty(r)?P[r]:null;(l!==null?l.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(W(r,o,l,n)&&(o=null),n||l===null?w(r)&&(o===null?e.removeAttribute(r):e.setAttribute(r,""+o)):l.mustUseProperty?e[l.propertyName]=o===null?l.type===3?!1:"":o:(r=l.attributeName,n=l.attributeNamespace,o===null?e.removeAttribute(r):(l=l.type,o=l===3||l===4&&o===!0?"":""+o,n?e.setAttributeNS(n,r,o):e.setAttribute(r,o))))}var $=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),_=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),xe=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ke=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,p;function v(e){if(p===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);p=r&&r[1]||""}return`
`+p+e}var Q=!1;function G(e,r){if(!e||Q)return"";Q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(z){var n=z}Reflect.construct(e,[],r)}else{try{r.call()}catch(z){n=z}e.call(r.prototype)}else{try{throw Error()}catch(z){n=z}e()}}catch(z){if(z&&n&&typeof z.stack=="string"){for(var l=z.stack.split(`
`),a=n.stack.split(`
`),d=l.length-1,f=a.length-1;1<=d&&0<=f&&l[d]!==a[f];)f--;for(;1<=d&&0<=f;d--,f--)if(l[d]!==a[f]){if(d!==1||f!==1)do if(d--,f--,0>f||l[d]!==a[f]){var x=`
`+l[d].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=d&&0<=f);break}}}finally{Q=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?v(e):""}function pe(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case _:return"Portal";case L:return"Profiler";case B:return"StrictMode";case re:return"Suspense";case fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case te:return(e._context.displayName||"Context")+".Provider";case Ce:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ke:return r=e.displayName||null,r!==null?r:ae(e.type)||"Memo";case Se:r=e._payload,e=e._init;try{return ae(e(r))}catch{}}return null}function Pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(r);case 8:return r===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function we(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Le(e){var r=be(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,a=o.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(d){n=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function rr(e){e._valueTracker||(e._valueTracker=Le(e))}function Fr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var o=r.getValue(),n="";return e&&(n=be(e)?e.checked?"true":"false":e.value),e=n,e!==o?(r.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ke(e,r){var o=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function wr(e,r){var o=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;o=we(r.value!=null?r.value:o),e._wrapperState={initialChecked:n,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function jr(e,r){r=r.checked,r!=null&&A(e,"checked",r,!1)}function Ge(e,r){jr(e,r);var o=we(r.value),n=r.type;if(o!=null)n==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?tr(e,r.type,o):r.hasOwnProperty("defaultValue")&&tr(e,r.type,we(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Ue(e,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,o||r===e.value||(e.value=r),e.defaultValue=r}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function tr(e,r,o){(r!=="number"||Or(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var nr=Array.isArray;function Ee(e,r,o,n){if(e=e.options,r){r={};for(var l=0;l<o.length;l++)r["$"+o[l]]=!0;for(o=0;o<e.length;o++)l=r.hasOwnProperty("$"+e[o].value),e[o].selected!==l&&(e[o].selected=l),l&&n&&(e[o].defaultSelected=!0)}else{for(o=""+we(o),r=null,l=0;l<e.length;l++){if(e[l].value===o){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function j(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function R(e,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(i(92));if(nr(o)){if(1<o.length)throw Error(i(93));o=o[0]}r=o}r==null&&(r=""),o=r}e._wrapperState={initialValue:we(o)}}function ce(e,r){var o=we(r.value),n=we(r.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),r.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),n!=null&&(e.defaultValue=""+n)}function oe(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Oe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yr(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Oe(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ae,ur=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,n,l){MSApp.execUnsafeLocalFunction(function(){return e(r,o,n,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function D(e,r){if(r){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=r;return}}e.textContent=r}var de={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=["Webkit","ms","Moz","O"];Object.keys(de).forEach(function(e){Te.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),de[r]=de[e]})});function Me(e,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||de.hasOwnProperty(e)&&de[e]?(""+r).trim():r+"px"}function I(e,r){e=e.style;for(var o in r)if(r.hasOwnProperty(o)){var n=o.indexOf("--")===0,l=Me(o,r[o],n);o==="float"&&(o="cssFloat"),n?e.setProperty(o,l):e[o]=l}}var he=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _e(e,r){if(r){if(he[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function He(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mr=null;function br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,Cr=null,Vr=null;function pn(e){if(e=$o(e)){if(typeof Yr!="function")throw Error(i(280));var r=e.stateNode;r&&(r=_n(r),Yr(e.stateNode,e.type,r))}}function Ie(e){Cr?Vr?Vr.push(e):Vr=[e]:Cr=e}function bs(){if(Cr){var e=Cr,r=Vr;if(Vr=Cr=null,pn(e),r)for(e=0;e<r.length;e++)pn(r[e])}}function ks(e,r){return e(r)}function Ns(){}var Sl=!1;function ws(e,r,o){if(Sl)return e(r,o);Sl=!0;try{return ks(e,r,o)}finally{Sl=!1,(Cr!==null||Vr!==null)&&(Ns(),bs())}}function wo(e,r){var o=e.stateNode;if(o===null)return null;var n=_n(o);if(n===null)return null;o=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var Pl=!1;if(M)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{Pl=!1}function Md(e,r,o,n,l,a,d,f,x){var z=Array.prototype.slice.call(arguments,3);try{r.apply(o,z)}catch(V){this.onError(V)}}var Co=!1,hn=null,mn=!1,El=null,Od={onError:function(e){Co=!0,hn=e}};function Dd(e,r,o,n,l,a,d,f,x){Co=!1,hn=null,Md.apply(Od,arguments)}function Rd(e,r,o,n,l,a,d,f,x){if(Dd.apply(this,arguments),Co){if(Co){var z=hn;Co=!1,hn=null}else throw Error(i(198));mn||(mn=!0,El=z)}}function Lt(e){var r=e,o=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(o=r.return),e=r.return;while(e)}return r.tag===3?o:null}function js(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Cs(e){if(Lt(e)!==e)throw Error(i(188))}function _d(e){var r=e.alternate;if(!r){if(r=Lt(e),r===null)throw Error(i(188));return r!==e?null:e}for(var o=e,n=r;;){var l=o.return;if(l===null)break;var a=l.alternate;if(a===null){if(n=l.return,n!==null){o=n;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===o)return Cs(l),e;if(a===n)return Cs(l),r;a=a.sibling}throw Error(i(188))}if(o.return!==n.return)o=l,n=a;else{for(var d=!1,f=l.child;f;){if(f===o){d=!0,o=l,n=a;break}if(f===n){d=!0,n=l,o=a;break}f=f.sibling}if(!d){for(f=a.child;f;){if(f===o){d=!0,o=a,n=l;break}if(f===n){d=!0,n=a,o=l;break}f=f.sibling}if(!d)throw Error(i(189))}}if(o.alternate!==n)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:r}function Ss(e){return e=_d(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Ps(e);if(r!==null)return r;e=e.sibling}return null}var Es=u.unstable_scheduleCallback,Ts=u.unstable_cancelCallback,Ad=u.unstable_shouldYield,Id=u.unstable_requestPaint,Ze=u.unstable_now,Fd=u.unstable_getCurrentPriorityLevel,Tl=u.unstable_ImmediatePriority,zs=u.unstable_UserBlockingPriority,fn=u.unstable_NormalPriority,Ld=u.unstable_LowPriority,Ms=u.unstable_IdlePriority,gn=null,ot=null;function Hd(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(gn,e,void 0,(e.current.flags&128)===128)}catch{}}var Qr=Math.clz32?Math.clz32:Wd,Ud=Math.log,Bd=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-(Ud(e)/Bd|0)|0}var xn=64,vn=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yn(e,r){var o=e.pendingLanes;if(o===0)return 0;var n=0,l=e.suspendedLanes,a=e.pingedLanes,d=o&268435455;if(d!==0){var f=d&~l;f!==0?n=So(f):(a&=d,a!==0&&(n=So(a)))}else d=o&~l,d!==0?n=So(d):a!==0&&(n=So(a));if(n===0)return 0;if(r!==0&&r!==n&&(r&l)===0&&(l=n&-n,a=r&-r,l>=a||l===16&&(a&4194240)!==0))return r;if((n&4)!==0&&(n|=o&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)o=31-Qr(r),l=1<<o,n|=e[o],r&=~l;return n}function $d(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qd(e,r){for(var o=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-Qr(a),f=1<<d,x=l[d];x===-1?((f&o)===0||(f&n)!==0)&&(l[d]=$d(f,r)):x<=r&&(e.expiredLanes|=f),a&=~f}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Os(){var e=xn;return xn<<=1,(xn&4194240)===0&&(xn=64),e}function Ml(e){for(var r=[],o=0;31>o;o++)r.push(e);return r}function Po(e,r,o){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Qr(r),e[r]=o}function Yd(e,r){var o=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<o;){var l=31-Qr(o),a=1<<l;r[l]=0,n[l]=-1,e[l]=-1,o&=~a}}function Ol(e,r){var o=e.entangledLanes|=r;for(e=e.entanglements;o;){var n=31-Qr(o),l=1<<n;l&r|e[n]&r&&(e[n]|=r),o&=~l}}var Fe=0;function Ds(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rs,Dl,_s,As,Is,Rl=!1,bn=[],yt=null,bt=null,kt=null,Eo=new Map,To=new Map,Nt=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fs(e,r){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Eo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(r.pointerId)}}function zo(e,r,o,n,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:o,eventSystemFlags:n,nativeEvent:a,targetContainers:[l]},r!==null&&(r=$o(r),r!==null&&Dl(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function Qd(e,r,o,n,l){switch(r){case"focusin":return yt=zo(yt,e,r,o,n,l),!0;case"dragenter":return bt=zo(bt,e,r,o,n,l),!0;case"mouseover":return kt=zo(kt,e,r,o,n,l),!0;case"pointerover":var a=l.pointerId;return Eo.set(a,zo(Eo.get(a)||null,e,r,o,n,l)),!0;case"gotpointercapture":return a=l.pointerId,To.set(a,zo(To.get(a)||null,e,r,o,n,l)),!0}return!1}function Ls(e){var r=Ht(e.target);if(r!==null){var o=Lt(r);if(o!==null){if(r=o.tag,r===13){if(r=js(o),r!==null){e.blockedOn=r,Is(e.priority,function(){_s(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var o=Al(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var n=new o.constructor(o.type,o);mr=n,o.target.dispatchEvent(n),mr=null}else return r=$o(o),r!==null&&Dl(r),e.blockedOn=o,!1;r.shift()}return!0}function Hs(e,r,o){kn(e)&&o.delete(r)}function Xd(){Rl=!1,yt!==null&&kn(yt)&&(yt=null),bt!==null&&kn(bt)&&(bt=null),kt!==null&&kn(kt)&&(kt=null),Eo.forEach(Hs),To.forEach(Hs)}function Mo(e,r){e.blockedOn===r&&(e.blockedOn=null,Rl||(Rl=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Xd)))}function Oo(e){function r(l){return Mo(l,e)}if(0<bn.length){Mo(bn[0],e);for(var o=1;o<bn.length;o++){var n=bn[o];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&Mo(yt,e),bt!==null&&Mo(bt,e),kt!==null&&Mo(kt,e),Eo.forEach(r),To.forEach(r),o=0;o<Nt.length;o++)n=Nt[o],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(o=Nt[0],o.blockedOn===null);)Ls(o),o.blockedOn===null&&Nt.shift()}var Zt=$.ReactCurrentBatchConfig,Nn=!0;function Kd(e,r,o,n){var l=Fe,a=Zt.transition;Zt.transition=null;try{Fe=1,_l(e,r,o,n)}finally{Fe=l,Zt.transition=a}}function Gd(e,r,o,n){var l=Fe,a=Zt.transition;Zt.transition=null;try{Fe=4,_l(e,r,o,n)}finally{Fe=l,Zt.transition=a}}function _l(e,r,o,n){if(Nn){var l=Al(e,r,o,n);if(l===null)Zl(e,r,n,wn,o),Fs(e,n);else if(Qd(l,e,r,o,n))n.stopPropagation();else if(Fs(e,n),r&4&&-1<Vd.indexOf(e)){for(;l!==null;){var a=$o(l);if(a!==null&&Rs(a),a=Al(e,r,o,n),a===null&&Zl(e,r,n,wn,o),a===l)break;l=a}l!==null&&n.stopPropagation()}else Zl(e,r,n,null,o)}}var wn=null;function Al(e,r,o,n){if(wn=null,e=br(n),e=Ht(e),e!==null)if(r=Lt(e),r===null)e=null;else if(o=r.tag,o===13){if(e=js(r),e!==null)return e;e=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return wn=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fd()){case Tl:return 1;case zs:return 4;case fn:case Ld:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var wt=null,Il=null,jn=null;function Bs(){if(jn)return jn;var e,r=Il,o=r.length,n,l="value"in wt?wt.value:wt.textContent,a=l.length;for(e=0;e<o&&r[e]===l[e];e++);var d=o-e;for(n=1;n<=d&&r[o-n]===l[a-n];n++);return jn=l.slice(e,1<n?1-n:void 0)}function Cn(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Ws(){return!1}function Dr(e){function r(o,n,l,a,d){this._reactName=o,this._targetInst=l,this.type=n,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(o=e[f],this[f]=o?o(a):a[f]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Sn:Ws,this.isPropagationStopped=Ws,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),r}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Dr(eo),Do=ee({},eo,{view:0,detail:0}),Jd=Dr(Do),Ll,Hl,Ro,Pn=ee({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(Ll=e.screenX-Ro.screenX,Hl=e.screenY-Ro.screenY):Hl=Ll=0,Ro=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),$s=Dr(Pn),Zd=ee({},Pn,{dataTransfer:0}),eu=Dr(Zd),ru=ee({},Do,{relatedTarget:0}),Ul=Dr(ru),tu=ee({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),ou=Dr(tu),nu=ee({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lu=Dr(nu),au=ee({},eo,{data:0}),qs=Dr(au),su={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function du(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=cu[e])?!!r[e]:!1}function Bl(){return du}var uu=ee({},Do,{key:function(e){if(e.key){var r=su[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Cn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Cn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pu=Dr(uu),hu=ee({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=Dr(hu),mu=ee({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),fu=Dr(mu),gu=ee({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),xu=Dr(gu),vu=ee({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yu=Dr(vu),bu=[9,13,27,32],Wl=M&&"CompositionEvent"in window,_o=null;M&&"documentMode"in document&&(_o=document.documentMode);var ku=M&&"TextEvent"in window&&!_o,Vs=M&&(!Wl||_o&&8<_o&&11>=_o),Qs=" ",Xs=!1;function Ks(e,r){switch(e){case"keyup":return bu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ro=!1;function Nu(e,r){switch(e){case"compositionend":return Gs(r);case"keypress":return r.which!==32?null:(Xs=!0,Qs);case"textInput":return e=r.data,e===Qs&&Xs?null:e;default:return null}}function wu(e,r){if(ro)return e==="compositionend"||!Wl&&Ks(e,r)?(e=Bs(),jn=Il=wt=null,ro=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Vs&&r.locale!=="ko"?null:r.data;default:return null}}var ju={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!ju[e.type]:r==="textarea"}function Zs(e,r,o,n){Ie(n),r=On(r,"onChange"),0<r.length&&(o=new Fl("onChange","change",null,o,n),e.push({event:o,listeners:r}))}var Ao=null,Io=null;function Cu(e){xi(e,0)}function En(e){var r=ao(e);if(Fr(r))return e}function Su(e,r){if(e==="change")return r}var ei=!1;if(M){var $l;if(M){var ql="oninput"in document;if(!ql){var ri=document.createElement("div");ri.setAttribute("oninput","return;"),ql=typeof ri.oninput=="function"}$l=ql}else $l=!1;ei=$l&&(!document.documentMode||9<document.documentMode)}function ti(){Ao&&(Ao.detachEvent("onpropertychange",oi),Io=Ao=null)}function oi(e){if(e.propertyName==="value"&&En(Io)){var r=[];Zs(r,Io,e,br(e)),ws(Cu,r)}}function Pu(e,r,o){e==="focusin"?(ti(),Ao=r,Io=o,Ao.attachEvent("onpropertychange",oi)):e==="focusout"&&ti()}function Eu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return En(Io)}function Tu(e,r){if(e==="click")return En(r)}function zu(e,r){if(e==="input"||e==="change")return En(r)}function Mu(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Xr=typeof Object.is=="function"?Object.is:Mu;function Fo(e,r){if(Xr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var o=Object.keys(e),n=Object.keys(r);if(o.length!==n.length)return!1;for(n=0;n<o.length;n++){var l=o[n];if(!N.call(r,l)||!Xr(e[l],r[l]))return!1}return!0}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function li(e,r){var o=ni(e);e=0;for(var n;o;){if(o.nodeType===3){if(n=e+o.textContent.length,e<=r&&n>=r)return{node:o,offset:r-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ni(o)}}function ai(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ai(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function si(){for(var e=window,r=Or();r instanceof e.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)e=r.contentWindow;else break;r=Or(e.document)}return r}function Yl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Ou(e){var r=si(),o=e.focusedElem,n=e.selectionRange;if(r!==o&&o&&o.ownerDocument&&ai(o.ownerDocument.documentElement,o)){if(n!==null&&Yl(o)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(e,o.value.length);else if(e=(r=o.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=o.textContent.length,a=Math.min(n.start,l);n=n.end===void 0?a:Math.min(n.end,l),!e.extend&&a>n&&(l=n,n=a,a=l),l=li(o,a);var d=li(o,n);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),a>n?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=o;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)e=r[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Du=M&&"documentMode"in document&&11>=document.documentMode,to=null,Vl=null,Lo=null,Ql=!1;function ii(e,r,o){var n=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||to==null||to!==Or(n)||(n=to,"selectionStart"in n&&Yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Lo&&Fo(Lo,n)||(Lo=n,n=On(Vl,"onSelect"),0<n.length&&(r=new Fl("onSelect","select",null,r,o),e.push({event:r,listeners:n}),r.target=to)))}function Tn(e,r){var o={};return o[e.toLowerCase()]=r.toLowerCase(),o["Webkit"+e]="webkit"+r,o["Moz"+e]="moz"+r,o}var oo={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Xl={},ci={};M&&(ci=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function zn(e){if(Xl[e])return Xl[e];if(!oo[e])return e;var r=oo[e],o;for(o in r)if(r.hasOwnProperty(o)&&o in ci)return Xl[e]=r[o];return e}var di=zn("animationend"),ui=zn("animationiteration"),pi=zn("animationstart"),hi=zn("transitionend"),mi=new Map,fi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,r){mi.set(e,r),h(r,[e])}for(var Kl=0;Kl<fi.length;Kl++){var Gl=fi[Kl],Ru=Gl.toLowerCase(),_u=Gl[0].toUpperCase()+Gl.slice(1);jt(Ru,"on"+_u)}jt(di,"onAnimationEnd"),jt(ui,"onAnimationIteration"),jt(pi,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(hi,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Au=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function gi(e,r,o){var n=e.type||"unknown-event";e.currentTarget=o,Rd(n,r,void 0,e),e.currentTarget=null}function xi(e,r){r=(r&4)!==0;for(var o=0;o<e.length;o++){var n=e[o],l=n.event;n=n.listeners;e:{var a=void 0;if(r)for(var d=n.length-1;0<=d;d--){var f=n[d],x=f.instance,z=f.currentTarget;if(f=f.listener,x!==a&&l.isPropagationStopped())break e;gi(l,f,z),a=x}else for(d=0;d<n.length;d++){if(f=n[d],x=f.instance,z=f.currentTarget,f=f.listener,x!==a&&l.isPropagationStopped())break e;gi(l,f,z),a=x}}}if(mn)throw e=El,mn=!1,El=null,e}function We(e,r){var o=r[la];o===void 0&&(o=r[la]=new Set);var n=e+"__bubble";o.has(n)||(vi(r,e,2,!1),o.add(n))}function Jl(e,r,o){var n=0;r&&(n|=4),vi(o,e,n,r)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Mn]){e[Mn]=!0,c.forEach(function(o){o!=="selectionchange"&&(Au.has(o)||Jl(o,!1,e),Jl(o,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Mn]||(r[Mn]=!0,Jl("selectionchange",!1,r))}}function vi(e,r,o,n){switch(Us(r)){case 1:var l=Kd;break;case 4:l=Gd;break;default:l=_l}o=l.bind(null,r,o,e),l=void 0,!Pl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(r,o,{capture:!0,passive:l}):e.addEventListener(r,o,!0):l!==void 0?e.addEventListener(r,o,{passive:l}):e.addEventListener(r,o,!1)}function Zl(e,r,o,n,l){var a=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var f=n.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(d===4)for(d=n.return;d!==null;){var x=d.tag;if((x===3||x===4)&&(x=d.stateNode.containerInfo,x===l||x.nodeType===8&&x.parentNode===l))return;d=d.return}for(;f!==null;){if(d=Ht(f),d===null)return;if(x=d.tag,x===5||x===6){n=a=d;continue e}f=f.parentNode}}n=n.return}ws(function(){var z=a,V=br(o),X=[];e:{var Y=mi.get(e);if(Y!==void 0){var ne=Fl,ie=e;switch(e){case"keypress":if(Cn(o)===0)break e;case"keydown":case"keyup":ne=pu;break;case"focusin":ie="focus",ne=Ul;break;case"focusout":ie="blur",ne=Ul;break;case"beforeblur":case"afterblur":ne=Ul;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=eu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=fu;break;case di:case ui:case pi:ne=ou;break;case hi:ne=xu;break;case"scroll":ne=Jd;break;case"wheel":ne=yu;break;case"copy":case"cut":case"paste":ne=lu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=Ys}var ue=(r&4)!==0,er=!ue&&e==="scroll",C=ue?Y!==null?Y+"Capture":null:Y;ue=[];for(var k=z,E;k!==null;){E=k;var Z=E.stateNode;if(E.tag===5&&Z!==null&&(E=Z,C!==null&&(Z=wo(k,C),Z!=null&&ue.push(Bo(k,Z,E)))),er)break;k=k.return}0<ue.length&&(Y=new ne(Y,ie,null,o,V),X.push({event:Y,listeners:ue}))}}if((r&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",Y&&o!==mr&&(ie=o.relatedTarget||o.fromElement)&&(Ht(ie)||ie[dt]))break e;if((ne||Y)&&(Y=V.window===V?V:(Y=V.ownerDocument)?Y.defaultView||Y.parentWindow:window,ne?(ie=o.relatedTarget||o.toElement,ne=z,ie=ie?Ht(ie):null,ie!==null&&(er=Lt(ie),ie!==er||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ne=null,ie=z),ne!==ie)){if(ue=$s,Z="onMouseLeave",C="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ue=Ys,Z="onPointerLeave",C="onPointerEnter",k="pointer"),er=ne==null?Y:ao(ne),E=ie==null?Y:ao(ie),Y=new ue(Z,k+"leave",ne,o,V),Y.target=er,Y.relatedTarget=E,Z=null,Ht(V)===z&&(ue=new ue(C,k+"enter",ie,o,V),ue.target=E,ue.relatedTarget=er,Z=ue),er=Z,ne&&ie)r:{for(ue=ne,C=ie,k=0,E=ue;E;E=no(E))k++;for(E=0,Z=C;Z;Z=no(Z))E++;for(;0<k-E;)ue=no(ue),k--;for(;0<E-k;)C=no(C),E--;for(;k--;){if(ue===C||C!==null&&ue===C.alternate)break r;ue=no(ue),C=no(C)}ue=null}else ue=null;ne!==null&&yi(X,Y,ne,ue,!1),ie!==null&&er!==null&&yi(X,er,ie,ue,!0)}}e:{if(Y=z?ao(z):window,ne=Y.nodeName&&Y.nodeName.toLowerCase(),ne==="select"||ne==="input"&&Y.type==="file")var me=Su;else if(Js(Y))if(ei)me=zu;else{me=Eu;var ve=Pu}else(ne=Y.nodeName)&&ne.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(me=Tu);if(me&&(me=me(e,z))){Zs(X,me,o,V);break e}ve&&ve(e,Y,z),e==="focusout"&&(ve=Y._wrapperState)&&ve.controlled&&Y.type==="number"&&tr(Y,"number",Y.value)}switch(ve=z?ao(z):window,e){case"focusin":(Js(ve)||ve.contentEditable==="true")&&(to=ve,Vl=z,Lo=null);break;case"focusout":Lo=Vl=to=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,ii(X,o,V);break;case"selectionchange":if(Du)break;case"keydown":case"keyup":ii(X,o,V)}var ye;if(Wl)e:{switch(e){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else ro?Ks(e,o)&&(Ne="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Ne="onCompositionStart");Ne&&(Vs&&o.locale!=="ko"&&(ro||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&ro&&(ye=Bs()):(wt=V,Il="value"in wt?wt.value:wt.textContent,ro=!0)),ve=On(z,Ne),0<ve.length&&(Ne=new qs(Ne,e,null,o,V),X.push({event:Ne,listeners:ve}),ye?Ne.data=ye:(ye=Gs(o),ye!==null&&(Ne.data=ye)))),(ye=ku?Nu(e,o):wu(e,o))&&(z=On(z,"onBeforeInput"),0<z.length&&(V=new qs("onBeforeInput","beforeinput",null,o,V),X.push({event:V,listeners:z}),V.data=ye))}xi(X,r)})}function Bo(e,r,o){return{instance:e,listener:r,currentTarget:o}}function On(e,r){for(var o=r+"Capture",n=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=wo(e,o),a!=null&&n.unshift(Bo(e,a,l)),a=wo(e,r),a!=null&&n.push(Bo(e,a,l))),e=e.return}return n}function no(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,r,o,n,l){for(var a=r._reactName,d=[];o!==null&&o!==n;){var f=o,x=f.alternate,z=f.stateNode;if(x!==null&&x===n)break;f.tag===5&&z!==null&&(f=z,l?(x=wo(o,a),x!=null&&d.unshift(Bo(o,x,f))):l||(x=wo(o,a),x!=null&&d.push(Bo(o,x,f)))),o=o.return}d.length!==0&&e.push({event:r,listeners:d})}var Iu=/\r\n?/g,Fu=/\u0000|\uFFFD/g;function bi(e){return(typeof e=="string"?e:""+e).replace(Iu,`
`).replace(Fu,"")}function Dn(e,r,o){if(r=bi(r),bi(e)!==r&&o)throw Error(i(425))}function Rn(){}var ea=null,ra=null;function ta(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,Lu=typeof clearTimeout=="function"?clearTimeout:void 0,ki=typeof Promise=="function"?Promise:void 0,Hu=typeof queueMicrotask=="function"?queueMicrotask:typeof ki<"u"?function(e){return ki.resolve(null).then(e).catch(Uu)}:oa;function Uu(e){setTimeout(function(){throw e})}function na(e,r){var o=r,n=0;do{var l=o.nextSibling;if(e.removeChild(o),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(n===0){e.removeChild(l),Oo(r);return}n--}else o!=="$"&&o!=="$?"&&o!=="$!"||n++;o=l}while(o);Oo(r)}function Ct(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ni(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return e;r--}else o==="/$"&&r++}e=e.previousSibling}return null}var lo=Math.random().toString(36).slice(2),nt="__reactFiber$"+lo,Wo="__reactProps$"+lo,dt="__reactContainer$"+lo,la="__reactEvents$"+lo,Bu="__reactListeners$"+lo,Wu="__reactHandles$"+lo;function Ht(e){var r=e[nt];if(r)return r;for(var o=e.parentNode;o;){if(r=o[dt]||o[nt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(e=Ni(e);e!==null;){if(o=e[nt])return o;e=Ni(e)}return r}e=o,o=e.parentNode}return null}function $o(e){return e=e[nt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ao(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function _n(e){return e[Wo]||null}var aa=[],so=-1;function St(e){return{current:e}}function $e(e){0>so||(e.current=aa[so],aa[so]=null,so--)}function Be(e,r){so++,aa[so]=e.current,e.current=r}var Pt={},fr=St(Pt),Sr=St(!1),Ut=Pt;function io(e,r){var o=e.type.contextTypes;if(!o)return Pt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in o)l[a]=r[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pr(e){return e=e.childContextTypes,e!=null}function An(){$e(Sr),$e(fr)}function wi(e,r,o){if(fr.current!==Pt)throw Error(i(168));Be(fr,r),Be(Sr,o)}function ji(e,r,o){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return o;n=n.getChildContext();for(var l in n)if(!(l in r))throw Error(i(108,Pe(e)||"Unknown",l));return ee({},o,n)}function In(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Ut=fr.current,Be(fr,e),Be(Sr,Sr.current),!0}function Ci(e,r,o){var n=e.stateNode;if(!n)throw Error(i(169));o?(e=ji(e,r,Ut),n.__reactInternalMemoizedMergedChildContext=e,$e(Sr),$e(fr),Be(fr,e)):$e(Sr),Be(Sr,o)}var ut=null,Fn=!1,sa=!1;function Si(e){ut===null?ut=[e]:ut.push(e)}function $u(e){Fn=!0,Si(e)}function Et(){if(!sa&&ut!==null){sa=!0;var e=0,r=Fe;try{var o=ut;for(Fe=1;e<o.length;e++){var n=o[e];do n=n(!0);while(n!==null)}ut=null,Fn=!1}catch(l){throw ut!==null&&(ut=ut.slice(e+1)),Es(Tl,Et),l}finally{Fe=r,sa=!1}}return null}var co=[],uo=0,Ln=null,Hn=0,Lr=[],Hr=0,Bt=null,pt=1,ht="";function Wt(e,r){co[uo++]=Hn,co[uo++]=Ln,Ln=e,Hn=r}function Pi(e,r,o){Lr[Hr++]=pt,Lr[Hr++]=ht,Lr[Hr++]=Bt,Bt=e;var n=pt;e=ht;var l=32-Qr(n)-1;n&=~(1<<l),o+=1;var a=32-Qr(r)+l;if(30<a){var d=l-l%5;a=(n&(1<<d)-1).toString(32),n>>=d,l-=d,pt=1<<32-Qr(r)+l|o<<l|n,ht=a+e}else pt=1<<a|o<<l|n,ht=e}function ia(e){e.return!==null&&(Wt(e,1),Pi(e,1,0))}function ca(e){for(;e===Ln;)Ln=co[--uo],co[uo]=null,Hn=co[--uo],co[uo]=null;for(;e===Bt;)Bt=Lr[--Hr],Lr[Hr]=null,ht=Lr[--Hr],Lr[Hr]=null,pt=Lr[--Hr],Lr[Hr]=null}var Rr=null,_r=null,qe=!1,Kr=null;function Ei(e,r){var o=$r(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=e,r=e.deletions,r===null?(e.deletions=[o],e.flags|=16):r.push(o)}function Ti(e,r){switch(e.tag){case 5:var o=e.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Rr=e,_r=Ct(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Rr=e,_r=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Bt!==null?{id:pt,overflow:ht}:null,e.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=$r(18,null,null,0),o.stateNode=r,o.return=e,e.child=o,Rr=e,_r=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if(qe){var r=_r;if(r){var o=r;if(!Ti(e,r)){if(da(e))throw Error(i(418));r=Ct(o.nextSibling);var n=Rr;r&&Ti(e,r)?Ei(n,o):(e.flags=e.flags&-4097|2,qe=!1,Rr=e)}}else{if(da(e))throw Error(i(418));e.flags=e.flags&-4097|2,qe=!1,Rr=e}}}function zi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rr=e}function Un(e){if(e!==Rr)return!1;if(!qe)return zi(e),qe=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ta(e.type,e.memoizedProps)),r&&(r=_r)){if(da(e))throw Mi(),Error(i(418));for(;r;)Ei(e,r),r=Ct(r.nextSibling)}if(zi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(r===0){_r=Ct(e.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}e=e.nextSibling}_r=null}}else _r=Rr?Ct(e.stateNode.nextSibling):null;return!0}function Mi(){for(var e=_r;e;)e=Ct(e.nextSibling)}function po(){_r=Rr=null,qe=!1}function pa(e){Kr===null?Kr=[e]:Kr.push(e)}var qu=$.ReactCurrentBatchConfig;function qo(e,r,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var n=o.stateNode}if(!n)throw Error(i(147,e));var l=n,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var f=l.refs;d===null?delete f[a]:f[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Bn(e,r){throw e=Object.prototype.toString.call(r),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Oi(e){var r=e._init;return r(e._payload)}function Di(e){function r(C,k){if(e){var E=C.deletions;E===null?(C.deletions=[k],C.flags|=16):E.push(k)}}function o(C,k){if(!e)return null;for(;k!==null;)r(C,k),k=k.sibling;return null}function n(C,k){for(C=new Map;k!==null;)k.key!==null?C.set(k.key,k):C.set(k.index,k),k=k.sibling;return C}function l(C,k){return C=At(C,k),C.index=0,C.sibling=null,C}function a(C,k,E){return C.index=E,e?(E=C.alternate,E!==null?(E=E.index,E<k?(C.flags|=2,k):E):(C.flags|=2,k)):(C.flags|=1048576,k)}function d(C){return e&&C.alternate===null&&(C.flags|=2),C}function f(C,k,E,Z){return k===null||k.tag!==6?(k=os(E,C.mode,Z),k.return=C,k):(k=l(k,E),k.return=C,k)}function x(C,k,E,Z){var me=E.type;return me===K?V(C,k,E.props.children,Z,E.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Se&&Oi(me)===k.type)?(Z=l(k,E.props),Z.ref=qo(C,k,E),Z.return=C,Z):(Z=pl(E.type,E.key,E.props,null,C.mode,Z),Z.ref=qo(C,k,E),Z.return=C,Z)}function z(C,k,E,Z){return k===null||k.tag!==4||k.stateNode.containerInfo!==E.containerInfo||k.stateNode.implementation!==E.implementation?(k=ns(E,C.mode,Z),k.return=C,k):(k=l(k,E.children||[]),k.return=C,k)}function V(C,k,E,Z,me){return k===null||k.tag!==7?(k=Gt(E,C.mode,Z,me),k.return=C,k):(k=l(k,E),k.return=C,k)}function X(C,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return k=os(""+k,C.mode,E),k.return=C,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case O:return E=pl(k.type,k.key,k.props,null,C.mode,E),E.ref=qo(C,null,k),E.return=C,E;case _:return k=ns(k,C.mode,E),k.return=C,k;case Se:var Z=k._init;return X(C,Z(k._payload),E)}if(nr(k)||le(k))return k=Gt(k,C.mode,E,null),k.return=C,k;Bn(C,k)}return null}function Y(C,k,E,Z){var me=k!==null?k.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return me!==null?null:f(C,k,""+E,Z);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case O:return E.key===me?x(C,k,E,Z):null;case _:return E.key===me?z(C,k,E,Z):null;case Se:return me=E._init,Y(C,k,me(E._payload),Z)}if(nr(E)||le(E))return me!==null?null:V(C,k,E,Z,null);Bn(C,E)}return null}function ne(C,k,E,Z,me){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return C=C.get(E)||null,f(k,C,""+Z,me);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:return C=C.get(Z.key===null?E:Z.key)||null,x(k,C,Z,me);case _:return C=C.get(Z.key===null?E:Z.key)||null,z(k,C,Z,me);case Se:var ve=Z._init;return ne(C,k,E,ve(Z._payload),me)}if(nr(Z)||le(Z))return C=C.get(E)||null,V(k,C,Z,me,null);Bn(k,Z)}return null}function ie(C,k,E,Z){for(var me=null,ve=null,ye=k,Ne=k=0,dr=null;ye!==null&&Ne<E.length;Ne++){ye.index>Ne?(dr=ye,ye=null):dr=ye.sibling;var Re=Y(C,ye,E[Ne],Z);if(Re===null){ye===null&&(ye=dr);break}e&&ye&&Re.alternate===null&&r(C,ye),k=a(Re,k,Ne),ve===null?me=Re:ve.sibling=Re,ve=Re,ye=dr}if(Ne===E.length)return o(C,ye),qe&&Wt(C,Ne),me;if(ye===null){for(;Ne<E.length;Ne++)ye=X(C,E[Ne],Z),ye!==null&&(k=a(ye,k,Ne),ve===null?me=ye:ve.sibling=ye,ve=ye);return qe&&Wt(C,Ne),me}for(ye=n(C,ye);Ne<E.length;Ne++)dr=ne(ye,C,Ne,E[Ne],Z),dr!==null&&(e&&dr.alternate!==null&&ye.delete(dr.key===null?Ne:dr.key),k=a(dr,k,Ne),ve===null?me=dr:ve.sibling=dr,ve=dr);return e&&ye.forEach(function(It){return r(C,It)}),qe&&Wt(C,Ne),me}function ue(C,k,E,Z){var me=le(E);if(typeof me!="function")throw Error(i(150));if(E=me.call(E),E==null)throw Error(i(151));for(var ve=me=null,ye=k,Ne=k=0,dr=null,Re=E.next();ye!==null&&!Re.done;Ne++,Re=E.next()){ye.index>Ne?(dr=ye,ye=null):dr=ye.sibling;var It=Y(C,ye,Re.value,Z);if(It===null){ye===null&&(ye=dr);break}e&&ye&&It.alternate===null&&r(C,ye),k=a(It,k,Ne),ve===null?me=It:ve.sibling=It,ve=It,ye=dr}if(Re.done)return o(C,ye),qe&&Wt(C,Ne),me;if(ye===null){for(;!Re.done;Ne++,Re=E.next())Re=X(C,Re.value,Z),Re!==null&&(k=a(Re,k,Ne),ve===null?me=Re:ve.sibling=Re,ve=Re);return qe&&Wt(C,Ne),me}for(ye=n(C,ye);!Re.done;Ne++,Re=E.next())Re=ne(ye,C,Ne,Re.value,Z),Re!==null&&(e&&Re.alternate!==null&&ye.delete(Re.key===null?Ne:Re.key),k=a(Re,k,Ne),ve===null?me=Re:ve.sibling=Re,ve=Re);return e&&ye.forEach(function(jp){return r(C,jp)}),qe&&Wt(C,Ne),me}function er(C,k,E,Z){if(typeof E=="object"&&E!==null&&E.type===K&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case O:e:{for(var me=E.key,ve=k;ve!==null;){if(ve.key===me){if(me=E.type,me===K){if(ve.tag===7){o(C,ve.sibling),k=l(ve,E.props.children),k.return=C,C=k;break e}}else if(ve.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Se&&Oi(me)===ve.type){o(C,ve.sibling),k=l(ve,E.props),k.ref=qo(C,ve,E),k.return=C,C=k;break e}o(C,ve);break}else r(C,ve);ve=ve.sibling}E.type===K?(k=Gt(E.props.children,C.mode,Z,E.key),k.return=C,C=k):(Z=pl(E.type,E.key,E.props,null,C.mode,Z),Z.ref=qo(C,k,E),Z.return=C,C=Z)}return d(C);case _:e:{for(ve=E.key;k!==null;){if(k.key===ve)if(k.tag===4&&k.stateNode.containerInfo===E.containerInfo&&k.stateNode.implementation===E.implementation){o(C,k.sibling),k=l(k,E.children||[]),k.return=C,C=k;break e}else{o(C,k);break}else r(C,k);k=k.sibling}k=ns(E,C.mode,Z),k.return=C,C=k}return d(C);case Se:return ve=E._init,er(C,k,ve(E._payload),Z)}if(nr(E))return ie(C,k,E,Z);if(le(E))return ue(C,k,E,Z);Bn(C,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,k!==null&&k.tag===6?(o(C,k.sibling),k=l(k,E),k.return=C,C=k):(o(C,k),k=os(E,C.mode,Z),k.return=C,C=k),d(C)):o(C,k)}return er}var ho=Di(!0),Ri=Di(!1),Wn=St(null),$n=null,mo=null,ha=null;function ma(){ha=mo=$n=null}function fa(e){var r=Wn.current;$e(Wn),e._currentValue=r}function ga(e,r,o){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===o)break;e=e.return}}function fo(e,r){$n=e,ha=mo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Er=!0),e.firstContext=null)}function Ur(e){var r=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:r,next:null},mo===null){if($n===null)throw Error(i(308));mo=e,$n.dependencies={lanes:0,firstContext:e}}else mo=mo.next=e;return r}var $t=null;function xa(e){$t===null?$t=[e]:$t.push(e)}function _i(e,r,o,n){var l=r.interleaved;return l===null?(o.next=o,xa(r)):(o.next=l.next,l.next=o),r.interleaved=o,mt(e,n)}function mt(e,r){e.lanes|=r;var o=e.alternate;for(o!==null&&(o.lanes|=r),o=e,e=e.return;e!==null;)e.childLanes|=r,o=e.alternate,o!==null&&(o.childLanes|=r),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Tt=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ai(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zt(e,r,o){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(De&2)!==0){var l=n.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r,mt(e,o)}return l=n.interleaved,l===null?(r.next=r,xa(n)):(r.next=l.next,l.next=r),n.interleaved=r,mt(e,o)}function qn(e,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,Ol(e,o)}}function Ii(e,r){var o=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,o===n)){var l=null,a=null;if(o=o.firstBaseUpdate,o!==null){do{var d={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};a===null?l=a=d:a=a.next=d,o=o.next}while(o!==null);a===null?l=a=r:a=a.next=r}else l=a=r;o={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=r:e.next=r,o.lastBaseUpdate=r}function Yn(e,r,o,n){var l=e.updateQueue;Tt=!1;var a=l.firstBaseUpdate,d=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var x=f,z=x.next;x.next=null,d===null?a=z:d.next=z,d=x;var V=e.alternate;V!==null&&(V=V.updateQueue,f=V.lastBaseUpdate,f!==d&&(f===null?V.firstBaseUpdate=z:f.next=z,V.lastBaseUpdate=x))}if(a!==null){var X=l.baseState;d=0,V=z=x=null,f=a;do{var Y=f.lane,ne=f.eventTime;if((n&Y)===Y){V!==null&&(V=V.next={eventTime:ne,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var ie=e,ue=f;switch(Y=r,ne=o,ue.tag){case 1:if(ie=ue.payload,typeof ie=="function"){X=ie.call(ne,X,Y);break e}X=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ue.payload,Y=typeof ie=="function"?ie.call(ne,X,Y):ie,Y==null)break e;X=ee({},X,Y);break e;case 2:Tt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,Y=l.effects,Y===null?l.effects=[f]:Y.push(f))}else ne={eventTime:ne,lane:Y,tag:f.tag,payload:f.payload,callback:f.callback,next:null},V===null?(z=V=ne,x=X):V=V.next=ne,d|=Y;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;Y=f,f=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);if(V===null&&(x=X),l.baseState=x,l.firstBaseUpdate=z,l.lastBaseUpdate=V,r=l.shared.interleaved,r!==null){l=r;do d|=l.lane,l=l.next;while(l!==r)}else a===null&&(l.shared.lanes=0);Vt|=d,e.lanes=d,e.memoizedState=X}}function Fi(e,r,o){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],l=n.callback;if(l!==null){if(n.callback=null,n=o,typeof l!="function")throw Error(i(191,l));l.call(n)}}}var Yo={},lt=St(Yo),Vo=St(Yo),Qo=St(Yo);function qt(e){if(e===Yo)throw Error(i(174));return e}function ya(e,r){switch(Be(Qo,r),Be(Vo,e),Be(lt,Yo),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:yr(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=yr(r,e)}$e(lt),Be(lt,r)}function go(){$e(lt),$e(Vo),$e(Qo)}function Li(e){qt(Qo.current);var r=qt(lt.current),o=yr(r,e.type);r!==o&&(Be(Vo,e),Be(lt,o))}function ba(e){Vo.current===e&&($e(lt),$e(Vo))}var Qe=St(0);function Vn(e){for(var r=e;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ka=[];function Na(){for(var e=0;e<ka.length;e++)ka[e]._workInProgressVersionPrimary=null;ka.length=0}var Qn=$.ReactCurrentDispatcher,wa=$.ReactCurrentBatchConfig,Yt=0,Xe=null,lr=null,ir=null,Xn=!1,Xo=!1,Ko=0,Yu=0;function gr(){throw Error(i(321))}function ja(e,r){if(r===null)return!1;for(var o=0;o<r.length&&o<e.length;o++)if(!Xr(e[o],r[o]))return!1;return!0}function Ca(e,r,o,n,l,a){if(Yt=a,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qn.current=e===null||e.memoizedState===null?Ku:Gu,e=o(n,l),Xo){a=0;do{if(Xo=!1,Ko=0,25<=a)throw Error(i(301));a+=1,ir=lr=null,r.updateQueue=null,Qn.current=Ju,e=o(n,l)}while(Xo)}if(Qn.current=Jn,r=lr!==null&&lr.next!==null,Yt=0,ir=lr=Xe=null,Xn=!1,r)throw Error(i(300));return e}function Sa(){var e=Ko!==0;return Ko=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ir===null?Xe.memoizedState=ir=e:ir=ir.next=e,ir}function Br(){if(lr===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=lr.next;var r=ir===null?Xe.memoizedState:ir.next;if(r!==null)ir=r,lr=e;else{if(e===null)throw Error(i(310));lr=e,e={memoizedState:lr.memoizedState,baseState:lr.baseState,baseQueue:lr.baseQueue,queue:lr.queue,next:null},ir===null?Xe.memoizedState=ir=e:ir=ir.next=e}return ir}function Go(e,r){return typeof r=="function"?r(e):r}function Pa(e){var r=Br(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var n=lr,l=n.baseQueue,a=o.pending;if(a!==null){if(l!==null){var d=l.next;l.next=a.next,a.next=d}n.baseQueue=l=a,o.pending=null}if(l!==null){a=l.next,n=n.baseState;var f=d=null,x=null,z=a;do{var V=z.lane;if((Yt&V)===V)x!==null&&(x=x.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),n=z.hasEagerState?z.eagerState:e(n,z.action);else{var X={lane:V,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};x===null?(f=x=X,d=n):x=x.next=X,Xe.lanes|=V,Vt|=V}z=z.next}while(z!==null&&z!==a);x===null?d=n:x.next=f,Xr(n,r.memoizedState)||(Er=!0),r.memoizedState=n,r.baseState=d,r.baseQueue=x,o.lastRenderedState=n}if(e=o.interleaved,e!==null){l=e;do a=l.lane,Xe.lanes|=a,Vt|=a,l=l.next;while(l!==e)}else l===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Ea(e){var r=Br(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var n=o.dispatch,l=o.pending,a=r.memoizedState;if(l!==null){o.pending=null;var d=l=l.next;do a=e(a,d.action),d=d.next;while(d!==l);Xr(a,r.memoizedState)||(Er=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),o.lastRenderedState=a}return[a,n]}function Hi(){}function Ui(e,r){var o=Xe,n=Br(),l=r(),a=!Xr(n.memoizedState,l);if(a&&(n.memoizedState=l,Er=!0),n=n.queue,Ta($i.bind(null,o,n,e),[e]),n.getSnapshot!==r||a||ir!==null&&ir.memoizedState.tag&1){if(o.flags|=2048,Jo(9,Wi.bind(null,o,n,l,r),void 0,null),cr===null)throw Error(i(349));(Yt&30)!==0||Bi(o,r,l)}return l}function Bi(e,r,o){e.flags|=16384,e={getSnapshot:r,value:o},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[e]):(o=r.stores,o===null?r.stores=[e]:o.push(e))}function Wi(e,r,o,n){r.value=o,r.getSnapshot=n,qi(r)&&Yi(e)}function $i(e,r,o){return o(function(){qi(r)&&Yi(e)})}function qi(e){var r=e.getSnapshot;e=e.value;try{var o=r();return!Xr(e,o)}catch{return!0}}function Yi(e){var r=mt(e,1);r!==null&&et(r,e,1,-1)}function Vi(e){var r=at();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},r.queue=e,e=e.dispatch=Xu.bind(null,Xe,e),[r.memoizedState,e]}function Jo(e,r,o,n){return e={tag:e,create:r,destroy:o,deps:n,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=e.next=e):(o=r.lastEffect,o===null?r.lastEffect=e.next=e:(n=o.next,o.next=e,e.next=n,r.lastEffect=e)),e}function Qi(){return Br().memoizedState}function Kn(e,r,o,n){var l=at();Xe.flags|=e,l.memoizedState=Jo(1|r,o,void 0,n===void 0?null:n)}function Gn(e,r,o,n){var l=Br();n=n===void 0?null:n;var a=void 0;if(lr!==null){var d=lr.memoizedState;if(a=d.destroy,n!==null&&ja(n,d.deps)){l.memoizedState=Jo(r,o,a,n);return}}Xe.flags|=e,l.memoizedState=Jo(1|r,o,a,n)}function Xi(e,r){return Kn(8390656,8,e,r)}function Ta(e,r){return Gn(2048,8,e,r)}function Ki(e,r){return Gn(4,2,e,r)}function Gi(e,r){return Gn(4,4,e,r)}function Ji(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Zi(e,r,o){return o=o!=null?o.concat([e]):null,Gn(4,4,Ji.bind(null,r,e),o)}function za(){}function ec(e,r){var o=Br();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&ja(r,n[1])?n[0]:(o.memoizedState=[e,r],e)}function rc(e,r){var o=Br();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&ja(r,n[1])?n[0]:(e=e(),o.memoizedState=[e,r],e)}function tc(e,r,o){return(Yt&21)===0?(e.baseState&&(e.baseState=!1,Er=!0),e.memoizedState=o):(Xr(o,r)||(o=Os(),Xe.lanes|=o,Vt|=o,e.baseState=!0),r)}function Vu(e,r){var o=Fe;Fe=o!==0&&4>o?o:4,e(!0);var n=wa.transition;wa.transition={};try{e(!1),r()}finally{Fe=o,wa.transition=n}}function oc(){return Br().memoizedState}function Qu(e,r,o){var n=Rt(e);if(o={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null},nc(e))lc(r,o);else if(o=_i(e,r,o,n),o!==null){var l=Nr();et(o,e,n,l),ac(o,r,n)}}function Xu(e,r,o){var n=Rt(e),l={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null};if(nc(e))lc(r,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,f=a(d,o);if(l.hasEagerState=!0,l.eagerState=f,Xr(f,d)){var x=r.interleaved;x===null?(l.next=l,xa(r)):(l.next=x.next,x.next=l),r.interleaved=l;return}}catch{}finally{}o=_i(e,r,l,n),o!==null&&(l=Nr(),et(o,e,n,l),ac(o,r,n))}}function nc(e){var r=e.alternate;return e===Xe||r!==null&&r===Xe}function lc(e,r){Xo=Xn=!0;var o=e.pending;o===null?r.next=r:(r.next=o.next,o.next=r),e.pending=r}function ac(e,r,o){if((o&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,Ol(e,o)}}var Jn={readContext:Ur,useCallback:gr,useContext:gr,useEffect:gr,useImperativeHandle:gr,useInsertionEffect:gr,useLayoutEffect:gr,useMemo:gr,useReducer:gr,useRef:gr,useState:gr,useDebugValue:gr,useDeferredValue:gr,useTransition:gr,useMutableSource:gr,useSyncExternalStore:gr,useId:gr,unstable_isNewReconciler:!1},Ku={readContext:Ur,useCallback:function(e,r){return at().memoizedState=[e,r===void 0?null:r],e},useContext:Ur,useEffect:Xi,useImperativeHandle:function(e,r,o){return o=o!=null?o.concat([e]):null,Kn(4194308,4,Ji.bind(null,r,e),o)},useLayoutEffect:function(e,r){return Kn(4194308,4,e,r)},useInsertionEffect:function(e,r){return Kn(4,2,e,r)},useMemo:function(e,r){var o=at();return r=r===void 0?null:r,e=e(),o.memoizedState=[e,r],e},useReducer:function(e,r,o){var n=at();return r=o!==void 0?o(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Qu.bind(null,Xe,e),[n.memoizedState,e]},useRef:function(e){var r=at();return e={current:e},r.memoizedState=e},useState:Vi,useDebugValue:za,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Vi(!1),r=e[0];return e=Vu.bind(null,e[1]),at().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,o){var n=Xe,l=at();if(qe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),cr===null)throw Error(i(349));(Yt&30)!==0||Bi(n,r,o)}l.memoizedState=o;var a={value:o,getSnapshot:r};return l.queue=a,Xi($i.bind(null,n,a,e),[e]),n.flags|=2048,Jo(9,Wi.bind(null,n,a,o,r),void 0,null),o},useId:function(){var e=at(),r=cr.identifierPrefix;if(qe){var o=ht,n=pt;o=(n&~(1<<32-Qr(n)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ko++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Yu++,r=":"+r+"r"+o.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Gu={readContext:Ur,useCallback:ec,useContext:Ur,useEffect:Ta,useImperativeHandle:Zi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:rc,useReducer:Pa,useRef:Qi,useState:function(){return Pa(Go)},useDebugValue:za,useDeferredValue:function(e){var r=Br();return tc(r,lr.memoizedState,e)},useTransition:function(){var e=Pa(Go)[0],r=Br().memoizedState;return[e,r]},useMutableSource:Hi,useSyncExternalStore:Ui,useId:oc,unstable_isNewReconciler:!1},Ju={readContext:Ur,useCallback:ec,useContext:Ur,useEffect:Ta,useImperativeHandle:Zi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:rc,useReducer:Ea,useRef:Qi,useState:function(){return Ea(Go)},useDebugValue:za,useDeferredValue:function(e){var r=Br();return lr===null?r.memoizedState=e:tc(r,lr.memoizedState,e)},useTransition:function(){var e=Ea(Go)[0],r=Br().memoizedState;return[e,r]},useMutableSource:Hi,useSyncExternalStore:Ui,useId:oc,unstable_isNewReconciler:!1};function Gr(e,r){if(e&&e.defaultProps){r=ee({},r),e=e.defaultProps;for(var o in e)r[o]===void 0&&(r[o]=e[o]);return r}return r}function Ma(e,r,o,n){r=e.memoizedState,o=o(n,r),o=o==null?r:ee({},r,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Zn={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,r,o){e=e._reactInternals;var n=Nr(),l=Rt(e),a=ft(n,l);a.payload=r,o!=null&&(a.callback=o),r=zt(e,a,l),r!==null&&(et(r,e,l,n),qn(r,e,l))},enqueueReplaceState:function(e,r,o){e=e._reactInternals;var n=Nr(),l=Rt(e),a=ft(n,l);a.tag=1,a.payload=r,o!=null&&(a.callback=o),r=zt(e,a,l),r!==null&&(et(r,e,l,n),qn(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var o=Nr(),n=Rt(e),l=ft(o,n);l.tag=2,r!=null&&(l.callback=r),r=zt(e,l,n),r!==null&&(et(r,e,n,o),qn(r,e,n))}};function sc(e,r,o,n,l,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,d):r.prototype&&r.prototype.isPureReactComponent?!Fo(o,n)||!Fo(l,a):!0}function ic(e,r,o){var n=!1,l=Pt,a=r.contextType;return typeof a=="object"&&a!==null?a=Ur(a):(l=Pr(r)?Ut:fr.current,n=r.contextTypes,a=(n=n!=null)?io(e,l):Pt),r=new r(o,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Zn,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),r}function cc(e,r,o,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,n),r.state!==e&&Zn.enqueueReplaceState(r,r.state,null)}function Oa(e,r,o,n){var l=e.stateNode;l.props=o,l.state=e.memoizedState,l.refs={},va(e);var a=r.contextType;typeof a=="object"&&a!==null?l.context=Ur(a):(a=Pr(r)?Ut:fr.current,l.context=io(e,a)),l.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Ma(e,r,a,o),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Zn.enqueueReplaceState(l,l.state,null),Yn(e,o,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xo(e,r){try{var o="",n=r;do o+=pe(n),n=n.return;while(n);var l=o}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:l,digest:null}}function Da(e,r,o){return{value:e,source:null,stack:o??null,digest:r??null}}function Ra(e,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Zu=typeof WeakMap=="function"?WeakMap:Map;function dc(e,r,o){o=ft(-1,o),o.tag=3,o.payload={element:null};var n=r.value;return o.callback=function(){al||(al=!0,Xa=n),Ra(e,r)},o}function uc(e,r,o){o=ft(-1,o),o.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=r.value;o.payload=function(){return n(l)},o.callback=function(){Ra(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(o.callback=function(){Ra(e,r),typeof n!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),o}function pc(e,r,o){var n=e.pingCache;if(n===null){n=e.pingCache=new Zu;var l=new Set;n.set(r,l)}else l=n.get(r),l===void 0&&(l=new Set,n.set(r,l));l.has(o)||(l.add(o),e=hp.bind(null,e,r,o),r.then(e,e))}function hc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function mc(e,r,o,n,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ft(-1,1),r.tag=2,zt(o,r,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var ep=$.ReactCurrentOwner,Er=!1;function kr(e,r,o,n){r.child=e===null?Ri(r,null,o,n):ho(r,e.child,o,n)}function fc(e,r,o,n,l){o=o.render;var a=r.ref;return fo(r,l),n=Ca(e,r,o,n,a,l),o=Sa(),e!==null&&!Er?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,gt(e,r,l)):(qe&&o&&ia(r),r.flags|=1,kr(e,r,n,l),r.child)}function gc(e,r,o,n,l){if(e===null){var a=o.type;return typeof a=="function"&&!ts(a)&&a.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=a,xc(e,r,a,n,l)):(e=pl(o.type,null,n,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&l)===0){var d=a.memoizedProps;if(o=o.compare,o=o!==null?o:Fo,o(d,n)&&e.ref===r.ref)return gt(e,r,l)}return r.flags|=1,e=At(a,n),e.ref=r.ref,e.return=r,r.child=e}function xc(e,r,o,n,l){if(e!==null){var a=e.memoizedProps;if(Fo(a,n)&&e.ref===r.ref)if(Er=!1,r.pendingProps=n=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Er=!0);else return r.lanes=e.lanes,gt(e,r,l)}return _a(e,r,o,n,l)}function vc(e,r,o){var n=r.pendingProps,l=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(yo,Ar),Ar|=o;else{if((o&1073741824)===0)return e=a!==null?a.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Be(yo,Ar),Ar|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:o,Be(yo,Ar),Ar|=n}else a!==null?(n=a.baseLanes|o,r.memoizedState=null):n=o,Be(yo,Ar),Ar|=n;return kr(e,r,l,o),r.child}function yc(e,r){var o=r.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function _a(e,r,o,n,l){var a=Pr(o)?Ut:fr.current;return a=io(r,a),fo(r,l),o=Ca(e,r,o,n,a,l),n=Sa(),e!==null&&!Er?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,gt(e,r,l)):(qe&&n&&ia(r),r.flags|=1,kr(e,r,o,l),r.child)}function bc(e,r,o,n,l){if(Pr(o)){var a=!0;In(r)}else a=!1;if(fo(r,l),r.stateNode===null)rl(e,r),ic(r,o,n),Oa(r,o,n,l),n=!0;else if(e===null){var d=r.stateNode,f=r.memoizedProps;d.props=f;var x=d.context,z=o.contextType;typeof z=="object"&&z!==null?z=Ur(z):(z=Pr(o)?Ut:fr.current,z=io(r,z));var V=o.getDerivedStateFromProps,X=typeof V=="function"||typeof d.getSnapshotBeforeUpdate=="function";X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==n||x!==z)&&cc(r,d,n,z),Tt=!1;var Y=r.memoizedState;d.state=Y,Yn(r,n,d,l),x=r.memoizedState,f!==n||Y!==x||Sr.current||Tt?(typeof V=="function"&&(Ma(r,o,V,n),x=r.memoizedState),(f=Tt||sc(r,o,f,n,Y,x,z))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=x),d.props=n,d.state=x,d.context=z,n=f):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{d=r.stateNode,Ai(e,r),f=r.memoizedProps,z=r.type===r.elementType?f:Gr(r.type,f),d.props=z,X=r.pendingProps,Y=d.context,x=o.contextType,typeof x=="object"&&x!==null?x=Ur(x):(x=Pr(o)?Ut:fr.current,x=io(r,x));var ne=o.getDerivedStateFromProps;(V=typeof ne=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==X||Y!==x)&&cc(r,d,n,x),Tt=!1,Y=r.memoizedState,d.state=Y,Yn(r,n,d,l);var ie=r.memoizedState;f!==X||Y!==ie||Sr.current||Tt?(typeof ne=="function"&&(Ma(r,o,ne,n),ie=r.memoizedState),(z=Tt||sc(r,o,z,n,Y,ie,x)||!1)?(V||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,ie,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,ie,x)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=ie),d.props=n,d.state=ie,d.context=x,n=z):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(r.flags|=1024),n=!1)}return Aa(e,r,o,n,a,l)}function Aa(e,r,o,n,l,a){yc(e,r);var d=(r.flags&128)!==0;if(!n&&!d)return l&&Ci(r,o,!1),gt(e,r,a);n=r.stateNode,ep.current=r;var f=d&&typeof o.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&d?(r.child=ho(r,e.child,null,a),r.child=ho(r,null,f,a)):kr(e,r,f,a),r.memoizedState=n.state,l&&Ci(r,o,!0),r.child}function kc(e){var r=e.stateNode;r.pendingContext?wi(e,r.pendingContext,r.pendingContext!==r.context):r.context&&wi(e,r.context,!1),ya(e,r.containerInfo)}function Nc(e,r,o,n,l){return po(),pa(l),r.flags|=256,kr(e,r,o,n),r.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function wc(e,r,o){var n=r.pendingProps,l=Qe.current,a=!1,d=(r.flags&128)!==0,f;if((f=d)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Be(Qe,l&1),e===null)return ua(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=n.children,e=n.fallback,a?(n=r.mode,a=r.child,d={mode:"hidden",children:d},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=hl(d,n,0,null),e=Gt(e,n,o,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=Fa(o),r.memoizedState=Ia,e):La(r,d));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return rp(e,r,d,n,f,l,o);if(a){a=n.fallback,d=r.mode,l=e.child,f=l.sibling;var x={mode:"hidden",children:n.children};return(d&1)===0&&r.child!==l?(n=r.child,n.childLanes=0,n.pendingProps=x,r.deletions=null):(n=At(l,x),n.subtreeFlags=l.subtreeFlags&14680064),f!==null?a=At(f,a):(a=Gt(a,d,o,null),a.flags|=2),a.return=r,n.return=r,n.sibling=a,r.child=n,n=a,a=r.child,d=e.child.memoizedState,d=d===null?Fa(o):{baseLanes:d.baseLanes|o,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~o,r.memoizedState=Ia,n}return a=e.child,e=a.sibling,n=At(a,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=o),n.return=r,n.sibling=null,e!==null&&(o=r.deletions,o===null?(r.deletions=[e],r.flags|=16):o.push(e)),r.child=n,r.memoizedState=null,n}function La(e,r){return r=hl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function el(e,r,o,n){return n!==null&&pa(n),ho(r,e.child,null,o),e=La(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function rp(e,r,o,n,l,a,d){if(o)return r.flags&256?(r.flags&=-257,n=Da(Error(i(422))),el(e,r,d,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=n.fallback,l=r.mode,n=hl({mode:"visible",children:n.children},l,0,null),a=Gt(a,l,d,null),a.flags|=2,n.return=r,a.return=r,n.sibling=a,r.child=n,(r.mode&1)!==0&&ho(r,e.child,null,d),r.child.memoizedState=Fa(d),r.memoizedState=Ia,a);if((r.mode&1)===0)return el(e,r,d,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var f=n.dgst;return n=f,a=Error(i(419)),n=Da(a,n,void 0),el(e,r,d,n)}if(f=(d&e.childLanes)!==0,Er||f){if(n=cr,n!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(n.suspendedLanes|d))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,mt(e,l),et(n,e,l,-1))}return rs(),n=Da(Error(i(421))),el(e,r,d,n)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=mp.bind(null,e),l._reactRetry=r,null):(e=a.treeContext,_r=Ct(l.nextSibling),Rr=r,qe=!0,Kr=null,e!==null&&(Lr[Hr++]=pt,Lr[Hr++]=ht,Lr[Hr++]=Bt,pt=e.id,ht=e.overflow,Bt=r),r=La(r,n.children),r.flags|=4096,r)}function jc(e,r,o){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),ga(e.return,r,o)}function Ha(e,r,o,n,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:o,tailMode:l}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=o,a.tailMode=l)}function Cc(e,r,o){var n=r.pendingProps,l=n.revealOrder,a=n.tail;if(kr(e,r,n.children,o),n=Qe.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,o,r);else if(e.tag===19)jc(e,o,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Be(Qe,n),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(o=r.child,l=null;o!==null;)e=o.alternate,e!==null&&Vn(e)===null&&(l=o),o=o.sibling;o=l,o===null?(l=r.child,r.child=null):(l=o.sibling,o.sibling=null),Ha(r,!1,l,o,a);break;case"backwards":for(o=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&Vn(e)===null){r.child=l;break}e=l.sibling,l.sibling=o,o=l,l=e}Ha(r,!0,o,null,a);break;case"together":Ha(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function rl(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function gt(e,r,o){if(e!==null&&(r.dependencies=e.dependencies),Vt|=r.lanes,(o&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(i(153));if(r.child!==null){for(e=r.child,o=At(e,e.pendingProps),r.child=o,o.return=r;e.sibling!==null;)e=e.sibling,o=o.sibling=At(e,e.pendingProps),o.return=r;o.sibling=null}return r.child}function tp(e,r,o){switch(r.tag){case 3:kc(r),po();break;case 5:Li(r);break;case 1:Pr(r.type)&&In(r);break;case 4:ya(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,l=r.memoizedProps.value;Be(Wn,n._currentValue),n._currentValue=l;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(Be(Qe,Qe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?wc(e,r,o):(Be(Qe,Qe.current&1),e=gt(e,r,o),e!==null?e.sibling:null);Be(Qe,Qe.current&1);break;case 19:if(n=(o&r.childLanes)!==0,(e.flags&128)!==0){if(n)return Cc(e,r,o);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Be(Qe,Qe.current),n)break;return null;case 22:case 23:return r.lanes=0,vc(e,r,o)}return gt(e,r,o)}var Sc,Ua,Pc,Ec;Sc=function(e,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ua=function(){},Pc=function(e,r,o,n){var l=e.memoizedProps;if(l!==n){e=r.stateNode,qt(lt.current);var a=null;switch(o){case"input":l=Ke(e,l),n=Ke(e,n),a=[];break;case"select":l=ee({},l,{value:void 0}),n=ee({},n,{value:void 0}),a=[];break;case"textarea":l=j(e,l),n=j(e,n),a=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Rn)}_e(o,n);var d;o=null;for(z in l)if(!n.hasOwnProperty(z)&&l.hasOwnProperty(z)&&l[z]!=null)if(z==="style"){var f=l[z];for(d in f)f.hasOwnProperty(d)&&(o||(o={}),o[d]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(m.hasOwnProperty(z)?a||(a=[]):(a=a||[]).push(z,null));for(z in n){var x=n[z];if(f=l?.[z],n.hasOwnProperty(z)&&x!==f&&(x!=null||f!=null))if(z==="style")if(f){for(d in f)!f.hasOwnProperty(d)||x&&x.hasOwnProperty(d)||(o||(o={}),o[d]="");for(d in x)x.hasOwnProperty(d)&&f[d]!==x[d]&&(o||(o={}),o[d]=x[d])}else o||(a||(a=[]),a.push(z,o)),o=x;else z==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,f=f?f.__html:void 0,x!=null&&f!==x&&(a=a||[]).push(z,x)):z==="children"?typeof x!="string"&&typeof x!="number"||(a=a||[]).push(z,""+x):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(m.hasOwnProperty(z)?(x!=null&&z==="onScroll"&&We("scroll",e),a||f===x||(a=[])):(a=a||[]).push(z,x))}o&&(a=a||[]).push("style",o);var z=a;(r.updateQueue=z)&&(r.flags|=4)}},Ec=function(e,r,o,n){o!==n&&(r.flags|=4)};function Zo(e,r){if(!qe)switch(e.tailMode){case"hidden":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var n=null;o!==null;)o.alternate!==null&&(n=o),o=o.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function xr(e){var r=e.alternate!==null&&e.alternate.child===e.child,o=0,n=0;if(r)for(var l=e.child;l!==null;)o|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)o|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=o,r}function op(e,r,o){var n=r.pendingProps;switch(ca(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xr(r),null;case 1:return Pr(r.type)&&An(),xr(r),null;case 3:return n=r.stateNode,go(),$e(Sr),$e(fr),Na(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Un(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Kr!==null&&(Ja(Kr),Kr=null))),Ua(e,r),xr(r),null;case 5:ba(r);var l=qt(Qo.current);if(o=r.type,e!==null&&r.stateNode!=null)Pc(e,r,o,n,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(i(166));return xr(r),null}if(e=qt(lt.current),Un(r)){n=r.stateNode,o=r.type;var a=r.memoizedProps;switch(n[nt]=r,n[Wo]=a,e=(r.mode&1)!==0,o){case"dialog":We("cancel",n),We("close",n);break;case"iframe":case"object":case"embed":We("load",n);break;case"video":case"audio":for(l=0;l<Ho.length;l++)We(Ho[l],n);break;case"source":We("error",n);break;case"img":case"image":case"link":We("error",n),We("load",n);break;case"details":We("toggle",n);break;case"input":wr(n,a),We("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},We("invalid",n);break;case"textarea":R(n,a),We("invalid",n)}_e(o,a),l=null;for(var d in a)if(a.hasOwnProperty(d)){var f=a[d];d==="children"?typeof f=="string"?n.textContent!==f&&(a.suppressHydrationWarning!==!0&&Dn(n.textContent,f,e),l=["children",f]):typeof f=="number"&&n.textContent!==""+f&&(a.suppressHydrationWarning!==!0&&Dn(n.textContent,f,e),l=["children",""+f]):m.hasOwnProperty(d)&&f!=null&&d==="onScroll"&&We("scroll",n)}switch(o){case"input":rr(n),Ue(n,a,!0);break;case"textarea":rr(n),oe(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Rn)}n=l,r.updateQueue=n,n!==null&&(r.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oe(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(o,{is:n.is}):(e=d.createElement(o),o==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,o),e[nt]=r,e[Wo]=n,Sc(e,r,!1,!1),r.stateNode=e;e:{switch(d=He(o,n),o){case"dialog":We("cancel",e),We("close",e),l=n;break;case"iframe":case"object":case"embed":We("load",e),l=n;break;case"video":case"audio":for(l=0;l<Ho.length;l++)We(Ho[l],e);l=n;break;case"source":We("error",e),l=n;break;case"img":case"image":case"link":We("error",e),We("load",e),l=n;break;case"details":We("toggle",e),l=n;break;case"input":wr(e,n),l=Ke(e,n),We("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=ee({},n,{value:void 0}),We("invalid",e);break;case"textarea":R(e,n),l=j(e,n),We("invalid",e);break;default:l=n}_e(o,l),f=l;for(a in f)if(f.hasOwnProperty(a)){var x=f[a];a==="style"?I(e,x):a==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&ur(e,x)):a==="children"?typeof x=="string"?(o!=="textarea"||x!=="")&&D(e,x):typeof x=="number"&&D(e,""+x):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?x!=null&&a==="onScroll"&&We("scroll",e):x!=null&&A(e,a,x,d))}switch(o){case"input":rr(e),Ue(e,n,!1);break;case"textarea":rr(e),oe(e);break;case"option":n.value!=null&&e.setAttribute("value",""+we(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Ee(e,!!n.multiple,a,!1):n.defaultValue!=null&&Ee(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rn)}switch(o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xr(r),null;case 6:if(e&&r.stateNode!=null)Ec(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(i(166));if(o=qt(Qo.current),qt(lt.current),Un(r)){if(n=r.stateNode,o=r.memoizedProps,n[nt]=r,(a=n.nodeValue!==o)&&(e=Rr,e!==null))switch(e.tag){case 3:Dn(n.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dn(n.nodeValue,o,(e.mode&1)!==0)}a&&(r.flags|=4)}else n=(o.nodeType===9?o:o.ownerDocument).createTextNode(n),n[nt]=r,r.stateNode=n}return xr(r),null;case 13:if($e(Qe),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&_r!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mi(),po(),r.flags|=98560,a=!1;else if(a=Un(r),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[nt]=r}else po(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;xr(r),a=!1}else Kr!==null&&(Ja(Kr),Kr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Qe.current&1)!==0?ar===0&&(ar=3):rs())),r.updateQueue!==null&&(r.flags|=4),xr(r),null);case 4:return go(),Ua(e,r),e===null&&Uo(r.stateNode.containerInfo),xr(r),null;case 10:return fa(r.type._context),xr(r),null;case 17:return Pr(r.type)&&An(),xr(r),null;case 19:if($e(Qe),a=r.memoizedState,a===null)return xr(r),null;if(n=(r.flags&128)!==0,d=a.rendering,d===null)if(n)Zo(a,!1);else{if(ar!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Vn(e),d!==null){for(r.flags|=128,Zo(a,!1),n=d.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=o,o=r.child;o!==null;)a=o,e=n,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Be(Qe,Qe.current&1|2),r.child}e=e.sibling}a.tail!==null&&Ze()>bo&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304)}else{if(!n)if(e=Vn(d),e!==null){if(r.flags|=128,n=!0,o=e.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Zo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!qe)return xr(r),null}else 2*Ze()-a.renderingStartTime>bo&&o!==1073741824&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(o=a.last,o!==null?o.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Ze(),r.sibling=null,o=Qe.current,Be(Qe,n?o&1|2:o&1),r):(xr(r),null);case 22:case 23:return es(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(Ar&1073741824)!==0&&(xr(r),r.subtreeFlags&6&&(r.flags|=8192)):xr(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function np(e,r){switch(ca(r),r.tag){case 1:return Pr(r.type)&&An(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return go(),$e(Sr),$e(fr),Na(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return ba(r),null;case 13:if($e(Qe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(i(340));po()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return $e(Qe),null;case 4:return go(),null;case 10:return fa(r.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var tl=!1,vr=!1,lp=typeof WeakSet=="function"?WeakSet:Set,se=null;function vo(e,r){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(n){Je(e,r,n)}else o.current=null}function Ba(e,r,o){try{o()}catch(n){Je(e,r,n)}}var Tc=!1;function ap(e,r){if(ea=Nn,e=si(),Yl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var l=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{o.nodeType,a.nodeType}catch{o=null;break e}var d=0,f=-1,x=-1,z=0,V=0,X=e,Y=null;r:for(;;){for(var ne;X!==o||l!==0&&X.nodeType!==3||(f=d+l),X!==a||n!==0&&X.nodeType!==3||(x=d+n),X.nodeType===3&&(d+=X.nodeValue.length),(ne=X.firstChild)!==null;)Y=X,X=ne;for(;;){if(X===e)break r;if(Y===o&&++z===l&&(f=d),Y===a&&++V===n&&(x=d),(ne=X.nextSibling)!==null)break;X=Y,Y=X.parentNode}X=ne}o=f===-1||x===-1?null:{start:f,end:x}}else o=null}o=o||{start:0,end:0}}else o=null;for(ra={focusedElem:e,selectionRange:o},Nn=!1,se=r;se!==null;)if(r=se,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,se=e;else for(;se!==null;){r=se;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var ue=ie.memoizedProps,er=ie.memoizedState,C=r.stateNode,k=C.getSnapshotBeforeUpdate(r.elementType===r.type?ue:Gr(r.type,ue),er);C.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var E=r.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(Z){Je(r,r.return,Z)}if(e=r.sibling,e!==null){e.return=r.return,se=e;break}se=r.return}return ie=Tc,Tc=!1,ie}function en(e,r,o){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Ba(r,o,a)}l=l.next}while(l!==n)}}function ol(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var n=o.create;o.destroy=n()}o=o.next}while(o!==r)}}function Wa(e){var r=e.ref;if(r!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof r=="function"?r(e):r.current=e}}function zc(e){var r=e.alternate;r!==null&&(e.alternate=null,zc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[nt],delete r[Wo],delete r[la],delete r[Bu],delete r[Wu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(e,r):o.insertBefore(e,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(e,o)):(r=o,r.appendChild(e)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Rn));else if(n!==4&&(e=e.child,e!==null))for($a(e,r,o),e=e.sibling;e!==null;)$a(e,r,o),e=e.sibling}function qa(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.insertBefore(e,r):o.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(qa(e,r,o),e=e.sibling;e!==null;)qa(e,r,o),e=e.sibling}var pr=null,Jr=!1;function Mt(e,r,o){for(o=o.child;o!==null;)Dc(e,r,o),o=o.sibling}function Dc(e,r,o){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(gn,o)}catch{}switch(o.tag){case 5:vr||vo(o,r);case 6:var n=pr,l=Jr;pr=null,Mt(e,r,o),pr=n,Jr=l,pr!==null&&(Jr?(e=pr,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):pr.removeChild(o.stateNode));break;case 18:pr!==null&&(Jr?(e=pr,o=o.stateNode,e.nodeType===8?na(e.parentNode,o):e.nodeType===1&&na(e,o),Oo(e)):na(pr,o.stateNode));break;case 4:n=pr,l=Jr,pr=o.stateNode.containerInfo,Jr=!0,Mt(e,r,o),pr=n,Jr=l;break;case 0:case 11:case 14:case 15:if(!vr&&(n=o.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var a=l,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&Ba(o,r,d),l=l.next}while(l!==n)}Mt(e,r,o);break;case 1:if(!vr&&(vo(o,r),n=o.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=o.memoizedProps,n.state=o.memoizedState,n.componentWillUnmount()}catch(f){Je(o,r,f)}Mt(e,r,o);break;case 21:Mt(e,r,o);break;case 22:o.mode&1?(vr=(n=vr)||o.memoizedState!==null,Mt(e,r,o),vr=n):Mt(e,r,o);break;default:Mt(e,r,o)}}function Rc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new lp),r.forEach(function(n){var l=fp.bind(null,e,n);o.has(n)||(o.add(n),n.then(l,l))})}}function Zr(e,r){var o=r.deletions;if(o!==null)for(var n=0;n<o.length;n++){var l=o[n];try{var a=e,d=r,f=d;e:for(;f!==null;){switch(f.tag){case 5:pr=f.stateNode,Jr=!1;break e;case 3:pr=f.stateNode.containerInfo,Jr=!0;break e;case 4:pr=f.stateNode.containerInfo,Jr=!0;break e}f=f.return}if(pr===null)throw Error(i(160));Dc(a,d,l),pr=null,Jr=!1;var x=l.alternate;x!==null&&(x.return=null),l.return=null}catch(z){Je(l,r,z)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)_c(r,e),r=r.sibling}function _c(e,r){var o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zr(r,e),st(e),n&4){try{en(3,e,e.return),ol(3,e)}catch(ue){Je(e,e.return,ue)}try{en(5,e,e.return)}catch(ue){Je(e,e.return,ue)}}break;case 1:Zr(r,e),st(e),n&512&&o!==null&&vo(o,o.return);break;case 5:if(Zr(r,e),st(e),n&512&&o!==null&&vo(o,o.return),e.flags&32){var l=e.stateNode;try{D(l,"")}catch(ue){Je(e,e.return,ue)}}if(n&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,d=o!==null?o.memoizedProps:a,f=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{f==="input"&&a.type==="radio"&&a.name!=null&&jr(l,a),He(f,d);var z=He(f,a);for(d=0;d<x.length;d+=2){var V=x[d],X=x[d+1];V==="style"?I(l,X):V==="dangerouslySetInnerHTML"?ur(l,X):V==="children"?D(l,X):A(l,V,X,z)}switch(f){case"input":Ge(l,a);break;case"textarea":ce(l,a);break;case"select":var Y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var ne=a.value;ne!=null?Ee(l,!!a.multiple,ne,!1):Y!==!!a.multiple&&(a.defaultValue!=null?Ee(l,!!a.multiple,a.defaultValue,!0):Ee(l,!!a.multiple,a.multiple?[]:"",!1))}l[Wo]=a}catch(ue){Je(e,e.return,ue)}}break;case 6:if(Zr(r,e),st(e),n&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(ue){Je(e,e.return,ue)}}break;case 3:if(Zr(r,e),st(e),n&4&&o!==null&&o.memoizedState.isDehydrated)try{Oo(r.containerInfo)}catch(ue){Je(e,e.return,ue)}break;case 4:Zr(r,e),st(e);break;case 13:Zr(r,e),st(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Qa=Ze())),n&4&&Rc(e);break;case 22:if(V=o!==null&&o.memoizedState!==null,e.mode&1?(vr=(z=vr)||V,Zr(r,e),vr=z):Zr(r,e),st(e),n&8192){if(z=e.memoizedState!==null,(e.stateNode.isHidden=z)&&!V&&(e.mode&1)!==0)for(se=e,V=e.child;V!==null;){for(X=se=V;se!==null;){switch(Y=se,ne=Y.child,Y.tag){case 0:case 11:case 14:case 15:en(4,Y,Y.return);break;case 1:vo(Y,Y.return);var ie=Y.stateNode;if(typeof ie.componentWillUnmount=="function"){n=Y,o=Y.return;try{r=n,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(ue){Je(n,o,ue)}}break;case 5:vo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Fc(X);continue}}ne!==null?(ne.return=Y,se=ne):Fc(X)}V=V.sibling}e:for(V=null,X=e;;){if(X.tag===5){if(V===null){V=X;try{l=X.stateNode,z?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(f=X.stateNode,x=X.memoizedProps.style,d=x!=null&&x.hasOwnProperty("display")?x.display:null,f.style.display=Me("display",d))}catch(ue){Je(e,e.return,ue)}}}else if(X.tag===6){if(V===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(ue){Je(e,e.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===e)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===e)break e;for(;X.sibling===null;){if(X.return===null||X.return===e)break e;V===X&&(V=null),X=X.return}V===X&&(V=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Zr(r,e),st(e),n&4&&Rc(e);break;case 21:break;default:Zr(r,e),st(e)}}function st(e){var r=e.flags;if(r&2){try{e:{for(var o=e.return;o!==null;){if(Mc(o)){var n=o;break e}o=o.return}throw Error(i(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(D(l,""),n.flags&=-33);var a=Oc(e);qa(e,a,l);break;case 3:case 4:var d=n.stateNode.containerInfo,f=Oc(e);$a(e,f,d);break;default:throw Error(i(161))}}catch(x){Je(e,e.return,x)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function sp(e,r,o){se=e,Ac(e)}function Ac(e,r,o){for(var n=(e.mode&1)!==0;se!==null;){var l=se,a=l.child;if(l.tag===22&&n){var d=l.memoizedState!==null||tl;if(!d){var f=l.alternate,x=f!==null&&f.memoizedState!==null||vr;f=tl;var z=vr;if(tl=d,(vr=x)&&!z)for(se=l;se!==null;)d=se,x=d.child,d.tag===22&&d.memoizedState!==null?Lc(l):x!==null?(x.return=d,se=x):Lc(l);for(;a!==null;)se=a,Ac(a),a=a.sibling;se=l,tl=f,vr=z}Ic(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,se=a):Ic(e)}}function Ic(e){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:vr||ol(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!vr)if(o===null)n.componentDidMount();else{var l=r.elementType===r.type?o.memoizedProps:Gr(r.type,o.memoizedProps);n.componentDidUpdate(l,o.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Fi(r,a,n);break;case 3:var d=r.updateQueue;if(d!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Fi(r,d,o)}break;case 5:var f=r.stateNode;if(o===null&&r.flags&4){o=f;var x=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&o.focus();break;case"img":x.src&&(o.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var z=r.alternate;if(z!==null){var V=z.memoizedState;if(V!==null){var X=V.dehydrated;X!==null&&Oo(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}vr||r.flags&512&&Wa(r)}catch(Y){Je(r,r.return,Y)}}if(r===e){se=null;break}if(o=r.sibling,o!==null){o.return=r.return,se=o;break}se=r.return}}function Fc(e){for(;se!==null;){var r=se;if(r===e){se=null;break}var o=r.sibling;if(o!==null){o.return=r.return,se=o;break}se=r.return}}function Lc(e){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ol(4,r)}catch(x){Je(r,o,x)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var l=r.return;try{n.componentDidMount()}catch(x){Je(r,l,x)}}var a=r.return;try{Wa(r)}catch(x){Je(r,a,x)}break;case 5:var d=r.return;try{Wa(r)}catch(x){Je(r,d,x)}}}catch(x){Je(r,r.return,x)}if(r===e){se=null;break}var f=r.sibling;if(f!==null){f.return=r.return,se=f;break}se=r.return}}var ip=Math.ceil,nl=$.ReactCurrentDispatcher,Ya=$.ReactCurrentOwner,Wr=$.ReactCurrentBatchConfig,De=0,cr=null,or=null,hr=0,Ar=0,yo=St(0),ar=0,rn=null,Vt=0,ll=0,Va=0,tn=null,Tr=null,Qa=0,bo=1/0,xt=null,al=!1,Xa=null,Ot=null,sl=!1,Dt=null,il=0,on=0,Ka=null,cl=-1,dl=0;function Nr(){return(De&6)!==0?Ze():cl!==-1?cl:cl=Ze()}function Rt(e){return(e.mode&1)===0?1:(De&2)!==0&&hr!==0?hr&-hr:qu.transition!==null?(dl===0&&(dl=Os()),dl):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e)}function et(e,r,o,n){if(50<on)throw on=0,Ka=null,Error(i(185));Po(e,o,n),((De&2)===0||e!==cr)&&(e===cr&&((De&2)===0&&(ll|=o),ar===4&&_t(e,hr)),zr(e,n),o===1&&De===0&&(r.mode&1)===0&&(bo=Ze()+500,Fn&&Et()))}function zr(e,r){var o=e.callbackNode;qd(e,r);var n=yn(e,e===cr?hr:0);if(n===0)o!==null&&Ts(o),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(o!=null&&Ts(o),r===1)e.tag===0?$u(Uc.bind(null,e)):Si(Uc.bind(null,e)),Hu(function(){(De&6)===0&&Et()}),o=null;else{switch(Ds(n)){case 1:o=Tl;break;case 4:o=zs;break;case 16:o=fn;break;case 536870912:o=Ms;break;default:o=fn}o=Xc(o,Hc.bind(null,e))}e.callbackPriority=r,e.callbackNode=o}}function Hc(e,r){if(cl=-1,dl=0,(De&6)!==0)throw Error(i(327));var o=e.callbackNode;if(ko()&&e.callbackNode!==o)return null;var n=yn(e,e===cr?hr:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=ul(e,n);else{r=n;var l=De;De|=2;var a=Wc();(cr!==e||hr!==r)&&(xt=null,bo=Ze()+500,Xt(e,r));do try{up();break}catch(f){Bc(e,f)}while(!0);ma(),nl.current=a,De=l,or!==null?r=0:(cr=null,hr=0,r=ar)}if(r!==0){if(r===2&&(l=zl(e),l!==0&&(n=l,r=Ga(e,l))),r===1)throw o=rn,Xt(e,0),_t(e,n),zr(e,Ze()),o;if(r===6)_t(e,n);else{if(l=e.current.alternate,(n&30)===0&&!cp(l)&&(r=ul(e,n),r===2&&(a=zl(e),a!==0&&(n=a,r=Ga(e,a))),r===1))throw o=rn,Xt(e,0),_t(e,n),zr(e,Ze()),o;switch(e.finishedWork=l,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Kt(e,Tr,xt);break;case 3:if(_t(e,n),(n&130023424)===n&&(r=Qa+500-Ze(),10<r)){if(yn(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){Nr(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=oa(Kt.bind(null,e,Tr,xt),r);break}Kt(e,Tr,xt);break;case 4:if(_t(e,n),(n&4194240)===n)break;for(r=e.eventTimes,l=-1;0<n;){var d=31-Qr(n);a=1<<d,d=r[d],d>l&&(l=d),n&=~a}if(n=l,n=Ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ip(n/1960))-n,10<n){e.timeoutHandle=oa(Kt.bind(null,e,Tr,xt),n);break}Kt(e,Tr,xt);break;case 5:Kt(e,Tr,xt);break;default:throw Error(i(329))}}}return zr(e,Ze()),e.callbackNode===o?Hc.bind(null,e):null}function Ga(e,r){var o=tn;return e.current.memoizedState.isDehydrated&&(Xt(e,r).flags|=256),e=ul(e,r),e!==2&&(r=Tr,Tr=o,r!==null&&Ja(r)),e}function Ja(e){Tr===null?Tr=e:Tr.push.apply(Tr,e)}function cp(e){for(var r=e;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var n=0;n<o.length;n++){var l=o[n],a=l.getSnapshot;l=l.value;try{if(!Xr(a(),l))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _t(e,r){for(r&=~Va,r&=~ll,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var o=31-Qr(r),n=1<<o;e[o]=-1,r&=~n}}function Uc(e){if((De&6)!==0)throw Error(i(327));ko();var r=yn(e,0);if((r&1)===0)return zr(e,Ze()),null;var o=ul(e,r);if(e.tag!==0&&o===2){var n=zl(e);n!==0&&(r=n,o=Ga(e,n))}if(o===1)throw o=rn,Xt(e,0),_t(e,r),zr(e,Ze()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Kt(e,Tr,xt),zr(e,Ze()),null}function Za(e,r){var o=De;De|=1;try{return e(r)}finally{De=o,De===0&&(bo=Ze()+500,Fn&&Et())}}function Qt(e){Dt!==null&&Dt.tag===0&&(De&6)===0&&ko();var r=De;De|=1;var o=Wr.transition,n=Fe;try{if(Wr.transition=null,Fe=1,e)return e()}finally{Fe=n,Wr.transition=o,De=r,(De&6)===0&&Et()}}function es(){Ar=yo.current,$e(yo)}function Xt(e,r){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Lu(o)),or!==null)for(o=or.return;o!==null;){var n=o;switch(ca(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&An();break;case 3:go(),$e(Sr),$e(fr),Na();break;case 5:ba(n);break;case 4:go();break;case 13:$e(Qe);break;case 19:$e(Qe);break;case 10:fa(n.type._context);break;case 22:case 23:es()}o=o.return}if(cr=e,or=e=At(e.current,null),hr=Ar=r,ar=0,rn=null,Va=ll=Vt=0,Tr=tn=null,$t!==null){for(r=0;r<$t.length;r++)if(o=$t[r],n=o.interleaved,n!==null){o.interleaved=null;var l=n.next,a=o.pending;if(a!==null){var d=a.next;a.next=l,n.next=d}o.pending=n}$t=null}return e}function Bc(e,r){do{var o=or;try{if(ma(),Qn.current=Jn,Xn){for(var n=Xe.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Xn=!1}if(Yt=0,ir=lr=Xe=null,Xo=!1,Ko=0,Ya.current=null,o===null||o.return===null){ar=1,rn=r,or=null;break}e:{var a=e,d=o.return,f=o,x=r;if(r=hr,f.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var z=x,V=f,X=V.tag;if((V.mode&1)===0&&(X===0||X===11||X===15)){var Y=V.alternate;Y?(V.updateQueue=Y.updateQueue,V.memoizedState=Y.memoizedState,V.lanes=Y.lanes):(V.updateQueue=null,V.memoizedState=null)}var ne=hc(d);if(ne!==null){ne.flags&=-257,mc(ne,d,f,a,r),ne.mode&1&&pc(a,z,r),r=ne,x=z;var ie=r.updateQueue;if(ie===null){var ue=new Set;ue.add(x),r.updateQueue=ue}else ie.add(x);break e}else{if((r&1)===0){pc(a,z,r),rs();break e}x=Error(i(426))}}else if(qe&&f.mode&1){var er=hc(d);if(er!==null){(er.flags&65536)===0&&(er.flags|=256),mc(er,d,f,a,r),pa(xo(x,f));break e}}a=x=xo(x,f),ar!==4&&(ar=2),tn===null?tn=[a]:tn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var C=dc(a,x,r);Ii(a,C);break e;case 1:f=x;var k=a.type,E=a.stateNode;if((a.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ot===null||!Ot.has(E)))){a.flags|=65536,r&=-r,a.lanes|=r;var Z=uc(a,f,r);Ii(a,Z);break e}}a=a.return}while(a!==null)}qc(o)}catch(me){r=me,or===o&&o!==null&&(or=o=o.return);continue}break}while(!0)}function Wc(){var e=nl.current;return nl.current=Jn,e===null?Jn:e}function rs(){(ar===0||ar===3||ar===2)&&(ar=4),cr===null||(Vt&268435455)===0&&(ll&268435455)===0||_t(cr,hr)}function ul(e,r){var o=De;De|=2;var n=Wc();(cr!==e||hr!==r)&&(xt=null,Xt(e,r));do try{dp();break}catch(l){Bc(e,l)}while(!0);if(ma(),De=o,nl.current=n,or!==null)throw Error(i(261));return cr=null,hr=0,ar}function dp(){for(;or!==null;)$c(or)}function up(){for(;or!==null&&!Ad();)$c(or)}function $c(e){var r=Qc(e.alternate,e,Ar);e.memoizedProps=e.pendingProps,r===null?qc(e):or=r,Ya.current=null}function qc(e){var r=e;do{var o=r.alternate;if(e=r.return,(r.flags&32768)===0){if(o=op(o,r,Ar),o!==null){or=o;return}}else{if(o=np(o,r),o!==null){o.flags&=32767,or=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ar=6,or=null;return}}if(r=r.sibling,r!==null){or=r;return}or=r=e}while(r!==null);ar===0&&(ar=5)}function Kt(e,r,o){var n=Fe,l=Wr.transition;try{Wr.transition=null,Fe=1,pp(e,r,o,n)}finally{Wr.transition=l,Fe=n}return null}function pp(e,r,o,n){do ko();while(Dt!==null);if((De&6)!==0)throw Error(i(327));o=e.finishedWork;var l=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=o.lanes|o.childLanes;if(Yd(e,a),e===cr&&(or=cr=null,hr=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||sl||(sl=!0,Xc(fn,function(){return ko(),null})),a=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||a){a=Wr.transition,Wr.transition=null;var d=Fe;Fe=1;var f=De;De|=4,Ya.current=null,ap(e,o),_c(o,e),Ou(ra),Nn=!!ea,ra=ea=null,e.current=o,sp(o),Id(),De=f,Fe=d,Wr.transition=a}else e.current=o;if(sl&&(sl=!1,Dt=e,il=l),a=e.pendingLanes,a===0&&(Ot=null),Hd(o.stateNode),zr(e,Ze()),r!==null)for(n=e.onRecoverableError,o=0;o<r.length;o++)l=r[o],n(l.value,{componentStack:l.stack,digest:l.digest});if(al)throw al=!1,e=Xa,Xa=null,e;return(il&1)!==0&&e.tag!==0&&ko(),a=e.pendingLanes,(a&1)!==0?e===Ka?on++:(on=0,Ka=e):on=0,Et(),null}function ko(){if(Dt!==null){var e=Ds(il),r=Wr.transition,o=Fe;try{if(Wr.transition=null,Fe=16>e?16:e,Dt===null)var n=!1;else{if(e=Dt,Dt=null,il=0,(De&6)!==0)throw Error(i(331));var l=De;for(De|=4,se=e.current;se!==null;){var a=se,d=a.child;if((se.flags&16)!==0){var f=a.deletions;if(f!==null){for(var x=0;x<f.length;x++){var z=f[x];for(se=z;se!==null;){var V=se;switch(V.tag){case 0:case 11:case 15:en(8,V,a)}var X=V.child;if(X!==null)X.return=V,se=X;else for(;se!==null;){V=se;var Y=V.sibling,ne=V.return;if(zc(V),V===z){se=null;break}if(Y!==null){Y.return=ne,se=Y;break}se=ne}}}var ie=a.alternate;if(ie!==null){var ue=ie.child;if(ue!==null){ie.child=null;do{var er=ue.sibling;ue.sibling=null,ue=er}while(ue!==null)}}se=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,se=d;else e:for(;se!==null;){if(a=se,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:en(9,a,a.return)}var C=a.sibling;if(C!==null){C.return=a.return,se=C;break e}se=a.return}}var k=e.current;for(se=k;se!==null;){d=se;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,se=E;else e:for(d=k;se!==null;){if(f=se,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ol(9,f)}}catch(me){Je(f,f.return,me)}if(f===d){se=null;break e}var Z=f.sibling;if(Z!==null){Z.return=f.return,se=Z;break e}se=f.return}}if(De=l,Et(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(gn,e)}catch{}n=!0}return n}finally{Fe=o,Wr.transition=r}}return!1}function Yc(e,r,o){r=xo(o,r),r=dc(e,r,1),e=zt(e,r,1),r=Nr(),e!==null&&(Po(e,1,r),zr(e,r))}function Je(e,r,o){if(e.tag===3)Yc(e,e,o);else for(;r!==null;){if(r.tag===3){Yc(r,e,o);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))){e=xo(o,e),e=uc(r,e,1),r=zt(r,e,1),e=Nr(),r!==null&&(Po(r,1,e),zr(r,e));break}}r=r.return}}function hp(e,r,o){var n=e.pingCache;n!==null&&n.delete(r),r=Nr(),e.pingedLanes|=e.suspendedLanes&o,cr===e&&(hr&o)===o&&(ar===4||ar===3&&(hr&130023424)===hr&&500>Ze()-Qa?Xt(e,0):Va|=o),zr(e,r)}function Vc(e,r){r===0&&((e.mode&1)===0?r=1:(r=vn,vn<<=1,(vn&130023424)===0&&(vn=4194304)));var o=Nr();e=mt(e,r),e!==null&&(Po(e,r,o),zr(e,o))}function mp(e){var r=e.memoizedState,o=0;r!==null&&(o=r.retryLane),Vc(e,o)}function fp(e,r){var o=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(o=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(i(314))}n!==null&&n.delete(r),Vc(e,o)}var Qc;Qc=function(e,r,o){if(e!==null)if(e.memoizedProps!==r.pendingProps||Sr.current)Er=!0;else{if((e.lanes&o)===0&&(r.flags&128)===0)return Er=!1,tp(e,r,o);Er=(e.flags&131072)!==0}else Er=!1,qe&&(r.flags&1048576)!==0&&Pi(r,Hn,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;rl(e,r),e=r.pendingProps;var l=io(r,fr.current);fo(r,o),l=Ca(null,r,n,e,l,o);var a=Sa();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Pr(n)?(a=!0,In(r)):a=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,va(r),l.updater=Zn,r.stateNode=l,l._reactInternals=r,Oa(r,n,e,o),r=Aa(null,r,n,!0,a,o)):(r.tag=0,qe&&a&&ia(r),kr(null,r,l,o),r=r.child),r;case 16:n=r.elementType;e:{switch(rl(e,r),e=r.pendingProps,l=n._init,n=l(n._payload),r.type=n,l=r.tag=xp(n),e=Gr(n,e),l){case 0:r=_a(null,r,n,e,o);break e;case 1:r=bc(null,r,n,e,o);break e;case 11:r=fc(null,r,n,e,o);break e;case 14:r=gc(null,r,n,Gr(n.type,e),o);break e}throw Error(i(306,n,""))}return r;case 0:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),_a(e,r,n,l,o);case 1:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),bc(e,r,n,l,o);case 3:e:{if(kc(r),e===null)throw Error(i(387));n=r.pendingProps,a=r.memoizedState,l=a.element,Ai(e,r),Yn(r,n,null,o);var d=r.memoizedState;if(n=d.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){l=xo(Error(i(423)),r),r=Nc(e,r,n,o,l);break e}else if(n!==l){l=xo(Error(i(424)),r),r=Nc(e,r,n,o,l);break e}else for(_r=Ct(r.stateNode.containerInfo.firstChild),Rr=r,qe=!0,Kr=null,o=Ri(r,null,n,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(po(),n===l){r=gt(e,r,o);break e}kr(e,r,n,o)}r=r.child}return r;case 5:return Li(r),e===null&&ua(r),n=r.type,l=r.pendingProps,a=e!==null?e.memoizedProps:null,d=l.children,ta(n,l)?d=null:a!==null&&ta(n,a)&&(r.flags|=32),yc(e,r),kr(e,r,d,o),r.child;case 6:return e===null&&ua(r),null;case 13:return wc(e,r,o);case 4:return ya(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=ho(r,null,n,o):kr(e,r,n,o),r.child;case 11:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),fc(e,r,n,l,o);case 7:return kr(e,r,r.pendingProps,o),r.child;case 8:return kr(e,r,r.pendingProps.children,o),r.child;case 12:return kr(e,r,r.pendingProps.children,o),r.child;case 10:e:{if(n=r.type._context,l=r.pendingProps,a=r.memoizedProps,d=l.value,Be(Wn,n._currentValue),n._currentValue=d,a!==null)if(Xr(a.value,d)){if(a.children===l.children&&!Sr.current){r=gt(e,r,o);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var f=a.dependencies;if(f!==null){d=a.child;for(var x=f.firstContext;x!==null;){if(x.context===n){if(a.tag===1){x=ft(-1,o&-o),x.tag=2;var z=a.updateQueue;if(z!==null){z=z.shared;var V=z.pending;V===null?x.next=x:(x.next=V.next,V.next=x),z.pending=x}}a.lanes|=o,x=a.alternate,x!==null&&(x.lanes|=o),ga(a.return,o,r),f.lanes|=o;break}x=x.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(i(341));d.lanes|=o,f=d.alternate,f!==null&&(f.lanes|=o),ga(d,o,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}kr(e,r,l.children,o),r=r.child}return r;case 9:return l=r.type,n=r.pendingProps.children,fo(r,o),l=Ur(l),n=n(l),r.flags|=1,kr(e,r,n,o),r.child;case 14:return n=r.type,l=Gr(n,r.pendingProps),l=Gr(n.type,l),gc(e,r,n,l,o);case 15:return xc(e,r,r.type,r.pendingProps,o);case 17:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),rl(e,r),r.tag=1,Pr(n)?(e=!0,In(r)):e=!1,fo(r,o),ic(r,n,l),Oa(r,n,l,o),Aa(null,r,n,!0,e,o);case 19:return Cc(e,r,o);case 22:return vc(e,r,o)}throw Error(i(156,r.tag))};function Xc(e,r){return Es(e,r)}function gp(e,r,o,n){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $r(e,r,o,n){return new gp(e,r,o,n)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ce)return 11;if(e===ke)return 14}return 2}function At(e,r){var o=e.alternate;return o===null?(o=$r(e.tag,r,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=r,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,r=e.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function pl(e,r,o,n,l,a){var d=2;if(n=e,typeof e=="function")ts(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case K:return Gt(o.children,l,a,r);case B:d=8,l|=8;break;case L:return e=$r(12,o,r,l|2),e.elementType=L,e.lanes=a,e;case re:return e=$r(13,o,r,l),e.elementType=re,e.lanes=a,e;case fe:return e=$r(19,o,r,l),e.elementType=fe,e.lanes=a,e;case je:return hl(o,l,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:d=10;break e;case xe:d=9;break e;case Ce:d=11;break e;case ke:d=14;break e;case Se:d=16,n=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return r=$r(d,o,r,l),r.elementType=e,r.type=n,r.lanes=a,r}function Gt(e,r,o,n){return e=$r(7,e,n,r),e.lanes=o,e}function hl(e,r,o,n){return e=$r(22,e,n,r),e.elementType=je,e.lanes=o,e.stateNode={isHidden:!1},e}function os(e,r,o){return e=$r(6,e,null,r),e.lanes=o,e}function ns(e,r,o){return r=$r(4,e.children!==null?e.children:[],e.key,r),r.lanes=o,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function vp(e,r,o,n,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ls(e,r,o,n,l,a,d,f,x){return e=new vp(e,r,o,f,x),r===1?(r=1,a===!0&&(r|=8)):r=0,a=$r(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(a),e}function yp(e,r,o){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:n==null?null:""+n,children:e,containerInfo:r,implementation:o}}function Kc(e){if(!e)return Pt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(i(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Pr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Pr(o))return ji(e,o,r)}return r}function Gc(e,r,o,n,l,a,d,f,x){return e=ls(o,n,!0,e,l,a,d,f,x),e.context=Kc(null),o=e.current,n=Nr(),l=Rt(o),a=ft(n,l),a.callback=r??null,zt(o,a,l),e.current.lanes=l,Po(e,l,n),zr(e,n),e}function ml(e,r,o,n){var l=r.current,a=Nr(),d=Rt(l);return o=Kc(o),r.context===null?r.context=o:r.pendingContext=o,r=ft(a,d),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=zt(l,r,d),e!==null&&(et(e,l,d,a),qn(e,l,d)),d}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<r?o:r}}function as(e,r){Jc(e,r),(e=e.alternate)&&Jc(e,r)}function bp(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ss(e){this._internalRoot=e}gl.prototype.render=ss.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(i(409));ml(e,r,null,null)},gl.prototype.unmount=ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Qt(function(){ml(null,e,null,null)}),r[dt]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var r=As();e={blockedOn:null,target:e,priority:r};for(var o=0;o<Nt.length&&r!==0&&r<Nt[o].priority;o++);Nt.splice(o,0,e),o===0&&Ls(e)}};function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function kp(e,r,o,n,l){if(l){if(typeof n=="function"){var a=n;n=function(){var z=fl(d);a.call(z)}}var d=Gc(r,n,e,0,null,!1,!1,"",ed);return e._reactRootContainer=d,e[dt]=d.current,Uo(e.nodeType===8?e.parentNode:e),Qt(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var f=n;n=function(){var z=fl(x);f.call(z)}}var x=ls(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=x,e[dt]=x.current,Uo(e.nodeType===8?e.parentNode:e),Qt(function(){ml(r,x,o,n)}),x}function vl(e,r,o,n,l){var a=o._reactRootContainer;if(a){var d=a;if(typeof l=="function"){var f=l;l=function(){var x=fl(d);f.call(x)}}ml(r,d,e,l)}else d=kp(o,r,e,l,n);return fl(d)}Rs=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var o=So(r.pendingLanes);o!==0&&(Ol(r,o|1),zr(r,Ze()),(De&6)===0&&(bo=Ze()+500,Et()))}break;case 13:Qt(function(){var n=mt(e,1);if(n!==null){var l=Nr();et(n,e,1,l)}}),as(e,1)}},Dl=function(e){if(e.tag===13){var r=mt(e,134217728);if(r!==null){var o=Nr();et(r,e,134217728,o)}as(e,134217728)}},_s=function(e){if(e.tag===13){var r=Rt(e),o=mt(e,r);if(o!==null){var n=Nr();et(o,e,r,n)}as(e,r)}},As=function(){return Fe},Is=function(e,r){var o=Fe;try{return Fe=e,r()}finally{Fe=o}},Yr=function(e,r,o){switch(r){case"input":if(Ge(e,o),r=o.name,o.type==="radio"&&r!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var n=o[r];if(n!==e&&n.form===e.form){var l=_n(n);if(!l)throw Error(i(90));Fr(n),Ge(n,l)}}}break;case"textarea":ce(e,o);break;case"select":r=o.value,r!=null&&Ee(e,!!o.multiple,r,!1)}},ks=Za,Ns=Qt;var Np={usingClientEntryPoint:!1,Events:[$o,ao,_n,Ie,bs,Za]},nn={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wp={bundleType:nn.bundleType,version:nn.version,rendererPackageName:nn.rendererPackageName,rendererConfig:nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ss(e),e===null?null:e.stateNode},findFiberByHostInstance:nn.findFiberByHostInstance||bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{gn=yl.inject(wp),ot=yl}catch{}}return Mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np,Mr.createPortal=function(e,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!is(r))throw Error(i(200));return yp(e,r,null,o)},Mr.createRoot=function(e,r){if(!is(e))throw Error(i(299));var o=!1,n="",l=Zc;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=ls(e,1,!1,null,null,o,!1,n,l),e[dt]=r.current,Uo(e.nodeType===8?e.parentNode:e),new ss(r)},Mr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Ss(r),e=e===null?null:e.stateNode,e},Mr.flushSync=function(e){return Qt(e)},Mr.hydrate=function(e,r,o){if(!xl(r))throw Error(i(200));return vl(null,e,r,!0,o)},Mr.hydrateRoot=function(e,r,o){if(!is(e))throw Error(i(405));var n=o!=null&&o.hydratedSources||null,l=!1,a="",d=Zc;if(o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(a=o.identifierPrefix),o.onRecoverableError!==void 0&&(d=o.onRecoverableError)),r=Gc(r,null,e,1,o??null,l,!1,a,d),e[dt]=r.current,Uo(e),n)for(e=0;e<n.length;e++)o=n[e],l=o._getVersion,l=l(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,l]:r.mutableSourceEagerHydrationData.push(o,l);return new gl(r)},Mr.render=function(e,r,o){if(!xl(r))throw Error(i(200));return vl(null,e,r,!1,o)},Mr.unmountComponentAtNode=function(e){if(!xl(e))throw Error(i(40));return e._reactRootContainer?(Qt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1},Mr.unstable_batchedUpdates=Za,Mr.unstable_renderSubtreeIntoContainer=function(e,r,o,n){if(!xl(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return vl(e,r,o,!1,n)},Mr.version="18.3.1-next-f1338f8080-20240426",Mr}var id;function Op(){if(id)return us.exports;id=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),us.exports=Mp(),us.exports}var cd;function Dp(){if(cd)return bl;cd=1;var s=Op();return bl.createRoot=s.createRoot,bl.hydrateRoot=s.hydrateRoot,bl}var Rp=Dp(),g=gs();const qr=Cp(g),Jt="/assets/5ebff9a217654d307f5ff0e6abe952a2f7edba47-C_j6zY7W.png",_p="/assets/f72178f30a0dde70a8d75f3484b9afe145cb6b4a-CDyQn-v-.png",Ap="/assets/ce4e08efbf373b6ac47b975a612b62ba9dbdfad0-E6WWYkN1.png";function Ip({onCustomerCheckIn:s,onStaffLogin:u,onRevisit:i}){return t.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[t.jsx("div",{className:"hidden lg:flex absolute",style:{right:"0",top:"50%",transform:"translateY(-50%)",width:"45%",height:"85%",zIndex:5,alignItems:"center",justifyContent:"center"},children:t.jsx("img",{src:_p,alt:"Eagle",className:"eagle-wings",style:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",opacity:.35}})}),t.jsxs("nav",{className:"relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsx("span",{className:"text-lg sm:text-xl font-medium text-white",children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-6 sm:gap-8",children:[t.jsx("a",{href:"https://reliancesurfaces.com/shop/",target:"_blank",rel:"noopener noreferrer",className:"text-sm sm:text-base text-gray-400 transition-all duration-200 nav-link",children:"Slabs"}),t.jsx("button",{onClick:u,className:"text-sm sm:text-base text-gray-400 transition-all duration-200 nav-link",children:"Login"})]})]}),t.jsx("div",{className:"hidden sm:flex relative z-10 flex-col items-start justify-center px-8 lg:px-16 xl:px-24",style:{height:"calc(100vh - 100px)"},children:t.jsxs("div",{className:"max-w-2xl lg:max-w-3xl",children:[t.jsxs("h1",{className:"mb-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"300",lineHeight:"1.1"},children:["Welcome to"," ",t.jsx("span",{style:{color:"#D4A736"},children:"Reliance Surfaces"})]}),t.jsx("p",{className:"mb-12 text-lg md:text-xl lg:text-2xl italic",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-start gap-4 max-w-md",children:[t.jsx("button",{onClick:s,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none"},onMouseEnter:c=>{c.currentTarget.style.backgroundColor="#E5B946",c.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:c=>{c.currentTarget.style.backgroundColor="#D4A736",c.currentTarget.style.transform="translateY(0)"},children:"Check-In"}),t.jsx("button",{onClick:i,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736"},onMouseEnter:c=>{c.currentTarget.style.backgroundColor="rgba(212, 167, 54, 0.1)",c.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:c=>{c.currentTarget.style.backgroundColor="transparent",c.currentTarget.style.transform="translateY(0)"},children:"Revisiting"})]})]})}),t.jsxs("div",{className:"sm:hidden relative z-10 flex flex-col justify-between px-6",style:{height:"calc(100vh - 88px)"},children:[t.jsxs("div",{className:"flex flex-col pt-8 text-center",children:[t.jsx("h1",{className:"mb-2 text-5xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"200",lineHeight:"1.1"},children:"Welcome"}),t.jsx("p",{className:"mb-6 text-2xl italic",style:{color:"rgba(156, 163, 175, 0.8)",fontWeight:"300",fontStyle:"italic"},children:"to"}),t.jsx("h2",{className:"mb-6 text-4xl leading-tight font-light",style:{color:"#D4A736",fontWeight:"300",lineHeight:"1.1"},children:"Reliance Surfaces"}),t.jsx("p",{className:"mb-8 text-base italic px-4",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),t.jsxs("div",{className:"flex flex-col gap-3 max-w-xs mx-auto w-full",children:[t.jsx("button",{onClick:s,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none"},children:"Check-In"}),t.jsx("button",{onClick:i,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736"},children:"Revisiting"})]})]}),t.jsx("div",{className:"flex justify-center items-center pb-16 pt-4",children:t.jsx("img",{src:Ap,alt:"Eagle",className:"eagle-wings-mobile",style:{width:"85%",maxWidth:"360px",height:"auto",opacity:.4,filter:"brightness(0) saturate(100%) invert(63%) sepia(44%) saturate(443%) hue-rotate(1deg) brightness(93%) contrast(87%)"}})})]}),t.jsx("style",{children:`
        @keyframes wingFlap {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          25% {
            transform: scaleX(1.03) scaleY(0.98);
          }
          50% {
            transform: scaleX(1.05) scaleY(0.97);
          }
          75% {
            transform: scaleX(1.03) scaleY(0.98);
          }
        }

        @keyframes wingFlapMobile {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          25% {
            transform: scaleX(1.04) scaleY(0.97);
          }
          50% {
            transform: scaleX(1.06) scaleY(0.96);
          }
          75% {
            transform: scaleX(1.04) scaleY(0.97);
          }
        }

        @keyframes subtleGlow {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.42;
          }
        }

        @keyframes subtleGlowMobile {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.5;
          }
        }

        .eagle-wings {
          animation: wingFlap 3.5s ease-in-out infinite, subtleGlow 3s ease-in-out infinite;
          transform-origin: center;
        }

        .eagle-wings-mobile {
          animation: wingFlapMobile 4s ease-in-out infinite, subtleGlowMobile 3s ease-in-out infinite;
          transform-origin: center;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          padding-bottom: 2px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #D4A736;
          transition: width 0.25s ease;
        }

        .nav-link:hover {
          color: #D4A736 !important;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lp=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,i,c)=>c?c.toUpperCase():i.toLowerCase()),dd=s=>{const u=Lp(s);return u.charAt(0).toUpperCase()+u.slice(1)},vd=(...s)=>s.filter((u,i,c)=>!!u&&u.trim()!==""&&c.indexOf(u)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=g.forwardRef(({color:s="currentColor",size:u=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:m="",children:h,iconNode:b,...M},N)=>g.createElement("svg",{ref:N,...Hp,width:u,height:u,stroke:s,strokeWidth:c?Number(i)*24/Number(u):i,className:vd("lucide",m),...M},[...b.map(([H,F])=>g.createElement(H,F)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(s,u)=>{const i=g.forwardRef(({className:c,...m},h)=>g.createElement(Up,{ref:h,iconNode:u,className:vd(`lucide-${Fp(dd(s))}`,`lucide-${s}`,c),...m}));return i.displayName=dd(s),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Wp=Ve("bell",Bp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],yd=Ve("check",$p);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],bd=Ve("chevron-down",qp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Vp=Ve("chevron-left",Yp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xp=Ve("chevron-right",Qp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],kd=Ve("chevron-up",Kp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],xs=Ve("circle-check-big",Gp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Zp=Ve("eye-off",Jp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vs=Ve("eye",eh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Nd=Ve("funnel",rh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ys=Ve("image",th);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],un=Ve("log-out",oh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],lh=Ve("mail",nh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M5 12h14",key:"1ays0h"}]],wd=Ve("minus",ah);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],dn=Ve("plus",sh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jd=Ve("rotate-ccw",ih);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Cd=Ve("search",ch);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],wl=Ve("star",dh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ph=Ve("triangle-alert",uh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],mh=Ve("upload",hh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],gh=Ve("user-plus",fh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],vh=Ve("user",xh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Sd=Ve("users",yh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ct=Ve("x",bh);function kh({onNext:s,initialData:u}){const[i,c]=g.useState({firstName:u?.firstName||"",lastName:u?.lastName||"",street:u?.street||"",suiteUnit:u?.suiteUnit||"",city:u?.city||"",state:u?.state||"",zip:u?.zip||"",country:u?.country||"USA",phones:u?.phones||[""],emails:u?.emails||[""]}),[m,h]=g.useState({}),b=g.useRef(null),M=g.useRef([]),N=g.useRef([]),H={AL:"35004",AK:"99501",AZ:"85001",AR:"72201",CA:"90001",CO:"80201",CT:"06101",DE:"19901",FL:"32301",GA:"30301",HI:"96801",ID:"83701",IL:"60601",IN:"46201",IA:"50301",KS:"66101",KY:"40201",LA:"70112",ME:"04101",MD:"21201",MA:"02101",MI:"48201",MN:"55401",MS:"39201",MO:"63101",MT:"59101",NE:"68101",NV:"89101",NH:"03101",NJ:"07101",NM:"87101",NY:"10001",NC:"27601",ND:"58101",OH:"43201",OK:"73101",OR:"97201",PA:"15201",RI:"02901",SC:"29201",SD:"57101",TN:"37201",TX:"73301",UT:"84101",VT:"05601",VA:"22201",WA:"98101",WV:"25301",WI:"53201",WY:"82001"},F=[{code:"AL",name:"Alabama"},{code:"AK",name:"Alaska"},{code:"AZ",name:"Arizona"},{code:"AR",name:"Arkansas"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DE",name:"Delaware"},{code:"FL",name:"Florida"},{code:"GA",name:"Georgia"},{code:"HI",name:"Hawaii"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"IA",name:"Iowa"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"ME",name:"Maine"},{code:"MD",name:"Maryland"},{code:"MA",name:"Massachusetts"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MS",name:"Mississippi"},{code:"MO",name:"Missouri"},{code:"MT",name:"Montana"},{code:"NE",name:"Nebraska"},{code:"NV",name:"Nevada"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NY",name:"New York"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PA",name:"Pennsylvania"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VT",name:"Vermont"},{code:"VA",name:"Virginia"},{code:"WA",name:"Washington"},{code:"WV",name:"West Virginia"},{code:"WI",name:"Wisconsin"},{code:"WY",name:"Wyoming"}],y=B=>{const L=H[B]||"";c(te=>({...te,state:B,zip:L}))},w=B=>B.split(" ").map(L=>L.charAt(0).toUpperCase()+L.slice(1).toLowerCase()).join(" "),U=B=>{setTimeout(()=>{B.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},300)},W=B=>B.replace(/\D/g,"").length===10,T=B=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(B),P=()=>{const B={};i.firstName.trim()||(B.firstName="First name is required"),i.lastName.trim()||(B.lastName="Last name is required"),i.street.trim()||(B.street="Street address is required"),i.city.trim()||(B.city="City is required"),i.state.trim()||(B.state="State is required"),i.zip.trim()||(B.zip="ZIP code is required");const L=i.phones.filter(xe=>xe.trim());L.length===0?B.phone="At least one phone number is required":L.every(W)||(B.phone="Phone numbers must be 10 digits");const te=i.emails.filter(xe=>xe.trim());return te.length===0?B.email="At least one email is required":te.every(T)||(B.email="Email addresses must be valid"),h(B),Object.keys(B).length===0},q=B=>{B.preventDefault(),P()&&s({...i,phones:i.phones.filter(L=>L.trim()),emails:i.emails.filter(L=>L.trim())})},S=()=>c(B=>({...B,phones:[...B.phones,""]})),A=B=>c(L=>({...L,phones:L.phones.filter((te,xe)=>xe!==B)})),$=(B,L)=>c(te=>{const xe=[...te.phones];return xe[B]=L,{...te,phones:xe}}),O=()=>c(B=>({...B,emails:[...B.emails,""]})),_=B=>c(L=>({...L,emails:L.emails.filter((te,xe)=>xe!==B)})),K=(B,L)=>c(te=>{const xe=[...te.emails];return xe[B]=L,{...te,emails:xe}});return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px 20px"},children:[t.jsx("h1",{className:"text-center mb-1 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 1: Your Details"}),t.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"var(--color-text-gray)"},children:"Please provide your contact information"}),t.jsxs("form",{onSubmit:q,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"First Name *"}),t.jsx("input",{type:"text",value:i.firstName,onChange:B=>c(L=>({...L,firstName:B.target.value})),onBlur:B=>c(L=>({...L,firstName:w(B.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.firstName?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"First name"}),m.firstName&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.firstName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Last Name *"}),t.jsx("input",{type:"text",value:i.lastName,onChange:B=>c(L=>({...L,lastName:B.target.value})),onBlur:B=>c(L=>({...L,lastName:w(B.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.lastName?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Last name"}),m.lastName&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.lastName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Street Address *"}),t.jsx("input",{type:"text",value:i.street,onChange:B=>c(L=>({...L,street:B.target.value})),onBlur:B=>c(L=>({...L,street:w(B.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.street?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"e.g. 123 Main St",ref:b}),m.street&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.street})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:i.suiteUnit,onChange:B=>c(L=>({...L,suiteUnit:B.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Suite/Unit"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"City *"}),t.jsx("input",{type:"text",value:i.city,onChange:B=>c(L=>({...L,city:B.target.value})),onBlur:B=>c(L=>({...L,city:w(B.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.city?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"City"}),m.city&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.city})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"State *"}),t.jsxs("select",{value:i.state,onChange:B=>y(B.target.value),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.state?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"Select"}),F.map(B=>t.jsx("option",{value:B.code,children:B.code},B.code))]}),m.state&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.state})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"ZIP *"}),t.jsx("input",{type:"text",value:i.zip,onChange:B=>c(L=>({...L,zip:B.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.zip?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"ZIP"}),m.zip&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.zip})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Country"}),t.jsxs("select",{value:i.country,onChange:B=>c(L=>({...L,country:B.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Phone Number(s) *"}),i.phones.map((B,L)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{ref:te=>M.current[L]=te,type:"tel",value:B,onChange:te=>$(L,te.target.value),onFocus:te=>U(te.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.phone&&L===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Phone number"}),i.phones.length>1&&t.jsx("button",{type:"button",onClick:()=>A(L),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:18})})]},L)),m.phone&&t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:m.phone}),t.jsxs("button",{type:"button",onClick:S,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[t.jsx(dn,{size:18}),"Add Another Phone"]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Email Address(es) *"}),i.emails.map((B,L)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{ref:te=>N.current[L]=te,type:"email",value:B,onChange:te=>K(L,te.target.value),onFocus:te=>U(te.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.email&&L===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Email address"}),i.emails.length>1&&t.jsx("button",{type:"button",onClick:()=>_(L),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:18})})]},L)),m.email&&t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:m.email}),t.jsxs("button",{type:"button",onClick:O,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[t.jsx(dn,{size:18}),"Add Another Email"]})]}),t.jsx("button",{type:"submit",className:"w-full py-3.5 rounded-lg text-sm font-medium mt-6",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue to Step 2"})]})]})})}const Nh=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function wh({onNext:s,onBack:u,initialData:i}){const[c,m]=g.useState(i?.referralSources?.map(y=>y.type)||[]),[h,b]=g.useState(i?.referralSources?.reduce((y,w)=>(y[w.type]={name:w.name||"",phone:w.phone||""},y),{})||{}),M=y=>y.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" "),N=y=>{if(c.includes(y)){m(c.filter(U=>U!==y));const w={...h};delete w[y],b(w)}else m([...c,y])},H=(y,w,U)=>{b({...h,[y]:{...h[y],name:w==="name"?U:h[y]?.name||"",phone:w==="phone"?U:h[y]?.phone||""}})},F=y=>{if(y.preventDefault(),c.length===0){alert("Please select at least one option");return}for(const U of c)if(!h[U]?.name?.trim()){alert(`Please enter a name for ${U}`);return}const w={referralSources:c.map(U=>({type:U,name:h[U]?.name,phone:h[U]?.phone}))};s(w)};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 2: How Did You Hear About Us?"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Select all that apply"}),t.jsxs("form",{onSubmit:F,className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{className:"space-y-4",children:Nh.map(y=>t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:c.includes(y)?"var(--color-background)":"transparent",border:`1px solid ${c.includes(y)?"var(--color-gold)":"var(--color-border)"}`},children:[t.jsx("input",{type:"checkbox",checked:c.includes(y),onChange:()=>N(y),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:y})]}),c.includes(y)&&t.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[t.jsx("input",{type:"text",value:h[y]?.name||"",onChange:w=>H(y,"name",M(w.target.value)),placeholder:"Name (required)",required:!0,className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("input",{type:"tel",value:h[y]?.phone||"",onChange:w=>H(y,"phone",w.target.value),placeholder:"Phone (optional)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]},y))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:u,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue to Step 3"})]})]})]})})}function jh({onNext:s,onBack:u,initialData:i}){const[c,m]=g.useState(i?.adults||1),[h,b]=g.useState(i?.minors||0),M=N=>{N.preventDefault(),s({adults:c,minors:h})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-3 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 3: Party Size"}),t.jsx("p",{className:"text-center mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please let us know who's visiting today"}),t.jsxs("form",{onSubmit:M,className:"space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(Sd,{size:28,style:{color:"var(--color-gold)"}}),t.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"How many adults are visiting?"})]}),t.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("button",{type:"button",onClick:()=>m(Math.max(1,c-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:c<=1?"var(--color-card)":"var(--color-gold)",color:c<=1?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:c<=1?"not-allowed":"pointer"},disabled:c<=1,children:"−"}),t.jsxs("div",{className:"text-center min-w-[120px]",children:[t.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:c}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:c===1?"Adult":"Adults"})]}),t.jsx("button",{type:"button",onClick:()=>m(Math.min(10,c+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:c>=10?"var(--color-card)":"var(--color-gold)",color:c>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:c>=10?"not-allowed":"pointer"},disabled:c>=10,children:"+"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(vh,{size:24,style:{color:"var(--color-gold)"}}),t.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"Number of minors"})]}),t.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("button",{type:"button",onClick:()=>b(Math.max(0,h-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:h<=0?"var(--color-card)":"var(--color-gold)",color:h<=0?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:h<=0?"not-allowed":"pointer"},disabled:h<=0,children:"−"}),t.jsxs("div",{className:"text-center min-w-[120px]",children:[t.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:h}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:h===1?"Minor":"Minors"})]}),t.jsx("button",{type:"button",onClick:()=>b(Math.min(10,h+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:h>=10?"var(--color-card)":"var(--color-gold)",color:h>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:h>=10?"not-allowed":"pointer"},disabled:h>=10,children:"+"})]})]}),t.jsx("div",{className:"text-center p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{className:"text-base sm:text-lg",style:{color:"var(--color-text-white)"},children:["Total visitors: ",t.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"600"},children:c+h})]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:u,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function Ch({isOpen:s,onConsent:u}){return s?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(4px)"},children:t.jsxs("div",{className:"w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)",padding:"32px"},children:[t.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-center mb-6",style:{color:"var(--color-gold)"},children:"Electronic Signature Consent"}),t.jsxs("div",{className:"space-y-5 mb-8",style:{color:"var(--color-text-white)",fontSize:"15px",lineHeight:"1.7"},children:[t.jsx("p",{children:"Before proceeding with the electronic waiver, please read and understand the following:"}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:'By clicking "I Consent" below, you agree to:'}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Sign this waiver electronically using your mouse, touchscreen, or trackpad"}),t.jsxs("li",{className:"pl-3",children:["Your electronic signature having the ",t.jsx("strong",{children:"same legal validity as a handwritten signature"})]}),t.jsx("li",{className:"pl-3",children:"This agreement being governed by New Jersey law and the federal Electronic Signatures in Global and National Commerce Act (ESIGN Act)"})]})]}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:"You have the right to:"}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Print or save this document for your records after signing"}),t.jsxs("li",{className:"pl-3",children:["Contact our office at ",t.jsx("strong",{children:"(908) 245-0888"})," or ",t.jsx("strong",{children:"info@reliancesurfaces.com"})," for assistance"]})]})]}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:"Technical Requirements:"}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Modern web browser (Chrome, Firefox, Safari, Edge, or similar)"}),t.jsx("li",{className:"pl-3",children:"Ability to view and save PDF documents"}),t.jsxs("li",{className:"pl-3",children:["For technical assistance, contact us at ",t.jsx("strong",{children:"(908) 245-0888"})]})]})]}),t.jsx("div",{className:"p-4 rounded-lg text-center font-medium",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:'By clicking "I Consent," you acknowledge that you have read and understand this disclosure, and you agree to conduct this transaction electronically.'})]}),t.jsx("div",{className:"flex justify-center mt-6",children:t.jsx("button",{onClick:u,className:"w-full sm:w-auto px-20 py-4 rounded-lg text-base font-medium transition-colors hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"I Consent to Electronic Signature"})}),t.jsx("p",{className:"mt-4 text-center text-xs",style:{color:"var(--color-text-gray)"},children:"This consent is required by federal ESIGN Act and New Jersey UETA to ensure you understand the legal implications of signing electronically."})]})}):null}const Sh=`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

I am signing this Waiver and Release, Indemnity Agreement, and Informed Consent (hereinafter "Waiver & Release") in anticipation of my entering the warehouse of Reliance Granite and Marble Corporation ("Reliance" or "we" or "our" or "us") located at 50 Boright Avenue, Kenilworth, NJ 07033 ("Premises").

I understand that Reliance is located in a commercial area, and that the Premises contain a wholesale warehouse. Reliance is involved in receiving, handling, dispatching, storing, and selling natural stone tiles and slabs in various shapes, sizes, weights, colors, and thicknesses, which necessarily involves heavy traffic and activities in movement of workers, materials, material-handling equipment, including but not limited to, forklifts, overhead cranes, pallet lift jacks, pickups, trailers, flatbed trucks and other heavy and dangerous equipment. Stones are heavy and may have sharp or jagged surfaces and edges. The nature of this business and scope of operations involve use of tools, including but not limited to, crowbars, hammers, wood-cutting saws and steel cables. As a result, debris such as wood bark, nails, plastic sheets, broken boxes, and various additional sharp, heavy, slippery, etc. objects may lie on the floor of the Premises between cleaning cycles. Other equipment, such as steel ropes, cables, ladders, etc. may be leaning, hanging, and/or on the Premises floor in the normal course of work. As result of the foregoing, customers entering the Premises are required to wear hard hats and to be aware of and vigilant with respect to their surroundings. By signing below, I acknowledge that Reliance personnel provided me with a hard hat and gloves. I acknowledge that if I am not wearing a hard hat and/or gloves, it is because I have read the terms of this document and assumed all risks associated with entering the Premises without them, including but not limited to the following provisions, all of which apply regardless of whether I am wearing a hard hat, gloves, or other protective gear, garments, footwear, or equipment.

I understand that my presence on the Premises poses unique risks of injury, and even death, of which I am fully aware. I agree: (1) not to move around the premises alone/unattended and to ask for help/assistance with materials/products and moving about the Premises; (2) to be vigilant, careful, alert, and aware of ongoing activities and tripping hazards while walking in the Premises and between aisles; (3) to not use any mobile electronic devices in the Premises, including but not limited to talking on a mobile device, texting, emailing, internet searching, etc., as I understand that doing so will prevent me from being fully aware of my surroundings at all times; (4) that children under the age of 15 are strictly prohibited in the warehouse and will have to wait in the office; if such children are brought into the warehouse without our permission, the child(ren)'s parents, guardians, and/or caretakers are solely responsible for their safety; (5) to avoid moving into confined areas and areas with insufficient or dim lighting; (6) not to attempt to lift or move any stones, tiles or objects; (7) not to touch any machines, equipment, materials, etc. in the Premises; (7) to keep a safe distance of at least fifty (50) feet from any moving materials and equipment in the Premises; (8) to obey all rules and instructions explained to me by Reliance staff; and (9) to ask us questions and for any additional safety information.

My signature on this document evidences my understanding and agreement that any bodily injury, death, or loss of personal property, damages and expenses are my sole responsibility.

I further agree and understand that I have read this Waiver & Release carefully and I am aware that, by signing it, I will be waiving and releasing all claims for personal injuries and property damage that I sustain while on the Premises. I acknowledge that Reliance has made no warranty, express or implied, regarding the condition of the Premises or the materials or equipment thereat, or the physical or mental condition, competency or skills of any other person at the Premises or elsewhere.

I have had ample opportunity to review this document and ask questions about all of the risks presented herein. Notwithstanding these risks, both disclosed and undisclosed, I fully assume these risks and the inherently dangerous nature of the Premises, and it is with my full and complete knowledge of these risks that, to the full extent permitted by New Jersey law, I agree to hold harmless, release, defend, and indemnify Reliance and to waive and relinquish all claims, demands, costs, losses, expenses or compensation of whatever nature for any loss, damage or injuries to persons and property sustained by me, any children in my care, my heirs, personal representatives, successors, assigns, and all other persons I may have or which in the future may accrue to the above referenced individuals or entities against Reliance, its owners, officers, principals, agents, successors, assigns, heirs, employees, volunteers, and independent contractors.

This Waiver & Release covers any and all liability, claims, demands, causes of action, or damages of any kind related to, arising from, or in any way connected with or believed to be caused by: (a) Reliance or its employees; (b) any other individuals merely present at Premises; or (c) me at the Premises. This Waiver & Release covers any and all activities connected to or associated with my presence at the Premises, all without limitation. I further agree not to sue, claim against, attach the property of, or prosecute Reliance for any such injury, death, damages or losses, whether or not such injury or death was caused in whole or in part by my negligence, the negligence of Reliance, or the act or omission of any party whatsoever.

This contract shall be legally binding upon me, my spouse, my heirs, my estate, assigns, legal guardians, and my personal representatives. I agree that this Waiver & Release is intended to be as broad and inclusive as permitted by the laws of the State of New Jersey, and that if any portion of this Waiver & Release is held invalid, the other provisions shall continue in full legal force and effect. This Waiver & Release is in effect from the date of signing and shall remain in force as long as I am on the Premises, including any future visits to the Premises. The terms and provisions of this Waiver & Release and any dispute arising in connection with it shall be governed by and construed in accordance with New Jersey law.

I, as a parent/guardian/supervisor/caretaker of an individual 15 years of age or older, sign this Waiver & Release on behalf of said minor, understanding that this Waiver & Release shall be deemed binding to the fullest extent permitted by law with respect to said minor. The consent of one parent or legal guardian shall be deemed the consent of all persons legally responsible for this individual, even if only one such person signs this Waiver & Release.

I am not under the influence of any medication, alcohol, or controlled substance that would impair my judgment to enter into this Waiver & Release or comply with its terms while on the Premises.

Electronic signatures (e.g., via DocuSign, PDF, or their equivalents) of this document shall have the same force and effect as originals.

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`;function Ph({onNext:s,onBack:u,isMainVisitor:i=!0,initialData:c}){const[m,h]=g.useState(!c?.esignConsentTimestamp),[b,M]=g.useState(c?.esignConsentTimestamp),[N]=g.useState(()=>{if(c?.sessionId)return c.sessionId;let re=sessionStorage.getItem("checkInSessionId");return re||(re=crypto.randomUUID(),sessionStorage.setItem("checkInSessionId",re)),re}),[H]=g.useState(()=>c?.deviceInfo?c.deviceInfo:{userAgent:navigator.userAgent,screenWidth:window.screen.width,screenHeight:window.screen.height,deviceType:/Mobile|Tablet/i.test(navigator.userAgent)?"mobile":"desktop",timestamp:new Date().toISOString()}),[F,y]=g.useState(c?.agreed||!1),[w,U]=g.useState(!!c),[W,T]=g.useState(c?.signature||""),[P,q]=g.useState(!1),[S,A]=g.useState(""),$=g.useRef(null),O=g.useRef(null);g.useEffect(()=>{const re=$.current;if(!re)return;const fe=re.getContext("2d");if(fe&&(re.width=re.offsetWidth*2,re.height=re.offsetHeight*2,fe.scale(2,2),fe.strokeStyle="#D4A736",fe.lineWidth=2,fe.lineCap="round",fe.lineJoin="round",c?.signature)){const ke=new Image;ke.onload=()=>{fe.drawImage(ke,0,0,re.offsetWidth,re.offsetHeight)},ke.src=c.signature}},[c]);const _=()=>{const re=O.current;if(!re)return;Math.abs(re.scrollHeight-re.scrollTop-re.clientHeight)<10&&U(!0)},K=re=>{q(!0);const fe=$.current;if(!fe)return;const ke=fe.getContext("2d");if(!ke)return;const Se=fe.getBoundingClientRect(),je=fe.width/Se.width,J=fe.height/Se.height,le="touches"in re?re.touches[0].clientX:re.clientX,ee="touches"in re?re.touches[0].clientY:re.clientY,p=(le-Se.left)*je/2,v=(ee-Se.top)*J/2;ke.beginPath(),ke.moveTo(p,v)},B=re=>{if(!P)return;const fe=$.current;if(!fe)return;const ke=fe.getContext("2d");if(!ke)return;const Se=fe.getBoundingClientRect(),je=fe.width/Se.width,J=fe.height/Se.height,le="touches"in re?re.touches[0].clientX:re.clientX,ee="touches"in re?re.touches[0].clientY:re.clientY,p=(le-Se.left)*je/2,v=(ee-Se.top)*J/2;ke.lineTo(p,v),ke.stroke()},L=()=>{q(!1);const re=$.current;re&&T(re.toDataURL())},te=()=>{const re=$.current;if(!re)return;const fe=re.getContext("2d");fe&&(fe.clearRect(0,0,re.width,re.height),T(""))},xe=()=>{const re=new Date().toISOString();M(re),h(!1)},Ce=re=>{if(re.preventDefault(),A(""),!b){A("Electronic signature consent is required"),h(!0);return}if(!w){A("Please scroll to the bottom of the waiver to continue");return}if(!F){A("You must agree to the waiver to continue");return}if(!W){A("Please provide your signature");return}s({agreed:F,signature:W,esignConsentTimestamp:b,sessionId:N,deviceInfo:H})};return t.jsxs(t.Fragment,{children:[t.jsx(Ch,{isOpen:m,onConsent:xe}),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:i?"Step 3: Waiver":"Waiver Agreement"}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:i?"Please read and sign the waiver":"Please review and provide your signature"}),t.jsxs("form",{onSubmit:Ce,className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{ref:O,onScroll:_,className:"p-4 sm:p-6 rounded-lg overflow-y-auto",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",maxHeight:"300px",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:t.jsx("div",{style:{whiteSpace:"pre-wrap"},children:Sh})}),!w&&t.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-gold)"},children:"⬇ Please scroll to the bottom to continue ⬇"}),t.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:F,onChange:re=>y(re.target.checked),disabled:!w,className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:w?"var(--color-text-white)":"var(--color-text-gray)"},children:"I have read and agree to the terms of the waiver"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between items-center mb-2",children:[t.jsx("label",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:"Signature *"}),t.jsx("button",{type:"button",onClick:te,className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:$,onMouseDown:K,onMouseMove:B,onMouseUp:L,onMouseLeave:L,onTouchStart:K,onTouchMove:B,onTouchEnd:L,className:"w-full rounded-lg cursor-crosshair touch-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"}}),t.jsx("p",{className:"mt-2 text-xs sm:text-sm",style:{color:"var(--color-text-gray)"},children:"Sign above with your mouse or finger"})]}),S&&t.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-error)"},children:S}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:u,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})]})}function Eh({onNext:s,onBack:u,visitorNumber:i,totalAdults:c,initialData:m}){const[h,b]=g.useState(""),[M,N]=g.useState(""),[H,F]=g.useState(!1),y=g.useRef(null);g.useEffect(()=>{const S=y.current;if(!S)return;const A=S.getContext("2d");if(A)if(S.width=S.offsetWidth*2,S.height=S.offsetHeight*2,A.scale(2,2),A.strokeStyle="#D4A736",A.lineWidth=2,A.lineCap="round",A.lineJoin="round",A.clearRect(0,0,S.width,S.height),m){if(b(m.name),N(m.signature),m.signature){const $=new Image;$.onload=()=>{A.drawImage($,0,0,S.offsetWidth,S.offsetHeight)},$.src=m.signature}}else b(""),N("")},[i,m]);const w=S=>S.split(" ").map(A=>A.charAt(0).toUpperCase()+A.slice(1).toLowerCase()).join(" "),U=S=>{F(!0);const A=y.current;if(!A)return;const $=A.getContext("2d");if(!$)return;const O=A.getBoundingClientRect(),_=A.width/O.width,K=A.height/O.height,B="touches"in S?S.touches[0].clientX:S.clientX,L="touches"in S?S.touches[0].clientY:S.clientY,te=(B-O.left)*_/2,xe=(L-O.top)*K/2;$.beginPath(),$.moveTo(te,xe)},W=S=>{if(!H)return;const A=y.current;if(!A)return;const $=A.getContext("2d");if(!$)return;const O=A.getBoundingClientRect(),_=A.width/O.width,K=A.height/O.height,B="touches"in S?S.touches[0].clientX:S.clientX,L="touches"in S?S.touches[0].clientY:S.clientY,te=(B-O.left)*_/2,xe=(L-O.top)*K/2;$.lineTo(te,xe),$.stroke()},T=()=>{F(!1);const S=y.current;S&&N(S.toDataURL())},P=()=>{const S=y.current;if(!S)return;const A=S.getContext("2d");A&&(A.clearRect(0,0,S.width,S.height),N(""))},q=S=>{if(S.preventDefault(),!h.trim()){alert("Please enter the visitor's name");return}if(!M){alert("Please provide a signature");return}s({name:h.trim(),signature:M})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[t.jsx(gh,{size:32,style:{color:"var(--color-gold)"}}),t.jsxs("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Additional Visitor ",i," of ",c]})]}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide name and signature"}),t.jsxs("form",{onSubmit:q,className:"space-y-6",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:"Visitor's Full Name"}),t.jsx("input",{type:"text",value:h,onChange:S=>b(w(S.target.value)),placeholder:"Enter full name",required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:"Signature"}),t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"},children:[t.jsx("canvas",{ref:y,className:"w-full h-full cursor-crosshair",style:{touchAction:"none"},onMouseDown:U,onMouseMove:W,onMouseUp:T,onMouseLeave:T,onTouchStart:U,onTouchMove:W,onTouchEnd:T,onTouchCancel:T}),!M&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",style:{color:"var(--color-text-gray)",fontSize:"16px"},children:"Sign here with your finger or mouse"})]}),t.jsx("button",{type:"button",onClick:P,className:"w-full py-2 rounded-lg text-sm transition-colors",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Clear Signature"})]}),t.jsx("div",{className:"text-center p-3 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)"},children:t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Collecting signatures: ",i," of ",c," adults"]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4",children:[t.jsx("button",{type:"button",onClick:u,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:i<c?"Next Visitor":"Continue"})]})]})]})})}function Th({onNext:s,onBack:u,numberOfMinors:i}){const[c,m]=g.useState(Array(i).fill("")),h=N=>N.split(" ").map(H=>H.charAt(0).toUpperCase()+H.slice(1).toLowerCase()).join(" "),b=(N,H)=>{const F=[...c];F[N]=h(H),m(F)},M=N=>{N.preventDefault();for(let H=0;H<c.length;H++)if(!c[H].trim()){alert(`Please enter the name for Minor ${H+1}`);return}s(c.map(H=>H.trim()))};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[t.jsx(Sd,{size:32,style:{color:"var(--color-gold)"}}),t.jsx("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Minor Information"})]}),t.jsxs("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:["Please provide the name",i>1?"s":""," of ",i===1?"the":"all"," minor",i>1?"s":""," visiting"]}),t.jsxs("form",{onSubmit:M,className:"space-y-5",children:[t.jsx("div",{className:"space-y-4",children:c.map((N,H)=>t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:["Minor ",H+1," Full Name"]}),t.jsx("input",{type:"text",value:N,onChange:F=>b(H,F.target.value),placeholder:`Enter name of minor ${H+1}`,required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]},H))}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid rgba(212, 167, 54, 0.3)"},children:t.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"ℹ️ Signatures are not required for minors"})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:u,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Complete Check-In"})]})]})]})})}function zh({customerName:s,hasMinors:u,onReturnHome:i}){const[c,m]=g.useState(15),h=g.useRef(i);return g.useEffect(()=>{h.current=i},[i]),g.useEffect(()=>{const b=setInterval(()=>{m(M=>M<=1?(clearInterval(b),setTimeout(()=>h.current(),0),0):M-1)},1e3);return()=>clearInterval(b)},[]),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx(xs,{size:80,style:{color:"var(--color-success)"}})}),t.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You, ",s,"!"]}),t.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),u&&t.jsxs("div",{className:"flex items-start gap-3 mb-8 p-4 rounded-lg text-left",style:{backgroundColor:"rgba(234, 179, 8, 0.1)",border:"1px solid var(--color-gold)"},children:[t.jsx(ph,{size:24,style:{color:"var(--color-gold)",flexShrink:0,marginTop:"2px"}}),t.jsx("p",{style:{color:"var(--color-gold)",fontSize:"16px",fontWeight:500},children:"Caution: Children under 15 years old must stay in the waiting room."})]}),t.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",t.jsx("span",{style:{color:"var(--color-gold)"},children:c})," seconds..."]}),t.jsx("button",{onClick:i,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function Mh({onLogin:s}){const[u,i]=g.useState(""),[c,m]=g.useState(""),[h,b]=g.useState(!1),[M,N]=g.useState(""),[H,F]=g.useState(!1),y=async w=>{if(w.preventDefault(),N(""),!u.trim()){N("Username is required");return}if(!c.trim()){N("Password is required");return}if(u==="staff"&&c==="reliance")s(u,"staff");else if(u==="pricing"&&c==="reliance")s(u,"pricing");else if(u==="analysis"&&c==="reliance")s(u,"analysis");else if(u==="staff2"&&c==="reliance")s(u,"staff2");else if(["katia","sarah","diane","sneha","dheeraj","ben","om","guest"].includes(u.toLowerCase())&&c==="Reliance159")s(u.toLowerCase(),"staff2");else if(u==="rating"&&c==="Reliance33")s(u,"rating");else if(u===c&&u.replace(/\D/g,"").length===10){const U=u.replace(/\D/g,"");F(!0);try{const W=await fetch("/api/customer/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:U})}),T=await W.json();W.ok?s(u,"customer",{token:T.data.authToken,checkInId:T.data.checkInId,customerName:T.data.customerName}):N(T.error||"No check-in found for this phone number.")}catch{N("Login failed. Please check your connection and try again.")}finally{F(!1)}}else N("Invalid username or password")};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-24 h-24 mx-auto mb-4 object-contain"}),t.jsx("h1",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"}),t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"Login"})]}),t.jsxs("form",{onSubmit:y,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Username"}),t.jsx("input",{type:"text",value:u,onChange:w=>i(w.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your username"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:h?"text":"password",value:c,onChange:w=>m(w.target.value),className:"w-full px-4 py-3 rounded-lg pr-12",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your password"}),t.jsx("button",{type:"button",onClick:()=>b(!h),className:"absolute right-3 top-1/2 -translate-y-1/2",style:{color:"var(--color-text-gray)"},children:h?t.jsx(Zp,{size:20}):t.jsx(vs,{size:20})})]})]}),M&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:M})}),t.jsx("button",{type:"submit",disabled:H,className:"w-full py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:H?.7:1},children:H?"Signing in…":"Sign In"})]})]})})}function ud(s,u){const[i,c]=g.useState(s);return g.useEffect(()=>{const m=setTimeout(()=>c(s),u);return()=>clearTimeout(m)},[s,u]),i}function sr(s,u){u===void 0&&(u={});var i=u.insertAt;if(s&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],m=document.createElement("style");m.type="text/css",i==="top"&&c.firstChild?c.insertBefore(m,c.firstChild):c.appendChild(m),m.styleSheet?m.styleSheet.cssText=s:m.appendChild(document.createTextNode(s))}}sr(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var it=function(){return it=Object.assign||function(s){for(var u,i=1,c=arguments.length;i<c;i++)for(var m in u=arguments[i])Object.prototype.hasOwnProperty.call(u,m)&&(s[m]=u[m]);return s},it.apply(this,arguments)};function jl(s){return jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},jl(s)}var Oh=/^\s+/,Dh=/\s+$/;function ge(s,u){if(u=u||{},(s=s||"")instanceof ge)return s;if(!(this instanceof ge))return new ge(s,u);var i=(function(c){var m={r:0,g:0,b:0},h=1,b=null,M=null,N=null,H=!1,F=!1;typeof c=="string"&&(c=(function(W){W=W.replace(Oh,"").replace(Dh,"").toLowerCase();var T,P=!1;if(fs[W])W=fs[W],P=!0;else if(W=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(T=rt.rgb.exec(W))?{r:T[1],g:T[2],b:T[3]}:(T=rt.rgba.exec(W))?{r:T[1],g:T[2],b:T[3],a:T[4]}:(T=rt.hsl.exec(W))?{h:T[1],s:T[2],l:T[3]}:(T=rt.hsla.exec(W))?{h:T[1],s:T[2],l:T[3],a:T[4]}:(T=rt.hsv.exec(W))?{h:T[1],s:T[2],v:T[3]}:(T=rt.hsva.exec(W))?{h:T[1],s:T[2],v:T[3],a:T[4]}:(T=rt.hex8.exec(W))?{r:Ir(T[1]),g:Ir(T[2]),b:Ir(T[3]),a:xd(T[4]),format:P?"name":"hex8"}:(T=rt.hex6.exec(W))?{r:Ir(T[1]),g:Ir(T[2]),b:Ir(T[3]),format:P?"name":"hex"}:(T=rt.hex4.exec(W))?{r:Ir(T[1]+""+T[1]),g:Ir(T[2]+""+T[2]),b:Ir(T[3]+""+T[3]),a:xd(T[4]+""+T[4]),format:P?"name":"hex8"}:(T=rt.hex3.exec(W))?{r:Ir(T[1]+""+T[1]),g:Ir(T[2]+""+T[2]),b:Ir(T[3]+""+T[3]),format:P?"name":"hex"}:!1})(c)),jl(c)=="object"&&(vt(c.r)&&vt(c.g)&&vt(c.b)?(y=c.r,w=c.g,U=c.b,m={r:255*Ye(y,255),g:255*Ye(w,255),b:255*Ye(U,255)},H=!0,F=String(c.r).substr(-1)==="%"?"prgb":"rgb"):vt(c.h)&&vt(c.s)&&vt(c.v)?(b=sn(c.s),M=sn(c.v),m=(function(W,T,P){W=6*Ye(W,360),T=Ye(T,100),P=Ye(P,100);var q=Math.floor(W),S=W-q,A=P*(1-T),$=P*(1-S*T),O=P*(1-(1-S)*T),_=q%6,K=[P,$,A,A,O,P][_],B=[O,P,P,$,A,A][_],L=[A,A,O,P,P,$][_];return{r:255*K,g:255*B,b:255*L}})(c.h,b,M),H=!0,F="hsv"):vt(c.h)&&vt(c.s)&&vt(c.l)&&(b=sn(c.s),N=sn(c.l),m=(function(W,T,P){var q,S,A;function $(K,B,L){return L<0&&(L+=1),L>1&&(L-=1),L<1/6?K+6*(B-K)*L:L<.5?B:L<2/3?K+(B-K)*(2/3-L)*6:K}if(W=Ye(W,360),T=Ye(T,100),P=Ye(P,100),T===0)q=S=A=P;else{var O=P<.5?P*(1+T):P+T-P*T,_=2*P-O;q=$(_,O,W+1/3),S=$(_,O,W),A=$(_,O,W-1/3)}return{r:255*q,g:255*S,b:255*A}})(c.h,b,N),H=!0,F="hsl"),c.hasOwnProperty("a")&&(h=c.a));var y,w,U;return h=Pd(h),{ok:H,format:c.format||F,r:Math.min(255,Math.max(m.r,0)),g:Math.min(255,Math.max(m.g,0)),b:Math.min(255,Math.max(m.b,0)),a:h}})(s);this._originalInput=s,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=u.format||i.format,this._gradientType=u.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function pd(s,u,i){s=Ye(s,255),u=Ye(u,255),i=Ye(i,255);var c,m,h=Math.max(s,u,i),b=Math.min(s,u,i),M=(h+b)/2;if(h==b)c=m=0;else{var N=h-b;switch(m=M>.5?N/(2-h-b):N/(h+b),h){case s:c=(u-i)/N+(u<i?6:0);break;case u:c=(i-s)/N+2;break;case i:c=(s-u)/N+4}c/=6}return{h:c,s:m,l:M}}function hd(s,u,i){s=Ye(s,255),u=Ye(u,255),i=Ye(i,255);var c,m,h=Math.max(s,u,i),b=Math.min(s,u,i),M=h,N=h-b;if(m=h===0?0:N/h,h==b)c=0;else{switch(h){case s:c=(u-i)/N+(u<i?6:0);break;case u:c=(i-s)/N+2;break;case i:c=(s-u)/N+4}c/=6}return{h:c,s:m,v:M}}function md(s,u,i,c){var m=[tt(Math.round(s).toString(16)),tt(Math.round(u).toString(16)),tt(Math.round(i).toString(16))];return c&&m[0].charAt(0)==m[0].charAt(1)&&m[1].charAt(0)==m[1].charAt(1)&&m[2].charAt(0)==m[2].charAt(1)?m[0].charAt(0)+m[1].charAt(0)+m[2].charAt(0):m.join("")}function fd(s,u,i,c){return[tt(Ed(c)),tt(Math.round(s).toString(16)),tt(Math.round(u).toString(16)),tt(Math.round(i).toString(16))].join("")}function Rh(s,u){u=u===0?0:u||10;var i=ge(s).toHsl();return i.s-=u/100,i.s=Cl(i.s),ge(i)}function _h(s,u){u=u===0?0:u||10;var i=ge(s).toHsl();return i.s+=u/100,i.s=Cl(i.s),ge(i)}function Ah(s){return ge(s).desaturate(100)}function Ih(s,u){u=u===0?0:u||10;var i=ge(s).toHsl();return i.l+=u/100,i.l=Cl(i.l),ge(i)}function Fh(s,u){u=u===0?0:u||10;var i=ge(s).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-u/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-u/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-u/100*255))),ge(i)}function Lh(s,u){u=u===0?0:u||10;var i=ge(s).toHsl();return i.l-=u/100,i.l=Cl(i.l),ge(i)}function Hh(s,u){var i=ge(s).toHsl(),c=(i.h+u)%360;return i.h=c<0?360+c:c,ge(i)}function Uh(s){var u=ge(s).toHsl();return u.h=(u.h+180)%360,ge(u)}function gd(s,u){if(isNaN(u)||u<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ge(s).toHsl(),c=[ge(s)],m=360/u,h=1;h<u;h++)c.push(ge({h:(i.h+h*m)%360,s:i.s,l:i.l}));return c}function Bh(s){var u=ge(s).toHsl(),i=u.h;return[ge(s),ge({h:(i+72)%360,s:u.s,l:u.l}),ge({h:(i+216)%360,s:u.s,l:u.l})]}function Wh(s,u,i){u=u||6,i=i||30;var c=ge(s).toHsl(),m=360/i,h=[ge(s)];for(c.h=(c.h-(m*u>>1)+720)%360;--u;)c.h=(c.h+m)%360,h.push(ge(c));return h}function $h(s,u){u=u||6;for(var i=ge(s).toHsv(),c=i.h,m=i.s,h=i.v,b=[],M=1/u;u--;)b.push(ge({h:c,s:m,v:h})),h=(h+M)%1;return b}ge.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var s=this.toRgb();return(299*s.r+587*s.g+114*s.b)/1e3},getLuminance:function(){var s,u,i,c=this.toRgb();return s=c.r/255,u=c.g/255,i=c.b/255,.2126*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.7152*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(s){return this._a=Pd(s),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var s=hd(this._r,this._g,this._b);return{h:360*s.h,s:s.s,v:s.v,a:this._a}},toHsvString:function(){var s=hd(this._r,this._g,this._b),u=Math.round(360*s.h),i=Math.round(100*s.s),c=Math.round(100*s.v);return this._a==1?"hsv("+u+", "+i+"%, "+c+"%)":"hsva("+u+", "+i+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var s=pd(this._r,this._g,this._b);return{h:360*s.h,s:s.s,l:s.l,a:this._a}},toHslString:function(){var s=pd(this._r,this._g,this._b),u=Math.round(360*s.h),i=Math.round(100*s.s),c=Math.round(100*s.l);return this._a==1?"hsl("+u+", "+i+"%, "+c+"%)":"hsla("+u+", "+i+"%, "+c+"%, "+this._roundA+")"},toHex:function(s){return md(this._r,this._g,this._b,s)},toHexString:function(s){return"#"+this.toHex(s)},toHex8:function(s){return(function(u,i,c,m,h){var b=[tt(Math.round(u).toString(16)),tt(Math.round(i).toString(16)),tt(Math.round(c).toString(16)),tt(Ed(m))];return h&&b[0].charAt(0)==b[0].charAt(1)&&b[1].charAt(0)==b[1].charAt(1)&&b[2].charAt(0)==b[2].charAt(1)&&b[3].charAt(0)==b[3].charAt(1)?b[0].charAt(0)+b[1].charAt(0)+b[2].charAt(0)+b[3].charAt(0):b.join("")})(this._r,this._g,this._b,this._a,s)},toHex8String:function(s){return"#"+this.toHex8(s)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ye(this._r,255))+"%",g:Math.round(100*Ye(this._g,255))+"%",b:Math.round(100*Ye(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ye(this._r,255))+"%, "+Math.round(100*Ye(this._g,255))+"%, "+Math.round(100*Ye(this._b,255))+"%)":"rgba("+Math.round(100*Ye(this._r,255))+"%, "+Math.round(100*Ye(this._g,255))+"%, "+Math.round(100*Ye(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(qh[md(this._r,this._g,this._b,!0)]||!1)},toFilter:function(s){var u="#"+fd(this._r,this._g,this._b,this._a),i=u,c=this._gradientType?"GradientType = 1, ":"";if(s){var m=ge(s);i="#"+fd(m._r,m._g,m._b,m._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+u+",endColorstr="+i+")"},toString:function(s){var u=!!s;s=s||this._format;var i=!1,c=this._a<1&&this._a>=0;return u||!c||s!=="hex"&&s!=="hex6"&&s!=="hex3"&&s!=="hex4"&&s!=="hex8"&&s!=="name"?(s==="rgb"&&(i=this.toRgbString()),s==="prgb"&&(i=this.toPercentageRgbString()),s!=="hex"&&s!=="hex6"||(i=this.toHexString()),s==="hex3"&&(i=this.toHexString(!0)),s==="hex4"&&(i=this.toHex8String(!0)),s==="hex8"&&(i=this.toHex8String()),s==="name"&&(i=this.toName()),s==="hsl"&&(i=this.toHslString()),s==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):s==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ge(this.toString())},_applyModification:function(s,u){var i=s.apply(null,[this].concat([].slice.call(u)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Ih,arguments)},brighten:function(){return this._applyModification(Fh,arguments)},darken:function(){return this._applyModification(Lh,arguments)},desaturate:function(){return this._applyModification(Rh,arguments)},saturate:function(){return this._applyModification(_h,arguments)},greyscale:function(){return this._applyModification(Ah,arguments)},spin:function(){return this._applyModification(Hh,arguments)},_applyCombination:function(s,u){return s.apply(null,[this].concat([].slice.call(u)))},analogous:function(){return this._applyCombination(Wh,arguments)},complement:function(){return this._applyCombination(Uh,arguments)},monochromatic:function(){return this._applyCombination($h,arguments)},splitcomplement:function(){return this._applyCombination(Bh,arguments)},triad:function(){return this._applyCombination(gd,[3])},tetrad:function(){return this._applyCombination(gd,[4])}},ge.fromRatio=function(s,u){if(jl(s)=="object"){var i={};for(var c in s)s.hasOwnProperty(c)&&(i[c]=c==="a"?s[c]:sn(s[c]));s=i}return ge(s,u)},ge.equals=function(s,u){return!(!s||!u)&&ge(s).toRgbString()==ge(u).toRgbString()},ge.random=function(){return ge.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ge.mix=function(s,u,i){i=i===0?0:i||50;var c=ge(s).toRgb(),m=ge(u).toRgb(),h=i/100;return ge({r:(m.r-c.r)*h+c.r,g:(m.g-c.g)*h+c.g,b:(m.b-c.b)*h+c.b,a:(m.a-c.a)*h+c.a})},ge.readability=function(s,u){var i=ge(s),c=ge(u);return(Math.max(i.getLuminance(),c.getLuminance())+.05)/(Math.min(i.getLuminance(),c.getLuminance())+.05)},ge.isReadable=function(s,u,i){var c,m,h=ge.readability(s,u);switch(m=!1,(c=(function(b){var M,N;return M=((b=b||{level:"AA",size:"small"}).level||"AA").toUpperCase(),N=(b.size||"small").toLowerCase(),M!=="AA"&&M!=="AAA"&&(M="AA"),N!=="small"&&N!=="large"&&(N="small"),{level:M,size:N}})(i)).level+c.size){case"AAsmall":case"AAAlarge":m=h>=4.5;break;case"AAlarge":m=h>=3;break;case"AAAsmall":m=h>=7}return m},ge.mostReadable=function(s,u,i){var c,m,h,b,M=null,N=0;m=(i=i||{}).includeFallbackColors,h=i.level,b=i.size;for(var H=0;H<u.length;H++)(c=ge.readability(s,u[H]))>N&&(N=c,M=ge(u[H]));return ge.isReadable(s,M,{level:h,size:b})||!m?M:(i.includeFallbackColors=!1,ge.mostReadable(s,["#fff","#000"],i))};var fs=ge.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},qh=ge.hexNames=(function(s){var u={};for(var i in s)s.hasOwnProperty(i)&&(u[s[i]]=i);return u})(fs);function Pd(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function Ye(s,u){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(s)&&(s="100%");var i=(function(c){return typeof c=="string"&&c.indexOf("%")!=-1})(s);return s=Math.min(u,Math.max(0,parseFloat(s))),i&&(s=parseInt(s*u,10)/100),Math.abs(s-u)<1e-6?1:s%u/parseFloat(u)}function Cl(s){return Math.min(1,Math.max(0,s))}function Ir(s){return parseInt(s,16)}function tt(s){return s.length==1?"0"+s:""+s}function sn(s){return s<=1&&(s=100*s+"%"),s}function Ed(s){return Math.round(255*parseFloat(s)).toString(16)}function xd(s){return Ir(s)/255}var Ft,kl,Nl,rt=(kl="[\\s|\\(]+("+(Ft="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")\\s*\\)?",Nl="[\\s|\\(]+("+Ft+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")\\s*\\)?",{CSS_UNIT:new RegExp(Ft),rgb:new RegExp("rgb"+kl),rgba:new RegExp("rgba"+Nl),hsl:new RegExp("hsl"+kl),hsla:new RegExp("hsla"+Nl),hsv:new RegExp("hsv"+kl),hsva:new RegExp("hsva"+Nl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function vt(s){return!!rt.CSS_UNIT.exec(s)}var Yh=function(s,u){var i=(typeof s=="string"?parseInt(s):s)||0;if(i>=-5&&i<=5){var c=i,m=parseFloat(u),h=m+c*(m/5)*-1;return(h==0||h<=Number.EPSILON)&&(h=.1),{animationPeriod:h+"s"}}return{animationPeriod:u}},Vh=function(s,u){var i=s||{},c="";switch(u){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var m={};if(i.fontSize){var h=i.fontSize;m=(function(b,M){var N={};for(var H in b)Object.prototype.hasOwnProperty.call(b,H)&&M.indexOf(H)<0&&(N[H]=b[H]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function"){var F=0;for(H=Object.getOwnPropertySymbols(b);F<H.length;F++)M.indexOf(H[F])<0&&Object.prototype.propertyIsEnumerable.call(b,H[F])&&(N[H[F]]=b[H[F]])}return N})(i,["fontSize"]),c=h}return{fontSize:c,styles:m}},Qh={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Xh=function(s){var u=s.className,i=s.text,c=s.textColor,m=s.staticText,h=s.style;return i?qr.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(u||"").trim(),style:it(it(it({},m&&Qh),c&&{color:c,mixBlendMode:"unset"}),h&&h)},typeof i=="string"&&i.length?i:"loading"):null},Td="rgb(50, 205, 50)";function Kh(s,u){if(u===void 0&&(u=0),s.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function c(m,h){return h===void 0&&(h=0),i.push.apply(i,m),i.length<h&&c(i,h),i.slice(0,h)})(s,u)}sr(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ge(Td).toRgb();Array.from({length:4},(function(s,u){return"--atom-phase".concat(u+1,"-rgb")}));sr(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--commet-phase".concat(u+1,"-color")}));sr(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--OP-annulus-phase".concat(u+1,"-color")}));function ms(s){return s&&s.Math===Math&&s}sr(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);ms(typeof window=="object"&&window)||ms(typeof self=="object"&&self)||ms(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(s,u){return"--OP-dotted-phase".concat(u+1,"-color")}));sr(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--OP-spokes-phase".concat(u+1,"-color")}));sr(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(s,u){return"--OP-annulus-dual-sectors-phase".concat(u+1,"-color")}));sr(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return["--OP-annulus-track-phase".concat(u+1,"-color"),"--OP-annulus-sector-phase".concat(u+1,"-color")]}));sr(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--four-square-phase".concat(u+1,"-color")}));sr(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--mosaic-phase".concat(u+1,"-color")}));sr(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--riple-phase".concat(u+1,"-color")}));sr(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--TD-pulsate-phase".concat(u+1,"-color")}));sr(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--TD-brick-stack-phase".concat(u+1,"-color")}));sr(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--TD-bob-phase".concat(u+1,"-color")}));sr(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--TD-bounce-phase".concat(u+1,"-color")}));sr(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--shape-phase".concat(u+1,"-color")}));sr(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--trophySpin-phase".concat(u+1,"-color")}));sr(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);var No=Array.from({length:4},(function(s,u){return"--slab-phase".concat(u+1,"-color")})),Gh=function(s){var u,i=Vh(s?.style,s?.size),c=i.styles,m=i.fontSize,h=s?.easing,b=Yh(s?.speedPlus,"3s").animationPeriod,M=(function(N){var H={};if(N instanceof Array){for(var F=Kh(N,No.length),y=0;y<F.length&&!(y>=4);y++)H[No[y]]=F[y];return H}try{if(typeof N!="string")throw new Error("Color String expected");for(var w=0;w<No.length;w++)H[No[w]]=N}catch(U){for(U instanceof Error?console.warn("[".concat(U.message,']: Received "').concat(typeof N,'" instead with value, ').concat(JSON.stringify(N))):console.warn("".concat(JSON.stringify(N)," received in <Slab /> indicator cannot be processed. Using default instead!")),w=0;w<No.length;w++)H[No[w]]=Td}return H})((u=s?.color)!==null&&u!==void 0?u:"");return qr.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:it(it(it(it(it({},m&&{fontSize:m}),b&&{"--rli-animation-duration-unitless":parseFloat(b)}),h&&{"--rli-animation-function":h}),M),c),role:"status","aria-live":"polite","aria-label":"Loading"},qr.createElement("span",{className:"rli-d-i-b slab-indicator"},qr.createElement("span",{className:"slabs-wrapper"},qr.createElement("span",{className:"slab"}),qr.createElement("span",{className:"slab"}),qr.createElement("span",{className:"slab"}),qr.createElement("span",{className:"slab"}))),qr.createElement(Xh,{staticText:!0,text:s?.text,textColor:s?.textColor}))};sr(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(s,u){return"--life-line-phase".concat(u+1,"-color")}));function cn({color:s="#ccb331",size:u="medium",text:i,fullScreen:c=!1}){const m=t.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[t.jsx(Gh,{color:s,size:u}),i&&t.jsx("p",{className:"text-sm animate-pulse",style:{color:"var(--color-text-gray, #aaa)"},children:i})]});return c?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.7)"},children:m}):t.jsx("div",{className:"flex items-center justify-center p-6",children:m})}function Jh({customer:s,onClose:u,onSubmit:i,onMarkAsHelped:c,onRevisit:m,staffUsername:h,isViewOnly:b,allCheckIns:M}){const[N,H]=g.useState(s.draft?.step||1),[F,y]=g.useState(s.draft?.editedCustomerData||{}),[w,U]=g.useState(s.draft?.selectedFabricator),[W,T]=g.useState(s.draft?.materials||[]),[P,q]=g.useState(s.currentlyHelpedBy||s.draft?.helpedBy||h),[S,A]=g.useState(s.draft?.selectionSheetNumber||""),[$,O]=g.useState(s.draft?.selectedFabricator?.companyName||""),[_,K]=g.useState(""),[B,L]=g.useState(!1),[te,xe]=g.useState(!1),Ce=ud($,300),re=ud(_,300),[fe,ke]=g.useState([]),[Se,je]=g.useState([]),[J,le]=g.useState(!1),[ee,p]=g.useState(!1),[v,Q]=g.useState(!1),[G,pe]=g.useState([]),[ae,Pe]=g.useState(!1),[we,be]=g.useState(!1),[Le,rr]=g.useState(null);g.useEffect(()=>{s.currentlyHelpedBy&&q(s.currentlyHelpedBy)},[s.currentlyHelpedBy]),g.useEffect(()=>{const j=s.phones?.[0];j&&(be(!0),fetch(`/api/images/customer/${encodeURIComponent(j)}`).then(R=>R.json()).then(R=>{R.success&&Array.isArray(R.data)&&pe(R.data.filter(ce=>ce.images.length>0))}).catch(()=>{}).finally(()=>be(!1)))},[s.phones]);const Fr=()=>({...s,...F});g.useEffect(()=>{if(Ce.length<3){ke([]);return}le(!0),fetch(`/api/accounts/search?q=${encodeURIComponent(Ce)}`).then(j=>j.json()).then(j=>ke(j.success?j.data:[])).catch(()=>ke([])).finally(()=>le(!1))},[Ce]),g.useEffect(()=>{if(re.length<3){je([]);return}p(!0),fetch(`/api/materials/search?q=${encodeURIComponent(re)}`).then(j=>j.json()).then(j=>je(j.success?j.data:[])).catch(()=>je([])).finally(()=>p(!1))},[re]);const Or=()=>{if(s.status==="waiting"){const j={step:N,editedCustomerData:F,selectedFabricator:w,materials:W,helpedBy:P,selectionSheetNumber:S,isHold:W.some(R=>R.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};i(s.id,j),fetch(`/api/check-ins/${s.id}/draft`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({draftStep:N,materials:W,fabricator:w||null,helpedBy:P,selectionSheetNumber:S})}).catch(R=>console.warn("Draft save failed:",R))}u()},Ke=j=>{U(j),O(j.companyName),L(!1),j.salesPerson&&y(R=>({...R,salesPerson:j.salesPerson}))},wr=j=>{O(j),L(!0),w&&j.toLowerCase()!==w.companyName.toLowerCase()&&!w.companyName.toLowerCase().startsWith(j.toLowerCase())&&j.length>=3&&U(void 0)},jr=j=>{const R={id:Date.now().toString(),name:j,soldAs:"",size:{l:"",h:""},lot:"",location:"",quantity:1,finish:"Polished",hold:!1,slabNumbers:""};T([...W,R]),K(""),xe(!1)},Ge=(j,R,ce)=>{T(W.map(oe=>oe.id===j?{...oe,[R]:ce}:oe))},Ue=j=>{T(W.filter(R=>R.id!==j))},tr=async()=>{if(N!==3||v)return;Q(!0);const j={step:3,editedCustomerData:F,selectedFabricator:w,materials:W,helpedBy:P,selectionSheetNumber:S,isHold:W.some(R=>R.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};try{await fetch(`/api/check-ins/${s.id}/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({materials:W,selectedFabricator:w,helpedBy:P,selectionSheetNumber:S})})}catch(R){console.error("Complete API error:",R)}Q(!1),i(s.id,j),u()},nr=()=>{if(!s.draft?.selectionSheetNumber)return!1;const j=M.filter(Ae=>Ae.firstName===s.firstName&&Ae.lastName===s.lastName&&Ae.status==="helped"&&Ae.draft?.selectionSheetNumber),oe=s.draft.selectionSheetNumber.split(".")[0],Oe=j.filter(Ae=>(Ae.draft?.selectionSheetNumber||"").startsWith(oe));return Oe.sort((Ae,ur)=>{const D=Ae.draft?.selectionSheetNumber||"",de=ur.draft?.selectionSheetNumber||"",Te=D.split("."),Me=de.split("."),I=parseInt(Te[0])||0,he=parseInt(Me[0])||0;if(I!==he)return I-he;const _e=Te.length>1?parseInt(Te[1]):0,He=Me.length>1?parseInt(Me[1]):0;return _e-He}),Oe[Oe.length-1]?.id===s.id},Ee=Fr();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsxs("div",{className:"flex justify-between items-start mb-6",children:[t.jsxs("div",{children:[t.jsxs("h2",{style:{color:"var(--color-gold)"},children:[Ee.firstName," ",Ee.lastName]}),t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Step ",N," of 3"]})]}),t.jsx("button",{onClick:Or,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsx("div",{className:"flex gap-2 mb-8",children:[1,2,3].map(j=>t.jsx("div",{className:"flex-1 h-2 rounded-full",style:{backgroundColor:j<=N?"var(--color-gold)":"var(--color-border)"}},j))}),N===1&&t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Customer Details"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"First Name"}),t.jsx("input",{type:"text",value:F.firstName??Ee.firstName,onChange:j=>y({...F,firstName:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Last Name"}),t.jsx("input",{type:"text",value:F.lastName??Ee.lastName,onChange:j=>y({...F,lastName:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address"}),t.jsx("input",{type:"text",value:F.street??Ee.street,onChange:j=>y({...F,street:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:F.suiteUnit??Ee.suiteUnit,onChange:j=>y({...F,suiteUnit:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[t.jsxs("div",{className:"col-span-2",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City"}),t.jsx("input",{type:"text",value:F.city??Ee.city,onChange:j=>y({...F,city:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State"}),t.jsx("input",{type:"text",value:F.state??Ee.state,onChange:j=>y({...F,state:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP"}),t.jsx("input",{type:"text",value:F.zip??Ee.zip,onChange:j=>y({...F,zip:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country"}),t.jsxs("select",{value:F.country??Ee.country,onChange:j=>y({...F,country:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone Numbers"}),(F.phones??Ee.phones).map((j,R)=>t.jsx("input",{type:"tel",value:j,onChange:ce=>{const oe=[...F.phones??Ee.phones];oe[R]=ce.target.value,y({...F,phones:oe})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},R))]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Email Addresses"}),(F.emails??Ee.emails).map((j,R)=>t.jsx("input",{type:"email",value:j,onChange:ce=>{const oe=[...F.emails??Ee.emails];oe[R]=ce.target.value,y({...F,emails:oe})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},R))]}),Ee.visitors&&Ee.visitors.length>0?t.jsxs("div",{children:[t.jsxs("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:["All Visitors (",Ee.visitors.length,")"]}),t.jsx("div",{className:"space-y-4",children:Ee.visitors.filter(j=>j&&j.name).map((j,R)=>(console.log(`Visitor ${R}:`,{name:j.name,hasSignature:!!j.signature,signatureLength:j.signature?.length,isMinor:j.isMinor,isMain:j.isMain}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:j.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px",fontWeight:"500"},children:j.name}),j.isMain&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),j.isMinor&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor"})]}),j.signature&&j.signature.length>0?t.jsx("div",{className:"rounded",style:{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"8px"},children:t.jsx("img",{src:j.signature,alt:`${j.name}'s signature`,className:"w-full rounded",style:{maxHeight:"80px",objectFit:"contain"}})}):j.isMinor?t.jsx("div",{className:"rounded flex items-center justify-center",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",padding:"12px",minHeight:"80px"},children:t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No signature (Minor)"})}):null]},R)))})]}):t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Waiver Signature"}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:t.jsx("img",{src:Ee.signature,alt:"Signature",className:"w-full rounded",style:{maxHeight:"150px",objectFit:"contain"}})})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[t.jsxs("button",{onClick:()=>Pe(j=>!j),className:"w-full flex items-center justify-between px-4 py-3",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-white)",border:"none",cursor:"pointer"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ys,{size:16,style:{color:"var(--color-gold)"}}),t.jsx("span",{children:"Uploaded Images"}),!we&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212,167,54,0.15)",color:"var(--color-gold)"},children:G.reduce((j,R)=>j+R.images.length,0)})]}),ae?t.jsx(kd,{size:16,style:{color:"var(--color-text-gray)"}}):t.jsx(bd,{size:16,style:{color:"var(--color-text-gray)"}})]}),ae&&t.jsx("div",{className:"p-4",style:{borderTop:"1px solid var(--color-border)"},children:we?t.jsx(cn,{size:"small",color:"#ccb331"}):G.length===0?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No images uploaded."}):t.jsx("div",{className:"space-y-5",children:G.map(j=>t.jsxs("div",{children:[G.length>1&&t.jsxs("p",{className:"mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:["Visit: ",new Date(j.checkInTime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),t.jsx("div",{className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))"},children:j.images.map(R=>t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{aspectRatio:"1",border:"1px solid var(--color-border)",cursor:"pointer"},onClick:()=>rr(R.image_url),children:[t.jsx("img",{src:R.image_url,alt:"Material",className:"w-full h-full object-cover"}),t.jsxs("div",{className:"absolute bottom-0 right-0 px-1.5 py-0.5 text-xs font-semibold rounded-tl-lg",style:{backgroundColor:"rgba(0,0,0,0.75)",color:"var(--color-gold)"},children:["×",R.quantity]})]},R.id))})]},j.checkInId))})})]})]}),N===2&&t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Referral Information"}),t.jsx("div",{className:"mt-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:Ee.referralSources&&Ee.referralSources.length>0?Ee.referralSources.map((j,R)=>t.jsxs("div",{className:"mb-3",children:[t.jsxs("p",{style:{color:"var(--color-text-white)"},children:[t.jsx("span",{style:{color:"var(--color-gold)"},children:"•"})," ",j.type]}),j.name&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Name: ",j.name]}),j.phone&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Phone: ",j.phone]})]},R)):t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No referral information provided"})})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)",marginBottom:"16px"},children:"Fabricator Selection *"}),t.jsxs("div",{className:"relative",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search by Company Name"}),t.jsx("input",{type:"text",value:$,onChange:j=>wr(j.target.value),onFocus:()=>L(!0),onBlur:()=>{setTimeout(()=>L(!1),200)},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${w?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Type 3+ characters to search..."}),B&&$.length>=3&&t.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:J?t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[t.jsx(cn,{size:"small",color:"#ccb331"}),t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):fe.length>0?fe.map(j=>t.jsxs("button",{onClick:()=>Ke(j),className:"w-full text-left px-4 py-3 hover:bg-opacity-50",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("div",{children:j.companyName}),t.jsxs("div",{style:{color:"var(--color-text-gray)",fontSize:"12px"},children:[j.city,", ",j.state]})]},j.id)):t.jsx("div",{className:"px-4 py-3",children:t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No accounts found matching "',$,'"']})})}),$.length>0&&$.length<3&&t.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:"Type at least 3 characters to search"})]})]}),w&&t.jsxs("div",{className:"p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"},children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h4",{style:{color:"var(--color-gold)"},children:"Selected Fabricator"}),t.jsx("button",{onClick:()=>{U(void 0),O("")},className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Change"})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Company Name"}),t.jsx("input",{type:"text",value:w.companyName,onChange:j=>U({...w,companyName:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Address"}),t.jsx("input",{type:"text",value:w.address,onChange:j=>U({...w,address:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"City"}),t.jsx("input",{type:"text",value:w.city,onChange:j=>U({...w,city:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"State"}),t.jsx("input",{type:"text",value:w.state,onChange:j=>U({...w,state:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"ZIP"}),t.jsx("input",{type:"text",value:w.zip,onChange:j=>U({...w,zip:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Sales Person"}),t.jsx("input",{type:"text",value:F.salesPerson??Ee.salesPerson??"",onChange:j=>y({...F,salesPerson:j.target.value}),placeholder:"Sales person name",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 1"}),t.jsx("input",{type:"text",value:w.phone1,onChange:j=>U({...w,phone1:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 2"}),t.jsx("input",{type:"text",value:w.phone2||"",onChange:j=>U({...w,phone2:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Mobile"}),t.jsx("input",{type:"text",value:w.mobile||"",onChange:j=>U({...w,mobile:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Email"}),t.jsx("input",{type:"email",value:w.email,onChange:j=>U({...w,email:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]})]})]}),N===3&&t.jsxs("div",{className:"space-y-6",children:[s.draft?.isRevisit&&t.jsx("div",{className:"p-4 rounded-lg mb-4",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{style:{color:"var(--color-gold)",fontSize:"14px"},children:[t.jsx("strong",{children:"Re-visit Mode:"})," You can edit all materials. Use the ",t.jsx("strong",{children:"−"})," button when quantity is 1 to delete a material."]})}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Materials / Selection Sheet"}),t.jsxs("div",{className:"relative mt-4",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search Materials"}),t.jsx("input",{type:"text",value:_,onChange:j=>{K(j.target.value),xe(!0)},onFocus:()=>xe(!0),disabled:b,className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:b?"not-allowed":"text",opacity:b?.6:1},placeholder:b?"View only mode":"Search for materials..."}),!b&&te&&_.length>=3&&t.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:ee?t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[t.jsx(cn,{size:"small",color:"#ccb331"}),t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):Se.length>0?Se.map(j=>t.jsxs("button",{onClick:()=>jr(j.name),className:"w-full text-left px-4 py-3 hover:bg-opacity-50 flex items-center justify-between",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("span",{children:j.name}),t.jsx(dn,{size:16,style:{color:"var(--color-gold)"}})]},j.id)):t.jsx("div",{className:"px-4 py-3",children:t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No materials found matching "',_,'"']})})})]})]}),W.length>0&&t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"separate",borderSpacing:"0 10px"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{backgroundColor:"var(--color-background)"},children:[t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",width:"110px"},children:"Qty"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"160px"},children:"Name"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Sold As"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Finish"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"150px"},children:"Size (L x H)"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"90px"},children:"Lot"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Location"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Hold"})]})}),t.jsx("tbody",{children:W.map((j,R)=>{const ce=s.draft?.isRevisit&&R<(s.draft?.previousMaterialsCount||0);return t.jsxs("tr",{style:{backgroundColor:ce?"rgba(100, 100, 100, 0.2)":"var(--color-background)",borderRadius:"8px"},children:[t.jsx("td",{className:"px-5 py-5",style:{borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px"},children:t.jsxs("div",{className:"flex items-center gap-1.5",children:[t.jsx("button",{onClick:()=>{j.quantity===1?Ue(j.id):Ge(j.id,"quantity",j.quantity-1)},disabled:b,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:b?.5:1,cursor:b?"not-allowed":"pointer"},title:j.quantity===1?"Delete material":"Decrease quantity",children:t.jsx(wd,{size:16})}),t.jsx("span",{style:{color:"var(--color-text-white)",minWidth:"30px",textAlign:"center",fontSize:"15px",fontWeight:"500"},children:j.quantity}),t.jsx("button",{onClick:()=>Ge(j.id,"quantity",j.quantity+1),disabled:b,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:b?.5:1,cursor:b?"not-allowed":"pointer"},children:t.jsx(dn,{size:16})})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px"},children:j.name}),ce&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-gray)",border:"1px solid var(--color-border)"},children:"Previous"})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:j.soldAs||"",onChange:oe=>Ge(j.id,"soldAs",oe.target.value),disabled:b,placeholder:"Alternative",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("select",{value:j.finish||"Polished",onChange:oe=>Ge(j.id,"finish",oe.target.value),disabled:b,className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"pointer"},children:[t.jsx("option",{value:"Polished",children:"Polished"}),t.jsx("option",{value:"Honed",children:"Honed"}),t.jsx("option",{value:"Polished/Honed",children:"Polished/Honed"}),t.jsx("option",{value:"Leather",children:"Leather"}),t.jsx("option",{value:"Honed/Leather",children:"Honed/Leather"})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("input",{type:"text",value:j.size?.l||"",onChange:oe=>Ge(j.id,"size",{...j.size||{l:"",h:""},l:oe.target.value}),disabled:b,placeholder:"L",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:b?.6:1,cursor:b?"not-allowed":"text"}}),t.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"bold",fontSize:"16px"},children:"×"}),t.jsx("input",{type:"text",value:j.size?.h||"",onChange:oe=>Ge(j.id,"size",{...j.size||{l:"",h:""},h:oe.target.value}),disabled:b,placeholder:"H",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:j.lot||"",onChange:oe=>Ge(j.id,"lot",oe.target.value),disabled:b,placeholder:"Lot #",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:j.location||"",onChange:oe=>Ge(j.id,"location",oe.target.value),disabled:b,placeholder:"Location",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-2 mb-2 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:j.hold,onChange:oe=>Ge(j.id,"hold",oe.target.checked),disabled:b,className:"w-4 h-4 rounded",style:{accentColor:"var(--color-gold)",opacity:b?.5:1,cursor:b?"not-allowed":"pointer"}}),t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"14px"},children:"Hold"})]}),j.hold&&t.jsx("input",{type:"text",value:j.slabNumbers||"",onChange:oe=>Ge(j.id,"slabNumbers",oe.target.value),disabled:b,placeholder:"Slab #s",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})]})})]},j.id)})})]})}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Helped By"}),t.jsx("div",{className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:P})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Selection Sheet Number"}),t.jsx("input",{type:"text",value:S,onChange:j=>A(j.target.value),readOnly:s.draft?.isRevisit||b,placeholder:"e.g. 800, 801...",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:s.draft?.isRevisit||b?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:`1px solid ${s.draft?.isRevisit||b?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)",cursor:s.draft?.isRevisit||b?"not-allowed":"text",opacity:b?.6:1}}),s.draft?.isRevisit&&!b&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-gold)"},children:"Auto-generated from previous sheet"})]})]})]}),t.jsxs("div",{className:"flex gap-4 mt-8",children:[N>1&&t.jsx("button",{onClick:()=>H(N-1),className:"px-6 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),!b&&N<3?t.jsx("button",{onClick:()=>H(N+1),disabled:N===2&&!w,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:N===2&&!w?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:N===2&&!w?"not-allowed":"pointer"},children:"Next"}):b&&N<3?t.jsx("button",{onClick:()=>H(N+1),className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Next"}):b?null:t.jsx("button",{onClick:tr,disabled:!S||S.trim()===""||v,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:!S||S.trim()===""||v?"var(--color-border)":"var(--color-success)",color:"var(--color-background)",cursor:!S||S.trim()===""||v?"not-allowed":"pointer"},children:v?t.jsxs(t.Fragment,{children:[t.jsx(cn,{size:"small",color:"var(--color-background)"}),t.jsx("span",{children:"Submitting..."})]}):"Submit"})]}),b&&m&&N===3&&nr()&&t.jsx("div",{className:"flex gap-4 mt-4",children:t.jsx("button",{onClick:()=>{m(s),u()},className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Re-visit"})})]})}),Le&&t.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:()=>rr(null),children:[t.jsx("img",{src:Le,alt:"Enlarged material",style:{maxWidth:"90vw",maxHeight:"90vh",display:"block",borderRadius:"8px"},onClick:j=>j.stopPropagation()}),t.jsx("button",{onClick:()=>rr(null),style:{position:"absolute",top:"16px",right:"16px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",color:"white",fontSize:"22px",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}function Zh({username:s,onLogout:u,checkIns:i,onMarkAsHelped:c,onSaveDraft:m,onRevisit:h,onUpdateCurrentlyHelpedBy:b}){const[M,N]=g.useState("queue"),[H,F]=g.useState(null),[y,w]=g.useState(1),[U,W]=g.useState(""),[T,P]=g.useState(""),[q,S]=g.useState(""),[A,$]=g.useState(""),[O,_]=g.useState(""),[K,B]=g.useState("all"),L=10,te=i.filter(p=>p.status==="waiting"),xe=i.filter(p=>p.status==="helped"),Ce=xe.filter(p=>{if(U&&p.draft?.selectedFabricator&&!p.draft.selectedFabricator.companyName.toLowerCase().includes(U.toLowerCase())||T&&p.helpedTime&&p.helpedTime.toISOString().split("T")[0]!==T||q&&p.draft?.selectionSheetNumber&&!p.draft.selectionSheetNumber.toLowerCase().includes(q.toLowerCase())||A&&!`${p.firstName} ${p.lastName}`.toLowerCase().includes(A.toLowerCase())||O&&!p.phones.some(Q=>Q.toLowerCase().includes(O.toLowerCase())))return!1;if(K!=="all"){const v=p.draft?.isHold||!1;if(K==="yes"&&!v||K==="no"&&v)return!1}return!0}),re=[...Ce].sort((p,v)=>!p.helpedTime||!v.helpedTime?0:v.helpedTime.getTime()-p.helpedTime.getTime()),fe=re.slice((y-1)*L,y*L),ke=Math.ceil(re.length/L),Se=p=>{const Q=new Date().getTime()-p.getTime(),G=Math.floor(Q/6e4);if(G<1)return"Just now";if(G<60)return`${G} min`;const pe=Math.floor(G/60),ae=G%60;return`${pe}h ${ae}m`},je=p=>p.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),J=p=>p.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})+" "+p.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),le=(p,v)=>{m(p,v),v.step===3&&c(p)},ee=p=>{b(p.id,s),F(p)};return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-12 h-12 object-contain"}),t.jsx("h2",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("span",{style:{color:"var(--color-text-white)"},children:s}),t.jsxs("button",{className:"relative p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)"},children:[t.jsx(Wp,{size:20,style:{color:"var(--color-text-gray)"}}),te.length>0&&t.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:te.length})]}),t.jsxs("button",{onClick:u,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})]}),t.jsxs("div",{className:"flex gap-6 mt-6",children:[t.jsxs("button",{onClick:()=>N("queue"),className:"pb-3 px-2",style:{color:M==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:M==="queue"?"2px solid var(--color-gold)":"2px solid transparent"},children:["Queue ",te.length>0&&`(${te.length})`]}),t.jsx("button",{onClick:()=>N("history"),className:"pb-3 px-2",style:{color:M==="history"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:M==="history"?"2px solid var(--color-gold)":"2px solid transparent"},children:"History"})]})]})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8",children:[M==="queue"&&t.jsx("div",{children:t.jsx("div",{className:"space-y-3",children:te.length===0?t.jsx("div",{className:"text-center py-12",style:{color:"var(--color-text-gray)"},children:"No customers in queue"}):te.map(p=>t.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg transition-all hover:bg-opacity-80",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:p.firstName.charAt(0).toUpperCase()}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsxs("span",{className:"font-medium truncate",style:{color:"var(--color-text-white)"},children:[p.firstName," ",p.lastName]}),p.currentlyHelpedBy?t.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:["In Progress • ",p.currentlyHelpedBy]}):t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"New"}),p.partySize&&(p.partySize.adults>1||p.partySize.minors>0)&&t.jsxs("span",{className:"px-2 py-0.5 rounded text-xs flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:[p.partySize.adults," ",p.partySize.adults===1?"Adult":"Adults",p.partySize.minors>0&&`, ${p.partySize.minors} ${p.partySize.minors===1?"Minor":"Minors"}`]})]}),t.jsxs("div",{className:"flex items-center gap-4 text-xs",style:{color:"var(--color-text-gray)"},children:[t.jsxs("span",{children:["Checked in at ",je(p.checkInTime)]}),t.jsx("span",{children:"•"}),t.jsxs("span",{style:{color:"var(--color-gold)"},children:["Waiting ",Se(p.checkInTime)]})]})]}),t.jsx("button",{onClick:()=>ee(p),className:"flex-shrink-0 px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"View"})]},p.id))})}),M==="history"&&t.jsxs("div",{children:[t.jsxs("div",{className:"mb-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("h3",{style:{color:"var(--color-gold)",marginBottom:"16px"},children:"Filter History"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Customer Name"}),t.jsx("input",{type:"text",value:A,onChange:p=>{$(p.target.value),w(1)},placeholder:"Search by name...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone Number"}),t.jsx("input",{type:"text",value:O,onChange:p=>{_(p.target.value),w(1)},placeholder:"Search by phone...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Fabricator"}),t.jsx("input",{type:"text",value:U,onChange:p=>{W(p.target.value),w(1)},placeholder:"Search by fabricator...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Selection Sheet #"}),t.jsx("input",{type:"text",value:q,onChange:p=>{S(p.target.value),w(1)},placeholder:"Search by sheet #...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Date"}),t.jsx("input",{type:"date",value:T,onChange:p=>{P(p.target.value),w(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Hold Status"}),t.jsxs("select",{value:K,onChange:p=>{B(p.target.value),w(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Hold"}),t.jsx("option",{value:"no",children:"Not Hold"})]})]})]}),(A||O||U||q||T||K!=="all")&&t.jsx("button",{onClick:()=>{$(""),_(""),W(""),S(""),P(""),B("all"),w(1)},className:"mt-4 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear Filters"})]}),re.length===0?t.jsxs("div",{className:"text-center py-16",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"18px"},children:Ce.length===0&&xe.length>0?"No matching results":"No history yet"}),t.jsx("p",{style:{color:"var(--color-text-gray)",marginTop:"8px"},children:Ce.length===0&&xe.length>0?"Try adjusting your filters":"Helped customers will appear here"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{backgroundColor:"var(--color-background)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Sheet #"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Customer Name"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Phone Number"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Fabricator"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Check-in"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Helped At"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Hold"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"}})]})}),t.jsx("tbody",{children:fe.map((p,v)=>t.jsxs("tr",{style:{borderBottom:v<fe.length-1?"1px solid var(--color-border)":"none",backgroundColor:v%2===0?"transparent":"rgba(0, 0, 0, 0.2)"},children:[t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:p.draft?.selectionSheetNumber||"-"}),t.jsxs("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:[p.firstName," ",p.lastName]}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.phones[0]||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:J(p.checkInTime)}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.helpedTime?J(p.helpedTime):"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:p.draft?.isHold?"var(--color-gold)":"var(--color-text-gray)",fontSize:"14px",fontWeight:p.draft?.isHold?"600":"normal"},children:p.draft?.isHold?"Yes":"No"}),t.jsx("td",{className:"px-4 py-4",children:t.jsx("button",{onClick:()=>F(p),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:"View"})})]},p.id))})]})})}),ke>1&&t.jsxs("div",{className:"flex justify-center items-center gap-4 mt-8",children:[t.jsx("button",{onClick:()=>w(Math.max(1,y-1)),disabled:y===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:y===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:y===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:y===1?"not-allowed":"pointer"},children:"Previous"}),t.jsxs("span",{style:{color:"var(--color-text-white)"},children:["Page ",y," of ",ke]}),t.jsx("button",{onClick:()=>w(Math.min(ke,y+1)),disabled:y===ke,className:"px-4 py-2 rounded-lg",style:{backgroundColor:y===ke?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:y===ke?"var(--color-text-gray)":"var(--color-text-white)",cursor:y===ke?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),H&&t.jsx(Jh,{customer:H,onClose:()=>F(null),onSubmit:le,onMarkAsHelped:c,onRevisit:h,staffUsername:s,isViewOnly:H.status==="helped",allCheckIns:i})]})}function zd({customer:s,onClose:u,onComplete:i}){const[c,m]=g.useState([]),[h,b]=g.useState(!1),M=s.priced||!1;g.useEffect(()=>{if(s.draft?.materials){const F=s.draft.materials.map(y=>{const w=parseFloat(y.size?.l)||0,U=parseFloat(y.size?.h)||0,W=parseFloat(y.price||"0")||0,T=y.priceType||"per SFT";return{material:y.soldAs||y.name,quantity:y.quantity,finish:y.finish||"Polished",length:w,height:U,price:W,priceType:T}});m(F)}},[s]);const N=(F,y,w)=>{if(M)return;const U=[...c];U[F]={...U[F],[y]:w},m(U)},H=async()=>{if(!c.every(y=>y.price>0)&&!M){alert("Please enter prices for all materials");return}b(!0),setTimeout(()=>{console.log("Sending quote to fabricator:",s.draft?.selectedFabricator),console.log("Quote details:",{customer:`${s.firstName} ${s.lastName}`,selectionSheetNumber:s.draft?.selectionSheetNumber,materials:c.map(y=>({quantity:y.quantity,material:y.material,finish:y.finish,length:y.length,height:y.height,price:y.price,priceType:y.priceType}))}),alert(`Quote ${M?"resent":"sent"} successfully to ${s.draft?.selectedFabricator?.companyName||"fabricator"}!`),b(!1),M||i(s.id),u()},1500)};return t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-5xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[t.jsxs("div",{className:"sticky top-0 z-10 flex items-center justify-between p-6 border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-1",style:{color:"var(--color-gold)"},children:"Quote"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:[s.firstName," ",s.lastName," • Sheet #",s.draft?.selectionSheetNumber]})]}),t.jsx("button",{onClick:u,className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsxs("p",{style:{color:"var(--color-text-white)"},children:[s.firstName," ",s.lastName]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("p",{style:{color:"var(--color-text-white)"},children:s.draft?.selectedFabricator?.companyName||"Not assigned"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Materials & Pricing"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{borderBottom:"2px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:[t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"80px"},children:"Quantity"}),t.jsx("th",{className:"text-left p-3 text-sm font-semibold",style:{color:"var(--color-gold)"},children:"Material Name"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Finish"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Length (in)"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Height (in)"}),t.jsx("th",{className:"text-right p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"140px"},children:"Price"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Type"})]})}),t.jsx("tbody",{children:c.map((F,y)=>t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)"},children:[t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:F.quantity,onChange:w=>N(y,"quantity",parseFloat(w.target.value)||0),disabled:M,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:M?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:M?"not-allowed":"text"},min:"0"})}),t.jsx("td",{className:"p-3",style:{color:"var(--color-text-white)"},children:F.material}),t.jsx("td",{className:"p-3 text-center",style:{color:"var(--color-text-white)"},children:F.finish}),t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:F.length,onChange:w=>N(y,"length",parseFloat(w.target.value)||0),disabled:M,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:M?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:M?"not-allowed":"text"},min:"0",step:"0.1"})}),t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:F.height,onChange:w=>N(y,"height",parseFloat(w.target.value)||0),disabled:M,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:M?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:M?"not-allowed":"text"},min:"0",step:"0.1"})}),t.jsx("td",{className:"p-3 text-right",children:t.jsxs("div",{className:"flex items-center justify-end",children:[t.jsx("span",{style:{color:"var(--color-gold)",marginRight:"4px",fontSize:"16px",fontWeight:"600"},children:"$"}),t.jsx("input",{type:"number",value:F.price,onChange:w=>N(y,"price",parseFloat(w.target.value)||0),disabled:M,className:"w-full px-2 py-2 rounded text-right",style:{backgroundColor:M?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:M?"not-allowed":"text"},placeholder:"0.00",min:"0",step:"0.01"})]})}),t.jsx("td",{className:"p-3 text-center",children:t.jsxs("select",{value:F.priceType,onChange:w=>N(y,"priceType",w.target.value),disabled:M,className:"w-full px-2 py-2 rounded",style:{backgroundColor:M?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:M?"not-allowed":"pointer"},children:[t.jsx("option",{value:"per SFT",children:"per SFT"}),t.jsx("option",{value:"per Slab",children:"per Slab"})]})})]},y))})]})})]}),M&&t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(34, 197, 94, 0.1)",border:"1px solid #22c55e"},children:t.jsx("p",{className:"text-center",style:{color:"#22c55e"},children:"✓ This quote has been priced and sent. You can resend the email if needed."})}),t.jsxs("div",{className:"flex gap-3 pt-4",children:[t.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:M?"Close":"Cancel"}),t.jsxs("button",{onClick:H,disabled:h,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:h?.6:1},children:[t.jsx(lh,{size:20}),h?"Sending...":M?"Resend Quote":"Send Quote to Fabricator"]})]})]})]})})}function em({username:s,onLogout:u,checkIns:i,fabricators:c,onComplete:m,onResetHoldDate:h}){const[b,M]=g.useState(null),[N,H]=g.useState(""),[F,y]=g.useState(""),[w,U]=g.useState("all"),[W,T]=g.useState("all"),[P,q]=g.useState("all"),[S,A]=g.useState(!1),[$,O]=g.useState({}),[_,K]=g.useState("main"),[B,L]=g.useState({}),[te,xe]=g.useState({}),[Ce,re]=g.useState({}),[fe,ke]=g.useState(new Date().getFullYear()),[Se,je]=g.useState(new Date().getMonth()),[J,le]=g.useState(new Date().getFullYear()),[ee,p]=g.useState(new Date().getMonth()),[v,Q]=g.useState(new Date().getFullYear()),[G,pe]=g.useState(new Date().getMonth()),[ae,Pe]=g.useState(1),we=10,be=[2025,2026,2027,2028],Le=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rr=g.useMemo(()=>i.filter(D=>D.status==="helped"&&D.draft?.materials&&D.draft.materials.length>0),[i]),Fr=D=>{const de=new Date;return new Date(D).toDateString()===de.toDateString()},Or=D=>{const de=new Date,Te=new Date(D);return(de.getTime()-Te.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:Ke,holdsNotConvertedCheckIns:wr,ignoredCheckIns:jr}=g.useMemo(()=>{const D=[],de=[],Te=[];return rr.forEach(Me=>{const I=B[Me.id]||!1,he=Me.draft?.isHold||!1,_e=!$[Me.id],He=Or(Me.checkInTime);I?Te.push(Me):he&&_e&&He?de.push(Me):D.push(Me)}),{mainDashboardCheckIns:D,holdsNotConvertedCheckIns:de,ignoredCheckIns:Te}},[rr,$,B]),Ge=g.useMemo(()=>_==="holds-not-converted"?wr:_==="ignored"?jr:Ke,[_,Ke,wr,jr]),Ue=g.useMemo(()=>[...Ge.filter(de=>{const Te=`${de.firstName} ${de.lastName}`.toLowerCase().includes(N.toLowerCase())||de.phones?.some(He=>He.includes(N))||de.draft?.selectionSheetNumber?.includes(N),Me=!F||de.draft?.selectedFabricator?.id===F,I=w==="all"||w==="hold"&&de.draft?.isHold||w==="no-hold"&&!de.draft?.isHold,he=W==="all"||W==="priced"&&de.priced||W==="not-priced"&&!de.priced,_e=P==="all"||P==="yes"&&$[de.id]||P==="no"&&!$[de.id];return Te&&Me&&I&&he&&_e})].sort((de,Te)=>new Date(Te.checkInTime).getTime()-new Date(de.checkInTime).getTime()),[Ge,N,F,w,W,P,$]),tr=Math.ceil(Ue.length/we),nr=(ae-1)*we,Ee=nr+we,j=Ue.slice(nr,Ee);qr.useEffect(()=>{Pe(1)},[N,F,w,W,P,_]);const R=D=>{M(D)},ce=D=>{L({...B,[D]:!0})},oe=D=>{h&&h(D),re({...Ce,[D]:!0})},Oe=D=>{xe({...te,[D]:!te[D]})},yr=D=>new Date(D).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});g.useMemo(()=>{const D=new Set;return rr.forEach(Te=>{const Me=new Date(Te.checkInTime),I=`${Me.getFullYear()}-${String(Me.getMonth()+1).padStart(2,"0")}`;if(D.add(I),Te.pricedTime){const he=new Date(Te.pricedTime),_e=`${he.getFullYear()}-${String(he.getMonth()+1).padStart(2,"0")}`;D.add(_e)}}),Array.from(D).sort().reverse()},[rr]),g.useMemo(()=>{const D=new Date;return`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}`},[]),qr.useEffect(()=>{Se||je(new Date().getMonth()),ee||p(new Date().getMonth()),G||pe(new Date().getMonth())},[]);const Ae=(D,de,Te)=>{const Me=new Date(D);return Me.getMonth()===de&&Me.getFullYear()===Te},ur=g.useMemo(()=>({pendingPricing:Ke.filter(D=>!D.priced).length,pricedToday:Ke.filter(D=>D.priced&&D.pricedTime&&Fr(D.pricedTime)).length,onHold:Ke.filter(D=>D.draft?.isHold).length,onHoldForMonth:Ke.filter(D=>D.draft?.isHold&&Ae(D.checkInTime,ee,J)).length,pricedForMonth:Ke.filter(D=>D.priced&&D.pricedTime&&Ae(D.pricedTime,Se,fe)).length,convertedForMonth:Ke.filter(D=>$[D.id]&&Ae(D.checkInTime,G,v)).length}),[Ke,$,Se,fe,ee,J,G,v]);return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Pricing Dashboard"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),t.jsxs("button",{onClick:u,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[t.jsxs("div",{className:"flex gap-2 mb-6",children:[t.jsx("button",{onClick:()=>K("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:_==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:_==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:_==="main"?"600":"normal"},children:"Main Dashboard"}),t.jsxs("button",{onClick:()=>K("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:_==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:_==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:_==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",wr.length,")"]}),t.jsxs("button",{onClick:()=>K("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:_==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:_==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:_==="ignored"?"600":"normal"},children:["Ignored (",jr.length,")"]})]}),t.jsxs("div",{className:"mb-6 space-y-4",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Cd,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),t.jsx("input",{type:"text",value:N,onChange:D=>H(D.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("button",{onClick:()=>A(!S),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:S?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:S?"var(--color-background)":"var(--color-text-white)"},children:[t.jsx(Nd,{size:20}),"Filters"]})]}),S&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsxs("select",{value:F,onChange:D=>y(D.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Fabricators"}),c.map(D=>t.jsx("option",{value:D.id,children:D.companyName},D.id))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),t.jsxs("select",{value:w,onChange:D=>U(D.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"hold",children:"On Hold"}),t.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),t.jsxs("select",{value:W,onChange:D=>T(D.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"priced",children:"Priced"}),t.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),t.jsxs("select",{value:P,onChange:D=>q(D.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Converted"}),t.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),_==="main"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:ur.pendingPricing})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:ur.pricedToday})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:ur.onHold})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:ur.pricedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:Se,onChange:D=>je(parseInt(D.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Le.map((D,de)=>t.jsx("option",{value:de,children:D},de))}),t.jsx("select",{value:fe,onChange:D=>ke(parseInt(D.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(D=>t.jsx("option",{value:D,children:D},D))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:ur.onHoldForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:ee,onChange:D=>p(parseInt(D.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Le.map((D,de)=>t.jsx("option",{value:de,children:D},de))}),t.jsx("select",{value:J,onChange:D=>le(parseInt(D.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(D=>t.jsx("option",{value:D,children:D},D))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:ur.convertedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:G,onChange:D=>pe(parseInt(D.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Le.map((D,de)=>t.jsx("option",{value:de,children:D},de))}),t.jsx("select",{value:v,onChange:D=>Q(parseInt(D.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(D=>t.jsx("option",{value:D,children:D},D))})]})]})]}),_==="holds-not-converted"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:wr.filter(D=>D.draft?.isHold).length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:wr.filter(D=>!$[D.id]).length})]})]}),_==="ignored"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:jr.length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:jr.filter(D=>D.draft?.isHold).length})]})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),_==="ignored"&&t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),t.jsx("tbody",{children:j.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:_==="ignored"?9:8,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):j.map(D=>{const de=$[D.id]||!1,Te=te[D.id]||!1,Me=Ce[D.id]||!1;let I="transparent";return _==="ignored"&&Te?I="rgba(34, 197, 94, 0.2)":Me?I="rgba(239, 68, 68, 0.2)":de?I="rgba(212, 167, 54, 0.15)":D.priced&&(I="rgba(34, 197, 94, 0.1)"),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:I},children:[t.jsxs("td",{className:"p-4",children:[t.jsxs("div",{style:{color:"var(--color-text-white)"},children:[D.firstName," ",D.lastName]}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:D.phones?.[0]})]}),t.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:D.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:D.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:D.draft?.materials?.length||0}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-2",children:[D.priced&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),D.draft?.isHold&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),t.jsx("td",{className:"p-4 text-center",children:t.jsxs("select",{value:de?"Yes":"No",onChange:he=>O({...$,[D.id]:he.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:de?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:de?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:de?"600":"normal",fontSize:"13px"},children:[t.jsx("option",{value:"No",children:"No"}),t.jsx("option",{value:"Yes",children:"Yes"})]})}),_==="ignored"&&t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:D.draft?.materials&&D.draft.materials.length>0?t.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(D.draft.materials.map(he=>he.lot).filter(Boolean))).map((he,_e)=>t.jsx("span",{className:"text-sm",children:he},_e))}):"-"}),t.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:yr(D.checkInTime)}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center",children:[t.jsx("button",{onClick:()=>R(D),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View Pricing",children:t.jsx(vs,{size:18})}),_==="holds-not-converted"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>oe(D.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:t.jsx(jd,{size:18})}),t.jsx("button",{onClick:()=>ce(D.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:t.jsx(ct,{size:18})})]}),_==="ignored"&&t.jsx("button",{onClick:()=>Oe(D.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:Te?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:Te?"Unmark as Known":"Mark as Known",children:t.jsx(yd,{size:18})})]})})]},D.id)})})]})}),tr>1&&t.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",nr+1," to ",Math.min(Ee,Ue.length)," of ",Ue.length," customers"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>Pe(ae-1),disabled:ae===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:ae===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:ae===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:ae===1?"not-allowed":"pointer"},children:"Previous"}),t.jsx("div",{className:"flex gap-1",children:Array.from({length:tr},(D,de)=>de+1).map(D=>t.jsx("button",{onClick:()=>Pe(D),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:ae===D?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:ae===D?"var(--color-background)":"var(--color-text-white)",fontWeight:ae===D?"600":"normal",cursor:"pointer"},children:D},D))}),t.jsx("button",{onClick:()=>Pe(ae+1),disabled:ae===tr,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:ae===tr?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:ae===tr?"var(--color-text-gray)":"var(--color-text-white)",cursor:ae===tr?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),b&&t.jsx(zd,{customer:b,onClose:()=>M(null),onComplete:m})]})}function rm({username:s,onLogout:u,checkIns:i,fabricators:c,onComplete:m,onResetHoldDate:h,onPriceUpdate:b}){const[M,N]=g.useState(null),[H,F]=g.useState(""),[y,w]=g.useState(""),[U,W]=g.useState(""),[T,P]=g.useState("all"),[q,S]=g.useState("all"),[A,$]=g.useState("all"),[O,_]=g.useState(!1),[K,B]=g.useState({}),[L,te]=g.useState("main"),[xe,Ce]=g.useState({}),[re,fe]=g.useState({}),[ke,Se]=g.useState({}),[je,J]=g.useState(new Date().getFullYear()),[le,ee]=g.useState(new Date().getMonth()),[p,v]=g.useState(new Date().getFullYear()),[Q,G]=g.useState(new Date().getMonth()),[pe,ae]=g.useState(new Date().getFullYear()),[Pe,we]=g.useState(new Date().getMonth()),[be,Le]=g.useState(1),rr=10,Fr=[2025,2026,2027,2028],Or=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ke=g.useMemo(()=>i.filter(I=>I.status==="helped"&&I.draft?.materials&&I.draft.materials.length>0),[i]),wr=g.useMemo(()=>{const I=new Set;return Ke.forEach(he=>{he.draft?.salesPerson&&I.add(he.draft.salesPerson)}),Array.from(I).sort()},[Ke]),jr=I=>{const he=new Date;return new Date(I).toDateString()===he.toDateString()},Ge=I=>{const he=new Date,_e=new Date(I);return(he.getTime()-_e.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:Ue,holdsNotConvertedCheckIns:tr,ignoredCheckIns:nr}=g.useMemo(()=>{const I=[],he=[],_e=[];return Ke.forEach(He=>{const mr=xe[He.id]||!1,br=He.draft?.isHold||!1,Yr=!K[He.id],Cr=Ge(He.checkInTime);mr?_e.push(He):br&&Yr&&Cr?he.push(He):I.push(He)}),{mainDashboardCheckIns:I,holdsNotConvertedCheckIns:he,ignoredCheckIns:_e}},[Ke,K,xe]),Ee=g.useMemo(()=>L==="holds-not-converted"?tr:L==="ignored"?nr:Ue,[L,Ue,tr,nr]),j=g.useMemo(()=>[...Ee.filter(he=>{const _e=`${he.firstName} ${he.lastName}`.toLowerCase().includes(H.toLowerCase())||he.phones?.some(Vr=>Vr.includes(H))||he.draft?.selectionSheetNumber?.includes(H),He=!y||he.draft?.selectedFabricator?.id===y,mr=!U||he.draft?.salesPerson===U,br=T==="all"||T==="hold"&&he.draft?.isHold||T==="no-hold"&&!he.draft?.isHold,Yr=q==="all"||q==="priced"&&he.priced||q==="not-priced"&&!he.priced,Cr=A==="all"||A==="yes"&&K[he.id]||A==="no"&&!K[he.id];return _e&&He&&mr&&br&&Yr&&Cr})].sort((he,_e)=>new Date(_e.checkInTime).getTime()-new Date(he.checkInTime).getTime()),[Ee,H,y,U,T,q,A,K]),R=Math.ceil(j.length/rr),ce=(be-1)*rr,oe=ce+rr,Oe=j.slice(ce,oe);qr.useEffect(()=>{Le(1)},[H,y,U,T,q,A,L]);const yr=I=>{N(I)},Ae=I=>{Ce({...xe,[I]:!0})},ur=I=>{h&&h(I),Se({...ke,[I]:!0})},D=I=>{fe({...re,[I]:!re[I]})},de=I=>new Date(I).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}),Te=(I,he,_e)=>{const He=new Date(I);return He.getMonth()===he&&He.getFullYear()===_e},Me=g.useMemo(()=>{const I=Ue.filter(Ie=>!Ie.priced).length,he=Ue.filter(Ie=>Ie.priced&&Ie.pricedTime&&jr(Ie.pricedTime)).length,_e=Ue.filter(Ie=>Ie.draft?.isHold).length,He=Ue.filter(Ie=>Ie.draft?.isHold&&Te(Ie.checkInTime,Q,p)).length,mr=Ue.filter(Ie=>Ie.priced&&Ie.pricedTime&&Te(Ie.pricedTime,le,je)).length,br=Ue.filter(Ie=>K[Ie.id]&&Te(Ie.checkInTime,Pe,pe)).length,Yr=Ue.filter(Ie=>K[Ie.id]).length,Cr=U?Ue.filter(Ie=>Ie.draft?.salesPerson===U).length:Ue.length,Vr=U?Ue.filter(Ie=>Ie.draft?.salesPerson===U&&K[Ie.id]).length:Ue.filter(Ie=>K[Ie.id]).length,pn=Cr>0?(Vr/Cr*100).toFixed(1):"0";return{pendingPricing:I,pricedToday:he,onHold:_e,onHoldForMonth:He,pricedForMonth:mr,convertedForMonth:br,totalConverted:Yr,totalCustomers:Cr,convertedCustomers:Vr,conversionRate:pn}},[Ue,K,le,je,Q,p,Pe,pe,U]);return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Analysis Dashboard"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),t.jsxs("button",{onClick:u,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[t.jsxs("div",{className:"flex gap-2 mb-6",children:[t.jsx("button",{onClick:()=>te("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:L==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:L==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:L==="main"?"600":"normal"},children:"Main Dashboard"}),t.jsxs("button",{onClick:()=>te("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:L==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:L==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:L==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",tr.length,")"]}),t.jsxs("button",{onClick:()=>te("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:L==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:L==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:L==="ignored"?"600":"normal"},children:["Ignored (",nr.length,")"]})]}),t.jsxs("div",{className:"mb-6 space-y-4",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Cd,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),t.jsx("input",{type:"text",value:H,onChange:I=>F(I.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("button",{onClick:()=>_(!O),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:O?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:O?"var(--color-background)":"var(--color-text-white)"},children:[t.jsx(Nd,{size:20}),"Filters"]})]}),O&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),t.jsxs("select",{value:U,onChange:I=>W(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Sales People"}),wr.map(I=>t.jsx("option",{value:I,children:I},I))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsxs("select",{value:y,onChange:I=>w(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Fabricators"}),c.map(I=>t.jsx("option",{value:I.id,children:I.companyName},I.id))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),t.jsxs("select",{value:T,onChange:I=>P(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"hold",children:"On Hold"}),t.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),t.jsxs("select",{value:q,onChange:I=>S(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"priced",children:"Priced"}),t.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),t.jsxs("select",{value:A,onChange:I=>$(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Converted"}),t.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),L==="main"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:[U&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[t.jsxs("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:["Sales Person: ",U]}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Me.totalCustomers}),t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:"Total Customers"})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Me.convertedCustomers}),t.jsxs("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:[Me.conversionRate,"% Rate"]})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Me.pendingPricing})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Me.pricedToday})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Me.onHold})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Me.totalConverted})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Me.onHoldForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:Q,onChange:I=>G(parseInt(I.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Or.map((I,he)=>t.jsx("option",{value:he,children:I},he))}),t.jsx("select",{value:p,onChange:I=>v(parseInt(I.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Fr.map(I=>t.jsx("option",{value:I,children:I},I))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Me.convertedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:Pe,onChange:I=>we(parseInt(I.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Or.map((I,he)=>t.jsx("option",{value:he,children:I},he))}),t.jsx("select",{value:pe,onChange:I=>ae(parseInt(I.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Fr.map(I=>t.jsx("option",{value:I,children:I},I))})]})]})]}),L==="holds-not-converted"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:tr.filter(I=>I.draft?.isHold).length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:tr.filter(I=>!K[I.id]).length})]})]}),L==="ignored"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:nr.length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:nr.filter(I=>I.draft?.isHold).length})]})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),L==="ignored"&&t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),t.jsx("tbody",{children:Oe.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:L==="ignored"?10:9,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):Oe.map(I=>{const he=K[I.id]||!1,_e=re[I.id]||!1,He=ke[I.id]||!1;let mr="transparent";return L==="ignored"&&_e?mr="rgba(34, 197, 94, 0.2)":He?mr="rgba(239, 68, 68, 0.2)":he?mr="rgba(212, 167, 54, 0.15)":I.priced&&(mr="rgba(34, 197, 94, 0.1)"),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:mr},children:[t.jsxs("td",{className:"p-4",children:[t.jsxs("div",{style:{color:"var(--color-text-white)"},children:[I.firstName," ",I.lastName]}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:I.phones?.[0]})]}),t.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:I.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:I.draft?.salesPerson||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:I.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:I.draft?.materials?.length||0}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-2",children:[I.priced&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),I.draft?.isHold&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),t.jsx("td",{className:"p-4 text-center",children:t.jsxs("select",{value:he?"Yes":"No",onChange:br=>B({...K,[I.id]:br.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:he?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:he?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:he?"600":"normal",fontSize:"13px"},children:[t.jsx("option",{value:"No",children:"No"}),t.jsx("option",{value:"Yes",children:"Yes"})]})}),L==="ignored"&&t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:I.draft?.materials&&I.draft.materials.length>0?t.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(I.draft.materials.map(br=>br.lot).filter(Boolean))).map((br,Yr)=>t.jsx("span",{className:"text-sm",children:br},Yr))}):"-"}),t.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:de(I.checkInTime)}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-1",children:[t.jsx("button",{onClick:()=>yr(I),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View/Edit Pricing",children:t.jsx(vs,{size:18})}),L==="holds-not-converted"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>ur(I.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:t.jsx(jd,{size:18})}),t.jsx("button",{onClick:()=>Ae(I.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:t.jsx(ct,{size:18})})]}),L==="ignored"&&t.jsx("button",{onClick:()=>D(I.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:_e?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:_e?"Unmark as Known":"Mark as Known",children:t.jsx(yd,{size:18})})]})})]},I.id)})})]})}),R>1&&t.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",ce+1," to ",Math.min(oe,j.length)," of ",j.length," customers"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>Le(be-1),disabled:be===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:be===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:be===1?"not-allowed":"pointer"},children:"Previous"}),t.jsx("div",{className:"flex gap-1",children:Array.from({length:R},(I,he)=>he+1).map(I=>t.jsx("button",{onClick:()=>Le(I),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:be===I?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===I?"var(--color-background)":"var(--color-text-white)",fontWeight:be===I?"600":"normal",cursor:"pointer"},children:I},I))}),t.jsx("button",{onClick:()=>Le(be+1),disabled:be===R,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:be===R?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===R?"var(--color-text-gray)":"var(--color-text-white)",cursor:be===R?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),M&&t.jsx(zd,{customer:M,onClose:()=>N(null),onComplete:I=>{b&&b(I,s),m(I)},isAnalysisMode:!0,analysisUser:s})]})}function tm({onCustomerFound:s,onBack:u,checkIns:i}){const[c,m]=g.useState(""),[h,b]=g.useState(!1),[M,N]=g.useState(""),H=async()=>{if(!c.trim()){N("Please enter a phone number or email");return}b(!0),N("");try{const y=c.trim().toLowerCase(),w=i.find(U=>{const W=U.phones?.some(P=>P.replace(/\D/g,"").includes(y.replace(/\D/g,""))),T=U.emails?.some(P=>P.toLowerCase().includes(y));return W||T});w?s(w):N('No previous check-in found with this information. Please use "Check-In" for first-time visit.')}catch{N('No previous check-in found with this information. Please use "Check-In" for first-time visit.')}finally{b(!1)}},F=y=>{y.key==="Enter"&&H()};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-3 text-3xl",style:{color:"var(--color-gold)"},children:"Welcome Back!"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Enter your mobile number or email that you used during check-in"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone or Email"}),t.jsx("input",{type:"text",value:c,onChange:y=>{m(y.target.value),N("")},onKeyPress:F,placeholder:"(602) 555-1234 or email@example.com",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${M?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},disabled:h}),M&&t.jsx("p",{className:"mt-2 text-sm",style:{color:"#EF4444"},children:M})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("button",{onClick:H,disabled:h,className:"w-full py-3 rounded-lg",style:{backgroundColor:h?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:h?"not-allowed":"pointer",opacity:h?.6:1},children:h?"Searching...":"Find My Information"}),t.jsx("button",{onClick:u,disabled:h,className:"w-full py-3 rounded-lg",style:{backgroundColor:"transparent",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:h?"not-allowed":"pointer",opacity:h?.6:1},children:"Back to Home"})]})]})]})})}function om({customerData:s,onNext:u,onBack:i}){const[c,m]=g.useState({firstName:s.firstName||"",lastName:s.lastName||"",street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),[h,b]=g.useState({}),M=P=>P.split(" ").map(q=>q.charAt(0).toUpperCase()+q.slice(1).toLowerCase()).join(" "),N=()=>{const P={};c.firstName.trim()||(P.firstName="First name is required"),c.lastName.trim()||(P.lastName="Last name is required"),c.street.trim()||(P.street="Street address is required"),c.city.trim()||(P.city="City is required"),c.state.trim()||(P.state="State is required"),c.zip.trim()||(P.zip="ZIP code is required");const q=c.phones.filter(A=>A.trim());q.length===0?P.phones="At least one phone number is required":q.forEach((A,$)=>{A.replace(/\D/g,"").length!==10&&(P[`phone${$}`]="Phone must be 10 digits")});const S=c.emails.filter(A=>A.trim());return S.length===0?P.emails="At least one email is required":S.forEach((A,$)=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A)||(P[`email${$}`]="Invalid email format")}),b(P),Object.keys(P).length===0},H=P=>{P.preventDefault(),N()&&u(c)},F=()=>{m({...c,phones:[...c.phones,""]})},y=P=>{c.phones.length>1&&m({...c,phones:c.phones.filter((q,S)=>S!==P)})},w=(P,q)=>{const S=[...c.phones];S[P]=q,m({...c,phones:S})},U=()=>{m({...c,emails:[...c.emails,""]})},W=P=>{c.emails.length>1&&m({...c,emails:c.emails.filter((q,S)=>S!==P)})},T=(P,q)=>{const S=[...c.emails];S[P]=q,m({...c,emails:S})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Your Information"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please review and update your details if needed"}),t.jsxs("form",{onSubmit:H,className:"space-y-4 sm:space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"First Name *"}),t.jsx("input",{type:"text",value:c.firstName,onChange:P=>m({...c,firstName:M(P.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.firstName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.firstName&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.firstName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Last Name *"}),t.jsx("input",{type:"text",value:c.lastName,onChange:P=>m({...c,lastName:M(P.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.lastName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.lastName&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.lastName})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address *"}),t.jsx("input",{type:"text",value:c.street,onChange:P=>m({...c,street:M(P.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.street?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.street&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.street})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:c.suiteUnit,onChange:P=>m({...c,suiteUnit:P.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City *"}),t.jsx("input",{type:"text",value:c.city,onChange:P=>m({...c,city:M(P.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.city?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.city&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.city})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State *"}),t.jsx("input",{type:"text",value:c.state,onChange:P=>m({...c,state:P.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.state?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.state&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.state})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP Code *"}),t.jsx("input",{type:"text",value:c.zip,onChange:P=>m({...c,zip:P.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.zip?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.zip&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.zip})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country *"}),t.jsxs("select",{value:c.country,onChange:P=>m({...c,country:P.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Phone Number(s) *"}),t.jsx("button",{type:"button",onClick:F,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Phone"})]}),c.phones.map((P,q)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{type:"tel",value:P,onChange:S=>w(q,S.target.value),placeholder:"(602) 555-1234",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h[`phone${q}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),c.phones.length>1&&t.jsx("button",{type:"button",onClick:()=>y(q),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},q)),h.phones&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.phones})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Email Address(es) *"}),t.jsx("button",{type:"button",onClick:U,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Email"})]}),c.emails.map((P,q)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{type:"email",value:P,onChange:S=>T(q,S.target.value),placeholder:"email@example.com",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h[`email${q}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),c.emails.length>1&&t.jsx("button",{type:"button",onClick:()=>W(q),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},q)),h.emails&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.emails})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}const nm=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function lm({referralSources:s,onNext:u,onBack:i}){const[c,m]=g.useState(s.map(y=>y.type)),[h,b]=g.useState(s.reduce((y,w)=>(y[w.type]={name:w.name||"",phone:w.phone||""},y),{})),M=y=>y.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" "),N=y=>{if(c.includes(y)){m(c.filter(U=>U!==y));const w={...h};delete w[y],b(w)}else m([...c,y])},H=(y,w,U)=>{b({...h,[y]:{...h[y],name:w==="name"?U:h[y]?.name||"",phone:w==="phone"?U:h[y]?.phone||""}})},F=y=>{if(y.preventDefault(),c.length===0){alert("Please select at least one referral source");return}for(const U of c)if(!h[U]?.name?.trim()){alert(`Please enter a name for ${U}`);return}const w=c.map(U=>({type:U,name:h[U]?.name,phone:h[U]?.phone}));u(w)};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Referral Sources"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Update or add new referral sources"}),t.jsxs("form",{onSubmit:F,className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{className:"space-y-4",children:nm.map(y=>t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:c.includes(y)?"var(--color-background)":"transparent",border:`1px solid ${c.includes(y)?"var(--color-gold)":"var(--color-border)"}`},children:[t.jsx("input",{type:"checkbox",checked:c.includes(y),onChange:()=>N(y),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:y})]}),c.includes(y)&&t.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[t.jsx("input",{type:"text",value:h[y]?.name||"",onChange:w=>H(y,"name",M(w.target.value)),placeholder:"Name (required)",required:!0,className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("input",{type:"tel",value:h[y]?.phone||"",onChange:w=>H(y,"phone",w.target.value),placeholder:"Phone (optional)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]},y))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function am({customerName:s,onSubmit:u,onBack:i}){const[c,m]=g.useState("party"),[h,b]=g.useState({adults:1,minors:0}),[M,N]=g.useState(!1),[H,F]=g.useState(""),[y,w]=g.useState([]),[U,W]=g.useState(0),[T,P]=g.useState([]),[q,S]=g.useState(0),[A,$]=g.useState(""),O=g.useRef(null),[_,K]=g.useState(!1),[B,L]=g.useState(!1);g.useEffect(()=>{const v=O.current;if(v){const Q=v.getContext("2d");Q&&(Q.strokeStyle="#D4A736",Q.lineWidth=2,Q.lineCap="round")}},[c,U]);const te=(v,Q)=>{const G=Q.getBoundingClientRect(),pe=Q.width/G.width,ae=Q.height/G.height,Pe="touches"in v?v.touches[0].clientX:v.clientX,we="touches"in v?v.touches[0].clientY:v.clientY;return{x:(Pe-G.left)*pe,y:(we-G.top)*ae}},xe=v=>{K(!0);const Q=O.current;if(!Q)return;const G=Q.getContext("2d");if(!G)return;const{x:pe,y:ae}=te(v,Q);G.beginPath(),G.moveTo(pe,ae)},Ce=v=>{if(!_)return;const Q=O.current;if(!Q)return;const G=Q.getContext("2d");if(!G)return;const{x:pe,y:ae}=te(v,Q);G.lineTo(pe,ae),G.stroke()},re=()=>{K(!1),L(!0)},fe=()=>{const v=O.current;if(!v)return;const Q=v.getContext("2d");Q&&(Q.clearRect(0,0,v.width,v.height),L(!1))},ke=()=>{const v=O.current;return v?v.toDataURL("image/png"):""},Se=()=>{m("main")},je=()=>{if(!M){alert("Please agree to the terms before continuing");return}if(!B){alert("Please provide your signature");return}const v=ke();F(v),fe(),h.adults>1?(m("additional"),W(0)):h.minors>0?(m("minors"),S(0)):ee(v,[],[])},J=()=>{const v=document.getElementById("additional-name")?.value;if(!v||!v.trim()){alert("Please enter a name");return}if(!B){alert("Please provide a signature");return}const Q=ke(),G=[...y];G[U]={name:v.trim(),signature:Q},w(G),fe(),U<h.adults-2?W(U+1):h.minors>0?(m("minors"),S(0)):ee(H,G,[])},le=()=>{if(!A.trim()){alert("Please enter the minor's name");return}const v=[...T];v[q]=A.trim(),P(v),$(""),q<h.minors-1?S(q+1):ee(H,y,v)},ee=(v,Q,G)=>{const pe=[{name:s,signature:v,isMain:!0,isMinor:!1},...Q.map(ae=>({name:ae.name,signature:ae.signature,isMain:!1,isMinor:!1})),...G.map(ae=>({name:ae,signature:"",isMain:!1,isMinor:!0}))];u({partySize:h,signature:v,visitors:pe})},p=()=>{c==="party"?i():c==="main"?m("party"):c==="additional"?U===0?m("main"):W(U-1):c==="minors"&&(q===0?h.adults>1?(m("additional"),W(h.adults-2)):m("main"):S(q-1))};return c==="party"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Party Size"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"How many people are in your party?"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Number of Adults (including you)"}),t.jsx("input",{type:"number",min:"1",max:"20",value:h.adults,onChange:v=>b({...h,adults:parseInt(v.target.value)||1}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Number of Minors (under 18)"}),t.jsx("input",{type:"number",min:"0",max:"20",value:h.minors,onChange:v=>b({...h,minors:parseInt(v.target.value)||0}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:Se,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})}):c==="main"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)",overflowY:"auto"},children:t.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Liability Waiver"}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please read and sign below"}),t.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{className:"rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",maxHeight:"300px",overflowY:"auto",padding:"16px",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:t.jsx("p",{style:{whiteSpace:"pre-wrap"},children:`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

I am signing this Waiver and Release, Indemnity Agreement, and Informed Consent (hereinafter "Waiver & Release") in anticipation of my entering the warehouse of Reliance Granite and Marble Corporation ("Reliance" or "we" or "our" or "us") located at 50 Boright Avenue, Kenilworth, NJ 07033 ("Premises").

I understand that Reliance is located in a commercial area, and that the Premises contain a wholesale warehouse. Reliance is involved in receiving, handling, dispatching, storing, and selling natural stone tiles and slabs in various shapes, sizes, weights, colors, and thicknesses, which necessarily involves heavy traffic and activities in movement of workers, materials, material-handling equipment, including but not limited to, forklifts, overhead cranes, pallet lift jacks, pickups, trailers, flatbed trucks and other heavy and dangerous equipment. Stones are heavy and may have sharp or jagged surfaces and edges. The nature of this business and scope of operations involve use of tools, including but not limited to, crowbars, hammers, wood-cutting saws and steel cables. As a result, debris such as wood bark, nails, plastic sheets, broken boxes, and various additional sharp, heavy, slippery, etc. objects may lie on the floor of the Premises between cleaning cycles. Other equipment, such as steel ropes, cables, ladders, etc. may be leaning, hanging, and/or on the Premises floor in the normal course of work. As result of the foregoing, customers entering the Premises are required to wear hard hats and to be aware of and vigilant with respect to their surroundings. By signing below, I acknowledge that Reliance personnel provided me with a hard hat and gloves. I acknowledge that if I am not wearing a hard hat and/or gloves, it is because I have read the terms of this document and assumed all risks associated with entering the Premises without them, including but not limited to the following provisions, all of which apply regardless of whether I am wearing a hard hat, gloves, or other protective gear, garments, footwear, or equipment.

I understand that my presence on the Premises poses unique risks of injury, and even death, of which I am fully aware. I agree: (1) not to move around the premises alone/unattended and to ask for help/assistance with materials/products and moving about the Premises; (2) to be vigilant, careful, alert, and aware of ongoing activities and tripping hazards while walking in the Premises and between aisles; (3) to not use any mobile electronic devices in the Premises, including but not limited to talking on a mobile device, texting, emailing, internet searching, etc., as I understand that doing so will prevent me from being fully aware of my surroundings at all times; (4) that children under the age of 15 are strictly prohibited in the warehouse and will have to wait in the office; if such children are brought into the warehouse without our permission, the child(ren)'s parents, guardians, and/or caretakers are solely responsible for their safety; (5) to avoid moving into confined areas and areas with insufficient or dim lighting; (6) not to attempt to lift or move any stones, tiles or objects; (7) not to touch any machines, equipment, materials, etc. in the Premises; (7) to keep a safe distance of at least fifty (50) feet from any moving materials and equipment in the Premises; (8) to obey all rules and instructions explained to me by Reliance staff; and (9) to ask us questions and for any additional safety information.

My signature on this document evidences my understanding and agreement that any bodily injury, death, or loss of personal property, damages and expenses are my sole responsibility.

I further agree and understand that I have read this Waiver & Release carefully and I am aware that, by signing it, I will be waiving and releasing all claims for personal injuries and property damage that I sustain while on the Premises. I acknowledge that Reliance has made no warranty, express or implied, regarding the condition of the Premises or the materials or equipment thereat, or the physical or mental condition, competency or skills of any other person at the Premises or elsewhere.

I have had ample opportunity to review this document and ask questions about all of the risks presented herein. Notwithstanding these risks, both disclosed and undisclosed, I fully assume these risks and the inherently dangerous nature of the Premises, and it is with my full and complete knowledge of these risks that, to the full extent permitted by New Jersey law, I agree to hold harmless, release, defend, and indemnify Reliance and to waive and relinquish all claims, demands, costs, losses, expenses or compensation of whatever nature for any loss, damage or injuries to persons and property sustained by me, any children in my care, my heirs, personal representatives, successors, assigns, and all other persons I may have or which in the future may accrue to the above referenced individuals or entities against Reliance, its owners, officers, principals, agents, successors, assigns, heirs, employees, volunteers, and independent contractors.

This Waiver & Release covers any and all liability, claims, demands, causes of action, or damages of any kind related to, arising from, or in any way connected with or believed to be caused by: (a) Reliance or its employees; (b) any other individuals merely present at Premises; or (c) me at the Premises. This Waiver & Release covers any and all activities connected to or associated with my presence at the Premises, all without limitation. I further agree not to sue, claim against, attach the property of, or prosecute Reliance for any such injury, death, damages or losses, whether or not such injury or death was caused in whole or in part by my negligence, the negligence of Reliance, or the act or omission of any party whatsoever.

This contract shall be legally binding upon me, my spouse, my heirs, my estate, assigns, legal guardians, and my personal representatives. I agree that this Waiver & Release is intended to be as broad and inclusive as permitted by the laws of the State of New Jersey, and that if any portion of this Waiver & Release is held invalid, the other provisions shall continue in full legal force and effect. This Waiver & Release is in effect from the date of signing and shall remain in force as long as I am on the Premises, including any future visits to the Premises. The terms and provisions of this Waiver & Release and any dispute arising in connection with it shall be governed by and construed in accordance with New Jersey law.

I, as a parent/guardian/supervisor/caretaker of an individual 15 years of age or older, sign this Waiver & Release on behalf of said minor, understanding that this Waiver & Release shall be deemed binding to the fullest extent permitted by law with respect to said minor. The consent of one parent or legal guardian shall be deemed the consent of all persons legally responsible for this individual, even if only one such person signs this Waiver & Release.

I am not under the influence of any medication, alcohol, or controlled substance that would impair my judgment to enter into this Waiver & Release or comply with its terms while on the Premises.

Electronic signatures (e.g., via DocuSign, PDF, or their equivalents) of this document shall have the same force and effect as originals.

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`})}),t.jsx("div",{children:t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:M,onChange:v=>N(v.target.checked),className:"w-5 h-5",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{style:{color:"var(--color-text-white)"},children:"I have read and agree to the terms above"})]})}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Your Signature"}),t.jsx("button",{type:"button",onClick:fe,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:O,width:600,height:200,onMouseDown:xe,onMouseMove:Ce,onMouseUp:re,onMouseLeave:re,onTouchStart:xe,onTouchMove:Ce,onTouchEnd:re,className:"w-full border rounded-lg cursor-crosshair",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:je,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:h.adults>1||h.minors>0?"Next":"Submit"})]})]})]})}):c==="additional"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Visitor ",U+2," of ",h.adults]}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Additional adult signature required"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{id:"additional-name",type:"text",defaultValue:y[U]?.name||"",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter full name"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Signature"}),t.jsx("button",{type:"button",onClick:fe,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:O,width:600,height:200,onMouseDown:xe,onMouseMove:Ce,onMouseUp:re,onMouseLeave:re,onTouchStart:xe,onTouchMove:Ce,onTouchEnd:re,className:"w-full border rounded-lg cursor-crosshair",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:J,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:U<h.adults-2||h.minors>0?"Next":"Submit"})]})]})]})}):c==="minors"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Minor ",q+1," of ",h.minors]}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide the minor's name"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{type:"text",value:A,onChange:v=>$(v.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter full name"})]}),t.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"No signature required (under 18)"}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:le,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:q<h.minors-1?"Next":"Submit"})]})]})]})}):null}function sm({customerName:s,onReturnHome:u}){const[i,c]=g.useState(15),m=g.useRef(u);return g.useEffect(()=>{m.current=u},[u]),g.useEffect(()=>{const h=setInterval(()=>{c(b=>b<=1?(clearInterval(h),setTimeout(()=>m.current(),0),0):b-1)},1e3);return()=>clearInterval(h)},[]),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx(xs,{size:80,style:{color:"var(--color-success)"}})}),t.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You for Revisiting, ",s,"!"]}),t.jsx("p",{className:"mb-8",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),t.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",t.jsx("span",{style:{color:"var(--color-gold)"},children:i})," seconds..."]}),t.jsx("button",{onClick:u,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function im({onLogin:s}){const[u,i]=g.useState(""),[c,m]=g.useState(""),[h,b]=g.useState(""),M=N=>{N.preventDefault(),b(""),u==="staff2"&&c==="reliance"?s(u):b("Invalid credentials. Use staff2/reliance")};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-2 text-3xl",style:{color:"var(--color-gold)"},children:"Staff2 Login"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Queue Management"}),t.jsxs("form",{onSubmit:M,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Username"}),t.jsx("input",{type:"text",value:u,onChange:N=>{i(N.target.value),b("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter username"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Password"}),t.jsx("input",{type:"password",value:c,onChange:N=>{m(N.target.value),b("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter password"})]}),h&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid #EF4444"},children:t.jsx("p",{style:{color:"#EF4444",fontSize:"14px"},children:h})}),t.jsx("button",{type:"submit",className:"w-full py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Login"})]})]})})}function cm({customer:s,currentUsername:u,onView:i,onDone:c,onAttend:m}){const h=(s.partySize?.adults||0)+(s.partySize?.minors||0),b=s.isRevisit===!0,M=s.currentlyHelpedBy||null,N=M===u,H=M&&!N,F=y=>{if(!y)return"";const w=new Date(y);return isNaN(w.getTime())?"":w.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:H?"1px solid rgba(212, 167, 54, 0.5)":"1px solid var(--color-border)"},children:t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:s.firstName?.charAt(0).toUpperCase()||"?"}),t.jsxs("div",{className:"flex flex-col gap-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[t.jsxs("p",{className:"font-medium whitespace-nowrap",style:{color:"var(--color-text-white)"},children:[s.firstName," ",s.lastName]}),t.jsx("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:s.phones?.[0]||"No phone"}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap",style:{backgroundColor:b?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:b?"var(--color-gold)":"#3B82F6"},children:b?"Revisiting":"First Time"}),t.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["👥 ",h," visitor",h!==1?"s":""]}),s.checkInTime&&t.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["🕐 ",F(s.checkInTime)]})]}),M&&t.jsx("p",{className:"text-xs",style:{color:N?"#22C55E":"var(--color-gold)"},children:N?"✓ You are attending":`Being attended by ${M}`})]})]}),t.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[t.jsx("button",{onClick:()=>!N&&m(s.id),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:N?{backgroundColor:"rgba(34, 197, 94, 0.15)",border:"1px solid #22C55E",color:"#22C55E"}:H?{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-border)",color:"var(--color-gold)",cursor:"default"}:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:N||H?"Attending":"Attend"}),t.jsx("button",{onClick:()=>i(s),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"View"}),t.jsx("button",{onClick:()=>c(s.id),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Done"})]})]})})}function dm({customer:s,onClose:u,onSave:i}){const[c,m]=g.useState({firstName:s.firstName||"",lastName:s.lastName||"",street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),h=O=>O.split(" ").map(_=>_.charAt(0).toUpperCase()+_.slice(1).toLowerCase()).join(" "),b=()=>{m({...c,phones:[...c.phones,""]})},M=O=>{c.phones.length>1&&m({...c,phones:c.phones.filter((_,K)=>K!==O)})},N=(O,_)=>{const K=[...c.phones];K[O]=_,m({...c,phones:K})},H=()=>{m({...c,emails:[...c.emails,""]})},F=O=>{c.emails.length>1&&m({...c,emails:c.emails.filter((_,K)=>K!==O)})},y=(O,_)=>{const K=[...c.emails];K[O]=_,m({...c,emails:K})},[w,U]=g.useState([]),[W,T]=g.useState(!1),[P,q]=g.useState(!1),[S,A]=g.useState(null);g.useEffect(()=>{const O=s.phones?.[0];O&&(q(!0),fetch(`/api/images/customer/${encodeURIComponent(O)}`).then(_=>_.json()).then(_=>{_.success&&Array.isArray(_.data)&&U(_.data.filter(K=>K.images.length>0))}).catch(()=>{}).finally(()=>q(!1)))},[s.phones]);const $=()=>{if(!c.firstName.trim()||!c.lastName.trim()){alert("First name and last name are required");return}i(s.id,c)};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsxs("div",{className:"flex justify-between items-start mb-6",children:[t.jsxs("div",{children:[t.jsxs("h2",{className:"text-2xl",style:{color:"var(--color-gold)"},children:[s.firstName," ",s.lastName]}),t.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:s.isRevisit?"Revisiting Customer":"First Time Customer"})]}),t.jsx("button",{onClick:u,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Customer Information"}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"First Name *"}),t.jsx("input",{type:"text",value:c.firstName,onChange:O=>m({...c,firstName:h(O.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Last Name *"}),t.jsx("input",{type:"text",value:c.lastName,onChange:O=>m({...c,lastName:h(O.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Street Address"}),t.jsx("input",{type:"text",value:c.street,onChange:O=>m({...c,street:h(O.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:c.suiteUnit,onChange:O=>m({...c,suiteUnit:O.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"City"}),t.jsx("input",{type:"text",value:c.city,onChange:O=>m({...c,city:h(O.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"State"}),t.jsx("input",{type:"text",value:c.state,onChange:O=>m({...c,state:O.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"ZIP"}),t.jsx("input",{type:"text",value:c.zip,onChange:O=>m({...c,zip:O.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Phones"}),c.phones.map((O,_)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:O,onChange:K=>N(_,K.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("button",{onClick:()=>M(_),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:16})})]},_)),t.jsx("button",{onClick:b,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Phone"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Emails"}),c.emails.map((O,_)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:O,onChange:K=>y(_,K.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("button",{onClick:()=>F(_),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:16})})]},_)),t.jsx("button",{onClick:H,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Email"})]})]}),s.referralSources&&s.referralSources.length>0&&t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Referral Information"}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:s.referralSources.map((O,_)=>t.jsxs("div",{className:"mb-3 last:mb-0",children:[t.jsxs("p",{style:{color:"var(--color-gold)"},children:["• ",O.type]}),O.name&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Name: ",O.name]}),O.phone&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Phone: ",O.phone]})]},_))})]}),s.partySize&&t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Party Information"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Adults"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.adults})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Minors"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.minors})]})]}),s.visitors&&s.visitors.length>0&&t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Visitors & Signatures"}),t.jsx("div",{className:"space-y-4",children:s.visitors.map((O,_)=>t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:O.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{className:"font-medium",style:{color:"var(--color-text-white)"},children:O.name}),O.isMain&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),O.isMinor&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor (No signature required)"})]}),O.signature&&!O.isMinor&&t.jsxs("div",{children:[t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-text-gray)"},children:"Signature:"}),t.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"white",border:"1px solid var(--color-border)",maxWidth:"400px"},children:t.jsx("img",{src:O.signature,alt:`${O.name} signature`,style:{width:"100%",height:"auto",maxHeight:"150px",objectFit:"contain"}})})]})]},_))})]})]}),t.jsxs("div",{className:"mb-8 rounded-lg overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[t.jsxs("button",{onClick:()=>T(O=>!O),className:"w-full flex items-center justify-between px-4 py-3",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-white)",border:"none",cursor:"pointer"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ys,{size:16,style:{color:"var(--color-gold)"}}),t.jsx("span",{children:"Uploaded Images"}),!P&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212,167,54,0.15)",color:"var(--color-gold)"},children:w.reduce((O,_)=>O+_.images.length,0)})]}),W?t.jsx(kd,{size:16,style:{color:"var(--color-text-gray)"}}):t.jsx(bd,{size:16,style:{color:"var(--color-text-gray)"}})]}),W&&t.jsx("div",{className:"p-4",style:{borderTop:"1px solid var(--color-border)"},children:P?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Loading…"}):w.length===0?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No images uploaded."}):t.jsx("div",{className:"space-y-5",children:w.map(O=>t.jsxs("div",{children:[w.length>1&&t.jsxs("p",{className:"mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:["Visit: ",new Date(O.checkInTime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),t.jsx("div",{className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))"},children:O.images.map(_=>t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{aspectRatio:"1",border:"1px solid var(--color-border)",cursor:"pointer"},onClick:()=>A(_.image_url),children:[t.jsx("img",{src:_.image_url,alt:"Material",className:"w-full h-full object-cover"}),t.jsxs("div",{className:"absolute bottom-0 right-0 px-1.5 py-0.5 text-xs font-semibold rounded-tl-lg",style:{backgroundColor:"rgba(0,0,0,0.75)",color:"var(--color-gold)"},children:["×",_.quantity]})]},_.id))})]},O.checkInId))})})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Cancel"}),t.jsx("button",{onClick:$,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Save Changes"})]})]})}),S&&t.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:()=>A(null),children:[t.jsx("img",{src:S,alt:"Enlarged material",style:{maxWidth:"90vw",maxHeight:"90vh",display:"block",borderRadius:"8px"},onClick:O=>O.stopPropagation()}),t.jsx("button",{onClick:()=>A(null),style:{position:"absolute",top:"16px",right:"16px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",color:"white",fontSize:"22px",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}function um({username:s,onLogout:u,checkIns:i,onMarkAsDone:c}){const[m,h]=g.useState("queue"),[b,M]=g.useState([]),[N,H]=g.useState([]),[F,y]=g.useState(null),[w,U]=g.useState(!1),[W,T]=g.useState(1),[P,q]=g.useState(1),S=15,[A,$]=g.useState(new Date().getMonth()+1),[O,_]=g.useState(new Date().getDate()),[K,B]=g.useState(new Date().getFullYear()),[L,te]=g.useState(i);g.useEffect(()=>{const p=L.filter(v=>v.status==="waiting").sort((v,Q)=>new Date(v.checkInTime).getTime()-new Date(Q.checkInTime).getTime());M(p)},[L]),g.useEffect(()=>{if(m==="history"){const p=L.filter(v=>{if(v.status!=="done"&&v.status!=="helped")return!1;const Q=new Date(v.helpedTime||v.checkInTime);return Q.getMonth()+1===A&&Q.getDate()===O&&Q.getFullYear()===K});H(p)}},[m,A,O,K,L]),g.useEffect(()=>{fetch("/api/check-ins").then(v=>v.json()).then(v=>{v.success&&Array.isArray(v.data)&&te(v.data)}).catch(()=>{});const p=new EventSource("/api/check-ins/events");return p.onmessage=v=>{try{const Q=JSON.parse(v.data);Q.type==="update"&&Array.isArray(Q.data)&&te(Q.data)}catch{}},p.onerror=()=>{},()=>p.close()},[]);const xe=p=>{y(p),U(!0)},Ce=async p=>{const v=new Date().toISOString();te(Q=>Q.map(G=>G.id===p?{...G,status:"done",helpedTime:v}:G));try{await fetch(`/api/check-ins/${p}/done`,{method:"PATCH"})}catch{te(Q=>Q.map(G=>G.id===p?{...G,status:"waiting",helpedTime:null}:G))}c(p)},re=async p=>{try{const Q=await(await fetch(`/api/check-ins/${p}/claim`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({helpedBy:s})})).json();Q.claimed?te(G=>G.map(pe=>pe.id===p?{...pe,currentlyHelpedBy:s}:pe)):Q.claimedBy&&te(G=>G.map(pe=>pe.id===p?{...pe,currentlyHelpedBy:Q.claimedBy}:pe))}catch{}},fe=async(p,v)=>{te(Q=>Q.map(G=>G.id===p?{...G,...v}:G)),U(!1)},ke=N.length,Se=N.filter(p=>!p.isRevisit).length,je=N.filter(p=>p.isRevisit).length,J=["January","February","March","April","May","June","July","August","September","October","November","December"],le=Array.from({length:31},(p,v)=>v+1),ee=[2024,2025,2026,2027];return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("header",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsx("span",{className:"text-xl font-medium",style:{color:"var(--color-text-white)"},children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]}),t.jsxs("button",{onClick:u,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[t.jsx(un,{size:18}),"Logout"]})]})]})}),t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"flex px-6",children:[t.jsxs("button",{onClick:()=>h("queue"),className:"px-6 py-4 font-medium border-b-2",style:{color:m==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderColor:m==="queue"?"var(--color-gold)":"transparent"},children:["Queue (",b.length,")"]}),t.jsx("button",{onClick:()=>h("history"),className:"px-6 py-4 font-medium border-b-2",style:{color:m==="history"?"var(--color-gold)":"var(--color-text-gray)",borderColor:m==="history"?"var(--color-gold)":"transparent"},children:"History"})]})}),t.jsx("div",{className:"p-6",children:m==="queue"?t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-6",style:{color:"var(--color-text-white)"},children:"Customer Queue"}),b.length===0?t.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No customers in queue"})}):t.jsx("div",{className:"space-y-4",children:b.slice((W-1)*S,W*S).map(p=>t.jsx(cm,{customer:p,currentUsername:s,onView:xe,onDone:Ce,onAttend:re},p.id))}),b.length>S&&t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>T(W-1),disabled:W===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),t.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",W," of ",Math.ceil(b.length/S)]}),t.jsx("button",{onClick:()=>T(W+1),disabled:W*S>=b.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]}):t.jsxs("div",{children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("h2",{className:"text-2xl mb-4",style:{color:"var(--color-text-white)"},children:"Daily Visitors"}),t.jsxs("div",{className:"flex flex-wrap gap-4 mb-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Month"}),t.jsx("select",{value:A,onChange:p=>$(parseInt(p.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:J.map((p,v)=>t.jsx("option",{value:v+1,children:p},v))})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Day"}),t.jsx("select",{value:O,onChange:p=>_(parseInt(p.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:le.map(p=>t.jsx("option",{value:p,children:p},p))})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Year"}),t.jsx("select",{value:K,onChange:p=>B(parseInt(p.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:ee.map(p=>t.jsx("option",{value:p,children:p},p))})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Visitors"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:ke})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"New Customers"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"#3B82F6"},children:Se})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Revisits"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:je})]})]})]}),N.length===0?t.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No visitors for selected date"})}):t.jsx("div",{className:"space-y-4",children:N.slice((P-1)*S,P*S).map(p=>t.jsx("div",{className:"p-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},onClick:()=>xe(p),children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:p.firstName?.charAt(0).toUpperCase()||"?"}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsxs("p",{className:"font-medium",style:{color:"var(--color-text-white)"},children:[p.firstName," ",p.lastName]}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:p.isRevisit?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:p.isRevisit?"var(--color-gold)":"#3B82F6"},children:p.isRevisit?"Revisiting":"First Time"})]}),t.jsx("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:p.phones?.[0]||"No phone"})]})]}),t.jsx("div",{className:"text-right",children:t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["👥 ",(p.partySize?.adults||0)+(p.partySize?.minors||0)," visitors"]})})]})},p.id))}),N.length>S&&t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>q(P-1),disabled:P===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),t.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",P," of ",Math.ceil(N.length/S)]}),t.jsx("button",{onClick:()=>q(P+1),disabled:P*S>=N.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]})}),w&&F&&t.jsx(dm,{customer:F,onClose:()=>{U(!1),y(null)},onSave:fe})]})}const an=15;function pm({customerName:s,checkInId:u,authToken:i,onDone:c}){const[m,h]=g.useState([]),[b,M]=g.useState({}),[N,H]=g.useState(!1),[F,y]=g.useState(""),w=g.useRef(null),U=g.useRef({});g.useEffect(()=>{fetch(`/api/images/check-in/${u}`,{headers:{Authorization:`Bearer ${i}`}}).then(S=>S.json()).then(S=>{if(S.success&&Array.isArray(S.data)){h(S.data);const A={};S.data.forEach($=>{A[$.id]=$.quantity}),M(A)}}).catch(()=>{})},[u,i]);const W=async S=>{const A=Array.from(S.target.files||[]);if(!A.length)return;const $=an-m.length,O=A.slice(0,$);if(O.length===0){y(`You've reached the maximum of ${an} images.`),w.current&&(w.current.value="");return}y(A.length>O.length?`Only ${O.length} image(s) added — ${an} image maximum.`:""),H(!0);const _=new FormData;O.forEach(K=>_.append("images",K)),_.append("quantities",JSON.stringify(O.map(()=>1)));try{const K=await fetch("/api/images/upload",{method:"POST",headers:{Authorization:`Bearer ${i}`},body:_}),B=await K.json();if(!K.ok)y(B.error||"Upload failed. Please try again.");else{const L=B.data;h(te=>[...te,...L]),M(te=>{const xe={...te};return L.forEach(Ce=>{xe[Ce.id]=Ce.quantity}),xe})}}catch{y("Upload failed. Please check your connection.")}finally{H(!1),w.current&&(w.current.value="")}},T=g.useCallback((S,A)=>{M($=>{const O=$[S]??1,_=Math.max(1,Math.min(99,O+A));return _===O?$:(U.current[S]&&clearTimeout(U.current[S]),U.current[S]=setTimeout(async()=>{try{await fetch(`/api/images/${S}/quantity`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({quantity:_})})}catch{}},600),{...$,[S]:_})})},[i]),P=async S=>{h(A=>A.filter($=>$.id!==S)),M(A=>{const $={...A};return delete $[S],$});try{await fetch(`/api/images/${S}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}})}catch{}},q=m.length>=an;return t.jsx("div",{className:"min-h-screen p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[t.jsxs("div",{className:"mb-8 text-center",children:[t.jsxs("h1",{style:{color:"var(--color-gold)"},children:["Welcome, ",s,"!"]}),t.jsx("p",{className:"mt-2",style:{color:"var(--color-text-gray)"},children:"Upload photos of materials you're interested in (optional)"})]}),t.jsxs("div",{className:"mb-4 text-center",children:[t.jsx("input",{ref:w,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:W,disabled:N||q}),t.jsxs("button",{onClick:()=>w.current?.click(),disabled:N||q,className:"px-6 py-3 rounded-lg font-semibold",style:{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"8px",whiteSpace:"nowrap",backgroundColor:q?"var(--color-border)":"var(--color-gold)",color:q?"var(--color-text-gray)":"var(--color-background)",cursor:q?"not-allowed":"pointer"},children:[t.jsx(mh,{size:20}),N?"Uploading…":"Add Photos"]})]}),t.jsxs("p",{className:"mb-4 text-center",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:[m.length," / ",an," images"]}),F&&t.jsx("div",{className:"mb-4 p-3 rounded-lg",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:F})}),m.length>0&&t.jsx("div",{className:"space-y-3 mb-8",children:m.map(S=>t.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("img",{src:S.image_url,alt:"Uploaded material",className:"rounded object-cover flex-shrink-0",style:{width:120,height:120}}),t.jsx("div",{className:"flex-1"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>T(S.id,-1),className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:t.jsx(wd,{size:14})}),t.jsx("span",{className:"w-8 text-center",style:{color:"var(--color-text-white)",fontWeight:600},children:b[S.id]??S.quantity}),t.jsx("button",{onClick:()=>T(S.id,1),className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:t.jsx(dn,{size:14})})]}),t.jsx("button",{onClick:()=>P(S.id),className:"w-8 h-8 rounded-full flex items-center justify-center ml-2",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)",color:"var(--color-error)"},children:t.jsx(ct,{size:16})})]},S.id))}),m.length===0&&!N&&t.jsxs("div",{className:"mb-8 py-12 text-center rounded-lg",style:{border:"2px dashed var(--color-border)"},children:[t.jsx(ys,{size:48,className:"mx-auto mb-3",style:{color:"var(--color-text-gray)"}}),t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No photos uploaded yet"})]}),t.jsx("button",{onClick:c,disabled:N,className:"w-full py-4 rounded-lg font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:N?.7:1},children:"Done"})]})})}function hm({checkInId:s,authToken:u,onDone:i}){const[c,m]=g.useState(0),[h,b]=g.useState(0),[M,N]=g.useState(""),[H,F]=g.useState(!1),[y,w]=g.useState(!1),[U,W]=g.useState(15),T=g.useRef(i);g.useEffect(()=>{T.current=i},[i]),g.useEffect(()=>{if(!y)return;const q=setInterval(()=>{W(S=>S<=1?(clearInterval(q),setTimeout(()=>T.current(),0),0):S-1)},1e3);return()=>clearInterval(q)},[y]);const P=async q=>{if(q){w(!0);return}if(c!==0){F(!0);try{await fetch("/api/survey",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({starRating:c,comment:M.trim()||void 0})})}catch{}finally{F(!1),w(!0)}}};return y?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx(xs,{size:72,className:"mx-auto mb-6",style:{color:"var(--color-success)"}}),t.jsx("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:"Thank You!"}),t.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"We appreciate your feedback."}),t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:["Returning to home screen in"," ",t.jsx("span",{style:{color:"var(--color-gold)"},children:U})," seconds…"]}),t.jsx("button",{onClick:()=>T.current(),className:"mt-6 px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return Home"})]})}):t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("h1",{className:"text-center mb-2",style:{color:"var(--color-gold)"},children:"How was your experience?"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Your feedback helps us improve."}),t.jsx("div",{className:"flex justify-center gap-3 mb-8",children:[1,2,3,4,5].map(q=>{const S=q<=(h||c);return t.jsx("button",{onClick:()=>m(q),onMouseEnter:()=>b(q),onMouseLeave:()=>b(0),className:"p-2 rounded-lg transition-transform",style:{background:"none",border:"none",transform:h===q?"scale(1.15)":"scale(1)",cursor:"pointer"},"aria-label":`${q} star${q!==1?"s":""}`,children:t.jsx(wl,{size:48,fill:S?"var(--color-gold)":"none",style:{color:S?"var(--color-gold)":"var(--color-border)"}})},q)})}),t.jsxs("div",{className:"mb-8",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Any additional feedback?"}),t.jsx("textarea",{value:M,onChange:q=>N(q.target.value),rows:4,placeholder:"Optional — share your thoughts…",className:"w-full px-4 py-3 rounded-lg resize-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsx("button",{onClick:()=>P(!1),disabled:H||c===0,className:"w-full py-4 rounded-lg mb-4 font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:H||c===0?.5:1,cursor:c===0?"not-allowed":"pointer"},children:H?"Submitting…":"Submit"}),t.jsx("div",{className:"text-center",children:t.jsx("button",{onClick:()=>P(!0),disabled:H,style:{color:"var(--color-text-gray)",background:"none",border:"none",cursor:"pointer",fontSize:"14px",textDecoration:"underline"},children:"Skip"})})]})})}function mm({rating:s}){return t.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(u=>t.jsx(wl,{size:16,fill:u<=s?"var(--color-gold)":"none",style:{color:u<=s?"var(--color-gold)":"var(--color-border)"}},u))})}function fm({onLogout:s}){const[u,i]=g.useState([]),[c,m]=g.useState(null),[h,b]=g.useState(1),[M,N]=g.useState(""),[H,F]=g.useState(""),[y,w]=g.useState(!1),[U,W]=g.useState(""),T=g.useCallback(async(A,$,O)=>{w(!0),W("");try{const _=new URLSearchParams({page:String(A)});$&&_.set("startDate",$),O&&_.set("endDate",O);const K=await fetch(`/api/survey/responses?${_}`),B=await K.json();K.ok?(i(B.data),m(B.meta)):W(B.error||"Failed to load responses.")}catch{W("Failed to load responses. Please check your connection.")}finally{w(!1)}},[]);g.useEffect(()=>{T(h,M,H)},[h,T]);const P=()=>{b(1),T(1,M,H)},q=()=>{N(""),F(""),b(1),T(1,"","")},S=c?Math.max(...[1,2,3,4,5].map(A=>c.distribution[A]??0),1):1;return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("header",{style:{backgroundColor:"var(--color-card)",borderBottom:"1px solid var(--color-border)",padding:"16px 24px"},children:t.jsxs("div",{className:"max-w-6xl mx-auto flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h2",{style:{color:"var(--color-gold)",margin:0},children:"Customer Ratings"}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",margin:0},children:"Survey responses"})]})]}),t.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[t.jsx(un,{size:16}),"Logout"]})]})}),t.jsxs("div",{className:"max-w-6xl mx-auto p-6 space-y-6",children:[c&&t.jsxs("div",{className:"grid gap-4",style:{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"},children:[t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:8},children:"Average Rating"}),t.jsxs("div",{className:"flex items-end gap-2",children:[t.jsx("span",{style:{color:"var(--color-gold)",fontSize:"40px",fontWeight:700,lineHeight:1},children:c.averageRating.toFixed(1)}),t.jsx(wl,{size:24,fill:"var(--color-gold)",style:{color:"var(--color-gold)",marginBottom:4}})]}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginTop:4},children:"out of 5"})]}),t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:8},children:"Total Responses"}),t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"40px",fontWeight:700,lineHeight:1},children:c.total}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginTop:4},children:"submissions"})]}),t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",gridColumn:"span 2"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:12},children:"Rating Distribution"}),t.jsx("div",{className:"space-y-2",children:[5,4,3,2,1].map(A=>{const $=c.distribution[A]??0,O=c.total>0?$/c.total*100:0,_=S>0?$/S*100:0;return t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",style:{width:80},children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"13px",width:12,textAlign:"right"},children:A}),t.jsx(wl,{size:12,fill:"var(--color-gold)",style:{color:"var(--color-gold)"}})]}),t.jsx("div",{className:"flex-1 rounded-full overflow-hidden",style:{height:8,backgroundColor:"var(--color-background)"},children:t.jsx("div",{className:"h-full rounded-full",style:{width:`${_}%`,backgroundColor:"var(--color-gold)",transition:"width 0.3s ease"}})}),t.jsxs("span",{style:{color:"var(--color-text-gray)",fontSize:"12px",width:60,textAlign:"right"},children:[$," (",O.toFixed(0),"%)"]})]},A)})})]})]}),t.jsxs("div",{className:"p-4 rounded-xl flex flex-wrap items-end gap-4",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1",style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"From"}),t.jsx("input",{type:"date",value:M,onChange:A=>N(A.target.value),className:"px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",colorScheme:"dark"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1",style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"To"}),t.jsx("input",{type:"date",value:H,onChange:A=>F(A.target.value),className:"px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",colorScheme:"dark"}})]}),t.jsx("button",{onClick:P,className:"px-5 py-2 rounded-lg font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Apply"}),(M||H)&&t.jsx("button",{onClick:q,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),U&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{style:{color:"var(--color-error)"},children:U})}),t.jsx("div",{className:"rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsx("tr",{style:{backgroundColor:"var(--color-card)",borderBottom:"1px solid var(--color-border)"},children:["Date","Customer","Rating","Comment"].map(A=>t.jsx("th",{className:"text-left px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"13px",fontWeight:600},children:A},A))})}),t.jsx("tbody",{children:y?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"px-4 py-12 text-center",style:{color:"var(--color-text-gray)"},children:"Loading…"})}):u.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"px-4 py-12 text-center",style:{color:"var(--color-text-gray)"},children:"No survey responses found."})}):u.map((A,$)=>t.jsxs("tr",{style:{backgroundColor:$%2===0?"var(--color-background)":"var(--color-card)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"14px",whiteSpace:"nowrap"},children:new Date(A.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-white)",fontSize:"14px"},children:A.customerName}),t.jsx("td",{className:"px-4 py-3",children:t.jsx(mm,{rating:A.starRating})}),t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"14px",maxWidth:400},children:A.comment||t.jsx("span",{style:{fontStyle:"italic",opacity:.5},children:"No comment"})})]},A.id))})]})}),c&&c.totalPages>1&&t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Page ",c.page," of ",c.totalPages," · ",c.total," total"]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:()=>b(A=>Math.max(1,A-1)),disabled:h<=1,className:"flex items-center gap-1 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:h<=1?"var(--color-text-gray)":"var(--color-text-white)",cursor:h<=1?"not-allowed":"pointer",opacity:h<=1?.5:1},children:[t.jsx(Vp,{size:16})," Prev"]}),t.jsxs("button",{onClick:()=>b(A=>Math.min(c.totalPages,A+1)),disabled:h>=c.totalPages,className:"flex items-center gap-1 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:h>=c.totalPages?"var(--color-text-gray)":"var(--color-text-white)",cursor:h>=c.totalPages?"not-allowed":"pointer",opacity:h>=c.totalPages?.5:1},children:["Next ",t.jsx(Xp,{size:16})]})]})]})]})]})}function gm(s){const u=s.materials||[],i=u.length>0||s.selectionSheetNumber||s.fabricator||s.draftStep>0;return{id:s.id,isRevisit:s.isRevisit||!1,firstName:s.firstName,lastName:s.lastName,street:s.street,suiteUnit:s.suiteUnit||"",city:s.city,state:s.state,zip:s.zip,country:s.country,phones:s.phones||[],emails:s.emails||[],referralSources:s.referralSources||[],signature:s.signature||"",checkInTime:new Date(s.checkInTime),helpedTime:s.helpedTime?new Date(s.helpedTime):void 0,status:s.status,currentlyHelpedBy:s.currentlyHelpedBy||void 0,partySize:s.partySize||{adults:1,minors:0},visitors:s.visitors||[],draft:i?{step:s.status==="helped"?3:s.draftStep||0,editedCustomerData:{},materials:u,selectedFabricator:s.fabricator||void 0,helpedBy:s.helpedBy||void 0,selectionSheetNumber:s.selectionSheetNumber||"",isHold:u.some(c=>c.hold)}:void 0}}function xm(){const[s,u]=g.useState(()=>{const R=localStorage.getItem("staff2Session");if(R)try{const{expiry:ce}=JSON.parse(R);if(Date.now()<ce)return"staff2-dashboard"}catch{}return"home"}),[i,c]=g.useState({}),[m,h]=g.useState([]),[b,M]=g.useState(""),[N,H]=g.useState({adults:1,minors:0}),[F,y]=g.useState(!1),[w,U]=g.useState(null),[W,T]=g.useState([]),[P,q]=g.useState(0),[S,A]=g.useState([]),[$,O]=g.useState(!1),[_,K]=g.useState(null),[B,L]=g.useState(()=>{const R=localStorage.getItem("staff2Session");if(R)try{const{username:ce,expiry:oe}=JSON.parse(R);if(Date.now()<oe)return ce;localStorage.removeItem("staff2Session")}catch{localStorage.removeItem("staff2Session")}return""}),[te,xe]=g.useState(null);g.useEffect(()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(R=>xe({lat:R.coords.latitude,lng:R.coords.longitude}),()=>{})},[]);const[Ce,re]=g.useState(null),[fe,ke]=g.useState(null);g.useEffect(()=>{fetch("/api/check-ins").then(R=>R.json()).then(R=>{R.success&&Array.isArray(R.data)&&h(R.data.map(gm))}).catch(R=>console.error("Failed to load check-ins:",R))},[]);const Se=R=>{c({...i,...R}),u("customer-step2")},je=R=>{c({...i,...R}),u("customer-step3a")},J=R=>{H(R),u("customer-step3b")},le=R=>{console.log("=== STEP 3B NEXT ==="),console.log("Signature data received:",{hasSignature:!!R.signature,signatureLength:R.signature?.length,signaturePreview:R.signature?.substring(0,50),hasEsignConsent:!!R.esignConsentTimestamp,sessionId:R.sessionId,deviceType:R.deviceInfo?.deviceType}),U(R),N.adults>1?(q(0),T([]),u("customer-step3c")):N.minors>0?u("customer-step3d"):Q(void 0,void 0,R)},ee=R=>{const ce=[...W];ce[P]=R,T(ce);const oe=N.adults-2;P<oe?q(P+1):N.minors>0?u("customer-step3d"):Q(void 0,ce)},p=()=>{P===0?u("customer-step3b"):q(P-1)},v=R=>{console.log("=== STEP 3D SUBMIT ==="),console.log("Received names:",R),console.log("Names length:",R.length),Q(R)},Q=async(R,ce,oe)=>{if($)return;O(!0);const Oe=R!==void 0?R:S,yr=ce!==void 0?ce:W,Ae=oe!==void 0?oe:w,ur=[{name:`${i.firstName} ${i.lastName}`,signature:Ae?.signature||"",isMain:!0,isMinor:!1},...yr.map(de=>({name:de.name,signature:de.signature,isMain:!1,isMinor:!1})),...Oe.map(de=>({name:de,signature:"",isMain:!1,isMinor:!0}))],D={firstName:i.firstName,lastName:i.lastName,street:i.street,suiteUnit:i.suiteUnit||"",city:i.city,state:i.state,zip:i.zip,country:i.country,phones:i.phones,emails:i.emails,referralSources:i.referralSources||[],signature:Ae?.signature||"",partySize:N,visitors:ur,checkInTime:new Date().toISOString(),esignConsentTimestamp:Ae?.esignConsentTimestamp,...te&&{lat:te.lat,lng:te.lng},sessionId:Ae?.sessionId,deviceInfo:Ae?.deviceInfo};try{const de=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)}),Te=await de.json();if(!de.ok){console.error("Check-in API error:",Te);let I="Check-in failed. Please try again.";de.status===403&&Te.code==="LOCATION_RESTRICTED"?I="Check-in is only available at the Reliance office. Please connect to the office WiFi or enable location services on your device.":de.status===409&&(I=Te.error,u("customer-step1")),alert(I),O(!1);return}console.log("Check-in successful:",Te.data.id),Te.data.waiverPdfUrl&&console.log("Waiver PDF:",Te.data.waiverPdfUrl);const Me={id:Te.data.id,...i,signatureData:Ae?.signature||"",checkInTime:new Date(Te.data.checkInTime),status:"waiting",partySize:N,visitors:ur};h([...m,Me])}catch(de){console.error("Check-in network error:",de),alert("Check-in failed. Please check your connection and try again."),O(!1);return}y(N.minors>0),H({adults:1,minors:0}),U(null),T([]),q(0),A([]),O(!1),u("customer-step4")},G=g.useCallback(()=>{c({}),y(!1),H({adults:1,minors:0}),U(null),T([]),q(0),A([]),u("home")},[]),pe=(R,ce,oe)=>{ce==="staff2"?Ge(R):ce==="customer"&&oe?(re(oe),u("customer-upload")):ce==="rating"?(M(R),u("rating-dashboard")):(M(R),u(ce==="pricing"?"pricing-dashboard":ce==="analysis"?"analysis-dashboard":"staff-dashboard"))},ae=()=>{Ce&&ke({token:Ce.token,checkInId:Ce.checkInId}),re(null),u("customer-survey")},Pe=()=>{ke(null),u("home")},we=()=>{M(""),u("home")},be=R=>{h(ce=>ce.map(oe=>oe.id===R?{...oe,status:"helped",helpedTime:new Date,currentlyHelpedBy:void 0}:oe))},Le=(R,ce)=>{h(oe=>oe.map(Oe=>Oe.id===R?{...Oe,currentlyHelpedBy:ce}:Oe))},rr=R=>{h(ce=>ce.map(oe=>oe.id===R?{...oe,priced:!0,pricedTime:new Date}:oe))},Fr=R=>{h(ce=>ce.map(oe=>oe.id===R?{...oe,checkInTime:new Date}:oe))},Or=R=>{K(R),u("revisit-step1")},Ke=R=>{K(ce=>({...ce,...R})),u("revisit-step2")},wr=R=>{K(ce=>({...ce,referralSources:R})),u("revisit-waiver")},jr=async R=>{if($)return;O(!0);const ce={firstName:_.firstName,lastName:_.lastName,street:_.street,suiteUnit:_.suiteUnit||"",city:_.city,state:_.state,zip:_.zip,country:_.country,phones:_.phones,emails:_.emails,referralSources:_.referralSources||[],signature:R.signature,partySize:R.partySize,visitors:R.visitors,checkInTime:new Date().toISOString(),isRevisit:!0,...te&&{lat:te.lat,lng:te.lng}};try{const oe=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ce)}),Oe=await oe.json();if(!oe.ok){oe.status===403&&Oe.code==="LOCATION_RESTRICTED"?alert("Check-in is only available at the Reliance office. Please connect to the office WiFi or enable location services on your device."):alert("Revisit check-in failed. Please try again."),O(!1);return}const yr={id:Oe.data.id,..._,isRevisit:!0,signature:R.signature,checkInTime:new Date(Oe.data.checkInTime),status:"waiting",partySize:R.partySize,visitors:R.visitors};h(Ae=>[...Ae,yr])}catch{alert("Revisit check-in failed. Please check your connection."),O(!1);return}O(!1),u("revisit-confirmation")},Ge=R=>{const ce=Date.now()+288e5;localStorage.setItem("staff2Session",JSON.stringify({username:R,expiry:ce})),L(R),u("staff2-dashboard")},Ue=()=>{localStorage.removeItem("staff2Session"),L(""),u("home")},tr=R=>{h(ce=>ce.map(oe=>oe.id===R?{...oe,status:"done"}:oe))},nr=(R,ce)=>{h(oe=>oe.map(Oe=>Oe.id===R?{...Oe,draft:ce}:Oe))},Ee=R=>{m.filter(Oe=>Oe.firstName===R.firstName&&Oe.lastName===R.lastName&&Oe.status==="helped"&&Oe.draft?.selectionSheetNumber);let ce=R.draft?.selectionSheetNumber||"";if(ce){const Oe=ce.split("."),yr=Oe[0];if(Oe.length===1)ce=`${yr}.1`;else{const Ae=parseInt(Oe[1])||0;ce=`${yr}.${Ae+1}`}}const oe={...R,id:Date.now().toString(),checkInTime:new Date,status:"waiting",helpedTime:void 0,draft:{step:3,editedCustomerData:{},selectedFabricator:R.draft?.selectedFabricator,materials:R.draft?.materials||[],helpedBy:b,selectionSheetNumber:ce,isHold:!1,isRevisit:!0,previousMaterialsCount:(R.draft?.materials||[]).length}};h([...m,oe])},j=$?t.jsx(cn,{fullScreen:!0,color:"#ccb331",text:"Submitting your check-in…"}):null;if(s==="customer-step1")return t.jsxs(t.Fragment,{children:[j,t.jsx(kh,{onNext:Se,initialData:i})]});if(s==="customer-step2")return t.jsxs(t.Fragment,{children:[j,t.jsx(wh,{onNext:je,onBack:()=>u("customer-step1"),initialData:i})]});if(s==="customer-step3a")return t.jsxs(t.Fragment,{children:[j,t.jsx(jh,{onNext:J,onBack:()=>u("customer-step2"),initialData:N})]});if(s==="customer-step3b")return t.jsxs(t.Fragment,{children:[j,t.jsx(Ph,{onNext:le,onBack:()=>u("customer-step3a"),initialData:w||void 0})]});if(s==="customer-step3c"){const R=P<W.length?W[P]:void 0;return t.jsxs(t.Fragment,{children:[j,t.jsx(Eh,{onNext:ee,onBack:p,visitorNumber:P+2,totalAdults:N.adults,initialData:R},P)]})}return s==="customer-step3d"?t.jsxs(t.Fragment,{children:[j,t.jsx(Th,{onNext:v,onBack:()=>{N.adults>1?(q(N.adults-2),u("customer-step3c")):u("customer-step3b")},numberOfMinors:N.minors})]}):s==="customer-step4"?t.jsx(zh,{customerName:`${i.firstName} ${i.lastName}`,hasMinors:F,onReturnHome:G}):s==="staff-login"?t.jsx(Mh,{onLogin:pe}):s==="staff-dashboard"?t.jsx(Zh,{username:b,onLogout:we,checkIns:m,onMarkAsHelped:be,onSaveDraft:nr,onRevisit:Ee,onUpdateCurrentlyHelpedBy:Le}):s==="pricing-dashboard"?t.jsx(em,{username:b,onLogout:we,checkIns:m,fabricators:[],onComplete:rr,onResetHoldDate:Fr}):s==="analysis-dashboard"?t.jsx(rm,{username:b,onLogout:we,checkIns:m,fabricators:[],onComplete:rr,onResetHoldDate:Fr}):s==="revisit-lookup"?t.jsx(tm,{checkIns:m,onCustomerFound:Or,onBack:()=>u("home")}):s==="revisit-step1"?t.jsx(om,{customerData:_,onNext:Ke,onBack:()=>u("revisit-lookup")}):s==="revisit-step2"?t.jsx(lm,{referralSources:_?.referralSources||[],onNext:wr,onBack:()=>u("revisit-step1")}):s==="revisit-waiver"?t.jsxs(t.Fragment,{children:[j,t.jsx(am,{customerName:`${_?.firstName} ${_?.lastName}`,onSubmit:jr,onBack:()=>u("revisit-step2")})]}):s==="revisit-confirmation"?t.jsx(sm,{customerName:`${_?.firstName} ${_?.lastName}`,onReturnHome:G}):s==="staff2-login"?t.jsx(im,{onLogin:Ge}):s==="staff2-dashboard"?t.jsx(um,{username:B,onLogout:Ue,checkIns:m,onMarkAsDone:tr}):s==="customer-upload"?Ce?t.jsx(pm,{customerName:Ce.customerName,checkInId:Ce.checkInId,authToken:Ce.token,onDone:ae}):null:s==="customer-survey"?t.jsx(hm,{checkInId:fe?.checkInId??"",authToken:fe?.token??"",onDone:Pe}):s==="rating-dashboard"?t.jsx(fm,{onLogout:we}):t.jsx(Ip,{onCustomerCheckIn:()=>u("customer-step1"),onStaffLogin:()=>u("staff-login"),onRevisit:()=>u("revisit-lookup"),onStaff2Login:()=>u("staff2-login")})}Rp.createRoot(document.getElementById("root")).render(t.jsx(xm,{}));
