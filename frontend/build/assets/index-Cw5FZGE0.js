(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const b of f.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function i(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(m){if(m.ep)return;m.ep=!0;const f=i(m);fetch(m.href,f)}})();function yp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ss={exports:{}},ln={},is={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function bp(){if(Gc)return Se;Gc=1;var s=Symbol.for("react.element"),d=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),b=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),x=Symbol.iterator;function C(p){return p===null||typeof p!="object"?null:(p=x&&p[x]||p["@@iterator"],typeof p=="function"?p:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,E={};function T(p,y,G){this.props=p,this.context=y,this.refs=E,this.updater=G||S}T.prototype.isReactComponent={},T.prototype.setState=function(p,y){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,y,"setState")},T.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function J(){}J.prototype=T.prototype;function H(p,y,G){this.props=p,this.context=y,this.refs=E,this.updater=G||S}var $=H.prototype=new J;$.constructor=H,L($,T.prototype),$.isPureReactComponent=!0;var Z=Array.isArray,ee=Object.prototype.hasOwnProperty,A={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function F(p,y,G){var K,fe={},ne=null,we=null;if(y!=null)for(K in y.ref!==void 0&&(we=y.ref),y.key!==void 0&&(ne=""+y.key),y)ee.call(y,K)&&!V.hasOwnProperty(K)&&(fe[K]=y[K]);var je=arguments.length-2;if(je===1)fe.children=G;else if(1<je){for(var de=Array(je),Ie=0;Ie<je;Ie++)de[Ie]=arguments[Ie+2];fe.children=de}if(p&&p.defaultProps)for(K in je=p.defaultProps,je)fe[K]===void 0&&(fe[K]=je[K]);return{$$typeof:s,type:p,key:ne,ref:we,props:fe,_owner:A.current}}function O(p,y){return{$$typeof:s,type:p.type,key:y,ref:p.ref,props:p.props,_owner:p._owner}}function oe(p){return typeof p=="object"&&p!==null&&p.$$typeof===s}function me(p){var y={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(G){return y[G]})}var Pe=/\/+/g;function ke(p,y){return typeof p=="object"&&p!==null&&p.key!=null?me(""+p.key):y.toString(36)}function Ee(p,y,G,K,fe){var ne=typeof p;(ne==="undefined"||ne==="boolean")&&(p=null);var we=!1;if(p===null)we=!0;else switch(ne){case"string":case"number":we=!0;break;case"object":switch(p.$$typeof){case s:case d:we=!0}}if(we)return we=p,fe=fe(we),p=K===""?"."+ke(we,0):K,Z(fe)?(G="",p!=null&&(G=p.replace(Pe,"$&/")+"/"),Ee(fe,y,G,"",function(Ie){return Ie})):fe!=null&&(oe(fe)&&(fe=O(fe,G+(!fe.key||we&&we.key===fe.key?"":(""+fe.key).replace(Pe,"$&/")+"/")+p)),y.push(fe)),1;if(we=0,K=K===""?".":K+":",Z(p))for(var je=0;je<p.length;je++){ne=p[je];var de=K+ke(ne,je);we+=Ee(ne,y,G,de,fe)}else if(de=C(p),typeof de=="function")for(p=de.call(p),je=0;!(ne=p.next()).done;)ne=ne.value,de=K+ke(ne,je++),we+=Ee(ne,y,G,de,fe);else if(ne==="object")throw y=String(p),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return we}function Ce(p,y,G){if(p==null)return p;var K=[],fe=0;return Ee(p,K,"","",function(ne){return y.call(G,ne,fe++)}),K}function ze(p){if(p._status===-1){var y=p._result;y=y(),y.then(function(G){(p._status===0||p._status===-1)&&(p._status=1,p._result=G)},function(G){(p._status===0||p._status===-1)&&(p._status=2,p._result=G)}),p._status===-1&&(p._status=0,p._result=y)}if(p._status===1)return p._result.default;throw p._result}var Ne={current:null},Q={transition:null},ae={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Q,ReactCurrentOwner:A};function D(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Ce,forEach:function(p,y,G){Ce(p,function(){y.apply(this,arguments)},G)},count:function(p){var y=0;return Ce(p,function(){y++}),y},toArray:function(p){return Ce(p,function(y){return y})||[]},only:function(p){if(!oe(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},Se.Component=T,Se.Fragment=i,Se.Profiler=m,Se.PureComponent=H,Se.StrictMode=u,Se.Suspense=N,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,Se.act=D,Se.cloneElement=function(p,y,G){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var K=L({},p.props),fe=p.key,ne=p.ref,we=p._owner;if(y!=null){if(y.ref!==void 0&&(ne=y.ref,we=A.current),y.key!==void 0&&(fe=""+y.key),p.type&&p.type.defaultProps)var je=p.type.defaultProps;for(de in y)ee.call(y,de)&&!V.hasOwnProperty(de)&&(K[de]=y[de]===void 0&&je!==void 0?je[de]:y[de])}var de=arguments.length-2;if(de===1)K.children=G;else if(1<de){je=Array(de);for(var Ie=0;Ie<de;Ie++)je[Ie]=arguments[Ie+2];K.children=je}return{$$typeof:s,type:p.type,key:fe,ref:ne,props:K,_owner:we}},Se.createContext=function(p){return p={$$typeof:b,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:f,_context:p},p.Consumer=p},Se.createElement=F,Se.createFactory=function(p){var y=F.bind(null,p);return y.type=p,y},Se.createRef=function(){return{current:null}},Se.forwardRef=function(p){return{$$typeof:_,render:p}},Se.isValidElement=oe,Se.lazy=function(p){return{$$typeof:I,_payload:{_status:-1,_result:p},_init:ze}},Se.memo=function(p,y){return{$$typeof:W,type:p,compare:y===void 0?null:y}},Se.startTransition=function(p){var y=Q.transition;Q.transition={};try{p()}finally{Q.transition=y}},Se.unstable_act=D,Se.useCallback=function(p,y){return Ne.current.useCallback(p,y)},Se.useContext=function(p){return Ne.current.useContext(p)},Se.useDebugValue=function(){},Se.useDeferredValue=function(p){return Ne.current.useDeferredValue(p)},Se.useEffect=function(p,y){return Ne.current.useEffect(p,y)},Se.useId=function(){return Ne.current.useId()},Se.useImperativeHandle=function(p,y,G){return Ne.current.useImperativeHandle(p,y,G)},Se.useInsertionEffect=function(p,y){return Ne.current.useInsertionEffect(p,y)},Se.useLayoutEffect=function(p,y){return Ne.current.useLayoutEffect(p,y)},Se.useMemo=function(p,y){return Ne.current.useMemo(p,y)},Se.useReducer=function(p,y,G){return Ne.current.useReducer(p,y,G)},Se.useRef=function(p){return Ne.current.useRef(p)},Se.useState=function(p){return Ne.current.useState(p)},Se.useSyncExternalStore=function(p,y,G){return Ne.current.useSyncExternalStore(p,y,G)},Se.useTransition=function(){return Ne.current.useTransition()},Se.version="18.3.1",Se}var Jc;function ms(){return Jc||(Jc=1,is.exports=bp()),is.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc;function kp(){if(Zc)return ln;Zc=1;var s=ms(),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function b(_,N,W){var I,x={},C=null,S=null;W!==void 0&&(C=""+W),N.key!==void 0&&(C=""+N.key),N.ref!==void 0&&(S=N.ref);for(I in N)u.call(N,I)&&!f.hasOwnProperty(I)&&(x[I]=N[I]);if(_&&_.defaultProps)for(I in N=_.defaultProps,N)x[I]===void 0&&(x[I]=N[I]);return{$$typeof:d,type:_,key:C,ref:S,props:x,_owner:m.current}}return ln.Fragment=i,ln.jsx=b,ln.jsxs=b,ln}var eu;function Np(){return eu||(eu=1,ss.exports=kp()),ss.exports}var o=Np(),gl={},cs={exports:{}},Pr={},us={exports:{}},ds={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function wp(){return ru||(ru=1,(function(s){function d(Q,ae){var D=Q.length;Q.push(ae);e:for(;0<D;){var p=D-1>>>1,y=Q[p];if(0<m(y,ae))Q[p]=ae,Q[D]=y,D=p;else break e}}function i(Q){return Q.length===0?null:Q[0]}function u(Q){if(Q.length===0)return null;var ae=Q[0],D=Q.pop();if(D!==ae){Q[0]=D;e:for(var p=0,y=Q.length,G=y>>>1;p<G;){var K=2*(p+1)-1,fe=Q[K],ne=K+1,we=Q[ne];if(0>m(fe,D))ne<y&&0>m(we,fe)?(Q[p]=we,Q[ne]=D,p=ne):(Q[p]=fe,Q[K]=D,p=K);else if(ne<y&&0>m(we,D))Q[p]=we,Q[ne]=D,p=ne;else break e}}return ae}function m(Q,ae){var D=Q.sortIndex-ae.sortIndex;return D!==0?D:Q.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var b=Date,_=b.now();s.unstable_now=function(){return b.now()-_}}var N=[],W=[],I=1,x=null,C=3,S=!1,L=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(Q){for(var ae=i(W);ae!==null;){if(ae.callback===null)u(W);else if(ae.startTime<=Q)u(W),ae.sortIndex=ae.expirationTime,d(N,ae);else break;ae=i(W)}}function Z(Q){if(E=!1,$(Q),!L)if(i(N)!==null)L=!0,ze(ee);else{var ae=i(W);ae!==null&&Ne(Z,ae.startTime-Q)}}function ee(Q,ae){L=!1,E&&(E=!1,J(F),F=-1),S=!0;var D=C;try{for($(ae),x=i(N);x!==null&&(!(x.expirationTime>ae)||Q&&!me());){var p=x.callback;if(typeof p=="function"){x.callback=null,C=x.priorityLevel;var y=p(x.expirationTime<=ae);ae=s.unstable_now(),typeof y=="function"?x.callback=y:x===i(N)&&u(N),$(ae)}else u(N);x=i(N)}if(x!==null)var G=!0;else{var K=i(W);K!==null&&Ne(Z,K.startTime-ae),G=!1}return G}finally{x=null,C=D,S=!1}}var A=!1,V=null,F=-1,O=5,oe=-1;function me(){return!(s.unstable_now()-oe<O)}function Pe(){if(V!==null){var Q=s.unstable_now();oe=Q;var ae=!0;try{ae=V(!0,Q)}finally{ae?ke():(A=!1,V=null)}}else A=!1}var ke;if(typeof H=="function")ke=function(){H(Pe)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Ce=Ee.port2;Ee.port1.onmessage=Pe,ke=function(){Ce.postMessage(null)}}else ke=function(){T(Pe,0)};function ze(Q){V=Q,A||(A=!0,ke())}function Ne(Q,ae){F=T(function(){Q(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){L||S||(L=!0,ze(ee))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_getFirstCallbackNode=function(){return i(N)},s.unstable_next=function(Q){switch(C){case 1:case 2:case 3:var ae=3;break;default:ae=C}var D=C;C=ae;try{return Q()}finally{C=D}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,ae){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var D=C;C=Q;try{return ae()}finally{C=D}},s.unstable_scheduleCallback=function(Q,ae,D){var p=s.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?p+D:p):D=p,Q){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=D+y,Q={id:I++,callback:ae,priorityLevel:Q,startTime:D,expirationTime:y,sortIndex:-1},D>p?(Q.sortIndex=D,d(W,Q),i(N)===null&&Q===i(W)&&(E?(J(F),F=-1):E=!0,Ne(Z,D-p))):(Q.sortIndex=y,d(N,Q),L||S||(L=!0,ze(ee))),Q},s.unstable_shouldYield=me,s.unstable_wrapCallback=function(Q){var ae=C;return function(){var D=C;C=ae;try{return Q.apply(this,arguments)}finally{C=D}}}})(ds)),ds}var tu;function jp(){return tu||(tu=1,us.exports=wp()),us.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou;function Cp(){if(ou)return Pr;ou=1;var s=ms(),d=jp();function i(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function f(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(m[e]=r,e=0;e<r.length;e++)u.add(r[e])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,W=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},x={};function C(e){return N.call(x,e)?!0:N.call(I,e)?!1:W.test(e)?x[e]=!0:(I[e]=!0,!1)}function S(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L(e,r,t,n){if(r===null||typeof r>"u"||S(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(e,r,t,n,l,a,c){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=c}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];T[r]=new E(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(J,H);T[r]=new E(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(J,H);T[r]=new E(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(J,H);T[r]=new E(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});function $(e,r,t,n){var l=T.hasOwnProperty(r)?T[r]:null;(l!==null?l.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(L(r,t,l,n)&&(t=null),n||l===null?C(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(r=l.attributeName,n=l.attributeNamespace,t===null?e.removeAttribute(r):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,n?e.setAttributeNS(n,r,t):e.setAttribute(r,t))))}var Z=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),A=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),me=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),Q=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=Q&&e[Q]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,p;function y(e){if(p===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);p=r&&r[1]||""}return`
`+p+e}var G=!1;function K(e,r){if(!e||G)return"";G=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(M){var n=M}Reflect.construct(e,[],r)}else{try{r.call()}catch(M){n=M}e.call(r.prototype)}else{try{throw Error()}catch(M){n=M}e()}}catch(M){if(M&&n&&typeof M.stack=="string"){for(var l=M.stack.split(`
`),a=n.stack.split(`
`),c=l.length-1,h=a.length-1;1<=c&&0<=h&&l[c]!==a[h];)h--;for(;1<=c&&0<=h;c--,h--)if(l[c]!==a[h]){if(c!==1||h!==1)do if(c--,h--,0>h||l[c]!==a[h]){var g=`
`+l[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=c&&0<=h);break}}}finally{G=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?y(e):""}function fe(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function ne(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case A:return"Portal";case O:return"Profiler";case F:return"StrictMode";case ke:return"Suspense";case Ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case me:return(e.displayName||"Context")+".Consumer";case oe:return(e._context.displayName||"Context")+".Provider";case Pe:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return r=e.displayName||null,r!==null?r:ne(e.type)||"Memo";case ze:r=e._payload,e=e._init;try{return ne(e(r))}catch{}}return null}function we(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function je(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ie(e){var r=de(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,a=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(c){n=""+c,a.call(this,c)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ir(e){e._valueTracker||(e._valueTracker=Ie(e))}function Yr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),n="";return e&&(n=de(e)?e.checked?"true":"false":e.value),e=n,e!==t?(r.setValue(e),!0):!1}function Te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function w(e,r){var t=r.checked;return D({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function U(e,r){var t=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;t=je(r.value!=null?r.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ie(e,r){r=r.checked,r!=null&&$(e,"checked",r,!1)}function te(e,r){ie(e,r);var t=je(r.value),n=r.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?qe(e,r.type,t):r.hasOwnProperty("defaultValue")&&qe(e,r.type,je(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function xe(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function qe(e,r,t){(r!=="number"||Te(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Oe=Array.isArray;function nr(e,r,t,n){if(e=e.options,r){r={};for(var l=0;l<t.length;l++)r["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=r.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&n&&(e[t].defaultSelected=!0)}else{for(t=""+je(t),r=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function vr(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return D({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function He(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(i(92));if(Oe(t)){if(1<t.length)throw Error(i(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:je(t)}}function Ze(e,r){var t=je(r.value),n=je(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function Er(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Rr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tt(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Rr(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,Tr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,n,l){MSApp.execUnsafeLocalFunction(function(){return e(r,t,n,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function z(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(e){Ue.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),ye[r]=ye[e]})});function _e(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||ye.hasOwnProperty(e)&&ye[e]?(""+r).trim():r+"px"}function R(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var n=t.indexOf("--")===0,l=_e(t,r[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,l):e[t]=l}}var pe=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,r){if(r){if(pe[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function We(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pr=null;function xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qr=null,kr=null,$r=null;function sn(e){if(e=Yo(e)){if(typeof qr!="function")throw Error(i(280));var r=e.stateNode;r&&(r=zn(r),qr(e.stateNode,e.type,r))}}function Ae(e){kr?$r?$r.push(e):$r=[e]:kr=e}function gs(){if(kr){var e=kr,r=$r;if($r=kr=null,sn(e),r)for(e=0;e<r.length;e++)sn(r[e])}}function vs(e,r){return e(r)}function xs(){}var jl=!1;function ys(e,r,t){if(jl)return e(r,t);jl=!0;try{return vs(e,r,t)}finally{jl=!1,(kr!==null||$r!==null)&&(xs(),gs())}}function wo(e,r){var t=e.stateNode;if(t===null)return null;var n=zn(t);if(n===null)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(i(231,r,typeof t));return t}var Cl=!1;if(_)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{Cl=!1}function Cu(e,r,t,n,l,a,c,h,g){var M=Array.prototype.slice.call(arguments,3);try{r.apply(t,M)}catch(Y){this.onError(Y)}}var Co=!1,cn=null,un=!1,Sl=null,Su={onError:function(e){Co=!0,cn=e}};function Pu(e,r,t,n,l,a,c,h,g){Co=!1,cn=null,Cu.apply(Su,arguments)}function Eu(e,r,t,n,l,a,c,h,g){if(Pu.apply(this,arguments),Co){if(Co){var M=cn;Co=!1,cn=null}else throw Error(i(198));un||(un=!0,Sl=M)}}function Lt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function bs(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function ks(e){if(Lt(e)!==e)throw Error(i(188))}function Tu(e){var r=e.alternate;if(!r){if(r=Lt(e),r===null)throw Error(i(188));return r!==e?null:e}for(var t=e,n=r;;){var l=t.return;if(l===null)break;var a=l.alternate;if(a===null){if(n=l.return,n!==null){t=n;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===t)return ks(l),e;if(a===n)return ks(l),r;a=a.sibling}throw Error(i(188))}if(t.return!==n.return)t=l,n=a;else{for(var c=!1,h=l.child;h;){if(h===t){c=!0,t=l,n=a;break}if(h===n){c=!0,n=l,t=a;break}h=h.sibling}if(!c){for(h=a.child;h;){if(h===t){c=!0,t=a,n=l;break}if(h===n){c=!0,n=a,t=l;break}h=h.sibling}if(!c)throw Error(i(189))}}if(t.alternate!==n)throw Error(i(190))}if(t.tag!==3)throw Error(i(188));return t.stateNode.current===t?e:r}function Ns(e){return e=Tu(e),e!==null?ws(e):null}function ws(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=ws(e);if(r!==null)return r;e=e.sibling}return null}var js=d.unstable_scheduleCallback,Cs=d.unstable_cancelCallback,Mu=d.unstable_shouldYield,zu=d.unstable_requestPaint,Ge=d.unstable_now,Ou=d.unstable_getCurrentPriorityLevel,Pl=d.unstable_ImmediatePriority,Ss=d.unstable_UserBlockingPriority,dn=d.unstable_NormalPriority,Du=d.unstable_LowPriority,Ps=d.unstable_IdlePriority,pn=null,ot=null;function _u(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(pn,e,void 0,(e.current.flags&128)===128)}catch{}}var Vr=Math.clz32?Math.clz32:Fu,Ru=Math.log,Au=Math.LN2;function Fu(e){return e>>>=0,e===0?32:31-(Ru(e)/Au|0)|0}var hn=64,mn=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fn(e,r){var t=e.pendingLanes;if(t===0)return 0;var n=0,l=e.suspendedLanes,a=e.pingedLanes,c=t&268435455;if(c!==0){var h=c&~l;h!==0?n=So(h):(a&=c,a!==0&&(n=So(a)))}else c=t&~l,c!==0?n=So(c):a!==0&&(n=So(a));if(n===0)return 0;if(r!==0&&r!==n&&(r&l)===0&&(l=n&-n,a=r&-r,l>=a||l===16&&(a&4194240)!==0))return r;if((n&4)!==0&&(n|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)t=31-Vr(r),l=1<<t,n|=e[t],r&=~l;return n}function Iu(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lu(e,r){for(var t=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-Vr(a),h=1<<c,g=l[c];g===-1?((h&t)===0||(h&n)!==0)&&(l[c]=Iu(h,r)):g<=r&&(e.expiredLanes|=h),a&=~h}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Es(){var e=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),e}function Tl(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Po(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Vr(r),e[r]=t}function Hu(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Vr(t),a=1<<l;r[l]=0,n[l]=-1,e[l]=-1,t&=~a}}function Ml(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var n=31-Vr(t),l=1<<n;l&r|e[n]&r&&(e[n]|=r),t&=~l}}var Fe=0;function Ts(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ms,zl,zs,Os,Ds,Ol=!1,gn=[],yt=null,bt=null,kt=null,Eo=new Map,To=new Map,Nt=[],Uu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,r){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Eo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(r.pointerId)}}function Mo(e,r,t,n,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:t,eventSystemFlags:n,nativeEvent:a,targetContainers:[l]},r!==null&&(r=Yo(r),r!==null&&zl(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function Wu(e,r,t,n,l){switch(r){case"focusin":return yt=Mo(yt,e,r,t,n,l),!0;case"dragenter":return bt=Mo(bt,e,r,t,n,l),!0;case"mouseover":return kt=Mo(kt,e,r,t,n,l),!0;case"pointerover":var a=l.pointerId;return Eo.set(a,Mo(Eo.get(a)||null,e,r,t,n,l)),!0;case"gotpointercapture":return a=l.pointerId,To.set(a,Mo(To.get(a)||null,e,r,t,n,l)),!0}return!1}function Rs(e){var r=Ht(e.target);if(r!==null){var t=Lt(r);if(t!==null){if(r=t.tag,r===13){if(r=bs(t),r!==null){e.blockedOn=r,Ds(e.priority,function(){zs(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vn(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=_l(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);pr=n,t.target.dispatchEvent(n),pr=null}else return r=Yo(t),r!==null&&zl(r),e.blockedOn=t,!1;r.shift()}return!0}function As(e,r,t){vn(e)&&t.delete(r)}function Bu(){Ol=!1,yt!==null&&vn(yt)&&(yt=null),bt!==null&&vn(bt)&&(bt=null),kt!==null&&vn(kt)&&(kt=null),Eo.forEach(As),To.forEach(As)}function zo(e,r){e.blockedOn===r&&(e.blockedOn=null,Ol||(Ol=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Bu)))}function Oo(e){function r(l){return zo(l,e)}if(0<gn.length){zo(gn[0],e);for(var t=1;t<gn.length;t++){var n=gn[t];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&zo(yt,e),bt!==null&&zo(bt,e),kt!==null&&zo(kt,e),Eo.forEach(r),To.forEach(r),t=0;t<Nt.length;t++)n=Nt[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(t=Nt[0],t.blockedOn===null);)Rs(t),t.blockedOn===null&&Nt.shift()}var Jt=Z.ReactCurrentBatchConfig,xn=!0;function Yu(e,r,t,n){var l=Fe,a=Jt.transition;Jt.transition=null;try{Fe=1,Dl(e,r,t,n)}finally{Fe=l,Jt.transition=a}}function qu(e,r,t,n){var l=Fe,a=Jt.transition;Jt.transition=null;try{Fe=4,Dl(e,r,t,n)}finally{Fe=l,Jt.transition=a}}function Dl(e,r,t,n){if(xn){var l=_l(e,r,t,n);if(l===null)Gl(e,r,n,yn,t),_s(e,n);else if(Wu(l,e,r,t,n))n.stopPropagation();else if(_s(e,n),r&4&&-1<Uu.indexOf(e)){for(;l!==null;){var a=Yo(l);if(a!==null&&Ms(a),a=_l(e,r,t,n),a===null&&Gl(e,r,n,yn,t),a===l)break;l=a}l!==null&&n.stopPropagation()}else Gl(e,r,n,null,t)}}var yn=null;function _l(e,r,t,n){if(yn=null,e=xr(n),e=Ht(e),e!==null)if(r=Lt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=bs(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return yn=e,null}function Fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ou()){case Pl:return 1;case Ss:return 4;case dn:case Du:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var wt=null,Rl=null,bn=null;function Is(){if(bn)return bn;var e,r=Rl,t=r.length,n,l="value"in wt?wt.value:wt.textContent,a=l.length;for(e=0;e<t&&r[e]===l[e];e++);var c=t-e;for(n=1;n<=c&&r[t-n]===l[a-n];n++);return bn=l.slice(e,1<n?1-n:void 0)}function kn(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Ls(){return!1}function Mr(e){function r(t,n,l,a,c){this._reactName=t,this._targetInst=l,this.type=n,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(a):a[h]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Nn:Ls,this.isPropagationStopped=Ls,this}return D(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),r}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Mr(Zt),Do=D({},Zt,{view:0,detail:0}),$u=Mr(Do),Fl,Il,_o,wn=D({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(Fl=e.screenX-_o.screenX,Il=e.screenY-_o.screenY):Il=Fl=0,_o=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Hs=Mr(wn),Vu=D({},wn,{dataTransfer:0}),Qu=Mr(Vu),Xu=D({},Do,{relatedTarget:0}),Ll=Mr(Xu),Ku=D({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),Gu=Mr(Ku),Ju=D({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zu=Mr(Ju),ed=D({},Zt,{data:0}),Us=Mr(ed),rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nd(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=od[e])?!!r[e]:!1}function Hl(){return nd}var ld=D({},Do,{key:function(e){if(e.key){var r=rd[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ad=Mr(ld),sd=D({},wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ws=Mr(sd),id=D({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),cd=Mr(id),ud=D({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),dd=Mr(ud),pd=D({},wn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hd=Mr(pd),md=[9,13,27,32],Ul=_&&"CompositionEvent"in window,Ro=null;_&&"documentMode"in document&&(Ro=document.documentMode);var fd=_&&"TextEvent"in window&&!Ro,Bs=_&&(!Ul||Ro&&8<Ro&&11>=Ro),Ys=" ",qs=!1;function $s(e,r){switch(e){case"keyup":return md.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var eo=!1;function gd(e,r){switch(e){case"compositionend":return Vs(r);case"keypress":return r.which!==32?null:(qs=!0,Ys);case"textInput":return e=r.data,e===Ys&&qs?null:e;default:return null}}function vd(e,r){if(eo)return e==="compositionend"||!Ul&&$s(e,r)?(e=Is(),bn=Rl=wt=null,eo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Bs&&r.locale!=="ko"?null:r.data;default:return null}}var xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!xd[e.type]:r==="textarea"}function Xs(e,r,t,n){Ae(n),r=En(r,"onChange"),0<r.length&&(t=new Al("onChange","change",null,t,n),e.push({event:t,listeners:r}))}var Ao=null,Fo=null;function yd(e){hi(e,0)}function jn(e){var r=lo(e);if(Yr(r))return e}function bd(e,r){if(e==="change")return r}var Ks=!1;if(_){var Wl;if(_){var Bl="oninput"in document;if(!Bl){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),Bl=typeof Gs.oninput=="function"}Wl=Bl}else Wl=!1;Ks=Wl&&(!document.documentMode||9<document.documentMode)}function Js(){Ao&&(Ao.detachEvent("onpropertychange",Zs),Fo=Ao=null)}function Zs(e){if(e.propertyName==="value"&&jn(Fo)){var r=[];Xs(r,Fo,e,xr(e)),ys(yd,r)}}function kd(e,r,t){e==="focusin"?(Js(),Ao=r,Fo=t,Ao.attachEvent("onpropertychange",Zs)):e==="focusout"&&Js()}function Nd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jn(Fo)}function wd(e,r){if(e==="click")return jn(r)}function jd(e,r){if(e==="input"||e==="change")return jn(r)}function Cd(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Qr=typeof Object.is=="function"?Object.is:Cd;function Io(e,r){if(Qr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var l=t[n];if(!N.call(r,l)||!Qr(e[l],r[l]))return!1}return!0}function ei(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ri(e,r){var t=ei(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=r&&n>=r)return{node:t,offset:r-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ei(t)}}function ti(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ti(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function oi(){for(var e=window,r=Te();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Te(e.document)}return r}function Yl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Sd(e){var r=oi(),t=e.focusedElem,n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&ti(t.ownerDocument.documentElement,t)){if(n!==null&&Yl(t)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,a=Math.min(n.start,l);n=n.end===void 0?a:Math.min(n.end,l),!e.extend&&a>n&&(l=n,n=a,a=l),l=ri(t,a);var c=ri(t,n);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),a>n?(e.addRange(r),e.extend(c.node,c.offset)):(r.setEnd(c.node,c.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pd=_&&"documentMode"in document&&11>=document.documentMode,ro=null,ql=null,Lo=null,$l=!1;function ni(e,r,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$l||ro==null||ro!==Te(n)||(n=ro,"selectionStart"in n&&Yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Lo&&Io(Lo,n)||(Lo=n,n=En(ql,"onSelect"),0<n.length&&(r=new Al("onSelect","select",null,r,t),e.push({event:r,listeners:n}),r.target=ro)))}function Cn(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var to={animationend:Cn("Animation","AnimationEnd"),animationiteration:Cn("Animation","AnimationIteration"),animationstart:Cn("Animation","AnimationStart"),transitionend:Cn("Transition","TransitionEnd")},Vl={},li={};_&&(li=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Sn(e){if(Vl[e])return Vl[e];if(!to[e])return e;var r=to[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in li)return Vl[e]=r[t];return e}var ai=Sn("animationend"),si=Sn("animationiteration"),ii=Sn("animationstart"),ci=Sn("transitionend"),ui=new Map,di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,r){ui.set(e,r),f(r,[e])}for(var Ql=0;Ql<di.length;Ql++){var Xl=di[Ql],Ed=Xl.toLowerCase(),Td=Xl[0].toUpperCase()+Xl.slice(1);jt(Ed,"on"+Td)}jt(ai,"onAnimationEnd"),jt(si,"onAnimationIteration"),jt(ii,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(ci,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Md=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function pi(e,r,t){var n=e.type||"unknown-event";e.currentTarget=t,Eu(n,r,void 0,e),e.currentTarget=null}function hi(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],l=n.event;n=n.listeners;e:{var a=void 0;if(r)for(var c=n.length-1;0<=c;c--){var h=n[c],g=h.instance,M=h.currentTarget;if(h=h.listener,g!==a&&l.isPropagationStopped())break e;pi(l,h,M),a=g}else for(c=0;c<n.length;c++){if(h=n[c],g=h.instance,M=h.currentTarget,h=h.listener,g!==a&&l.isPropagationStopped())break e;pi(l,h,M),a=g}}}if(un)throw e=Sl,un=!1,Sl=null,e}function Be(e,r){var t=r[oa];t===void 0&&(t=r[oa]=new Set);var n=e+"__bubble";t.has(n)||(mi(r,e,2,!1),t.add(n))}function Kl(e,r,t){var n=0;r&&(n|=4),mi(t,e,n,r)}var Pn="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Pn]){e[Pn]=!0,u.forEach(function(t){t!=="selectionchange"&&(Md.has(t)||Kl(t,!1,e),Kl(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Pn]||(r[Pn]=!0,Kl("selectionchange",!1,r))}}function mi(e,r,t,n){switch(Fs(r)){case 1:var l=Yu;break;case 4:l=qu;break;default:l=Dl}t=l.bind(null,r,t,e),l=void 0,!Cl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(r,t,{capture:!0,passive:l}):e.addEventListener(r,t,!0):l!==void 0?e.addEventListener(r,t,{passive:l}):e.addEventListener(r,t,!1)}function Gl(e,r,t,n,l){var a=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var h=n.stateNode.containerInfo;if(h===l||h.nodeType===8&&h.parentNode===l)break;if(c===4)for(c=n.return;c!==null;){var g=c.tag;if((g===3||g===4)&&(g=c.stateNode.containerInfo,g===l||g.nodeType===8&&g.parentNode===l))return;c=c.return}for(;h!==null;){if(c=Ht(h),c===null)return;if(g=c.tag,g===5||g===6){n=a=c;continue e}h=h.parentNode}}n=n.return}ys(function(){var M=a,Y=xr(t),q=[];e:{var B=ui.get(e);if(B!==void 0){var re=Al,se=e;switch(e){case"keypress":if(kn(t)===0)break e;case"keydown":case"keyup":re=ad;break;case"focusin":se="focus",re=Ll;break;case"focusout":se="blur",re=Ll;break;case"beforeblur":case"afterblur":re=Ll;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Qu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=cd;break;case ai:case si:case ii:re=Gu;break;case ci:re=dd;break;case"scroll":re=$u;break;case"wheel":re=hd;break;case"copy":case"cut":case"paste":re=Zu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=Ws}var ce=(r&4)!==0,Je=!ce&&e==="scroll",j=ce?B!==null?B+"Capture":null:B;ce=[];for(var v=M,P;v!==null;){P=v;var X=P.stateNode;if(P.tag===5&&X!==null&&(P=X,j!==null&&(X=wo(v,j),X!=null&&ce.push(Wo(v,X,P)))),Je)break;v=v.return}0<ce.length&&(B=new re(B,se,null,t,Y),q.push({event:B,listeners:ce}))}}if((r&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",re=e==="mouseout"||e==="pointerout",B&&t!==pr&&(se=t.relatedTarget||t.fromElement)&&(Ht(se)||se[ct]))break e;if((re||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,re?(se=t.relatedTarget||t.toElement,re=M,se=se?Ht(se):null,se!==null&&(Je=Lt(se),se!==Je||se.tag!==5&&se.tag!==6)&&(se=null)):(re=null,se=M),re!==se)){if(ce=Hs,X="onMouseLeave",j="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Ws,X="onPointerLeave",j="onPointerEnter",v="pointer"),Je=re==null?B:lo(re),P=se==null?B:lo(se),B=new ce(X,v+"leave",re,t,Y),B.target=Je,B.relatedTarget=P,X=null,Ht(Y)===M&&(ce=new ce(j,v+"enter",se,t,Y),ce.target=P,ce.relatedTarget=Je,X=ce),Je=X,re&&se)r:{for(ce=re,j=se,v=0,P=ce;P;P=oo(P))v++;for(P=0,X=j;X;X=oo(X))P++;for(;0<v-P;)ce=oo(ce),v--;for(;0<P-v;)j=oo(j),P--;for(;v--;){if(ce===j||j!==null&&ce===j.alternate)break r;ce=oo(ce),j=oo(j)}ce=null}else ce=null;re!==null&&fi(q,B,re,ce,!1),se!==null&&Je!==null&&fi(q,Je,se,ce,!0)}}e:{if(B=M?lo(M):window,re=B.nodeName&&B.nodeName.toLowerCase(),re==="select"||re==="input"&&B.type==="file")var ue=bd;else if(Qs(B))if(Ks)ue=jd;else{ue=Nd;var ge=kd}else(re=B.nodeName)&&re.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(ue=wd);if(ue&&(ue=ue(e,M))){Xs(q,ue,t,Y);break e}ge&&ge(e,B,M),e==="focusout"&&(ge=B._wrapperState)&&ge.controlled&&B.type==="number"&&qe(B,"number",B.value)}switch(ge=M?lo(M):window,e){case"focusin":(Qs(ge)||ge.contentEditable==="true")&&(ro=ge,ql=M,Lo=null);break;case"focusout":Lo=ql=ro=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,ni(q,t,Y);break;case"selectionchange":if(Pd)break;case"keydown":case"keyup":ni(q,t,Y)}var ve;if(Ul)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else eo?$s(e,t)&&(be="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(be="onCompositionStart");be&&(Bs&&t.locale!=="ko"&&(eo||be!=="onCompositionStart"?be==="onCompositionEnd"&&eo&&(ve=Is()):(wt=Y,Rl="value"in wt?wt.value:wt.textContent,eo=!0)),ge=En(M,be),0<ge.length&&(be=new Us(be,e,null,t,Y),q.push({event:be,listeners:ge}),ve?be.data=ve:(ve=Vs(t),ve!==null&&(be.data=ve)))),(ve=fd?gd(e,t):vd(e,t))&&(M=En(M,"onBeforeInput"),0<M.length&&(Y=new Us("onBeforeInput","beforeinput",null,t,Y),q.push({event:Y,listeners:M}),Y.data=ve))}hi(q,r)})}function Wo(e,r,t){return{instance:e,listener:r,currentTarget:t}}function En(e,r){for(var t=r+"Capture",n=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=wo(e,t),a!=null&&n.unshift(Wo(e,a,l)),a=wo(e,r),a!=null&&n.push(Wo(e,a,l))),e=e.return}return n}function oo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fi(e,r,t,n,l){for(var a=r._reactName,c=[];t!==null&&t!==n;){var h=t,g=h.alternate,M=h.stateNode;if(g!==null&&g===n)break;h.tag===5&&M!==null&&(h=M,l?(g=wo(t,a),g!=null&&c.unshift(Wo(t,g,h))):l||(g=wo(t,a),g!=null&&c.push(Wo(t,g,h)))),t=t.return}c.length!==0&&e.push({event:r,listeners:c})}var zd=/\r\n?/g,Od=/\u0000|\uFFFD/g;function gi(e){return(typeof e=="string"?e:""+e).replace(zd,`
`).replace(Od,"")}function Tn(e,r,t){if(r=gi(r),gi(e)!==r&&t)throw Error(i(425))}function Mn(){}var Jl=null,Zl=null;function ea(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ra=typeof setTimeout=="function"?setTimeout:void 0,Dd=typeof clearTimeout=="function"?clearTimeout:void 0,vi=typeof Promise=="function"?Promise:void 0,_d=typeof queueMicrotask=="function"?queueMicrotask:typeof vi<"u"?function(e){return vi.resolve(null).then(e).catch(Rd)}:ra;function Rd(e){setTimeout(function(){throw e})}function ta(e,r){var t=r,n=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0){e.removeChild(l),Oo(r);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=l}while(t);Oo(r)}function Ct(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function xi(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var no=Math.random().toString(36).slice(2),nt="__reactFiber$"+no,Bo="__reactProps$"+no,ct="__reactContainer$"+no,oa="__reactEvents$"+no,Ad="__reactListeners$"+no,Fd="__reactHandles$"+no;function Ht(e){var r=e[nt];if(r)return r;for(var t=e.parentNode;t;){if(r=t[ct]||t[nt]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=xi(e);e!==null;){if(t=e[nt])return t;e=xi(e)}return r}e=t,t=e.parentNode}return null}function Yo(e){return e=e[nt]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function zn(e){return e[Bo]||null}var na=[],ao=-1;function St(e){return{current:e}}function Ye(e){0>ao||(e.current=na[ao],na[ao]=null,ao--)}function Le(e,r){ao++,na[ao]=e.current,e.current=r}var Pt={},hr=St(Pt),Nr=St(!1),Ut=Pt;function so(e,r){var t=e.type.contextTypes;if(!t)return Pt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in t)l[a]=r[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function wr(e){return e=e.childContextTypes,e!=null}function On(){Ye(Nr),Ye(hr)}function yi(e,r,t){if(hr.current!==Pt)throw Error(i(168));Le(hr,r),Le(Nr,t)}function bi(e,r,t){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var l in n)if(!(l in r))throw Error(i(108,we(e)||"Unknown",l));return D({},t,n)}function Dn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Ut=hr.current,Le(hr,e),Le(Nr,Nr.current),!0}function ki(e,r,t){var n=e.stateNode;if(!n)throw Error(i(169));t?(e=bi(e,r,Ut),n.__reactInternalMemoizedMergedChildContext=e,Ye(Nr),Ye(hr),Le(hr,e)):Ye(Nr),Le(Nr,t)}var ut=null,_n=!1,la=!1;function Ni(e){ut===null?ut=[e]:ut.push(e)}function Id(e){_n=!0,Ni(e)}function Et(){if(!la&&ut!==null){la=!0;var e=0,r=Fe;try{var t=ut;for(Fe=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}ut=null,_n=!1}catch(l){throw ut!==null&&(ut=ut.slice(e+1)),js(Pl,Et),l}finally{Fe=r,la=!1}}return null}var io=[],co=0,Rn=null,An=0,Fr=[],Ir=0,Wt=null,dt=1,pt="";function Bt(e,r){io[co++]=An,io[co++]=Rn,Rn=e,An=r}function wi(e,r,t){Fr[Ir++]=dt,Fr[Ir++]=pt,Fr[Ir++]=Wt,Wt=e;var n=dt;e=pt;var l=32-Vr(n)-1;n&=~(1<<l),t+=1;var a=32-Vr(r)+l;if(30<a){var c=l-l%5;a=(n&(1<<c)-1).toString(32),n>>=c,l-=c,dt=1<<32-Vr(r)+l|t<<l|n,pt=a+e}else dt=1<<a|t<<l|n,pt=e}function aa(e){e.return!==null&&(Bt(e,1),wi(e,1,0))}function sa(e){for(;e===Rn;)Rn=io[--co],io[co]=null,An=io[--co],io[co]=null;for(;e===Wt;)Wt=Fr[--Ir],Fr[Ir]=null,pt=Fr[--Ir],Fr[Ir]=null,dt=Fr[--Ir],Fr[Ir]=null}var zr=null,Or=null,$e=!1,Xr=null;function ji(e,r){var t=Wr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Ci(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,zr=e,Or=Ct(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,zr=e,Or=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Wt!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Wr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,zr=e,Or=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if($e){var r=Or;if(r){var t=r;if(!Ci(e,r)){if(ia(e))throw Error(i(418));r=Ct(t.nextSibling);var n=zr;r&&Ci(e,r)?ji(n,t):(e.flags=e.flags&-4097|2,$e=!1,zr=e)}}else{if(ia(e))throw Error(i(418));e.flags=e.flags&-4097|2,$e=!1,zr=e}}}function Si(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zr=e}function Fn(e){if(e!==zr)return!1;if(!$e)return Si(e),$e=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ea(e.type,e.memoizedProps)),r&&(r=Or)){if(ia(e))throw Pi(),Error(i(418));for(;r;)ji(e,r),r=Ct(r.nextSibling)}if(Si(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){Or=Ct(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}Or=null}}else Or=zr?Ct(e.stateNode.nextSibling):null;return!0}function Pi(){for(var e=Or;e;)e=Ct(e.nextSibling)}function uo(){Or=zr=null,$e=!1}function ua(e){Xr===null?Xr=[e]:Xr.push(e)}var Ld=Z.ReactCurrentBatchConfig;function qo(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(i(309));var n=t.stateNode}if(!n)throw Error(i(147,e));var l=n,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(c){var h=l.refs;c===null?delete h[a]:h[a]=c},r._stringRef=a,r)}if(typeof e!="string")throw Error(i(284));if(!t._owner)throw Error(i(290,e))}return e}function In(e,r){throw e=Object.prototype.toString.call(r),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Ei(e){var r=e._init;return r(e._payload)}function Ti(e){function r(j,v){if(e){var P=j.deletions;P===null?(j.deletions=[v],j.flags|=16):P.push(v)}}function t(j,v){if(!e)return null;for(;v!==null;)r(j,v),v=v.sibling;return null}function n(j,v){for(j=new Map;v!==null;)v.key!==null?j.set(v.key,v):j.set(v.index,v),v=v.sibling;return j}function l(j,v){return j=At(j,v),j.index=0,j.sibling=null,j}function a(j,v,P){return j.index=P,e?(P=j.alternate,P!==null?(P=P.index,P<v?(j.flags|=2,v):P):(j.flags|=2,v)):(j.flags|=1048576,v)}function c(j){return e&&j.alternate===null&&(j.flags|=2),j}function h(j,v,P,X){return v===null||v.tag!==6?(v=rs(P,j.mode,X),v.return=j,v):(v=l(v,P),v.return=j,v)}function g(j,v,P,X){var ue=P.type;return ue===V?Y(j,v,P.props.children,X,P.key):v!==null&&(v.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ze&&Ei(ue)===v.type)?(X=l(v,P.props),X.ref=qo(j,v,P),X.return=j,X):(X=il(P.type,P.key,P.props,null,j.mode,X),X.ref=qo(j,v,P),X.return=j,X)}function M(j,v,P,X){return v===null||v.tag!==4||v.stateNode.containerInfo!==P.containerInfo||v.stateNode.implementation!==P.implementation?(v=ts(P,j.mode,X),v.return=j,v):(v=l(v,P.children||[]),v.return=j,v)}function Y(j,v,P,X,ue){return v===null||v.tag!==7?(v=Gt(P,j.mode,X,ue),v.return=j,v):(v=l(v,P),v.return=j,v)}function q(j,v,P){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rs(""+v,j.mode,P),v.return=j,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ee:return P=il(v.type,v.key,v.props,null,j.mode,P),P.ref=qo(j,null,v),P.return=j,P;case A:return v=ts(v,j.mode,P),v.return=j,v;case ze:var X=v._init;return q(j,X(v._payload),P)}if(Oe(v)||ae(v))return v=Gt(v,j.mode,P,null),v.return=j,v;In(j,v)}return null}function B(j,v,P,X){var ue=v!==null?v.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ue!==null?null:h(j,v,""+P,X);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ee:return P.key===ue?g(j,v,P,X):null;case A:return P.key===ue?M(j,v,P,X):null;case ze:return ue=P._init,B(j,v,ue(P._payload),X)}if(Oe(P)||ae(P))return ue!==null?null:Y(j,v,P,X,null);In(j,P)}return null}function re(j,v,P,X,ue){if(typeof X=="string"&&X!==""||typeof X=="number")return j=j.get(P)||null,h(v,j,""+X,ue);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case ee:return j=j.get(X.key===null?P:X.key)||null,g(v,j,X,ue);case A:return j=j.get(X.key===null?P:X.key)||null,M(v,j,X,ue);case ze:var ge=X._init;return re(j,v,P,ge(X._payload),ue)}if(Oe(X)||ae(X))return j=j.get(P)||null,Y(v,j,X,ue,null);In(v,X)}return null}function se(j,v,P,X){for(var ue=null,ge=null,ve=v,be=v=0,sr=null;ve!==null&&be<P.length;be++){ve.index>be?(sr=ve,ve=null):sr=ve.sibling;var De=B(j,ve,P[be],X);if(De===null){ve===null&&(ve=sr);break}e&&ve&&De.alternate===null&&r(j,ve),v=a(De,v,be),ge===null?ue=De:ge.sibling=De,ge=De,ve=sr}if(be===P.length)return t(j,ve),$e&&Bt(j,be),ue;if(ve===null){for(;be<P.length;be++)ve=q(j,P[be],X),ve!==null&&(v=a(ve,v,be),ge===null?ue=ve:ge.sibling=ve,ge=ve);return $e&&Bt(j,be),ue}for(ve=n(j,ve);be<P.length;be++)sr=re(ve,j,be,P[be],X),sr!==null&&(e&&sr.alternate!==null&&ve.delete(sr.key===null?be:sr.key),v=a(sr,v,be),ge===null?ue=sr:ge.sibling=sr,ge=sr);return e&&ve.forEach(function(Ft){return r(j,Ft)}),$e&&Bt(j,be),ue}function ce(j,v,P,X){var ue=ae(P);if(typeof ue!="function")throw Error(i(150));if(P=ue.call(P),P==null)throw Error(i(151));for(var ge=ue=null,ve=v,be=v=0,sr=null,De=P.next();ve!==null&&!De.done;be++,De=P.next()){ve.index>be?(sr=ve,ve=null):sr=ve.sibling;var Ft=B(j,ve,De.value,X);if(Ft===null){ve===null&&(ve=sr);break}e&&ve&&Ft.alternate===null&&r(j,ve),v=a(Ft,v,be),ge===null?ue=Ft:ge.sibling=Ft,ge=Ft,ve=sr}if(De.done)return t(j,ve),$e&&Bt(j,be),ue;if(ve===null){for(;!De.done;be++,De=P.next())De=q(j,De.value,X),De!==null&&(v=a(De,v,be),ge===null?ue=De:ge.sibling=De,ge=De);return $e&&Bt(j,be),ue}for(ve=n(j,ve);!De.done;be++,De=P.next())De=re(ve,j,be,De.value,X),De!==null&&(e&&De.alternate!==null&&ve.delete(De.key===null?be:De.key),v=a(De,v,be),ge===null?ue=De:ge.sibling=De,ge=De);return e&&ve.forEach(function(xp){return r(j,xp)}),$e&&Bt(j,be),ue}function Je(j,v,P,X){if(typeof P=="object"&&P!==null&&P.type===V&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case ee:e:{for(var ue=P.key,ge=v;ge!==null;){if(ge.key===ue){if(ue=P.type,ue===V){if(ge.tag===7){t(j,ge.sibling),v=l(ge,P.props.children),v.return=j,j=v;break e}}else if(ge.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ze&&Ei(ue)===ge.type){t(j,ge.sibling),v=l(ge,P.props),v.ref=qo(j,ge,P),v.return=j,j=v;break e}t(j,ge);break}else r(j,ge);ge=ge.sibling}P.type===V?(v=Gt(P.props.children,j.mode,X,P.key),v.return=j,j=v):(X=il(P.type,P.key,P.props,null,j.mode,X),X.ref=qo(j,v,P),X.return=j,j=X)}return c(j);case A:e:{for(ge=P.key;v!==null;){if(v.key===ge)if(v.tag===4&&v.stateNode.containerInfo===P.containerInfo&&v.stateNode.implementation===P.implementation){t(j,v.sibling),v=l(v,P.children||[]),v.return=j,j=v;break e}else{t(j,v);break}else r(j,v);v=v.sibling}v=ts(P,j.mode,X),v.return=j,j=v}return c(j);case ze:return ge=P._init,Je(j,v,ge(P._payload),X)}if(Oe(P))return se(j,v,P,X);if(ae(P))return ce(j,v,P,X);In(j,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,v!==null&&v.tag===6?(t(j,v.sibling),v=l(v,P),v.return=j,j=v):(t(j,v),v=rs(P,j.mode,X),v.return=j,j=v),c(j)):t(j,v)}return Je}var po=Ti(!0),Mi=Ti(!1),Ln=St(null),Hn=null,ho=null,da=null;function pa(){da=ho=Hn=null}function ha(e){var r=Ln.current;Ye(Ln),e._currentValue=r}function ma(e,r,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===t)break;e=e.return}}function mo(e,r){Hn=e,da=ho=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(jr=!0),e.firstContext=null)}function Lr(e){var r=e._currentValue;if(da!==e)if(e={context:e,memoizedValue:r,next:null},ho===null){if(Hn===null)throw Error(i(308));ho=e,Hn.dependencies={lanes:0,firstContext:e}}else ho=ho.next=e;return r}var Yt=null;function fa(e){Yt===null?Yt=[e]:Yt.push(e)}function zi(e,r,t,n){var l=r.interleaved;return l===null?(t.next=t,fa(r)):(t.next=l.next,l.next=t),r.interleaved=t,ht(e,n)}function ht(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tt=!1;function ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oi(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Mt(e,r,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Me&2)!==0){var l=n.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r,ht(e,t)}return l=n.interleaved,l===null?(r.next=r,fa(n)):(r.next=l.next,l.next=r),n.interleaved=r,ht(e,t)}function Un(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,Ml(e,t)}}function Di(e,r){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var l=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?l=a=c:a=a.next=c,t=t.next}while(t!==null);a===null?l=a=r:a=a.next=r}else l=a=r;t={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Wn(e,r,t,n){var l=e.updateQueue;Tt=!1;var a=l.firstBaseUpdate,c=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var g=h,M=g.next;g.next=null,c===null?a=M:c.next=M,c=g;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,h=Y.lastBaseUpdate,h!==c&&(h===null?Y.firstBaseUpdate=M:h.next=M,Y.lastBaseUpdate=g))}if(a!==null){var q=l.baseState;c=0,Y=M=g=null,h=a;do{var B=h.lane,re=h.eventTime;if((n&B)===B){Y!==null&&(Y=Y.next={eventTime:re,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var se=e,ce=h;switch(B=r,re=t,ce.tag){case 1:if(se=ce.payload,typeof se=="function"){q=se.call(re,q,B);break e}q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ce.payload,B=typeof se=="function"?se.call(re,q,B):se,B==null)break e;q=D({},q,B);break e;case 2:Tt=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,B=l.effects,B===null?l.effects=[h]:B.push(h))}else re={eventTime:re,lane:B,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Y===null?(M=Y=re,g=q):Y=Y.next=re,c|=B;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;B=h,h=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);if(Y===null&&(g=q),l.baseState=g,l.firstBaseUpdate=M,l.lastBaseUpdate=Y,r=l.shared.interleaved,r!==null){l=r;do c|=l.lane,l=l.next;while(l!==r)}else a===null&&(l.shared.lanes=0);Vt|=c,e.lanes=c,e.memoizedState=q}}function _i(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],l=n.callback;if(l!==null){if(n.callback=null,n=t,typeof l!="function")throw Error(i(191,l));l.call(n)}}}var $o={},lt=St($o),Vo=St($o),Qo=St($o);function qt(e){if(e===$o)throw Error(i(174));return e}function va(e,r){switch(Le(Qo,r),Le(Vo,e),Le(lt,$o),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:tt(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=tt(r,e)}Ye(lt),Le(lt,r)}function fo(){Ye(lt),Ye(Vo),Ye(Qo)}function Ri(e){qt(Qo.current);var r=qt(lt.current),t=tt(r,e.type);r!==t&&(Le(Vo,e),Le(lt,t))}function xa(e){Vo.current===e&&(Ye(lt),Ye(Vo))}var Qe=St(0);function Bn(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ya=[];function ba(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var Yn=Z.ReactCurrentDispatcher,ka=Z.ReactCurrentBatchConfig,$t=0,Xe=null,rr=null,lr=null,qn=!1,Xo=!1,Ko=0,Hd=0;function mr(){throw Error(i(321))}function Na(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Qr(e[t],r[t]))return!1;return!0}function wa(e,r,t,n,l,a){if($t=a,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Yn.current=e===null||e.memoizedState===null?Yd:qd,e=t(n,l),Xo){a=0;do{if(Xo=!1,Ko=0,25<=a)throw Error(i(301));a+=1,lr=rr=null,r.updateQueue=null,Yn.current=$d,e=t(n,l)}while(Xo)}if(Yn.current=Qn,r=rr!==null&&rr.next!==null,$t=0,lr=rr=Xe=null,qn=!1,r)throw Error(i(300));return e}function ja(){var e=Ko!==0;return Ko=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lr===null?Xe.memoizedState=lr=e:lr=lr.next=e,lr}function Hr(){if(rr===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=rr.next;var r=lr===null?Xe.memoizedState:lr.next;if(r!==null)lr=r,rr=e;else{if(e===null)throw Error(i(310));rr=e,e={memoizedState:rr.memoizedState,baseState:rr.baseState,baseQueue:rr.baseQueue,queue:rr.queue,next:null},lr===null?Xe.memoizedState=lr=e:lr=lr.next=e}return lr}function Go(e,r){return typeof r=="function"?r(e):r}function Ca(e){var r=Hr(),t=r.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var n=rr,l=n.baseQueue,a=t.pending;if(a!==null){if(l!==null){var c=l.next;l.next=a.next,a.next=c}n.baseQueue=l=a,t.pending=null}if(l!==null){a=l.next,n=n.baseState;var h=c=null,g=null,M=a;do{var Y=M.lane;if(($t&Y)===Y)g!==null&&(g=g.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),n=M.hasEagerState?M.eagerState:e(n,M.action);else{var q={lane:Y,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};g===null?(h=g=q,c=n):g=g.next=q,Xe.lanes|=Y,Vt|=Y}M=M.next}while(M!==null&&M!==a);g===null?c=n:g.next=h,Qr(n,r.memoizedState)||(jr=!0),r.memoizedState=n,r.baseState=c,r.baseQueue=g,t.lastRenderedState=n}if(e=t.interleaved,e!==null){l=e;do a=l.lane,Xe.lanes|=a,Vt|=a,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Sa(e){var r=Hr(),t=r.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var n=t.dispatch,l=t.pending,a=r.memoizedState;if(l!==null){t.pending=null;var c=l=l.next;do a=e(a,c.action),c=c.next;while(c!==l);Qr(a,r.memoizedState)||(jr=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),t.lastRenderedState=a}return[a,n]}function Ai(){}function Fi(e,r){var t=Xe,n=Hr(),l=r(),a=!Qr(n.memoizedState,l);if(a&&(n.memoizedState=l,jr=!0),n=n.queue,Pa(Hi.bind(null,t,n,e),[e]),n.getSnapshot!==r||a||lr!==null&&lr.memoizedState.tag&1){if(t.flags|=2048,Jo(9,Li.bind(null,t,n,l,r),void 0,null),ar===null)throw Error(i(349));($t&30)!==0||Ii(t,r,l)}return l}function Ii(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Li(e,r,t,n){r.value=t,r.getSnapshot=n,Ui(r)&&Wi(e)}function Hi(e,r,t){return t(function(){Ui(r)&&Wi(e)})}function Ui(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Qr(e,t)}catch{return!0}}function Wi(e){var r=ht(e,1);r!==null&&Zr(r,e,1,-1)}function Bi(e){var r=at();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},r.queue=e,e=e.dispatch=Bd.bind(null,Xe,e),[r.memoizedState,e]}function Jo(e,r,t,n){return e={tag:e,create:r,destroy:t,deps:n,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,r.lastEffect=e)),e}function Yi(){return Hr().memoizedState}function $n(e,r,t,n){var l=at();Xe.flags|=e,l.memoizedState=Jo(1|r,t,void 0,n===void 0?null:n)}function Vn(e,r,t,n){var l=Hr();n=n===void 0?null:n;var a=void 0;if(rr!==null){var c=rr.memoizedState;if(a=c.destroy,n!==null&&Na(n,c.deps)){l.memoizedState=Jo(r,t,a,n);return}}Xe.flags|=e,l.memoizedState=Jo(1|r,t,a,n)}function qi(e,r){return $n(8390656,8,e,r)}function Pa(e,r){return Vn(2048,8,e,r)}function $i(e,r){return Vn(4,2,e,r)}function Vi(e,r){return Vn(4,4,e,r)}function Qi(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Xi(e,r,t){return t=t!=null?t.concat([e]):null,Vn(4,4,Qi.bind(null,r,e),t)}function Ea(){}function Ki(e,r){var t=Hr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&Na(r,n[1])?n[0]:(t.memoizedState=[e,r],e)}function Gi(e,r){var t=Hr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&Na(r,n[1])?n[0]:(e=e(),t.memoizedState=[e,r],e)}function Ji(e,r,t){return($t&21)===0?(e.baseState&&(e.baseState=!1,jr=!0),e.memoizedState=t):(Qr(t,r)||(t=Es(),Xe.lanes|=t,Vt|=t,e.baseState=!0),r)}function Ud(e,r){var t=Fe;Fe=t!==0&&4>t?t:4,e(!0);var n=ka.transition;ka.transition={};try{e(!1),r()}finally{Fe=t,ka.transition=n}}function Zi(){return Hr().memoizedState}function Wd(e,r,t){var n=_t(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},ec(e))rc(r,t);else if(t=zi(e,r,t,n),t!==null){var l=br();Zr(t,e,n,l),tc(t,r,n)}}function Bd(e,r,t){var n=_t(e),l={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(ec(e))rc(r,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var c=r.lastRenderedState,h=a(c,t);if(l.hasEagerState=!0,l.eagerState=h,Qr(h,c)){var g=r.interleaved;g===null?(l.next=l,fa(r)):(l.next=g.next,g.next=l),r.interleaved=l;return}}catch{}finally{}t=zi(e,r,l,n),t!==null&&(l=br(),Zr(t,e,n,l),tc(t,r,n))}}function ec(e){var r=e.alternate;return e===Xe||r!==null&&r===Xe}function rc(e,r){Xo=qn=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function tc(e,r,t){if((t&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,Ml(e,t)}}var Qn={readContext:Lr,useCallback:mr,useContext:mr,useEffect:mr,useImperativeHandle:mr,useInsertionEffect:mr,useLayoutEffect:mr,useMemo:mr,useReducer:mr,useRef:mr,useState:mr,useDebugValue:mr,useDeferredValue:mr,useTransition:mr,useMutableSource:mr,useSyncExternalStore:mr,useId:mr,unstable_isNewReconciler:!1},Yd={readContext:Lr,useCallback:function(e,r){return at().memoizedState=[e,r===void 0?null:r],e},useContext:Lr,useEffect:qi,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,$n(4194308,4,Qi.bind(null,r,e),t)},useLayoutEffect:function(e,r){return $n(4194308,4,e,r)},useInsertionEffect:function(e,r){return $n(4,2,e,r)},useMemo:function(e,r){var t=at();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var n=at();return r=t!==void 0?t(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Wd.bind(null,Xe,e),[n.memoizedState,e]},useRef:function(e){var r=at();return e={current:e},r.memoizedState=e},useState:Bi,useDebugValue:Ea,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Bi(!1),r=e[0];return e=Ud.bind(null,e[1]),at().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var n=Xe,l=at();if($e){if(t===void 0)throw Error(i(407));t=t()}else{if(t=r(),ar===null)throw Error(i(349));($t&30)!==0||Ii(n,r,t)}l.memoizedState=t;var a={value:t,getSnapshot:r};return l.queue=a,qi(Hi.bind(null,n,a,e),[e]),n.flags|=2048,Jo(9,Li.bind(null,n,a,t,r),void 0,null),t},useId:function(){var e=at(),r=ar.identifierPrefix;if($e){var t=pt,n=dt;t=(n&~(1<<32-Vr(n)-1)).toString(32)+t,r=":"+r+"R"+t,t=Ko++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=Hd++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},qd={readContext:Lr,useCallback:Ki,useContext:Lr,useEffect:Pa,useImperativeHandle:Xi,useInsertionEffect:$i,useLayoutEffect:Vi,useMemo:Gi,useReducer:Ca,useRef:Yi,useState:function(){return Ca(Go)},useDebugValue:Ea,useDeferredValue:function(e){var r=Hr();return Ji(r,rr.memoizedState,e)},useTransition:function(){var e=Ca(Go)[0],r=Hr().memoizedState;return[e,r]},useMutableSource:Ai,useSyncExternalStore:Fi,useId:Zi,unstable_isNewReconciler:!1},$d={readContext:Lr,useCallback:Ki,useContext:Lr,useEffect:Pa,useImperativeHandle:Xi,useInsertionEffect:$i,useLayoutEffect:Vi,useMemo:Gi,useReducer:Sa,useRef:Yi,useState:function(){return Sa(Go)},useDebugValue:Ea,useDeferredValue:function(e){var r=Hr();return rr===null?r.memoizedState=e:Ji(r,rr.memoizedState,e)},useTransition:function(){var e=Sa(Go)[0],r=Hr().memoizedState;return[e,r]},useMutableSource:Ai,useSyncExternalStore:Fi,useId:Zi,unstable_isNewReconciler:!1};function Kr(e,r){if(e&&e.defaultProps){r=D({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function Ta(e,r,t,n){r=e.memoizedState,t=t(n,r),t=t==null?r:D({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Xn={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var n=br(),l=_t(e),a=mt(n,l);a.payload=r,t!=null&&(a.callback=t),r=Mt(e,a,l),r!==null&&(Zr(r,e,l,n),Un(r,e,l))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var n=br(),l=_t(e),a=mt(n,l);a.tag=1,a.payload=r,t!=null&&(a.callback=t),r=Mt(e,a,l),r!==null&&(Zr(r,e,l,n),Un(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=br(),n=_t(e),l=mt(t,n);l.tag=2,r!=null&&(l.callback=r),r=Mt(e,l,n),r!==null&&(Zr(r,e,n,t),Un(r,e,n))}};function oc(e,r,t,n,l,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,c):r.prototype&&r.prototype.isPureReactComponent?!Io(t,n)||!Io(l,a):!0}function nc(e,r,t){var n=!1,l=Pt,a=r.contextType;return typeof a=="object"&&a!==null?a=Lr(a):(l=wr(r)?Ut:hr.current,n=r.contextTypes,a=(n=n!=null)?so(e,l):Pt),r=new r(t,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xn,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),r}function lc(e,r,t,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,n),r.state!==e&&Xn.enqueueReplaceState(r,r.state,null)}function Ma(e,r,t,n){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},ga(e);var a=r.contextType;typeof a=="object"&&a!==null?l.context=Lr(a):(a=wr(r)?Ut:hr.current,l.context=so(e,a)),l.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Ta(e,r,a,t),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Xn.enqueueReplaceState(l,l.state,null),Wn(e,t,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function go(e,r){try{var t="",n=r;do t+=fe(n),n=n.return;while(n);var l=t}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:l,digest:null}}function za(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function Oa(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Vd=typeof WeakMap=="function"?WeakMap:Map;function ac(e,r,t){t=mt(-1,t),t.tag=3,t.payload={element:null};var n=r.value;return t.callback=function(){tl||(tl=!0,Va=n),Oa(e,r)},t}function sc(e,r,t){t=mt(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=r.value;t.payload=function(){return n(l)},t.callback=function(){Oa(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Oa(e,r),typeof n!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})}),t}function ic(e,r,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Vd;var l=new Set;n.set(r,l)}else l=n.get(r),l===void 0&&(l=new Set,n.set(r,l));l.has(t)||(l.add(t),e=sp.bind(null,e,r,t),r.then(e,e))}function cc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function uc(e,r,t,n,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=mt(-1,1),r.tag=2,Mt(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Qd=Z.ReactCurrentOwner,jr=!1;function yr(e,r,t,n){r.child=e===null?Mi(r,null,t,n):po(r,e.child,t,n)}function dc(e,r,t,n,l){t=t.render;var a=r.ref;return mo(r,l),n=wa(e,r,t,n,a,l),t=ja(),e!==null&&!jr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,ft(e,r,l)):($e&&t&&aa(r),r.flags|=1,yr(e,r,n,l),r.child)}function pc(e,r,t,n,l){if(e===null){var a=t.type;return typeof a=="function"&&!es(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=a,hc(e,r,a,n,l)):(e=il(t.type,null,n,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&l)===0){var c=a.memoizedProps;if(t=t.compare,t=t!==null?t:Io,t(c,n)&&e.ref===r.ref)return ft(e,r,l)}return r.flags|=1,e=At(a,n),e.ref=r.ref,e.return=r,r.child=e}function hc(e,r,t,n,l){if(e!==null){var a=e.memoizedProps;if(Io(a,n)&&e.ref===r.ref)if(jr=!1,r.pendingProps=n=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(jr=!0);else return r.lanes=e.lanes,ft(e,r,l)}return Da(e,r,t,n,l)}function mc(e,r,t){var n=r.pendingProps,l=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(xo,Dr),Dr|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Le(xo,Dr),Dr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:t,Le(xo,Dr),Dr|=n}else a!==null?(n=a.baseLanes|t,r.memoizedState=null):n=t,Le(xo,Dr),Dr|=n;return yr(e,r,l,t),r.child}function fc(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function Da(e,r,t,n,l){var a=wr(t)?Ut:hr.current;return a=so(r,a),mo(r,l),t=wa(e,r,t,n,a,l),n=ja(),e!==null&&!jr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,ft(e,r,l)):($e&&n&&aa(r),r.flags|=1,yr(e,r,t,l),r.child)}function gc(e,r,t,n,l){if(wr(t)){var a=!0;Dn(r)}else a=!1;if(mo(r,l),r.stateNode===null)Gn(e,r),nc(r,t,n),Ma(r,t,n,l),n=!0;else if(e===null){var c=r.stateNode,h=r.memoizedProps;c.props=h;var g=c.context,M=t.contextType;typeof M=="object"&&M!==null?M=Lr(M):(M=wr(t)?Ut:hr.current,M=so(r,M));var Y=t.getDerivedStateFromProps,q=typeof Y=="function"||typeof c.getSnapshotBeforeUpdate=="function";q||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==n||g!==M)&&lc(r,c,n,M),Tt=!1;var B=r.memoizedState;c.state=B,Wn(r,n,c,l),g=r.memoizedState,h!==n||B!==g||Nr.current||Tt?(typeof Y=="function"&&(Ta(r,t,Y,n),g=r.memoizedState),(h=Tt||oc(r,t,h,n,B,g,M))?(q||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(r.flags|=4194308)):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=g),c.props=n,c.state=g,c.context=M,n=h):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{c=r.stateNode,Oi(e,r),h=r.memoizedProps,M=r.type===r.elementType?h:Kr(r.type,h),c.props=M,q=r.pendingProps,B=c.context,g=t.contextType,typeof g=="object"&&g!==null?g=Lr(g):(g=wr(t)?Ut:hr.current,g=so(r,g));var re=t.getDerivedStateFromProps;(Y=typeof re=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==q||B!==g)&&lc(r,c,n,g),Tt=!1,B=r.memoizedState,c.state=B,Wn(r,n,c,l);var se=r.memoizedState;h!==q||B!==se||Nr.current||Tt?(typeof re=="function"&&(Ta(r,t,re,n),se=r.memoizedState),(M=Tt||oc(r,t,M,n,B,se,g)||!1)?(Y||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,se,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,se,g)),typeof c.componentDidUpdate=="function"&&(r.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&B===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&B===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=se),c.props=n,c.state=se,c.context=g,n=M):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&B===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&B===e.memoizedState||(r.flags|=1024),n=!1)}return _a(e,r,t,n,a,l)}function _a(e,r,t,n,l,a){fc(e,r);var c=(r.flags&128)!==0;if(!n&&!c)return l&&ki(r,t,!1),ft(e,r,a);n=r.stateNode,Qd.current=r;var h=c&&typeof t.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&c?(r.child=po(r,e.child,null,a),r.child=po(r,null,h,a)):yr(e,r,h,a),r.memoizedState=n.state,l&&ki(r,t,!0),r.child}function vc(e){var r=e.stateNode;r.pendingContext?yi(e,r.pendingContext,r.pendingContext!==r.context):r.context&&yi(e,r.context,!1),va(e,r.containerInfo)}function xc(e,r,t,n,l){return uo(),ua(l),r.flags|=256,yr(e,r,t,n),r.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,r,t){var n=r.pendingProps,l=Qe.current,a=!1,c=(r.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(l&2)!==0),h?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Le(Qe,l&1),e===null)return ca(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(c=n.children,e=n.fallback,a?(n=r.mode,a=r.child,c={mode:"hidden",children:c},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=cl(c,n,0,null),e=Gt(e,n,t,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=Aa(t),r.memoizedState=Ra,e):Fa(r,c));if(l=e.memoizedState,l!==null&&(h=l.dehydrated,h!==null))return Xd(e,r,c,n,h,l,t);if(a){a=n.fallback,c=r.mode,l=e.child,h=l.sibling;var g={mode:"hidden",children:n.children};return(c&1)===0&&r.child!==l?(n=r.child,n.childLanes=0,n.pendingProps=g,r.deletions=null):(n=At(l,g),n.subtreeFlags=l.subtreeFlags&14680064),h!==null?a=At(h,a):(a=Gt(a,c,t,null),a.flags|=2),a.return=r,n.return=r,n.sibling=a,r.child=n,n=a,a=r.child,c=e.child.memoizedState,c=c===null?Aa(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~t,r.memoizedState=Ra,n}return a=e.child,e=a.sibling,n=At(a,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=t),n.return=r,n.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=n,r.memoizedState=null,n}function Fa(e,r){return r=cl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Kn(e,r,t,n){return n!==null&&ua(n),po(r,e.child,null,t),e=Fa(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Xd(e,r,t,n,l,a,c){if(t)return r.flags&256?(r.flags&=-257,n=za(Error(i(422))),Kn(e,r,c,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=n.fallback,l=r.mode,n=cl({mode:"visible",children:n.children},l,0,null),a=Gt(a,l,c,null),a.flags|=2,n.return=r,a.return=r,n.sibling=a,r.child=n,(r.mode&1)!==0&&po(r,e.child,null,c),r.child.memoizedState=Aa(c),r.memoizedState=Ra,a);if((r.mode&1)===0)return Kn(e,r,c,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var h=n.dgst;return n=h,a=Error(i(419)),n=za(a,n,void 0),Kn(e,r,c,n)}if(h=(c&e.childLanes)!==0,jr||h){if(n=ar,n!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(n.suspendedLanes|c))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,ht(e,l),Zr(n,e,l,-1))}return Za(),n=za(Error(i(421))),Kn(e,r,c,n)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=ip.bind(null,e),l._reactRetry=r,null):(e=a.treeContext,Or=Ct(l.nextSibling),zr=r,$e=!0,Xr=null,e!==null&&(Fr[Ir++]=dt,Fr[Ir++]=pt,Fr[Ir++]=Wt,dt=e.id,pt=e.overflow,Wt=r),r=Fa(r,n.children),r.flags|=4096,r)}function bc(e,r,t){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),ma(e.return,r,t)}function Ia(e,r,t,n,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:l}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=t,a.tailMode=l)}function kc(e,r,t){var n=r.pendingProps,l=n.revealOrder,a=n.tail;if(yr(e,r,n.children,t),n=Qe.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,t,r);else if(e.tag===19)bc(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Le(Qe,n),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(t=r.child,l=null;t!==null;)e=t.alternate,e!==null&&Bn(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=r.child,r.child=null):(l=t.sibling,t.sibling=null),Ia(r,!1,l,t,a);break;case"backwards":for(t=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&Bn(e)===null){r.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ia(r,!0,t,null,a);break;case"together":Ia(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Gn(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function ft(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Vt|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(i(153));if(r.child!==null){for(e=r.child,t=At(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=At(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Kd(e,r,t){switch(r.tag){case 3:vc(r),uo();break;case 5:Ri(r);break;case 1:wr(r.type)&&Dn(r);break;case 4:va(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,l=r.memoizedProps.value;Le(Ln,n._currentValue),n._currentValue=l;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(Le(Qe,Qe.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?yc(e,r,t):(Le(Qe,Qe.current&1),e=ft(e,r,t),e!==null?e.sibling:null);Le(Qe,Qe.current&1);break;case 19:if(n=(t&r.childLanes)!==0,(e.flags&128)!==0){if(n)return kc(e,r,t);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Le(Qe,Qe.current),n)break;return null;case 22:case 23:return r.lanes=0,mc(e,r,t)}return ft(e,r,t)}var Nc,La,wc,jc;Nc=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},La=function(){},wc=function(e,r,t,n){var l=e.memoizedProps;if(l!==n){e=r.stateNode,qt(lt.current);var a=null;switch(t){case"input":l=w(e,l),n=w(e,n),a=[];break;case"select":l=D({},l,{value:void 0}),n=D({},n,{value:void 0}),a=[];break;case"textarea":l=vr(e,l),n=vr(e,n),a=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Mn)}Re(t,n);var c;t=null;for(M in l)if(!n.hasOwnProperty(M)&&l.hasOwnProperty(M)&&l[M]!=null)if(M==="style"){var h=l[M];for(c in h)h.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(m.hasOwnProperty(M)?a||(a=[]):(a=a||[]).push(M,null));for(M in n){var g=n[M];if(h=l?.[M],n.hasOwnProperty(M)&&g!==h&&(g!=null||h!=null))if(M==="style")if(h){for(c in h)!h.hasOwnProperty(c)||g&&g.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in g)g.hasOwnProperty(c)&&h[c]!==g[c]&&(t||(t={}),t[c]=g[c])}else t||(a||(a=[]),a.push(M,t)),t=g;else M==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(a=a||[]).push(M,g)):M==="children"?typeof g!="string"&&typeof g!="number"||(a=a||[]).push(M,""+g):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(m.hasOwnProperty(M)?(g!=null&&M==="onScroll"&&Be("scroll",e),a||h===g||(a=[])):(a=a||[]).push(M,g))}t&&(a=a||[]).push("style",t);var M=a;(r.updateQueue=M)&&(r.flags|=4)}},jc=function(e,r,t,n){t!==n&&(r.flags|=4)};function Zo(e,r){if(!$e)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function fr(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(r)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=t,r}function Gd(e,r,t){var n=r.pendingProps;switch(sa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fr(r),null;case 1:return wr(r.type)&&On(),fr(r),null;case 3:return n=r.stateNode,fo(),Ye(Nr),Ye(hr),ba(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fn(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Xr!==null&&(Ka(Xr),Xr=null))),La(e,r),fr(r),null;case 5:xa(r);var l=qt(Qo.current);if(t=r.type,e!==null&&r.stateNode!=null)wc(e,r,t,n,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(i(166));return fr(r),null}if(e=qt(lt.current),Fn(r)){n=r.stateNode,t=r.type;var a=r.memoizedProps;switch(n[nt]=r,n[Bo]=a,e=(r.mode&1)!==0,t){case"dialog":Be("cancel",n),Be("close",n);break;case"iframe":case"object":case"embed":Be("load",n);break;case"video":case"audio":for(l=0;l<Ho.length;l++)Be(Ho[l],n);break;case"source":Be("error",n);break;case"img":case"image":case"link":Be("error",n),Be("load",n);break;case"details":Be("toggle",n);break;case"input":U(n,a),Be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Be("invalid",n);break;case"textarea":He(n,a),Be("invalid",n)}Re(t,a),l=null;for(var c in a)if(a.hasOwnProperty(c)){var h=a[c];c==="children"?typeof h=="string"?n.textContent!==h&&(a.suppressHydrationWarning!==!0&&Tn(n.textContent,h,e),l=["children",h]):typeof h=="number"&&n.textContent!==""+h&&(a.suppressHydrationWarning!==!0&&Tn(n.textContent,h,e),l=["children",""+h]):m.hasOwnProperty(c)&&h!=null&&c==="onScroll"&&Be("scroll",n)}switch(t){case"input":ir(n),xe(n,a,!0);break;case"textarea":ir(n),Er(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Mn)}n=l,r.updateQueue=n,n!==null&&(r.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rr(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(t,{is:n.is}):(e=c.createElement(t),t==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,t),e[nt]=r,e[Bo]=n,Nc(e,r,!1,!1),r.stateNode=e;e:{switch(c=We(t,n),t){case"dialog":Be("cancel",e),Be("close",e),l=n;break;case"iframe":case"object":case"embed":Be("load",e),l=n;break;case"video":case"audio":for(l=0;l<Ho.length;l++)Be(Ho[l],e);l=n;break;case"source":Be("error",e),l=n;break;case"img":case"image":case"link":Be("error",e),Be("load",e),l=n;break;case"details":Be("toggle",e),l=n;break;case"input":U(e,n),l=w(e,n),Be("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=D({},n,{value:void 0}),Be("invalid",e);break;case"textarea":He(e,n),l=vr(e,n),Be("invalid",e);break;default:l=n}Re(t,l),h=l;for(a in h)if(h.hasOwnProperty(a)){var g=h[a];a==="style"?R(e,g):a==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Tr(e,g)):a==="children"?typeof g=="string"?(t!=="textarea"||g!=="")&&z(e,g):typeof g=="number"&&z(e,""+g):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?g!=null&&a==="onScroll"&&Be("scroll",e):g!=null&&$(e,a,g,c))}switch(t){case"input":ir(e),xe(e,n,!1);break;case"textarea":ir(e),Er(e);break;case"option":n.value!=null&&e.setAttribute("value",""+je(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?nr(e,!!n.multiple,a,!1):n.defaultValue!=null&&nr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Mn)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return fr(r),null;case 6:if(e&&r.stateNode!=null)jc(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(i(166));if(t=qt(Qo.current),qt(lt.current),Fn(r)){if(n=r.stateNode,t=r.memoizedProps,n[nt]=r,(a=n.nodeValue!==t)&&(e=zr,e!==null))switch(e.tag){case 3:Tn(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tn(n.nodeValue,t,(e.mode&1)!==0)}a&&(r.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[nt]=r,r.stateNode=n}return fr(r),null;case 13:if(Ye(Qe),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Or!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Pi(),uo(),r.flags|=98560,a=!1;else if(a=Fn(r),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[nt]=r}else uo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;fr(r),a=!1}else Xr!==null&&(Ka(Xr),Xr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Qe.current&1)!==0?tr===0&&(tr=3):Za())),r.updateQueue!==null&&(r.flags|=4),fr(r),null);case 4:return fo(),La(e,r),e===null&&Uo(r.stateNode.containerInfo),fr(r),null;case 10:return ha(r.type._context),fr(r),null;case 17:return wr(r.type)&&On(),fr(r),null;case 19:if(Ye(Qe),a=r.memoizedState,a===null)return fr(r),null;if(n=(r.flags&128)!==0,c=a.rendering,c===null)if(n)Zo(a,!1);else{if(tr!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(c=Bn(e),c!==null){for(r.flags|=128,Zo(a,!1),n=c.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=t,t=r.child;t!==null;)a=t,e=n,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Le(Qe,Qe.current&1|2),r.child}e=e.sibling}a.tail!==null&&Ge()>yo&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304)}else{if(!n)if(e=Bn(c),e!==null){if(r.flags|=128,n=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Zo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!$e)return fr(r),null}else 2*Ge()-a.renderingStartTime>yo&&t!==1073741824&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304);a.isBackwards?(c.sibling=r.child,r.child=c):(t=a.last,t!==null?t.sibling=c:r.child=c,a.last=c)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Ge(),r.sibling=null,t=Qe.current,Le(Qe,n?t&1|2:t&1),r):(fr(r),null);case 22:case 23:return Ja(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(Dr&1073741824)!==0&&(fr(r),r.subtreeFlags&6&&(r.flags|=8192)):fr(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function Jd(e,r){switch(sa(r),r.tag){case 1:return wr(r.type)&&On(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return fo(),Ye(Nr),Ye(hr),ba(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return xa(r),null;case 13:if(Ye(Qe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(i(340));uo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ye(Qe),null;case 4:return fo(),null;case 10:return ha(r.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var Jn=!1,gr=!1,Zd=typeof WeakSet=="function"?WeakSet:Set,le=null;function vo(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Ke(e,r,n)}else t.current=null}function Ha(e,r,t){try{t()}catch(n){Ke(e,r,n)}}var Cc=!1;function ep(e,r){if(Jl=xn,e=oi(),Yl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var l=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var c=0,h=-1,g=-1,M=0,Y=0,q=e,B=null;r:for(;;){for(var re;q!==t||l!==0&&q.nodeType!==3||(h=c+l),q!==a||n!==0&&q.nodeType!==3||(g=c+n),q.nodeType===3&&(c+=q.nodeValue.length),(re=q.firstChild)!==null;)B=q,q=re;for(;;){if(q===e)break r;if(B===t&&++M===l&&(h=c),B===a&&++Y===n&&(g=c),(re=q.nextSibling)!==null)break;q=B,B=q.parentNode}q=re}t=h===-1||g===-1?null:{start:h,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zl={focusedElem:e,selectionRange:t},xn=!1,le=r;le!==null;)if(r=le,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,le=e;else for(;le!==null;){r=le;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var ce=se.memoizedProps,Je=se.memoizedState,j=r.stateNode,v=j.getSnapshotBeforeUpdate(r.elementType===r.type?ce:Kr(r.type,ce),Je);j.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var P=r.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(X){Ke(r,r.return,X)}if(e=r.sibling,e!==null){e.return=r.return,le=e;break}le=r.return}return se=Cc,Cc=!1,se}function en(e,r,t){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Ha(r,t,a)}l=l.next}while(l!==n)}}function Zn(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==r)}}function Ua(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Sc(e){var r=e.alternate;r!==null&&(e.alternate=null,Sc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[nt],delete r[Bo],delete r[oa],delete r[Ad],delete r[Fd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Mn));else if(n!==4&&(e=e.child,e!==null))for(Wa(e,r,t),e=e.sibling;e!==null;)Wa(e,r,t),e=e.sibling}function Ba(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ba(e,r,t),e=e.sibling;e!==null;)Ba(e,r,t),e=e.sibling}var cr=null,Gr=!1;function zt(e,r,t){for(t=t.child;t!==null;)Tc(e,r,t),t=t.sibling}function Tc(e,r,t){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(pn,t)}catch{}switch(t.tag){case 5:gr||vo(t,r);case 6:var n=cr,l=Gr;cr=null,zt(e,r,t),cr=n,Gr=l,cr!==null&&(Gr?(e=cr,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):cr.removeChild(t.stateNode));break;case 18:cr!==null&&(Gr?(e=cr,t=t.stateNode,e.nodeType===8?ta(e.parentNode,t):e.nodeType===1&&ta(e,t),Oo(e)):ta(cr,t.stateNode));break;case 4:n=cr,l=Gr,cr=t.stateNode.containerInfo,Gr=!0,zt(e,r,t),cr=n,Gr=l;break;case 0:case 11:case 14:case 15:if(!gr&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var a=l,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&Ha(t,r,c),l=l.next}while(l!==n)}zt(e,r,t);break;case 1:if(!gr&&(vo(t,r),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(h){Ke(t,r,h)}zt(e,r,t);break;case 21:zt(e,r,t);break;case 22:t.mode&1?(gr=(n=gr)||t.memoizedState!==null,zt(e,r,t),gr=n):zt(e,r,t);break;default:zt(e,r,t)}}function Mc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Zd),r.forEach(function(n){var l=cp.bind(null,e,n);t.has(n)||(t.add(n),n.then(l,l))})}}function Jr(e,r){var t=r.deletions;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];try{var a=e,c=r,h=c;e:for(;h!==null;){switch(h.tag){case 5:cr=h.stateNode,Gr=!1;break e;case 3:cr=h.stateNode.containerInfo,Gr=!0;break e;case 4:cr=h.stateNode.containerInfo,Gr=!0;break e}h=h.return}if(cr===null)throw Error(i(160));Tc(a,c,l),cr=null,Gr=!1;var g=l.alternate;g!==null&&(g.return=null),l.return=null}catch(M){Ke(l,r,M)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)zc(r,e),r=r.sibling}function zc(e,r){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jr(r,e),st(e),n&4){try{en(3,e,e.return),Zn(3,e)}catch(ce){Ke(e,e.return,ce)}try{en(5,e,e.return)}catch(ce){Ke(e,e.return,ce)}}break;case 1:Jr(r,e),st(e),n&512&&t!==null&&vo(t,t.return);break;case 5:if(Jr(r,e),st(e),n&512&&t!==null&&vo(t,t.return),e.flags&32){var l=e.stateNode;try{z(l,"")}catch(ce){Ke(e,e.return,ce)}}if(n&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,c=t!==null?t.memoizedProps:a,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&a.type==="radio"&&a.name!=null&&ie(l,a),We(h,c);var M=We(h,a);for(c=0;c<g.length;c+=2){var Y=g[c],q=g[c+1];Y==="style"?R(l,q):Y==="dangerouslySetInnerHTML"?Tr(l,q):Y==="children"?z(l,q):$(l,Y,q,M)}switch(h){case"input":te(l,a);break;case"textarea":Ze(l,a);break;case"select":var B=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var re=a.value;re!=null?nr(l,!!a.multiple,re,!1):B!==!!a.multiple&&(a.defaultValue!=null?nr(l,!!a.multiple,a.defaultValue,!0):nr(l,!!a.multiple,a.multiple?[]:"",!1))}l[Bo]=a}catch(ce){Ke(e,e.return,ce)}}break;case 6:if(Jr(r,e),st(e),n&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(ce){Ke(e,e.return,ce)}}break;case 3:if(Jr(r,e),st(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Oo(r.containerInfo)}catch(ce){Ke(e,e.return,ce)}break;case 4:Jr(r,e),st(e);break;case 13:Jr(r,e),st(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||($a=Ge())),n&4&&Mc(e);break;case 22:if(Y=t!==null&&t.memoizedState!==null,e.mode&1?(gr=(M=gr)||Y,Jr(r,e),gr=M):Jr(r,e),st(e),n&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!Y&&(e.mode&1)!==0)for(le=e,Y=e.child;Y!==null;){for(q=le=Y;le!==null;){switch(B=le,re=B.child,B.tag){case 0:case 11:case 14:case 15:en(4,B,B.return);break;case 1:vo(B,B.return);var se=B.stateNode;if(typeof se.componentWillUnmount=="function"){n=B,t=B.return;try{r=n,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(ce){Ke(n,t,ce)}}break;case 5:vo(B,B.return);break;case 22:if(B.memoizedState!==null){_c(q);continue}}re!==null?(re.return=B,le=re):_c(q)}Y=Y.sibling}e:for(Y=null,q=e;;){if(q.tag===5){if(Y===null){Y=q;try{l=q.stateNode,M?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(h=q.stateNode,g=q.memoizedProps.style,c=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=_e("display",c))}catch(ce){Ke(e,e.return,ce)}}}else if(q.tag===6){if(Y===null)try{q.stateNode.nodeValue=M?"":q.memoizedProps}catch(ce){Ke(e,e.return,ce)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===e)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===e)break e;for(;q.sibling===null;){if(q.return===null||q.return===e)break e;Y===q&&(Y=null),q=q.return}Y===q&&(Y=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:Jr(r,e),st(e),n&4&&Mc(e);break;case 21:break;default:Jr(r,e),st(e)}}function st(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Pc(t)){var n=t;break e}t=t.return}throw Error(i(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(z(l,""),n.flags&=-33);var a=Ec(e);Ba(e,a,l);break;case 3:case 4:var c=n.stateNode.containerInfo,h=Ec(e);Wa(e,h,c);break;default:throw Error(i(161))}}catch(g){Ke(e,e.return,g)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function rp(e,r,t){le=e,Oc(e)}function Oc(e,r,t){for(var n=(e.mode&1)!==0;le!==null;){var l=le,a=l.child;if(l.tag===22&&n){var c=l.memoizedState!==null||Jn;if(!c){var h=l.alternate,g=h!==null&&h.memoizedState!==null||gr;h=Jn;var M=gr;if(Jn=c,(gr=g)&&!M)for(le=l;le!==null;)c=le,g=c.child,c.tag===22&&c.memoizedState!==null?Rc(l):g!==null?(g.return=c,le=g):Rc(l);for(;a!==null;)le=a,Oc(a),a=a.sibling;le=l,Jn=h,gr=M}Dc(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,le=a):Dc(e)}}function Dc(e){for(;le!==null;){var r=le;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:gr||Zn(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!gr)if(t===null)n.componentDidMount();else{var l=r.elementType===r.type?t.memoizedProps:Kr(r.type,t.memoizedProps);n.componentDidUpdate(l,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&_i(r,a,n);break;case 3:var c=r.updateQueue;if(c!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}_i(r,c,t)}break;case 5:var h=r.stateNode;if(t===null&&r.flags&4){t=h;var g=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&t.focus();break;case"img":g.src&&(t.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var M=r.alternate;if(M!==null){var Y=M.memoizedState;if(Y!==null){var q=Y.dehydrated;q!==null&&Oo(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}gr||r.flags&512&&Ua(r)}catch(B){Ke(r,r.return,B)}}if(r===e){le=null;break}if(t=r.sibling,t!==null){t.return=r.return,le=t;break}le=r.return}}function _c(e){for(;le!==null;){var r=le;if(r===e){le=null;break}var t=r.sibling;if(t!==null){t.return=r.return,le=t;break}le=r.return}}function Rc(e){for(;le!==null;){var r=le;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{Zn(4,r)}catch(g){Ke(r,t,g)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var l=r.return;try{n.componentDidMount()}catch(g){Ke(r,l,g)}}var a=r.return;try{Ua(r)}catch(g){Ke(r,a,g)}break;case 5:var c=r.return;try{Ua(r)}catch(g){Ke(r,c,g)}}}catch(g){Ke(r,r.return,g)}if(r===e){le=null;break}var h=r.sibling;if(h!==null){h.return=r.return,le=h;break}le=r.return}}var tp=Math.ceil,el=Z.ReactCurrentDispatcher,Ya=Z.ReactCurrentOwner,Ur=Z.ReactCurrentBatchConfig,Me=0,ar=null,er=null,ur=0,Dr=0,xo=St(0),tr=0,rn=null,Vt=0,rl=0,qa=0,tn=null,Cr=null,$a=0,yo=1/0,gt=null,tl=!1,Va=null,Ot=null,ol=!1,Dt=null,nl=0,on=0,Qa=null,ll=-1,al=0;function br(){return(Me&6)!==0?Ge():ll!==-1?ll:ll=Ge()}function _t(e){return(e.mode&1)===0?1:(Me&2)!==0&&ur!==0?ur&-ur:Ld.transition!==null?(al===0&&(al=Es()),al):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:Fs(e.type)),e)}function Zr(e,r,t,n){if(50<on)throw on=0,Qa=null,Error(i(185));Po(e,t,n),((Me&2)===0||e!==ar)&&(e===ar&&((Me&2)===0&&(rl|=t),tr===4&&Rt(e,ur)),Sr(e,n),t===1&&Me===0&&(r.mode&1)===0&&(yo=Ge()+500,_n&&Et()))}function Sr(e,r){var t=e.callbackNode;Lu(e,r);var n=fn(e,e===ar?ur:0);if(n===0)t!==null&&Cs(t),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(t!=null&&Cs(t),r===1)e.tag===0?Id(Fc.bind(null,e)):Ni(Fc.bind(null,e)),_d(function(){(Me&6)===0&&Et()}),t=null;else{switch(Ts(n)){case 1:t=Pl;break;case 4:t=Ss;break;case 16:t=dn;break;case 536870912:t=Ps;break;default:t=dn}t=qc(t,Ac.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Ac(e,r){if(ll=-1,al=0,(Me&6)!==0)throw Error(i(327));var t=e.callbackNode;if(bo()&&e.callbackNode!==t)return null;var n=fn(e,e===ar?ur:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=sl(e,n);else{r=n;var l=Me;Me|=2;var a=Lc();(ar!==e||ur!==r)&&(gt=null,yo=Ge()+500,Xt(e,r));do try{lp();break}catch(h){Ic(e,h)}while(!0);pa(),el.current=a,Me=l,er!==null?r=0:(ar=null,ur=0,r=tr)}if(r!==0){if(r===2&&(l=El(e),l!==0&&(n=l,r=Xa(e,l))),r===1)throw t=rn,Xt(e,0),Rt(e,n),Sr(e,Ge()),t;if(r===6)Rt(e,n);else{if(l=e.current.alternate,(n&30)===0&&!op(l)&&(r=sl(e,n),r===2&&(a=El(e),a!==0&&(n=a,r=Xa(e,a))),r===1))throw t=rn,Xt(e,0),Rt(e,n),Sr(e,Ge()),t;switch(e.finishedWork=l,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Kt(e,Cr,gt);break;case 3:if(Rt(e,n),(n&130023424)===n&&(r=$a+500-Ge(),10<r)){if(fn(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){br(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ra(Kt.bind(null,e,Cr,gt),r);break}Kt(e,Cr,gt);break;case 4:if(Rt(e,n),(n&4194240)===n)break;for(r=e.eventTimes,l=-1;0<n;){var c=31-Vr(n);a=1<<c,c=r[c],c>l&&(l=c),n&=~a}if(n=l,n=Ge()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*tp(n/1960))-n,10<n){e.timeoutHandle=ra(Kt.bind(null,e,Cr,gt),n);break}Kt(e,Cr,gt);break;case 5:Kt(e,Cr,gt);break;default:throw Error(i(329))}}}return Sr(e,Ge()),e.callbackNode===t?Ac.bind(null,e):null}function Xa(e,r){var t=tn;return e.current.memoizedState.isDehydrated&&(Xt(e,r).flags|=256),e=sl(e,r),e!==2&&(r=Cr,Cr=t,r!==null&&Ka(r)),e}function Ka(e){Cr===null?Cr=e:Cr.push.apply(Cr,e)}function op(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var l=t[n],a=l.getSnapshot;l=l.value;try{if(!Qr(a(),l))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Rt(e,r){for(r&=~qa,r&=~rl,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Vr(r),n=1<<t;e[t]=-1,r&=~n}}function Fc(e){if((Me&6)!==0)throw Error(i(327));bo();var r=fn(e,0);if((r&1)===0)return Sr(e,Ge()),null;var t=sl(e,r);if(e.tag!==0&&t===2){var n=El(e);n!==0&&(r=n,t=Xa(e,n))}if(t===1)throw t=rn,Xt(e,0),Rt(e,r),Sr(e,Ge()),t;if(t===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Kt(e,Cr,gt),Sr(e,Ge()),null}function Ga(e,r){var t=Me;Me|=1;try{return e(r)}finally{Me=t,Me===0&&(yo=Ge()+500,_n&&Et())}}function Qt(e){Dt!==null&&Dt.tag===0&&(Me&6)===0&&bo();var r=Me;Me|=1;var t=Ur.transition,n=Fe;try{if(Ur.transition=null,Fe=1,e)return e()}finally{Fe=n,Ur.transition=t,Me=r,(Me&6)===0&&Et()}}function Ja(){Dr=xo.current,Ye(xo)}function Xt(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Dd(t)),er!==null)for(t=er.return;t!==null;){var n=t;switch(sa(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&On();break;case 3:fo(),Ye(Nr),Ye(hr),ba();break;case 5:xa(n);break;case 4:fo();break;case 13:Ye(Qe);break;case 19:Ye(Qe);break;case 10:ha(n.type._context);break;case 22:case 23:Ja()}t=t.return}if(ar=e,er=e=At(e.current,null),ur=Dr=r,tr=0,rn=null,qa=rl=Vt=0,Cr=tn=null,Yt!==null){for(r=0;r<Yt.length;r++)if(t=Yt[r],n=t.interleaved,n!==null){t.interleaved=null;var l=n.next,a=t.pending;if(a!==null){var c=a.next;a.next=l,n.next=c}t.pending=n}Yt=null}return e}function Ic(e,r){do{var t=er;try{if(pa(),Yn.current=Qn,qn){for(var n=Xe.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}qn=!1}if($t=0,lr=rr=Xe=null,Xo=!1,Ko=0,Ya.current=null,t===null||t.return===null){tr=1,rn=r,er=null;break}e:{var a=e,c=t.return,h=t,g=r;if(r=ur,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=g,Y=h,q=Y.tag;if((Y.mode&1)===0&&(q===0||q===11||q===15)){var B=Y.alternate;B?(Y.updateQueue=B.updateQueue,Y.memoizedState=B.memoizedState,Y.lanes=B.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var re=cc(c);if(re!==null){re.flags&=-257,uc(re,c,h,a,r),re.mode&1&&ic(a,M,r),r=re,g=M;var se=r.updateQueue;if(se===null){var ce=new Set;ce.add(g),r.updateQueue=ce}else se.add(g);break e}else{if((r&1)===0){ic(a,M,r),Za();break e}g=Error(i(426))}}else if($e&&h.mode&1){var Je=cc(c);if(Je!==null){(Je.flags&65536)===0&&(Je.flags|=256),uc(Je,c,h,a,r),ua(go(g,h));break e}}a=g=go(g,h),tr!==4&&(tr=2),tn===null?tn=[a]:tn.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var j=ac(a,g,r);Di(a,j);break e;case 1:h=g;var v=a.type,P=a.stateNode;if((a.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(Ot===null||!Ot.has(P)))){a.flags|=65536,r&=-r,a.lanes|=r;var X=sc(a,h,r);Di(a,X);break e}}a=a.return}while(a!==null)}Uc(t)}catch(ue){r=ue,er===t&&t!==null&&(er=t=t.return);continue}break}while(!0)}function Lc(){var e=el.current;return el.current=Qn,e===null?Qn:e}function Za(){(tr===0||tr===3||tr===2)&&(tr=4),ar===null||(Vt&268435455)===0&&(rl&268435455)===0||Rt(ar,ur)}function sl(e,r){var t=Me;Me|=2;var n=Lc();(ar!==e||ur!==r)&&(gt=null,Xt(e,r));do try{np();break}catch(l){Ic(e,l)}while(!0);if(pa(),Me=t,el.current=n,er!==null)throw Error(i(261));return ar=null,ur=0,tr}function np(){for(;er!==null;)Hc(er)}function lp(){for(;er!==null&&!Mu();)Hc(er)}function Hc(e){var r=Yc(e.alternate,e,Dr);e.memoizedProps=e.pendingProps,r===null?Uc(e):er=r,Ya.current=null}function Uc(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Gd(t,r,Dr),t!==null){er=t;return}}else{if(t=Jd(t,r),t!==null){t.flags&=32767,er=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tr=6,er=null;return}}if(r=r.sibling,r!==null){er=r;return}er=r=e}while(r!==null);tr===0&&(tr=5)}function Kt(e,r,t){var n=Fe,l=Ur.transition;try{Ur.transition=null,Fe=1,ap(e,r,t,n)}finally{Ur.transition=l,Fe=n}return null}function ap(e,r,t,n){do bo();while(Dt!==null);if((Me&6)!==0)throw Error(i(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Hu(e,a),e===ar&&(er=ar=null,ur=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ol||(ol=!0,qc(dn,function(){return bo(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=Ur.transition,Ur.transition=null;var c=Fe;Fe=1;var h=Me;Me|=4,Ya.current=null,ep(e,t),zc(t,e),Sd(Zl),xn=!!Jl,Zl=Jl=null,e.current=t,rp(t),zu(),Me=h,Fe=c,Ur.transition=a}else e.current=t;if(ol&&(ol=!1,Dt=e,nl=l),a=e.pendingLanes,a===0&&(Ot=null),_u(t.stateNode),Sr(e,Ge()),r!==null)for(n=e.onRecoverableError,t=0;t<r.length;t++)l=r[t],n(l.value,{componentStack:l.stack,digest:l.digest});if(tl)throw tl=!1,e=Va,Va=null,e;return(nl&1)!==0&&e.tag!==0&&bo(),a=e.pendingLanes,(a&1)!==0?e===Qa?on++:(on=0,Qa=e):on=0,Et(),null}function bo(){if(Dt!==null){var e=Ts(nl),r=Ur.transition,t=Fe;try{if(Ur.transition=null,Fe=16>e?16:e,Dt===null)var n=!1;else{if(e=Dt,Dt=null,nl=0,(Me&6)!==0)throw Error(i(331));var l=Me;for(Me|=4,le=e.current;le!==null;){var a=le,c=a.child;if((le.flags&16)!==0){var h=a.deletions;if(h!==null){for(var g=0;g<h.length;g++){var M=h[g];for(le=M;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:en(8,Y,a)}var q=Y.child;if(q!==null)q.return=Y,le=q;else for(;le!==null;){Y=le;var B=Y.sibling,re=Y.return;if(Sc(Y),Y===M){le=null;break}if(B!==null){B.return=re,le=B;break}le=re}}}var se=a.alternate;if(se!==null){var ce=se.child;if(ce!==null){se.child=null;do{var Je=ce.sibling;ce.sibling=null,ce=Je}while(ce!==null)}}le=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,le=c;else e:for(;le!==null;){if(a=le,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:en(9,a,a.return)}var j=a.sibling;if(j!==null){j.return=a.return,le=j;break e}le=a.return}}var v=e.current;for(le=v;le!==null;){c=le;var P=c.child;if((c.subtreeFlags&2064)!==0&&P!==null)P.return=c,le=P;else e:for(c=v;le!==null;){if(h=le,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Zn(9,h)}}catch(ue){Ke(h,h.return,ue)}if(h===c){le=null;break e}var X=h.sibling;if(X!==null){X.return=h.return,le=X;break e}le=h.return}}if(Me=l,Et(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(pn,e)}catch{}n=!0}return n}finally{Fe=t,Ur.transition=r}}return!1}function Wc(e,r,t){r=go(t,r),r=ac(e,r,1),e=Mt(e,r,1),r=br(),e!==null&&(Po(e,1,r),Sr(e,r))}function Ke(e,r,t){if(e.tag===3)Wc(e,e,t);else for(;r!==null;){if(r.tag===3){Wc(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))){e=go(t,e),e=sc(r,e,1),r=Mt(r,e,1),e=br(),r!==null&&(Po(r,1,e),Sr(r,e));break}}r=r.return}}function sp(e,r,t){var n=e.pingCache;n!==null&&n.delete(r),r=br(),e.pingedLanes|=e.suspendedLanes&t,ar===e&&(ur&t)===t&&(tr===4||tr===3&&(ur&130023424)===ur&&500>Ge()-$a?Xt(e,0):qa|=t),Sr(e,r)}function Bc(e,r){r===0&&((e.mode&1)===0?r=1:(r=mn,mn<<=1,(mn&130023424)===0&&(mn=4194304)));var t=br();e=ht(e,r),e!==null&&(Po(e,r,t),Sr(e,t))}function ip(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Bc(e,t)}function cp(e,r){var t=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(i(314))}n!==null&&n.delete(r),Bc(e,t)}var Yc;Yc=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||Nr.current)jr=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return jr=!1,Kd(e,r,t);jr=(e.flags&131072)!==0}else jr=!1,$e&&(r.flags&1048576)!==0&&wi(r,An,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;Gn(e,r),e=r.pendingProps;var l=so(r,hr.current);mo(r,t),l=wa(null,r,n,e,l,t);var a=ja();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,wr(n)?(a=!0,Dn(r)):a=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ga(r),l.updater=Xn,r.stateNode=l,l._reactInternals=r,Ma(r,n,e,t),r=_a(null,r,n,!0,a,t)):(r.tag=0,$e&&a&&aa(r),yr(null,r,l,t),r=r.child),r;case 16:n=r.elementType;e:{switch(Gn(e,r),e=r.pendingProps,l=n._init,n=l(n._payload),r.type=n,l=r.tag=dp(n),e=Kr(n,e),l){case 0:r=Da(null,r,n,e,t);break e;case 1:r=gc(null,r,n,e,t);break e;case 11:r=dc(null,r,n,e,t);break e;case 14:r=pc(null,r,n,Kr(n.type,e),t);break e}throw Error(i(306,n,""))}return r;case 0:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Kr(n,l),Da(e,r,n,l,t);case 1:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Kr(n,l),gc(e,r,n,l,t);case 3:e:{if(vc(r),e===null)throw Error(i(387));n=r.pendingProps,a=r.memoizedState,l=a.element,Oi(e,r),Wn(r,n,null,t);var c=r.memoizedState;if(n=c.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){l=go(Error(i(423)),r),r=xc(e,r,n,t,l);break e}else if(n!==l){l=go(Error(i(424)),r),r=xc(e,r,n,t,l);break e}else for(Or=Ct(r.stateNode.containerInfo.firstChild),zr=r,$e=!0,Xr=null,t=Mi(r,null,n,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(uo(),n===l){r=ft(e,r,t);break e}yr(e,r,n,t)}r=r.child}return r;case 5:return Ri(r),e===null&&ca(r),n=r.type,l=r.pendingProps,a=e!==null?e.memoizedProps:null,c=l.children,ea(n,l)?c=null:a!==null&&ea(n,a)&&(r.flags|=32),fc(e,r),yr(e,r,c,t),r.child;case 6:return e===null&&ca(r),null;case 13:return yc(e,r,t);case 4:return va(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=po(r,null,n,t):yr(e,r,n,t),r.child;case 11:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Kr(n,l),dc(e,r,n,l,t);case 7:return yr(e,r,r.pendingProps,t),r.child;case 8:return yr(e,r,r.pendingProps.children,t),r.child;case 12:return yr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(n=r.type._context,l=r.pendingProps,a=r.memoizedProps,c=l.value,Le(Ln,n._currentValue),n._currentValue=c,a!==null)if(Qr(a.value,c)){if(a.children===l.children&&!Nr.current){r=ft(e,r,t);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var h=a.dependencies;if(h!==null){c=a.child;for(var g=h.firstContext;g!==null;){if(g.context===n){if(a.tag===1){g=mt(-1,t&-t),g.tag=2;var M=a.updateQueue;if(M!==null){M=M.shared;var Y=M.pending;Y===null?g.next=g:(g.next=Y.next,Y.next=g),M.pending=g}}a.lanes|=t,g=a.alternate,g!==null&&(g.lanes|=t),ma(a.return,t,r),h.lanes|=t;break}g=g.next}}else if(a.tag===10)c=a.type===r.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(i(341));c.lanes|=t,h=c.alternate,h!==null&&(h.lanes|=t),ma(c,t,r),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===r){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}yr(e,r,l.children,t),r=r.child}return r;case 9:return l=r.type,n=r.pendingProps.children,mo(r,t),l=Lr(l),n=n(l),r.flags|=1,yr(e,r,n,t),r.child;case 14:return n=r.type,l=Kr(n,r.pendingProps),l=Kr(n.type,l),pc(e,r,n,l,t);case 15:return hc(e,r,r.type,r.pendingProps,t);case 17:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Kr(n,l),Gn(e,r),r.tag=1,wr(n)?(e=!0,Dn(r)):e=!1,mo(r,t),nc(r,n,l),Ma(r,n,l,t),_a(null,r,n,!0,e,t);case 19:return kc(e,r,t);case 22:return mc(e,r,t)}throw Error(i(156,r.tag))};function qc(e,r){return js(e,r)}function up(e,r,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wr(e,r,t,n){return new up(e,r,t,n)}function es(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return es(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===Ce)return 14}return 2}function At(e,r){var t=e.alternate;return t===null?(t=Wr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function il(e,r,t,n,l,a){var c=2;if(n=e,typeof e=="function")es(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case V:return Gt(t.children,l,a,r);case F:c=8,l|=8;break;case O:return e=Wr(12,t,r,l|2),e.elementType=O,e.lanes=a,e;case ke:return e=Wr(13,t,r,l),e.elementType=ke,e.lanes=a,e;case Ee:return e=Wr(19,t,r,l),e.elementType=Ee,e.lanes=a,e;case Ne:return cl(t,l,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:c=10;break e;case me:c=9;break e;case Pe:c=11;break e;case Ce:c=14;break e;case ze:c=16,n=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return r=Wr(c,t,r,l),r.elementType=e,r.type=n,r.lanes=a,r}function Gt(e,r,t,n){return e=Wr(7,e,n,r),e.lanes=t,e}function cl(e,r,t,n){return e=Wr(22,e,n,r),e.elementType=Ne,e.lanes=t,e.stateNode={isHidden:!1},e}function rs(e,r,t){return e=Wr(6,e,null,r),e.lanes=t,e}function ts(e,r,t){return r=Wr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function pp(e,r,t,n,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function os(e,r,t,n,l,a,c,h,g){return e=new pp(e,r,t,h,g),r===1?(r=1,a===!0&&(r|=8)):r=0,a=Wr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ga(a),e}function hp(e,r,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:n==null?null:""+n,children:e,containerInfo:r,implementation:t}}function $c(e){if(!e)return Pt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(i(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(wr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(e.tag===1){var t=e.type;if(wr(t))return bi(e,t,r)}return r}function Vc(e,r,t,n,l,a,c,h,g){return e=os(t,n,!0,e,l,a,c,h,g),e.context=$c(null),t=e.current,n=br(),l=_t(t),a=mt(n,l),a.callback=r??null,Mt(t,a,l),e.current.lanes=l,Po(e,l,n),Sr(e,n),e}function ul(e,r,t,n){var l=r.current,a=br(),c=_t(l);return t=$c(t),r.context===null?r.context=t:r.pendingContext=t,r=mt(a,c),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=Mt(l,r,c),e!==null&&(Zr(e,l,c,a),Un(e,l,c)),c}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function ns(e,r){Qc(e,r),(e=e.alternate)&&Qc(e,r)}function mp(){return null}var Xc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ls(e){this._internalRoot=e}pl.prototype.render=ls.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(i(409));ul(e,r,null,null)},pl.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Qt(function(){ul(null,e,null,null)}),r[ct]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var r=Os();e={blockedOn:null,target:e,priority:r};for(var t=0;t<Nt.length&&r!==0&&r<Nt[t].priority;t++);Nt.splice(t,0,e),t===0&&Rs(e)}};function as(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kc(){}function fp(e,r,t,n,l){if(l){if(typeof n=="function"){var a=n;n=function(){var M=dl(c);a.call(M)}}var c=Vc(r,n,e,0,null,!1,!1,"",Kc);return e._reactRootContainer=c,e[ct]=c.current,Uo(e.nodeType===8?e.parentNode:e),Qt(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var h=n;n=function(){var M=dl(g);h.call(M)}}var g=os(e,0,!1,null,null,!1,!1,"",Kc);return e._reactRootContainer=g,e[ct]=g.current,Uo(e.nodeType===8?e.parentNode:e),Qt(function(){ul(r,g,t,n)}),g}function ml(e,r,t,n,l){var a=t._reactRootContainer;if(a){var c=a;if(typeof l=="function"){var h=l;l=function(){var g=dl(c);h.call(g)}}ul(r,c,e,l)}else c=fp(t,r,e,l,n);return dl(c)}Ms=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=So(r.pendingLanes);t!==0&&(Ml(r,t|1),Sr(r,Ge()),(Me&6)===0&&(yo=Ge()+500,Et()))}break;case 13:Qt(function(){var n=ht(e,1);if(n!==null){var l=br();Zr(n,e,1,l)}}),ns(e,1)}},zl=function(e){if(e.tag===13){var r=ht(e,134217728);if(r!==null){var t=br();Zr(r,e,134217728,t)}ns(e,134217728)}},zs=function(e){if(e.tag===13){var r=_t(e),t=ht(e,r);if(t!==null){var n=br();Zr(t,e,r,n)}ns(e,r)}},Os=function(){return Fe},Ds=function(e,r){var t=Fe;try{return Fe=e,r()}finally{Fe=t}},qr=function(e,r,t){switch(r){case"input":if(te(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var n=t[r];if(n!==e&&n.form===e.form){var l=zn(n);if(!l)throw Error(i(90));Yr(n),te(n,l)}}}break;case"textarea":Ze(e,t);break;case"select":r=t.value,r!=null&&nr(e,!!t.multiple,r,!1)}},vs=Ga,xs=Qt;var gp={usingClientEntryPoint:!1,Events:[Yo,lo,zn,Ae,gs,Ga]},nn={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:nn.bundleType,version:nn.version,rendererPackageName:nn.rendererPackageName,rendererConfig:nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ns(e),e===null?null:e.stateNode},findFiberByHostInstance:nn.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{pn=fl.inject(vp),ot=fl}catch{}}return Pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp,Pr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!as(r))throw Error(i(200));return hp(e,r,null,t)},Pr.createRoot=function(e,r){if(!as(e))throw Error(i(299));var t=!1,n="",l=Xc;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=os(e,1,!1,null,null,t,!1,n,l),e[ct]=r.current,Uo(e.nodeType===8?e.parentNode:e),new ls(r)},Pr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Ns(r),e=e===null?null:e.stateNode,e},Pr.flushSync=function(e){return Qt(e)},Pr.hydrate=function(e,r,t){if(!hl(r))throw Error(i(200));return ml(null,e,r,!0,t)},Pr.hydrateRoot=function(e,r,t){if(!as(e))throw Error(i(405));var n=t!=null&&t.hydratedSources||null,l=!1,a="",c=Xc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),r=Vc(r,null,e,1,t??null,l,!1,a,c),e[ct]=r.current,Uo(e),n)for(e=0;e<n.length;e++)t=n[e],l=t._getVersion,l=l(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,l]:r.mutableSourceEagerHydrationData.push(t,l);return new pl(r)},Pr.render=function(e,r,t){if(!hl(r))throw Error(i(200));return ml(null,e,r,!1,t)},Pr.unmountComponentAtNode=function(e){if(!hl(e))throw Error(i(40));return e._reactRootContainer?(Qt(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1},Pr.unstable_batchedUpdates=Ga,Pr.unstable_renderSubtreeIntoContainer=function(e,r,t,n){if(!hl(t))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ml(e,r,t,!1,n)},Pr.version="18.3.1-next-f1338f8080-20240426",Pr}var nu;function Sp(){if(nu)return cs.exports;nu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),cs.exports=Cp(),cs.exports}var lu;function Pp(){if(lu)return gl;lu=1;var s=Sp();return gl.createRoot=s.createRoot,gl.hydrateRoot=s.hydrateRoot,gl}var Ep=Pp(),k=ms();const Br=yp(k),No="/assets/5ebff9a217654d307f5ff0e6abe952a2f7edba47-C_j6zY7W.png",Tp="/assets/f72178f30a0dde70a8d75f3484b9afe145cb6b4a-CDyQn-v-.png",Mp="/assets/ce4e08efbf373b6ac47b975a612b62ba9dbdfad0-E6WWYkN1.png";function zp({onCustomerCheckIn:s,onStaffLogin:d,onRevisit:i}){return o.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[o.jsx("div",{className:"hidden lg:flex absolute",style:{right:"0",top:"50%",transform:"translateY(-50%)",width:"45%",height:"85%",zIndex:5,alignItems:"center",justifyContent:"center"},children:o.jsx("img",{src:Tp,alt:"Eagle",className:"eagle-wings",style:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",opacity:.35}})}),o.jsxs("nav",{className:"relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:No,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),o.jsx("span",{className:"text-lg sm:text-xl font-medium text-white",children:"Reliance Surfaces"})]}),o.jsxs("div",{className:"flex items-center gap-6 sm:gap-8",children:[o.jsx("button",{className:"text-sm sm:text-base transition-colors text-gray-400 hover:text-white",children:"Slabs"}),o.jsx("button",{onClick:d,className:"text-sm sm:text-base transition-colors text-gray-400 hover:text-white",children:"Staff"})]})]}),o.jsx("div",{className:"hidden sm:flex relative z-10 flex-col items-start justify-center px-8 lg:px-16 xl:px-24",style:{height:"calc(100vh - 100px)"},children:o.jsxs("div",{className:"max-w-2xl lg:max-w-3xl",children:[o.jsxs("h1",{className:"mb-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"300",lineHeight:"1.1"},children:["Welcome to"," ",o.jsx("span",{style:{color:"#D4A736"},children:"Reliance Surfaces"})]}),o.jsx("p",{className:"mb-12 text-lg md:text-xl lg:text-2xl italic",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-start gap-4 max-w-md",children:[o.jsx("button",{onClick:s,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none"},onMouseEnter:u=>{u.currentTarget.style.backgroundColor="#E5B946",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.backgroundColor="#D4A736",u.currentTarget.style.transform="translateY(0)"},children:"Check-In"}),o.jsx("button",{onClick:i,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736"},onMouseEnter:u=>{u.currentTarget.style.backgroundColor="rgba(212, 167, 54, 0.1)",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.backgroundColor="transparent",u.currentTarget.style.transform="translateY(0)"},children:"Revisit"})]})]})}),o.jsxs("div",{className:"sm:hidden relative z-10 flex flex-col justify-between px-6",style:{height:"calc(100vh - 88px)"},children:[o.jsxs("div",{className:"flex flex-col pt-8 text-center",children:[o.jsx("h1",{className:"mb-2 text-5xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"200",lineHeight:"1.1"},children:"Welcome"}),o.jsx("p",{className:"mb-6 text-2xl italic",style:{color:"rgba(156, 163, 175, 0.8)",fontWeight:"300",fontStyle:"italic"},children:"to"}),o.jsx("h2",{className:"mb-6 text-4xl leading-tight font-light",style:{color:"#D4A736",fontWeight:"300",lineHeight:"1.1"},children:"Reliance Surfaces"}),o.jsx("p",{className:"mb-8 text-base italic px-4",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),o.jsxs("div",{className:"flex flex-col gap-3 max-w-xs mx-auto w-full",children:[o.jsx("button",{onClick:s,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none"},children:"Check-In"}),o.jsx("button",{onClick:i,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736"},children:"Revisit"})]})]}),o.jsx("div",{className:"flex justify-center items-center pb-16 pt-4",children:o.jsx("img",{src:Mp,alt:"Eagle",className:"eagle-wings-mobile",style:{width:"85%",maxWidth:"360px",height:"auto",opacity:.4,filter:"brightness(0) saturate(100%) invert(63%) sepia(44%) saturate(443%) hue-rotate(1deg) brightness(93%) contrast(87%)"}})})]}),o.jsx("style",{children:`
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
      `})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dp=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,i,u)=>u?u.toUpperCase():i.toLowerCase()),au=s=>{const d=Dp(s);return d.charAt(0).toUpperCase()+d.slice(1)},mu=(...s)=>s.filter((d,i,u)=>!!d&&d.trim()!==""&&u.indexOf(d)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=k.forwardRef(({color:s="currentColor",size:d=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:m="",children:f,iconNode:b,..._},N)=>k.createElement("svg",{ref:N,..._p,width:d,height:d,stroke:s,strokeWidth:u?Number(i)*24/Number(d):i,className:mu("lucide",m),..._},[...b.map(([W,I])=>k.createElement(W,I)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=(s,d)=>{const i=k.forwardRef(({className:u,...m},f)=>k.createElement(Rp,{ref:f,iconNode:d,className:mu(`lucide-${Op(au(s))}`,`lucide-${s}`,u),...m}));return i.displayName=au(s),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Fp=dr("bell",Ap);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],fu=dr("check",Ip);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],gu=dr("circle-check-big",Lp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Up=dr("eye-off",Hp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fs=dr("eye",Wp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],vu=dr("funnel",Bp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Nl=dr("log-out",Yp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],$p=dr("mail",qp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M5 12h14",key:"1ays0h"}]],Qp=dr("minus",Vp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],bl=dr("plus",Xp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],xu=dr("rotate-ccw",Kp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],yu=dr("search",Gp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Zp=dr("triangle-alert",Jp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],rh=dr("user-plus",eh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],oh=dr("user",th);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],bu=dr("users",nh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xt=dr("x",lh);function ah({onNext:s,initialData:d}){const[i,u]=k.useState({firstName:d?.firstName||"",lastName:d?.lastName||"",street:d?.street||"",suiteUnit:d?.suiteUnit||"",city:d?.city||"",state:d?.state||"",zip:d?.zip||"",country:d?.country||"USA",phones:d?.phones||[""],emails:d?.emails||[""]}),[m,f]=k.useState({}),b=k.useRef(null),_=k.useRef([]),N=k.useRef([]),W={AL:"35004",AK:"99501",AZ:"85001",AR:"72201",CA:"90001",CO:"80201",CT:"06101",DE:"19901",FL:"32301",GA:"30301",HI:"96801",ID:"83701",IL:"60601",IN:"46201",IA:"50301",KS:"66101",KY:"40201",LA:"70112",ME:"04101",MD:"21201",MA:"02101",MI:"48201",MN:"55401",MS:"39201",MO:"63101",MT:"59101",NE:"68101",NV:"89101",NH:"03101",NJ:"07101",NM:"87101",NY:"10001",NC:"27601",ND:"58101",OH:"43201",OK:"73101",OR:"97201",PA:"15201",RI:"02901",SC:"29201",SD:"57101",TN:"37201",TX:"73301",UT:"84101",VT:"05601",VA:"22201",WA:"98101",WV:"25301",WI:"53201",WY:"82001"},I=[{code:"AL",name:"Alabama"},{code:"AK",name:"Alaska"},{code:"AZ",name:"Arizona"},{code:"AR",name:"Arkansas"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DE",name:"Delaware"},{code:"FL",name:"Florida"},{code:"GA",name:"Georgia"},{code:"HI",name:"Hawaii"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"IA",name:"Iowa"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"ME",name:"Maine"},{code:"MD",name:"Maryland"},{code:"MA",name:"Massachusetts"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MS",name:"Mississippi"},{code:"MO",name:"Missouri"},{code:"MT",name:"Montana"},{code:"NE",name:"Nebraska"},{code:"NV",name:"Nevada"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NY",name:"New York"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PA",name:"Pennsylvania"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VT",name:"Vermont"},{code:"VA",name:"Virginia"},{code:"WA",name:"Washington"},{code:"WV",name:"West Virginia"},{code:"WI",name:"Wisconsin"},{code:"WY",name:"Wyoming"}],x=F=>{const O=W[F]||"";u(oe=>({...oe,state:F,zip:O}))},C=F=>F.split(" ").map(O=>O.charAt(0).toUpperCase()+O.slice(1).toLowerCase()).join(" "),S=F=>{setTimeout(()=>{F.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},300)},L=F=>F.replace(/\D/g,"").length===10,E=F=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F),T=()=>{const F={};i.firstName.trim()||(F.firstName="First name is required"),i.lastName.trim()||(F.lastName="Last name is required"),i.street.trim()||(F.street="Street address is required"),i.city.trim()||(F.city="City is required"),i.state.trim()||(F.state="State is required"),i.zip.trim()||(F.zip="ZIP code is required");const O=i.phones.filter(me=>me.trim());O.length===0?F.phone="At least one phone number is required":O.every(L)||(F.phone="Phone numbers must be 10 digits");const oe=i.emails.filter(me=>me.trim());return oe.length===0?F.email="At least one email is required":oe.every(E)||(F.email="Email addresses must be valid"),f(F),Object.keys(F).length===0},J=F=>{F.preventDefault(),T()&&s({...i,phones:i.phones.filter(O=>O.trim()),emails:i.emails.filter(O=>O.trim())})},H=()=>u(F=>({...F,phones:[...F.phones,""]})),$=F=>u(O=>({...O,phones:O.phones.filter((oe,me)=>me!==F)})),Z=(F,O)=>u(oe=>{const me=[...oe.phones];return me[F]=O,{...oe,phones:me}}),ee=()=>u(F=>({...F,emails:[...F.emails,""]})),A=F=>u(O=>({...O,emails:O.emails.filter((oe,me)=>me!==F)})),V=(F,O)=>u(oe=>{const me=[...oe.emails];return me[F]=O,{...oe,emails:me}});return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px 20px"},children:[o.jsx("h1",{className:"text-center mb-1 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 1: Your Details"}),o.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"var(--color-text-gray)"},children:"Please provide your contact information"}),o.jsxs("form",{onSubmit:J,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"First Name *"}),o.jsx("input",{type:"text",value:i.firstName,onChange:F=>u(O=>({...O,firstName:F.target.value})),onBlur:F=>u(O=>({...O,firstName:C(F.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.firstName?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"First name"}),m.firstName&&o.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.firstName})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Last Name *"}),o.jsx("input",{type:"text",value:i.lastName,onChange:F=>u(O=>({...O,lastName:F.target.value})),onBlur:F=>u(O=>({...O,lastName:C(F.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.lastName?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Last name"}),m.lastName&&o.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.lastName})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Street Address *"}),o.jsx("input",{type:"text",value:i.street,onChange:F=>u(O=>({...O,street:F.target.value})),onBlur:F=>u(O=>({...O,street:C(F.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.street?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"e.g. 123 Main St",ref:b}),m.street&&o.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.street})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Suite/Unit"}),o.jsx("input",{type:"text",value:i.suiteUnit,onChange:F=>u(O=>({...O,suiteUnit:F.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Suite/Unit"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"City *"}),o.jsx("input",{type:"text",value:i.city,onChange:F=>u(O=>({...O,city:F.target.value})),onBlur:F=>u(O=>({...O,city:C(F.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.city?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"City"}),m.city&&o.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.city})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"State *"}),o.jsxs("select",{value:i.state,onChange:F=>x(F.target.value),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.state?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},children:[o.jsx("option",{value:"",children:"Select"}),I.map(F=>o.jsx("option",{value:F.code,children:F.code},F.code))]}),m.state&&o.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.state})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"ZIP *"}),o.jsx("input",{type:"text",value:i.zip,onChange:F=>u(O=>({...O,zip:F.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.zip?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"ZIP"}),m.zip&&o.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:m.zip})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Country"}),o.jsxs("select",{value:i.country,onChange:F=>u(O=>({...O,country:F.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"USA",children:"USA"}),o.jsx("option",{value:"CAN",children:"CAN"}),o.jsx("option",{value:"MEX",children:"MEX"})]})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Phone Number(s) *"}),i.phones.map((F,O)=>o.jsxs("div",{className:"flex gap-2 mb-2",children:[o.jsx("input",{ref:oe=>_.current[O]=oe,type:"tel",value:F,onChange:oe=>Z(O,oe.target.value),onFocus:oe=>S(oe.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.phone&&O===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Phone number"}),i.phones.length>1&&o.jsx("button",{type:"button",onClick:()=>$(O),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:o.jsx(xt,{size:18})})]},O)),m.phone&&o.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:m.phone}),o.jsxs("button",{type:"button",onClick:H,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[o.jsx(bl,{size:18}),"Add Another Phone"]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Email Address(es) *"}),i.emails.map((F,O)=>o.jsxs("div",{className:"flex gap-2 mb-2",children:[o.jsx("input",{ref:oe=>N.current[O]=oe,type:"email",value:F,onChange:oe=>V(O,oe.target.value),onFocus:oe=>S(oe.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${m.email&&O===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Email address"}),i.emails.length>1&&o.jsx("button",{type:"button",onClick:()=>A(O),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:o.jsx(xt,{size:18})})]},O)),m.email&&o.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:m.email}),o.jsxs("button",{type:"button",onClick:ee,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[o.jsx(bl,{size:18}),"Add Another Email"]})]}),o.jsx("button",{type:"submit",className:"w-full py-3.5 rounded-lg text-sm font-medium mt-6",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue to Step 2"})]})]})})}const sh=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function ih({onNext:s,onBack:d,initialData:i}){const[u,m]=k.useState(i?.referralSources?.map(x=>x.type)||[]),[f,b]=k.useState(i?.referralSources?.reduce((x,C)=>(x[C.type]={name:C.name||"",phone:C.phone||""},x),{})||{}),_=x=>x.split(" ").map(C=>C.charAt(0).toUpperCase()+C.slice(1).toLowerCase()).join(" "),N=x=>{if(u.includes(x)){m(u.filter(S=>S!==x));const C={...f};delete C[x],b(C)}else m([...u,x])},W=(x,C,S)=>{b({...f,[x]:{...f[x],name:C==="name"?S:f[x]?.name||"",phone:C==="phone"?S:f[x]?.phone||""}})},I=x=>{if(x.preventDefault(),u.length===0){alert("Please select at least one option");return}for(const S of u)if(!f[S]?.name?.trim()){alert(`Please enter a name for ${S}`);return}const C={referralSources:u.map(S=>({type:S,name:f[S]?.name,phone:f[S]?.phone}))};s(C)};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 2: How Did You Hear About Us?"}),o.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Select all that apply"}),o.jsxs("form",{onSubmit:I,className:"space-y-4 sm:space-y-6",children:[o.jsx("div",{className:"space-y-4",children:sh.map(x=>o.jsxs("div",{children:[o.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:u.includes(x)?"var(--color-background)":"transparent",border:`1px solid ${u.includes(x)?"var(--color-gold)":"var(--color-border)"}`},children:[o.jsx("input",{type:"checkbox",checked:u.includes(x),onChange:()=>N(x),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),o.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:x})]}),u.includes(x)&&o.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[o.jsx("input",{type:"text",value:f[x]?.name||"",onChange:C=>W(x,"name",_(C.target.value)),placeholder:"Name (required)",required:!0,className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),o.jsx("input",{type:"tel",value:f[x]?.phone||"",onChange:C=>W(x,"phone",C.target.value),placeholder:"Phone (optional)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]},x))}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[o.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue to Step 3"})]})]})]})})}function ch({onNext:s,onBack:d,initialData:i}){const[u,m]=k.useState(i?.adults||1),[f,b]=k.useState(i?.minors||0),_=N=>{N.preventDefault(),s({adults:u,minors:f})};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[o.jsx("h1",{className:"text-center mb-3 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 3: Party Size"}),o.jsx("p",{className:"text-center mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please let us know who's visiting today"}),o.jsxs("form",{onSubmit:_,className:"space-y-8",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(bu,{size:28,style:{color:"var(--color-gold)"}}),o.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"How many adults are visiting?"})]}),o.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[o.jsx("button",{type:"button",onClick:()=>m(Math.max(1,u-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:u<=1?"var(--color-card)":"var(--color-gold)",color:u<=1?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:u<=1?"not-allowed":"pointer"},disabled:u<=1,children:"−"}),o.jsxs("div",{className:"text-center min-w-[120px]",children:[o.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:u}),o.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:u===1?"Adult":"Adults"})]}),o.jsx("button",{type:"button",onClick:()=>m(Math.min(10,u+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:u>=10?"var(--color-card)":"var(--color-gold)",color:u>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:u>=10?"not-allowed":"pointer"},disabled:u>=10,children:"+"})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(oh,{size:24,style:{color:"var(--color-gold)"}}),o.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"Number of minors"})]}),o.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[o.jsx("button",{type:"button",onClick:()=>b(Math.max(0,f-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:f<=0?"var(--color-card)":"var(--color-gold)",color:f<=0?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:f<=0?"not-allowed":"pointer"},disabled:f<=0,children:"−"}),o.jsxs("div",{className:"text-center min-w-[120px]",children:[o.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:f}),o.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:f===1?"Minor":"Minors"})]}),o.jsx("button",{type:"button",onClick:()=>b(Math.min(10,f+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:f>=10?"var(--color-card)":"var(--color-gold)",color:f>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:f>=10?"not-allowed":"pointer"},disabled:f>=10,children:"+"})]})]}),o.jsx("div",{className:"text-center p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:o.jsxs("p",{className:"text-base sm:text-lg",style:{color:"var(--color-text-white)"},children:["Total visitors: ",o.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"600"},children:u+f})]})}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[o.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}const uh=`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

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

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`;function dh({onNext:s,onBack:d,isMainVisitor:i=!0,initialData:u}){const[m,f]=k.useState(u?.agreed||!1),[b,_]=k.useState(!!u),[N,W]=k.useState(u?.signature||""),[I,x]=k.useState(!1),[C,S]=k.useState(""),L=k.useRef(null),E=k.useRef(null);k.useEffect(()=>{const A=L.current;if(!A)return;const V=A.getContext("2d");if(V&&(A.width=A.offsetWidth*2,A.height=A.offsetHeight*2,V.scale(2,2),V.strokeStyle="#D4A736",V.lineWidth=2,V.lineCap="round",V.lineJoin="round",u?.signature)){const F=new Image;F.onload=()=>{V.drawImage(F,0,0,A.offsetWidth,A.offsetHeight)},F.src=u.signature}},[u]);const T=()=>{const A=E.current;if(!A)return;Math.abs(A.scrollHeight-A.scrollTop-A.clientHeight)<10&&_(!0)},J=A=>{x(!0);const V=L.current;if(!V)return;const F=V.getContext("2d");if(!F)return;const O=V.getBoundingClientRect(),oe=V.width/O.width,me=V.height/O.height,Pe="touches"in A?A.touches[0].clientX:A.clientX,ke="touches"in A?A.touches[0].clientY:A.clientY,Ee=(Pe-O.left)*oe/2,Ce=(ke-O.top)*me/2;F.beginPath(),F.moveTo(Ee,Ce)},H=A=>{if(!I)return;const V=L.current;if(!V)return;const F=V.getContext("2d");if(!F)return;const O=V.getBoundingClientRect(),oe=V.width/O.width,me=V.height/O.height,Pe="touches"in A?A.touches[0].clientX:A.clientX,ke="touches"in A?A.touches[0].clientY:A.clientY,Ee=(Pe-O.left)*oe/2,Ce=(ke-O.top)*me/2;F.lineTo(Ee,Ce),F.stroke()},$=()=>{x(!1);const A=L.current;A&&W(A.toDataURL())},Z=()=>{const A=L.current;if(!A)return;const V=A.getContext("2d");V&&(V.clearRect(0,0,A.width,A.height),W(""))},ee=A=>{if(A.preventDefault(),S(""),!b){S("Please scroll to the bottom of the waiver to continue");return}if(!m){S("You must agree to the waiver to continue");return}if(!N){S("Please provide your signature");return}s({agreed:m,signature:N})};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:i?"Step 3: Waiver":"Waiver Agreement"}),o.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:i?"Please read and sign the waiver":"Please review and provide your signature"}),o.jsxs("form",{onSubmit:ee,className:"space-y-4 sm:space-y-6",children:[o.jsx("div",{ref:E,onScroll:T,className:"p-4 sm:p-6 rounded-lg overflow-y-auto",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",maxHeight:"300px",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:o.jsx("div",{style:{whiteSpace:"pre-wrap"},children:uh})}),!b&&o.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-gold)"},children:"⬇ Please scroll to the bottom to continue ⬇"}),o.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:m,onChange:A=>f(A.target.checked),disabled:!b,className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),o.jsx("span",{className:"text-sm sm:text-base",style:{color:b?"var(--color-text-white)":"var(--color-text-gray)"},children:"I have read and agree to the terms of the waiver"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between items-center mb-2",children:[o.jsx("label",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:"Signature *"}),o.jsx("button",{type:"button",onClick:Z,className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),o.jsx("canvas",{ref:L,onMouseDown:J,onMouseMove:H,onMouseUp:$,onMouseLeave:$,onTouchStart:J,onTouchMove:H,onTouchEnd:$,className:"w-full rounded-lg cursor-crosshair touch-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"}}),o.jsx("p",{className:"mt-2 text-xs sm:text-sm",style:{color:"var(--color-text-gray)"},children:"Sign above with your mouse or finger"})]}),C&&o.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-error)"},children:C}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[o.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function ph({onNext:s,onBack:d,visitorNumber:i,totalAdults:u,initialData:m}){const[f,b]=k.useState(""),[_,N]=k.useState(""),[W,I]=k.useState(!1),x=k.useRef(null);k.useEffect(()=>{const H=x.current;if(!H)return;const $=H.getContext("2d");if($)if(H.width=H.offsetWidth*2,H.height=H.offsetHeight*2,$.scale(2,2),$.strokeStyle="#D4A736",$.lineWidth=2,$.lineCap="round",$.lineJoin="round",$.clearRect(0,0,H.width,H.height),m){if(b(m.name),N(m.signature),m.signature){const Z=new Image;Z.onload=()=>{$.drawImage(Z,0,0,H.offsetWidth,H.offsetHeight)},Z.src=m.signature}}else b(""),N("")},[i,m]);const C=H=>H.split(" ").map($=>$.charAt(0).toUpperCase()+$.slice(1).toLowerCase()).join(" "),S=H=>{I(!0);const $=x.current;if(!$)return;const Z=$.getContext("2d");if(!Z)return;const ee=$.getBoundingClientRect(),A=$.width/ee.width,V=$.height/ee.height,F="touches"in H?H.touches[0].clientX:H.clientX,O="touches"in H?H.touches[0].clientY:H.clientY,oe=(F-ee.left)*A/2,me=(O-ee.top)*V/2;Z.beginPath(),Z.moveTo(oe,me)},L=H=>{if(!W)return;const $=x.current;if(!$)return;const Z=$.getContext("2d");if(!Z)return;const ee=$.getBoundingClientRect(),A=$.width/ee.width,V=$.height/ee.height,F="touches"in H?H.touches[0].clientX:H.clientX,O="touches"in H?H.touches[0].clientY:H.clientY,oe=(F-ee.left)*A/2,me=(O-ee.top)*V/2;Z.lineTo(oe,me),Z.stroke()},E=()=>{I(!1);const H=x.current;H&&N(H.toDataURL())},T=()=>{const H=x.current;if(!H)return;const $=H.getContext("2d");$&&($.clearRect(0,0,H.width,H.height),N(""))},J=H=>{if(H.preventDefault(),!f.trim()){alert("Please enter the visitor's name");return}if(!_){alert("Please provide a signature");return}s({name:f.trim(),signature:_})};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[o.jsx(rh,{size:32,style:{color:"var(--color-gold)"}}),o.jsxs("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Additional Visitor ",i," of ",u]})]}),o.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide name and signature"}),o.jsxs("form",{onSubmit:J,className:"space-y-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:"Visitor's Full Name"}),o.jsx("input",{type:"text",value:f,onChange:H=>b(C(H.target.value)),placeholder:"Enter full name",required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsx("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:"Signature"}),o.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"},children:[o.jsx("canvas",{ref:x,className:"w-full h-full cursor-crosshair",style:{touchAction:"none"},onMouseDown:S,onMouseMove:L,onMouseUp:E,onMouseLeave:E,onTouchStart:S,onTouchMove:L,onTouchEnd:E,onTouchCancel:E}),!_&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",style:{color:"var(--color-text-gray)",fontSize:"16px"},children:"Sign here with your finger or mouse"})]}),o.jsx("button",{type:"button",onClick:T,className:"w-full py-2 rounded-lg text-sm transition-colors",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Clear Signature"})]}),o.jsx("div",{className:"text-center p-3 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)"},children:o.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Collecting signatures: ",i," of ",u," adults"]})}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4",children:[o.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:i<u?"Next Visitor":"Continue"})]})]})]})})}function hh({onNext:s,onBack:d,numberOfMinors:i}){const[u,m]=k.useState(Array(i).fill("")),f=N=>N.split(" ").map(W=>W.charAt(0).toUpperCase()+W.slice(1).toLowerCase()).join(" "),b=(N,W)=>{const I=[...u];I[N]=f(W),m(I)},_=N=>{N.preventDefault();for(let W=0;W<u.length;W++)if(!u[W].trim()){alert(`Please enter the name for Minor ${W+1}`);return}s(u.map(W=>W.trim()))};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[o.jsx(bu,{size:32,style:{color:"var(--color-gold)"}}),o.jsx("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Minor Information"})]}),o.jsxs("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:["Please provide the name",i>1?"s":""," of ",i===1?"the":"all"," minor",i>1?"s":""," visiting"]}),o.jsxs("form",{onSubmit:_,className:"space-y-5",children:[o.jsx("div",{className:"space-y-4",children:u.map((N,W)=>o.jsxs("div",{className:"space-y-2",children:[o.jsxs("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:["Minor ",W+1," Full Name"]}),o.jsx("input",{type:"text",value:N,onChange:I=>b(W,I.target.value),placeholder:`Enter name of minor ${W+1}`,required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]},W))}),o.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid rgba(212, 167, 54, 0.3)"},children:o.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"ℹ️ Signatures are not required for minors"})}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[o.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Complete Check-In"})]})]})]})})}function mh({customerName:s,hasMinors:d,onReturnHome:i}){const[u,m]=k.useState(15),f=k.useRef(i);return k.useEffect(()=>{f.current=i},[i]),k.useEffect(()=>{const b=setInterval(()=>{m(_=>_<=1?(clearInterval(b),setTimeout(()=>f.current(),0),0):_-1)},1e3);return()=>clearInterval(b)},[]),o.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[o.jsx("div",{className:"flex justify-center mb-6",children:o.jsx(gu,{size:80,style:{color:"var(--color-success)"}})}),o.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You, ",s,"!"]}),o.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),d&&o.jsxs("div",{className:"flex items-start gap-3 mb-8 p-4 rounded-lg text-left",style:{backgroundColor:"rgba(234, 179, 8, 0.1)",border:"1px solid var(--color-gold)"},children:[o.jsx(Zp,{size:24,style:{color:"var(--color-gold)",flexShrink:0,marginTop:"2px"}}),o.jsx("p",{style:{color:"var(--color-gold)",fontSize:"16px",fontWeight:500},children:"Caution: Children under 15 years old must stay in the waiting room."})]}),o.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",o.jsx("span",{style:{color:"var(--color-gold)"},children:u})," seconds..."]}),o.jsx("button",{onClick:i,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function fh({onLogin:s}){const[d,i]=k.useState(""),[u,m]=k.useState(""),[f,b]=k.useState(!1),[_,N]=k.useState(""),W=I=>{if(I.preventDefault(),N(""),!d.trim()){N("Username is required");return}if(!u.trim()){N("Password is required");return}d==="staff"&&u==="reliance"?s(d,"staff"):d==="pricing"&&u==="reliance"?s(d,"pricing"):d==="analysis"&&u==="reliance"?s(d,"analysis"):d==="staff2"&&u==="reliance"?s(d,"staff2"):N("Invalid username or password")};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("img",{src:No,alt:"Reliance Surfaces",className:"w-24 h-24 mx-auto mb-4 object-contain"}),o.jsx("h1",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"}),o.jsx("p",{style:{color:"var(--color-text-gray)"},children:"Staff Login"})]}),o.jsxs("form",{onSubmit:W,className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Username"}),o.jsx("input",{type:"text",value:d,onChange:I=>i(I.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your username"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Password"}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:f?"text":"password",value:u,onChange:I=>m(I.target.value),className:"w-full px-4 py-3 rounded-lg pr-12",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your password"}),o.jsx("button",{type:"button",onClick:()=>b(!f),className:"absolute right-3 top-1/2 -translate-y-1/2",style:{color:"var(--color-text-gray)"},children:f?o.jsx(Up,{size:20}):o.jsx(fs,{size:20})})]})]}),_&&o.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid var(--color-error)"},children:o.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:_})}),o.jsx("button",{type:"submit",className:"w-full py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Sign In"})]})]})})}function su(s,d){const[i,u]=k.useState(s);return k.useEffect(()=>{const m=setTimeout(()=>u(s),d);return()=>clearTimeout(m)},[s,d]),i}function or(s,d){d===void 0&&(d={});var i=d.insertAt;if(s&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],m=document.createElement("style");m.type="text/css",i==="top"&&u.firstChild?u.insertBefore(m,u.firstChild):u.appendChild(m),m.styleSheet?m.styleSheet.cssText=s:m.appendChild(document.createTextNode(s))}}or(`.react-loading-indicator-normalize,
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
}`);var it=function(){return it=Object.assign||function(s){for(var d,i=1,u=arguments.length;i<u;i++)for(var m in d=arguments[i])Object.prototype.hasOwnProperty.call(d,m)&&(s[m]=d[m]);return s},it.apply(this,arguments)};function kl(s){return kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},kl(s)}var gh=/^\s+/,vh=/\s+$/;function he(s,d){if(d=d||{},(s=s||"")instanceof he)return s;if(!(this instanceof he))return new he(s,d);var i=(function(u){var m={r:0,g:0,b:0},f=1,b=null,_=null,N=null,W=!1,I=!1;typeof u=="string"&&(u=(function(L){L=L.replace(gh,"").replace(vh,"").toLowerCase();var E,T=!1;if(hs[L])L=hs[L],T=!0;else if(L=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(E=et.rgb.exec(L))?{r:E[1],g:E[2],b:E[3]}:(E=et.rgba.exec(L))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=et.hsl.exec(L))?{h:E[1],s:E[2],l:E[3]}:(E=et.hsla.exec(L))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=et.hsv.exec(L))?{h:E[1],s:E[2],v:E[3]}:(E=et.hsva.exec(L))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=et.hex8.exec(L))?{r:_r(E[1]),g:_r(E[2]),b:_r(E[3]),a:hu(E[4]),format:T?"name":"hex8"}:(E=et.hex6.exec(L))?{r:_r(E[1]),g:_r(E[2]),b:_r(E[3]),format:T?"name":"hex"}:(E=et.hex4.exec(L))?{r:_r(E[1]+""+E[1]),g:_r(E[2]+""+E[2]),b:_r(E[3]+""+E[3]),a:hu(E[4]+""+E[4]),format:T?"name":"hex8"}:(E=et.hex3.exec(L))?{r:_r(E[1]+""+E[1]),g:_r(E[2]+""+E[2]),b:_r(E[3]+""+E[3]),format:T?"name":"hex"}:!1})(u)),kl(u)=="object"&&(vt(u.r)&&vt(u.g)&&vt(u.b)?(x=u.r,C=u.g,S=u.b,m={r:255*Ve(x,255),g:255*Ve(C,255),b:255*Ve(S,255)},W=!0,I=String(u.r).substr(-1)==="%"?"prgb":"rgb"):vt(u.h)&&vt(u.s)&&vt(u.v)?(b=an(u.s),_=an(u.v),m=(function(L,E,T){L=6*Ve(L,360),E=Ve(E,100),T=Ve(T,100);var J=Math.floor(L),H=L-J,$=T*(1-E),Z=T*(1-H*E),ee=T*(1-(1-H)*E),A=J%6,V=[T,Z,$,$,ee,T][A],F=[ee,T,T,Z,$,$][A],O=[$,$,ee,T,T,Z][A];return{r:255*V,g:255*F,b:255*O}})(u.h,b,_),W=!0,I="hsv"):vt(u.h)&&vt(u.s)&&vt(u.l)&&(b=an(u.s),N=an(u.l),m=(function(L,E,T){var J,H,$;function Z(V,F,O){return O<0&&(O+=1),O>1&&(O-=1),O<1/6?V+6*(F-V)*O:O<.5?F:O<2/3?V+(F-V)*(2/3-O)*6:V}if(L=Ve(L,360),E=Ve(E,100),T=Ve(T,100),E===0)J=H=$=T;else{var ee=T<.5?T*(1+E):T+E-T*E,A=2*T-ee;J=Z(A,ee,L+1/3),H=Z(A,ee,L),$=Z(A,ee,L-1/3)}return{r:255*J,g:255*H,b:255*$}})(u.h,b,N),W=!0,I="hsl"),u.hasOwnProperty("a")&&(f=u.a));var x,C,S;return f=ku(f),{ok:W,format:u.format||I,r:Math.min(255,Math.max(m.r,0)),g:Math.min(255,Math.max(m.g,0)),b:Math.min(255,Math.max(m.b,0)),a:f}})(s);this._originalInput=s,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=d.format||i.format,this._gradientType=d.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function iu(s,d,i){s=Ve(s,255),d=Ve(d,255),i=Ve(i,255);var u,m,f=Math.max(s,d,i),b=Math.min(s,d,i),_=(f+b)/2;if(f==b)u=m=0;else{var N=f-b;switch(m=_>.5?N/(2-f-b):N/(f+b),f){case s:u=(d-i)/N+(d<i?6:0);break;case d:u=(i-s)/N+2;break;case i:u=(s-d)/N+4}u/=6}return{h:u,s:m,l:_}}function cu(s,d,i){s=Ve(s,255),d=Ve(d,255),i=Ve(i,255);var u,m,f=Math.max(s,d,i),b=Math.min(s,d,i),_=f,N=f-b;if(m=f===0?0:N/f,f==b)u=0;else{switch(f){case s:u=(d-i)/N+(d<i?6:0);break;case d:u=(i-s)/N+2;break;case i:u=(s-d)/N+4}u/=6}return{h:u,s:m,v:_}}function uu(s,d,i,u){var m=[rt(Math.round(s).toString(16)),rt(Math.round(d).toString(16)),rt(Math.round(i).toString(16))];return u&&m[0].charAt(0)==m[0].charAt(1)&&m[1].charAt(0)==m[1].charAt(1)&&m[2].charAt(0)==m[2].charAt(1)?m[0].charAt(0)+m[1].charAt(0)+m[2].charAt(0):m.join("")}function du(s,d,i,u){return[rt(Nu(u)),rt(Math.round(s).toString(16)),rt(Math.round(d).toString(16)),rt(Math.round(i).toString(16))].join("")}function xh(s,d){d=d===0?0:d||10;var i=he(s).toHsl();return i.s-=d/100,i.s=wl(i.s),he(i)}function yh(s,d){d=d===0?0:d||10;var i=he(s).toHsl();return i.s+=d/100,i.s=wl(i.s),he(i)}function bh(s){return he(s).desaturate(100)}function kh(s,d){d=d===0?0:d||10;var i=he(s).toHsl();return i.l+=d/100,i.l=wl(i.l),he(i)}function Nh(s,d){d=d===0?0:d||10;var i=he(s).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-d/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-d/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-d/100*255))),he(i)}function wh(s,d){d=d===0?0:d||10;var i=he(s).toHsl();return i.l-=d/100,i.l=wl(i.l),he(i)}function jh(s,d){var i=he(s).toHsl(),u=(i.h+d)%360;return i.h=u<0?360+u:u,he(i)}function Ch(s){var d=he(s).toHsl();return d.h=(d.h+180)%360,he(d)}function pu(s,d){if(isNaN(d)||d<=0)throw new Error("Argument to polyad must be a positive number");for(var i=he(s).toHsl(),u=[he(s)],m=360/d,f=1;f<d;f++)u.push(he({h:(i.h+f*m)%360,s:i.s,l:i.l}));return u}function Sh(s){var d=he(s).toHsl(),i=d.h;return[he(s),he({h:(i+72)%360,s:d.s,l:d.l}),he({h:(i+216)%360,s:d.s,l:d.l})]}function Ph(s,d,i){d=d||6,i=i||30;var u=he(s).toHsl(),m=360/i,f=[he(s)];for(u.h=(u.h-(m*d>>1)+720)%360;--d;)u.h=(u.h+m)%360,f.push(he(u));return f}function Eh(s,d){d=d||6;for(var i=he(s).toHsv(),u=i.h,m=i.s,f=i.v,b=[],_=1/d;d--;)b.push(he({h:u,s:m,v:f})),f=(f+_)%1;return b}he.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var s=this.toRgb();return(299*s.r+587*s.g+114*s.b)/1e3},getLuminance:function(){var s,d,i,u=this.toRgb();return s=u.r/255,d=u.g/255,i=u.b/255,.2126*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.7152*(d<=.03928?d/12.92:Math.pow((d+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(s){return this._a=ku(s),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var s=cu(this._r,this._g,this._b);return{h:360*s.h,s:s.s,v:s.v,a:this._a}},toHsvString:function(){var s=cu(this._r,this._g,this._b),d=Math.round(360*s.h),i=Math.round(100*s.s),u=Math.round(100*s.v);return this._a==1?"hsv("+d+", "+i+"%, "+u+"%)":"hsva("+d+", "+i+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var s=iu(this._r,this._g,this._b);return{h:360*s.h,s:s.s,l:s.l,a:this._a}},toHslString:function(){var s=iu(this._r,this._g,this._b),d=Math.round(360*s.h),i=Math.round(100*s.s),u=Math.round(100*s.l);return this._a==1?"hsl("+d+", "+i+"%, "+u+"%)":"hsla("+d+", "+i+"%, "+u+"%, "+this._roundA+")"},toHex:function(s){return uu(this._r,this._g,this._b,s)},toHexString:function(s){return"#"+this.toHex(s)},toHex8:function(s){return(function(d,i,u,m,f){var b=[rt(Math.round(d).toString(16)),rt(Math.round(i).toString(16)),rt(Math.round(u).toString(16)),rt(Nu(m))];return f&&b[0].charAt(0)==b[0].charAt(1)&&b[1].charAt(0)==b[1].charAt(1)&&b[2].charAt(0)==b[2].charAt(1)&&b[3].charAt(0)==b[3].charAt(1)?b[0].charAt(0)+b[1].charAt(0)+b[2].charAt(0)+b[3].charAt(0):b.join("")})(this._r,this._g,this._b,this._a,s)},toHex8String:function(s){return"#"+this.toHex8(s)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ve(this._r,255))+"%",g:Math.round(100*Ve(this._g,255))+"%",b:Math.round(100*Ve(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%)":"rgba("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Th[uu(this._r,this._g,this._b,!0)]||!1)},toFilter:function(s){var d="#"+du(this._r,this._g,this._b,this._a),i=d,u=this._gradientType?"GradientType = 1, ":"";if(s){var m=he(s);i="#"+du(m._r,m._g,m._b,m._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+d+",endColorstr="+i+")"},toString:function(s){var d=!!s;s=s||this._format;var i=!1,u=this._a<1&&this._a>=0;return d||!u||s!=="hex"&&s!=="hex6"&&s!=="hex3"&&s!=="hex4"&&s!=="hex8"&&s!=="name"?(s==="rgb"&&(i=this.toRgbString()),s==="prgb"&&(i=this.toPercentageRgbString()),s!=="hex"&&s!=="hex6"||(i=this.toHexString()),s==="hex3"&&(i=this.toHexString(!0)),s==="hex4"&&(i=this.toHex8String(!0)),s==="hex8"&&(i=this.toHex8String()),s==="name"&&(i=this.toName()),s==="hsl"&&(i=this.toHslString()),s==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):s==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return he(this.toString())},_applyModification:function(s,d){var i=s.apply(null,[this].concat([].slice.call(d)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(kh,arguments)},brighten:function(){return this._applyModification(Nh,arguments)},darken:function(){return this._applyModification(wh,arguments)},desaturate:function(){return this._applyModification(xh,arguments)},saturate:function(){return this._applyModification(yh,arguments)},greyscale:function(){return this._applyModification(bh,arguments)},spin:function(){return this._applyModification(jh,arguments)},_applyCombination:function(s,d){return s.apply(null,[this].concat([].slice.call(d)))},analogous:function(){return this._applyCombination(Ph,arguments)},complement:function(){return this._applyCombination(Ch,arguments)},monochromatic:function(){return this._applyCombination(Eh,arguments)},splitcomplement:function(){return this._applyCombination(Sh,arguments)},triad:function(){return this._applyCombination(pu,[3])},tetrad:function(){return this._applyCombination(pu,[4])}},he.fromRatio=function(s,d){if(kl(s)=="object"){var i={};for(var u in s)s.hasOwnProperty(u)&&(i[u]=u==="a"?s[u]:an(s[u]));s=i}return he(s,d)},he.equals=function(s,d){return!(!s||!d)&&he(s).toRgbString()==he(d).toRgbString()},he.random=function(){return he.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},he.mix=function(s,d,i){i=i===0?0:i||50;var u=he(s).toRgb(),m=he(d).toRgb(),f=i/100;return he({r:(m.r-u.r)*f+u.r,g:(m.g-u.g)*f+u.g,b:(m.b-u.b)*f+u.b,a:(m.a-u.a)*f+u.a})},he.readability=function(s,d){var i=he(s),u=he(d);return(Math.max(i.getLuminance(),u.getLuminance())+.05)/(Math.min(i.getLuminance(),u.getLuminance())+.05)},he.isReadable=function(s,d,i){var u,m,f=he.readability(s,d);switch(m=!1,(u=(function(b){var _,N;return _=((b=b||{level:"AA",size:"small"}).level||"AA").toUpperCase(),N=(b.size||"small").toLowerCase(),_!=="AA"&&_!=="AAA"&&(_="AA"),N!=="small"&&N!=="large"&&(N="small"),{level:_,size:N}})(i)).level+u.size){case"AAsmall":case"AAAlarge":m=f>=4.5;break;case"AAlarge":m=f>=3;break;case"AAAsmall":m=f>=7}return m},he.mostReadable=function(s,d,i){var u,m,f,b,_=null,N=0;m=(i=i||{}).includeFallbackColors,f=i.level,b=i.size;for(var W=0;W<d.length;W++)(u=he.readability(s,d[W]))>N&&(N=u,_=he(d[W]));return he.isReadable(s,_,{level:f,size:b})||!m?_:(i.includeFallbackColors=!1,he.mostReadable(s,["#fff","#000"],i))};var hs=he.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Th=he.hexNames=(function(s){var d={};for(var i in s)s.hasOwnProperty(i)&&(d[s[i]]=i);return d})(hs);function ku(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function Ve(s,d){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(s)&&(s="100%");var i=(function(u){return typeof u=="string"&&u.indexOf("%")!=-1})(s);return s=Math.min(d,Math.max(0,parseFloat(s))),i&&(s=parseInt(s*d,10)/100),Math.abs(s-d)<1e-6?1:s%d/parseFloat(d)}function wl(s){return Math.min(1,Math.max(0,s))}function _r(s){return parseInt(s,16)}function rt(s){return s.length==1?"0"+s:""+s}function an(s){return s<=1&&(s=100*s+"%"),s}function Nu(s){return Math.round(255*parseFloat(s)).toString(16)}function hu(s){return _r(s)/255}var It,vl,xl,et=(vl="[\\s|\\(]+("+(It="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",xl="[\\s|\\(]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",{CSS_UNIT:new RegExp(It),rgb:new RegExp("rgb"+vl),rgba:new RegExp("rgba"+xl),hsl:new RegExp("hsl"+vl),hsla:new RegExp("hsla"+xl),hsv:new RegExp("hsv"+vl),hsva:new RegExp("hsva"+xl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function vt(s){return!!et.CSS_UNIT.exec(s)}var Mh=function(s,d){var i=(typeof s=="string"?parseInt(s):s)||0;if(i>=-5&&i<=5){var u=i,m=parseFloat(d),f=m+u*(m/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:d}},zh=function(s,d){var i=s||{},u="";switch(d){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var m={};if(i.fontSize){var f=i.fontSize;m=(function(b,_){var N={};for(var W in b)Object.prototype.hasOwnProperty.call(b,W)&&_.indexOf(W)<0&&(N[W]=b[W]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function"){var I=0;for(W=Object.getOwnPropertySymbols(b);I<W.length;I++)_.indexOf(W[I])<0&&Object.prototype.propertyIsEnumerable.call(b,W[I])&&(N[W[I]]=b[W[I]])}return N})(i,["fontSize"]),u=f}return{fontSize:u,styles:m}},Oh={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Dh=function(s){var d=s.className,i=s.text,u=s.textColor,m=s.staticText,f=s.style;return i?Br.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(d||"").trim(),style:it(it(it({},m&&Oh),u&&{color:u,mixBlendMode:"unset"}),f&&f)},typeof i=="string"&&i.length?i:"loading"):null},wu="rgb(50, 205, 50)";function _h(s,d){if(d===void 0&&(d=0),s.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function u(m,f){return f===void 0&&(f=0),i.push.apply(i,m),i.length<f&&u(i,f),i.slice(0,f)})(s,d)}or(`.atom-rli-bounding-box {
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
}`);he(wu).toRgb();Array.from({length:4},(function(s,d){return"--atom-phase".concat(d+1,"-rgb")}));or(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--commet-phase".concat(d+1,"-color")}));or(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--OP-annulus-phase".concat(d+1,"-color")}));function ps(s){return s&&s.Math===Math&&s}or(`.OP-dotted-rli-bounding-box {
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
}`);ps(typeof window=="object"&&window)||ps(typeof self=="object"&&self)||ps(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(s,d){return"--OP-dotted-phase".concat(d+1,"-color")}));or(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--OP-spokes-phase".concat(d+1,"-color")}));or(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--OP-annulus-dual-sectors-phase".concat(d+1,"-color")}));or(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return["--OP-annulus-track-phase".concat(d+1,"-color"),"--OP-annulus-sector-phase".concat(d+1,"-color")]}));or(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--four-square-phase".concat(d+1,"-color")}));or(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--mosaic-phase".concat(d+1,"-color")}));or(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--riple-phase".concat(d+1,"-color")}));or(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--TD-pulsate-phase".concat(d+1,"-color")}));or(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--TD-brick-stack-phase".concat(d+1,"-color")}));or(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--TD-bob-phase".concat(d+1,"-color")}));or(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--TD-bounce-phase".concat(d+1,"-color")}));or(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--shape-phase".concat(d+1,"-color")}));or(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--trophySpin-phase".concat(d+1,"-color")}));or(`.slab-rli-bounding-box {
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
}`);var ko=Array.from({length:4},(function(s,d){return"--slab-phase".concat(d+1,"-color")})),Rh=function(s){var d,i=zh(s?.style,s?.size),u=i.styles,m=i.fontSize,f=s?.easing,b=Mh(s?.speedPlus,"3s").animationPeriod,_=(function(N){var W={};if(N instanceof Array){for(var I=_h(N,ko.length),x=0;x<I.length&&!(x>=4);x++)W[ko[x]]=I[x];return W}try{if(typeof N!="string")throw new Error("Color String expected");for(var C=0;C<ko.length;C++)W[ko[C]]=N}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof N,'" instead with value, ').concat(JSON.stringify(N))):console.warn("".concat(JSON.stringify(N)," received in <Slab /> indicator cannot be processed. Using default instead!")),C=0;C<ko.length;C++)W[ko[C]]=wu}return W})((d=s?.color)!==null&&d!==void 0?d:"");return Br.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:it(it(it(it(it({},m&&{fontSize:m}),b&&{"--rli-animation-duration-unitless":parseFloat(b)}),f&&{"--rli-animation-function":f}),_),u),role:"status","aria-live":"polite","aria-label":"Loading"},Br.createElement("span",{className:"rli-d-i-b slab-indicator"},Br.createElement("span",{className:"slabs-wrapper"},Br.createElement("span",{className:"slab"}),Br.createElement("span",{className:"slab"}),Br.createElement("span",{className:"slab"}),Br.createElement("span",{className:"slab"}))),Br.createElement(Dh,{staticText:!0,text:s?.text,textColor:s?.textColor}))};or(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--life-line-phase".concat(d+1,"-color")}));function yl({color:s="#ccb331",size:d="medium",text:i,fullScreen:u=!1}){const m=o.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[o.jsx(Rh,{color:s,size:d}),i&&o.jsx("p",{className:"text-sm animate-pulse",style:{color:"var(--color-text-gray, #aaa)"},children:i})]});return u?o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.7)"},children:m}):o.jsx("div",{className:"flex items-center justify-center p-6",children:m})}function Ah({customer:s,onClose:d,onSubmit:i,onMarkAsHelped:u,onRevisit:m,staffUsername:f,isViewOnly:b,allCheckIns:_}){const[N,W]=k.useState(s.draft?.step||1),[I,x]=k.useState(s.draft?.editedCustomerData||{}),[C,S]=k.useState(s.draft?.selectedFabricator),[L,E]=k.useState(s.draft?.materials||[]),[T,J]=k.useState(s.currentlyHelpedBy||s.draft?.helpedBy||f),[H,$]=k.useState(s.draft?.selectionSheetNumber||""),[Z,ee]=k.useState(s.draft?.selectedFabricator?.companyName||""),[A,V]=k.useState(""),[F,O]=k.useState(!1),[oe,me]=k.useState(!1),Pe=su(Z,300),ke=su(A,300),[Ee,Ce]=k.useState([]),[ze,Ne]=k.useState([]),[Q,ae]=k.useState(!1),[D,p]=k.useState(!1),[y,G]=k.useState(!1);k.useEffect(()=>{s.currentlyHelpedBy&&J(s.currentlyHelpedBy)},[s.currentlyHelpedBy]);const K=()=>({...s,...I});k.useEffect(()=>{if(Pe.length<3){Ce([]);return}ae(!0),fetch(`/api/accounts/search?q=${encodeURIComponent(Pe)}`).then(w=>w.json()).then(w=>Ce(w.success?w.data:[])).catch(()=>Ce([])).finally(()=>ae(!1))},[Pe]),k.useEffect(()=>{if(ke.length<3){Ne([]);return}p(!0),fetch(`/api/materials/search?q=${encodeURIComponent(ke)}`).then(w=>w.json()).then(w=>Ne(w.success?w.data:[])).catch(()=>Ne([])).finally(()=>p(!1))},[ke]);const fe=()=>{if(s.status==="waiting"){const w={step:N,editedCustomerData:I,selectedFabricator:C,materials:L,helpedBy:T,selectionSheetNumber:H,isHold:L.some(U=>U.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};i(s.id,w),fetch(`/api/check-ins/${s.id}/draft`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({draftStep:N,materials:L,fabricator:C||null,helpedBy:T,selectionSheetNumber:H})}).catch(U=>console.warn("Draft save failed:",U))}d()},ne=w=>{S(w),ee(w.companyName),O(!1),w.salesPerson&&x(U=>({...U,salesPerson:w.salesPerson}))},we=w=>{ee(w),O(!0),C&&w.toLowerCase()!==C.companyName.toLowerCase()&&!C.companyName.toLowerCase().startsWith(w.toLowerCase())&&w.length>=3&&S(void 0)},je=w=>{const U={id:Date.now().toString(),name:w,soldAs:"",size:{l:"",h:""},lot:"",location:"",quantity:1,finish:"Polished",hold:!1,slabNumbers:""};E([...L,U]),V(""),me(!1)},de=(w,U,ie)=>{E(L.map(te=>te.id===w?{...te,[U]:ie}:te))},Ie=w=>{E(L.filter(U=>U.id!==w))},ir=async()=>{if(N!==3||y)return;G(!0);const w={step:3,editedCustomerData:I,selectedFabricator:C,materials:L,helpedBy:T,selectionSheetNumber:H,isHold:L.some(U=>U.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};try{await fetch(`/api/check-ins/${s.id}/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({materials:L,selectedFabricator:C,helpedBy:T,selectionSheetNumber:H})})}catch(U){console.error("Complete API error:",U)}G(!1),i(s.id,w),d()},Yr=()=>{if(!s.draft?.selectionSheetNumber)return!1;const w=_.filter(Oe=>Oe.firstName===s.firstName&&Oe.lastName===s.lastName&&Oe.status==="helped"&&Oe.draft?.selectionSheetNumber),te=s.draft.selectionSheetNumber.split(".")[0],xe=w.filter(Oe=>(Oe.draft?.selectionSheetNumber||"").startsWith(te));return xe.sort((Oe,nr)=>{const vr=Oe.draft?.selectionSheetNumber||"",He=nr.draft?.selectionSheetNumber||"",Ze=vr.split("."),Er=He.split("."),Rr=parseInt(Ze[0])||0,tt=parseInt(Er[0])||0;if(Rr!==tt)return Rr-tt;const Ar=Ze.length>1?parseInt(Ze[1]):0,Tr=Er.length>1?parseInt(Er[1]):0;return Ar-Tr}),xe[xe.length-1]?.id===s.id},Te=K();return o.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:o.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[o.jsxs("div",{className:"flex justify-between items-start mb-6",children:[o.jsxs("div",{children:[o.jsxs("h2",{style:{color:"var(--color-gold)"},children:[Te.firstName," ",Te.lastName]}),o.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Step ",N," of 3"]})]}),o.jsx("button",{onClick:fe,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:o.jsx(xt,{size:24})})]}),o.jsx("div",{className:"flex gap-2 mb-8",children:[1,2,3].map(w=>o.jsx("div",{className:"flex-1 h-2 rounded-full",style:{backgroundColor:w<=N?"var(--color-gold)":"var(--color-border)"}},w))}),N===1&&o.jsxs("div",{className:"space-y-6",children:[o.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Customer Details"}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"First Name"}),o.jsx("input",{type:"text",value:I.firstName??Te.firstName,onChange:w=>x({...I,firstName:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Last Name"}),o.jsx("input",{type:"text",value:I.lastName??Te.lastName,onChange:w=>x({...I,lastName:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address"}),o.jsx("input",{type:"text",value:I.street??Te.street,onChange:w=>x({...I,street:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),o.jsx("input",{type:"text",value:I.suiteUnit??Te.suiteUnit,onChange:w=>x({...I,suiteUnit:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[o.jsxs("div",{className:"col-span-2",children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City"}),o.jsx("input",{type:"text",value:I.city??Te.city,onChange:w=>x({...I,city:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State"}),o.jsx("input",{type:"text",value:I.state??Te.state,onChange:w=>x({...I,state:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP"}),o.jsx("input",{type:"text",value:I.zip??Te.zip,onChange:w=>x({...I,zip:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country"}),o.jsxs("select",{value:I.country??Te.country,onChange:w=>x({...I,country:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"USA",children:"USA"}),o.jsx("option",{value:"CAN",children:"CAN"}),o.jsx("option",{value:"MEX",children:"MEX"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone Numbers"}),(I.phones??Te.phones).map((w,U)=>o.jsx("input",{type:"tel",value:w,onChange:ie=>{const te=[...I.phones??Te.phones];te[U]=ie.target.value,x({...I,phones:te})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},U))]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Email Addresses"}),(I.emails??Te.emails).map((w,U)=>o.jsx("input",{type:"email",value:w,onChange:ie=>{const te=[...I.emails??Te.emails];te[U]=ie.target.value,x({...I,emails:te})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},U))]}),Te.visitors&&Te.visitors.length>0?o.jsxs("div",{children:[o.jsxs("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:["All Visitors (",Te.visitors.length,")"]}),o.jsx("div",{className:"space-y-4",children:Te.visitors.filter(w=>w&&w.name).map((w,U)=>(console.log(`Visitor ${U}:`,{name:w.name,hasSignature:!!w.signature,signatureLength:w.signature?.length,isMinor:w.isMinor,isMain:w.isMain}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:w.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px",fontWeight:"500"},children:w.name}),w.isMain&&o.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),w.isMinor&&o.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor"})]}),w.signature&&w.signature.length>0?o.jsx("div",{className:"rounded",style:{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"8px"},children:o.jsx("img",{src:w.signature,alt:`${w.name}'s signature`,className:"w-full rounded",style:{maxHeight:"80px",objectFit:"contain"}})}):w.isMinor?o.jsx("div",{className:"rounded flex items-center justify-center",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",padding:"12px",minHeight:"80px"},children:o.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No signature (Minor)"})}):null]},U)))})]}):o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Waiver Signature"}),o.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:o.jsx("img",{src:Te.signature,alt:"Signature",className:"w-full rounded",style:{maxHeight:"150px",objectFit:"contain"}})})]})]}),N===2&&o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Referral Information"}),o.jsx("div",{className:"mt-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:Te.referralSources&&Te.referralSources.length>0?Te.referralSources.map((w,U)=>o.jsxs("div",{className:"mb-3",children:[o.jsxs("p",{style:{color:"var(--color-text-white)"},children:[o.jsx("span",{style:{color:"var(--color-gold)"},children:"•"})," ",w.type]}),w.name&&o.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Name: ",w.name]}),w.phone&&o.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Phone: ",w.phone]})]},U)):o.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No referral information provided"})})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{color:"var(--color-text-white)",marginBottom:"16px"},children:"Fabricator Selection *"}),o.jsxs("div",{className:"relative",children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search by Company Name"}),o.jsx("input",{type:"text",value:Z,onChange:w=>we(w.target.value),onFocus:()=>O(!0),onBlur:()=>{setTimeout(()=>O(!1),200)},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${C?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Type 3+ characters to search..."}),F&&Z.length>=3&&o.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:Q?o.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[o.jsx(yl,{size:"small",color:"#ccb331"}),o.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):Ee.length>0?Ee.map(w=>o.jsxs("button",{onClick:()=>ne(w),className:"w-full text-left px-4 py-3 hover:bg-opacity-50",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[o.jsx("div",{children:w.companyName}),o.jsxs("div",{style:{color:"var(--color-text-gray)",fontSize:"12px"},children:[w.city,", ",w.state]})]},w.id)):o.jsx("div",{className:"px-4 py-3",children:o.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No accounts found matching "',Z,'"']})})}),Z.length>0&&Z.length<3&&o.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:"Type at least 3 characters to search"})]})]}),C&&o.jsxs("div",{className:"p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"},children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("h4",{style:{color:"var(--color-gold)"},children:"Selected Fabricator"}),o.jsx("button",{onClick:()=>{S(void 0),ee("")},className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Change"})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Company Name"}),o.jsx("input",{type:"text",value:C.companyName,onChange:w=>S({...C,companyName:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Address"}),o.jsx("input",{type:"text",value:C.address,onChange:w=>S({...C,address:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"City"}),o.jsx("input",{type:"text",value:C.city,onChange:w=>S({...C,city:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"State"}),o.jsx("input",{type:"text",value:C.state,onChange:w=>S({...C,state:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"ZIP"}),o.jsx("input",{type:"text",value:C.zip,onChange:w=>S({...C,zip:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Sales Person"}),o.jsx("input",{type:"text",value:I.salesPerson??Te.salesPerson??"",onChange:w=>x({...I,salesPerson:w.target.value}),placeholder:"Sales person name",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 1"}),o.jsx("input",{type:"text",value:C.phone1,onChange:w=>S({...C,phone1:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 2"}),o.jsx("input",{type:"text",value:C.phone2||"",onChange:w=>S({...C,phone2:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Mobile"}),o.jsx("input",{type:"text",value:C.mobile||"",onChange:w=>S({...C,mobile:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Email"}),o.jsx("input",{type:"email",value:C.email,onChange:w=>S({...C,email:w.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]})]})]}),N===3&&o.jsxs("div",{className:"space-y-6",children:[s.draft?.isRevisit&&o.jsx("div",{className:"p-4 rounded-lg mb-4",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:o.jsxs("p",{style:{color:"var(--color-gold)",fontSize:"14px"},children:[o.jsx("strong",{children:"Re-visit Mode:"})," You can edit all materials. Use the ",o.jsx("strong",{children:"−"})," button when quantity is 1 to delete a material."]})}),o.jsxs("div",{children:[o.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Materials / Selection Sheet"}),o.jsxs("div",{className:"relative mt-4",children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search Materials"}),o.jsx("input",{type:"text",value:A,onChange:w=>{V(w.target.value),me(!0)},onFocus:()=>me(!0),disabled:b,className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:b?"not-allowed":"text",opacity:b?.6:1},placeholder:b?"View only mode":"Search for materials..."}),!b&&oe&&A.length>=3&&o.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:D?o.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[o.jsx(yl,{size:"small",color:"#ccb331"}),o.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):ze.length>0?ze.map(w=>o.jsxs("button",{onClick:()=>je(w.name),className:"w-full text-left px-4 py-3 hover:bg-opacity-50 flex items-center justify-between",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[o.jsx("span",{children:w.name}),o.jsx(bl,{size:16,style:{color:"var(--color-gold)"}})]},w.id)):o.jsx("div",{className:"px-4 py-3",children:o.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No materials found matching "',A,'"']})})})]})]}),L.length>0&&o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full",style:{borderCollapse:"separate",borderSpacing:"0 10px"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"var(--color-background)"},children:[o.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",width:"110px"},children:"Qty"}),o.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"160px"},children:"Name"}),o.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Sold As"}),o.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Finish"}),o.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"150px"},children:"Size (L x H)"}),o.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"90px"},children:"Lot"}),o.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Location"}),o.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Hold"})]})}),o.jsx("tbody",{children:L.map((w,U)=>{const ie=s.draft?.isRevisit&&U<(s.draft?.previousMaterialsCount||0);return o.jsxs("tr",{style:{backgroundColor:ie?"rgba(100, 100, 100, 0.2)":"var(--color-background)",borderRadius:"8px"},children:[o.jsx("td",{className:"px-5 py-5",style:{borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px"},children:o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("button",{onClick:()=>{w.quantity===1?Ie(w.id):de(w.id,"quantity",w.quantity-1)},disabled:b,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:b?.5:1,cursor:b?"not-allowed":"pointer"},title:w.quantity===1?"Delete material":"Decrease quantity",children:o.jsx(Qp,{size:16})}),o.jsx("span",{style:{color:"var(--color-text-white)",minWidth:"30px",textAlign:"center",fontSize:"15px",fontWeight:"500"},children:w.quantity}),o.jsx("button",{onClick:()=>de(w.id,"quantity",w.quantity+1),disabled:b,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:b?.5:1,cursor:b?"not-allowed":"pointer"},children:o.jsx(bl,{size:16})})]})}),o.jsx("td",{className:"px-5 py-5",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px"},children:w.name}),ie&&o.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-gray)",border:"1px solid var(--color-border)"},children:"Previous"})]})}),o.jsx("td",{className:"px-5 py-5",children:o.jsx("input",{type:"text",value:w.soldAs||"",onChange:te=>de(w.id,"soldAs",te.target.value),disabled:b,placeholder:"Alternative",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})}),o.jsx("td",{className:"px-5 py-5",children:o.jsxs("select",{value:w.finish||"Polished",onChange:te=>de(w.id,"finish",te.target.value),disabled:b,className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"pointer"},children:[o.jsx("option",{value:"Polished",children:"Polished"}),o.jsx("option",{value:"Honed",children:"Honed"}),o.jsx("option",{value:"Polished/Honed",children:"Polished/Honed"}),o.jsx("option",{value:"Leather",children:"Leather"}),o.jsx("option",{value:"Honed/Leather",children:"Honed/Leather"})]})}),o.jsx("td",{className:"px-5 py-5",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("input",{type:"text",value:w.size?.l||"",onChange:te=>de(w.id,"size",{...w.size||{l:"",h:""},l:te.target.value}),disabled:b,placeholder:"L",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:b?.6:1,cursor:b?"not-allowed":"text"}}),o.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"bold",fontSize:"16px"},children:"×"}),o.jsx("input",{type:"text",value:w.size?.h||"",onChange:te=>de(w.id,"size",{...w.size||{l:"",h:""},h:te.target.value}),disabled:b,placeholder:"H",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})]})}),o.jsx("td",{className:"px-5 py-5",children:o.jsx("input",{type:"text",value:w.lot||"",onChange:te=>de(w.id,"lot",te.target.value),disabled:b,placeholder:"Lot #",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})}),o.jsx("td",{className:"px-5 py-5",children:o.jsx("input",{type:"text",value:w.location||"",onChange:te=>de(w.id,"location",te.target.value),disabled:b,placeholder:"Location",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})}),o.jsx("td",{className:"px-5 py-5",children:o.jsxs("div",{children:[o.jsxs("label",{className:"flex items-center gap-2 mb-2 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:w.hold,onChange:te=>de(w.id,"hold",te.target.checked),disabled:b,className:"w-4 h-4 rounded",style:{accentColor:"var(--color-gold)",opacity:b?.5:1,cursor:b?"not-allowed":"pointer"}}),o.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"14px"},children:"Hold"})]}),w.hold&&o.jsx("input",{type:"text",value:w.slabNumbers||"",onChange:te=>de(w.id,"slabNumbers",te.target.value),disabled:b,placeholder:"Slab #s",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)",fontSize:"14px",opacity:b?.6:1,cursor:b?"not-allowed":"text"}})]})})]},w.id)})})]})}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Helped By"}),o.jsx("div",{className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:T})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Selection Sheet Number"}),o.jsx("input",{type:"text",value:H,onChange:w=>$(w.target.value),readOnly:s.draft?.isRevisit||b,placeholder:"e.g. 800, 801...",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:s.draft?.isRevisit||b?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:`1px solid ${s.draft?.isRevisit||b?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)",cursor:s.draft?.isRevisit||b?"not-allowed":"text",opacity:b?.6:1}}),s.draft?.isRevisit&&!b&&o.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-gold)"},children:"Auto-generated from previous sheet"})]})]})]}),o.jsxs("div",{className:"flex gap-4 mt-8",children:[N>1&&o.jsx("button",{onClick:()=>W(N-1),className:"px-6 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),!b&&N<3?o.jsx("button",{onClick:()=>W(N+1),disabled:N===2&&!C,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:N===2&&!C?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:N===2&&!C?"not-allowed":"pointer"},children:"Next"}):b&&N<3?o.jsx("button",{onClick:()=>W(N+1),className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Next"}):b?null:o.jsx("button",{onClick:ir,disabled:!H||H.trim()===""||y,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:!H||H.trim()===""||y?"var(--color-border)":"var(--color-success)",color:"var(--color-background)",cursor:!H||H.trim()===""||y?"not-allowed":"pointer"},children:y?o.jsxs(o.Fragment,{children:[o.jsx(yl,{size:"small",color:"var(--color-background)"}),o.jsx("span",{children:"Submitting..."})]}):"Submit"})]}),b&&m&&N===3&&Yr()&&o.jsx("div",{className:"flex gap-4 mt-4",children:o.jsx("button",{onClick:()=>{m(s),d()},className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Re-visit"})})]})})}function Fh({username:s,onLogout:d,checkIns:i,onMarkAsHelped:u,onSaveDraft:m,onRevisit:f,onUpdateCurrentlyHelpedBy:b}){const[_,N]=k.useState("queue"),[W,I]=k.useState(null),[x,C]=k.useState(1),[S,L]=k.useState(""),[E,T]=k.useState(""),[J,H]=k.useState(""),[$,Z]=k.useState(""),[ee,A]=k.useState(""),[V,F]=k.useState("all"),O=10,oe=i.filter(p=>p.status==="waiting"),me=i.filter(p=>p.status==="helped"),Pe=me.filter(p=>{if(S&&p.draft?.selectedFabricator&&!p.draft.selectedFabricator.companyName.toLowerCase().includes(S.toLowerCase())||E&&p.helpedTime&&p.helpedTime.toISOString().split("T")[0]!==E||J&&p.draft?.selectionSheetNumber&&!p.draft.selectionSheetNumber.toLowerCase().includes(J.toLowerCase())||$&&!`${p.firstName} ${p.lastName}`.toLowerCase().includes($.toLowerCase())||ee&&!p.phones.some(G=>G.toLowerCase().includes(ee.toLowerCase())))return!1;if(V!=="all"){const y=p.draft?.isHold||!1;if(V==="yes"&&!y||V==="no"&&y)return!1}return!0}),ke=[...Pe].sort((p,y)=>!p.helpedTime||!y.helpedTime?0:y.helpedTime.getTime()-p.helpedTime.getTime()),Ee=ke.slice((x-1)*O,x*O),Ce=Math.ceil(ke.length/O),ze=p=>{const G=new Date().getTime()-p.getTime(),K=Math.floor(G/6e4);if(K<1)return"Just now";if(K<60)return`${K} min`;const fe=Math.floor(K/60),ne=K%60;return`${fe}h ${ne}m`},Ne=p=>p.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),Q=p=>p.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})+" "+p.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),ae=(p,y)=>{m(p,y),y.step===3&&u(p)},D=p=>{b(p.id,s),I(p)};return o.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:No,alt:"Reliance Surfaces",className:"w-12 h-12 object-contain"}),o.jsx("h2",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"})]}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("span",{style:{color:"var(--color-text-white)"},children:s}),o.jsxs("button",{className:"relative p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)"},children:[o.jsx(Fp,{size:20,style:{color:"var(--color-text-gray)"}}),oe.length>0&&o.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:oe.length})]}),o.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx(Nl,{size:18}),"Logout"]})]})]}),o.jsxs("div",{className:"flex gap-6 mt-6",children:[o.jsxs("button",{onClick:()=>N("queue"),className:"pb-3 px-2",style:{color:_==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:_==="queue"?"2px solid var(--color-gold)":"2px solid transparent"},children:["Queue ",oe.length>0&&`(${oe.length})`]}),o.jsx("button",{onClick:()=>N("history"),className:"pb-3 px-2",style:{color:_==="history"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:_==="history"?"2px solid var(--color-gold)":"2px solid transparent"},children:"History"})]})]})}),o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8",children:[_==="queue"&&o.jsx("div",{children:o.jsx("div",{className:"space-y-3",children:oe.length===0?o.jsx("div",{className:"text-center py-12",style:{color:"var(--color-text-gray)"},children:"No customers in queue"}):oe.map(p=>o.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg transition-all hover:bg-opacity-80",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:p.firstName.charAt(0).toUpperCase()}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsxs("span",{className:"font-medium truncate",style:{color:"var(--color-text-white)"},children:[p.firstName," ",p.lastName]}),p.currentlyHelpedBy?o.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:["In Progress • ",p.currentlyHelpedBy]}):o.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"New"}),p.partySize&&(p.partySize.adults>1||p.partySize.minors>0)&&o.jsxs("span",{className:"px-2 py-0.5 rounded text-xs flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:[p.partySize.adults," ",p.partySize.adults===1?"Adult":"Adults",p.partySize.minors>0&&`, ${p.partySize.minors} ${p.partySize.minors===1?"Minor":"Minors"}`]})]}),o.jsxs("div",{className:"flex items-center gap-4 text-xs",style:{color:"var(--color-text-gray)"},children:[o.jsxs("span",{children:["Checked in at ",Ne(p.checkInTime)]}),o.jsx("span",{children:"•"}),o.jsxs("span",{style:{color:"var(--color-gold)"},children:["Waiting ",ze(p.checkInTime)]})]})]}),o.jsx("button",{onClick:()=>D(p),className:"flex-shrink-0 px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"View"})]},p.id))})}),_==="history"&&o.jsxs("div",{children:[o.jsxs("div",{className:"mb-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("h3",{style:{color:"var(--color-gold)",marginBottom:"16px"},children:"Filter History"}),o.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Customer Name"}),o.jsx("input",{type:"text",value:$,onChange:p=>{Z(p.target.value),C(1)},placeholder:"Search by name...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone Number"}),o.jsx("input",{type:"text",value:ee,onChange:p=>{A(p.target.value),C(1)},placeholder:"Search by phone...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Fabricator"}),o.jsx("input",{type:"text",value:S,onChange:p=>{L(p.target.value),C(1)},placeholder:"Search by fabricator...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Selection Sheet #"}),o.jsx("input",{type:"text",value:J,onChange:p=>{H(p.target.value),C(1)},placeholder:"Search by sheet #...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Date"}),o.jsx("input",{type:"date",value:E,onChange:p=>{T(p.target.value),C(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Hold Status"}),o.jsxs("select",{value:V,onChange:p=>{F(p.target.value),C(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:[o.jsx("option",{value:"all",children:"All"}),o.jsx("option",{value:"yes",children:"Hold"}),o.jsx("option",{value:"no",children:"Not Hold"})]})]})]}),($||ee||S||J||E||V!=="all")&&o.jsx("button",{onClick:()=>{Z(""),A(""),L(""),H(""),T(""),F("all"),C(1)},className:"mt-4 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear Filters"})]}),ke.length===0?o.jsxs("div",{className:"text-center py-16",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[o.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"18px"},children:Pe.length===0&&me.length>0?"No matching results":"No history yet"}),o.jsx("p",{style:{color:"var(--color-text-gray)",marginTop:"8px"},children:Pe.length===0&&me.length>0?"Try adjusting your filters":"Helped customers will appear here"})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"var(--color-background)",borderBottom:"1px solid var(--color-border)"},children:[o.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Sheet #"}),o.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Customer Name"}),o.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Phone Number"}),o.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Fabricator"}),o.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Check-in"}),o.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Helped At"}),o.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Hold"}),o.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"}})]})}),o.jsx("tbody",{children:Ee.map((p,y)=>o.jsxs("tr",{style:{borderBottom:y<Ee.length-1?"1px solid var(--color-border)":"none",backgroundColor:y%2===0?"transparent":"rgba(0, 0, 0, 0.2)"},children:[o.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:p.draft?.selectionSheetNumber||"-"}),o.jsxs("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:[p.firstName," ",p.lastName]}),o.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.phones[0]||"-"}),o.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.draft?.selectedFabricator?.companyName||"-"}),o.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:Q(p.checkInTime)}),o.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.helpedTime?Q(p.helpedTime):"-"}),o.jsx("td",{className:"px-4 py-4",style:{color:p.draft?.isHold?"var(--color-gold)":"var(--color-text-gray)",fontSize:"14px",fontWeight:p.draft?.isHold?"600":"normal"},children:p.draft?.isHold?"Yes":"No"}),o.jsx("td",{className:"px-4 py-4",children:o.jsx("button",{onClick:()=>I(p),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:"View"})})]},p.id))})]})})}),Ce>1&&o.jsxs("div",{className:"flex justify-center items-center gap-4 mt-8",children:[o.jsx("button",{onClick:()=>C(Math.max(1,x-1)),disabled:x===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:x===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:x===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:x===1?"not-allowed":"pointer"},children:"Previous"}),o.jsxs("span",{style:{color:"var(--color-text-white)"},children:["Page ",x," of ",Ce]}),o.jsx("button",{onClick:()=>C(Math.min(Ce,x+1)),disabled:x===Ce,className:"px-4 py-2 rounded-lg",style:{backgroundColor:x===Ce?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:x===Ce?"var(--color-text-gray)":"var(--color-text-white)",cursor:x===Ce?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),W&&o.jsx(Ah,{customer:W,onClose:()=>I(null),onSubmit:ae,onMarkAsHelped:u,onRevisit:f,staffUsername:s,isViewOnly:W.status==="helped",allCheckIns:i})]})}function ju({customer:s,onClose:d,onComplete:i}){const[u,m]=k.useState([]),[f,b]=k.useState(!1),_=s.priced||!1;k.useEffect(()=>{if(s.draft?.materials){const I=s.draft.materials.map(x=>{const C=parseFloat(x.size?.l)||0,S=parseFloat(x.size?.h)||0,L=parseFloat(x.price||"0")||0,E=x.priceType||"per SFT";return{material:x.soldAs||x.name,quantity:x.quantity,finish:x.finish||"Polished",length:C,height:S,price:L,priceType:E}});m(I)}},[s]);const N=(I,x,C)=>{if(_)return;const S=[...u];S[I]={...S[I],[x]:C},m(S)},W=async()=>{if(!u.every(x=>x.price>0)&&!_){alert("Please enter prices for all materials");return}b(!0),setTimeout(()=>{console.log("Sending quote to fabricator:",s.draft?.selectedFabricator),console.log("Quote details:",{customer:`${s.firstName} ${s.lastName}`,selectionSheetNumber:s.draft?.selectionSheetNumber,materials:u.map(x=>({quantity:x.quantity,material:x.material,finish:x.finish,length:x.length,height:x.height,price:x.price,priceType:x.priceType}))}),alert(`Quote ${_?"resent":"sent"} successfully to ${s.draft?.selectedFabricator?.companyName||"fabricator"}!`),b(!1),_||i(s.id),d()},1500)};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:o.jsxs("div",{className:"w-full max-w-5xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[o.jsxs("div",{className:"sticky top-0 z-10 flex items-center justify-between p-6 border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl mb-1",style:{color:"var(--color-gold)"},children:"Quote"}),o.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:[s.firstName," ",s.lastName," • Sheet #",s.draft?.selectionSheetNumber]})]}),o.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:o.jsx(xt,{size:24})})]}),o.jsxs("div",{className:"p-6 space-y-6",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Customer"}),o.jsxs("p",{style:{color:"var(--color-text-white)"},children:[s.firstName," ",s.lastName]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),o.jsx("p",{style:{color:"var(--color-text-white)"},children:s.draft?.selectedFabricator?.companyName||"Not assigned"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Materials & Pricing"}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"2px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:[o.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"80px"},children:"Quantity"}),o.jsx("th",{className:"text-left p-3 text-sm font-semibold",style:{color:"var(--color-gold)"},children:"Material Name"}),o.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Finish"}),o.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Length (in)"}),o.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Height (in)"}),o.jsx("th",{className:"text-right p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"140px"},children:"Price"}),o.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Type"})]})}),o.jsx("tbody",{children:u.map((I,x)=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)"},children:[o.jsx("td",{className:"p-3 text-center",children:o.jsx("input",{type:"number",value:I.quantity,onChange:C=>N(x,"quantity",parseFloat(C.target.value)||0),disabled:_,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:_?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:_?"not-allowed":"text"},min:"0"})}),o.jsx("td",{className:"p-3",style:{color:"var(--color-text-white)"},children:I.material}),o.jsx("td",{className:"p-3 text-center",style:{color:"var(--color-text-white)"},children:I.finish}),o.jsx("td",{className:"p-3 text-center",children:o.jsx("input",{type:"number",value:I.length,onChange:C=>N(x,"length",parseFloat(C.target.value)||0),disabled:_,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:_?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:_?"not-allowed":"text"},min:"0",step:"0.1"})}),o.jsx("td",{className:"p-3 text-center",children:o.jsx("input",{type:"number",value:I.height,onChange:C=>N(x,"height",parseFloat(C.target.value)||0),disabled:_,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:_?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:_?"not-allowed":"text"},min:"0",step:"0.1"})}),o.jsx("td",{className:"p-3 text-right",children:o.jsxs("div",{className:"flex items-center justify-end",children:[o.jsx("span",{style:{color:"var(--color-gold)",marginRight:"4px",fontSize:"16px",fontWeight:"600"},children:"$"}),o.jsx("input",{type:"number",value:I.price,onChange:C=>N(x,"price",parseFloat(C.target.value)||0),disabled:_,className:"w-full px-2 py-2 rounded text-right",style:{backgroundColor:_?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:_?"not-allowed":"text"},placeholder:"0.00",min:"0",step:"0.01"})]})}),o.jsx("td",{className:"p-3 text-center",children:o.jsxs("select",{value:I.priceType,onChange:C=>N(x,"priceType",C.target.value),disabled:_,className:"w-full px-2 py-2 rounded",style:{backgroundColor:_?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:_?"not-allowed":"pointer"},children:[o.jsx("option",{value:"per SFT",children:"per SFT"}),o.jsx("option",{value:"per Slab",children:"per Slab"})]})})]},x))})]})})]}),_&&o.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(34, 197, 94, 0.1)",border:"1px solid #22c55e"},children:o.jsx("p",{className:"text-center",style:{color:"#22c55e"},children:"✓ This quote has been priced and sent. You can resend the email if needed."})}),o.jsxs("div",{className:"flex gap-3 pt-4",children:[o.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:_?"Close":"Cancel"}),o.jsxs("button",{onClick:W,disabled:f,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:f?.6:1},children:[o.jsx($p,{size:20}),f?"Sending...":_?"Resend Quote":"Send Quote to Fabricator"]})]})]})]})})}function Ih({username:s,onLogout:d,checkIns:i,fabricators:u,onComplete:m,onResetHoldDate:f}){const[b,_]=k.useState(null),[N,W]=k.useState(""),[I,x]=k.useState(""),[C,S]=k.useState("all"),[L,E]=k.useState("all"),[T,J]=k.useState("all"),[H,$]=k.useState(!1),[Z,ee]=k.useState({}),[A,V]=k.useState("main"),[F,O]=k.useState({}),[oe,me]=k.useState({}),[Pe,ke]=k.useState({}),[Ee,Ce]=k.useState(new Date().getFullYear()),[ze,Ne]=k.useState(new Date().getMonth()),[Q,ae]=k.useState(new Date().getFullYear()),[D,p]=k.useState(new Date().getMonth()),[y,G]=k.useState(new Date().getFullYear()),[K,fe]=k.useState(new Date().getMonth()),[ne,we]=k.useState(1),je=10,de=[2025,2026,2027,2028],Ie=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ir=k.useMemo(()=>i.filter(z=>z.status==="helped"&&z.draft?.materials&&z.draft.materials.length>0),[i]),Yr=z=>{const ye=new Date;return new Date(z).toDateString()===ye.toDateString()},Te=z=>{const ye=new Date,Ue=new Date(z);return(ye.getTime()-Ue.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:w,holdsNotConvertedCheckIns:U,ignoredCheckIns:ie}=k.useMemo(()=>{const z=[],ye=[],Ue=[];return ir.forEach(_e=>{const R=F[_e.id]||!1,pe=_e.draft?.isHold||!1,Re=!Z[_e.id],We=Te(_e.checkInTime);R?Ue.push(_e):pe&&Re&&We?ye.push(_e):z.push(_e)}),{mainDashboardCheckIns:z,holdsNotConvertedCheckIns:ye,ignoredCheckIns:Ue}},[ir,Z,F]),te=k.useMemo(()=>A==="holds-not-converted"?U:A==="ignored"?ie:w,[A,w,U,ie]),xe=k.useMemo(()=>[...te.filter(ye=>{const Ue=`${ye.firstName} ${ye.lastName}`.toLowerCase().includes(N.toLowerCase())||ye.phones?.some(We=>We.includes(N))||ye.draft?.selectionSheetNumber?.includes(N),_e=!I||ye.draft?.selectedFabricator?.id===I,R=C==="all"||C==="hold"&&ye.draft?.isHold||C==="no-hold"&&!ye.draft?.isHold,pe=L==="all"||L==="priced"&&ye.priced||L==="not-priced"&&!ye.priced,Re=T==="all"||T==="yes"&&Z[ye.id]||T==="no"&&!Z[ye.id];return Ue&&_e&&R&&pe&&Re})].sort((ye,Ue)=>new Date(Ue.checkInTime).getTime()-new Date(ye.checkInTime).getTime()),[te,N,I,C,L,T,Z]),qe=Math.ceil(xe.length/je),Oe=(ne-1)*je,nr=Oe+je,vr=xe.slice(Oe,nr);Br.useEffect(()=>{we(1)},[N,I,C,L,T,A]);const He=z=>{_(z)},Ze=z=>{O({...F,[z]:!0})},Er=z=>{f&&f(z),ke({...Pe,[z]:!0})},Rr=z=>{me({...oe,[z]:!oe[z]})},tt=z=>new Date(z).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});k.useMemo(()=>{const z=new Set;return ir.forEach(Ue=>{const _e=new Date(Ue.checkInTime),R=`${_e.getFullYear()}-${String(_e.getMonth()+1).padStart(2,"0")}`;if(z.add(R),Ue.pricedTime){const pe=new Date(Ue.pricedTime),Re=`${pe.getFullYear()}-${String(pe.getMonth()+1).padStart(2,"0")}`;z.add(Re)}}),Array.from(z).sort().reverse()},[ir]),k.useMemo(()=>{const z=new Date;return`${z.getFullYear()}-${String(z.getMonth()+1).padStart(2,"0")}`},[]),Br.useEffect(()=>{ze||Ne(new Date().getMonth()),D||p(new Date().getMonth()),K||fe(new Date().getMonth())},[]);const Ar=(z,ye,Ue)=>{const _e=new Date(z);return _e.getMonth()===ye&&_e.getFullYear()===Ue},Tr=k.useMemo(()=>({pendingPricing:w.filter(z=>!z.priced).length,pricedToday:w.filter(z=>z.priced&&z.pricedTime&&Yr(z.pricedTime)).length,onHold:w.filter(z=>z.draft?.isHold).length,onHoldForMonth:w.filter(z=>z.draft?.isHold&&Ar(z.checkInTime,D,Q)).length,pricedForMonth:w.filter(z=>z.priced&&z.pricedTime&&Ar(z.pricedTime,ze,Ee)).length,convertedForMonth:w.filter(z=>Z[z.id]&&Ar(z.checkInTime,K,y)).length}),[w,Z,ze,Ee,D,Q,K,y]);return o.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:No,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Pricing Dashboard"}),o.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),o.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx(Nl,{size:18}),"Logout"]})]})})}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[o.jsxs("div",{className:"flex gap-2 mb-6",children:[o.jsx("button",{onClick:()=>V("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:A==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:A==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:A==="main"?"600":"normal"},children:"Main Dashboard"}),o.jsxs("button",{onClick:()=>V("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:A==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:A==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:A==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",U.length,")"]}),o.jsxs("button",{onClick:()=>V("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:A==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:A==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:A==="ignored"?"600":"normal"},children:["Ignored (",ie.length,")"]})]}),o.jsxs("div",{className:"mb-6 space-y-4",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[o.jsxs("div",{className:"flex-1 relative",children:[o.jsx(yu,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),o.jsx("input",{type:"text",value:N,onChange:z=>W(z.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("button",{onClick:()=>$(!H),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:H?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:H?"var(--color-background)":"var(--color-text-white)"},children:[o.jsx(vu,{size:20}),"Filters"]})]}),H&&o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),o.jsxs("select",{value:I,onChange:z=>x(z.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"",children:"All Fabricators"}),u.map(z=>o.jsx("option",{value:z.id,children:z.companyName},z.id))]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),o.jsxs("select",{value:C,onChange:z=>S(z.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"all",children:"All"}),o.jsx("option",{value:"hold",children:"On Hold"}),o.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),o.jsxs("select",{value:L,onChange:z=>E(z.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"all",children:"All"}),o.jsx("option",{value:"priced",children:"Priced"}),o.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),o.jsxs("select",{value:T,onChange:z=>J(z.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"all",children:"All"}),o.jsx("option",{value:"yes",children:"Converted"}),o.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),A==="main"&&o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Tr.pendingPricing})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Tr.pricedToday})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Tr.onHold})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced"}),o.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Tr.pricedForMonth}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("select",{value:ze,onChange:z=>Ne(parseInt(z.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Ie.map((z,ye)=>o.jsx("option",{value:ye,children:z},ye))}),o.jsx("select",{value:Ee,onChange:z=>Ce(parseInt(z.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:de.map(z=>o.jsx("option",{value:z,children:z},z))})]})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),o.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Tr.onHoldForMonth}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("select",{value:D,onChange:z=>p(parseInt(z.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Ie.map((z,ye)=>o.jsx("option",{value:ye,children:z},ye))}),o.jsx("select",{value:Q,onChange:z=>ae(parseInt(z.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:de.map(z=>o.jsx("option",{value:z,children:z},z))})]})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),o.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Tr.convertedForMonth}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("select",{value:K,onChange:z=>fe(parseInt(z.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Ie.map((z,ye)=>o.jsx("option",{value:ye,children:z},ye))}),o.jsx("select",{value:y,onChange:z=>G(parseInt(z.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:de.map(z=>o.jsx("option",{value:z,children:z},z))})]})]})]}),A==="holds-not-converted"&&o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:U.filter(z=>z.draft?.isHold).length})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:U.filter(z=>!Z[z.id]).length})]})]}),A==="ignored"&&o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:ie.length})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:ie.filter(z=>z.draft?.isHold).length})]})]}),o.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full",children:[o.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:o.jsxs("tr",{children:[o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),A==="ignored"&&o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),o.jsx("tbody",{children:vr.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:A==="ignored"?9:8,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):vr.map(z=>{const ye=Z[z.id]||!1,Ue=oe[z.id]||!1,_e=Pe[z.id]||!1;let R="transparent";return A==="ignored"&&Ue?R="rgba(34, 197, 94, 0.2)":_e?R="rgba(239, 68, 68, 0.2)":ye?R="rgba(212, 167, 54, 0.15)":z.priced&&(R="rgba(34, 197, 94, 0.1)"),o.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:R},children:[o.jsxs("td",{className:"p-4",children:[o.jsxs("div",{style:{color:"var(--color-text-white)"},children:[z.firstName," ",z.lastName]}),o.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:z.phones?.[0]})]}),o.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:z.draft?.selectionSheetNumber||"-"}),o.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:z.draft?.selectedFabricator?.companyName||"-"}),o.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:z.draft?.materials?.length||0}),o.jsx("td",{className:"p-4",children:o.jsxs("div",{className:"flex justify-center gap-2",children:[z.priced&&o.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),z.draft?.isHold&&o.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),o.jsx("td",{className:"p-4 text-center",children:o.jsxs("select",{value:ye?"Yes":"No",onChange:pe=>ee({...Z,[z.id]:pe.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:ye?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:ye?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:ye?"600":"normal",fontSize:"13px"},children:[o.jsx("option",{value:"No",children:"No"}),o.jsx("option",{value:"Yes",children:"Yes"})]})}),A==="ignored"&&o.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:z.draft?.materials&&z.draft.materials.length>0?o.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(z.draft.materials.map(pe=>pe.lot).filter(Boolean))).map((pe,Re)=>o.jsx("span",{className:"text-sm",children:pe},Re))}):"-"}),o.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:tt(z.checkInTime)}),o.jsx("td",{className:"p-4",children:o.jsxs("div",{className:"flex justify-center",children:[o.jsx("button",{onClick:()=>He(z),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View Pricing",children:o.jsx(fs,{size:18})}),A==="holds-not-converted"&&o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>Er(z.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:o.jsx(xu,{size:18})}),o.jsx("button",{onClick:()=>Ze(z.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:o.jsx(xt,{size:18})})]}),A==="ignored"&&o.jsx("button",{onClick:()=>Rr(z.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:Ue?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:Ue?"Unmark as Known":"Mark as Known",children:o.jsx(fu,{size:18})})]})})]},z.id)})})]})}),qe>1&&o.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[o.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",Oe+1," to ",Math.min(nr,xe.length)," of ",xe.length," customers"]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>we(ne-1),disabled:ne===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:ne===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:ne===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:ne===1?"not-allowed":"pointer"},children:"Previous"}),o.jsx("div",{className:"flex gap-1",children:Array.from({length:qe},(z,ye)=>ye+1).map(z=>o.jsx("button",{onClick:()=>we(z),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:ne===z?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:ne===z?"var(--color-background)":"var(--color-text-white)",fontWeight:ne===z?"600":"normal",cursor:"pointer"},children:z},z))}),o.jsx("button",{onClick:()=>we(ne+1),disabled:ne===qe,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:ne===qe?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:ne===qe?"var(--color-text-gray)":"var(--color-text-white)",cursor:ne===qe?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),b&&o.jsx(ju,{customer:b,onClose:()=>_(null),onComplete:m})]})}function Lh({username:s,onLogout:d,checkIns:i,fabricators:u,onComplete:m,onResetHoldDate:f,onPriceUpdate:b}){const[_,N]=k.useState(null),[W,I]=k.useState(""),[x,C]=k.useState(""),[S,L]=k.useState(""),[E,T]=k.useState("all"),[J,H]=k.useState("all"),[$,Z]=k.useState("all"),[ee,A]=k.useState(!1),[V,F]=k.useState({}),[O,oe]=k.useState("main"),[me,Pe]=k.useState({}),[ke,Ee]=k.useState({}),[Ce,ze]=k.useState({}),[Ne,Q]=k.useState(new Date().getFullYear()),[ae,D]=k.useState(new Date().getMonth()),[p,y]=k.useState(new Date().getFullYear()),[G,K]=k.useState(new Date().getMonth()),[fe,ne]=k.useState(new Date().getFullYear()),[we,je]=k.useState(new Date().getMonth()),[de,Ie]=k.useState(1),ir=10,Yr=[2025,2026,2027,2028],Te=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=k.useMemo(()=>i.filter(R=>R.status==="helped"&&R.draft?.materials&&R.draft.materials.length>0),[i]),U=k.useMemo(()=>{const R=new Set;return w.forEach(pe=>{pe.draft?.salesPerson&&R.add(pe.draft.salesPerson)}),Array.from(R).sort()},[w]),ie=R=>{const pe=new Date;return new Date(R).toDateString()===pe.toDateString()},te=R=>{const pe=new Date,Re=new Date(R);return(pe.getTime()-Re.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:xe,holdsNotConvertedCheckIns:qe,ignoredCheckIns:Oe}=k.useMemo(()=>{const R=[],pe=[],Re=[];return w.forEach(We=>{const pr=me[We.id]||!1,xr=We.draft?.isHold||!1,qr=!V[We.id],kr=te(We.checkInTime);pr?Re.push(We):xr&&qr&&kr?pe.push(We):R.push(We)}),{mainDashboardCheckIns:R,holdsNotConvertedCheckIns:pe,ignoredCheckIns:Re}},[w,V,me]),nr=k.useMemo(()=>O==="holds-not-converted"?qe:O==="ignored"?Oe:xe,[O,xe,qe,Oe]),vr=k.useMemo(()=>[...nr.filter(pe=>{const Re=`${pe.firstName} ${pe.lastName}`.toLowerCase().includes(W.toLowerCase())||pe.phones?.some($r=>$r.includes(W))||pe.draft?.selectionSheetNumber?.includes(W),We=!x||pe.draft?.selectedFabricator?.id===x,pr=!S||pe.draft?.salesPerson===S,xr=E==="all"||E==="hold"&&pe.draft?.isHold||E==="no-hold"&&!pe.draft?.isHold,qr=J==="all"||J==="priced"&&pe.priced||J==="not-priced"&&!pe.priced,kr=$==="all"||$==="yes"&&V[pe.id]||$==="no"&&!V[pe.id];return Re&&We&&pr&&xr&&qr&&kr})].sort((pe,Re)=>new Date(Re.checkInTime).getTime()-new Date(pe.checkInTime).getTime()),[nr,W,x,S,E,J,$,V]),He=Math.ceil(vr.length/ir),Ze=(de-1)*ir,Er=Ze+ir,Rr=vr.slice(Ze,Er);Br.useEffect(()=>{Ie(1)},[W,x,S,E,J,$,O]);const tt=R=>{N(R)},Ar=R=>{Pe({...me,[R]:!0})},Tr=R=>{f&&f(R),ze({...Ce,[R]:!0})},z=R=>{Ee({...ke,[R]:!ke[R]})},ye=R=>new Date(R).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}),Ue=(R,pe,Re)=>{const We=new Date(R);return We.getMonth()===pe&&We.getFullYear()===Re},_e=k.useMemo(()=>{const R=xe.filter(Ae=>!Ae.priced).length,pe=xe.filter(Ae=>Ae.priced&&Ae.pricedTime&&ie(Ae.pricedTime)).length,Re=xe.filter(Ae=>Ae.draft?.isHold).length,We=xe.filter(Ae=>Ae.draft?.isHold&&Ue(Ae.checkInTime,G,p)).length,pr=xe.filter(Ae=>Ae.priced&&Ae.pricedTime&&Ue(Ae.pricedTime,ae,Ne)).length,xr=xe.filter(Ae=>V[Ae.id]&&Ue(Ae.checkInTime,we,fe)).length,qr=xe.filter(Ae=>V[Ae.id]).length,kr=S?xe.filter(Ae=>Ae.draft?.salesPerson===S).length:xe.length,$r=S?xe.filter(Ae=>Ae.draft?.salesPerson===S&&V[Ae.id]).length:xe.filter(Ae=>V[Ae.id]).length,sn=kr>0?($r/kr*100).toFixed(1):"0";return{pendingPricing:R,pricedToday:pe,onHold:Re,onHoldForMonth:We,pricedForMonth:pr,convertedForMonth:xr,totalConverted:qr,totalCustomers:kr,convertedCustomers:$r,conversionRate:sn}},[xe,V,ae,Ne,G,p,we,fe,S]);return o.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:No,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Analysis Dashboard"}),o.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),o.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx(Nl,{size:18}),"Logout"]})]})})}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[o.jsxs("div",{className:"flex gap-2 mb-6",children:[o.jsx("button",{onClick:()=>oe("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:O==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:O==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:O==="main"?"600":"normal"},children:"Main Dashboard"}),o.jsxs("button",{onClick:()=>oe("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:O==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:O==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:O==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",qe.length,")"]}),o.jsxs("button",{onClick:()=>oe("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:O==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:O==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:O==="ignored"?"600":"normal"},children:["Ignored (",Oe.length,")"]})]}),o.jsxs("div",{className:"mb-6 space-y-4",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[o.jsxs("div",{className:"flex-1 relative",children:[o.jsx(yu,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),o.jsx("input",{type:"text",value:W,onChange:R=>I(R.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("button",{onClick:()=>A(!ee),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:ee?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:ee?"var(--color-background)":"var(--color-text-white)"},children:[o.jsx(vu,{size:20}),"Filters"]})]}),ee&&o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),o.jsxs("select",{value:S,onChange:R=>L(R.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"",children:"All Sales People"}),U.map(R=>o.jsx("option",{value:R,children:R},R))]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),o.jsxs("select",{value:x,onChange:R=>C(R.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"",children:"All Fabricators"}),u.map(R=>o.jsx("option",{value:R.id,children:R.companyName},R.id))]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),o.jsxs("select",{value:E,onChange:R=>T(R.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"all",children:"All"}),o.jsx("option",{value:"hold",children:"On Hold"}),o.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),o.jsxs("select",{value:J,onChange:R=>H(R.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"all",children:"All"}),o.jsx("option",{value:"priced",children:"Priced"}),o.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),o.jsxs("select",{value:$,onChange:R=>Z(R.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"all",children:"All"}),o.jsx("option",{value:"yes",children:"Converted"}),o.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),O==="main"&&o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:[S&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[o.jsxs("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:["Sales Person: ",S]}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.totalCustomers}),o.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:"Total Customers"})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Converted"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.convertedCustomers}),o.jsxs("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:[_e.conversionRate,"% Rate"]})]})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.pendingPricing})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.pricedToday})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.onHold})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Converted"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.totalConverted})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),o.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:_e.onHoldForMonth}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("select",{value:G,onChange:R=>K(parseInt(R.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Te.map((R,pe)=>o.jsx("option",{value:pe,children:R},pe))}),o.jsx("select",{value:p,onChange:R=>y(parseInt(R.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Yr.map(R=>o.jsx("option",{value:R,children:R},R))})]})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),o.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:_e.convertedForMonth}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("select",{value:we,onChange:R=>je(parseInt(R.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Te.map((R,pe)=>o.jsx("option",{value:pe,children:R},pe))}),o.jsx("select",{value:fe,onChange:R=>ne(parseInt(R.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Yr.map(R=>o.jsx("option",{value:R,children:R},R))})]})]})]}),O==="holds-not-converted"&&o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:qe.filter(R=>R.draft?.isHold).length})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:qe.filter(R=>!V[R.id]).length})]})]}),O==="ignored"&&o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Oe.length})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Oe.filter(R=>R.draft?.isHold).length})]})]}),o.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full",children:[o.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:o.jsxs("tr",{children:[o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),O==="ignored"&&o.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),o.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),o.jsx("tbody",{children:Rr.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:O==="ignored"?10:9,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):Rr.map(R=>{const pe=V[R.id]||!1,Re=ke[R.id]||!1,We=Ce[R.id]||!1;let pr="transparent";return O==="ignored"&&Re?pr="rgba(34, 197, 94, 0.2)":We?pr="rgba(239, 68, 68, 0.2)":pe?pr="rgba(212, 167, 54, 0.15)":R.priced&&(pr="rgba(34, 197, 94, 0.1)"),o.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:pr},children:[o.jsxs("td",{className:"p-4",children:[o.jsxs("div",{style:{color:"var(--color-text-white)"},children:[R.firstName," ",R.lastName]}),o.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:R.phones?.[0]})]}),o.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:R.draft?.selectionSheetNumber||"-"}),o.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:R.draft?.salesPerson||"-"}),o.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:R.draft?.selectedFabricator?.companyName||"-"}),o.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:R.draft?.materials?.length||0}),o.jsx("td",{className:"p-4",children:o.jsxs("div",{className:"flex justify-center gap-2",children:[R.priced&&o.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),R.draft?.isHold&&o.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),o.jsx("td",{className:"p-4 text-center",children:o.jsxs("select",{value:pe?"Yes":"No",onChange:xr=>F({...V,[R.id]:xr.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:pe?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:pe?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:pe?"600":"normal",fontSize:"13px"},children:[o.jsx("option",{value:"No",children:"No"}),o.jsx("option",{value:"Yes",children:"Yes"})]})}),O==="ignored"&&o.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:R.draft?.materials&&R.draft.materials.length>0?o.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(R.draft.materials.map(xr=>xr.lot).filter(Boolean))).map((xr,qr)=>o.jsx("span",{className:"text-sm",children:xr},qr))}):"-"}),o.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:ye(R.checkInTime)}),o.jsx("td",{className:"p-4",children:o.jsxs("div",{className:"flex justify-center gap-1",children:[o.jsx("button",{onClick:()=>tt(R),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View/Edit Pricing",children:o.jsx(fs,{size:18})}),O==="holds-not-converted"&&o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>Tr(R.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:o.jsx(xu,{size:18})}),o.jsx("button",{onClick:()=>Ar(R.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:o.jsx(xt,{size:18})})]}),O==="ignored"&&o.jsx("button",{onClick:()=>z(R.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:Re?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:Re?"Unmark as Known":"Mark as Known",children:o.jsx(fu,{size:18})})]})})]},R.id)})})]})}),He>1&&o.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[o.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",Ze+1," to ",Math.min(Er,vr.length)," of ",vr.length," customers"]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>Ie(de-1),disabled:de===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:de===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:de===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:de===1?"not-allowed":"pointer"},children:"Previous"}),o.jsx("div",{className:"flex gap-1",children:Array.from({length:He},(R,pe)=>pe+1).map(R=>o.jsx("button",{onClick:()=>Ie(R),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:de===R?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:de===R?"var(--color-background)":"var(--color-text-white)",fontWeight:de===R?"600":"normal",cursor:"pointer"},children:R},R))}),o.jsx("button",{onClick:()=>Ie(de+1),disabled:de===He,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:de===He?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:de===He?"var(--color-text-gray)":"var(--color-text-white)",cursor:de===He?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),_&&o.jsx(ju,{customer:_,onClose:()=>N(null),onComplete:R=>{b&&b(R,s),m(R)},isAnalysisMode:!0,analysisUser:s})]})}function Hh({onCustomerFound:s,onBack:d,checkIns:i}){const[u,m]=k.useState(""),[f,b]=k.useState(!1),[_,N]=k.useState(""),W=async()=>{if(!u.trim()){N("Please enter a phone number or email");return}b(!0),N("");try{const x=u.trim().toLowerCase(),C=i.find(S=>{const L=S.phones?.some(T=>T.replace(/\D/g,"").includes(x.replace(/\D/g,""))),E=S.emails?.some(T=>T.toLowerCase().includes(x));return L||E});C?s(C):N('No previous check-in found with this information. Please use "Check-In" for first-time visit.')}catch{N('No previous check-in found with this information. Please use "Check-In" for first-time visit.')}finally{b(!1)}},I=x=>{x.key==="Enter"&&W()};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[o.jsx("h1",{className:"text-center mb-3 text-3xl",style:{color:"var(--color-gold)"},children:"Welcome Back!"}),o.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Enter your mobile number or email that you used during check-in"}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone or Email"}),o.jsx("input",{type:"text",value:u,onChange:x=>{m(x.target.value),N("")},onKeyPress:I,placeholder:"(602) 555-1234 or email@example.com",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${_?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},disabled:f}),_&&o.jsx("p",{className:"mt-2 text-sm",style:{color:"#EF4444"},children:_})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsx("button",{onClick:W,disabled:f,className:"w-full py-3 rounded-lg",style:{backgroundColor:f?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:f?"not-allowed":"pointer",opacity:f?.6:1},children:f?"Searching...":"Find My Information"}),o.jsx("button",{onClick:d,disabled:f,className:"w-full py-3 rounded-lg",style:{backgroundColor:"transparent",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:f?"not-allowed":"pointer",opacity:f?.6:1},children:"Back to Home"})]})]})]})})}function Uh({customerData:s,onNext:d,onBack:i}){const[u,m]=k.useState({firstName:s.firstName||"",lastName:s.lastName||"",street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),[f,b]=k.useState({}),_=T=>T.split(" ").map(J=>J.charAt(0).toUpperCase()+J.slice(1).toLowerCase()).join(" "),N=()=>{const T={};u.firstName.trim()||(T.firstName="First name is required"),u.lastName.trim()||(T.lastName="Last name is required"),u.street.trim()||(T.street="Street address is required"),u.city.trim()||(T.city="City is required"),u.state.trim()||(T.state="State is required"),u.zip.trim()||(T.zip="ZIP code is required");const J=u.phones.filter($=>$.trim());J.length===0?T.phones="At least one phone number is required":J.forEach(($,Z)=>{$.replace(/\D/g,"").length!==10&&(T[`phone${Z}`]="Phone must be 10 digits")});const H=u.emails.filter($=>$.trim());return H.length===0?T.emails="At least one email is required":H.forEach(($,Z)=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($)||(T[`email${Z}`]="Invalid email format")}),b(T),Object.keys(T).length===0},W=T=>{T.preventDefault(),N()&&d(u)},I=()=>{m({...u,phones:[...u.phones,""]})},x=T=>{u.phones.length>1&&m({...u,phones:u.phones.filter((J,H)=>H!==T)})},C=(T,J)=>{const H=[...u.phones];H[T]=J,m({...u,phones:H})},S=()=>{m({...u,emails:[...u.emails,""]})},L=T=>{u.emails.length>1&&m({...u,emails:u.emails.filter((J,H)=>H!==T)})},E=(T,J)=>{const H=[...u.emails];H[T]=J,m({...u,emails:H})};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Your Information"}),o.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please review and update your details if needed"}),o.jsxs("form",{onSubmit:W,className:"space-y-4 sm:space-y-6",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"First Name *"}),o.jsx("input",{type:"text",value:u.firstName,onChange:T=>m({...u,firstName:_(T.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f.firstName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),f.firstName&&o.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:f.firstName})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Last Name *"}),o.jsx("input",{type:"text",value:u.lastName,onChange:T=>m({...u,lastName:_(T.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f.lastName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),f.lastName&&o.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:f.lastName})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address *"}),o.jsx("input",{type:"text",value:u.street,onChange:T=>m({...u,street:_(T.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f.street?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),f.street&&o.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:f.street})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),o.jsx("input",{type:"text",value:u.suiteUnit,onChange:T=>m({...u,suiteUnit:T.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City *"}),o.jsx("input",{type:"text",value:u.city,onChange:T=>m({...u,city:_(T.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f.city?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),f.city&&o.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:f.city})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State *"}),o.jsx("input",{type:"text",value:u.state,onChange:T=>m({...u,state:T.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f.state?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),f.state&&o.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:f.state})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP Code *"}),o.jsx("input",{type:"text",value:u.zip,onChange:T=>m({...u,zip:T.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f.zip?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),f.zip&&o.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:f.zip})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country *"}),o.jsxs("select",{value:u.country,onChange:T=>m({...u,country:T.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[o.jsx("option",{value:"USA",children:"USA"}),o.jsx("option",{value:"CAN",children:"CAN"}),o.jsx("option",{value:"MEX",children:"MEX"})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Phone Number(s) *"}),o.jsx("button",{type:"button",onClick:I,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Phone"})]}),u.phones.map((T,J)=>o.jsxs("div",{className:"flex gap-2 mb-2",children:[o.jsx("input",{type:"tel",value:T,onChange:H=>C(J,H.target.value),placeholder:"(602) 555-1234",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f[`phone${J}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),u.phones.length>1&&o.jsx("button",{type:"button",onClick:()=>x(J),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},J)),f.phones&&o.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:f.phones})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Email Address(es) *"}),o.jsx("button",{type:"button",onClick:S,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Email"})]}),u.emails.map((T,J)=>o.jsxs("div",{className:"flex gap-2 mb-2",children:[o.jsx("input",{type:"email",value:T,onChange:H=>E(J,H.target.value),placeholder:"email@example.com",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f[`email${J}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),u.emails.length>1&&o.jsx("button",{type:"button",onClick:()=>L(J),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},J)),f.emails&&o.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:f.emails})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[o.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}const Wh=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function Bh({referralSources:s,onNext:d,onBack:i}){const[u,m]=k.useState(s.map(x=>x.type)),[f,b]=k.useState(s.reduce((x,C)=>(x[C.type]={name:C.name||"",phone:C.phone||""},x),{})),_=x=>x.split(" ").map(C=>C.charAt(0).toUpperCase()+C.slice(1).toLowerCase()).join(" "),N=x=>{if(u.includes(x)){m(u.filter(S=>S!==x));const C={...f};delete C[x],b(C)}else m([...u,x])},W=(x,C,S)=>{b({...f,[x]:{...f[x],name:C==="name"?S:f[x]?.name||"",phone:C==="phone"?S:f[x]?.phone||""}})},I=x=>{if(x.preventDefault(),u.length===0){alert("Please select at least one referral source");return}for(const S of u)if(!f[S]?.name?.trim()){alert(`Please enter a name for ${S}`);return}const C=u.map(S=>({type:S,name:f[S]?.name,phone:f[S]?.phone}));d(C)};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Referral Sources"}),o.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Update or add new referral sources"}),o.jsxs("form",{onSubmit:I,className:"space-y-4 sm:space-y-6",children:[o.jsx("div",{className:"space-y-4",children:Wh.map(x=>o.jsxs("div",{children:[o.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:u.includes(x)?"var(--color-background)":"transparent",border:`1px solid ${u.includes(x)?"var(--color-gold)":"var(--color-border)"}`},children:[o.jsx("input",{type:"checkbox",checked:u.includes(x),onChange:()=>N(x),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),o.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:x})]}),u.includes(x)&&o.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[o.jsx("input",{type:"text",value:f[x]?.name||"",onChange:C=>W(x,"name",_(C.target.value)),placeholder:"Name (required)",required:!0,className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),o.jsx("input",{type:"tel",value:f[x]?.phone||"",onChange:C=>W(x,"phone",C.target.value),placeholder:"Phone (optional)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]},x))}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[o.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function Yh({customerName:s,onSubmit:d,onBack:i}){const[u,m]=k.useState("party"),[f,b]=k.useState({adults:1,minors:0}),[_,N]=k.useState(!1),[W,I]=k.useState(""),[x,C]=k.useState([]),[S,L]=k.useState(0),[E,T]=k.useState([]),[J,H]=k.useState(0),[$,Z]=k.useState(""),ee=k.useRef(null),[A,V]=k.useState(!1),[F,O]=k.useState(!1);k.useEffect(()=>{const y=ee.current;if(y){const G=y.getContext("2d");G&&(G.strokeStyle="#D4A736",G.lineWidth=2,G.lineCap="round")}},[u,S]);const oe=(y,G)=>{const K=G.getBoundingClientRect(),fe=G.width/K.width,ne=G.height/K.height,we="touches"in y?y.touches[0].clientX:y.clientX,je="touches"in y?y.touches[0].clientY:y.clientY;return{x:(we-K.left)*fe,y:(je-K.top)*ne}},me=y=>{V(!0);const G=ee.current;if(!G)return;const K=G.getContext("2d");if(!K)return;const{x:fe,y:ne}=oe(y,G);K.beginPath(),K.moveTo(fe,ne)},Pe=y=>{if(!A)return;const G=ee.current;if(!G)return;const K=G.getContext("2d");if(!K)return;const{x:fe,y:ne}=oe(y,G);K.lineTo(fe,ne),K.stroke()},ke=()=>{V(!1),O(!0)},Ee=()=>{const y=ee.current;if(!y)return;const G=y.getContext("2d");G&&(G.clearRect(0,0,y.width,y.height),O(!1))},Ce=()=>{const y=ee.current;return y?y.toDataURL("image/png"):""},ze=()=>{m("main")},Ne=()=>{if(!_){alert("Please agree to the terms before continuing");return}if(!F){alert("Please provide your signature");return}const y=Ce();I(y),Ee(),f.adults>1?(m("additional"),L(0)):f.minors>0?(m("minors"),H(0)):D(y,[],[])},Q=()=>{const y=document.getElementById("additional-name")?.value;if(!y||!y.trim()){alert("Please enter a name");return}if(!F){alert("Please provide a signature");return}const G=Ce(),K=[...x];K[S]={name:y.trim(),signature:G},C(K),Ee(),S<f.adults-2?L(S+1):f.minors>0?(m("minors"),H(0)):D(W,K,[])},ae=()=>{if(!$.trim()){alert("Please enter the minor's name");return}const y=[...E];y[J]=$.trim(),T(y),Z(""),J<f.minors-1?H(J+1):D(W,x,y)},D=(y,G,K)=>{const fe=[{name:s,signature:y,isMain:!0,isMinor:!1},...G.map(ne=>({name:ne.name,signature:ne.signature,isMain:!1,isMinor:!1})),...K.map(ne=>({name:ne,signature:"",isMain:!1,isMinor:!0}))];d({partySize:f,signature:y,visitors:fe})},p=()=>{u==="party"?i():u==="main"?m("party"):u==="additional"?S===0?m("main"):L(S-1):u==="minors"&&(J===0?f.adults>1?(m("additional"),L(f.adults-2)):m("main"):H(J-1))};return u==="party"?o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Party Size"}),o.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"How many people are in your party?"}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Number of Adults (including you)"}),o.jsx("input",{type:"number",min:"1",max:"20",value:f.adults,onChange:y=>b({...f,adults:parseInt(y.target.value)||1}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Number of Minors (under 18)"}),o.jsx("input",{type:"number",min:"0",max:"20",value:f.minors,onChange:y=>b({...f,minors:parseInt(y.target.value)||0}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[o.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{onClick:ze,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})}):u==="main"?o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)",overflowY:"auto"},children:o.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Liability Waiver"}),o.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please read and sign below"}),o.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[o.jsx("div",{className:"rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",maxHeight:"300px",overflowY:"auto",padding:"16px",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:o.jsx("p",{style:{whiteSpace:"pre-wrap"},children:`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

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

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`})}),o.jsx("div",{children:o.jsxs("label",{className:"flex items-center gap-3 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:_,onChange:y=>N(y.target.checked),className:"w-5 h-5",style:{accentColor:"var(--color-gold)"}}),o.jsx("span",{style:{color:"var(--color-text-white)"},children:"I have read and agree to the terms above"})]})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Your Signature"}),o.jsx("button",{type:"button",onClick:Ee,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),o.jsx("canvas",{ref:ee,width:600,height:200,onMouseDown:me,onMouseMove:Pe,onMouseUp:ke,onMouseLeave:ke,onTouchStart:me,onTouchMove:Pe,onTouchEnd:ke,className:"w-full border rounded-lg cursor-crosshair",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"}})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[o.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{onClick:Ne,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:f.adults>1||f.minors>0?"Next":"Submit"})]})]})]})}):u==="additional"?o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsxs("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Visitor ",S+2," of ",f.adults]}),o.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Additional adult signature required"}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),o.jsx("input",{id:"additional-name",type:"text",defaultValue:x[S]?.name||"",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter full name"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Signature"}),o.jsx("button",{type:"button",onClick:Ee,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),o.jsx("canvas",{ref:ee,width:600,height:200,onMouseDown:me,onMouseMove:Pe,onMouseUp:ke,onMouseLeave:ke,onTouchStart:me,onTouchMove:Pe,onTouchEnd:ke,className:"w-full border rounded-lg cursor-crosshair",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"}})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[o.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{onClick:Q,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:S<f.adults-2||f.minors>0?"Next":"Submit"})]})]})]})}):u==="minors"?o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[o.jsxs("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Minor ",J+1," of ",f.minors]}),o.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide the minor's name"}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),o.jsx("input",{type:"text",value:$,onChange:y=>Z(y.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter full name"})]}),o.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"No signature required (under 18)"}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[o.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),o.jsx("button",{onClick:ae,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:J<f.minors-1?"Next":"Submit"})]})]})]})}):null}function qh({customerName:s,onReturnHome:d}){const[i,u]=k.useState(15),m=k.useRef(d);return k.useEffect(()=>{m.current=d},[d]),k.useEffect(()=>{const f=setInterval(()=>{u(b=>b<=1?(clearInterval(f),setTimeout(()=>m.current(),0),0):b-1)},1e3);return()=>clearInterval(f)},[]),o.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[o.jsx("div",{className:"flex justify-center mb-6",children:o.jsx(gu,{size:80,style:{color:"var(--color-success)"}})}),o.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You for Revisiting, ",s,"!"]}),o.jsx("p",{className:"mb-8",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),o.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",o.jsx("span",{style:{color:"var(--color-gold)"},children:i})," seconds..."]}),o.jsx("button",{onClick:d,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function $h({onLogin:s}){const[d,i]=k.useState(""),[u,m]=k.useState(""),[f,b]=k.useState(""),_=N=>{N.preventDefault(),b(""),d==="staff2"&&u==="reliance"?s(d):b("Invalid credentials. Use staff2/reliance")};return o.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[o.jsx("h1",{className:"text-center mb-2 text-3xl",style:{color:"var(--color-gold)"},children:"Staff2 Login"}),o.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Queue Management"}),o.jsxs("form",{onSubmit:_,className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Username"}),o.jsx("input",{type:"text",value:d,onChange:N=>{i(N.target.value),b("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter username"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Password"}),o.jsx("input",{type:"password",value:u,onChange:N=>{m(N.target.value),b("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${f?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter password"})]}),f&&o.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid #EF4444"},children:o.jsx("p",{style:{color:"#EF4444",fontSize:"14px"},children:f})}),o.jsx("button",{type:"submit",className:"w-full py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Login"})]})]})})}function Vh({customer:s,onView:d,onDone:i}){const u=(s.partySize?.adults||0)+(s.partySize?.minors||0),m=s.isRevisit===!0;return o.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"flex items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[o.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:s.firstName?.charAt(0).toUpperCase()||"?"}),o.jsxs("div",{className:"flex items-center gap-3 flex-wrap min-w-0",children:[o.jsxs("p",{className:"font-medium whitespace-nowrap",style:{color:"var(--color-text-white)"},children:[s.firstName," ",s.lastName]}),o.jsx("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:s.phones?.[0]||"No phone"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap",style:{backgroundColor:m?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:m?"var(--color-gold)":"#3B82F6"},children:m?"Revisiting":"First Time"}),o.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["👥 ",u," visitor",u!==1?"s":""]})]})]}),o.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[o.jsx("button",{onClick:()=>d(s),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"View"}),o.jsx("button",{onClick:()=>i(s.id),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Done"})]})]})})}function Qh({customer:s,onClose:d,onSave:i}){const[u,m]=k.useState({firstName:s.firstName||"",lastName:s.lastName||"",street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),f=S=>S.split(" ").map(L=>L.charAt(0).toUpperCase()+L.slice(1).toLowerCase()).join(" "),b=()=>{m({...u,phones:[...u.phones,""]})},_=S=>{u.phones.length>1&&m({...u,phones:u.phones.filter((L,E)=>E!==S)})},N=(S,L)=>{const E=[...u.phones];E[S]=L,m({...u,phones:E})},W=()=>{m({...u,emails:[...u.emails,""]})},I=S=>{u.emails.length>1&&m({...u,emails:u.emails.filter((L,E)=>E!==S)})},x=(S,L)=>{const E=[...u.emails];E[S]=L,m({...u,emails:E})},C=()=>{if(!u.firstName.trim()||!u.lastName.trim()){alert("First name and last name are required");return}i(s.id,u)};return o.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:o.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[o.jsxs("div",{className:"flex justify-between items-start mb-6",children:[o.jsxs("div",{children:[o.jsxs("h2",{className:"text-2xl",style:{color:"var(--color-gold)"},children:[s.firstName," ",s.lastName]}),o.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:s.isRevisit?"Revisiting Customer":"First Time Customer"})]}),o.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:o.jsx(xt,{size:24})})]}),o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Customer Information"}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"First Name *"}),o.jsx("input",{type:"text",value:u.firstName,onChange:S=>m({...u,firstName:f(S.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Last Name *"}),o.jsx("input",{type:"text",value:u.lastName,onChange:S=>m({...u,lastName:f(S.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),o.jsxs("div",{className:"mb-4",children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Street Address"}),o.jsx("input",{type:"text",value:u.street,onChange:S=>m({...u,street:f(S.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{className:"mb-4",children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),o.jsx("input",{type:"text",value:u.suiteUnit,onChange:S=>m({...u,suiteUnit:S.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"City"}),o.jsx("input",{type:"text",value:u.city,onChange:S=>m({...u,city:f(S.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"State"}),o.jsx("input",{type:"text",value:u.state,onChange:S=>m({...u,state:S.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"ZIP"}),o.jsx("input",{type:"text",value:u.zip,onChange:S=>m({...u,zip:S.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),o.jsxs("div",{className:"mb-4",children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Phones"}),u.phones.map((S,L)=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("input",{type:"text",value:S,onChange:E=>N(L,E.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),o.jsx("button",{onClick:()=>_(L),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:o.jsx(xt,{size:16})})]},L)),o.jsx("button",{onClick:b,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Phone"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Emails"}),u.emails.map((S,L)=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("input",{type:"text",value:S,onChange:E=>x(L,E.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),o.jsx("button",{onClick:()=>I(L),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:o.jsx(xt,{size:16})})]},L)),o.jsx("button",{onClick:W,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Email"})]})]}),s.referralSources&&s.referralSources.length>0&&o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Referral Information"}),o.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:s.referralSources.map((S,L)=>o.jsxs("div",{className:"mb-3 last:mb-0",children:[o.jsxs("p",{style:{color:"var(--color-gold)"},children:["• ",S.type]}),S.name&&o.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Name: ",S.name]}),S.phone&&o.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Phone: ",S.phone]})]},L))})]}),s.partySize&&o.jsxs("div",{className:"mb-8",children:[o.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Party Information"}),o.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Adults"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.adults})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Minors"}),o.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.minors})]})]}),s.visitors&&s.visitors.length>0&&o.jsxs("div",{children:[o.jsx("h4",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Visitors & Signatures"}),o.jsx("div",{className:"space-y-4",children:s.visitors.map((S,L)=>o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:S.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[o.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[o.jsx("span",{className:"font-medium",style:{color:"var(--color-text-white)"},children:S.name}),S.isMain&&o.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),S.isMinor&&o.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor (No signature required)"})]}),S.signature&&!S.isMinor&&o.jsxs("div",{children:[o.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-text-gray)"},children:"Signature:"}),o.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"white",border:"1px solid var(--color-border)",maxWidth:"400px"},children:o.jsx("img",{src:S.signature,alt:`${S.name} signature`,style:{width:"100%",height:"auto",maxHeight:"150px",objectFit:"contain"}})})]})]},L))})]})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Cancel"}),o.jsx("button",{onClick:C,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Save Changes"})]})]})})}function Xh({username:s,onLogout:d,checkIns:i,onMarkAsDone:u}){const[m,f]=k.useState("queue"),[b,_]=k.useState([]),[N,W]=k.useState([]),[I,x]=k.useState(null),[C,S]=k.useState(!1),[L,E]=k.useState(1),[T,J]=k.useState(1),H=15,[$,Z]=k.useState(new Date().getMonth()+1),[ee,A]=k.useState(new Date().getDate()),[V,F]=k.useState(new Date().getFullYear());k.useEffect(()=>{O()},[i]),k.useEffect(()=>{m==="history"&&oe()},[m,$,ee,V,i]);const O=async()=>{const D=i.filter(p=>p.status==="waiting").sort((p,y)=>new Date(p.checkInTime).getTime()-new Date(y.checkInTime).getTime());_(D)},oe=async()=>{const D=i.filter(p=>{if(p.status!=="done"&&p.status!=="helped")return!1;const y=new Date(p.checkInTime);return y.getMonth()+1===$&&y.getDate()===ee&&y.getFullYear()===V});W(D)},me=D=>{x(D),S(!0)},Pe=async D=>{const p=b.filter(y=>y.id!==D);_(p),u(D)},ke=async(D,p)=>{const y=b.map(K=>K.id===D?{...K,...p}:K),G=N.map(K=>K.id===D?{...K,...p}:K);_(y),W(G),S(!1)},Ee=N.length,Ce=N.filter(D=>!D.isRevisit).length,ze=N.filter(D=>D.isRevisit).length,Ne=["January","February","March","April","May","June","July","August","September","October","November","December"],Q=Array.from({length:31},(D,p)=>p+1),ae=[2024,2025,2026,2027];return o.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("header",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:No,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),o.jsx("span",{className:"text-xl font-medium",style:{color:"var(--color-text-white)"},children:"Reliance Surfaces"})]}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsxs("span",{style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]}),o.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[o.jsx(Nl,{size:18}),"Logout"]})]})]})}),o.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:o.jsxs("div",{className:"flex px-6",children:[o.jsxs("button",{onClick:()=>f("queue"),className:"px-6 py-4 font-medium border-b-2",style:{color:m==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderColor:m==="queue"?"var(--color-gold)":"transparent"},children:["Queue (",b.length,")"]}),o.jsx("button",{onClick:()=>f("history"),className:"px-6 py-4 font-medium border-b-2",style:{color:m==="history"?"var(--color-gold)":"var(--color-text-gray)",borderColor:m==="history"?"var(--color-gold)":"transparent"},children:"History"})]})}),o.jsx("div",{className:"p-6",children:m==="queue"?o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl mb-6",style:{color:"var(--color-text-white)"},children:"Customer Queue"}),b.length===0?o.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:o.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No customers in queue"})}):o.jsx("div",{className:"space-y-4",children:b.slice((L-1)*H,L*H).map(D=>o.jsx(Vh,{customer:D,onView:me,onDone:Pe},D.id))}),b.length>H&&o.jsxs("div",{className:"flex justify-center mt-4",children:[o.jsx("button",{onClick:()=>E(L-1),disabled:L===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),o.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",L," of ",Math.ceil(b.length/H)]}),o.jsx("button",{onClick:()=>E(L+1),disabled:L*H>=b.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]}):o.jsxs("div",{children:[o.jsxs("div",{className:"mb-6",children:[o.jsx("h2",{className:"text-2xl mb-4",style:{color:"var(--color-text-white)"},children:"Daily Visitors"}),o.jsxs("div",{className:"flex flex-wrap gap-4 mb-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Month"}),o.jsx("select",{value:$,onChange:D=>Z(parseInt(D.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:Ne.map((D,p)=>o.jsx("option",{value:p+1,children:D},p))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Day"}),o.jsx("select",{value:ee,onChange:D=>A(parseInt(D.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:Q.map(D=>o.jsx("option",{value:D,children:D},D))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Year"}),o.jsx("select",{value:V,onChange:D=>F(parseInt(D.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:ae.map(D=>o.jsx("option",{value:D,children:D},D))})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Visitors"}),o.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:Ee})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"New Customers"}),o.jsx("p",{className:"text-3xl font-bold",style:{color:"#3B82F6"},children:Ce})]}),o.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[o.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Revisits"}),o.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:ze})]})]})]}),N.length===0?o.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:o.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No visitors for selected date"})}):o.jsx("div",{className:"space-y-4",children:N.slice((T-1)*H,T*H).map(D=>o.jsx("div",{className:"p-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},onClick:()=>me(D),children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:D.firstName?.charAt(0).toUpperCase()||"?"}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsxs("p",{className:"font-medium",style:{color:"var(--color-text-white)"},children:[D.firstName," ",D.lastName]}),o.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:D.isRevisit?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:D.isRevisit?"var(--color-gold)":"#3B82F6"},children:D.isRevisit?"Revisiting":"First Time"})]}),o.jsx("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:D.phones?.[0]||"No phone"})]})]}),o.jsx("div",{className:"text-right",children:o.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["👥 ",(D.partySize?.adults||0)+(D.partySize?.minors||0)," visitors"]})})]})},D.id))}),N.length>H&&o.jsxs("div",{className:"flex justify-center mt-4",children:[o.jsx("button",{onClick:()=>J(T-1),disabled:T===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),o.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",T," of ",Math.ceil(N.length/H)]}),o.jsx("button",{onClick:()=>J(T+1),disabled:T*H>=N.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]})}),C&&I&&o.jsx(Qh,{customer:I,onClose:()=>{S(!1),x(null)},onSave:ke})]})}function Kh(s){const d=s.materials||[],i=d.length>0||s.selectionSheetNumber||s.fabricator||s.draftStep>0;return{id:s.id,isRevisit:s.isRevisit||!1,firstName:s.firstName,lastName:s.lastName,street:s.street,suiteUnit:s.suiteUnit||"",city:s.city,state:s.state,zip:s.zip,country:s.country,phones:s.phones||[],emails:s.emails||[],referralSources:s.referralSources||[],signature:s.signature||"",checkInTime:new Date(s.checkInTime),helpedTime:s.helpedTime?new Date(s.helpedTime):void 0,status:s.status,currentlyHelpedBy:s.currentlyHelpedBy||void 0,partySize:s.partySize||{adults:1,minors:0},visitors:s.visitors||[],draft:i?{step:s.status==="helped"?3:s.draftStep||0,editedCustomerData:{},materials:d,selectedFabricator:s.fabricator||void 0,helpedBy:s.helpedBy||void 0,selectionSheetNumber:s.selectionSheetNumber||"",isHold:d.some(u=>u.hold)}:void 0}}function Gh(){const[s,d]=k.useState(()=>{const U=localStorage.getItem("staff2Session");if(U)try{const{expiry:ie}=JSON.parse(U);if(Date.now()<ie)return"staff2-dashboard"}catch{}return"home"}),[i,u]=k.useState({}),[m,f]=k.useState([]),[b,_]=k.useState(""),[N,W]=k.useState({adults:1,minors:0}),[I,x]=k.useState(!1),[C,S]=k.useState(null),[L,E]=k.useState([]),[T,J]=k.useState(0),[H,$]=k.useState([]),[Z,ee]=k.useState(!1),[A,V]=k.useState(null),[F,O]=k.useState(()=>{const U=localStorage.getItem("staff2Session");if(U)try{const{username:ie,expiry:te}=JSON.parse(U);if(Date.now()<te)return ie;localStorage.removeItem("staff2Session")}catch{localStorage.removeItem("staff2Session")}return""});k.useEffect(()=>{fetch("/api/check-ins").then(U=>U.json()).then(U=>{U.success&&Array.isArray(U.data)&&f(U.data.map(Kh))}).catch(U=>console.error("Failed to load check-ins:",U))},[]);const oe=U=>{u({...i,...U}),d("customer-step2")},me=U=>{u({...i,...U}),d("customer-step3a")},Pe=U=>{W(U),d("customer-step3b")},ke=U=>{console.log("=== STEP 3B NEXT ==="),console.log("Signature data received:",{hasSignature:!!U.signature,signatureLength:U.signature?.length,signaturePreview:U.signature?.substring(0,50)}),S(U),N.adults>1?(J(0),E([]),d("customer-step3c")):N.minors>0?d("customer-step3d"):Ne(void 0,void 0,U)},Ee=U=>{const ie=[...L];ie[T]=U,E(ie);const te=N.adults-2;T<te?J(T+1):N.minors>0?d("customer-step3d"):Ne(void 0,ie)},Ce=()=>{T===0?d("customer-step3b"):J(T-1)},ze=U=>{console.log("=== STEP 3D SUBMIT ==="),console.log("Received names:",U),console.log("Names length:",U.length),Ne(U)},Ne=async(U,ie,te)=>{if(Z)return;ee(!0);const xe=U!==void 0?U:H,qe=ie!==void 0?ie:L,Oe=te!==void 0?te:C,nr=[{name:`${i.firstName} ${i.lastName}`,signature:Oe?.signature||"",isMain:!0,isMinor:!1},...qe.map(He=>({name:He.name,signature:He.signature,isMain:!1,isMinor:!1})),...xe.map(He=>({name:He,signature:"",isMain:!1,isMinor:!0}))],vr={firstName:i.firstName,lastName:i.lastName,street:i.street,suiteUnit:i.suiteUnit||"",city:i.city,state:i.state,zip:i.zip,country:i.country,phones:i.phones,emails:i.emails,referralSources:i.referralSources||[],signature:Oe?.signature||"",partySize:N,visitors:nr,checkInTime:new Date().toISOString()};try{const He=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(vr)}),Ze=await He.json();if(!He.ok){console.error("Check-in API error:",Ze);const Rr=He.status===409?Ze.error:"Check-in failed. Please try again.";alert(Rr),He.status===409&&d("customer-step1"),ee(!1);return}console.log("Check-in successful:",Ze.data.id),Ze.data.waiverPdfUrl&&console.log("Waiver PDF:",Ze.data.waiverPdfUrl);const Er={id:Ze.data.id,...i,signatureData:Oe?.signature||"",checkInTime:new Date(Ze.data.checkInTime),status:"waiting",partySize:N,visitors:nr};f([...m,Er])}catch(He){console.error("Check-in network error:",He),alert("Check-in failed. Please check your connection and try again."),ee(!1);return}x(N.minors>0),W({adults:1,minors:0}),S(null),E([]),J(0),$([]),ee(!1),d("customer-step4")},Q=k.useCallback(()=>{u({}),x(!1),W({adults:1,minors:0}),S(null),E([]),J(0),$([]),d("home")},[]),ae=(U,ie)=>{if(ie==="staff2"){de(U);return}else _(U),d(ie==="pricing"?"pricing-dashboard":ie==="analysis"?"analysis-dashboard":"staff-dashboard")},D=()=>{_(""),d("home")},p=U=>{f(ie=>ie.map(te=>te.id===U?{...te,status:"helped",helpedTime:new Date,currentlyHelpedBy:void 0}:te))},y=(U,ie)=>{f(te=>te.map(xe=>xe.id===U?{...xe,currentlyHelpedBy:ie}:xe))},G=U=>{f(ie=>ie.map(te=>te.id===U?{...te,priced:!0,pricedTime:new Date}:te))},K=U=>{f(ie=>ie.map(te=>te.id===U?{...te,checkInTime:new Date}:te))},fe=U=>{V(U),d("revisit-step1")},ne=U=>{V(ie=>({...ie,...U})),d("revisit-step2")},we=U=>{V(ie=>({...ie,referralSources:U})),d("revisit-waiver")},je=async U=>{if(Z)return;ee(!0);const ie={firstName:A.firstName,lastName:A.lastName,street:A.street,suiteUnit:A.suiteUnit||"",city:A.city,state:A.state,zip:A.zip,country:A.country,phones:A.phones,emails:A.emails,referralSources:A.referralSources||[],signature:U.signature,partySize:U.partySize,visitors:U.visitors,checkInTime:new Date().toISOString(),isRevisit:!0};try{const te=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ie)}),xe=await te.json();if(!te.ok){alert("Revisit check-in failed. Please try again."),ee(!1);return}const qe={id:xe.data.id,...A,isRevisit:!0,signature:U.signature,checkInTime:new Date(xe.data.checkInTime),status:"waiting",partySize:U.partySize,visitors:U.visitors};f(Oe=>[...Oe,qe])}catch{alert("Revisit check-in failed. Please check your connection."),ee(!1);return}ee(!1),d("revisit-confirmation")},de=U=>{const ie=Date.now()+288e5;localStorage.setItem("staff2Session",JSON.stringify({username:U,expiry:ie})),O(U),d("staff2-dashboard")},Ie=()=>{localStorage.removeItem("staff2Session"),O(""),d("home")},ir=async U=>{f(ie=>ie.map(te=>te.id===U?{...te,status:"done"}:te));try{await fetch(`/api/check-ins/${U}/done`,{method:"PATCH"})}catch(ie){console.error("Failed to persist done status:",ie)}},Yr=(U,ie)=>{f(te=>te.map(xe=>xe.id===U?{...xe,draft:ie}:xe))},Te=U=>{m.filter(xe=>xe.firstName===U.firstName&&xe.lastName===U.lastName&&xe.status==="helped"&&xe.draft?.selectionSheetNumber);let ie=U.draft?.selectionSheetNumber||"";if(ie){const xe=ie.split("."),qe=xe[0];if(xe.length===1)ie=`${qe}.1`;else{const Oe=parseInt(xe[1])||0;ie=`${qe}.${Oe+1}`}}const te={...U,id:Date.now().toString(),checkInTime:new Date,status:"waiting",helpedTime:void 0,draft:{step:3,editedCustomerData:{},selectedFabricator:U.draft?.selectedFabricator,materials:U.draft?.materials||[],helpedBy:b,selectionSheetNumber:ie,isHold:!1,isRevisit:!0,previousMaterialsCount:(U.draft?.materials||[]).length}};f([...m,te])},w=Z?o.jsx(yl,{fullScreen:!0,color:"#ccb331",text:"Submitting your check-in…"}):null;if(s==="customer-step1")return o.jsxs(o.Fragment,{children:[w,o.jsx(ah,{onNext:oe,initialData:i})]});if(s==="customer-step2")return o.jsxs(o.Fragment,{children:[w,o.jsx(ih,{onNext:me,onBack:()=>d("customer-step1"),initialData:i})]});if(s==="customer-step3a")return o.jsxs(o.Fragment,{children:[w,o.jsx(ch,{onNext:Pe,onBack:()=>d("customer-step2"),initialData:N})]});if(s==="customer-step3b")return o.jsxs(o.Fragment,{children:[w,o.jsx(dh,{onNext:ke,onBack:()=>d("customer-step3a"),initialData:C||void 0})]});if(s==="customer-step3c"){const U=T<L.length?L[T]:void 0;return o.jsxs(o.Fragment,{children:[w,o.jsx(ph,{onNext:Ee,onBack:Ce,visitorNumber:T+2,totalAdults:N.adults,initialData:U},T)]})}return s==="customer-step3d"?o.jsxs(o.Fragment,{children:[w,o.jsx(hh,{onNext:ze,onBack:()=>{N.adults>1?(J(N.adults-2),d("customer-step3c")):d("customer-step3b")},numberOfMinors:N.minors})]}):s==="customer-step4"?o.jsx(mh,{customerName:`${i.firstName} ${i.lastName}`,hasMinors:I,onReturnHome:Q}):s==="staff-login"?o.jsx(fh,{onLogin:ae}):s==="staff-dashboard"?o.jsx(Fh,{username:b,onLogout:D,checkIns:m,onMarkAsHelped:p,onSaveDraft:Yr,onRevisit:Te,onUpdateCurrentlyHelpedBy:y}):s==="pricing-dashboard"?o.jsx(Ih,{username:b,onLogout:D,checkIns:m,fabricators:[],onComplete:G,onResetHoldDate:K}):s==="analysis-dashboard"?o.jsx(Lh,{username:b,onLogout:D,checkIns:m,fabricators:[],onComplete:G,onResetHoldDate:K}):s==="revisit-lookup"?o.jsx(Hh,{checkIns:m,onCustomerFound:fe,onBack:()=>d("home")}):s==="revisit-step1"?o.jsx(Uh,{customerData:A,onNext:ne,onBack:()=>d("revisit-lookup")}):s==="revisit-step2"?o.jsx(Bh,{referralSources:A?.referralSources||[],onNext:we,onBack:()=>d("revisit-step1")}):s==="revisit-waiver"?o.jsxs(o.Fragment,{children:[w,o.jsx(Yh,{customerName:`${A?.firstName} ${A?.lastName}`,onSubmit:je,onBack:()=>d("revisit-step2")})]}):s==="revisit-confirmation"?o.jsx(qh,{customerName:`${A?.firstName} ${A?.lastName}`,onReturnHome:Q}):s==="staff2-login"?o.jsx($h,{onLogin:de}):s==="staff2-dashboard"?o.jsx(Xh,{username:F,onLogout:Ie,checkIns:m,onMarkAsDone:ir}):o.jsx(zp,{onCustomerCheckIn:()=>d("customer-step1"),onStaffLogin:()=>d("staff-login"),onRevisit:()=>d("revisit-lookup"),onStaff2Login:()=>d("staff2-login")})}Ep.createRoot(document.getElementById("root")).render(o.jsx(Gh,{}));
